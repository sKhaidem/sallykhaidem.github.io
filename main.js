// ==========================================================
// Sally Khaidem — Academic Website
// main.js
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

  try {

    // ---- Sticky nav: blur/opaque after scrolling ----
    const navbar = document.querySelector('.navbar');
    const setScrolled = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });

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

    // ---- Fade-up reveal on scroll ----
    const revealEls = document.querySelectorAll('.fade-up');
    if ('IntersectionObserver' in window && revealEls.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      revealEls.forEach(el => observer.observe(el));
    } else {
      revealEls.forEach(el => el.classList.add('show'));
    }

  } catch (err) {
    // Fail safe: never let a script error leave content hidden.
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('show'));
    console.error('main.js error (content remains visible):', err);
  }

});
