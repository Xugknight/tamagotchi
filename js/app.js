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
    state = {
        boredom: 0,
        hunger: 0,
        sleepiness: 0,
    };
    gameOver = false;
    timer = setInterval(runGame, 2000);
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
};  

function updateStates() {
    state.boredom += Math.floor(Math.random() * 4);
    state.hunger += Math.floor(Math.random() * 4);
    state.sleepiness += Math.floor(Math.random() * 4);
};

function checkGameOver() {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true;
    }
};
    

/*----------------------------- Event Listeners -----------------------------*/


