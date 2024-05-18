document.addEventListener('DOMContentLoaded', function () {
    const endgameText = sessionStorage.getItem('endgameText');
    const endgameTextDiv = document.getElementById('endgame-text-selector');
    if (endgameText) {
        endgameTextDiv.innerHTML = endgameText;
    } else {
        endgameTextDiv.innerHTML = 'No endgame text found.';
    }
});