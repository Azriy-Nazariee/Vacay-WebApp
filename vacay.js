document.getElementById('menu-button').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display !== 'flex') {
        navMenu.style.display = 'flex';
    } else {
        navMenu.style.display = 'none';
    }
});

window.onload = function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.style.display = 'none';
};