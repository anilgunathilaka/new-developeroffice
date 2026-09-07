/* hero-shape.js — ParticleText port of mariajoaoabrantes.work "shape":
   rasterise glyphs, WebGL point sprites, letter-staggered spawn, cursor scatter. */
(function () {
  var wrap = document.getElementById('heroShape');
  if (!wrap) return;
  var source = wrap.querySelector('.hero-shape-text');
  var canvas = wrap.querySelector('.hero-shape-canvas');
  if (!source || !canvas) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches) return;

  var gl = canvas.getContext('webgl', {
    alpha: true,
    antialias: true,
    premultipliedAlpha: false,
    preserveDrawingBuffer: false
  });
  if (!gl) return;

  var interactive = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var mobileMq = window.matchMedia('(max-width: 768px)');
  var isMobile = mobileMq.matches;
  var mouse = { x: -9999, y: -9999 };
  var particles = [];
  var running = false;
  var raf = 0;
  var t0 = 0;
  var prev = 0;
  var pad = 0;
  var cssW = 1;
  var cssH = 1;
  var viewW = 1;
  var viewH = 1;
  var dpr = 1;
  var program = null;
  var buffers = null;
  var uniforms = null;
  var attribs = null;
  var spriteTex = null;
  var posData = null;
  var spawnData = null;
  var boostData = null;
  var sizeData = null;

  var VERT = [
    'attribute vec2 aPos;',
    'attribute float aBaseSize;',
    'attribute float aSpawn;',
    'attribute float aBoost;',
    'uniform vec2 uRes;',
    'uniform float uDpr;',
    'uniform float uDot;',
    'void main(){',
    '  vec2 ndc = vec2((aPos.x / uRes.x) * 2.0 - 1.0, 1.0 - (aPos.y / uRes.y) * 2.0);',
    '  gl_Position = vec4(ndc, 0.0, 1.0);',
    '  float size = uDot * aBaseSize * aSpawn * (1.0 + aBoost * 1.00);',
    '  gl_PointSize = max(size * uDpr, 0.0);',
    '}'
  ].join('\n');

  var FRAG = [
    'precision mediump float;',
    'uniform sampler2D uMap;',
    'uniform vec3 uColor;',
    'void main(){',
    '  vec4 tex = texture2D(uMap, gl_PointCoord);',
    '  gl_FragColor = vec4(uColor, tex.a);',
    '}'
  ].join('\n');

  function compile(type, src) {
    var sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) return null;
    return sh;
  }

  function setupGl() {
    var vs = compile(gl.VERTEX_SHADER, VERT);
    var fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return false;
    program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return false;
    gl.useProgram(program);
    attribs = {
      pos: gl.getAttribLocation(program, 'aPos'),
      base: gl.getAttribLocation(program, 'aBaseSize'),
      spawn: gl.getAttribLocation(program, 'aSpawn'),
      boost: gl.getAttribLocation(program, 'aBoost')
    };
    uniforms = {
      res: gl.getUniformLocation(program, 'uRes'),
      dpr: gl.getUniformLocation(program, 'uDpr'),
      dot: gl.getUniformLocation(program, 'uDot'),
      map: gl.getUniformLocation(program, 'uMap'),
      color: gl.getUniformLocation(program, 'uColor')
    };
    buffers = {
      pos: gl.createBuffer(),
      base: gl.createBuffer(),
      spawn: gl.createBuffer(),
      boost: gl.createBuffer()
    };
    spriteTex = gl.createTexture();
    var img = document.createElement('canvas');
    img.width = img.height = 64;
    var ictx = img.getContext('2d');
    var g = ictx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.92, 'rgba(255,255,255,1)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ictx.fillStyle = g;
    ictx.fillRect(0, 0, 64, 64);
    gl.bindTexture(gl.TEXTURE_2D, spriteTex);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.DEPTH_TEST);
    return true;
  }

  function smoothstep(n) {
    n = n < 0 ? 0 : n > 1 ? 1 : n;
    return n * n * (3 - 2 * n);
  }

  function letterAt(cuts, x) {
    for (var i = 1; i < cuts.length; i++) {
      if (x < cuts[i]) return i - 1;
    }
    return Math.max(0, cuts.length - 2);
  }

  function sample() {
    isMobile = mobileMq.matches;
    var rect = source.getBoundingClientRect();
    var h1 = wrap.closest('h1') || source;
    var style = getComputedStyle(h1);
    var text = (source.textContent || '').trim();
    if (!text || rect.width < 24 || rect.height < 16) return false;

    pad = Math.round(0.4 * rect.height);
    viewW = source.getBoundingClientRect().width;
    viewH = source.getBoundingClientRect().height;
    cssW = viewW + pad * 2;
    cssH = viewH + pad * 2;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.style.width = cssW + 'px';
    canvas.style.height = cssH + 'px';
    canvas.style.left = -pad + 'px';
    canvas.style.top = -pad + 'px';
    canvas.style.right = 'auto';
    canvas.style.bottom = 'auto';
    canvas.width = Math.max(1, Math.round(cssW * dpr));
    canvas.height = Math.max(1, Math.round(cssH * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);

    var off = document.createElement('canvas');
    off.width = canvas.width;
    off.height = canvas.height;
    var octx = off.getContext('2d');
    if (!octx) return false;
    octx.scale(dpr, dpr);
    octx.fillStyle = '#fff';
    octx.font = (style.fontWeight || '700') + ' ' + (style.fontSize || '64px') + ' ' + (style.fontFamily || 'sans-serif');
    octx.textAlign = 'left';
    octx.textBaseline = 'alphabetic';
    if ('letterSpacing' in octx) octx.letterSpacing = style.letterSpacing === 'normal' ? '0px' : style.letterSpacing;

    var metrics = octx.measureText(text);
    var ascent = metrics.actualBoundingBoxAscent || parseFloat(style.fontSize) * 0.8;
    var descent = metrics.actualBoundingBoxDescent || 0;
    viewW = Math.max(viewW, metrics.width);
    viewH = Math.max(viewH, ascent + descent);
    cssW = viewW + pad * 2;
    cssH = viewH + pad * 2;
    canvas.style.width = cssW + 'px';
    canvas.style.height = cssH + 'px';
    canvas.style.left = -pad + 'px';
    canvas.style.top = -pad + 'px';
    canvas.width = Math.max(1, Math.round(cssW * dpr));
    canvas.height = Math.max(1, Math.round(cssH * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
    off.width = canvas.width;
    off.height = canvas.height;
    octx.setTransform(dpr, 0, 0, dpr, 0, 0);
    octx.fillStyle = '#fff';
    octx.font = (style.fontWeight || '700') + ' ' + (style.fontSize || '64px') + ' ' + (style.fontFamily || 'sans-serif');
    octx.textAlign = 'left';
    octx.textBaseline = 'alphabetic';
    if ('letterSpacing' in octx) octx.letterSpacing = style.letterSpacing === 'normal' ? '0px' : style.letterSpacing;
    octx.fillText(text, pad, pad + ascent);

    var cuts = [];
    for (var i = 0; i <= text.length; i++) {
      cuts.push(pad + octx.measureText(text.slice(0, i)).width);
    }

    var data = octx.getImageData(0, 0, off.width, off.height).data;
    var step = Math.max(1, Math.round((isMobile ? 1 : 2) * dpr));
    var next = [];
    for (var py = 0; py < off.height; py += step) {
      for (var px = 0; px < off.width; px += step) {
        if (data[(py * off.width + px) * 4 + 3] > 128) {
          var tx = px / dpr;
          var ty = py / dpr;
          next.push({
            tx: tx,
            ty: ty,
            rx: 0,
            ry: 0,
            rvx: 0,
            rvy: 0,
            boost: 0,
            spawn: 0,
            delay: 0.1 * letterAt(cuts, tx) + 0.05 * Math.random(),
            phase: Math.random() * Math.PI * 2,
            freqX: 8 * (0.6 + 0.8 * Math.random()),
            freqY: 8 * (0.6 + 0.8 * Math.random()),
            ampScale: 0.6 + 0.8 * Math.random(),
            baseSize: 0.9 + 0.7 * Math.random()
          });
        }
      }
    }
    if (next.length < 80) return false;
    particles = next;
    var n = particles.length;
    posData = new Float32Array(n * 2);
    spawnData = new Float32Array(n);
    boostData = new Float32Array(n);
    sizeData = new Float32Array(n);
    for (i = 0; i < n; i++) {
      posData[i * 2] = particles[i].tx;
      posData[i * 2 + 1] = particles[i].ty;
      sizeData[i] = particles[i].baseSize;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.base);
    gl.bufferData(gl.ARRAY_BUFFER, sizeData, gl.STATIC_DRAW);
    return true;
  }

  function tick(now) {
    if (!running) return;
    if (!t0) t0 = now;
    var dt = Math.min((prev ? now - prev : 16) / 1000, 1 / 30);
    prev = now;
    var t = (now - t0) / 1000;
    var zDamp = Math.exp(-3.5 * dt);
    var boostLerp = 1 - Math.exp(-4 * dt);
    var mouseR = viewH * 0.6;
    var mouseR2 = mouseR * mouseR;
    var c6 = 10 * Math.tan(25 * Math.PI / 180);
    var worldToPx = cssH / c6;
    var jitterPx = 0.045 * worldToPx;
    var canvasRect = canvas.getBoundingClientRect();
    var mx = (mouse.x - canvasRect.left) * (cssW / Math.max(1, canvasRect.width));
    var my = (mouse.y - canvasRect.top) * (cssH / Math.max(1, canvasRect.height));
    var n = particles.length;
    var i;
    var p;

    for (i = 0; i < n; i++) {
      p = particles[i];
      var age = t - p.delay;
      if (age <= 0) p.spawn = 0;
      else if (age < 0.4) p.spawn = 2.6 * smoothstep(age / 0.4);
      else p.spawn = 1 + 1.6 * (1 - smoothstep(Math.min(1, (age - 0.4) / 0.45)));

      if (true) {
        var dx = p.tx + p.rx - mx;
        var dy = p.ty + p.ry - my;
        var d2 = dx * dx + dy * dy;
        if (d2 < mouseR2 && d2 > 1e-4) {
          var dist = Math.sqrt(d2);
          var fall = 1 - dist / mouseR;
          var force = fall * fall * 100 * worldToPx;
          p.rvx += (dx / dist) * force * dt;
          p.rvy += (dy / dist) * force * dt;
          if (fall > p.boost) p.boost = fall;
        }
        p.rvx -= 20 * p.rx * dt;
        p.rvy -= 20 * p.ry * dt;
        p.rvx *= zDamp;
        p.rvy *= zDamp;
        p.rx += p.rvx * dt;
        p.ry += p.rvy * dt;
      }

      p.boost += (0 - p.boost) * boostLerp;
      var amp = jitterPx * p.ampScale;
      posData[i * 2] = p.tx + p.rx + amp * Math.sin(t * p.freqX + p.phase);
      posData[i * 2 + 1] = p.ty + p.ry + amp * Math.cos(t * p.freqY + p.phase);
      spawnData[i] = p.spawn;
      boostData[i] = p.boost;
    }

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.uniform2f(uniforms.res, cssW, cssH);
    gl.uniform1f(uniforms.dpr, dpr);
    gl.uniform1f(uniforms.dot, Math.max(2.2, Math.min(3.8, viewH * 0.036)));
    gl.uniform3f(uniforms.color, 1, 1, 1);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, spriteTex);
    gl.uniform1i(uniforms.map, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.pos);
    gl.bufferData(gl.ARRAY_BUFFER, posData, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(attribs.pos);
    gl.vertexAttribPointer(attribs.pos, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.base);
    gl.enableVertexAttribArray(attribs.base);
    gl.vertexAttribPointer(attribs.base, 1, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.spawn);
    gl.bufferData(gl.ARRAY_BUFFER, spawnData, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(attribs.spawn);
    gl.vertexAttribPointer(attribs.spawn, 1, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.boost);
    gl.bufferData(gl.ARRAY_BUFFER, boostData, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(attribs.boost);
    gl.vertexAttribPointer(attribs.boost, 1, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.POINTS, 0, n);
    raf = requestAnimationFrame(tick);
  }

  function start() {
    if (running) return;
    running = true;
    t0 = 0;
    prev = 0;
    raf = requestAnimationFrame(tick);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }

  function onMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  var resizeTimer = 0;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (sample() && running) {
        t0 = 0;
        prev = 0;
      }
    }, 150);
  }

  var listeners = false;
  function bind() {
    if (listeners) return;
    listeners = true;
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop();
      else start();
    });
  }

  function activate() {
    if (!sample()) return false;
    bind();
    start();
    wrap.classList.add('is-ready');
    return true;
  }

  function tryActivate(attempt) {
    if (activate()) return;
    if (attempt > 16) return;
    setTimeout(function () { tryActivate(attempt + 1); }, 80);
  }

  if (!setupGl()) return;

  function boot() {
    setTimeout(function () { tryActivate(0); }, 400);
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { requestAnimationFrame(boot); });
  } else {
    window.addEventListener('load', boot);
  }
})();
