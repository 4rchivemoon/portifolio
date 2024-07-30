document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.body.classList.add(currentTheme + '-mode');
    if (currentTheme === 'dark') {
        themeIcon.src = "https://img.icons8.com/material-outlined/24/000000/sun.png"; // Ícone de Sol para modo claro
    }

    themeButton.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
        document.body.classList.toggle('light-mode');
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            themeIcon.src = "https://img.icons8.com/material-outlined/24/000000/sun.png";
        } else {
            themeIcon.src = "https://img.icons8.com/material-outlined/24/000000/moon-satellite.png";
        }
    });
});

