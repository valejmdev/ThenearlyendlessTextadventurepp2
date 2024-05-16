document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href !== 'index.html'){
        const usernameSpan = document.getElementById('headline-username'); 
        const storedUsername = sessionStorage.getItem('username');
        usernameSpan.textContent = storedUsername;
    }
})

console.log(window.location.href);
const startForm = document.getElementById('username');
const usernameInput = document.getElementById('username');

startForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const username = usernameInput.value;
    sessionStorage.setItem('username', username);
    window.location.href = 'theme.html';
});