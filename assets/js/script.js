let startSection = document.getElementById('startSection');
let instructionsSection = document.getElementById('instructions');

let instructionsBtn = document.getElementById('instructionsBtn');
let exitBtn = document.getElementById('exit');

// Show the instructions when instructions button is clicked.
instructionsBtn.addEventListener('click', showInstructions);
function showInstructions() {
    startSection.classList.add('hide');
    instructionsSection.classList.remove('hide');
}
// Exit the instructions when exit button is clicked.
exitBtn.addEventListener('click', exitInstructions);
function exitInstructions() {
    startSection.classList.remove('hide');
    instructionsSection.classList.add('hide');
}