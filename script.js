// Grab the button from the HTML
const themeToggleBtn = document.getElementById('theme-toggle');

// Listen for a click event
themeToggleBtn.addEventListener('click', () => {
    // Check what the current theme is
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Swap the theme based on the current state
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.textContent = 'Toggle Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Toggle Light Mode';
    }
});