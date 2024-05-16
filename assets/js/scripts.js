


const startForm = document.getElementById('username');
const usernameInput = document.getElementById('username');

startForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const username = usernameInput.value;
    sessionStorage.setItem('username', username);
    window.location.href = 'theme.html';
});