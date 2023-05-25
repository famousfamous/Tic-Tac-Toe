//declaring a 3D array
const gameData = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0],
];

//defining the base variables for the game play.
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;


const players = [
    {
        name: "",
        symbol: 'X'
    },
    {
        name: "",
        symbol: 'O'
    },
];

//decldaring the variables for access the modal
const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

// first declaring variable to fetch btn for editing player names
const editPlay1BtnElement = document.getElementById("edit-play-1-btn");
const editPlay2BtnElement = document.getElementById("edit-play-2-btn");
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');
// const gameFieldElements = document.querySelectorAll('#game-board li')
const gameBoardElement = document.getElementById('game-board');


editPlay1BtnElement.addEventListener('click', openPlayerConfig);
editPlay2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);
startNewGameBtnElement.addEventListener('click', startNewGame);

//now looping through the arrays of li items in the #game-board ul item
// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener('click', selectGameFiled);
// }
gameBoardElement.addEventListener('click', selectGameFiled);