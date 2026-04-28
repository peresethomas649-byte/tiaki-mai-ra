// =============================================================
// Headset section — TEST: scroll-scrubbed local mp4 as background.
// Callouts overlay on top. Original DIV-built explode preserved in app-headset.v2.jsx.
// =============================================================
const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;

const HEADSET_VIDEO = "assets/headset-animation.mp4";

function HeadsetSection({ tweak }) {
  const ref = useRef2(null);
  const videoRef = useRef2(null);
  const p = useSectionProgress(ref);
  const [duration, setDuration] = useState2(0);
  const explode = tweak.explodeDistance;

  // Load duration once
  useEffect2(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => setDuration(v.duration || 0);
    v.addEventListener('loadedmetadata', onMeta);
    if (v.readyState >= 1) onMeta();
    return () => v.removeEventListener('loadedmetadata', onMeta);
  }, []);

  // Drive currentTime from scroll progress
  useEffect2(() => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const target = Math.max(0, Math.min(duration - 0.05, p * duration));
    if (Math.abs(v.currentTime - target) > 0.04) {
      try { v.currentTime = target; } catch (e) { /* ignore */ }
    }
  }, [p, duration]);

  // Same explode "ex" curve so callouts behave identically
  let ex = 0;
  if (p < 0.45) ex = p / 0.45;
  else if (p < 0.7) ex = 1;
  else ex = 1 - (p - 0.7) / 0.3;
  ex = Math.max(0, Math.min(1, ex));

  return (
    <section className="headset-section" id="headset" ref={ref}>
      <div className="headset-sticky">

        {/* Background video — fills sticky stage, scrubbed by scroll */}
        <video
          ref={videoRef}
          src={HEADSET_VIDEO}
          muted
          playsInline
          preload="auto"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'contain',
            background: '#000',
            zIndex: 0,
          }}
        />

        {/* Subtle accent glow on top of video for cohesion */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${tweak.accent}1f, transparent 70%)`,
          mixBlendMode: 'screen',
        }} />

        <div className="headset-eyebrow reveal" style={{ zIndex: 3 }}>
          <div className="eyebrow">{CONFIG.headset.eyebrow}</div>
          <h2>{CONFIG.headset.title}</h2>
        </div>

        {/* Callouts overlay (above video) */}
        <div className="headset-stage" style={{ zIndex: 2, pointerEvents: 'none' }}>
          {CONFIG.headset.callouts.map((c, i) => {
            const localOn = p > (0.32 + i * 0.02) && p < 0.78;
            const dx = c.x * (0.6 + ex * 0.8) * explode;
            const dy = c.y * (0.6 + ex * 0.8) * explode;
            return (
              <div
                key={i}
                className={"callout " + (localOn ? "on" : "")}
                style={{
                  left: `calc(50% + ${dx * 4}px)`,
                  top:  `calc(50% + ${dy * 4}px)`,
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

window.HeadsetSection = HeadsetSection;
