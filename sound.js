/* Tiaki Mai Rā — sound + haptics layer (prototype v0.8)
   Everything is synthesised with Web Audio at runtime; there are no audio files.
   Off by default. The visitor turns it on with the "Sound" pill; the choice is remembered (localStorage "tmr-sound").
   Three families, as asked for:
     digital   — ticks, bleeps, the data-stream shimmer of the prelude (electrical / code)
     organic   — bubble pops, liquid glides, a warm drone inside the business (bubbly / liquid)
     motion    — a filtered-noise whoosh whose level and colour follow camera speed (travelling through space)
   Haptics use navigator.vibrate where the browser offers it (Android Chrome; iOS Safari ignores it). */
(function () {
  'use strict';
  const KEY = 'tmr-sound';
  const S = { on: false, armed: false, ctx: null, ready: false, mode: 'organic', lastTick: 0, lastHover: 0 };
  let master, comp, whooshGain, whooshFilter, padGain, digiGain, padOsc = [], padFilter, lfo, bleepTimer = null, btn = null;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const rnd = (a, b) => a + Math.random() * (b - a);
  const now = () => S.ctx.currentTime;

  function build() {
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
    const c = S.ctx = new AC();
    comp = c.createDynamicsCompressor(); comp.threshold.value = -18; comp.knee.value = 12; comp.ratio.value = 6; comp.attack.value = .004; comp.release.value = .18;
    master = c.createGain(); master.gain.value = 0; master.connect(comp); comp.connect(c.destination);
    // motion: looped noise → bandpass → gain
    const len = c.sampleRate * 2, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    let b0 = 0; for (let i = 0; i < len; i++) { b0 = .985 * b0 + .015 * (Math.random() * 2 - 1); d[i] = (Math.random() * 2 - 1) * .35 + b0 * 3; }   // white + a little brown for body
    const src = c.createBufferSource(); src.buffer = buf; src.loop = true;
    whooshFilter = c.createBiquadFilter(); whooshFilter.type = 'bandpass'; whooshFilter.frequency.value = 320; whooshFilter.Q.value = .9;
    whooshGain = c.createGain(); whooshGain.gain.value = 0; src.connect(whooshFilter); whooshFilter.connect(whooshGain); whooshGain.connect(master); src.start();
    // organic drone: two detuned triangles + a sub sine through a slow-breathing lowpass
    padFilter = c.createBiquadFilter(); padFilter.type = 'lowpass'; padFilter.frequency.value = 260; padFilter.Q.value = .6;
    padGain = c.createGain(); padGain.gain.value = 0; padFilter.connect(padGain); padGain.connect(master);
    [[110, 'triangle', .5], [110.6, 'triangle', .5], [55, 'sine', .7]].forEach(([f, t, g]) => { const o = c.createOscillator(); o.type = t; o.frequency.value = f; const gg = c.createGain(); gg.gain.value = g; o.connect(gg); gg.connect(padFilter); o.start(); padOsc.push(o); });
    lfo = c.createOscillator(); lfo.frequency.value = .07; const lg = c.createGain(); lg.gain.value = 120; lfo.connect(lg); lg.connect(padFilter.frequency); lfo.start();
    // digital shimmer bus (the bleeps route here so the prelude can be faded as one)
    digiGain = c.createGain(); digiGain.gain.value = 0; digiGain.connect(master);
    S.ready = true; return true;
  }

  // ----- one-shots
  function env(g, t0, a, peak, dec, floor = .0001) { g.gain.cancelScheduledValues(t0); g.gain.setValueAtTime(floor, t0); g.gain.linearRampToValueAtTime(peak, t0 + a); g.gain.exponentialRampToValueAtTime(floor, t0 + a + dec); }
  function tone(type, f0, f1, t0, a, dec, peak, dest) { const c = S.ctx; const o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t0); if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(f1, t0 + a + dec); const g = c.createGain(); env(g, t0, a, peak, dec); o.connect(g); g.connect(dest || master); o.start(t0); o.stop(t0 + a + dec + .05); }
  function bubble(t0, size = 1) {                      // a rising sine with a tiny click: a bubble breaking the surface
    const f0 = rnd(260, 420) / size, f1 = f0 * rnd(2.2, 3.2); tone('sine', f0, f1, t0, .006, .09 * size, .22, master); tone('triangle', f1 * 1.5, f1 * 1.5, t0 + .004, .002, .018, .05, master); }
  function glide(t0) {                                   // liquid glide: two sines sliding past each other under a soft noise bloom
    tone('sine', 180, 520, t0, .08, .32, .12, master); tone('sine', 760, 240, t0 + .03, .1, .3, .08, master);
    const c = S.ctx; const g = c.createGain(); env(g, t0, .09, .07, .28); const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(900, t0); f.frequency.exponentialRampToValueAtTime(2600, t0 + .3); f.connect(g); g.connect(master); const src = noiseBurst(.45); src.connect(f); src.start(t0); }
  function noiseBurst(sec) { const c = S.ctx; const n = c.sampleRate * sec | 0, b = c.createBuffer(1, n, c.sampleRate), d = b.getChannelData(0); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1; const s = c.createBufferSource(); s.buffer = b; return s; }
  function tick(t0, f) { tone('square', f || rnd(1800, 3400), f || rnd(1800, 3400), t0, .001, .012, .035, digiGain.gain.value > .01 ? digiGain : master); }
  const PENTA = [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.7, 1318.5];
  function chime(t0, k = 0) { const base = k % 4; [0, 2, 4].forEach((step, i) => { const f = PENTA[(base + step) % PENTA.length] * (base >= 2 ? 1 : 1); tone('sine', f, f, t0 + i * .085, .01, .55, .11); tone('triangle', f * 2, f * 2, t0 + i * .085, .01, .25, .025); }); }
  function sweep(t0) {                                   // entering the cube: a rising band of data, then a bass thump as the paper world opens
    const c = S.ctx; const f = c.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 3; f.frequency.setValueAtTime(180, t0); f.frequency.exponentialRampToValueAtTime(5200, t0 + 1.1);
    const g = c.createGain(); env(g, t0, .9, .28, .45); f.connect(g); g.connect(master); const src = noiseBurst(1.6); src.connect(f); src.start(t0);
    for (let i = 0; i < 9; i++) tick(t0 + .15 + i * i * .014, 900 + i * 420);
    tone('sine', 110, 42, t0 + 1.05, .01, .9, .55); tone('sine', 220, 55, t0 + 1.05, .02, .35, .18); }
  function unsweep(t0) {                                 // leaving: the same thump, then the band of data runs back out to the dark
    tone('sine', 42, 110, t0, .01, .9, .55); tone('sine', 55, 220, t0, .02, .35, .18);
    const c = S.ctx; const f = c.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 3; f.frequency.setValueAtTime(5200, t0 + .25); f.frequency.exponentialRampToValueAtTime(180, t0 + 1.35);
    const g = c.createGain(); env(g, t0 + .25, .15, .28, 1.1); f.connect(g); g.connect(master); const src = noiseBurst(1.6); src.connect(f); src.start(t0 + .25);
    for (let i = 0; i < 9; i++) tick(t0 + .4 + i * i * .014, 4260 - i * 420); }

  // ----- continuous
  function setAmbient(mode) { if (!S.ready) return; S.mode = mode; const t = now(); const organic = mode === 'organic';
    padGain.gain.cancelScheduledValues(t); padGain.gain.setTargetAtTime(organic ? .07 : .012, t, .9);
    digiGain.gain.cancelScheduledValues(t); digiGain.gain.setTargetAtTime(organic ? .0 : .9, t, .6);
    clearInterval(bleepTimer); bleepTimer = null;
    if (!organic) bleepTimer = setInterval(() => { if (!S.on || document.hidden) return; const t0 = now() + .01; const n = 1 + (Math.random() < .3 ? 2 : 0); for (let i = 0; i < n; i++) tick(t0 + i * .055, [1200, 1600, 2400, 3200, 4800][Math.random() * 5 | 0]); }, 420); }
  // motion: a quiet gust, and only for the first two journeys inside each section (Thomas, 2 Oct: quieter and far less frequent)
  const G = { key: null, count: 0, allow: false, was: false };
  function motion(speed, travelling, key) { if (!S.ready || !S.on) return; const s = clamp(speed / 28, 0, 1); const t = now();
    if (key !== G.key) { G.key = key; G.count = 0; G.allow = false; }
    if (travelling && !G.was) { G.allow = G.count < 2; if (G.allow) G.count++; } if (!travelling && G.was) G.allow = false; G.was = !!travelling;
    whooshGain.gain.setTargetAtTime(G.allow ? Math.pow(s, 1.4) * .085 : 0, t, G.allow ? .25 : .5); whooshFilter.frequency.setTargetAtTime(240 + s * 1100, t, .12); whooshFilter.Q.setTargetAtTime(.9 + s * 1.2, t, .1);
    if (padFilter) padFilter.frequency.setTargetAtTime(240 + s * 300, t, .3); }

  function vibe(p) { if (!S.on) return; try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) { /* unsupported */ } }

  // ----- public surface
  const API = {
    get on() { return S.on; },
    init(button) { btn = button; let saved = null; try { saved = localStorage.getItem(KEY); } catch (e) { /* private mode */ }
      if (saved === 'on') { S.armed = true; paint(); const arm = () => { if (S.armed) API.enable(); removeEventListener('pointerdown', arm); removeEventListener('keydown', arm); }; addEventListener('pointerdown', arm, { once: true }); addEventListener('keydown', arm, { once: true }); }
      else paint();
      if (btn) btn.addEventListener('click', e => { e.stopPropagation(); API.toggle(); });
      document.addEventListener('visibilitychange', () => { if (!S.ready) return; master.gain.setTargetAtTime(document.hidden || !S.on ? 0 : .8, now(), .2); });
      // hover ticks on anything clickable: digital, rate-limited
      document.addEventListener('pointerover', e => { if (!S.on || !S.ready) return; const el = e.target.closest && e.target.closest('a, button'); if (!el) return; const t = performance.now(); if (t - S.lastHover < 70) return; S.lastHover = t; tick(now(), 2600); }, { passive: true }); },
    enable() { if (S.on) return; if (!S.ready && !build()) { paint(true); return; } S.armed = false; S.on = true; S.ctx.resume && S.ctx.resume(); master.gain.setTargetAtTime(.8, now(), .25); setAmbient(S.mode); try { localStorage.setItem(KEY, 'on'); } catch (e) { } paint(); API.pop(.9); vibe(12); },
    disable() { if (!S.on && !S.armed) return; S.on = false; S.armed = false; if (S.ready) { master.gain.setTargetAtTime(0, now(), .15); clearInterval(bleepTimer); bleepTimer = null; } try { localStorage.setItem(KEY, 'off'); } catch (e) { } paint(); },
    toggle() { (S.on || S.armed) ? API.disable() : API.enable(); },
    ambient(mode) { if (S.on) setAmbient(mode); else S.mode = mode; },
    motion,
    pop(size) { if (!S.on) return; bubble(now() + .005, size || 1); },
    arrive() { if (!S.on) return; const t = now() + .005; bubble(t, 1); bubble(t + .07, .7); if (Math.random() < .5) bubble(t + .13, .55); vibe(14); },
    morph() { if (!S.on) return; glide(now() + .005); vibe(8); },
    phase(k) { if (!S.on) return; chime(now() + .02, k || 0); vibe([10, 40, 18]); },
    tick() { if (!S.on) return; const t = performance.now(); if (t - S.lastTick < 40) return; S.lastTick = t; tick(now()); },
    enter() { if (!S.on) return; sweep(now() + .01); vibe([20, 60, 70]); },
    exit() { if (!S.on) return; unsweep(now() + .01); vibe([70, 60, 20]); },
    open() { if (!S.on) return; const t = now() + .005; tone('sine', 420, 980, t, .02, .18, .12); tick(t + .04, 3600); vibe(10); }
  };
  function paint(unsupported) { if (!btn) return; const on = S.on || S.armed; btn.setAttribute('aria-pressed', String(on)); btn.textContent = unsupported ? 'Sound unavailable' : (on ? '♪ Sound on' : '♪ Sound off'); btn.title = 'Sound effects and haptics. ' + (on ? 'On — click to turn off.' : 'Off — click to turn on.'); }
  window.TMR_SOUND = API;
})();
