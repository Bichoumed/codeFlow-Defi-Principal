/* ==========================================
   NIRD Quest - Visual Animations & Effects
   ========================================== */

/* ==========================================
   Particles System
   ========================================== */

function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer, i);
    }
}

function createParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random positioning
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random size
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random animation delay and duration
    particle.style.animationDelay = (Math.random() * 15) + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    
    container.appendChild(particle);
}

/* ==========================================
   Floating Elements Animation
   ========================================== */

function addFloatingAnimation(element, amplitude = 10, duration = 3) {
    let startTime = null;
    
    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        const y = Math.sin(progress * Math.PI * 2) * amplitude;
        element.style.transform = `translateY(${y}px)`;
        
        requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
}

/* ==========================================
   Counter Animation
   ========================================== */

function animateCounter(element, start, end, duration = 1000) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        const currentValue = Math.round(start + (end - start) * easeProgress);
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

/* ==========================================
   Ripple Effect
   ========================================== */

function createRipple(event, element) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = event.clientX - rect.left - size / 2 + 'px';
    ripple.style.top = event.clientY - rect.top - size / 2 + 'px';
    
    element.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}

/* ==========================================
   Shake Animation
   ========================================== */

function shakeElement(element, intensity = 5, duration = 500) {
    const startTime = performance.now();
    const originalTransform = element.style.transform;
    
    function shake(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = elapsed / duration;
        
        if (progress < 1) {
            const x = (Math.random() - 0.5) * intensity * (1 - progress);
            const y = (Math.random() - 0.5) * intensity * (1 - progress);
            element.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(shake);
        } else {
            element.style.transform = originalTransform;
        }
    }
    
    requestAnimationFrame(shake);
}

/* ==========================================
   Pulse Animation
   ========================================== */

function pulseElement(element, scale = 1.1, duration = 300) {
    element.style.transition = `transform ${duration / 2}ms ease`;
    element.style.transform = `scale(${scale})`;
    
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, duration / 2);
}

/* ==========================================
   Glow Effect
   ========================================== */

function addGlowEffect(element, color = '#4A90D9', intensity = 20) {
    element.style.boxShadow = `0 0 ${intensity}px ${color}`;
    
    return () => {
        element.style.boxShadow = '';
    };
}

/* ==========================================
   Typewriter Effect
   ========================================== */

function typewriterEffect(element, text, speed = 50) {
    return new Promise((resolve) => {
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        
        type();
    });
}

/* ==========================================
   Fade Transition
   ========================================== */

function fadeOut(element, duration = 300) {
    return new Promise((resolve) => {
        element.style.transition = `opacity ${duration}ms ease`;
        element.style.opacity = '0';
        
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

function fadeIn(element, duration = 300) {
    return new Promise((resolve) => {
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms ease`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
        });
        
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

/* ==========================================
   Slide Transition
   ========================================== */

function slideIn(element, direction = 'left', duration = 300) {
    const transforms = {
        left: 'translateX(-50px)',
        right: 'translateX(50px)',
        up: 'translateY(-50px)',
        down: 'translateY(50px)'
    };
    
    element.style.opacity = '0';
    element.style.transform = transforms[direction];
    element.style.transition = `all ${duration}ms ease`;
    
    requestAnimationFrame(() => {
        element.style.opacity = '1';
        element.style.transform = 'translate(0, 0)';
    });
}

/* ==========================================
   Staggered Animation
   ========================================== */

function staggeredAnimation(elements, animationClass, delay = 100) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add(animationClass);
        }, index * delay);
    });
}

/* ==========================================
   Confetti Effect
   ========================================== */

function launchConfetti(options = {}) {
    const {
        count = 50,
        colors = ['#4A90D9', '#2ECC71', '#9B59B6', '#1ABC9C', '#F39C12'],
        duration = 3000
    } = options;
    
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(container);
    
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 10 + 5;
        const left = Math.random() * 100;
        const animDuration = Math.random() * 2 + 2;
        const delay = Math.random() * 0.5;
        
        confetti.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${left}%;
            top: -20px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            animation: confettiFall ${animDuration}s ease-out ${delay}s forwards;
        `;
        
        container.appendChild(confetti);
    }
    
    setTimeout(() => {
        container.remove();
    }, duration + 1000);
}

/* ==========================================
   Score Popup
   ========================================== */

function showScorePopup(element, points, isPositive) {
    const popup = document.createElement('div');
    popup.textContent = isPositive ? `+${points}` : `${points}`;
    popup.style.cssText = `
        position: absolute;
        font-size: 1.5rem;
        font-weight: bold;
        color: ${isPositive ? '#2ECC71' : '#E74C3C'};
        pointer-events: none;
        z-index: 100;
        animation: scorePopup 1s ease-out forwards;
    `;
    
    const rect = element.getBoundingClientRect();
    popup.style.left = rect.left + rect.width / 2 + 'px';
    popup.style.top = rect.top + 'px';
    
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.remove();
    }, 1000);
}

/* ==========================================
   Add dynamic keyframes
   ========================================== */

const style = document.createElement('style');
style.textContent = `
    @keyframes scorePopup {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px) scale(1.5);
        }
    }
    
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: rippleAnim 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleAnim {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ==========================================
   Initialize on Load
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Add ripple effect to buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('click', (e) => createRipple(e, btn));
    });
    
    // Add hover sound effects (optional)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            // Could add hover sound here
        });
    });
});

/* ==========================================
   Export functions for global use
   ========================================== */

window.AnimationEffects = {
    initParticles,
    addFloatingAnimation,
    animateCounter,
    createRipple,
    shakeElement,
    pulseElement,
    addGlowEffect,
    typewriterEffect,
    fadeOut,
    fadeIn,
    slideIn,
    staggeredAnimation,
    launchConfetti,
    showScorePopup
};
