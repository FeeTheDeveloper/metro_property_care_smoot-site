// script.js
// Handles the splash animation, subtle reveals, and header scroll behaviour for Metro Property Care.

document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-overlay');
  const header = document.querySelector('.site-header');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const urlParams = new URLSearchParams(window.location.search);
  const introOverride = urlParams.get('intro');
  const introKey = 'mpc_intro_seen';

  const hideSplash = () => {
    if (!splash || splash.classList.contains('hidden')) {
      return;
    }
    splash.classList.add('hidden');
    sessionStorage.setItem(introKey, 'true');
  };

  const showSplash = () => {
    if (!splash) {
      return;
    }
    splash.classList.remove('hidden');
  };

  if (introOverride === '0') {
    hideSplash();
  } else if (introOverride === '1') {
    sessionStorage.removeItem(introKey);
    showSplash();
  } else if (sessionStorage.getItem(introKey)) {
    hideSplash();
  }

  if (prefersReducedMotion) {
    hideSplash();
  }

  const dismissEvents = [
    'click',
    'scroll',
    'mousemove',
    'touchstart',
    'keydown',
    'wheel',
  ];
  dismissEvents.forEach((eventName) => {
    window.addEventListener(eventName, hideSplash, { once: true, passive: true });
  });

  const handleScroll = () => {
    if (window.scrollY > 12) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  const revealElements = document.querySelectorAll('.fade-section');
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  const bulkForm = document.getElementById('bulk-pricing-form');
  if (bulkForm) {
    bulkForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(bulkForm);
      const fields = [
        { key: 'name', label: 'Name' },
        { key: 'company', label: 'Company' },
        { key: 'email', label: 'Email' },
        { key: 'phone', label: 'Phone' },
        { key: 'category', label: 'Product category' },
        { key: 'zip', label: 'Ship-to ZIP' },
        { key: 'notes', label: 'Measurements / Notes' },
        { key: 'timeline', label: 'Timeline' },
      ];

      const body = fields
        .map(({ key, label }) => {
          const value = `${data.get(key) || ''}`.trim();
          return `${label}: ${value || '—'}`;
        })
        .join('\n');

      const subject = 'Contractor / Bulk Quote Request';
      const mailto = `mailto:contact@metropropertycare.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
    });
  }
});
