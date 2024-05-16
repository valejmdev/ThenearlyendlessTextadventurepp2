document.addEventListener('DOMContentLoaded', function () {
    // Page Load Function pasting username in H1
    if (document.title !== 'The nearly endless Text-Adventure Login') {
        const usernameSpan = document.getElementById('headline-username');
        const storedUsername = sessionStorage.getItem('username');
        usernameSpan.textContent = storedUsername;
    }

    // Theme Page
    const themeForm = document.getElementById('theme-selector-form');
    if (themeForm) {
        themeForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let themeSelection = document.getElementById('theme');
            console.log(themeSelection);
            let themeValue = themeSelection.value;
            console.log(themeValue);
            sessionStorage.setItem('theme', themeValue);
            themeForm.submit();
        });
    }
    const themeSpan = document.getElementById('headline-theme');
    const storedTheme = sessionStorage.getItem('theme');
    themeSpan.textContent = storedTheme;
});
const startForm = document.getElementById('username-form');
const usernameInput = document.getElementById('username');
document.getElementById('username-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = usernameInput.value;
    sessionStorage.setItem('username', username);
    startForm.submit();
});