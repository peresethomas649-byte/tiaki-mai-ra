/* ========================================
   TIAKI MAI RĀ — Interactive Scripts
   ======================================== */

/* ========================================
   TIAKI MAI RĀ — Interactive Scripts
   (SOLID Architecture)
   ======================================== */

// --- 1. Navigation & UI Controller ---
class NavigationSystem {
    constructor() {
        this.nav = document.getElementById('main-nav');
        this.hamburger = document.getElementById('nav-hamburger');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.init();
    }

    init() {
        if (!this.hamburger || !this.mobileMenu) return;

        this.hamburger.addEventListener('click', () => this.toggleMenu());

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleSmoothScroll(e, anchor));
        });

        // Close menu on link click
        this.mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.mobileMenu.classList.toggle('active');
        document.body.style.overflow = this.mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    closeMenu() {
        this.hamburger.classList.remove('active');
        this.mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    handleSmoothScroll(e, anchor) {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            this.closeMenu();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// --- 2. Scroll Animation Observer ---
class IntersectionAnimator {
    constructor() {
        this.initRevealObserver();
        this.initLogoObserver();
    }

    initRevealObserver() {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('revealed');
                else entry.target.classList.remove('revealed');
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

        document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));
    }

    initLogoObserver() {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.trusted__logo').forEach(el => observer.observe(el));
    }
}

// --- 3. Marquee System ---
class MarqueeEngine {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('.marquee-track').forEach(track => {
            const cards = track.innerHTML;
            track.innerHTML = cards + cards; // Duplicate for infinite scroll
        });
    }
}

// --- 4. Hero Visual Effects ---
class HeroVisuals {
    constructor() {
        this.hero = document.querySelector('.hero');
        this.orbLeft = document.getElementById('hero-orb-left');
        this.orbRight = document.getElementById('hero-orb-right');
        this.robotContainer = document.getElementById('hero-spline-robot');
        this.splineViewer = document.getElementById('spline-robot-viewer');
        this.robotLoaded = false;

        this.initSpline();
        this.initParallax();
        this.initCursorGlow();
    }

    isMobile() { return window.innerWidth <= 968; }

    initSpline() {
        if (!this.splineViewer) return;
        const revealRobot = () => {
            if (this.robotLoaded || !this.robotContainer) return;
            this.robotLoaded = true;
            this.robotContainer.classList.add('loaded');
            setTimeout(() => { this.robotContainer.style.transition = 'transform 0.15s ease-out'; }, 2000);
        };
        this.splineViewer.addEventListener('load', revealRobot);
        setTimeout(revealRobot, 6000);
    }

    initParallax() {
        if (!this.orbLeft || !this.orbRight) return;
        window.addEventListener('mousemove', (e) => {
            if (this.isMobile() || parseFloat(this.orbLeft.style.opacity) < 0.1) return;
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const deltaX = (clientX - centerX) / centerX;
            const deltaY = (clientY - centerY) / centerY;

            requestAnimationFrame(() => {
                this.orbLeft.style.transform = `translateY(-50%) translate(${deltaX * 15}px, ${deltaY * 10}px)`;
                this.orbRight.style.transform = `translateY(-50%) translate(${deltaX * -15}px, ${deltaY * -10}px)`;
            });
        });
    }

    initCursorGlow() {
        if (!this.hero) return;
        this.hero.addEventListener('mousemove', (e) => {
            if (this.isMobile()) return;
            const rect = this.hero.getBoundingClientRect();
            this.hero.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            this.hero.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    }

    updateScrollLayer(scrollY) {
        if (!this.orbLeft || !this.orbRight) return;
        const heroHeight = this.hero ? this.hero.offsetHeight : window.innerHeight;
        const fadeStart = heroHeight * 0.1;
        const fadeEnd = this.isMobile() ? heroHeight * 0.45 : heroHeight * 0.65;

        let progress = 0;
        if (scrollY > fadeStart) progress = Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);

        const opacity = 1 - progress;
        this.orbLeft.style.opacity = opacity;
        this.orbRight.style.opacity = opacity;

        if (this.robotContainer && this.robotLoaded) {
            this.robotContainer.style.opacity = opacity * 0.88;
        }

        if (this.isMobile()) {
            const drift = progress * 30;
            const scale = 1 - progress * 0.15;
            this.orbLeft.style.transform = `translateY(-50%) translate(${-drift}px, ${progress * 20}px) scale(${scale})`;
            this.orbRight.style.transform = `translateY(-50%) translate(${drift}px, ${progress * 20}px) scale(${scale})`;
        }
    }
}

// --- 5. Interactive Testimonial Engine ---
class TestimonialDeck {
    constructor() {
        this.section = document.getElementById('testimonials');
        this.deck = document.getElementById('card-deck');
        if (!this.deck || !this.section) return;

        this.cards = this.deck.querySelectorAll('.deck-card');
        this.totalCards = this.cards.length;
        this.isDeckFinished = false; // NEW LOGIC
        if (this.totalCards > 0) this.cards[0].classList.add('deck-active');

        this.initScrollLock();
    }

    initScrollLock() {
        const blockScroll = (e) => {
            const rect = this.section.getBoundingClientRect();
            const isPinned = rect.top <= 0 && rect.bottom > window.innerHeight;

            if (isPinned) {
                if (rect.top >= -5 && e.deltaY < 0) return; // Allow escape up
                
                // NEW: If all cards have peeled, allow the user to smoothly scroll down and leave!
                if (this.isDeckFinished && e.deltaY > 0) return;
                
                if (e.target.closest('.card-deck')) return; // Allow native scroll for deck interacting
                e.preventDefault(); // Lock scroll anywhere else
            }
        };

        window.addEventListener('wheel', blockScroll, { passive: false });
        window.addEventListener('touchmove', blockScroll, { passive: false });
    }

    updateDeckScroll() {
        if (!this.deck) return;

        const rect = this.section.getBoundingClientRect();
        const viewH = window.innerHeight;
        const maxScroll = Math.max(1, rect.height - viewH);
        const currentScroll = Math.max(0, -rect.top);
        let progress = Math.max(0, Math.min(1, currentScroll / maxScroll));

        if (rect.top <= 0 && rect.bottom > viewH) this.section.classList.add('is-pinned');
        else this.section.classList.remove('is-pinned');

        // Dead zone buffer for native scroll momentum safety
        if (progress < 0.15) progress = 0;
        else if (progress > 0.95) progress = 1;
        else progress = (progress - 0.15) / 0.8;

        const activeIdx = Math.min(this.totalCards - 1, Math.floor(progress * this.totalCards));
        
        // Track whether user has mathematically reached the 5th card state
        this.isDeckFinished = (activeIdx === this.totalCards - 1 && progress > 0.95);

        this.cards.forEach((card, i) => {
            let localProgress = (progress * this.totalCards) - i;
            
            // NEW LOGIC: The Final Card is permanently anchored to the screen
            if (i === this.totalCards - 1) {
                localProgress = Math.min(0, localProgress);
            }

            if (localProgress < 0) {
                card.style.transform = '';
                card.style.opacity = '';
                card.style.transition = '';
                card.style.zIndex = '';

                card.classList.remove('deck-dismissed');
                if (i === activeIdx) card.classList.add('deck-active');
                else card.classList.remove('deck-active');

            } else if (localProgress >= 0 && localProgress <= 1) {
                card.classList.remove('deck-active');
                card.classList.add('deck-dismissed');
                card.style.transition = 'none';
                card.style.zIndex = '10';

                const yMove = -120 * localProgress;
                const rot = -8 * localProgress;
                const opac = 1 - Math.pow(localProgress, 2);

                card.style.transform = `translateY(${yMove}%) rotate(${rot}deg)`;
                card.style.opacity = opac.toFixed(3);

            } else {
                card.classList.remove('deck-active');
                card.classList.add('deck-dismissed');
                card.style.transition = 'none';
                card.style.zIndex = '';
                card.style.transform = `translateY(-120%) rotate(-8deg)`;
                card.style.opacity = '0';
            }

            // Beacon glow for the active top card
            if (i === Math.floor(progress * this.totalCards)) {
                card.classList.add('deck-glow');
            } else {
                card.classList.remove('deck-glow');
            }
            
            // Manage Final Hint Visibility
            if (i === this.totalCards - 1) {
                if (this.isDeckFinished) card.classList.add('deck-finished');
                else card.classList.remove('deck-finished');
            }
        });
    }
}

// --- 6. Binary Content Trail (Matrix Effect & Easter Egg) ---
class BinaryTrail {
    constructor() {
        this.container = document.querySelector('.projects__content');
        if (!this.container) return;
        
        // We will spawn the absolute elements relative to this very specific DOM section
        this.container.style.position = 'relative';
        
        this.lastSpawnTime = 0;
        
        // EASTER EGG LOGIC
        this.easterEggMode = false;
        // Schedule first "Click Me" bait to appear 10 to 20 seconds from now
        this.nextBaitTime = Date.now() + (Math.random() * 10000 + 10000);
        // Hacker character set
        this.asciiSet = '!@#$%^&*()_+-=[]{}|;:\'",.<>/?~`\\'.split('');
        
        // NEW: Diversity & Love thematic dictionary
        this.themeWords = ['LGBTQIA+', 'Lesbian', 'Gay', 'Bisexual', 'Transgender', 'Queer', 'Diversity', 'Cultures', 'Languages', 'Values', 'Respect', 'Unity', 'Pride', 'LOVE is LOVE'];
        this.nextThemeTime = 0; // Trigger activates only during Easter Egg mode
        
        this.init();
    }

    init() {
        const parentSection = document.querySelector('.projects');
        const targetElement = parentSection || this.container;

        targetElement.addEventListener('mousemove', (e) => this.handleMouseMove(e), true);
        
        // intercept Right Clicks (Context Menu) to activate/deactivate the secret mode!
        targetElement.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Stop normal browser popup
            this.easterEggMode = !this.easterEggMode; // Toggle mode
            
            // When turning ON, rig the thematic bomb to drop in 3 to 5 seconds!
            if (this.easterEggMode) {
                this.nextThemeTime = Date.now() + (Math.random() * 2000 + 3000);
            }
        }, true);
    }

    handleMouseMove(e) {
        const now = Date.now();
        // Throttle heavily (e.g. max 1 spawn every 30ms) to ensure zero performance hit on large screens
        if (now - this.lastSpawnTime < 30) return;
        this.lastSpawnTime = now;

        // Calculate precise mathematical position relative solely to the container itself
        const rect = this.container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Determine if it is time to drop the Easter Egg Bait! (STRICTLY disabled during Easter Egg mode!)
        if (!this.easterEggMode && now >= this.nextBaitTime) {
            this.spawnParticle(x, y, true, false);
            // Reset timer for another 10-20 seconds
            this.nextBaitTime = now + (Math.random() * 10000 + 10000);
        }
        
        // Determine if it is time to drop an organic Theme Word (Strictly during Rainbow Mode)
        if (this.easterEggMode && now >= this.nextThemeTime) {
            this.spawnParticle(x, y, false, true);
            // Reset timer for another 3-5 seconds
            this.nextThemeTime = now + (Math.random() * 2000 + 3000);
        }

        // Spawn mathematically 3x more particles per tick! (Average ~4.5 instead of ~1.5)
        for (let i = 0; i < 4; i++) {
            this.spawnParticle(x, y, false, false);
        }
        if (Math.random() > 0.5) this.spawnParticle(x, y, false, false);
    }

    spawnParticle(x, y, isBait = false, isThemeWord = false) {
        const particle = document.createElement('span');
        particle.className = 'binary-char';
        
        // Apply rendering logic based on active state
        if (isThemeWord) {
            const word = this.themeWords[Math.floor(Math.random() * this.themeWords.length)];
            particle.innerText = word;
            particle.classList.add('binary-theme-word');
            
            // Giant capstone logic specifically for LOVE is LOVE
            if (word === 'LOVE is LOVE') particle.classList.add('binary-love-word');
            
            // Guarantee individual rainbow hues per word
            const hue = Math.floor(Math.random() * 360);
            particle.style.color = `hsl(${hue}, 100%, 70%)`;
            particle.style.textShadow = `0 0 15px hsl(${hue}, 100%, 65%), 0 0 30px hsl(${hue}, 100%, 40%)`;
            
        } else if (isBait) {
            particle.innerText = "Right Click Me";
            particle.classList.add('binary-click-me');
        } else if (this.easterEggMode) {
            // Rainbow ASCII Hack
            particle.innerText = this.asciiSet[Math.floor(Math.random() * this.asciiSet.length)];
            const hue = Math.floor(Math.random() * 360);
            particle.style.color = `hsl(${hue}, 100%, 65%)`;
            particle.style.textShadow = `0 0 10px hsl(${hue}, 100%, 65%), 0 0 20px hsl(${hue}, 100%, 50%)`;
        } else {
            // Standard Cyan Binary
            particle.innerText = Math.random() > 0.5 ? '1' : '0';
        }
        
        // Slightly random scatter physics around the exact cursor point
        // Increased diameter by 5x (35 * 5 = 175) for a massive sprawling cloud!
        const offsetX = (Math.random() - 0.5) * 175;
        const offsetY = (Math.random() - 0.5) * 175;
        
        particle.style.left = `${x + offsetX}px`;
        particle.style.top = `${y + offsetY}px`;
        
        // ORGANIC FADE: The Bait & Theme words live for a strict readable 4.5 seconds. Normal particles live randomly between 0.9 and 4.0
        const randomFadeSeconds = (isBait || isThemeWord) ? 4.5 : (Math.random() * 3.1) + 0.9;
        particle.style.animationDuration = `${randomFadeSeconds}s`;

        this.container.appendChild(particle);

        // Garbage collection: Dynamically delete this exact particle when its unique animation concludes
        setTimeout(() => {
            if (particle.parentNode) particle.parentNode.removeChild(particle);
        }, randomFadeSeconds * 1000);
    }
}

// --- 7. Liquid Glass Card Tilt Effect ---
class LiquidGlassCards {
    constructor() {
        this.cards = document.querySelectorAll('.testi-card');
        if (!this.cards.length) return;
        this.maxTilt = 12; // degrees
        this.lerpSpeed = 0.045; // lower = smoother/slower (0.05–0.15 sweet spot)
        this.cardStates = new Map();
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            // Track current and target values per card
            this.cardStates.set(card, {
                currentX: 0, currentY: 0,
                targetX: 0, targetY: 0,
                glowX: 50, glowY: 50,
                currentGlowX: 50, currentGlowY: 50,
                currentScale: 1, targetScale: 1,
                active: false,
            });

            card.addEventListener('mousemove', (e) => this.handleMove(e, card));
            card.addEventListener('mouseleave', () => this.handleLeave(card));
            card.addEventListener('mouseenter', () => {
                const state = this.cardStates.get(card);
                state.active = true;
                state.targetScale = 1.06;
                card.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
            });
        });

        // Single rAF loop for all cards
        this.animate();
    }

    handleMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const state = this.cardStates.get(card);
        // Set targets — the lerp loop will ease toward these
        state.targetX = -((y - centerY) / centerY) * this.maxTilt; // rotateX
        state.targetY = ((x - centerX) / centerX) * this.maxTilt;  // rotateY

        // Glow follows cursor instantly (no lerp delay)
        const glowX = ((x / rect.width) * 100).toFixed(1) + '%';
        const glowY = ((y / rect.height) * 100).toFixed(1) + '%';
        card.style.setProperty('--glow-x', glowX);
        card.style.setProperty('--glow-y', glowY);
    }

    handleLeave(card) {
        const state = this.cardStates.get(card);
        state.active = false;
        state.targetX = 0;
        state.targetY = 0;
        state.targetScale = 1;
        state.glowX = 50;
        state.glowY = 50;
    }

    lerp(current, target, speed) {
        return current + (target - current) * speed;
    }

    animate() {
        this.cardStates.forEach((state, card) => {
            const prevX = state.currentX;
            const prevY = state.currentY;

            state.currentX = this.lerp(state.currentX, state.targetX, this.lerpSpeed);
            state.currentY = this.lerp(state.currentY, state.targetY, this.lerpSpeed);
            state.currentScale = this.lerp(state.currentScale, state.targetScale, this.lerpSpeed);

            // Only update DOM if values actually changed meaningfully
            const delta = Math.abs(state.currentX - prevX) + Math.abs(state.currentY - prevY) + Math.abs(state.currentScale - state.targetScale);
            if (delta > 0.001) {
                card.style.transform = `perspective(800px) rotateX(${state.currentX.toFixed(2)}deg) rotateY(${state.currentY.toFixed(2)}deg) scale(${state.currentScale.toFixed(4)})`;
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// --- 8. Spline Performance Manager ---
class SplinePerformanceManager {
    constructor() {
        this.sections = [
            { section: document.getElementById('home'), viewer: document.getElementById('spline-robot-viewer') },
            { section: document.getElementById('projects'), viewer: document.getElementById('projects-spline-viewer') },
            { section: document.getElementById('testimonials'), viewer: document.getElementById('testimonials-spline-viewer') },
            { section: document.getElementById('contact'), viewer: document.getElementById('contact-spline-viewer') }
        ];
        this.initObserver();
    }

    initObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const viewer = entry.target._splineViewer;
                if (!viewer) return;

                if (entry.isIntersecting) {
                    // Start rendering again when moving into view
                    viewer.style.display = 'block';
                } else {
                    // Setting display: none natively pauses requestAnimationFrame for off-screen WebGL elements
                    viewer.style.display = 'none';
                }
            });
        }, {
            // Buffer to load the scene slightly before the user scrolls to it
            rootMargin: '300px 0px 300px 0px'
        });

        this.sections.forEach(item => {
            if (item.section && item.viewer) {
                // Attach reference to the viewer
                item.section._splineViewer = item.viewer;
                observer.observe(item.section);
            }
        });
    }
}

// --- 9. Master App Orchestrator ---
class App {
    constructor() {
        this.navSystem = new NavigationSystem();
        this.animator = new IntersectionAnimator();
        this.marquee = new MarqueeEngine();
        this.hero = new HeroVisuals();
        this.testimonialDeck = new TestimonialDeck();
        this.binaryTrail = new BinaryTrail();
        this.liquidGlass = new LiquidGlassCards();
        this.splineManager = new SplinePerformanceManager();
        this.navElement = document.getElementById('main-nav');

        this.ticking = false;
        window.addEventListener('scroll', () => this.handleGlobalScroll(), { passive: true });
    }

    handleGlobalScroll() {
        if (this.ticking) return;
        this.ticking = true;

        requestAnimationFrame(() => {
            const scrollY = window.scrollY;

            if (this.navElement) {
                if (scrollY > 50) this.navElement.classList.add('nav--scrolled');
                else this.navElement.classList.remove('nav--scrolled');
            }

            this.hero.updateScrollLayer(scrollY);
            this.testimonialDeck.updateDeckScroll();

            this.ticking = false;
        });
    }
}

// Boot Application
document.addEventListener('DOMContentLoaded', () => {
    window.tiakiApp = new App();
});
