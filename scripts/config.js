function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
}

function updatePlayerName() {
  playername1Element.textContent = "";
  playername1Element.textContent = enteredName;
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayname = formData.get("playername").trim();

  //adding extra validation to the input element
  if (!enteredPlayname) {
    //I could also use *enteredPlayername === ''* to mean that if the playername field is empty.
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayname
}
