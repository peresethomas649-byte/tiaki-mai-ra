// =============================================================
// Experience cards · Cultural · Final CTA · root App
// =============================================================
const { useState: useStateA, useEffect: useEffectA } = React;

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
          <div className="avatar">{CONFIG.creator.initials}</div>
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
          <a href="#">Demo</a>
          <a href="#">Research</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </section>
  );
}

// ============================================================
// ROOT APP — composes all sections + tweaks panel
// ============================================================
function App() {
  const [tweak, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  // Apply tweak values to CSS variables so global glass/glow respond
  useEffectA(() => {
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

      <TweaksPanel>
        <TweakSection label="Color" />
        <TweakColor label="Accent (cyan)" value={tweak.accent}
                    onChange={(v) => setTweak('accent', v)} />
        <TweakColor label="Warm (Matariki)" value={tweak.warmAccent}
                    onChange={(v) => setTweak('warmAccent', v)} />

        <TweakSection label="Glass + glow" />
        <TweakSlider label="Blur" value={tweak.blur} min={0} max={40} step={1} unit="px"
                     onChange={(v) => setTweak('blur', v)} />
        <TweakSlider label="Star glow" value={tweak.starGlow} min={0} max={2.5} step={0.05}
                     onChange={(v) => setTweak('starGlow', v)} />

        <TweakSection label="Motion" />
        <TweakSlider label="Scroll intensity" value={tweak.scrollIntensity} min={0} max={2} step={0.05}
                     onChange={(v) => setTweak('scrollIntensity', v)} />
        <TweakSlider label="Headset explosion" value={tweak.explodeDistance} min={0} max={2} step={0.05}
                     onChange={(v) => setTweak('explodeDistance', v)} />

        <TweakSection label="Star cluster position" />
        <TweakSlider label="X offset" value={tweak.starsXOffset} min={-200} max={200} step={2} unit="px"
                     onChange={(v) => setTweak('starsXOffset', v)} />
        <TweakSlider label="Y offset" value={tweak.starsYOffset} min={-200} max={200} step={2} unit="px"
                     onChange={(v) => setTweak('starsYOffset', v)} />
        <TweakSlider label="Scale" value={tweak.starsScale} min={0.5} max={1.6} step={0.02}
                     onChange={(v) => setTweak('starsScale', v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
