// Hamburger function - toggle menu visibility and update accessibility attributes
document.addEventListener('DOMContentLoaded', function () {
    const hambrgr = document.querySelector('.hambrgr');
    const menu = document.querySelector('.menu');

    hambrgr.addEventListener('click', function () {
        // Toggle the 'active' class on the menu and hamburger elements
        menu.classList.toggle('active');
        hambrgr.classList.toggle('active');
        // Check if the menu is active and update aria attributes accordingly
        const isActive = menu.classList.contains('active');
        hambrgr.setAttribute('aria-expanded', isActive);
        hambrgr.setAttribute('aria-label', isActive ? 'Close Menu' : 'Open Menu');
    });
});

// Select the element with the attribute "data-slider"
const slider = document.querySelector("[data-slider]");

// Select specific elements within the slider using their data attributes
const track = slider.querySelector("[data-slider-track]");
const prev = slider.querySelector("[data-slider-prev]");
const next = slider.querySelector("[data-slider-next]");

// Check if the "track" element exists
if (track) {
    // Add a click event listener to the "prev" button
    prev.addEventListener("click", () => {
        // Remove the "disabled" attribute from the "next" button
        next.removeAttribute("disabled");

        // Scroll the "track" element to the left by the width of the first child, with smooth motion
        track.scrollTo({
            left: track.scrollLeft - track.firstElementChild.offsetWidth,
            behavior: "smooth"
        });
    });

    // Add a click event listener to the "next" button
    next.addEventListener("click", () => {
        // Remove the "disabled" attribute from the "prev" button
        prev.removeAttribute("disabled");

        // Scroll the "track" element to the left by the width of the first child, with smooth motion
        track.scrollTo({
            left: track.scrollLeft + track.firstElementChild.offsetWidth,
            behavior: "smooth"
        });
    });
}
