/* opening.js — TRIONN Key Facts motion on the four discipline cards.
   Title holds. Cards rise from below with 3D tilt. Native scroll. */
(function () {
  var section = document.getElementById('opening');
  if (!section || section.hasAttribute('data-static')) return;

  var pin = section.querySelector('.opening-pin');
  var cards = section.querySelectorAll('.opening-line li');
  if (!pin || !cards.length) return;

  var reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mobileMq = window.matchMedia('(max-width: 760px)');
  var ticking = false;

  function clamp(n, a, b) { return n < a ? a : n > b ? b : n; }
  function range(p, a, b) { return clamp((p - a) / (b - a), 0, 1); }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function mix(a, b, t) { return a + (b - a) * t; }

  var beats = [
    { a: 0.00, b: 0.46, y: 82, x: -10, rx: 34, ry: -18, rot: -10, sc: 0.82, op: 0.22 },
    { a: 0.10, b: 0.58, y: 70, x: -3, rx: 26, ry: -8, rot: -3, sc: 0.88, op: 0.16 },
    { a: 0.20, b: 0.68, y: 70, x: 3, rx: 26, ry: 8, rot: 3, sc: 0.88, op: 0.16 },
    { a: 0.28, b: 0.80, y: 82, x: 10, rx: 34, ry: 18, rot: 10, sc: 0.82, op: 0.20 }
  ];

  function isStatic() {
    return reduceMq.matches || mobileMq.matches;
  }

  function progress() {
    var run = section.offsetHeight - pin.offsetHeight;
    var top = section.getBoundingClientRect().top;
    if (run <= 0) return 1;
    return clamp(-top / run, 0, 1);
  }

  function applyCard(card, i, p) {
    var spec = beats[i] || beats[beats.length - 1];
    var t = easeOut(range(p, spec.a, spec.b));
    card.style.opacity = String(mix(spec.op, 1, t));
    card.style.transform =
      'translate3d(' + mix(spec.x, 0, t) + '%,' + mix(spec.y, 0, t) + 'vh,0) rotateX(' +
      mix(spec.rx, 0, t) + 'deg) rotateY(' + mix(spec.ry, 0, t) + 'deg) rotate(' +
      mix(spec.rot, 0, t) + 'deg) scale(' + mix(spec.sc, 1, t) + ')';
  }

  function apply(p) {
    var i;
    for (i = 0; i < cards.length; i++) applyCard(cards[i], i, p);
  }

  function clearInline() {
    var i;
    for (i = 0; i < cards.length; i++) {
      cards[i].style.opacity = '';
      cards[i].style.transform = '';
    }
  }

  function update() {
    ticking = false;
    if (section.classList.contains('opening-static')) return;
    apply(progress());
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
