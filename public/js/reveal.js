/* reveal.js — scroll reveals via IntersectionObserver, with a fail-safe so
   content is never left invisible if the observer misses (CLAUDE.md §12). */
(function () {
  var els = document.querySelectorAll('.rv');
  if (!els.length) return;
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach(function (el) { io.observe(el); });
  // fail-safe
  setTimeout(function () { els.forEach(function (el) { el.classList.add('in'); }); }, 1600);
})();
