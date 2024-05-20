document.addEventListener('DOMContentLoaded', function () {
    // Page Load Function pasting username in H1
    const usernameSpan = document.getElementById('headline-username');
    const storedUsername = sessionStorage.getItem('username');
    usernameSpan.textContent = storedUsername;

    // Theme Selector Page
    const themeForm = document.getElementById('theme-selector-form');
    if (themeForm) {
        themeForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let themeSelection = document.getElementById('theme');
            let themeValue = themeSelection.value;
            sessionStorage.setItem('theme', themeValue);
            themeForm.submit();
        });
    }
});