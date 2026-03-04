/* Vanilla JS for doremiredo */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Header Scroll Effect
    const header = document.getElementById('main-header');
    const logo = document.getElementById('logo-img');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            logo.src = "assets/images/logo-flip.png"; // 👉 novi logo
        } else {
            header.classList.remove('scrolled');
            logo.src = "assets/images/logo-clean.png"; // 👉 original
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    menuToggle.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            menuIcon.setAttribute('data-lucide', 'x');
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons(); // Re-render icons
    });

    // Close mobile menu on link click
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });

    // Card Flip Logic
    const flipBtns = document.querySelectorAll('.flip-btn');
    const unflipBtns = document.querySelectorAll('.unflip-btn');

    flipBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.program-card');
            card.classList.add('flipped');
        });
    });

    unflipBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.program-card');
            card.classList.remove('flipped');
        });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-scale');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Set Current Year in Footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
