// =============================================================
// Headset exploded scroll section + Star cluster section
// =============================================================
const { useState: useState2, useEffect: useEffect2, useRef: useRef2, useMemo: useMemo2 } = React;

// ============================================================
// HEADSET EXPLODED SECTION
// ============================================================
function HeadsetSection({ tweak }) {
  const ref = useRef2(null);
  const p = useSectionProgress(ref);
  const intensity = tweak.scrollIntensity;
  const explode = tweak.explodeDistance;

  // 3 phases: 0..0.4 rotate + initial reveal, 0.4..0.7 fully exploded, 0.7..1 reform
  // explosion factor: rises 0..1 from p=0..0.45, holds, falls back to 0 at p=1
  let ex = 0;
  if (p < 0.45) ex = p / 0.45;
  else if (p < 0.7) ex = 1;
  else ex = 1 - (p - 0.7) / 0.3;
  ex = Math.max(0, Math.min(1, ex));

  const rotate = p * 180; // 0 -> 180deg through whole scroll
  const stageScale = 0.85 + 0.15 * Math.sin(p * Math.PI); // breathing

  const stageStyle = {
    transform: `rotateY(${rotate}deg) scale(${stageScale})`,
    transition: 'transform 0.05s linear',
  };

  // exploded-piece transforms
  const piece = (dx, dy, dz, rot) => ({
    transform: `translate3d(${dx * ex * 100 * explode}px, ${dy * ex * 100 * explode}px, ${dz * ex * 200 * explode}px) rotate(${rot * ex}deg)`,
    transition: 'transform 0.08s linear',
  });

  // Callouts visible in middle of scrub
  const calloutsOn = p > 0.35 && p < 0.75;

  return (
    <section className="headset-section" id="headset" ref={ref}>
      <div className="headset-sticky">

        <div className="headset-eyebrow reveal">
          <div className="eyebrow">{CONFIG.headset.eyebrow}</div>
          <h2>{CONFIG.headset.title}</h2>
        </div>

        <div className="headset-stage">
          <div className="center" style={stageStyle}>
            {/* Exploded layered headset */}
            <div style={{ position: 'relative', width: 480, height: 200, transformStyle: 'preserve-3d' }}>
              {/* band - flies behind */}
              <div className="headset-piece" style={{ position: 'absolute', inset: 0, ...piece(0, 0.5, -1, 0) }}>
                <div style={{
                  position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
                  width: 540, height: 28, borderRadius: 999,
                  background: 'linear-gradient(180deg, #1a2240, #0a0e1c)',
                  border: '1px solid rgba(255,255,255,.08)',
                  boxShadow: '0 6px 20px rgba(0,0,0,.5)',
                }} />
              </div>
              {/* frame - back */}
              <div style={{ position: 'absolute', inset: 0, ...piece(0, -0.4, -0.5, 0) }}>
                <div style={{
                  position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
                  width: 460, height: 170, borderRadius: '90px / 95px',
                  background: 'radial-gradient(ellipse at 50% 30%, rgba(160,200,255,.18), transparent 60%), linear-gradient(170deg, #2a3450, #0c1226 60%, #050811)',
                  border: '1px solid rgba(160,200,255,.22)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,.18), inset 0 -20px 40px rgba(0,0,0,.5), 0 30px 80px rgba(0,0,0,.6)',
                }} />
              </div>
              {/* visor body */}
              <div style={{ position: 'absolute', inset: 0, ...piece(0, 0, 0.3, 0) }}>
                <div style={{
                  position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
                  width: 380, height: 130, borderRadius: '70px / 75px',
                  background: 'radial-gradient(ellipse at 30% 30%, rgba(124,201,255,.4), transparent 50%), linear-gradient(160deg, #0a1832, #05080f)',
                  border: '1px solid rgba(255,255,255,.1)',
                  boxShadow: 'inset 0 0 50px rgba(0,0,0,.7), 0 0 30px rgba(124,201,255,.3)',
                }} />
              </div>
              {/* left lens */}
              <div style={{ position: 'absolute', inset: 0, ...piece(-0.55, -0.05, 0.7, -8) }}>
                <div style={{
                  position: 'absolute', left: 'calc(50% - 95px)', top: '50%', transform: 'translate(-50%,-50%)',
                  width: 130, height: 95, borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, rgba(180,220,255,.55), rgba(40,80,140,.25) 40%, rgba(8,12,30,.92) 70%)',
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,.7), 0 0 30px rgba(124,201,255,.35)',
                  border: '1px solid rgba(255,255,255,.08)',
                }} />
              </div>
              {/* right lens */}
              <div style={{ position: 'absolute', inset: 0, ...piece(0.55, -0.05, 0.7, 8) }}>
                <div style={{
                  position: 'absolute', left: 'calc(50% + 95px)', top: '50%', transform: 'translate(-50%,-50%)',
                  width: 130, height: 95, borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, rgba(180,220,255,.55), rgba(40,80,140,.25) 40%, rgba(8,12,30,.92) 70%)',
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,.7), 0 0 30px rgba(124,201,255,.35)',
                  border: '1px solid rgba(255,255,255,.08)',
                }} />
              </div>
              {/* sensor strip - upper */}
              <div style={{ position: 'absolute', inset: 0, ...piece(0, -0.7, 1, 0) }}>
                <div style={{
                  position: 'absolute', left: '50%', top: 'calc(50% - 50px)', transform: 'translate(-50%,-50%)',
                  width: 280, height: 8, borderRadius: 999,
                  background: 'linear-gradient(90deg, transparent, rgba(124,201,255,.6), transparent)',
                  filter: 'blur(0.5px)',
                }} />
              </div>
              {/* glow layer */}
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <div style={{
                  position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
                  width: 700, height: 240,
                  background: `radial-gradient(ellipse, ${tweak.accent}40, transparent 65%)`,
                  filter: 'blur(40px)', opacity: 0.6 + ex * 0.4,
                  transition: 'opacity 0.2s linear',
                }} />
              </div>
            </div>
          </div>

          {/* Callouts placed around stage */}
          {CONFIG.headset.callouts.map((c, i) => {
            // Stagger their reveal across the explode window
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

        <div className="scrub-progress">
          <span>SCROLL TO REVEAL</span>
          <div className="bar"><i style={{ width: (p * 100).toFixed(1) + '%' }}></i></div>
          <span style={{ minWidth: 30 }}>{Math.round(p * 100).toString().padStart(2, '0')}%</span>
        </div>
      </div>
    </section>
  );
}

window.HeadsetSection = HeadsetSection;
