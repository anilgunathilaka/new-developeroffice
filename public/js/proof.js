/* proof.js — Jitter stack: the section pins to the viewport.
   Card 1 stays. Cards 2–4 rise from the bottom of the screen
   one by one and land on the stack. Native scroll. No GSAP. */
(function () {
  var section = document.getElementById('proof');
  if (!section || section.hasAttribute('data-static')) return;

  var pin = section.querySelector('.proof-pin');
  var cards = section.querySelectorAll('.stat');
  if (!pin || cards.length < 2) return;

  var reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mobileMq = window.matchMedia('(max-width: 760px)');
  var ticking = false;
  var n = cards.length;
  var peek = 16;

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function range(p, a, b) { return clamp((p - a) / (b - a), 0, 1); }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  /* One card at a time: hold, slide, pause, next. */
  function beat(i) {
    if (i === 0) return { a: 0, b: 0 };
    var hold = 0.08;
    var tail = 0.08;
    var usable = 1 - hold - tail;
    var slice = usable / (n - 1);
    var pause = Math.min(0.05, slice * 0.18);
    var a = hold + (i - 1) * slice;
    var b = a + slice - pause;
    return { a: a, b: b };
  }

  function isStatic() {
    return reduceMq.matches || mobileMq.matches;
  }

  function progress() {
    var run = section.offsetHeight - pin.offsetHeight;
    var top = section.getBoundingClientRect().top;
    if (run <= 0) return 1;
    return clamp(-top / run, 0, 1);
  }

  function apply(p) {
    var from = window.innerHeight;
    var i;
    for (i = 0; i < n; i++) {
      var spec = beat(i);
      var t = i === 0 ? 1 : easeOut(range(p, spec.a, spec.b));
      var y = from + (i * peek - from) * t;
      cards[i].style.transform = 'translate3d(-50%,' + y + 'px,0)';
      cards[i].style.zIndex = String(i + 1);
    }
  }

  function clearInline() {
    var i;
    for (i = 0; i < n; i++) {
      cards[i].style.transform = '';
      cards[i].style.zIndex = '';
    }
  }

  function update() {
    ticking = false;
    if (section.classList.contains('proof-static')) return;
    apply(progress());
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  function mode() {
    var staticMode = isStatic();
    section.classList.toggle('proof-static', staticMode);
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
