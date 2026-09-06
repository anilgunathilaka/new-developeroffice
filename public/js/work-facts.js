/* work-facts.js — selected-work rail. CSS drives the right→left
   loop; this only pauses it off-screen and for reduced motion. */
(function () {
  var section = document.getElementById('work');
  if (!section) return;

  var track = section.querySelector('.work-marquee-track');
  if (!track) return;

  var reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var inView = true;

  function sync() {
    if (reduceMq.matches || !inView) track.style.animationPlayState = 'paused';
    else track.style.animationPlayState = '';
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      inView = entries[0] && entries[0].isIntersecting;
      sync();
    }, { threshold: 0.05 });
    io.observe(section);
  }

  if (reduceMq.addEventListener) reduceMq.addEventListener('change', sync);
  sync();
})();
