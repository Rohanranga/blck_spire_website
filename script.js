document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');

    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
    });

    navOverlay.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
        }
    });
});
