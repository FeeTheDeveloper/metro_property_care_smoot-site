// script.js
// Handles the splash animation and header scroll behaviour for Metro Property Care.
// The splash plays once per session and is dismissed on any user interaction.

document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-overlay');
  const header = document.querySelector('.site-header');

  // Check if splash has already been seen this session
  const introSeen = sessionStorage.getItem('introSeen');
  if (introSeen) {
    // Immediately hide overlay
    splash.classList.add('hidden');
  }

  // Function to hide the splash overlay
  function hideSplash() {
    if (!splash.classList.contains('hidden')) {
      splash.classList.add('hidden');
      sessionStorage.setItem('introSeen', 'true');
    }
  }

  // List of events that will dismiss the splash
  const dismissEvents = [
    'click',
    'scroll',
    'mousemove',
    'touchstart',
    'keypress',
  ];
  dismissEvents.forEach((eventName) => {
    window.addEventListener(eventName, hideSplash, { once: true });
  });

  // Header shrink on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});