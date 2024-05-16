document.addEventListener('DOMContentLoaded', function() {
    if (document.title !== 'The nearly endless Text-Adventure Login'){
        const usernameSpan = document.getElementById('headline-username'); 
        const storedUsername = sessionStorage.getItem('username');
        usernameSpan.textContent = storedUsername;
    }
})

const startForm = document.getElementById('username-form');
const usernameInput = document.getElementById('username');

document.getElementById('username-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = usernameInput.value;
    sessionStorage.setItem('username', username);
    startForm.submit();
});