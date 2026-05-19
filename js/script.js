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
        const isOpen = !this.mobileMenu.classList.contains('active');
        this.hamburger.classList.toggle('active', isOpen);
        this.mobileMenu.classList.toggle('active', isOpen);
        this.hamburger.setAttribute('aria-expanded', String(isOpen));
        this.mobileMenu.setAttribute('aria-hidden', String(!isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    closeMenu() {
        this.hamburger.classList.remove('active');
        this.mobileMenu.classList.remove('active');
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.mobileMenu.setAttribute('aria-hidden', 'true');
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
            // Hard-skip on touch / coarse pointers — long-press on mobile
            // shouldn't spawn the Easter egg toggle; the OS context menu
            // is suppressed by the global preventer in App init.
            if (e.pointerType === 'touch' || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)) return;
            e.preventDefault(); // Stop normal browser popup
            this.easterEggMode = !this.easterEggMode; // Toggle mode

            // When turning ON, rig the thematic bomb to drop in 3 to 5 seconds!
            if (this.easterEggMode) {
                this.nextThemeTime = Date.now() + (Math.random() * 2000 + 3000);
            }
        }, true);
    }

    handleMouseMove(e) {
        // Belt-and-braces: even if BinaryTrail was accidentally
        // instantiated on a touch device, suppress particle spawn for
        // synthesized mouse events from touches.
        if (e.pointerType === 'touch') return;
        if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
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
        this.scriptPromise = null;
        this.heroViewer = document.getElementById('spline-robot-viewer');
        this.lazyContainers = Array.from(document.querySelectorAll('.spline-lazy[data-spline-url]'));
        this.initHeroObserver();
        this.initLazyObserver();
    }

    loadSplineScript() {
        if (window.customElements && customElements.get('spline-viewer')) return Promise.resolve();
        if (this.scriptPromise) return this.scriptPromise;

        this.scriptPromise = new Promise((resolve, reject) => {
            const existing = document.querySelector('script[data-spline-viewer-loader]');
            if (existing) {
                existing.addEventListener('load', resolve, { once: true });
                existing.addEventListener('error', reject, { once: true });
                return;
            }

            const script = document.createElement('script');
            script.type = 'module';
            script.src = 'https://unpkg.com/@splinetool/viewer@1/build/spline-viewer.js';
            script.dataset.splineViewerLoader = 'true';
            script.addEventListener('load', resolve, { once: true });
            script.addEventListener('error', reject, { once: true });
            document.head.appendChild(script);
        });

        return this.scriptPromise;
    }

    initHeroObserver() {
        const heroSection = document.getElementById('home');
        if (!heroSection || !this.heroViewer) return;

        this.loadSplineScript().catch(() => {});

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                this.heroViewer.style.display = entry.isIntersecting ? 'block' : 'none';
            });
        }, { rootMargin: '300px 0px 300px 0px' });

        observer.observe(heroSection);
    }

    initLazyObserver() {
        if (!this.lazyContainers.length) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                const container = entry.target;
                if (!entry.isIntersecting) {
                    const viewer = container.querySelector('spline-viewer');
                    if (viewer) viewer.style.display = 'none';
                    return;
                }

                const existing = container.querySelector('spline-viewer');
                if (existing) {
                    existing.style.display = 'block';
                    return;
                }

                container.classList.add('is-loading');
                this.loadSplineScript()
                    .then(() => {
                        const viewer = document.createElement('spline-viewer');
                        viewer.id = container.dataset.splineId || '';
                        viewer.setAttribute('url', container.dataset.splineUrl);
                        viewer.addEventListener('load', () => container.classList.remove('is-loading'), { once: true });
                        container.appendChild(viewer);
                    })
                    .catch(() => container.classList.remove('is-loading'));
            });
        }, { rootMargin: '500px 0px 500px 0px' });

        this.lazyContainers.forEach(container => observer.observe(container));
    }
}

// --- 8b. Projects Carousel (3D perspective stack) ---
// Replaces the old .testi-grid. Builds a depth-stacked carousel of
// .proj-card elements driven by a fractional `pos` (0..n-1). Each card's
// position/scale/opacity/blur is computed per-frame as an offset from
// `pos` and applied via CSS custom properties (--cx, --cy, --cz, --rx,
// --ry, --cs, --co, --cb, --cblur). The carousel is horizontal on
// desktop and vertical on mobile; tapping a back card brings it to the
// front, tapping the front card opens a detail overlay with a CTA link
// to the project page.
class ProjectsCarousel {
    constructor() {
        this.root = document.getElementById('projects-carousel');
        if (!this.root) return;
        this.stage = this.root.querySelector('.proj-carousel__stage');
        this.track = this.root.querySelector('.proj-carousel__track');
        this.cards = Array.from(this.track.querySelectorAll('.proj-card'));
        this.prevBtn = document.getElementById('proj-prev');
        this.nextBtn = document.getElementById('proj-next');
        this.counterCur = document.getElementById('proj-counter-cur');
        this.counterTot = document.getElementById('proj-counter-tot');
        // The old .proj-detail popup is gone — description + project
        // link now live on the card itself and are revealed inline.

        this.n = this.cards.length;
        this.pos = 0; // fractional active position, 0..n-1
        this.velocity = 0; // pos-units per frame
        this.dragging = false;
        this.dragStart = null;
        this.dragLastT = 0;
        this.dragLastDelta = 0;
        // Inline reveal pattern (replaces the old popup modal).
        // -1 means no card revealed; otherwise the card index currently
        // expanded face-on with its description + project link.
        this.revealedIdx = -1;

        // Wheel accumulation for trackpad/scroll → discrete steps
        this.wheelAccum = 0;
        this.wheelLastTs = 0;

        // Mobile scroll-pin: when the .projects section's sticky
        // wrapper is pinned, we map scroll progress through the section
        // onto carousel.pos (so the user must scroll through all 11
        // cards before continuing past the section).
        this.scrollPinSection = document.getElementById('projects');
        this.scrollPinWrapper = document.getElementById('projects-carousel-pin');
        this.scrollTickPending = false;

        if (this.counterTot) this.counterTot.textContent = String(this.n).padStart(2, '0');

        this.injectInlineCtas();
        this.bindEvents();
        this.layout();
        this.loop();
    }

    // Add an inline "View project →" CTA to each card. The link is
    // hidden until the card has .is-revealed (CSS). Honours the same
    // data-href / data-target attributes the old detail modal used.
    injectInlineCtas() {
        this.cards.forEach((card) => {
            // Avoid double-injection on hot-reload
            if (card.querySelector('.proj-card__cta')) return;
            const href = card.getAttribute('data-href');
            const target = card.getAttribute('data-target') || '_self';
            const chrome = card.querySelector('.proj-card__chrome');
            if (!chrome) return;
            const a = document.createElement(href ? 'a' : 'span');
            a.className = 'proj-card__cta';
            if (href) {
                a.setAttribute('href', href);
                if (target === '_blank') {
                    a.setAttribute('target', '_blank');
                    a.setAttribute('rel', 'noopener noreferrer');
                }
            } else {
                a.classList.add('is-disabled');
                a.setAttribute('aria-disabled', 'true');
            }
            a.innerHTML = `
                <span class="proj-card__cta-label">${href ? 'View project' : 'No external link'}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            `;
            chrome.appendChild(a);
        });
    }

    isVertical() {
        return window.matchMedia('(max-width: 768px)').matches;
    }

    // True only when mobile + the projects section is scroll-pinning
    // the carousel. We use this to gate the scroll → pos mapping and
    // to disable touch drag on mobile (since scroll is the input).
    isScrollPinActive() {
        return this.isVertical() && !!this.scrollPinSection;
    }

    // Compute the per-card transform values for a given offset (i - pos).
    //
    // Two different visual models:
    //
    // DESKTOP — cards always tilted to the same side (no sign-dependent
    // rotation that would jump 160° when pos crosses an integer). The
    // active centered card is slightly LESS tilted (bend-toward-viewer
    // hint) and protrudes via translateZ. Click to reveal face-on.
    //
    // MOBILE — the active centered card auto-faces the viewer (rotateX
    // 0°) showing its full chrome (description + CTA). Adjacent cards
    // tilt away (rotateX ±80°) along the vertical stack.
    //
    // Spacing is tight — cards stacked like a deck. When any card is
    // revealed, the other cards spread outward to make room.
    geometryForOffset(offset) {
        const vertical = this.isVertical();
        const abs = Math.abs(offset);
        const sign = offset >= 0 ? 1 : -1;
        const anyRevealed = this.revealedIdx >= 0;

        // Tight stacking — about 17% of viewport per step (desktop) /
        // 15% (mobile). Reveal-spread blows them out to 1.8× so the
        // popped-out card has clear breathing room.
        const baseStep = vertical
            ? Math.min(140, window.innerHeight * 0.15)
            : Math.min(220, window.innerWidth * 0.17);
        const lateralStep = anyRevealed ? baseStep * 1.8 : baseStep;
        const lateral = sign * Math.min(abs, 6) * lateralStep;

        // Orbit curve — cards arc back via 1 - cos so they appear to
        // wrap around a sphere instead of sliding flat.
        const orbitAngle = Math.min(abs, 5) * 0.16;
        const orbitR = vertical ? 220 : 280;
        const orbitDepth = -orbitR * (1 - Math.cos(orbitAngle));

        // Curve-from-bottom (desktop only): cards arc downward as they
        // move outward from the active centre. The active card sits at
        // y=0; outer cards descend along a power curve so the whole
        // stack reads as a fan / wreath radiating from a centre point
        // (per the user's reference screenshot of "Reactive Carousels").
        const arcCurve = vertical ? 0 : Math.pow(Math.min(abs, 5), 1.25) * 28;

        // Rotation — see the docstring for the desktop vs mobile split.
        let flipAngle;
        if (vertical) {
            // Mobile: active card faces user (0°), adjacent cards tilt
            // off-axis. Continuous function so there are no jumps —
            // rotateX scales smoothly with absolute offset.
            //   offset 0   → 0°    (face-on, description visible)
            //   offset 0.5 → 50°
            //   offset 1+  → 80°   (clamp at edge)
            // Sign of rotation matches sign of offset so cards above
            // active (negative offset) tilt one way and cards below
            // (positive offset) tilt the other — giving a 3D arc feel.
            flipAngle = sign * Math.min(80, abs * 80);
        } else {
            // Desktop: ALL cards tilt the same direction (no sign-flip
            // jump at offset=0). Active card bends toward viewer by
            // reducing rotation magnitude — exponential bell centred
            // on offset 0 so the transition is smooth.
            const baseEdge = 68;
            const bendOut = 28 * Math.exp(-offset * offset * 1.4);
            flipAngle = baseEdge - bendOut;
        }

        // Slight orbit-tilt around the OTHER axis for 3D depth.
        const tiltSecondary = vertical ? 0 : 4 * Math.sin(offset * 0.35);

        // Active card slightly protrudes toward viewer.
        const protrude = abs < 0.5 ? 30 * (1 - abs * 2) : 0;

        // Opacity holds 1 across the active band, fades by ±3.
        let opacity;
        if (abs <= 0.5) opacity = 1;
        else if (abs <= 2) opacity = 1 - (abs - 0.5) * 0.32;
        else if (abs <= 3) opacity = 0.52 - (abs - 2) * 0.45;
        else opacity = 0;

        const scale = Math.max(0.78, 1 - abs * 0.05);
        const brightness = Math.max(0.55, 1 - abs * 0.13);
        const blur = Math.min(1.8, abs * 0.35);

        return {
            cx: vertical ? 0 : lateral,
            cy: vertical ? lateral : arcCurve,
            cz: orbitDepth + protrude,
            rx: vertical ? flipAngle : tiltSecondary,
            ry: vertical ? tiltSecondary : flipAngle,
            cs: scale,
            co: opacity,
            cb: brightness,
            cblur: blur
        };
    }

    layout() {
        const activeIdx = Math.round(this.pos);
        for (let i = 0; i < this.n; i++) {
            const card = this.cards[i];
            const offset = i - this.pos;
            const g = this.geometryForOffset(offset);
            const style = card.style;
            style.setProperty('--cx', g.cx + 'px');
            style.setProperty('--cy', g.cy + 'px');
            style.setProperty('--cz', g.cz + 'px');
            style.setProperty('--rx', g.rx + 'deg');
            style.setProperty('--ry', g.ry + 'deg');
            style.setProperty('--cs', g.cs.toFixed(3));
            style.setProperty('--co', g.co.toFixed(3));
            style.setProperty('--cb', g.cb.toFixed(3));
            style.setProperty('--cblur', g.cblur.toFixed(2) + 'px');
            // Only the front card reveals the body quote
            const textOpacity = Math.max(0, 1 - Math.abs(offset) * 1.6);
            style.setProperty('--co-text', textOpacity.toFixed(3));
            // Stack front-most card on top
            style.zIndex = String(1000 - Math.round(Math.abs(offset) * 10));
            // Only let the front + adjacent cards swallow taps
            const interactive = Math.abs(offset) <= 4;
            style.pointerEvents = interactive ? 'auto' : 'none';
            card.setAttribute('aria-hidden', interactive ? 'false' : 'true');
            card.classList.toggle('is-active', i === activeIdx);
        }
        if (this.counterCur) {
            this.counterCur.textContent = String(activeIdx + 1).padStart(2, '0');
        }
        if (this.prevBtn) this.prevBtn.disabled = activeIdx <= 0;
        if (this.nextBtn) this.nextBtn.disabled = activeIdx >= this.n - 1;
    }

    // Used for free-tracking (drag / wheel during pan): no CSS transition.
    setPosFree(pos) {
        this.pos = Math.max(-0.35, Math.min(this.n - 1 + 0.35, pos));
        this.track.classList.add('is-dragging');
        this.layout();
    }

    // Snap to an integer index with the CSS transition playing.
    snapTo(target) {
        this.velocity = 0;
        this.wheelAccum = 0;
        const idx = Math.max(0, Math.min(this.n - 1, target));
        this.track.classList.remove('is-dragging');
        this.pos = idx;
        this.layout();
    }

    step(delta) {
        const target = Math.round(this.pos) + delta;
        this.snapTo(target);
    }

    bindEvents() {
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => {
            if (this.revealedIdx >= 0) return; // locked while a card is revealed
            this.step(-1);
        });
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => {
            if (this.revealedIdx >= 0) return;
            this.step(1);
        });

        this.stage.addEventListener('wheel', (e) => this.onWheel(e), { passive: false });

        // Pointer drag — works for mouse + touch
        this.stage.addEventListener('pointerdown', (e) => this.onPointerDown(e));
        window.addEventListener('pointermove', (e) => this.onPointerMove(e));
        window.addEventListener('pointerup', (e) => this.onPointerUp(e));
        window.addEventListener('pointercancel', (e) => this.onPointerUp(e));

        this.cards.forEach((card, i) => {
            card.addEventListener('click', (e) => this.onCardClick(e, card, i));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.onCardClick(e, card, i);
                } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    if (this.revealedIdx >= 0) return;
                    e.preventDefault();
                    this.step(1);
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    if (this.revealedIdx >= 0) return;
                    e.preventDefault();
                    this.step(-1);
                }
            });
        });

        // Esc collapses any revealed card.
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.revealedIdx >= 0) this.collapseReveal();
        });
        // Click anywhere outside an active CARD = collapse. We deliberately
        // allow clicks on the carousel chrome (stage, hud, edges) to
        // count as "outside" so the user can dismiss by tapping nearly
        // anywhere — but onCardClick handles taps on the cards
        // themselves (which toggle reveal / snap-to-front).
        document.addEventListener('click', (e) => {
            if (this.revealedIdx < 0) return;
            // Clicks ON a card or on the CTA link inside one are handled
            // by onCardClick; don't double-process them here.
            if (e.target.closest('.proj-card')) return;
            this.collapseReveal();
        });

        // Orientation / viewport change → relayout
        window.addEventListener('resize', () => this.layout(), { passive: true });

        // Mobile scroll-pin: throttle a rAF tick on scroll and update
        // carousel.pos from how far we've scrolled through the section.
        window.addEventListener('scroll', () => this.onPageScroll(), { passive: true });
    }

    onPageScroll() {
        if (this.scrollTickPending) return;
        this.scrollTickPending = true;
        requestAnimationFrame(() => {
            this.scrollTickPending = false;
            // Don't advance the carousel while a card is revealed —
            // body scroll is locked too (in expandReveal) so this is
            // a belt-and-braces check.
            if (this.revealedIdx >= 0) return;
            if (!this.isScrollPinActive()) return;
            // Compute progress against the PIN'S PARENT (.projects__content)
            // rather than the whole .projects section. The section's top
            // starts before the spline-bg (which occupies ~95vh on mobile
            // before the pin engages); using it as the base would put
            // pos at ~1.5 by the time the user actually sees the
            // carousel. The pin's parent begins AFTER the spline-bg, so
            // parent.top reaching 0 lines up with pin engagement → pos 0
            // (My Story).
            const parent = this.scrollPinWrapper.parentElement;
            if (!parent) return;
            const parentRect = parent.getBoundingClientRect();
            const viewH = window.innerHeight;
            const scrollable = Math.max(1, parent.offsetHeight - viewH);
            const past = Math.max(0, Math.min(scrollable, -parentRect.top));
            const progress = past / scrollable;
            const targetPos = progress * (this.n - 1);
            // Direct-set (no transition) for tight scroll tracking, then
            // snap on idle to clean up the partial state.
            this.pos = Math.max(0, Math.min(this.n - 1, targetPos));
            this.track.classList.add('is-dragging');
            this.layout();
            // Cancel any momentum from a stale drag.
            this.velocity = 0;
            // Defer a snap-out so when scrolling pauses the card lands
            // on the nearest integer with a smooth ease. Longer timeout
            // so iOS Safari's deferred scroll events don't cause the
            // snap to re-fire mid-glide (which read as "jumping").
            clearTimeout(this._snapOutT);
            this._snapOutT = setTimeout(() => {
                if (!this.isScrollPinActive() || this.dragging) return;
                if (this.revealedIdx >= 0) return;
                const target = Math.max(0, Math.min(this.n - 1, Math.round(this.pos)));
                // Only snap if we're close to a card — avoid pulling
                // pos to an integer while the user is still mid-scroll
                // between cards, which causes visible jumps.
                if (Math.abs(target - this.pos) > 0.001) {
                    this.track.classList.remove('is-dragging');
                    this.pos = target;
                    this.layout();
                }
            }, 320);
        });
    }

    onWheel(e) {
        // Don't navigate while a card is revealed — the user is reading,
        // not browsing. We also preventDefault so the page itself doesn't
        // scroll under the popped-out card.
        if (this.revealedIdx >= 0) { e.preventDefault(); return; }
        // Mobile: scroll-pin owns navigation, ignore wheel here.
        if (this.isScrollPinActive()) return;
        // Desktop: only horizontal wheel/trackpad scrolls drive the
        // carousel. Vertical wheel passes through so the user can scroll
        // past the projects section normally — hijacking vertical wheel
        // here would trap the page when scrolling over the carousel.
        const primary = e.deltaX;
        if (!primary || Math.abs(primary) < Math.abs(e.deltaY) * 0.6) return;
        const now = performance.now();
        if (now - this.wheelLastTs > 280) this.wheelAccum = 0;
        this.wheelLastTs = now;
        this.wheelAccum += primary;
        const threshold = 70;
        let stepped = false;
        while (this.wheelAccum > threshold) {
            this.step(1);
            this.wheelAccum -= threshold;
            stepped = true;
        }
        while (this.wheelAccum < -threshold) {
            this.step(-1);
            this.wheelAccum += threshold;
            stepped = true;
        }
        if (stepped) e.preventDefault();
    }

    onPointerDown(e) {
        // Only primary button (left mouse / single touch)
        if (e.button !== undefined && e.button !== 0) return;
        // Locked while a card is revealed — the user is reading; outside
        // clicks are handled by the document listener which will
        // collapseReveal() before any drag could start.
        if (this.revealedIdx >= 0) return;
        // On mobile the carousel is scroll-pinned — let native scroll
        // own the gesture so the page can flow. Touch taps still fire
        // click events (handled in onCardClick) for tap-to-reveal.
        if (this.isScrollPinActive() && e.pointerType === 'touch') return;
        this.dragging = true;
        this.dragStart = { x: e.clientX, y: e.clientY, pos: this.pos, t: performance.now() };
        this.dragLastT = this.dragStart.t;
        this.dragLastDelta = 0;
        this.dragMovedPx = 0;
        this.pointerDownAt = this.dragStart.t;
        this.stage.classList.add('is-grabbing');
        // Note: we intentionally DO NOT call setPointerCapture here.
        // Capturing the pointer redirects subsequent click events to the
        // capturing element (the stage) and can suppress the click on
        // the original card target, which would prevent the tap-to-open
        // detail modal from firing. The drag logic still works without
        // capture because pointermove/up are bound to window above.
    }

    onPointerMove(e) {
        if (!this.dragging) return;
        const vertical = this.isVertical();
        const dx = e.clientX - this.dragStart.x;
        const dy = e.clientY - this.dragStart.y;
        const axis = vertical ? dy : dx;
        this.dragMovedPx = Math.abs(axis);
        const cardSpan = vertical
            ? Math.min(360, window.innerHeight * 0.42)
            : Math.min(480, window.innerWidth * 0.36);
        const delta = -axis / cardSpan;
        const next = this.dragStart.pos + delta;
        const now = performance.now();
        const dt = Math.max(1, now - this.dragLastT);
        this.dragLastT = now;
        // Velocity = recent pos-delta per ~frame (16ms)
        this.dragLastDelta = ((next - this.pos) / dt) * 16;
        this.setPosFree(next);
    }

    onPointerUp() {
        if (!this.dragging) return;
        this.dragging = false;
        this.stage.classList.remove('is-grabbing');
        // Inherit a snapshot of last drag velocity for momentum
        this.velocity = Math.max(-0.6, Math.min(0.6, this.dragLastDelta));
        // If it was effectively a tap (no movement), let the click handler
        // run as normal — onCardClick will fire afterwards.
        if (this.dragMovedPx < 6) this.velocity = 0;
    }

    // rAF loop: momentum decay + snap-back when motion settles.
    loop() {
        const tick = () => {
            if (!this.dragging) {
                if (Math.abs(this.velocity) > 0.0009) {
                    this.pos += this.velocity;
                    this.velocity *= 0.92;
                    this.pos = Math.max(-0.3, Math.min(this.n - 1 + 0.3, this.pos));
                    this.layout();
                } else if (
                    this.track.classList.contains('is-dragging') &&
                    !this.isScrollPinActive()
                ) {
                    // Momentum settled — re-enable transitions and snap.
                    // Skip when scroll-pin is active: the scroll handler
                    // manages is-dragging + snap itself, and racing it
                    // here causes per-frame add/remove cycles that read
                    // as jitter while the user is scrolling.
                    this.velocity = 0;
                    const target = Math.max(0, Math.min(this.n - 1, Math.round(this.pos)));
                    this.track.classList.remove('is-dragging');
                    this.pos = target;
                    this.layout();
                }
            }
            requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }

    onCardClick(e, card, i) {
        // Distinguish a genuine click from the tail of a drag gesture.
        const movedPx = this.dragMovedPx || 0;
        const heldMs = this.pointerDownAt ? performance.now() - this.pointerDownAt : 0;
        const isClick = movedPx < 14 || heldMs < 220;
        this.dragMovedPx = 0;
        if (!isClick) return;
        // Clicks on the inline CTA link follow the href naturally;
        // don't intercept them.
        if (e.target.closest('.proj-card__cta')) return;
        const activeIdx = Math.round(this.pos);
        if (this.revealedIdx === i) {
            this.collapseReveal();
            return;
        }
        if (i !== activeIdx) {
            // Tapping a back card brings it to centre. If something else
            // is revealed, collapse it first.
            if (this.revealedIdx >= 0) this.collapseReveal();
            this.snapTo(i);
            return;
        }
        // Tap on the centred card → expand it inline.
        this.expandReveal(i);
    }

    expandReveal(idx) {
        const card = this.cards[idx];
        if (!card) return;
        // Collapse any previously-revealed card first.
        if (this.revealedIdx >= 0 && this.revealedIdx !== idx) {
            this.cards[this.revealedIdx].classList.remove('is-revealed');
            this.cards[this.revealedIdx].setAttribute('aria-expanded', 'false');
        }
        this.revealedIdx = idx;
        card.classList.add('is-revealed');
        card.setAttribute('aria-expanded', 'true');
        // Scroll lock — overflow:hidden on BODY ONLY (not html). Setting
        // `html { overflow: hidden }` can break `position: sticky` on
        // descendants in some engines, which collapses .proj-carousel-pin
        // back to its natural document position — visually that looks
        // like the page goes blank/black on tap.
        // We deliberately also do NOT use `position: fixed` here because
        // the lock → unlock transition causes a 1-frame scroll-to-top
        // flash on collapse. With body-only overflow lock + a touchmove
        // preventer, scroll position is preserved and sticky still
        // works through the reveal.
        document.body.style.overflow = 'hidden';
        if (this.isVertical()) {
            this._touchPreventer = (e) => {
                if (e.target.closest && e.target.closest('.proj-carousel-pin')) return;
                e.preventDefault();
            };
            document.addEventListener('touchmove', this._touchPreventer, { passive: false });
        }
        // Force a relayout so other cards spread out (geometryForOffset
        // reads this.revealedIdx to widen their lateralStep).
        this.layout();
    }

    collapseReveal() {
        if (this.revealedIdx < 0) return;
        const card = this.cards[this.revealedIdx];
        if (card) {
            card.classList.remove('is-revealed');
            card.setAttribute('aria-expanded', 'false');
        }
        this.revealedIdx = -1;
        // Release the scroll lock. No scrollTo / no position juggling
        // means no flash back to the top of the page.
        document.body.style.overflow = '';
        if (this._touchPreventer) {
            document.removeEventListener('touchmove', this._touchPreventer);
            this._touchPreventer = null;
        }
        this.layout();
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
        // Binary "Matrix" cursor trail — desktop only. Touch-tap on phones
        // was spawning the same character trail and the "Right Click Me"
        // bait, which read as cluttered noise on mobile. Also gate on
        // hover capability so a touch-only laptop doesn't get the trail.
        const isTouchPrimary = window.matchMedia && window.matchMedia('(hover: none)').matches;
        if (window.innerWidth > 968 && !isTouchPrimary) {
            this.binaryTrail = new BinaryTrail();
        }

        // Global mobile context-menu suppression — on touch devices a
        // long-press triggers the OS callout / "copy / share" menu,
        // which the user doesn't want appearing over the carousel.
        // We can't conditionally bind only on touch (a hybrid device
        // might switch), so we bind always and short-circuit only when
        // the event came from a touch pointer.
        document.addEventListener('contextmenu', (e) => {
            const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
            if (e.pointerType === 'touch' || isCoarse) {
                e.preventDefault();
            }
        });

        this.liquidGlass = new LiquidGlassCards();
        this.projectsCarousel = new ProjectsCarousel();
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
