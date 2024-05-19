// Function to paste the stored endgame Text
document.addEventListener('DOMContentLoaded', function () {
    //Theme display on game page
    const themeSpan = document.getElementById('headline-theme');
    const storedTheme = sessionStorage.getItem('theme');
    themeSpan.textContent = storedTheme;

    // Page Load Function pasting username in H1
    const usernameSpan = document.getElementById('headline-username');
    const storedUsername = sessionStorage.getItem('username');
    usernameSpan.textContent = storedUsername;


    const endgameText = sessionStorage.getItem('endgameText');
    const endgameTextDiv = document.getElementById('endgame-text-selector');
    if (endgameText) {
        endgameTextDiv.innerHTML = endgameText;
    } else {
        endgameTextDiv.innerHTML = 'No endgame text found.';
    }
});
// Function to clear sessionStorage and redirect to index.html
function resetGame() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}