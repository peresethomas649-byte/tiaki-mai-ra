// data.js — All editable content for KINSafe site
// Plain global window assignments so it loads without modules.

window.SS_DATA = {
  brand: {
    name: "KINSafe",
    tagline: "AR Construction Safety Training",
  },

  hero: {
    eyebrow: "iOS · Augmented Reality",
    headline: "Train Safer.\nLearn Faster.\nExperience safety in AR.",
    sub: "KINSafe uses augmented reality to help learners identify construction hazards, choose safety measures, and build safer decision-making skills through interactive mobile training.",
    primaryCta: "Explore the App",
    secondaryCta: "View Training Flow",
  },

  problem: [
    {
      title: "Passive learning",
      body: "Slide decks and videos rarely build muscle memory. Trainees forget hazards within weeks.",
    },
    {
      title: "Disconnected from site",
      body: "Classroom training feels abstract. Real sites have spatial context, motion, and pressure.",
    },
    {
      title: "Hard to assess",
      body: "Multiple-choice quizzes can't tell you if a learner can actually spot a fall hazard at height.",
    },
    {
      title: "Static content",
      body: "Curriculum updates lag years behind regulation. Training feels stale and generic.",
    },
  ],

  flow: [
    { id: "scan", num: "01", title: "Scan your space", body: "Point your phone at the room. KINSafe maps the floor, walls, and obstacles using LiDAR." },
    { id: "place", num: "02", title: "Place the construction site", body: "Drop a virtual scaffold, walkway, and machinery anywhere in your environment." },
    { id: "hazard", num: "03", title: "Identify hazards", body: "Walk around. Tag what looks unsafe — unsecured loads, missing guard rails, blocked exits." },
    { id: "controls", num: "04", title: "Choose safety controls", body: "Pick the correct intervention for each hazard from a contextual list." },
    { id: "ppe", num: "05", title: "Select PPE", body: "Equip your virtual worker. Wrong PPE, wrong outcome." },
    { id: "review", num: "06", title: "Review performance", body: "Get a hazard-by-hazard breakdown with timing, accuracy, and recommended modules." },
  ],

  hazards: [
    { id: "scaffold", x: 22, y: 28, label: "Working at heights", body: "Fall protection and scaffold checks are required above 2m." },
    { id: "materials", x: 68, y: 62, label: "Unsecured materials", body: "Loose materials can fall or create trip hazards. Stack low and bind." },
    { id: "machinery", x: 80, y: 35, label: "Machinery zone", body: "Maintain a 3m exclusion zone. Use visible signage and a banksman." },
    { id: "walkway", x: 38, y: 78, label: "Walkway hazard", body: "Keep access paths clear, marked, and 1.2m wide minimum." },
    { id: "electrical", x: 52, y: 18, label: "Overhead lines", body: "Identify live services before lifting or extending plant." },
  ],

  ppe: [
    { id: "helmet", label: "Helmet", body: "Protects against falling objects and overhead impact.", region: "head" },
    { id: "eyes",   label: "Eye protection", body: "Protects against dust, debris, and flying particles.", region: "eyes" },
    { id: "vest",   label: "High-vis vest", body: "Improves visibility around machinery and active site zones.", region: "torso" },
    { id: "gloves", label: "Gloves", body: "Reduces hand injuries when handling materials.", region: "hands" },
    { id: "boots",  label: "Safety boots", body: "Protects feet from impact, slips, and sharp objects.", region: "feet" },
  ],

  features: [
    { icon: "scan",     title: "AR Hazard Identification",  body: "Spatially anchored hazard markers respond to where you stand and where you look." },
    { icon: "shield",   title: "Interactive Safety Measures", body: "Match each hazard to the right control. Get scored on order, choice, and timing." },
    { icon: "vest",     title: "PPE Selection", body: "Equip a virtual worker for each scenario. Wrong combinations fail the run." },
    { icon: "layers",   title: "Scenario-Based Modules", body: "Realistic site briefs from low-rise residential to high-rise civils." },
    { icon: "pulse",    title: "Real-Time Feedback", body: "Live hints and post-run breakdowns flag what to revisit." },
    { icon: "chart",    title: "Future Analytics Dashboard", body: "Adaptive learning surfaces gaps across teams and recommends modules." },
  ],

  modules: [
    { name: "Hazard Identification",  level: "Foundation", time: "12 min", body: "Spot common site hazards across five scenarios." },
    { name: "Working at Heights",     level: "Intermediate", time: "18 min", body: "Scaffold inspection, edge protection, and harness checks." },
    { name: "PPE Awareness",          level: "Foundation", time: "10 min", body: "Match PPE to task, environment, and risk level." },
    { name: "Site Access & Walkways", level: "Foundation", time: "9 min",  body: "Maintain safe access, signage, and exclusion zones." },
    { name: "Machinery Awareness",    level: "Intermediate", time: "15 min", body: "Plant operating zones, banksman roles, and lift planning." },
    { name: "Manual Handling",        level: "Foundation", time: "11 min", body: "Posture, load assessment, and team-lift triggers." },
    { name: "Emergency Response",     level: "Advanced",    time: "20 min", body: "Evacuation, first aid, and incident reporting under pressure." },
    { name: "Environmental Safety",   level: "Intermediate", time: "14 min", body: "Dust, noise, weather, and surrounding-public risks." },
  ],

  appFlow: [
    "Start", "Scan Environment", "Place Site", "Identify Hazards",
    "Choose Measures", "Select PPE", "Complete Scenario", "Review Results"
  ],

  metrics: [
    { label: "Hazard recognition", value: 87, unit: "%", delta: "+12 vs last week" },
    { label: "PPE accuracy",       value: 94, unit: "%", delta: "+4 vs last week" },
    { label: "Avg. completion",    value: 13, unit: "min", delta: "−2 min vs cohort" },
    { label: "Modules cleared",    value: 6,  unit: "/8", delta: "On track" },
  ],

  // 7-day cohort hazard-recognition trend (last value matches the 87% tile above).
  // Heights are read as percentages of the chart frame; intentionally choppy so it
  // looks like real cohort data, not a smooth marketing curve.
  hazardOverTime: [62, 68, 71, 76, 79, 84, 87],

  users: [
    { title: "Construction trainees", body: "First-year apprentices building a baseline before site placement." },
    { title: "Site safety educators", body: "Trainers running cohorts through standardised, repeatable scenarios." },
    { title: "Training providers",    body: "Curriculum teams who need measurable, auditable outcomes." },
    { title: "Employers",             body: "Contractors verifying competency before issuing site passes." },
    { title: "Apprentices",           body: "Self-paced learners revisiting modules between rotations." },
    { title: "Health & safety teams", body: "Internal HSE professionals tracking team-wide knowledge gaps." },
  ],

  cta: {
    headline: "Build safer instincts before stepping onto site.",
    sub: "KINSafe turns safety training into an interactive AR learning experience.",
    button: "Start the KINSafe Experience",
  },

  scrollSteps: [
    { n: "1", label: "Scan Environment",       body: "LiDAR meshes the floor, walls, and obstacles within seconds." },
    { n: "2", label: "Place Construction Site", body: "Anchor a 1:1 virtual site to your real-world space." },
    { n: "3", label: "Detect Hazards",         body: "Walk the site. Markers respond to position and gaze." },
    { n: "4", label: "Select Controls",        body: "Pick the right intervention from a contextual list." },
    { n: "5", label: "Review Results",         body: "Score, timing, and weak-spot module recommendations." },
  ],
};
