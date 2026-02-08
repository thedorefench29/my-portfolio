        // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Matrix Rain Effect JavaScript
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 14, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff88';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

            // Text Switching Effect (Fade In/Out)
            const texts = [
                'FULL STACK DEVELOPER',
                'PROBLEM SOLVER',
                'TECH ENTHUSIAST',
                'CODE ARTIST'
            ];
            let textIndex = 0;
            const typedElement = document.getElementById('typed');

            function switchText() {
                if (!typedElement) return;
                
                // Fade out
                typedElement.style.opacity = '0';
                
                setTimeout(() => {
                    // Change text
                    textIndex = (textIndex + 1) % texts.length;
                    typedElement.textContent = texts[textIndex];
                    
                    // Fade in
                    typedElement.style.opacity = '1';
                }, 500);
            }

            if (typedElement) {
                // Set initial text
                typedElement.textContent = texts[0];
                typedElement.style.opacity = '1';
                
                // Switch text every 3 seconds
                setInterval(switchText, 3000);
            }

            // Active Nav Link Indicator
            const navLinkElements = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('section[id]');

            function updateActiveNavLink() {
                let current = '';
                const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = sectionId;
                    }
                });

                navLinkElements.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href').substring(1);
                    if (href === current) {
                        link.classList.add('active');
                    }
                });

                if (scrollPosition < 100) {
                    navLinkElements.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#home') {
                            link.classList.add('active');
                        }
                    });
                }
            }

            window.addEventListener('scroll', updateActiveNavLink);
            updateActiveNavLink();

            // Smooth Scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        setTimeout(() => {
                            updateActiveNavLink();
                        }, 500);
                    }
                });
            });

            // Hamburger Menu Toggle
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('navLinks');
            const navLinkItems = document.querySelectorAll('.nav-link');

            if (hamburger && navLinks) {
                hamburger.addEventListener('click', (e) => {
                    e.stopPropagation();
                    hamburger.classList.toggle('active');
                    navLinks.classList.toggle('active');
                    
                    if (navLinks.classList.contains('active')) {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = '';
                    }
                });

                navLinkItems.forEach(link => {
                    link.addEventListener('click', () => {
                        hamburger.classList.remove('active');
                        navLinks.classList.remove('active');
                        document.body.style.overflow = '';
                    });
                });

                document.addEventListener('click', (e) => {
                    if (navLinks.classList.contains('active')) {
                        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                            hamburger.classList.remove('active');
                            navLinks.classList.remove('active');
                            document.body.style.overflow = '';
                        }
                    }
                });

                window.addEventListener('resize', () => {
                    if (window.innerWidth > 768) {
                        hamburger.classList.remove('active');
                        navLinks.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            }
        });
