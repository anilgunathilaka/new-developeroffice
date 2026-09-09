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

  function parseRgb(str) {
    if (!str || str === 'transparent') return null;
    var m = str.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/);
    if (!m) return null;
    var a = m[4] === undefined ? 1 : parseFloat(m[4]);
    if (a < 0.45) return null;
    return { r: +m[1], g: +m[2], b: +m[3] };
  }

  function isDarkRgb(c) {
    return (0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b) < 140;
  }

  function isMarkedDark(node) {
    if (!node || !node.classList) return false;
    return node.hasAttribute('data-on-dark')
      || node.classList.contains('hero')
      || node.classList.contains('hero-stage')
      || node.classList.contains('foot-inner')
      || node.classList.contains('site-contact')
      || node.classList.contains('cs-cta')
      || node.classList.contains('mobile-menu');
  }

  function hitBehindHeader(x, y) {
    var stack = document.elementsFromPoint ? document.elementsFromPoint(x, y) : [document.elementFromPoint(x, y)];
    for (var i = 0; i < stack.length; i++) {
      var el = stack[i];
      if (!el || el === header || (header && header.contains(el))) continue;
      return el;
    }
    return null;
  }

  function isDarkBehind(el) {
    var node = el;
    while (node && node !== document.documentElement) {
      if (isMarkedDark(node)) return true;
      var tag = node.tagName;
      if (tag === 'VIDEO' || tag === 'CANVAS') return true;
      if (tag !== 'IMG') {
        var parsed = parseRgb(window.getComputedStyle(node).backgroundColor);
        if (parsed) return isDarkRgb(parsed);
      }
      node = node.parentElement;
    }
    return false;
  }

  function syncOnDark() {
    if (!header) return;
    if (overlayOpen) {
      header.classList.add('is-on-dark');
      return;
    }
    if (!header.classList.contains('is-compact')) {
      header.classList.remove('is-on-dark');
      return;
    }
    var band = header.getBoundingClientRect();
    var y = Math.max(8, Math.min(window.innerHeight - 8, band.top + Math.min(28, Math.max(12, band.height * 0.35))));
    var xs = [48, Math.round(window.innerWidth / 2), window.innerWidth - 48];
    var darkVotes = 0;
    var samples = 0;
    for (var i = 0; i < xs.length; i++) {
      var hit = hitBehindHeader(xs[i], y);
      if (!hit) continue;
      samples++;
      if (isDarkBehind(hit)) darkVotes++;
    }
    header.classList.toggle('is-on-dark', samples ? darkVotes >= 1 : false);
  }

  function setCompact(compact) {
    if (!header || overlayOpen) return;
    header.classList.toggle('is-sticky', window.scrollY > 1);
    header.classList.toggle('is-compact', compact);
    if (compact) {
      setToggle(false);
      closeWorkMenu();
    }
    syncOnDark();
  }

  function applyDirection() {
    if (overlayOpen) {
      if (actionBar) actionBar.classList.remove('show');
      syncOnDark();
      return;
    }
    var y = window.scrollY;
    if (y <= 1) {
      dir = 'up';
      setCompact(false);
    } else if (dir === 'down') {
      setCompact(true);
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
  window.addEventListener('resize', syncOnDark);

  ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(function (ev) {
    window.addEventListener(ev, endRestore, { passive: true });
  });

  var links = document.getElementById('navLinks');
  var pill = document.getElementById('navPill');
  var workItem = document.getElementById('navWorkItem');
  var workLink = document.getElementById('navWorkLink');
  var workMenu = document.getElementById('workMenu');
  var workMenuInner = document.getElementById('workMenuInner');
  var backdrop = document.getElementById('navBackdrop');
  var navSheet = document.getElementById('navSheet');
  var headerBar = document.getElementById('headerBar') || (header && header.querySelector('.header-bar'));
  var workOpen = false;
  var workOpenTimer = 0;
  var workCloseTimer = 0;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    if (workOpen && workLink) {
      setPill(workLink);
      return;
    }
    var current = header ? header.querySelector('.nav-links > ul > li > a[aria-current="page"]') : null;
    if (current) setPill(current);
    else links.classList.remove('is-hot');
  }

  function measureWorkMenu() {
    if (!header || !workMenuInner) return;
    var h = workMenuInner.scrollHeight;
    if (h < 200) h = 420;
    header.style.setProperty('--work-menu-h', h + 'px');
    header.style.setProperty('--nav-sheet-h', (184 + h) + 'px');
  }

  function openWorkMenu() {
    if (!header || !workLink || !workMenu || !desktop()) return;
    if (header.classList.contains('is-compact')) return;
    clearTimeout(workCloseTimer);
    measureWorkMenu();
    if (workOpen) return;
    workOpen = true;
    header.classList.add('has-submenu');
    if (headerBar) headerBar.classList.add('is-open');
    if (navSheet) {
      navSheet.classList.add('is-open');
      navSheet.setAttribute('aria-hidden', 'false');
    }
    workLink.setAttribute('aria-expanded', 'true');
    workMenu.setAttribute('aria-hidden', 'false');
    if (backdrop) backdrop.setAttribute('aria-hidden', 'false');
    setPill(workLink);
    function play() {
      measureWorkMenu();
      workMenu.classList.add('is-in');
    }
    if (reduceMotion) play();
    else requestAnimationFrame(function () { requestAnimationFrame(play); });
  }

  function closeWorkMenu() {
    if (!header || !workLink || !workMenu) return;
    clearTimeout(workOpenTimer);
    if (!workOpen && !header.classList.contains('has-submenu')) return;
    workOpen = false;
    header.classList.remove('has-submenu');
    if (headerBar) headerBar.classList.remove('is-open');
    if (navSheet) {
      navSheet.classList.remove('is-open');
      navSheet.setAttribute('aria-hidden', 'true');
    }
    workLink.setAttribute('aria-expanded', 'false');
    workMenu.setAttribute('aria-hidden', 'true');
    workMenu.classList.remove('is-in');
    if (backdrop) backdrop.setAttribute('aria-hidden', 'true');
    restPill();
  }

  function scheduleOpen() {
    if (!desktop() || (header && header.classList.contains('is-compact'))) return;
    clearTimeout(workCloseTimer);
    clearTimeout(workOpenTimer);
    workOpenTimer = window.setTimeout(openWorkMenu, 0);
  }

  function scheduleClose() {
    clearTimeout(workOpenTimer);
    clearTimeout(workCloseTimer);
    workCloseTimer = window.setTimeout(closeWorkMenu, 120);
  }

  if (links && pill) {
    restPill();
    window.addEventListener('resize', function () {
      restPill();
      if (!desktop()) closeWorkMenu();
    });
    header.querySelectorAll('.nav-links > ul > li > a').forEach(function (a) {
      a.addEventListener('mouseenter', function () {
        if (desktop()) setPill(a);
      });
      a.addEventListener('focus', function () {
        if (desktop()) setPill(a);
      });
    });
    links.addEventListener('mouseleave', restPill);
    links.addEventListener('focusout', function (e) {
      if (!links.contains(e.relatedTarget) && !(header && header.contains(e.relatedTarget))) restPill();
    });
  }

  if (workItem && workLink && workMenu && header) {
    workItem.addEventListener('mouseenter', function () {
      if (desktop()) scheduleOpen();
    });
    header.querySelectorAll('.nav-links > ul > li:not(.nav-item--work)').forEach(function (li) {
      li.addEventListener('mouseenter', function () {
        if (desktop()) scheduleClose();
      });
    });
    function isWorkSurface(el) {
      if (!el || !el.closest) return false;
      return !!(el.closest('#headerBar') || el.closest('#workMenu') || el.closest('#navSheet'));
    }
    function keepWorkOpen() {
      if (workOpen) clearTimeout(workCloseTimer);
    }
    function leaveWorkSurface(e) {
      if (!desktop()) return;
      if (isWorkSurface(e.relatedTarget)) return;
      scheduleClose();
    }
    [headerBar, workMenu, navSheet].forEach(function (el) {
      if (!el) return;
      el.addEventListener('mouseenter', keepWorkOpen);
      el.addEventListener('mouseleave', leaveWorkSurface);
    });
    workLink.addEventListener('focus', function () {
      if (desktop()) openWorkMenu();
    });
    workLink.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || e.shiftKey || !workOpen || !workMenu) return;
      var first = workMenu.querySelector('a.work-menu-card, .work-menu a');
      if (!first) return;
      e.preventDefault();
      first.focus();
    });
    workMenu.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !e.shiftKey) return;
      var first = workMenu.querySelector('a');
      if (first && document.activeElement === first) {
        e.preventDefault();
        workLink.focus();
      }
    });
    workLink.addEventListener('click', function (e) {
      if (!desktop()) return;
      if (!window.matchMedia('(hover: hover)').matches && !workOpen) {
        e.preventDefault();
        openWorkMenu();
      }
    });
    header.querySelectorAll('.nav-links > ul > li:not(.nav-item--work) > a').forEach(function (a) {
      a.addEventListener('focus', function () {
        closeWorkMenu();
      });
    });
    header.addEventListener('focusout', function (e) {
      if (!header.contains(e.relatedTarget)) closeWorkMenu();
    });
    if (backdrop) backdrop.addEventListener('click', closeWorkMenu);
    window.addEventListener('resize', function () {
      if (workOpen) measureWorkMenu();
    });
  }

  function openOverlay() {
    if (!menu) return;
    overlayOpen = true;
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    setToggle(true);
    if (header) {
      header.classList.add('menu-open', 'is-sticky');
    }
    syncOnDark();
    document.body.style.overflow = 'hidden';
    if (actionBar) actionBar.classList.remove('show');
    var first = menu.querySelector('a, button');
    if (first) first.focus();
  }

  function closeOverlay() {
    if (!menu) return;
    overlayOpen = false;
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    setToggle(false);
    if (header) {
      header.classList.remove('menu-open');
      if (window.scrollY > 1) {
        dir = 'down';
        header.classList.add('is-compact', 'is-sticky');
      }
    }
    syncOnDark();
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
    if (workOpen) {
      closeWorkMenu();
      if (workLink) workLink.focus();
      return;
    }
    if (overlayOpen) closeOverlay();
    else if (header && !header.classList.contains('is-compact') && window.scrollY > 1) {
      dir = 'down';
      setCompact(true);
    }
  });
})();
