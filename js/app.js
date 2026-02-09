/*-------------------------------- Constants --------------------------------*/
const TICK_MS = 5 * 60 * 1000;     // 5 minutes per tick
const MAX_STAT = 100;             // lose at 100+
const WARNING_STAT = 70;          // warning zone
const ACTION_DELTA = 15;          // buttons reduce by 15 (not reset)
const MAX_CATCHUP_TICKS = 12;     // cap catch-up (e.g., max 1 hour worth if tab was asleep)

/*---------------------------- Variables (state) ----------------------------*/
let state; // tracks boredom, hunger, sleepiness
let timer; // track timer for game
let gameOver; // boolean for win/loss state


/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat');
const hungerStatEl = document.querySelector('#hunger-stat');
const sleepinessStatEl = document.querySelector('#sleepiness-stat');

const playBtnEl = document.querySelector('#play');
const feedBtnEl = document.querySelector('#feed');
const sleepBtnEl = document.querySelector('#sleep');

const gameMessageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#restart');

/*-------------------------------- Functions --------------------------------*/
init();

function init() {
    clearInterval(timer);

    state = {
        boredom: 0,
        hunger: 0,
        sleepiness: 0,
    };

    gameOver = false;

    resetBtnEl.classList.add('hidden');
    gameMessageEl.classList.add('hidden');

    timer = setInterval(runGame, 2000);
    render();
};

function runGame() {
    updateStates();
    checkGameOver();
    render();
};

function render() { 
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;

    if (gameOver) {
        clearInterval(timer);
        resetBtnEl.classList.remove('hidden');
        gameMessageEl.classList.remove('hidden');
    };
};  

function updateStates() {
    state.boredom += Math.floor(Math.random() * 4);
    state.hunger += Math.floor(Math.random() * 4);
    state.sleepiness += Math.floor(Math.random() * 4);
};

function checkGameOver() {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true;
    };
};

function playBtnClick() {
    state.boredom = 0;
    render();
};

function feedBtnClick() {
    state.hunger = 0;
    render();
};

function sleepBtnClick() {
    state.sleepiness = 0;
    render();
};

/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', playBtnClick);
feedBtnEl.addEventListener('click', feedBtnClick);
sleepBtnEl.addEventListener('click', sleepBtnClick);
resetBtnEl.addEventListener('click', init);
