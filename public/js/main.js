// ─── Custom Cursor ────────────────────────────────────────────────────────────
const cursor      = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');

let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

(function animateTrail() {
  trailX += (mouseX - trailX) * 0.12;
  trailY += (mouseY - trailY) * 0.12;
  cursorTrail.style.left = trailX + 'px';
  cursorTrail.style.top  = trailY + 'px';
  requestAnimationFrame(animateTrail);
})();

// ─── Typed Text ───────────────────────────────────────────────────────────────
const roles   = ['Full Stack Developer', 'AI Engineer', 'ML Enthusiast'];
const typedEl = document.getElementById('typed-text');

let roleIdx = 0, charIdx = 0, deleting = false;

function typeWriter() {
  const current = roles[roleIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeWriter, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx  = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeWriter, deleting ? 55 : 90);
}

typeWriter();

// ─── Navbar Scroll ────────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── Active Nav Link ──────────────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ─── Scroll Reveal — experience cards ────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-card').forEach(el => revealObserver.observe(el));

// ─── Tech items staggered reveal ──────────────────────────────────────────────
document.querySelectorAll('.tech-item').forEach((el, i) => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ${i * 0.05}s ease, transform 0.5s ${i * 0.05}s ease, border-color 0.3s, box-shadow 0.3s`;

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
      obs.unobserve(el);
    }
  }, { threshold: 0.1 });
  obs.observe(el);
});

// ─── Project cards staggered reveal ──────────────────────────────────────────
document.querySelectorAll('.project-card').forEach((el, i) => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(32px)';
  el.style.transition = `opacity 0.6s ${i * 0.15}s ease, transform 0.6s ${i * 0.15}s ease, border-color 0.4s, box-shadow 0.4s`;

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
      obs.unobserve(el);
    }
  }, { threshold: 0.1 });
  obs.observe(el);
});

// ─── Parallax orbs ───────────────────────────────────────────────────────────
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');

window.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth  - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  if (orb1) orb1.style.transform = `translate(${x}px, ${y}px)`;
  if (orb2) orb2.style.transform = `translate(${-x * 0.5}px, ${-y * 0.5}px)`;
});

// ─── Smooth scroll for nav links ──────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
