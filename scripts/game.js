function startNewGame() {
    if (players[0].name === "" || players[1].name === "") {
        alert('Please set custom names for both players!');
        return;
    }
    gameAreaElement.style.display = 'block';
}

//the function for each game board li
function selectGameFiled() {
    
}