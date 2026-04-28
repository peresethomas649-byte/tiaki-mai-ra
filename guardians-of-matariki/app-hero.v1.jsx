// =============================================================
// Guardians of Matariki — main app
// =============================================================
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

// ---- Hook: scroll progress for a section based on its bounding box ----
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

// reveal-on-view helper
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

// scroll-position parallax for hero
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return y;
}

// ============================================================
// HERO
// ============================================================
function Hero({ tweak }) {
  const scrollY = useScrollY();
  const intensity = tweak.scrollIntensity;
  // hero-local progress 0..1 across first viewport
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

      <div className="hero-video-wrap" style={deviceStyle}>
        <div className="device-glow" style={glowStyle}></div>
        <DemoVideo id={CONFIG.hero.youtubeId} />
      </div>
    </section>
  );
}

// Cinematic video window — glass frame + chrome dots + lazy YouTube embed
function DemoVideo({ id }) {
  const [playing, setPlaying] = React.useState(false);
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

// Reusable abstract headset (DIV-built, original geometry — not a branded device)
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

window.Hero = Hero;
window.Headset = Headset;
window.DemoVideo = DemoVideo;
window.useSectionProgress = useSectionProgress;
window.useReveal = useReveal;
window.useScrollY = useScrollY;
window.TWEAK_DEFAULTS = TWEAK_DEFAULTS;
