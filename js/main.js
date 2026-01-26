/* ================================================
   AVATON - Main JavaScript
   ================================================ */

// Dropdown toggle functionality (click-based)
function toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    const dropdown = document.getElementById('solutionsDropdown');
    const overlay = document.getElementById('dropdownOverlay');

    if (dropdown.classList.contains('active')) {
        closeDropdown();
    } else {
        dropdown.classList.add('active');
        overlay.classList.add('active');
    }
}

function closeDropdown() {
    const dropdown = document.getElementById('solutionsDropdown');
    const overlay = document.getElementById('dropdownOverlay');
    if (dropdown && overlay) {
        dropdown.classList.remove('active');
        overlay.classList.remove('active');
    }
}

// Initialize dropdown listeners
document.addEventListener('DOMContentLoaded', function() {
    // Close dropdown when clicking overlay
    const dropdownOverlay = document.getElementById('dropdownOverlay');
    if (dropdownOverlay) {
        dropdownOverlay.addEventListener('click', closeDropdown);
    }

    // Close dropdown on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDropdown();
        }
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealOnScroll = () => {
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();
    }

    // Cursor glow effect
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow) {
        let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorGlow.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursorGlow.style.opacity = '0';
        });

        function animateGlow() {
            glowX += (mouseX - glowX) * 0.08;
            glowY += (mouseY - glowY) * 0.08;
            cursorGlow.style.left = glowX - 250 + 'px';
            cursorGlow.style.top = glowY - 250 + 'px';
            requestAnimationFrame(animateGlow);
        }
        animateGlow();
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});
