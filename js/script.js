// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Mobile Menu Logic
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Change icon based on state
        if (nav.classList.contains('active')) {
            menuToggle.innerHTML = '&#10005;'; // Close (X)
        } else {
            menuToggle.innerHTML = '&#9776;'; // Hamburger
        }
    });

    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.innerHTML = '&#9776;';
        });
    });
}

// Page Animations
gsap.from('.heading', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.subheading', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.2,
    ease: 'power3.out'
});

gsap.from('.cta-buttons', {
    duration: 1,
    y: 20,
    opacity: 0,
    delay: 0.4,
    ease: 'power3.out'
});

gsap.from('.images img', {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    delay: 0.3,
    stagger: 0.2,
    ease: 'back.out(1.7)'
});

// Falling Icons Animation
const iconContainer = document.getElementById('gaming-icons');
if (iconContainer) {
    const icons = ['🖱️', '🎮', '⚡', '🎯', '🏆'];
    
    function createIcon() {
        const icon = document.createElement('div');
        icon.className = 'gaming-icon';
        icon.textContent = icons[Math.floor(Math.random() * icons.length)];
        icon.style.left = Math.random() * 100 + '%';
        // Random duration between 2s and 5s
        icon.style.animationDuration = Math.random() * 3 + 2 + 's';
        iconContainer.appendChild(icon);

        icon.addEventListener('animationend', () => {
            icon.remove();
        });
    }

    // Start creating icons
    setInterval(createIcon, 1000);
}

// Konami Code Easter Egg
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            gsap.to('body', {
                duration: 0.1,
                backgroundColor: '#ff0055',
                yoyo: true,
                repeat: 5,
                onComplete: () => {
                    gsap.to('body', { backgroundColor: '#0a0a0a' });
                }
            });
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
