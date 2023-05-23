//decldaring the variables for access the modal
const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');

// first declaring variable to fetch btn for editing player names
const editPlay1BtnElement = document.getElementById("edit-play-1-btn");
const editPlay2BtnElement = document.getElementById("edit-play-2-btn");
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');


editPlay1BtnElement.addEventListener('click', openPlayerConfig);
editPlay2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
