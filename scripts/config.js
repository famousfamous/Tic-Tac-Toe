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

  //the next leave the name as is and closes the modal
  formElement.firstElementChild.lastElementChild.value = ""
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

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayname;

//   if (editedPlayer === 1) {
//     players[0].name = enteredPlayname;
//   } else {
//     players[1].name = enteredPlayname;
//   }
//while the abov commented out code works, there's even a shorter more concise way to write the it

players[editedPlayer -1].name = enteredPlayname;

// the next line closes the modal automatically
closePlayerConfig();
}
