/**
 * Abre y cierra el menú lateral añadiendo o quitando la clase 'active'
 */
function toggleMenu() {
    const menu = document.getElementById('sidebar');
    if (menu) {
        menu.classList.toggle('active');
    }
}

/**
 * Detector de clics en toda la página:
 * Si el usuario hace clic fuera del menú mientras está abierto, 
 * el menú se cerrará automáticamente.
 */
document.addEventListener('click', function(event) {
    const menu = document.getElementById('sidebar');
    const btn = document.querySelector('.menu-toggle');
    
    // Verificamos si los elementos existen antes de actuar
    if (menu && btn) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnButton = btn.contains(event.target);
        const isMenuOpen = menu.classList.contains('active');

        // Si el menú está abierto y el clic no fue dentro ni en el botón de hamburguesa
        if (isMenuOpen && !isClickInsideMenu && !isClickOnButton) {
            menu.classList.remove('active');
        }
    }
});