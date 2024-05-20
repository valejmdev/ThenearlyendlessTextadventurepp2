// Function to paste the stored endgame Text
document.addEventListener('DOMContentLoaded', function () {
    // Page Load Function pasting username in thank you text
    const usernameSpan = document.getElementById('headline-username');
    const storedUsername = sessionStorage.getItem('username');
    usernameSpan.textContent = storedUsername;

    // Function that pastes the last part on endgame div
    const endgameText = sessionStorage.getItem('endgameText');
    const endgameTextDiv = document.getElementById('endgame-text-selector');
    if (endgameText) {
        endgameTextDiv.innerHTML = endgameText;
    } else {
        endgameTextDiv.innerHTML = 'No endgame text found.';
    }
});
// Function to clear sessionStorage and redirect to index.html
let resetButton = document.getElementById('start-new-button');
resetButton.addEventListener('click', resetGame);

function resetGame() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}