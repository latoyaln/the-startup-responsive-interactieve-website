document.addEventListener('DOMContentLoaded', function () {
    const hambrgr = document.querySelector('.hambrgr');
    const menu = document.querySelector('.menu');

    hambrgr.addEventListener('click', function () {
        menu.classList.toggle('active');
        hambrgr.classList.toggle('active');
        const isActive = menu.classList.contains('active');
        hambrgr.setAttribute('aria-expanded', isActive);
        hambrgr.setAttribute('aria-label', isActive ? 'Close Menu' : 'Open Menu');
    });
});
