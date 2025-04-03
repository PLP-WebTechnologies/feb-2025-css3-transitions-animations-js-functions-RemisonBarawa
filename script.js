// script.js

// Local Storage for Theme Preference
const themeButton = document.getElementById('themeButton');
const themeDisplay = document.getElementById('themeDisplay');
const body = document.body;
const storedTheme = localStorage.getItem('theme');

function setTheme(theme) {
    if (theme === 'dark') {
        body.style.backgroundColor = '#333';
        body.style.color = '#f4f4f4';
        themeDisplay.textContent = 'Current Theme: Dark';
    } else {
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = '#333';
        themeDisplay.textContent = 'Current Theme: Light';
    }
    localStorage.setItem('theme', theme);
}

// Apply stored theme on load
if (storedTheme) {
    setTheme(storedTheme);
}

themeButton.addEventListener('click', function() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// CSS Animation Triggered by User Action
const animateButton = document.getElementById('animateButton');
const animatedBox = document.getElementById('animatedBox');

animateButton.addEventListener('click', function() {
    animatedBox.classList.toggle('animate');
    if (animatedBox.classList.contains('animate')) {
        this.textContent = 'Stop Animation';
    } else {
        this.textContent = 'Start Animation';
    }
});

// Local Storage for User Preferences (Username)
const savePreferenceButton = document.getElementById('savePreferenceButton');
const usernameInput = document.getElementById('username');
const usernameDisplay = document.getElementById('usernameDisplay');
const storedUsername = localStorage.getItem('username');

// Display stored username on load
if (storedUsername) {
    usernameDisplay.textContent = `Stored Username: ${storedUsername}`;
    usernameInput.value = storedUsername;
}

savePreferenceButton.addEventListener('click', function() {
    const username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem('username', username);
        usernameDisplay.textContent = `Stored Username: ${username}`;
        alert(`Username "${username}" saved!`);
    } else {
        alert('Please enter a username.');
    }
});
