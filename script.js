/* ===================================================
   I DESIGN 4 U — Main JavaScript
   =================================================== */

// ── CURSOR ──────────────────────────────────────────
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
  spawnSpark(mouseX, mouseY);
});

// Ring follows with lag
function animRing() {
  ringX += (mouseX - ringX) * .13;
  ringY += (mouseY - ringY) * .13;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animRing);
}
if (ring) animRing();

// Hover state
document.addEventListener('mouseover', e => {
  if (e.target.matches('a, button, [data-tilt], .p-item, .card, .tcard, .pcard, .faq-q')) {
    document.body.classList.add('cursor-hover');
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.matches('a, button, [data-tilt], .p-item, .card, .tcard, .pcard, .faq-q')) {
    document.body.classList.remove('cursor-hover');
  }
});

// ── SPARK TRAIL ──────────────────────────────────────
let lastSpark = 0;
function spawnSpark(x, y) {
  const now = Date.now();
  if (now - lastSpark < 45) return;
  lastSpark = now;
  const el = document.createElement('div');
  el.className = 'spark';
  const size = 3 + Math.random() * 5;
  const colors = ['#6c47ff','#ff4d8d','#00e5a0','#f5a623','#fff'];
  const ox = (Math.random() - .5) * 18;
  const oy = (Math.random() - .5) * 18;
  el.style.cssText = `
    width:${size}px;height:${size}px;
    left:${x + ox}px;top:${y + oy}px;
    background:${colors[Math.floor(Math.random() * colors.length)]};
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 650);
}

// ── NAV SCROLL ───────────────────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── MOBILE NAV ───────────────────────────────────────
const navToggle  = document.querySelector('.nav-toggle');
const navMobile  = document.querySelector('.nav-mobile');
if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMobile.classList.toggle('open');
  });
  // Close on link click
  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMobile.classList.remove('open');
    });
  });
}

// ── ACTIVE NAV ───────────────────────────────────────
(function() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ── TILT EFFECT ──────────────────────────────────────
function initTilt(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mousemove', e => {
      const r  = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top  + r.height / 2;
      const dx = (e.clientX - cx) / (r.width / 2);
      const dy = (e.clientY - cy) / (r.height / 2);
      el.style.transform = `perspective(900px) rotateX(${dy * -10}deg) rotateY(${dx * 10}deg) scale(1.025)`;
      el.style.transition = 'transform .05s linear, box-shadow .3s';
      // spotlight
      el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)';
      el.style.transition = 'transform .55s cubic-bezier(.03,.98,.52,.99), box-shadow .3s';
    });
  });
}

initTilt('.card');
initTilt('.tcard');
initTilt('.pcard');
initTilt('.p-item');

// ── SCROLL REVEAL ────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in'), i * 85);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revealObs.observe(el));

// ── COUNT-UP ─────────────────────────────────────────
const countObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '+';
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 55));
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur + suffix;
      if (cur >= target) clearInterval(t);
    }, 22);
    countObs.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));

// ── SCROLL TO TOP ────────────────────────────────────
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── FAQ ACCORDION ────────────────────────────────────
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    // close all
    document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ── MODAL ────────────────────────────────────────────
const modalOverlay = document.getElementById('projectModal');
if (modalOverlay) {
  // Close on overlay click
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });
  // Close button
  const closeBtn = modalOverlay.querySelector('.modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(data) {
  const overlay = document.getElementById('projectModal');
  if (!overlay) return;
  overlay.querySelector('#modal-title').textContent    = data.title;
  overlay.querySelector('#modal-category').textContent = data.category;
  overlay.querySelector('#modal-client').textContent   = data.client;
  overlay.querySelector('#modal-year').textContent     = data.year;
  overlay.querySelector('#modal-tech').textContent     = data.tech;
  overlay.querySelector('#modal-desc').textContent     = data.desc;
  overlay.querySelector('#modal-img').style.background = data.bg;
  overlay.querySelector('#modal-emoji').textContent    = data.emoji;
  // tags
  const tagsEl = overlay.querySelector('#modal-tags');
  tagsEl.innerHTML = data.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('projectModal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

window.openModal   = openModal;
window.closeModal  = closeModal;

// ── FORM SUBMIT ──────────────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type=submit]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      const status = document.getElementById('formStatus');
      if (status) {
        status.className = 'form-status success';
        status.textContent = '✓ Message sent! We\'ll get back to you within 24 hours.';
        setTimeout(() => { status.className = 'form-status'; }, 5000);
      }
      contactForm.reset();
      showToast('Message sent successfully! 🎉');
    }, 1600);
  });
}

// ── TOAST ────────────────────────────────────────────
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}
window.showToast = showToast;

// ── PORTFOLIO FILTER ─────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.p-item').forEach(item => {
      const match = filter === 'all' || item.dataset.cat === filter;
      item.style.opacity    = match ? '1' : '.25';
      item.style.transform  = match ? '' : 'scale(.97)';
      item.style.pointerEvents = match ? 'all' : 'none';
      item.style.transition = 'opacity .35s, transform .35s';
    });
  });
});

// ── SMOOTH ANCHOR ────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
