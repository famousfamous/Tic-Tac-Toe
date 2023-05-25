//Now, I create a 'Restart Game' function to sets a new instance of the game.
function resetGameStatus() {
  activePlayer = 0;
  currentRound = 0;
  gameIsOver = false;
  gameOverElement.firstElementChild.innerHTML =
    'You won, <span id="active-player-name">PLAY NAME</span>!';
    gameOverElement.style.display = 'none';

    //now resetting all the game data
    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex]
            gameBoardItemElement.textContent = "";
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom names for both players!");
    return;
  }

  //before call the active player element, we reset the game
  resetGameStatus();


  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

//the next function swtiches the players
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

//the function for each game board li
function selectGameFiled(event) {
  // console.log(event.target.tagName);
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }
  const selectedField = event.target;
  //this will log each play data by col or row into the 3d array in app.js
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field!");
    return;
  }

  selectedField.textContent = players[activePlayer].Symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  //this code will log the winner so far
  const winnderID = checkForGameOver();

  //now call the endgame function
  if (winnderID !== 0) {
    endGame(winnderID);
  }

  //make sure to count the number of rounds before the next players takes the turn
  currentRound++;

  //after the above, now we call the switch player function
  switchPlayer();
}

//code to determine Gave Over
function checkForGameOver() {
  // Checking the rows for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  // Checking the columns for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // Diagonal: Top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // Diagonal: Bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

//the endgame code
function endGame(winnderID) {
    gameIsOver = true;
  gameOverElement.style.display = "block";

  if (winnderID > 0) {
    //get the winner's name by fetching it from the players array.
    const winnerName = players[winnderID - 1].name;
    gameOverElement.firstElementChild.textContent =
      "You won, " + winnerName + "!";
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
