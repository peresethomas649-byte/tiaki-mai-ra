// ─────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────
const CONFIG = {
  hero: {
    eyebrow: "VISIONOS · SPATIAL STORYTELLING · 2026",
    title: "Guardians of",
    titleEm: "Matariki",
    subtitle:
      "A spatial storytelling experience for Apple Vision Pro exploring Matariki, Māori cultural narrative, and immersive learning.",
    byline: "Designed and developed by Thomas Kereama Perese",
    youtubeId: "wJCQBSAyWDU",
    ctas: [
      { label: "View Project", href: "#headset", primary: true },
      { label: "Watch Demo", href: "#demo" },
      { label: "Read Research", href: "https://openrepository.aut.ac.nz/items/68b37076-8eab-45a1-bd65-c9f4f5721e3b" },
    ],
  },

  headset: {
    eyebrow: "SECTION 02 · ARCHITECTURE",
    title: "One narrative, woven across three spatial layers.",
    callouts: [
      { num: "01", label: "Windowed Interface",   desc: "2D SwiftUI · navigation",     x: -38, y: -22 },
      { num: "02", label: "Volumetric Scene",      desc: "3D content in your space",    x:  36, y: -28 },
      { num: "03", label: "Immersive Space",       desc: "Full environmental shift",    x: -42, y:  18 },
      { num: "04", label: "Spatial Audio",         desc: "Directional storytelling",    x:  40, y:  20 },
      { num: "05", label: "Gesture Interaction",   desc: "Hand · gaze · pinch",         x: -28, y:  34 },
      { num: "06", label: "Matariki Narrative",    desc: "Cultural learning pathway",   x:  30, y:  38 },
    ],
  },

  stars: [
    { id: "matariki",      name: "Matariki",        domain: "Reflection · Wellbeing",      x: 50, y: 38, big: true,
      desc: "The eyes of the chief; the sign of the new year. Matariki signals a time of remembrance, reflection, and gathering." },
    { id: "pohutukawa",    name: "Pōhutukawa",      domain: "Those who have passed",       x: 38, y: 28,
      desc: "Carries the memory of those who have passed in the year, lifting them into the night sky." },
    { id: "tupuanuku",     name: "Tupuānuku",       domain: "Food from the soil",          x: 32, y: 50,
      desc: "Connected to food gathered and grown in the earth — kūmara, vegetables, the harvest of the land." },
    { id: "tupuarangi",    name: "Tupuārangi",      domain: "Food from above",             x: 60, y: 30,
      desc: "Associated with food gathered from above — birds and the elevated forest fruits." },
    { id: "waiti",         name: "Waitī",           domain: "Fresh water",                 x: 42, y: 58,
      desc: "Watches over freshwater — rivers, lakes, streams, and the food sources within them." },
    { id: "waita",         name: "Waitā",           domain: "Salt water",                  x: 64, y: 52,
      desc: "Connected to the ocean and the food drawn from the salt waters that surround Aotearoa." },
    { id: "waipunarangi",  name: "Waipunarangi",    domain: "Rain",                        x: 48, y: 22,
      desc: "Associated with rain that gathers in the sky and falls to nourish the land." },
    { id: "ururangi",      name: "Ururangi",        domain: "Winds",                       x: 70, y: 40,
      desc: "Connected to the winds — the breath that moves across earth and sea." },
    { id: "hiwa",          name: "Hiwa-i-te-rangi", domain: "Hopes & aspirations",         x: 56, y: 64,
      desc: "The youngest star, where wishes and aspirations for the year ahead are sent." },
  ],

  experiences: [
    {
      index: "01 — 2D",
      title: "Windowed Experience",
      desc: "A SwiftUI interface introduces the story, navigation, and learning pathway — a calm entry point into the world of Matariki.",
      note: "Touch · Gaze",
      v: "v1",
      label: "WINDOW · 2D INTERFACE",
    },
    {
      index: "02 — 3D",
      title: "Volumetric Experience",
      desc: "Matariki characters and elements exist within your physical space, bridging the real world and the cultural narrative.",
      note: "Pinch · Move · Inspect",
      v: "v2",
      label: "VOLUME · 3D OBJECTS",
    },
    {
      index: "03 — XR",
      title: "Fully Immersive Experience",
      desc: "A spatial environment surrounds you. The Matariki story unfolds through atmosphere, sound, presence, and movement.",
      note: "Walk · Listen · Witness",
      v: "v3",
      label: "SPACE · IMMERSIVE",
    },
  ],

  values: [
    { key: "Manaakitanga",        en: "Care · Hospitality",     desc: "The wellbeing of the visitor is held with care. The experience welcomes, never imposes." },
    { key: "Kaitiakitanga",       en: "Guardianship",           desc: "Story, knowledge, and place are treated as taonga to be protected — not consumed." },
    { key: "Whakawhanaungatanga", en: "Building relationships", desc: "Relationship between user, story, and tūpuna is built slowly — through presence, not performance." },
  ],

  creator: {
    name: "Thomas Kereama Perese",
    role: "Creative Technologist · Aotearoa",
    bio:
      "Māori / Pacific creative technologist working across spatial computing, immersive storytelling, AI, and culturally grounded design. Guardians of Matariki was developed as a research prototype exploring how spatial computing can serve cultural narrative.",
    initials: "TP",
  },
  links: {
    demo: "#demo",
    research: "https://openrepository.aut.ac.nz/items/68b37076-8eab-45a1-bd65-c9f4f5721e3b",
    portfolio: "https://tiakimaira.com/",
    contact: "mailto:hello@example.com",
  },
};

// ─────────────────────────────────────────────────────────────
// TWEAKS PANEL
// ─────────────────────────────────────────────────────────────

function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
  }, []);
  return [values, setTweak];
}

// ─────────────────────────────────────────────────────────────
// HOOKS + TWEAK DEFAULTS
// ─────────────────────────────────────────────────────────────
const { useState, useEffect, useRef, useMemo, useCallback } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#7cc9ff",
  "warmAccent": "#ffd9a8",
  "starGlow": 1.0,
  "blur": 22,
  "explodeDistance": 1.0,
  "scrollIntensity": 1.0,
  "starsXOffset": 0,
  "starsYOffset": 0,
  "starsScale": 1.0
}/*EDITMODE-END*/;

function useSectionProgress(ref) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const prog = Math.max(0, Math.min(1, scrolled / Math.max(1, total)));
      setP(prog);
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [ref]);
  return p;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('on');
      });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return y;
}

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────
function DemoVideo({ id }) {
  const [playing, setPlaying] = useState(false);
  const src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  const thumb = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div className="demo-video glass">
      <div className="demo-chrome">
        <span className="dot r"></span>
        <span className="dot y"></span>
        <span className="dot g"></span>
        <span className="demo-title">Guardians of Matariki — Demo</span>
        <span className="demo-meta">visionOS · 1080p</span>
      </div>
      <div className="demo-frame">
        {playing ? (
          <iframe
            src={src}
            title="Guardians of Matariki — Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        ) : (
          <button className="demo-poster" onClick={() => setPlaying(true)} aria-label="Play demo">
            <img src={thumb} alt="" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <span className="demo-poster-overlay" />
            <span className="demo-play">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M6 4 L18 11 L6 18 Z" fill="#fff" />
              </svg>
            </span>
            <span className="demo-poster-label">Play demo</span>
          </button>
        )}
      </div>
    </div>
  );
}

function Headset({ scale = 1, style = {} }) {
  return (
    <div className="headset" style={{ transform: `scale(${scale})`, ...style }}>
      <div className="band"></div>
      <div className="frame"></div>
      <div className="visor">
        <div className="highlight"></div>
      </div>
    </div>
  );
}

function Hero({ tweak }) {
  const scrollY = useScrollY();
  const intensity = tweak.scrollIntensity;
  const heroProg = Math.min(1, scrollY / (typeof window !== 'undefined' ? window.innerHeight : 1));

  const titleStyle = {
    transform: `translateY(${-heroProg * 80 * intensity}px)`,
    opacity: 1 - heroProg * 0.9,
  };
  const deviceStyle = {
    transform: `translateY(${-heroProg * 30 * intensity}px) scale(${1 + heroProg * 0.18 * intensity}) rotateX(${heroProg * 8}deg)`,
    opacity: 1 - heroProg * 0.6,
  };
  const glowStyle = {
    transform: `translate(-50%,-50%) scale(${1 + heroProg * 0.5})`,
    opacity: 0.9 - heroProg * 0.5,
  };

  return (
    <section className="hero" id="hero">
      <div style={titleStyle}>
        <div className="eyebrow">{CONFIG.hero.eyebrow}</div>
        <h1 style={{ marginTop: 18 }}>
          {CONFIG.hero.title} <em>{CONFIG.hero.titleEm}</em>
        </h1>
        <p className="subtitle">{CONFIG.hero.subtitle}</p>
        <div className="byline">{CONFIG.hero.byline}</div>
        <div className="ctas">
          {CONFIG.hero.ctas.map((c, i) => (
            <a key={i} className={"btn " + (c.primary ? "btn-primary" : "")} href={c.href}>
              {c.label} <span className="arrow">→</span>
            </a>
          ))}
        </div>
      </div>

      <div id="demo" className="hero-video-wrap" style={deviceStyle}>
        <div className="device-glow" style={glowStyle}></div>
        <DemoVideo id={CONFIG.hero.youtubeId} />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// HEADSET SECTION
// ─────────────────────────────────────────────────────────────
const HEADSET_VIDEO = "https://res.cloudinary.com/dsqhj32yo/video/upload/q_auto/f_auto/v1778165428/Apple_Vision_Pro_Animation_Black_bmfojk.mp4";

function HeadsetSection({ tweak }) {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const p = useSectionProgress(ref);
  const explode = tweak.explodeDistance;

  // Keep the video permanently paused so we can drive currentTime manually.
  // Also call v.load() explicitly — iOS Safari ignores preload="metadata" on
  // metered connections until user interaction, so without this v.duration
  // stays NaN and the RAF loop never seeks.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const keepPaused = () => v.pause();
    v.addEventListener('play', keepPaused);
    v.load();   // force iOS to start buffering immediately
    v.pause();
    return () => v.removeEventListener('play', keepPaused);
  }, []);

  // RAF loop: reads scroll every frame and lerps currentTime for smooth scrubbing.
  // Bypasses React's update batching so we get a seek attempt every ~16 ms.
  useEffect(() => {
    const v = videoRef.current;
    const section = ref.current;
    if (!v || !section) return;

    let raf;
    let lastTarget = -1;

    const tick = () => {
      const rect = section.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight);
      const prog = Math.max(0, Math.min(1, -rect.top / total));
      const dur = v.duration;

      if (dur && !isNaN(dur)) {
        const target = prog * Math.max(0, dur - 0.05);
        if (Math.abs(target - lastTarget) > 0.008) {
          v.currentTime = target;
          lastTarget = target;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  let ex = 0;
  if (p < 0.45) ex = p / 0.45;
  else if (p < 0.7) ex = 1;
  else ex = 1 - (p - 0.7) / 0.3;
  ex = Math.max(0, Math.min(1, ex));

  return (
    <section className="headset-section" id="headset" ref={ref}>
      <div className="headset-sticky">

        <video
          ref={videoRef}
          src={HEADSET_VIDEO}
          muted
          playsInline
          preload="metadata"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'contain',
            background: '#000',
            zIndex: 0,
          }}
        />

        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${tweak.accent}1f, transparent 70%)`,
          mixBlendMode: 'screen',
        }} />

        <div className="headset-eyebrow reveal" style={{ zIndex: 3 }}>
          <div className="eyebrow">{CONFIG.headset.eyebrow}</div>
          <h2>{CONFIG.headset.title}</h2>
        </div>

        <div className="headset-stage" style={{ zIndex: 2, pointerEvents: 'none' }}>
          {CONFIG.headset.callouts.map((c, i) => {
            const localOn = p > (0.32 + i * 0.02) && p < 0.78;
            const dx = c.x * (0.6 + ex * 0.8) * explode;
            const dy = c.y * (0.6 + ex * 0.8) * explode;
            // Scale offsets down on smaller viewports so callouts stay on-screen
            const vScale = Math.min(1, window.innerWidth / 960);
            return (
              <div
                key={i}
                className={"callout " + (localOn ? "on" : "") + (i === 2 || i === 3 ? " callout-mid" : "")}
                style={{
                  left: `calc(50% + ${dx * 4 * vScale}px)`,
                  top:  `calc(50% + ${dy * 4 * vScale}px)`,
                  transform: `translate(-50%, -50%) ${localOn ? '' : 'translateY(6px)'}`,
                }}
              >
                <span className="num">{c.num} · {c.label.toUpperCase()}</span>
                {c.desc}
              </div>
            );
          })}
        </div>

        <div className="scrub-progress" style={{ zIndex: 3 }}>
          <span>SCROLL TO REVEAL</span>
          <div className="bar"><i style={{ width: (p * 100).toFixed(1) + '%' }}></i></div>
          <span style={{ minWidth: 30 }}>{Math.round(p * 100).toString().padStart(2, '0')}%</span>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// STARS SECTION
// ─────────────────────────────────────────────────────────────
function StarsSection({ tweak }) {
  const ref = useRef(null);
  const p = useSectionProgress(ref);
  const [hover, setHover] = useState(null);
  const [active, setActive] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const conv = Math.min(1, p / 0.5);
  const settled = p > 0.45;

  const scattered = useMemo(() => {
    return CONFIG.stars.map((s, i) => {
      const seed = (i * 137) % 100;
      const sx = (seed * 9301 + 49297) % 100;
      const sy = (seed * 7919 + 12347) % 100;
      return { x: sx, y: sy };
    });
  }, []);

  const stage = useRef(null);
  const onLeave = () => setHover(null);

  return (
    <section className="stars-section" id="stars" ref={ref}>
      <div className="stars-sticky">

        <div className="stars-eyebrow reveal">
          <div className="eyebrow">SECTION 03 · STAR CLUSTER</div>
          <h2>The cluster, in formation.</h2>
          <p>{settled ? "Hover a star to read its name. Click to open its meaning." : "Scroll — the stars find their formation."}</p>
        </div>

        <div className="stars-canvas" ref={stage} onMouseLeave={onLeave}
             style={{
               transform: `translate(${tweak.starsXOffset}px, ${tweak.starsYOffset}px) scale(${tweak.starsScale})`,
             }}
        >
          <div style={{
            position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
            width: '70%', height: '70%',
            background: `radial-gradient(ellipse, ${tweak.accent}1a, transparent 70%)`,
            filter: 'blur(40px)', opacity: 0.4 + conv * 0.6,
            pointerEvents: 'none',
          }} />

          {CONFIG.stars.map((s, i) => {
            const sx = scattered[i].x;
            const sy = scattered[i].y;
            const t = 1 - Math.pow(1 - conv, 3);
            const x = sx + (s.x - sx) * t;
            const y = sy + (s.y - sy) * t;

            const size = s.big ? 22 : 14;
            const isActive = active === s.id;
            const glowMul = tweak.starGlow;

            return (
              <div
                key={s.id}
                className={"star " + (s.big ? "matariki " : "") + (settled ? "formed " : "") + (isActive ? "active " : "")}
                style={{
                  left: x + '%',
                  top: y + '%',
                  width: size, height: size,
                  filter: `drop-shadow(0 0 ${10 * glowMul}px ${s.big ? tweak.warmAccent : tweak.accent})`,
                }}
                onMouseEnter={(e) => {
                  if (!settled) return;
                  setHover(s.id);
                  const rect = stage.current.getBoundingClientRect();
                  setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }}
                onMouseMove={(e) => {
                  if (!settled) return;
                  const rect = stage.current.getBoundingClientRect();
                  setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }}
                onClick={() => settled && setActive(active === s.id ? null : s.id)}
              >
                <div className="core"></div>
                <span className="star-label">{s.name}</span>
              </div>
            );
          })}

          {hover && settled && (
            <div className="star-tooltip" style={{ left: hoverPos.x, top: hoverPos.y }}>
              {(() => {
                const s = CONFIG.stars.find(x => x.id === hover);
                return (
                  <>
                    <div className="meta">{s.domain}</div>
                    <div className="name">{s.name}</div>
                    <div className="desc">{s.desc}</div>
                  </>
                );
              })()}
            </div>
          )}
        </div>

        {/* Detail card lives OUTSIDE the canvas so it sits at the bottom of
            the sticky viewport instead of overlapping the stars. */}
        {active && (
          <div className={"star-detail glass glass-strong " + (active ? "on" : "")}>
            <button className="close" onClick={() => setActive(null)} aria-label="Close">×</button>
            {(() => {
              const s = CONFIG.stars.find(x => x.id === active);
              return (
                <div className="row">
                  <div className="col-1">
                    <div className="name">{s.name}</div>
                    <div className="domain">{s.domain}</div>
                  </div>
                  <div className="col-2">
                    <div className="desc">{s.desc}</div>
                    <div style={{
                      marginTop: 14, fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 10, letterSpacing: '.15em', color: 'var(--ink-mute)', textTransform: 'uppercase',
                    }}>
                      Cultural meaning · review with advisors before publication
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// EXPERIENCE · CULTURAL · FINAL
// ─────────────────────────────────────────────────────────────
function Experience() {
  return (
    <section className="experience container" id="experience">
      <div className="section-head reveal">
        <div className="eyebrow">SECTION 04 · EXPERIENCE</div>
        <h2>Three modes of presence.</h2>
        <p>Each layer of the experience is designed to meet the user where they are — at the window, in the room, inside the story.</p>
      </div>

      <div className="exp-grid">
        {CONFIG.experiences.map((e, i) => (
          <div key={i} className={"exp-card glass reveal " + e.v}>
            <div className="index">{e.index}</div>
            <div className="visual" data-label={e.label}>
              <div className="grid-overlay"></div>
            </div>
            <h3>{e.title}</h3>
            <div className="desc">{e.desc}</div>
            <div className="note">
              <span className="pulse"></span>
              <span>{e.note}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cultural() {
  return (
    <section className="cultural container" id="culture">
      <div className="cult-grid">
        <div className="left reveal">
          <div className="eyebrow">SECTION 05 · KAUPAPA</div>
          <h2>Held with care, not consumed.</h2>
          <p>
            Matariki is not content. It is a relationship — between people, ancestors,
            the land, and the night sky. This project is a research prototype shaped by
            kaupapa Māori values, asking how spatial computing might serve cultural
            narrative without flattening it.
          </p>
          <div className="review-tag">
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--warm)' }}></span>
            Kaupapa · reviewed with cultural advisors
          </div>
        </div>

        <div className="values-list reveal">
          {CONFIG.values.map((v, i) => (
            <div key={i} className="value-row" tabIndex="0">
              <div className="key">
                <span className="key-word">{v.key}</span>
                <small>{v.en}</small>
                <span className="hint" aria-hidden="true">Hover →</span>
              </div>
              <div className="desc-wrap">
                <div className="desc">{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Final() {
  return (
    <section className="final container" id="contact">
      <div className="reveal">
        <div className="eyebrow" style={{ display: 'block', marginBottom: 28 }}>SECTION 06 · CREATOR</div>
        <h2>
          Designed at the intersection of <em>culture</em>, <em>story</em>, and <em>spatial computing</em>.
        </h2>

        <div className="ctas">
          <a className="btn btn-primary" href={CONFIG.links.demo}>Watch Demo <span className="arrow">→</span></a>
          <a className="btn" href={CONFIG.links.research}>Read Research <span className="arrow">→</span></a>
          <a className="btn" href={CONFIG.links.portfolio}>View Portfolio <span className="arrow">→</span></a>
          <a className="btn" href={CONFIG.links.contact}>Contact <span className="arrow">→</span></a>
        </div>

        <div className="creator-card glass">
          <div className="avatar">
            <img src="assets/creator-photo.jpg" alt={CONFIG.creator.name} />
          </div>
          <div>
            <div className="role">{CONFIG.creator.role}</div>
            <div className="name">{CONFIG.creator.name}</div>
            <div className="bio">{CONFIG.creator.bio}</div>
          </div>
        </div>
      </div>

      <footer className="container" style={{ marginTop: 100 }}>
        <span>© 2026 · Guardians of Matariki</span>
        <div className="links">
          <a href="#demo">Demo</a>
          <a href="https://openrepository.aut.ac.nz/items/68b37076-8eab-45a1-bd65-c9f4f5721e3b" target="_blank" rel="noopener noreferrer">Research</a>
          <a href="mailto:peresethomas649@gmail.com">Contact</a>
        </div>
      </footer>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// ROOT APP
// ─────────────────────────────────────────────────────────────
function App() {
  const [tweak, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', tweak.accent);
    r.style.setProperty('--blur', tweak.blur + 'px');
  }, [tweak.accent, tweak.blur]);

  return (
    <>
      <Hero tweak={tweak} />
      <HeadsetSection tweak={tweak} />
      <StarsSection tweak={tweak} />
      <Experience />
      <Cultural />
      <Final />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);