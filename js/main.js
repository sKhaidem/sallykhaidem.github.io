// ==========================================================
// Sally Khaidem — Academic Website
// main.js
// Handles nav scroll state and mobile menu only. Deliberately
// does NOT control content visibility — all content is shown
// by CSS regardless of whether this script runs.
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

  try {

    // ---- Sticky nav: blur/opaque after scrolling ----
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const setScrolled = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
      };
      setScrolled();
      window.addEventListener('scroll', setScrolled, { passive: true });
    }

    // ---- Mobile menu toggle ----
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const expanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', expanded);
      });

      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
      });
    }

  } catch (err) {
    console.error('main.js error (non-critical, content unaffected):', err);
  }

});
