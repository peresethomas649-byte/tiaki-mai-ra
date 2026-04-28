// =============================================================
// Guardians of Matariki — central config
// Edit copy, links, star data, etc. here. All non-Tweak constants live here.
// =============================================================

const CONFIG = {
  // ---- HERO ----
  hero: {
    eyebrow: "VISIONOS · SPATIAL STORYTELLING · 2026",
    title: "Guardians of",
    titleEm: "Matariki",
    subtitle:
      "A spatial storytelling experience for Apple Vision Pro exploring Matariki, Māori cultural narrative, and immersive learning.",
    byline: "Designed and developed by Thomas Kereama Perese",
    // YouTube video ID for the hero demo (swap for your own).
    // e.g. https://youtu.be/dQw4w9WgXcQ → "dQw4w9WgXcQ"
    youtubeId: "dQw4w9WgXcQ",
    ctas: [
      { label: "View Project", href: "#headset", primary: true },
      { label: "Watch Demo", href: "#demo" },
      { label: "Read Research", href: "#research" },
    ],
  },

  // ---- HEADSET / EXPLODED REVEAL ----
  headset: {
    eyebrow: "SECTION 02 · ARCHITECTURE",
    title: "One narrative, woven across three spatial layers.",
    callouts: [
      // positions are % offsets from center of stage. tweak as needed.
      { num: "01", label: "Windowed Interface",   desc: "2D SwiftUI · navigation",     x: -38, y: -22 },
      { num: "02", label: "Volumetric Scene",      desc: "3D content in your space",    x:  36, y: -28 },
      { num: "03", label: "Immersive Space",       desc: "Full environmental shift",    x: -42, y:  18 },
      { num: "04", label: "Spatial Audio",         desc: "Directional storytelling",    x:  40, y:  20 },
      { num: "05", label: "Gesture Interaction",   desc: "Hand · gaze · pinch",         x: -28, y:  34 },
      { num: "06", label: "Matariki Narrative",    desc: "Cultural learning pathway",   x:  30, y:  38 },
    ],
  },

  // ---- MATARIKI STAR CLUSTER ----
  // x, y in percent of canvas; final positions reflect the relative formation
  // of the cluster as seen from Aotearoa (illustrative, not astronomical).
  // Cultural meanings drawn from publicly known Māori tradition; placeholder
  // copy — review with cultural advisors before publication.
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

  // ---- EXPERIENCE CARDS ----
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

  // ---- CULTURAL VALUES ----
  values: [
    { key: "Manaakitanga",        en: "Care · Hospitality",     desc: "The wellbeing of the visitor is held with care. The experience welcomes, never imposes." },
    { key: "Kaitiakitanga",       en: "Guardianship",           desc: "Story, knowledge, and place are treated as taonga to be protected — not consumed." },
    { key: "Whakawhanaungatanga", en: "Building relationships", desc: "Relationship between user, story, and tūpuna is built slowly — through presence, not performance." },
  ],

  // ---- CREATOR / FOOTER ----
  creator: {
    name: "Thomas Kereama Perese",
    role: "Creative Technologist · Aotearoa",
    bio:
      "Māori / Pacific creative technologist working across spatial computing, immersive storytelling, AI, and culturally grounded design. Guardians of Matariki was developed as a research prototype exploring how spatial computing can serve cultural narrative.",
    initials: "TP",
  },
  links: {
    demo: "#demo",
    research: "#research",
    portfolio: "#portfolio",
    contact: "mailto:hello@example.com",
  },
};

window.CONFIG = CONFIG;
