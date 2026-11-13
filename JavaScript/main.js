const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isExpanded));
        menuToggle.setAttribute('aria-label', isExpanded ? 'Abrir menú' : 'Cerrar menú');
        mainNav.classList.toggle('active', !isExpanded);
    });

    mainNav.addEventListener('click', (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            mainNav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menú');
        }
    });
}

const backToTop = document.getElementById('backToTop');

if (backToTop) {
    const updateBackToTopVisibility = () => {
        backToTop.classList.toggle('visible', window.scrollY > 300);
    };

    window.addEventListener('scroll', updateBackToTopVisibility);
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    updateBackToTopVisibility();
}
