/* work-facts.js — scroll-scrubbed Key Facts composition.
   Native scroll only (same pattern as opening.js). No GSAP. */
(function () {
  var section = document.getElementById('work');
  if (!section) return;

  var pin = section.querySelector('.work-pin');
  var intro = section.querySelector('.work-intro');
  var cards = section.querySelectorAll('.work-card');
  if (!pin || !intro || !cards.length) return;

  var reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mobileMq = window.matchMedia('(max-width: 760px)');
  var tabletMq = window.matchMedia('(max-width: 1100px)');
  var ticking = false;

  function clamp(n, a, b) { return n < a ? a : n > b ? b : n; }
  function range(p, a, b) { return clamp((p - a) / (b - a), 0, 1); }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function mix(a, b, t) { return a + (b - a) * t; }

  /* Left-outer first, then inners, right-outer last — 3-card choreography
     adapted to the four featured projects. */
  var beats = [
    { a: 0.04, b: 0.42, y: 34, x: -6, sk: 11, rot: -5, sc: 0.84, op: 0.08 },
    { a: 0.22, b: 0.58, y: 22, x: -1, sk: 2, rot: -1, sc: 0.90, op: 0.04 },
    { a: 0.38, b: 0.72, y: 24, x: 1, sk: -2, rot: 1, sc: 0.90, op: 0.04 },
    { a: 0.48, b: 0.86, y: 36, x: 7, sk: -11, rot: 5, sc: 0.84, op: 0.06 }
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

  function applyCard(card, i, p, reduce) {
    var spec = beats[i] || beats[beats.length - 1];
    var t = easeOut(range(p, spec.a, spec.b));
    var damp = reduce ? 0.45 : 1;
    var y = mix(spec.y * damp, 0, t);
    var x = mix(spec.x * damp, 0, t);
    var sk = mix(spec.sk * damp, 0, t);
    var rot = mix(spec.rot * damp, 0, t);
    var sc = mix(spec.sc, 1, t);
    var op = mix(spec.op, 1, t);

    card.style.opacity = String(op);
    card.style.transform =
      'translate3d(' + x + '%, ' + y + 'vh, 0) rotate(' + rot + 'deg) skewX(' + sk + 'deg) scale(' + sc + ')';

    var label = card.querySelector('.work-card-label');
    var title = card.querySelector('h3');
    var desc = card.querySelector('p');
    var go = card.querySelector('.go');
    setPiece(label, easeOut(range(t, 0.08, 0.55)));
    setPiece(title, easeOut(range(t, 0.22, 0.75)));
    setPiece(desc, easeOut(range(t, 0.38, 0.92)));
    setPiece(go, easeOut(range(t, 0.55, 1)));
  }

  function setPiece(el, t) {
    if (!el) return;
    el.style.opacity = String(t);
    el.style.transform = 'translate3d(0,' + ((1 - t) * 14) + 'px,0)';
  }

  function apply(p) {
    var head = easeOut(range(p, 0, 0.62));
    intro.style.transform = 'translate3d(0,' + mix(12, 0, head) + 'vh,0)';
    var reduce = tabletMq.matches;
    var i;
    for (i = 0; i < cards.length; i++) applyCard(cards[i], i, p, reduce);
  }

  function clearInline() {
    intro.style.transform = '';
    var i;
    for (i = 0; i < cards.length; i++) {
      cards[i].style.opacity = '';
      cards[i].style.transform = '';
      cards[i].querySelectorAll('.work-card-label, h3, p, .go').forEach(function (el) {
        el.style.opacity = '';
        el.style.transform = '';
      });
    }
  }

  function update() {
    ticking = false;
    if (section.classList.contains('work-static')) return;
    apply(progress());
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  function mode() {
    var staticMode = isStatic();
    section.classList.toggle('work-static', staticMode);
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
    tabletMq.addEventListener('change', mode);
  }
})();
