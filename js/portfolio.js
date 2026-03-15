/* ============================================================
   I DESIGN 4 U — portfolio.js
   Portfolio-specific JS. Loaded AFTER script.js on portfolio.html.
   Adds:
     1. Floating tech icons  (animated background elements)
     2. Rising particles     (ambient dots)
     3. Mouse parallax       (gentle movement on float layer)
     4. Scroll reveal        (IntersectionObserver on .pf-card)
     5. 3-D tilt + spotlight (mouse tracking per card)
     6. Filter logic         (category filtering)
     7. Modal handler        (reads data-modal JSON)
     8. Video autoplay       (viewport-aware, future-ready)
   ============================================================ */

'use strict';

/* ────────────────────────────────────────────────────────────
   1. FLOATING TECH ICONS
   Creates N absolutely-positioned icon/text elements inside
   #float-icons, each with a random position, size, colour,
   animation duration, and delay so they all drift independently.
   ──────────────────────────────────────────────────────────── */
(function spawnIcons() {
  var labels = [
    '{ }', '</>', '<html>', '<div>', '#id', '.class',
    'CSS', 'JS', 'HTML', 'API', 'SQL', 'UI', 'UX', 'SEO',
    '[ ]', '( )', '=>', '//...', 'px', 'rem', 'vh', 'vw',
    '&#xe; ', '⌨', '💻', '🖥', '📱', '☁', '⚙', '🔒', '⚡',
    'const', 'let', 'var', 'async', 'await', 'import'
  ];

  var colours = [
    'rgba(108,71,255,OP)',  // purple
    'rgba(255,77,141,OP)',  // pink
    'rgba(0,229,160,OP)',   // teal
    'rgba(56,189,248,OP)',  // blue
    'rgba(245,166,35,OP)',  // gold
    'rgba(210,200,255,OP)', // lavender
  ];

  var container = document.getElementById('float-icons');
  if (!container) return;

  // Fewer icons on mobile to protect performance
  var count = window.innerWidth < 600 ? 16 : 32;

  for (var i = 0; i < count; i++) {
    var el    = document.createElement('span');
    el.className = 'pf-float-icon';

    var label   = labels[Math.floor(Math.random() * labels.length)];
    var colour  = colours[Math.floor(Math.random() * colours.length)];
    var opacity = (0.06 + Math.random() * 0.12).toFixed(3);
    var size    = (0.65 + Math.random() * 0.85).toFixed(2);  // rem
    var dur     = (7 + Math.random() * 11).toFixed(1);       // s
    var delay   = (-Math.random() * parseFloat(dur)).toFixed(2); // start mid-cycle
    var left    = (Math.random() * 100).toFixed(2);
    var top     = (Math.random() * 110 - 5).toFixed(2);

    el.textContent = label;
    el.style.cssText = [
      'left:'+ left +'%;',
      'top:'+ top +'%;',
      'font-size:'+ size +'rem;',
      'color:'+ colour.replace('OP', opacity) +';',
      '--fi-o:'+ opacity +';',
      'animation-duration:'+ dur +'s;',
      'animation-delay:'+ delay +'s;',
      'letter-spacing:-.5px;'
    ].join('');

    container.appendChild(el);
  }
})();


/* ────────────────────────────────────────────────────────────
   2. RISING PARTICLES
   Small coloured dots that rise from bottom to top over 15–30 s.
   CSS animation (pf-rise) handles movement;
   JS sets random positions, sizes, durations, and drift.
   ──────────────────────────────────────────────────────────── */
(function spawnParticles() {
  var colours = [
    'rgba(108,71,255,.16)',
    'rgba(255,77,141,.12)',
    'rgba(0,229,160,.11)',
    'rgba(56,189,248,.13)',
  ];

  var container = document.getElementById('float-icons');
  if (!container) return;

  var count = window.innerWidth < 600 ? 8 : 20;

  for (var i = 0; i < count; i++) {
    var el    = document.createElement('div');
    el.className = 'pf-particle';

    var size  = (2 + Math.random() * 5).toFixed(1);
    var dur   = (14 + Math.random() * 18).toFixed(1);
    var delay = (-Math.random() * parseFloat(dur)).toFixed(1);
    var left  = (Math.random() * 100).toFixed(2);
    var drift = ((Math.random() - .5) * 55).toFixed(0);
    var col   = colours[Math.floor(Math.random() * colours.length)];

    el.style.cssText = [
      'width:'+ size +'px;height:'+ size +'px;',
      'left:'+ left +'%;',
      'background:'+ col +';',
      'animation-duration:'+ dur +'s;',
      'animation-delay:'+ delay +'s;',
      '--drift:'+ drift +'px;'
    ].join('');

    container.appendChild(el);
  }
})();


/* ────────────────────────────────────────────────────────────
   3. MOUSE PARALLAX ON FLOAT LAYER
   Applies a very light CSS transform to #float-icons so icons
   shift slightly opposite to the cursor — depth illusion.
   Uses exponential smoothing (lerp) for lag / inertia.
   ──────────────────────────────────────────────────────────── */
(function initParallax() {
  var layer = document.getElementById('float-icons');
  if (!layer) return;

  var cx = window.innerWidth  / 2;
  var cy = window.innerHeight / 2;
  var targetX = cx, targetY = cy;
  var strength = 14; // max pixel offset

  document.addEventListener('mousemove', function(e) {
    targetX = e.clientX;
    targetY = e.clientY;
  }, { passive: true });

  function tick() {
    cx += (targetX - cx) * .06;
    cy += (targetY - cy) * .06;
    var dx = ((cx / window.innerWidth)  - .5) * strength;
    var dy = ((cy / window.innerHeight) - .5) * strength * .65;
    layer.style.transform = 'translate('+ dx.toFixed(2) +'px,'+ dy.toFixed(2) +'px)';
    requestAnimationFrame(tick);
  }
  tick();
})();


/* ────────────────────────────────────────────────────────────
   4. SCROLL REVEAL — .pf-card
   Cards start at opacity:0 / translateY(48px).
   IntersectionObserver adds .pf-visible when ≥10% visible.
   Column-stagger is computed so cards cascade left→right.
   ──────────────────────────────────────────────────────────── */
(function initReveal() {
  var cards = document.querySelectorAll('.pf-card');
  var colCount = 3; // matches CSS grid default; updated on resize

  function getCols() {
    var w = window.innerWidth;
    if (w <= 620)  return 1;
    if (w <= 1060) return 2;
    return 3;
  }

  function setStagger() {
    colCount = getCols();
    cards.forEach(function(card, i) {
      var col   = i % colCount;
      var delay = col * 90;          // 90 ms per column
      card.style.transitionDelay = delay + 'ms';
    });
  }
  setStagger();
  window.addEventListener('resize', setStagger, { passive: true });

  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('pf-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  cards.forEach(function(c) { io.observe(c); });
})();


/* ────────────────────────────────────────────────────────────
   5. 3-D TILT + CURSOR SPOTLIGHT
   On mousemove inside a .pf-card:
     • Applies a perspective rotateX/Y relative to card centre
     • Sets --mx/--my CSS custom props for the ::before radial glow
   On mouseleave: resets transform smoothly.
   ──────────────────────────────────────────────────────────── */
document.querySelectorAll('.pf-card').forEach(function(card) {
  card.addEventListener('mousemove', function(e) {
    var r  = card.getBoundingClientRect();
    var cx = r.left + r.width  / 2;
    var cy = r.top  + r.height / 2;
    var dx = (e.clientX - cx) / (r.width  / 2);
    var dy = (e.clientY - cy) / (r.height / 2);
    card.style.transform = [
      'perspective(1100px)',
      'rotateX('+ (dy * -6) +'deg)',
      'rotateY('+ (dx *  6) +'deg)',
      'translateY(-7px)',
      'scale(1.018)'
    ].join(' ');
    // Spotlight follows cursor
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width  * 100).toFixed(1) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%');
  });

  card.addEventListener('mouseleave', function() {
    card.style.transform = '';
    card.style.transitionDelay = '0ms'; // ensure clean reset
  });
});


/* ────────────────────────────────────────────────────────────
   6. FILTER BUTTONS
   Clicking a .pf-filter button shows only cards with a
   matching data-cat attribute. Non-matching cards get
   .pf-out (low opacity + scale down).
   Updates the result count text.
   ──────────────────────────────────────────────────────────── */
(function initFilter() {
  var btns  = document.querySelectorAll('.pf-filter');
  var cards = document.querySelectorAll('.pf-card');
  var count = document.getElementById('resultCount');

  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Update active button
      btns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var filter  = btn.dataset.filter;
      var visible = 0;

      cards.forEach(function(card) {
        var match = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('pf-out', !match);
        if (match) visible++;
      });

      if (count) {
        count.textContent = 'Showing ' + visible + ' project' + (visible !== 1 ? 's' : '');
      }
    });
  });

  // Set initial count
  if (count) count.textContent = 'Showing ' + cards.length + ' projects';
})();


/* ────────────────────────────────────────────────────────────
   7. MODAL — reads data-modal JSON attribute
   Clicking a .pf-card (not on the .pf-btn link) opens the
   project detail modal.  Uses the shared modal-overlay from
   style.css and the global closeModal() from script.js.
   ──────────────────────────────────────────────────────────── */
document.querySelectorAll('.pf-card').forEach(function(card) {
  card.addEventListener('click', function(e) {
    // Ignore clicks on links/buttons inside the card
    if (e.target.closest('a, button')) return;

    var raw = card.getAttribute('data-modal');
    if (!raw) return;

    var data;
    try { data = JSON.parse(raw); }
    catch(err) { console.warn('Invalid modal JSON:', err); return; }

    var overlay = document.getElementById('projectModal');
    if (!overlay) return;

    // Populate modal fields
    var fields = {
      '#modal-title':    data.title    || '',
      '#modal-category': data.category || '',
      '#modal-client':   data.client   || '',
      '#modal-year':     data.year     || '',
      '#modal-tech':     data.tech     || '',
      '#modal-desc':     data.desc     || '',
      '#modal-emoji':    data.emoji    || '🖥️'
    };
    Object.keys(fields).forEach(function(sel) {
      var el = overlay.querySelector(sel);
      if (el) el.textContent = fields[sel];
    });

    // Background of modal image area
    var imgEl = overlay.querySelector('#modal-img');
    if (imgEl) imgEl.style.background = data.bg || 'var(--card)';

    // Tags
    var tagsEl = overlay.querySelector('#modal-tags');
    if (tagsEl) {
      tagsEl.innerHTML = (data.tags || []).map(function(t) {
        return '<span class="modal-tag">' + t + '</span>';
      }).join('');
    }

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});


/* ────────────────────────────────────────────────────────────
   8. VIDEO AUTOPLAY (viewport-aware)
   Future-ready: if you replace any .mkl-vp or .mkp-vp inner
   content with a <video> element, this observer will auto-play
   it when visible and pause it when scrolled away.
   Videos need: muted loop autoplay attributes.
   ──────────────────────────────────────────────────────────── */
(function initVideoAutoplay() {
  var vids = document.querySelectorAll('.mkl-vp video, .mkp-vp video');
  if (!vids.length) return;

  var vo = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      var v = entry.target;
      if (entry.isIntersecting) {
        v.muted = true;
        v.loop  = true;
        v.play().catch(function() {}); // Ignore autoplay policy errors
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.25 });

  vids.forEach(function(v) { vo.observe(v); });
})();
