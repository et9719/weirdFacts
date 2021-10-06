let startSection = document.getElementById('startSection');
let instructionsSection = document.getElementById('instructions');
let feedbackSection = document.getElementById('form');

let instructionsBtn = document.getElementById('instructionsBtn');
let exitBtn = document.getElementById('exitInstructions');
let giveFeedbackBtn = document.getElementById('feedback');
let exitFeedbackBtn = document.getElementById('exitFeedback');


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
// Show the Feedback form when give feedback button is clicked.
giveFeedbackBtn.addEventListener('click', showFeedbackForm);
function showFeedbackForm() {
    startSection.classList.add('hide');
    feedbackSection.classList.remove('hide');
}
// Exit the instructions when exit button is clicked.
exitFeedbackBtn.addEventListener('click', exitFeedback);
function exitFeedback() {
    startSection.classList.remove('hide');
    feedbackSection.classList.add('hide');
}