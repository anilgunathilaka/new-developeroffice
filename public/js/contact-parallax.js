/* contact-parallax.js — footer slab reveals the contact band; inner
   layers drift at different speeds (Jitter-style bottom parallax). */
(function () {
  var pin = document.querySelector('.site-contact-pin');
  var section = document.getElementById('site-contact');
  if (!pin || !section) return;

  var copy = section.querySelector('.site-contact-copy');
  var reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mobileMq = window.matchMedia('(max-width: 760px)');
  var ticking = false;

  function clamp(n, a, b) { return n < a ? a : n > b ? b : n; }

  function apply() {
    if (reduceMq.matches) {
      if (copy) copy.style.transform = '';
      return;
    }
    var rect = section.getBoundingClientRect();
    if (rect.top <= 1) {
      if (copy) copy.style.transform = '';
      return;
    }
    var vh = window.innerHeight || 1;
    var p = clamp((vh - rect.top) / (vh + Math.max(rect.height, 1)), 0, 1);
    var y = (0.5 - p) * (mobileMq.matches ? 36 : 72);
    if (copy) copy.style.transform = 'translate3d(0,' + (y * 0.5) + 'px,0)';
  }

  function update() {
    ticking = false;
    apply();
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  apply();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
  if (reduceMq.addEventListener) reduceMq.addEventListener('change', requestUpdate);
})();
