// Modern CV JavaScript with enhanced animations and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize contact toggle functionality
    initContactToggle();

    // Initialize smooth scrolling and animations
    initAnimations();

    // Initialize tab change animations
    initTabAnimations();

    // Initialize responsive behavior
    adjustDisplayOnResize();
    window.addEventListener('resize', adjustDisplayOnResize);
});

// Contact toggle functionality with modern animations
function initContactToggle() {
    const toggleButton = document.getElementById('toggleButton');
    const toggleContent = document.getElementById('toggleContent');
    const toggleIcon = toggleButton?.querySelector('.toggle-icon');

    if (!toggleButton || !toggleContent) return;

    toggleButton.addEventListener('click', function() {
        const isExpanded = toggleContent.classList.contains('show');

        if (window.innerWidth <= 768) {
            if (isExpanded) {
                // Collapse
                toggleContent.classList.remove('show');
                toggleButton.classList.remove('expanded');
            } else {
                // Expand
                toggleContent.classList.add('show');
                toggleButton.classList.add('expanded');
            }
        }
    });
}

// Responsive display adjustments
function adjustDisplayOnResize() {
    const content = document.getElementById('toggleContent');
    const button = document.getElementById('toggleButton');

    if (!content || !button) return;

    if (window.innerWidth <= 768) {
        // Mobile: hide content by default, show button
        content.classList.remove('show');
        button.style.display = 'flex';
        button.classList.remove('expanded');
    } else {
        // Desktop: show content, hide button
        content.classList.add('show');
        button.style.display = 'none';
        button.classList.remove('expanded');
    }
}

// Initialize scroll animations and intersection observer
function initAnimations() {
    // Add animation classes to timeline items as they come into view
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.6s ease-out';
            }
        });
    }, observerOptions);

    timelineItems.forEach((item, index) => {
        // Set initial state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transitionDelay = `${index * 0.1}s`;

        // Observe for animation
        observer.observe(item);
    });

    // Animate about cards
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
}

// Tab change animations
function initTabAnimations() {
    const tabs = document.querySelectorAll('[data-bs-toggle="pill"]');

    tabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', function(e) {
            const targetPane = document.querySelector(e.target.getAttribute('data-bs-target'));

            if (targetPane) {
                // Add animation class
                targetPane.classList.add('fade-in');

                // Remove animation class after animation completes
                setTimeout(() => {
                    targetPane.classList.remove('fade-in');
                }, 600);
            }
        });
    });
}

// Add smooth hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn-contact-toggle, .nav-link');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .btn-contact-toggle, .nav-link {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Enhanced scroll behavior
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize smooth scroll
initSmoothScroll();

// Add performance optimizations
let ticking = false;

function updateOnScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            // Add scroll-based animations here if needed
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', updateOnScroll, { passive: true });

// Theme preference detection (for future dark mode implementation)
function detectThemePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme-preferred');
    }
}

detectThemePreference();

// Print optimization
window.addEventListener('beforeprint', function() {
    // Ensure all content is visible for printing
    const toggleContent = document.getElementById('toggleContent');
    if (toggleContent) {
        toggleContent.style.display = 'block';
        toggleContent.style.opacity = '1';
        toggleContent.style.maxHeight = 'none';
    }
});

// Progressive enhancement for older browsers
if (!window.IntersectionObserver) {
    // Fallback for browsers without IntersectionObserver
    const timelineItems = document.querySelectorAll('.timeline-item, .about-card');
    timelineItems.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    });
}
