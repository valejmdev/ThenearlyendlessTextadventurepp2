//creating username variable and storing value in sessionStory
const startForm = document.getElementById('username-form');
const usernameInput = document.getElementById('username');
document.getElementById('username-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = usernameInput.value;
    sessionStorage.setItem('username', username);
    startForm.submit();
});