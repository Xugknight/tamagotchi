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
    console.log(state);
    render();
};

function render() { 
    
};  

function updateStates() {
    state.boredom += Math.floor(Math.random() * 4);
    state.hunger += Math.floor(Math.random() * 4);
    state.sleepiness += Math.floor(Math.random() * 4);
};
    

/*----------------------------- Event Listeners -----------------------------*/


