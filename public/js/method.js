/* method.js — five stage cards rise on scroll, same as the opening section. */
(function () {
  var section = document.getElementById('method');
  if (!section) return;

  var pin = section.querySelector('.method-pin');
  var cards = section.querySelectorAll('.step');
  var cta = section.querySelector('.method-cta');
  var mark = section.querySelector('.method-watermark');
  if (!pin || !cards.length) return;

  var reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mobileMq = window.matchMedia('(max-width: 760px)');
  var ticking = false;

  function clamp(n, a, b) { return n < a ? a : n > b ? b : n; }
  function range(p, a, b) { return clamp((p - a) / (b - a), 0, 1); }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function mix(a, b, t) { return a + (b - a) * t; }

  var beats = [
    { a: 0.00, b: 0.42, y: 82, x: -10, rx: 34, ry: -18, rot: -10, sc: 0.82, op: 0.22 },
    { a: 0.08, b: 0.52, y: 74, x: -5, rx: 28, ry: -10, rot: -5, sc: 0.86, op: 0.18 },
    { a: 0.16, b: 0.62, y: 70, x: 0, rx: 22, ry: 0, rot: 0, sc: 0.88, op: 0.16 },
    { a: 0.24, b: 0.72, y: 74, x: 5, rx: 28, ry: 10, rot: 5, sc: 0.86, op: 0.18 },
    { a: 0.32, b: 0.84, y: 82, x: 10, rx: 34, ry: 18, rot: 10, sc: 0.82, op: 0.20 }
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
    if (cta) {
      var shown = p >= 0.84;
      cta.classList.toggle('is-in', shown);
      cta.setAttribute('aria-hidden', shown ? 'false' : 'true');
    }
    if (mark) {
      var fade = easeOut(range(p, 0.21, 0.38));
      mark.style.opacity = String(mix(0.03, 0, fade));
    }
  }

  function fitMark() {
    if (!mark || section.classList.contains('method-static')) return;
    mark.style.fontSize = '100px';
    var w = mark.scrollWidth;
    var max = pin.clientWidth;
    if (w > 0 && max > 0) mark.style.fontSize = (100 * max / w * 1.792) + 'px';
  }

  function clearInline() {
    var i;
    for (i = 0; i < cards.length; i++) {
      cards[i].style.opacity = '';
      cards[i].style.transform = '';
    }
    if (cta) {
      cta.classList.add('is-in');
      cta.setAttribute('aria-hidden', 'false');
    }
    if (mark) {
      mark.style.opacity = '';
      mark.style.fontSize = '';
    }
  }

  function update() {
    ticking = false;
    if (section.classList.contains('method-static')) return;
    apply(progress());
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  function mode() {
    var staticMode = isStatic();
    section.classList.toggle('method-static', staticMode);
    if (staticMode) clearInline();
    else {
      fitMark();
      update();
    }
  }

  section.classList.add('is-ready');
  mode();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { fitMark(); });
  }
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', function () { mode(); requestUpdate(); }, { passive: true });
  if (reduceMq.addEventListener) {
    reduceMq.addEventListener('change', mode);
    mobileMq.addEventListener('change', mode);
  }
})();
