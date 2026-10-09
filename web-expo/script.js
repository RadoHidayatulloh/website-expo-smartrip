/* =========================================================
   SmartTrip Interactive Logic
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 2. FAQ Accordion Logic
  const faqToggles = document.querySelectorAll('.faq-toggle');

  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('i');

      // Toggle display
      content.classList.toggle('hidden');

      // Toggle icon (+ / -)
      if (content.classList.contains('hidden')) {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
      } else {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      }
    });
  });

  // 3. Form Subscription Toast Notification
  const subscribeForm = document.getElementById('subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Terima kasih! Anda telah terdaftar dalam buletin eksklusif SmartTrip.');
      subscribeForm.reset();
    });
  }
});