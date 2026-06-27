// ===== LOADING SCREEN =====
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(function() {
    loadingScreen.classList.add('hidden');
  }, 1500);
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const navOverlay = document.getElementById('navOverlay');

function toggleMenu(open) {
  hamburger.classList.toggle('active', open);
  mobileNav.classList.toggle('open', open);
  navOverlay.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
hamburger.addEventListener('click', () => toggleMenu(!mobileNav.classList.contains('open')));
navOverlay.addEventListener('click', () => toggleMenu(false));
mobileNav.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => { if (!a.classList.contains('btn')) toggleMenu(false); });
});

function toggleMobileSub(el) {
  const sub = el.nextElementSibling;
  sub.classList.toggle('open');
  const icon = el.querySelector('.fa-chevron-down');
  if (icon) icon.style.transform = sub.classList.contains('open') ? 'rotate(180deg)' : '';
}
``
const phrases = [ 'Welcome To PaintArc.', 'Elevate Your Office.', 'Beautify Your Home.','Beyond The Brush.' ,
     ' Painted To Last.', 'Color Your World.', 'Paint Your Vision.'];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typingEl = document.getElementById('typing-text');

function type() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typingEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) { deleting = true; return setTimeout(type, 1800); }
  } else {
    typingEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; return setTimeout(type, 300); }
  }
  setTimeout(type, deleting ? 55 : 80);
}
setTimeout(type, 600);

// ===== GALLERY FILTER =====
function filterGallery(cat, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.gallery-item').forEach(item => {
    const match = cat === 'all' || item.dataset.cat === cat;
    item.style.display = match ? '' : 'none';
  });
}

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Force hero elements visible
setTimeout(() => {
  document.querySelectorAll('.hero-content .fade-up').forEach(el => el.classList.add('visible'));
}, 100);


window.addEventListener("scroll", function () {
    const header = document.querySelector("header"); 

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



// ===== SMOOTH ACTIVE NAV =====
const sections = document.querySelectorAll('section[id], div[id="services-full"], div[id="why-us"]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) a.style.color = 'var(--orange)';
  });
});

// ===== FORM SUBMIT =====
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = document.querySelector(".form-submit");
    const msg = document.getElementById("form-message");

    // Get required fields
    const first = form.querySelector('[name="first_name"]').value.trim();
    const last = form.querySelector('[name="last_name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const service = form.querySelector('[name="service"]').value.trim();
    const details = form.querySelector('[name="message"]').value.trim();

    // Check required fields
    if (
        first === "" ||
        last === "" ||
        email === "" ||
        phone === "" ||
        service === "" ||
        details === ""
    ) {

        msg.style.display = "block";
        msg.style.background = "#FEE2E2";
        msg.style.color = "#B91C1C";
        msg.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please fill in all required fields.';

        return;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        msg.style.display = "block";
        msg.style.background = "#FEE2E2";
        msg.style.color = "#B91C1C";
        msg.innerHTML = '<i class="fas fa-times-circle"></i> Please enter a valid email address.';

        return;
    }

    // Sending...
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    })

    .then(response => response.text())

    .then(data => {

        if (data.trim() === "success") {

            msg.style.display = "block";
            msg.style.background = "#DCFCE7";
            msg.style.color = "#166534";
            msg.innerHTML = '<i class="fas fa-check-circle"></i> Your message has been sent successfully!';

            form.reset();

        } else {

            msg.style.display = "block";
            msg.style.background = "#FEE2E2";
            msg.style.color = "#B91C1C";
            msg.innerHTML = '<i class="fas fa-times-circle"></i> ' + data;

        }

    })

    .catch(() => {

        msg.style.display = "block";
        msg.style.background = "#FEE2E2";
        msg.style.color = "#B91C1C";
        msg.innerHTML = '<i class="fas fa-times-circle"></i> Failed to connect to the server.';

    })

    .finally(() => {

        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';

    });

});

// ===== TYPING TEXT RESPONSIVE RESIZE =====
function adjustTypingSize() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const screenWidth = window.innerWidth;
        if (screenWidth < 480) {
            heroTitle.style.fontSize = 'clamp(1.5rem, 4vw, 2rem)';
        } else if (screenWidth < 768) {
            heroTitle.style.fontSize = 'clamp(1.8rem, 4.5vw, 2.8rem)';
        } else {
            heroTitle.style.fontSize = '';
        }
    }
}

// Run on load and resize
window.addEventListener('load', adjustTypingSize);
window.addEventListener('resize', adjustTypingSize);