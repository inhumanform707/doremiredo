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
            logo.src = "assets/images/logo-flip.svg"; // 👉 novi logo
        } else {
            header.classList.remove('scrolled');
            logo.src = "assets/images/logo-clean.svg"; // 👉 original
        }
    });

    // Mobile Menu Toggle - NOVA VERZIJA S DVIJE IKONE
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('menu-icon-menu');
    const iconX = document.getElementById('menu-icon-x');

    // Inicijalno postavi da je menu zatvoren
    iconMenu.style.display = 'flex';
    iconX.style.display = 'none';

    menuToggle.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        console.log('Menu hidden?', isHidden);

        if (isHidden) {
            // Otvori menu
            mobileMenu.classList.remove('hidden');
            iconMenu.style.display = 'none';
            iconX.style.display = 'flex';
            console.log('Otvaram menu');
        } else {
            // Zatvori menu
            mobileMenu.classList.add('hidden');
            iconMenu.style.display = 'flex';
            iconX.style.display = 'none';
            console.log('Zatvaram menu');
        }
    });

    // Close mobile menu on link click
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            iconMenu.style.display = 'flex';
            iconX.style.display = 'none';
        });
    });

    // Na početku, inicijaliziraj Lucide ikone
    document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
