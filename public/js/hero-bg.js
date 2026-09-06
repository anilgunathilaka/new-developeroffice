/* hero-bg.js — plays /videos/hero-video.mp4 as the hero background.
   Falls back to a local canvas loop if the file can't play. */
(function () {
  var video = document.getElementById('heroVideo');
  var canvas = document.getElementById('heroCanvas');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    if (video) {
      video.pause();
      video.removeAttribute('autoplay');
      video.classList.remove('is-on');
    }
    return;
  }

  var canvasOn = false;
  function startCanvas() {
    if (canvasOn || !canvas || !canvas.getContext) return;
    canvasOn = true;
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    var t0 = performance.now();
    var running = true;

    function size() {
      var w = canvas.clientWidth;
      var h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
    }

    function frame(now) {
      if (!running) return;
      var w = canvas.width;
      var h = canvas.height;
      var t = (now - t0) / 1000;
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, w, h);

      var g1 = ctx.createRadialGradient(
        w * (0.35 + Math.sin(t * 0.18) * 0.12),
        h * (0.15 + Math.cos(t * 0.14) * 0.08),
        0,
        w * 0.4, h * 0.2, Math.max(w, h) * 0.72
      );
      g1.addColorStop(0, 'rgba(189,122,180,0.38)');
      g1.addColorStop(1, 'rgba(10,10,10,0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      var g2 = ctx.createRadialGradient(
        w * (0.82 + Math.cos(t * 0.12) * 0.08),
        h * (0.78 + Math.sin(t * 0.16) * 0.1),
        0,
        w * 0.8, h * 0.8, Math.max(w, h) * 0.55
      );
      g2.addColorStop(0, 'rgba(60,58,56,0.55)');
      g2.addColorStop(1, 'rgba(10,10,10,0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      var g3 = ctx.createLinearGradient(0, 0, w, h);
      g3.addColorStop(0, 'rgba(255,210,160,0.05)');
      g3.addColorStop(0.5, 'rgba(10,10,10,0)');
      g3.addColorStop(1, 'rgba(189,122,180,0.08)');
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, w, h);

      requestAnimationFrame(frame);
    }

    size();
    window.addEventListener('resize', size, { passive: true });
    requestAnimationFrame(frame);
    document.addEventListener('visibilitychange', function () {
      running = !document.hidden;
      if (running) requestAnimationFrame(frame);
    });
  }

  function showCanvas() {
    if (video) video.classList.remove('is-on');
    if (canvas) canvas.classList.add('is-on');
    startCanvas();
  }

  if (video) {
    function onReady() {
      video.classList.add('is-on');
      if (canvas) canvas.classList.remove('is-on');
      var play = video.play();
      if (play && play.catch) play.catch(showCanvas);
    }
    video.addEventListener('loadeddata', onReady);
    video.addEventListener('error', showCanvas);
    if (video.readyState >= 2) onReady();
  } else {
    showCanvas();
  }
})();
