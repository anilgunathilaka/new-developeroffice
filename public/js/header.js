/* header.js — sticky bar, solid-on-scroll, mobile menu, action bar. Vanilla JS, no framework. */
(function () {
  var header = document.getElementById('header');
  var actionBar = document.getElementById('actionBar');
  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle('solid', y > 40);
    if (actionBar) actionBar.classList.toggle('show', y > window.innerHeight * 0.9);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile menu
  var toggle = document.getElementById('menuToggle');
  var menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    var lastFocus = null;
    function open() {
      lastFocus = document.activeElement;
      menu.classList.add('open');
      menu.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      if (header) header.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      var first = menu.querySelector('a, button');
      if (first) first.focus();
    }
    function close() {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      if (header) header.classList.remove('menu-open');
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    }
    toggle.addEventListener('click', function () {
      menu.classList.contains('open') ? close() : open();
    });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) close();
    });
  }
})();
