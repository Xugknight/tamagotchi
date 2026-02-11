/*-------------------------------- Constants --------------------------------*/

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
    if (state.boredom >= 15 || state.hunger >= 15 || state.sleepiness >= 15) {
        gameOver = true;
    };
};

function handleStatReset(stat) {
    state[stat] = 0;
    render();
};

/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', () => handleStatReset('boredom'));
feedBtnEl.addEventListener('click', () => handleStatReset('hunger'));
sleepBtnEl.addEventListener('click', () => handleStatReset('sleepiness'));
resetBtnEl.addEventListener('click', init);
