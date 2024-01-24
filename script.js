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

// Selecteer het element met de attribuut "data-slider"
const slider = document.querySelector("[data-slider]");

// Selecteer specifieke elementen binnen de slider met behulp van hun data-attributen
const track = slider.querySelector("[data-slider-track]");
const prev = slider.querySelector("[data-slider-prev]");
const next = slider.querySelector("[data-slider-next]");

// Controleer of het "track" element bestaat
if (track) {
  // Voeg een klikgebeurtenisluisteraar toe aan de "prev" knop
  prev.addEventListener("click", () => {
    // Verwijder het "disabled" attribuut van de "next" knop
    next.removeAttribute("disabled");

    // Scroll het "track" element naar links met de breedte van het eerste kind, met soepele beweging
    track.scrollTo({
      left: track.scrollLeft - track.firstElementChild.offsetWidth,
      behavior: "smooth"
    });
  });

  // Voeg een klikgebeurtenisluisteraar toe aan de "next" knop
  next.addEventListener("click", () => {
    // Verwijder het "disabled" attribuut van de "prev" knop
    prev.removeAttribute("disabled");

    // Scroll het "track" element naar links met de breedte van het eerste kind, met soepele beweging
    track.scrollTo({
      left: track.scrollLeft + track.firstElementChild.offsetWidth,
      behavior: "smooth"
    });
  });

  // Voeg een scrollgebeurtenisluisteraar toe aan het "track" element
  track.addEventListener("scroll", () => {
    // Ontvang de totale scrollbare breedte en de buitenste breedte van het "track" element
    const trackScrollWidth = track.scrollWidth;
    const trackOuterWidth = track.clientWidth;

    // Verwijder het "disabled" attribuut van beide knoppen
    prev.removeAttribute("disabled");
    next.removeAttribute("disabled");

    // Als de scrollpositie aan het begin is, stel het "disabled" attribuut in op de "prev" knop
    if (track.scrollLeft <= 0) {
      prev.setAttribute("disabled", "");
    }

    // Als de scrollpositie aan het einde is, stel het "disabled" attribuut in op de "next" knop
    if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
      next.setAttribute("disabled", "");
    }
  });
}
