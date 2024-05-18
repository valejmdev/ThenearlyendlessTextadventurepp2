// Function to paste the stored endgame Text
document.addEventListener('DOMContentLoaded', function () {
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