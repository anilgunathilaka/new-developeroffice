/* opening.js — headline is scrubbed to viewport: finishes when
   half of Section 2 is on screen, then holds when the stage pins.
   Native scroll only; no wheel lock. */
(function () {
  var section = document.getElementById('opening');
  if (!section) return;

  var pin = section.querySelector('.opening-pin');
  var headline = section.querySelector('.opening-h');
  var p1 = section.querySelector('.opening-p1');
  var tags = section.querySelectorAll('.opening-line li');
  if (!pin || !headline || !p1) return;

  var reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mobileMq = window.matchMedia('(max-width: 760px)');
  var ticking = false;

  function clamp(n, a, b) { return n < a ? a : n > b ? b : n; }
  function range(p, a, b) { return clamp((p - a) / (b - a), 0, 1); }

  function isStatic() {
    return reduceMq.matches || mobileMq.matches;
  }

  function setIn(el, on) {
    if (on) el.classList.add('is-in');
    else el.classList.remove('is-in');
  }

  function state() {
    var run = section.offsetHeight - window.innerHeight;
    var top = section.getBoundingClientRect().top;
    var p = run <= 0 ? 1 : clamp(-top / run, 0, 1);
    var pinTop = pin.getBoundingClientRect().top;
    var enter = clamp(1 - pinTop / window.innerHeight, 0, 1);
    return { p: p, enter: enter };
  }

  function applyHeadline(s) {
    var t = s.p > 0 ? 1 : range(s.enter, 0, 0.5);
    var x = (1 - t) * window.innerWidth * 0.38;
    var y = (1 - t) * window.innerHeight * 0.18;
    headline.style.opacity = String(Math.min(1, t * 1.4));
    headline.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
  }

  function applyBeats(p) {
    setIn(p1, p >= 0.22);
    var i;
    for (i = 0; i < tags.length; i++) {
      setIn(tags[i], p >= 0.42 + i * 0.1);
    }
  }

  function clearInline() {
    headline.style.opacity = '';
    headline.style.transform = '';
    setIn(p1, false);
    var i;
    for (i = 0; i < tags.length; i++) setIn(tags[i], false);
  }

  function update() {
    ticking = false;
    if (section.classList.contains('opening-static')) return;
    var s = state();
    applyHeadline(s);
    applyBeats(s.p);
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  function mode() {
    var staticMode = isStatic();
    section.classList.toggle('opening-static', staticMode);
    if (staticMode) clearInline();
    else update();
  }

  section.classList.add('is-ready');
  mode();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', function () { mode(); requestUpdate(); }, { passive: true });
  if (reduceMq.addEventListener) {
    reduceMq.addEventListener('change', mode);
    mobileMq.addEventListener('change', mode);
  }
})();
