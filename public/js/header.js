/* header.js — Jitter header states (https://jitter.video/)
   refresh mid-page → compact (Talk to us + hamburger)
   scroll down → compact
   scroll up / page top → full white header
   desktop hamburger → expand full header
   any scroll after that expand → compact again on the way down */
(function () {
  var header = document.getElementById('header');
  var actionBar = document.getElementById('actionBar');
  var toggle = document.getElementById('menuToggle');
  var menu = document.getElementById('mobileMenu');
  var lastY = window.scrollY;
  var dir = lastY > 1 ? 'down' : 'up';
  var allowRestore = true;
  var overlayOpen = false;

  function desktop() {
    return window.matchMedia('(min-width: 1025px)').matches;
  }

  function setToggle(open) {
    if (!toggle) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  function setCompact(compact) {
    if (!header) return;
    header.classList.toggle('is-sticky', window.scrollY > 1);
    header.classList.toggle('is-compact', compact);
    if (compact) {
      header.classList.remove('menu-open');
      if (!overlayOpen) setToggle(false);
    }
  }

  function applyDirection() {
    var y = window.scrollY;
    if (y <= 1) {
      dir = 'up';
      setCompact(false);
    } else if (dir === 'down') {
      setCompact(true);
      if (overlayOpen) closeOverlay();
    } else {
      setCompact(false);
    }
    if (actionBar) actionBar.classList.toggle('show', y > window.innerHeight * 0.9);
  }

  function syncRestoredScroll() {
    if (!allowRestore) return;
    lastY = window.scrollY;
    dir = lastY > 1 ? 'down' : 'up';
    applyDirection();
  }

  function onUserScroll() {
    var y = window.scrollY;
    if (y > lastY) dir = 'down';
    else if (y < lastY) dir = 'up';
    lastY = y;
    applyDirection();
  }

  function markReady() {
    if (header) header.classList.add('is-ready');
  }

  function endRestore() {
    allowRestore = false;
  }

  syncRestoredScroll();
  requestAnimationFrame(function () {
    syncRestoredScroll();
    requestAnimationFrame(markReady);
  });
  window.addEventListener('load', syncRestoredScroll);
  window.addEventListener('pageshow', syncRestoredScroll);
  setTimeout(syncRestoredScroll, 0);
  setTimeout(syncRestoredScroll, 60);
  setTimeout(function () {
    syncRestoredScroll();
    markReady();
  }, 120);

  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (allowRestore && lastY <= 1 && y > 50) {
      syncRestoredScroll();
      return;
    }
    endRestore();
    onUserScroll();
  }, { passive: true });

  ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(function (ev) {
    window.addEventListener(ev, endRestore, { passive: true });
  });

  var links = document.getElementById('navLinks');
  var pill = document.getElementById('navPill');

  function setPill(el) {
    if (!pill || !links || !el) return;
    var r = el.getBoundingClientRect();
    var p = links.getBoundingClientRect();
    pill.style.width = r.width + 'px';
    pill.style.transform = 'translate(' + (r.left - p.left) + 'px,-50%)';
    links.classList.add('is-hot');
  }

  function restPill() {
    if (!links) return;
    var current = links.querySelector('[aria-current="page"]');
    if (current) setPill(current);
    else links.classList.remove('is-hot');
  }

  if (links && pill) {
    restPill();
    window.addEventListener('resize', restPill);
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('mouseenter', function () {
        if (desktop()) setPill(a);
      });
      a.addEventListener('focus', function () {
        if (desktop()) setPill(a);
      });
    });
    links.addEventListener('mouseleave', restPill);
    links.addEventListener('focusout', function (e) {
      if (!links.contains(e.relatedTarget)) restPill();
    });
  }

  function openOverlay() {
    if (!menu) return;
    overlayOpen = true;
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    setToggle(true);
    if (header) header.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    var first = menu.querySelector('a, button');
    if (first) first.focus();
  }

  function closeOverlay() {
    if (!menu) return;
    overlayOpen = false;
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    setToggle(false);
    if (header) header.classList.remove('menu-open');
    document.body.style.overflow = '';
  }

  if (toggle) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      endRestore();
      if (desktop()) {
        if (header && header.classList.contains('is-compact')) {
          dir = 'up';
          setCompact(false);
        }
        return;
      }
      overlayOpen ? closeOverlay() : openOverlay();
    });
  }

  if (menu) {
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeOverlay);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (overlayOpen) closeOverlay();
    else if (header && !header.classList.contains('is-compact') && window.scrollY > 1) {
      dir = 'down';
      setCompact(true);
    }
  });
})();
