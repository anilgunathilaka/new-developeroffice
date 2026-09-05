/* method.js — light up the five method steps in sequence on entry. */
(function () {
  var container = document.getElementById('steps');
  if (!container) return;
  var steps = Array.prototype.slice.call(container.querySelectorAll('.step'));
  if (!steps.length || !('IntersectionObserver' in window)) {
    steps.forEach(function (s) { s.classList.add('lit'); });
    return;
  }
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.disconnect();
      steps.forEach(function (s, i) {
        setTimeout(function () { s.classList.add('lit'); }, reduce ? 0 : i * 120);
      });
    });
  }, { threshold: 0.4 });
  io.observe(container);
})();
