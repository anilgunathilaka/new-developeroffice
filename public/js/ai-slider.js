/* ai-slider.js — Jitter Collaboration slider. Keep the start layout on every step. */
(function () {
  var slider = document.getElementById('aiSlider');
  var prev = document.getElementById('aiPrev');
  var next = document.getElementById('aiNext');
  var nav = document.getElementById('aiNav');
  var dotsWrap = document.getElementById('aiDots');
  var section = document.getElementById('ai');
  if (!slider || !prev || !next || !section) return;

  var cards = Array.prototype.slice.call(slider.querySelectorAll('.strand'));
  if (!cards.length) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mobileMq = window.matchMedia('(max-width: 760px)');
  var dragging = false;
  var locked = false;
  var startX = 0;
  var startScroll = 0;
  var unlockTimer = 0;
  var index = 0;

  function prefersReduce() {
    return reduce.matches;
  }

  function isMobile() {
    return mobileMq.matches;
  }

  function gutter() {
    var raw = getComputedStyle(section).getPropertyValue('--ai-gutter');
    var fromVar = parseFloat(raw);
    if (fromVar) return fromVar;
    return parseFloat(getComputedStyle(slider).paddingLeft) || 0;
  }

  function maxScroll() {
    return Math.max(0, slider.scrollWidth - slider.clientWidth);
  }

  function progress() {
    var max = maxScroll();
    if (max <= 1) return 0;
    return Math.max(0, Math.min(1, slider.scrollLeft / max));
  }

  function scrollTargetFor(i) {
    var card = cards[i];
    if (!card) return 0;
    var left =
      slider.scrollLeft +
      (card.getBoundingClientRect().left - slider.getBoundingClientRect().left) -
      gutter();
    return Math.max(0, Math.min(maxScroll(), left));
  }

  function activeIndex() {
    var target = slider.getBoundingClientRect().left + gutter();
    var best = 0;
    var bestDist = Infinity;
    cards.forEach(function (card, i) {
      var dist = Math.abs(card.getBoundingClientRect().left - target);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  }

  function alignGutter() {
    if (isMobile()) {
      section.style.removeProperty('--ai-gutter');
      return;
    }
    var wrap = section.querySelector('.jt-wrap');
    var width = wrap ? wrap.clientWidth : Math.min(1180, window.innerWidth - 48);
    var pad = Math.max(16, (window.innerWidth - width) / 2);
    section.style.setProperty('--ai-gutter', pad + 'px');
  }

  function syncNav() {
    index = activeIndex();
    var p = progress();
    var atStart = index <= 0 && p <= 0.02;
    var atEnd = index >= cards.length - 1 || p >= 0.99 || maxScroll() <= 1;
    prev.disabled = atStart;
    next.disabled = atEnd;
    prev.setAttribute('aria-disabled', atStart ? 'true' : 'false');
    next.setAttribute('aria-disabled', atEnd ? 'true' : 'false');

    if (isMobile()) {
      if (nav) nav.hidden = true;
      if (dotsWrap) {
        dotsWrap.hidden = false;
        var dots = dotsWrap.querySelectorAll('button');
        for (var d = 0; d < dots.length; d += 1) {
          dots[d].classList.toggle('is-on', d === index);
          dots[d].setAttribute('aria-current', d === index ? 'true' : 'false');
        }
      }
    } else {
      if (nav) nav.hidden = false;
      if (dotsWrap) dotsWrap.hidden = true;
    }
  }

  function scrollToX(x) {
    if (locked) return;
    locked = true;
    slider.scrollTo({
      left: x,
      behavior: prefersReduce() ? 'auto' : 'smooth',
    });
    window.clearTimeout(unlockTimer);
    unlockTimer = window.setTimeout(function () {
      locked = false;
      syncNav();
    }, prefersReduce() ? 20 : 360);
  }

  function goTo(i) {
    if (i < 0) i = 0;
    if (i > cards.length - 1) i = cards.length - 1;
    index = i;
    scrollToX(scrollTargetFor(i));
  }

  function goBy(dir) {
    goTo(activeIndex() + dir);
  }

  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    cards.forEach(function (_, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      btn.addEventListener('click', function () {
        goTo(i);
      });
      dotsWrap.appendChild(btn);
    });
  }

  prev.addEventListener('click', function () {
    goBy(-1);
  });
  next.addEventListener('click', function () {
    goBy(1);
  });

  slider.addEventListener(
    'scroll',
    function () {
      if (!dragging && !locked) syncNav();
    },
    { passive: true },
  );

  slider.addEventListener('mousedown', function (e) {
    if (e.button !== 0) return;
    if (e.target.closest && e.target.closest('a, button')) return;
    dragging = true;
    startX = e.pageX;
    startScroll = slider.scrollLeft;
    slider.classList.add('is-dragging');
    e.preventDefault();
  });

  window.addEventListener('mousemove', function (e) {
    if (!dragging) return;
    slider.scrollLeft = startScroll - (e.pageX - startX);
    e.preventDefault();
  });

  window.addEventListener('mouseup', function () {
    if (!dragging) return;
    dragging = false;
    slider.classList.remove('is-dragging');
    goTo(activeIndex());
  });

  slider.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goBy(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goBy(1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goTo(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goTo(cards.length - 1);
    }
  });

  window.addEventListener('resize', function () {
    alignGutter();
    slider.scrollLeft = scrollTargetFor(index);
    syncNav();
  });
  if (mobileMq.addEventListener) {
    mobileMq.addEventListener('change', syncNav);
  }

  buildDots();
  alignGutter();
  slider.scrollLeft = 0;
  index = 0;
  syncNav();
})();
