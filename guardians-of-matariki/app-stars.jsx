// =============================================================
// Star cluster section — converging stars + hover/click
// =============================================================
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS, useMemo: useMemoS } = React;

function StarsSection({ tweak }) {
  const ref = useRefS(null);
  const p = useSectionProgress(ref);
  const [hover, setHover] = useStateS(null);
  const [active, setActive] = useStateS(null);
  const [hoverPos, setHoverPos] = useStateS({ x: 0, y: 0 });

  // 0..0.5 stars converge from random scattered positions to formation
  // 0.5..1 stars settle, hover-tooltips usable
  const conv = Math.min(1, p / 0.5);
  const settled = p > 0.45;

  // generate scattered start positions (deterministic by id)
  const scattered = useMemoS(() => {
    return CONFIG.stars.map((s, i) => {
      // pseudorandom from id
      const seed = (i * 137) % 100;
      const sx = (seed * 9301 + 49297) % 100;
      const sy = (seed * 7919 + 12347) % 100;
      return { x: sx, y: sy };
    });
  }, []);

  const stage = useRefS(null);

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
          {/* halo behind cluster */}
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
            // ease-out
            const t = 1 - Math.pow(1 - conv, 3);
            const x = sx + (s.x - sx) * t;
            const y = sy + (s.y - sy) * t;

            const size = s.big ? 22 : 14;
            const isActive = active === s.id;
            const isHover = hover === s.id;
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

          {/* Hover tooltip */}
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

          {/* Click-locked detail panel */}
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

      </div>
    </section>
  );
}

window.StarsSection = StarsSection;
