/* count.js — stat count-up once on entry (CLAUDE.md §12). */
(function () {
  var els = document.querySelectorAll('.count');
  if (!els.length) return;
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.textContent = el.getAttribute('data-to'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target; io.unobserve(el);
      var to = parseInt(el.getAttribute('data-to'), 10) || 0;
      if (reduce) { el.textContent = String(to); return; }
      var dur = 850, t0 = performance.now();
      function tick(now) {
        var p = Math.min((now - t0) / dur, 1);
        el.textContent = String(Math.round((1 - Math.pow(1 - p, 3)) * to));
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  els.forEach(function (el) { io.observe(el); });
})();
