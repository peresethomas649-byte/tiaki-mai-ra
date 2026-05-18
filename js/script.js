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
        this.detail = document.getElementById('proj-detail');
        this.detailTag = document.getElementById('proj-detail-tag');
        this.detailName = document.getElementById('proj-detail-name');
        this.detailQuote = document.getElementById('proj-detail-quote');
        this.detailCta = document.getElementById('proj-detail-cta');
        this.detailClose = document.getElementById('proj-detail-close');

        this.n = this.cards.length;
        this.pos = 0; // fractional active position, 0..n-1
        this.velocity = 0; // pos-units per frame
        this.dragging = false;
        this.dragStart = null;
        this.dragLastT = 0;
        this.dragLastDelta = 0;
        this.modalOpen = false;
        this.modalReturnIdx = -1;

        // Wheel accumulation for trackpad/scroll → discrete steps
        this.wheelAccum = 0;
        this.wheelLastTs = 0;

        if (this.counterTot) this.counterTot.textContent = String(this.n).padStart(2, '0');

        this.bindEvents();
        this.layout();
        this.loop();
    }

    isVertical() {
        return window.matchMedia('(max-width: 768px)').matches;
    }

    // Compute the per-card transform values for a given offset (i - pos).
    // The exponential-ish lateral curve keeps adjacent cards visually close
    // and bunches the far-back cards into the dark.
    geometryForOffset(offset) {
        const vertical = this.isVertical();
        const abs = Math.abs(offset);
        const sign = offset >= 0 ? 1 : -1;
        const lateralPx = vertical ? 240 : 320;
        const lateral = sign * (1 - Math.exp(-abs * 0.55)) * lateralPx;
        const depth = -Math.min(abs, 6) * 110;
        const rotate = -sign * Math.min(abs, 4) * (vertical ? 9 : 14);
        const scale = Math.max(0.42, 1 - abs * 0.10);
        const opacity = Math.max(0, 1 - abs * 0.18);
        const brightness = Math.max(0.22, 1 - abs * 0.17);
        const blur = Math.min(4, abs * 0.7);
        return {
            cx: vertical ? 0 : lateral,
            cy: vertical ? lateral : 0,
            cz: depth,
            rx: vertical ? rotate : 0,
            ry: vertical ? 0 : rotate,
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
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.step(-1));
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.step(1));

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
                    e.preventDefault();
                    this.step(1);
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    this.step(-1);
                }
            });
        });

        if (this.detailClose) this.detailClose.addEventListener('click', () => this.closeDetail());
        if (this.detail) {
            this.detail.addEventListener('click', (e) => {
                if (e.target.matches('[data-detail-dismiss]')) this.closeDetail();
            });
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modalOpen) this.closeDetail();
        });

        // Orientation / viewport change → relayout
        window.addEventListener('resize', () => this.layout(), { passive: true });
    }

    onWheel(e) {
        // Only horizontal wheel/trackpad scrolls drive the carousel.
        // Vertical wheel passes through so the user can scroll past the
        // projects section normally — hijacking vertical wheel here
        // would trap the page when scrolling over the carousel.
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
        if (this.modalOpen) return;
        // Only primary button (left mouse / single touch)
        if (e.button !== undefined && e.button !== 0) return;
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
                } else if (this.track.classList.contains('is-dragging')) {
                    // Momentum settled — re-enable transitions and snap.
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
        // Real mouse clicks can wobble up to ~10-15px; we treat anything
        // under 14px OR completed in under 220ms as a click. Beyond that
        // it's a drag and we suppress the click so the carousel doesn't
        // also open the detail at the end of a swipe.
        const movedPx = this.dragMovedPx || 0;
        const heldMs = this.pointerDownAt ? performance.now() - this.pointerDownAt : 0;
        const isClick = movedPx < 14 || heldMs < 220;
        this.dragMovedPx = 0;
        if (!isClick) return;
        const activeIdx = Math.round(this.pos);
        if (i !== activeIdx) {
            this.snapTo(i);
        } else {
            this.openDetail(i);
        }
    }

    openDetail(idx) {
        const card = this.cards[idx];
        if (!card || !this.detail) return;
        const tagEl = card.querySelector('.proj-card__tag');
        const nameEl = card.querySelector('.proj-card__name');
        const quoteEl = card.querySelector('.proj-card__quote');
        const href = card.getAttribute('data-href');
        const target = card.getAttribute('data-target') || '_self';

        if (this.detailTag) this.detailTag.textContent = tagEl ? tagEl.textContent : '';
        if (this.detailName) this.detailName.textContent = nameEl ? nameEl.textContent : '';
        if (this.detailQuote) this.detailQuote.textContent = quoteEl ? quoteEl.textContent : '';

        if (this.detailCta) {
            const labelEl = this.detailCta.querySelector('.proj-detail__cta-label');
            if (href) {
                this.detailCta.classList.remove('is-disabled');
                this.detailCta.setAttribute('href', href);
                if (target === '_blank') {
                    this.detailCta.setAttribute('target', '_blank');
                } else {
                    this.detailCta.removeAttribute('target');
                }
                if (labelEl) labelEl.textContent = 'Open project';
                this.detailCta.removeAttribute('aria-disabled');
                this.detailCta.removeAttribute('tabindex');
            } else {
                this.detailCta.classList.add('is-disabled');
                this.detailCta.removeAttribute('href');
                this.detailCta.removeAttribute('target');
                if (labelEl) labelEl.textContent = 'No external link';
                this.detailCta.setAttribute('aria-disabled', 'true');
                this.detailCta.setAttribute('tabindex', '-1');
            }
        }

        this.detail.removeAttribute('hidden');
        this.detail.setAttribute('aria-hidden', 'false');
        // Layout flush so the open transition fires from the hidden state.
        void this.detail.offsetWidth;
        this.detail.classList.add('is-open');
        this.modalOpen = true;
        this.modalReturnIdx = idx;
        const panel = this.detail.querySelector('.proj-detail__panel');
        if (panel) panel.focus({ preventScroll: true });
        document.body.style.overflow = 'hidden';
    }

    closeDetail() {
        if (!this.detail) return;
        this.detail.classList.remove('is-open');
        this.detail.setAttribute('aria-hidden', 'true');
        this.modalOpen = false;
        document.body.style.overflow = '';
        setTimeout(() => {
            this.detail.setAttribute('hidden', '');
            if (this.modalReturnIdx >= 0 && this.cards[this.modalReturnIdx]) {
                this.cards[this.modalReturnIdx].focus({ preventScroll: true });
            }
        }, 420);
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
        // bait, which read as cluttered noise on mobile.
        if (window.innerWidth > 968) {
            this.binaryTrail = new BinaryTrail();
        }
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
