// =====================================================================
// JOURNEYS — the creative-process roadmap for each project, in Double Diamond
// phases (Discover, Define, Develop, Deliver; one or two cycles per project).
// Each station is one decision, told as Situation, Task, Action, Result.
// Everything here is paraphrased from the projects' own design records.
// Pricing, security specifics, contract terms and persona names are left out.
// dir: r l d u dr dl ur ul. zoom: camera scale for the phase. vis: visual aid.
// =====================================================================
window.JOURNEYS = {
  gom: {
   "name": "Guardians of Matariki",
   "accent": "#2a3d8f",
   "kind": "Research prototype · visionOS",
   "intro": "An Apple Vision Pro storytelling experience of the nine stars of Matariki, built under kaupapa Māori values. It began as Thomas Perese's AUT MPhil (2024 to 2025) and continued in 2026 as a company project: audit the prototype, design all nine stars, and build the cluster home on a real headset.",
   "people": [
    {
     "name": "Thomas Perese",
     "role": "Researcher, designer, developer"
    },
    {
     "name": "Ray Hikaka",
     "role": "Collaborator"
    },
    {
     "name": "Professor Rachel Shearer",
     "role": "Primary supervisor, AUT"
    },
    {
     "name": "Professor Stefan Marks",
     "role": "Secondary supervisor, AUT"
    },
    {
     "name": "Dr Zena Elliott",
     "role": "Artist, artwork redesign (Ngāti Awa)"
    },
    {
     "name": "Piripi Taylor",
     "role": "Cultural advisor and voice"
    }
   ],
   "phases": [
    {
     "id": "d1-discover",
     "name": "Discover · Thesis",
     "colour": "#2a3d8f",
     "shape": "circle",
     "bg": "flow",
     "dir": "dr",
     "zoom": 1
    },
    {
     "id": "d1-define",
     "name": "Define · Thesis",
     "colour": "#1f7a5c",
     "shape": "square",
     "bg": "contours",
     "dir": "r",
     "zoom": 0.95
    },
    {
     "id": "d1-develop",
     "name": "Develop · Thesis",
     "colour": "#a5762a",
     "shape": "triangle",
     "bg": "lattice",
     "dir": "d",
     "zoom": 1.05
    },
    {
     "id": "d1-deliver",
     "name": "Deliver · Thesis",
     "colour": "#6b3fa0",
     "shape": "hexagon",
     "bg": "foam",
     "dir": "l",
     "zoom": 1
    },
    {
     "id": "d2-discover",
     "name": "Discover · Company",
     "colour": "#d9521b",
     "shape": "diamond",
     "bg": "branches",
     "dir": "ur",
     "zoom": 0.9
    },
    {
     "id": "d2-define",
     "name": "Define · Company",
     "colour": "#0e6f8a",
     "shape": "square",
     "bg": "hexes",
     "dir": "r",
     "zoom": 1
    },
    {
     "id": "d2-develop",
     "name": "Develop · Company",
     "colour": "#b8461a",
     "shape": "triangle",
     "bg": "circuit",
     "dir": "d",
     "zoom": 1.1
    },
    {
     "id": "d2-deliver",
     "name": "Deliver · Company",
     "colour": "#16130f",
     "shape": "hexagon",
     "bg": "dots",
     "dir": "dl",
     "zoom": 0.95
    }
   ],
   "stations": [
    {
     "phase": "d1-discover",
     "date": "2024",
     "title": "A holiday, and the risk of losing its depth",
     "s": "Matariki became a national public holiday in 2022. Recognition brought a real risk of fireworks-and-day-off framing and commodification of a living tradition.",
     "t": "Frame a research question that treats Matariki as a taonga rather than a product.",
     "a": "Thomas Perese set the MPhil question: how can immersive spatial storytelling enhance users' engagement with Māori culture through a mixed reality application? The aim was to investigate the educational and experiential affordances of spatial computing on Apple Vision Pro through a culturally grounded Matariki application.",
     "r": "The question fixed the project's register from the start: reflective and educational, never a game. Every later rule against gamification traces back here.",
     "vis": {
      "type": "hub",
      "centre": "Matariki",
      "spokes": [
       "Taonga",
       "Education",
       "Spatial",
       "Reflection"
      ]
     },
     "status": "Origin"
    },
    {
     "phase": "d1-discover",
     "date": "2024",
     "title": "Kaupapa Māori first, then interpretivism and pragmatism",
     "s": "The thesis needed a philosophy that kept cultural authority with Māori while still allowing practical, iterative design decisions by one developer.",
     "t": "Choose a research philosophy and approach for a solo, practice-based project.",
     "a": "Using the Research Onion, the work was framed as Kaupapa Māori research (by Māori, for Māori, with Māori), combined with interpretivism (meaning over generalisable data) and pragmatism (action, reflection, adaptation). Abductive reasoning and Design-Based Research made each prototype iteration a testbed.",
     "r": "The three philosophies were set to operate together, not in isolation. This later gave the company cycle its rule that Māori oversight decides what ships.",
     "vis": {
      "type": "layers",
      "base": "Kaupapa Māori",
      "layers": [
       "Interpretivism",
       "Pragmatism"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-discover",
     "date": "2024",
     "title": "Vision Pro over Quest 3 for cultural presence",
     "s": "Several headsets were available, and the device would shape what kinds of presence and embodiment the stories could carry.",
     "t": "Pick the hardware platform for a mixed reality cultural storytelling prototype.",
     "a": "Thomas tested devices including Quest 3 and found the Vision Pro's clarity, depth, and gaze and hand tracking better suited to cultural-presence work. visionOS, Swift, SwiftUI, RealityKit and Reality Composer Pro became the stack.",
     "r": "The choice bought fidelity at the cost of reach. Hardware price and regional availability were recorded as a limitation, and cross-platform expansion was deferred to future work.",
     "vis": {
      "type": "toggle",
      "items": [
       "Quest 3",
       "Vision Pro"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-discover",
     "date": "2024",
     "title": "Lotus Blossom to size a solo build",
     "s": "One developer had to cover UI and UX, modelling, animation, programming, sound and narrative inside an MPhil timeline.",
     "t": "Break the project into components and judge each for tool, skill, learning curve and time.",
     "a": "Dérive (unstructured drifting across literature and tooling) and the Lotus Blossom ideation method segmented the work and scored each segment. Sketching and low-fidelity walkthroughs in Swift Playgrounds came before any interactive 3D build.",
     "r": "The method surfaced the steep visionOS learning curve early, which the thesis later names as a limitation rather than a surprise. Six Thinking Hats carried over into the company's agent model.",
     "vis": {
      "type": "spread"
     },
     "status": "Recorded"
    },
    {
     "phase": "d1-discover",
     "date": "2024",
     "title": "Three values as design principles, not labels",
     "s": "Cultural values risk becoming decorative content tags in a technology project.",
     "t": "Decide how te ao Māori values would actually govern design.",
     "a": "Manaakitanga (care: pacing, tone, comfort), kaitiakitanga (guardianship: protected representation, no gamification) and whakawhanaungatanga (relationship: presence over task completion) were made actionable principles with concrete interface consequences.",
     "r": "These three became the test every later decision was checked against, from the quiz reframe to the eight-minute comfort nudge.",
     "vis": {
      "type": "card",
      "badges": [
       "Manaakitanga",
       "Kaitiakitanga",
       "Whakawhanaungatanga"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "2024",
     "title": "Three layers as a scaffold, not a menu",
     "s": "visionOS offers windowed, volumetric and Full Space scenes. They could be a feature list or a learning structure.",
     "t": "Decide how the immersion levels relate to each other.",
     "a": "The three modes were layered as a scaffold mapped to Bloom's Taxonomy: windowed for remember and understand, volumetric for apply and analyse, Full Space for evaluate and reflect. Constructivist, non-linear exploration sat on top.",
     "r": "The layering became the thesis's core model and the study's time horizon: each level developed, tested and evaluated in sequence.",
     "vis": {
      "type": "layers",
      "base": "Windowed",
      "layers": [
       "Volumetric",
       "Full Space"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "2024",
     "title": "Nine stars, four full scenes: the MVP cut",
     "s": "Nine principal stars could not all receive volumetric and immersive scenes within one MPhil.",
     "t": "Decide which stars get which tier.",
     "a": "Waitī and Waitā became volumetric guardian scenes; Waipuna-ā-rangi and Ururangi became Full Space worlds; Tupu-ā-nuku and Tupu-ā-rangi received layered parallax windows; Pōhutukawa and Hiwa-i-te-rangi shared a single card image; Matariki itself held the introduction and a primer video.",
     "r": "Five of nine stars were left at card or parallax level. The gap was recorded honestly and became the first item in post-thesis story expansion.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "map"
      ],
      "b": [
       "list",
       "check"
      ]
     },
     "status": "Cut"
    },
    {
     "phase": "d1-define",
     "date": "2024",
     "title": "MoSCoW and Fibonacci, plus cultural fidelity",
     "s": "Agile estimation tools are built for commercial feature lists, not cultural research.",
     "t": "Adapt backlog prioritisation to the project.",
     "a": "Items were classified by development feasibility, alignment with learning goals, cultural and narrative fidelity, and importance to onboarding, then sized with Fibonacci points. User stories were written from three perspectives: beginner, curious and proficient users.",
     "r": "Cultural fidelity as an explicit criterion survived into the company backlog, where it gained a fifth rule: items blocked on cultural review cannot be Must-Have for a sprint.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Must",
       "Should",
       "Could",
       "Won't"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "2024",
     "title": "Double Diamond outside, SCRUM inside",
     "s": "The study needed both an exploratory arc and a build cadence.",
     "t": "Choose a governance structure for the whole project.",
     "a": "Double Diamond (Discover, Define, Develop, Deliver) governed the macro shape. Agile SCRUM sprints with a backlog, sprint goal, points and retrospective ran inside Develop. Four sprints were planned: one per immersion level, then integration.",
     "r": "The company vault later mirrored the four phases as folders and adopted the rule that nothing enters Develop without passing Define. That rule is what halted Sprint 01 in 2026.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Discover",
       "Define",
       "Develop",
       "Deliver"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "2024",
     "title": "Self-rated NASA-TLX and TAM, because no participants",
     "s": "No external user testing was possible within the MPhil.",
     "t": "Find instruments that allow rigorous reflection without participants.",
     "a": "Mixed methods, qualitative-dominant: reflexive journaling, walkthrough logs and interface critique, plus self-rated NASA-TLX for cognitive load and TAM for usefulness and ease of use at each immersion level.",
     "r": "Scores were treated heuristically, not statistically, and the thesis says so plainly. The same instruments were later templated for external participants.",
     "vis": {
      "type": "labels"
     },
     "status": "Locked"
    },
    {
     "phase": "d1-develop",
     "date": "MPhil Sprint 1",
     "title": "Depth inside a window",
     "s": "The first layer had to welcome users and carry the cultural primer at low cognitive load.",
     "t": "Build the windowed onboarding and star selection.",
     "a": "A SwiftUI landing stacked star illustrations behind text with 3D padding for a pop-out depth effect. Tupu-ā-nuku and Tupu-ā-rangi received twelve-layer parallax cards (clouds, birds, berries, star, background). An embedded Matariki primer video played through AVKit.",
     "r": "Windowed later scored best on ease of use and manaakitanga. In 2026 the parallax layers were kept but flagged for cultural review because of the 'gods' image set names.",
     "vis": {
      "type": "layers",
      "base": "Background",
      "layers": [
       "Clouds",
       "Birds",
       "Berries",
       "Star"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-develop",
     "date": "MPhil Sprint 2",
     "title": "A guardian kneels and stands",
     "s": "Volumetric scenes needed embodied presence with gaze, pinch, drag and scale.",
     "t": "Give Waitī and Waitā a 3D presence inside a room-scale volume.",
     "a": "Warrior figures were generated and auto-rigged through Meshy, with a kneel-to-stand animation, rotating stars driven by a custom orbit system, and a descriptive panel placed in comfortable gaze range. Light and orbit toggles let users change the scene.",
     "r": "It worked as an interaction layer, but the AI-generated figures carried moko-like markings and attire that the thesis judged to lack the nuance required for Māori art. They were marked as placeholders, not final assets.",
     "vis": {
      "type": "recede"
     },
     "status": "Built"
    },
    {
     "phase": "d1-develop",
     "date": "MPhil Sprint 3",
     "title": "Rain in full immersion, wind in pass-through",
     "s": "Full Space scenes could either replace the room or blend with it.",
     "t": "Choose an immersion style for each star.",
     "a": "Waipuna-ā-rangi became a fully immersive rain world with particle effects and a guardian under the stars. Ururangi became a mixed pass-through scene where swirling clouds move through the user's own room. Ambient audio was gained down and looped.",
     "r": "Two styles for two elements set a precedent: scene type is a storytelling choice. The 2026 design locked a registry of four volumetric, four full and one mixed scene.",
     "vis": {
      "type": "toggle",
      "items": [
       "Full",
       "Mixed"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-develop",
     "date": "MPhil Sprint 4",
     "title": "Stitching the layers on a borrowed template",
     "s": "Three immersion layers existed as separate experiments.",
     "t": "Integrate them into one flow with state that survives scene changes.",
     "a": "Cross-scene state continuity let users revisit stars. The project had been built on top of a public visionOS sample app, so the immersive containers kept names like FullRocketRealityArea, and both immersive scenes reset the same visibility flag on dismiss.",
     "r": "The MVP was coherent enough to evaluate. The off-theme names and the shared-flag bug were inherited by the company cycle, which chose to retire them only through approved change briefs.",
     "vis": {
      "type": "branch",
      "from": "Template",
      "to": [
       "Windowed",
       "Volumetric",
       "Immersive"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-develop",
     "date": "MPhil Sprint 4",
     "title": "A quiz with ticks and crosses",
     "s": "Behaviourist immediate feedback was one of the educational theories in play.",
     "t": "Give users a way to check what they had learned.",
     "a": "A three-question quiz matched element pairs to stars, flashing green or red, with 'Correct!', 'Not quite right', a numeric score and a retry button.",
     "r": "It shipped in the prototype but was not foregrounded in the thesis, which argued against gamifying Matariki. The tension was left for the next cycle, where the quiz was kept but rebuilt as recognition without scoring.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "check",
       "xmark"
      ],
      "b": [
       "list"
      ]
     },
     "status": "Recorded"
    },
    {
     "phase": "d1-deliver",
     "date": "2025",
     "title": "Load rises with immersion; so does resonance",
     "s": "The three layers had been built and walked through repeatedly.",
     "t": "Measure cognitive load across windowed, volumetric and immersive.",
     "a": "Self-rated NASA-TLX gave mental demand of 3, 6 and 8, frustration of 2, 3 and 6, and performance of 8, 6 and 5 across the three levels. Yet the immersive scene was described in reflection as cognitively effortless and emotionally impactful.",
     "r": "The gap between felt experience and load score became the design lesson: transitions and orientation needed care, not less immersion. It seeded the 2026 comfort and transition contracts.",
     "vis": {
      "type": "range",
      "label": "Mental demand",
      "min": "3 (windowed)",
      "max": "8 (immersive)",
      "old": ""
     },
     "status": "Recorded"
    },
    {
     "phase": "d1-deliver",
     "date": "2025",
     "title": "Windowed scores easy, immersive scores deep",
     "s": "Usefulness and ease of use needed to be judged per layer.",
     "t": "Apply TAM to each immersion level.",
     "a": "Windowed scored 7 for helping understand Matariki and 6 for an intuitive interface; immersive scored 5 and 3. Qualitatively, embodiment, cultural resonance and emotional engagement increased with immersion.",
     "r": "The headline finding: as spatial immersion increases, narrative embodiment and cultural resonance increase. The ease deficit in immersive became the brief for gesture onboarding and calm exits.",
     "vis": {
      "type": "labels"
     },
     "status": "Recorded"
    },
    {
     "phase": "d1-deliver",
     "date": "2025",
     "title": "Cultural alignment, measured and admitted",
     "s": "The values had to be evaluated, not just claimed.",
     "t": "Assess the prototype against manaakitanga, whakawhanaungatanga and kaitiakitanga.",
     "a": "Manaakitanga showed most strongly in windowed mode (low barrier, gentle tone); whakawhanaungatanga in the non-linear immersive dialogue and symbolism; kaitiakitanga in sourcing content from credible references and refusing gamification.",
     "r": "The thesis also named where it fell short: AI-generated cultural art on prototype characters. That admission became the placeholder doctrine of the company cycle.",
     "vis": {
      "type": "badges"
     },
     "status": "Recorded"
    },
    {
     "phase": "d1-deliver",
     "date": "2025",
     "title": "Seven limitations, written down",
     "s": "A solo MPhil on a new platform has real constraints.",
     "t": "Name the limitations rather than smooth them over.",
     "a": "No external testing; no participatory co-design; placeholder AI assets; limited accessibility testing; deferred AI features; Vision Pro cost and availability; the visionOS learning curve and interdisciplinary load on one developer.",
     "r": "Each limitation was paired with a future direction. The 2026 vault requires every sprint goal to ladder back to one of them.",
     "vis": {
      "type": "card",
      "badges": [
       "No external test",
       "Placeholders",
       "Accessibility",
       "Solo dev"
      ]
     },
     "status": "Recorded"
    },
    {
     "phase": "d1-deliver",
     "date": "2025",
     "title": "Future pathways become the next cycle",
     "s": "The exegesis closed with the prototype complete but not public.",
     "t": "Set out what responsible continuation would require.",
     "a": "External testing with Māori youth, educators and non-expert users; cross-platform reach; modular story expansion; community partnership so iwi, kura and marae can author their own narratives; curriculum integration; and cultural perpetuity by replacing placeholders with Māori-led assets.",
     "r": "The thesis was submitted at AUT in 2025. In June 2026 these pathways became the roadmap of Guardians of Matariki as a company project.",
     "vis": {
      "type": "branch",
      "from": "Thesis",
      "to": [
       "Testing",
       "Expansion",
       "Partnership",
       "Perpetuity"
      ]
     },
     "status": "Open"
    },
    {
     "phase": "d2-discover",
     "date": "1 Jun 2026",
     "title": "A workspace outside iCloud, and a copy that deadlocked",
     "s": "The prototype lived on an iCloud-managed Desktop. The new company workflow runs Claude Cowork for planning and Claude Code for implementation.",
     "t": "Stand up a stable workspace and bring the prototype in without touching the original.",
     "a": "The workspace moved to a Developer folder outside iCloud. Copying through Cowork's mounted view deadlocked on every Swift and plist file while binary assets copied fine, so a host-side script with iCloud pre-download, rsync excludes and a parity check was written for Thomas to run on the Mac.",
     "r": "The original prototype was preserved read-only. Sprint 00 shipped zero code changes by decision, and all audits ran from the clean copy.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "xmark"
      ],
      "b": [
       "check"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d2-discover",
     "date": "1 Jun 2026",
     "title": "Borrow KINsafe's process, not its content",
     "s": "Thomas's other venture, KINsafe, had a mature vault, agent playbook and handoff discipline.",
     "t": "Decide what to inherit from it.",
     "a": "The folder shape and the Cowork-to-Code handoff were adopted with one rename, 02-decide to 02-define, to match the thesis. Fourteen agents became twelve: backend and commercial roles dropped; a cultural-safety reviewer, a thesis methodology lead and a soundscape and comfort lead added.",
     "r": "Everything mobile-AR, pricing or backend was explicitly excluded. The cultural-safety agent became a hard gate on every Māori representation.",
     "vis": {
      "type": "hub",
      "centre": "Vault",
      "spokes": [
       "Context",
       "Discover",
       "Define",
       "Develop",
       "Deliver",
       "Decisions"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-discover",
     "date": "1 Jun 2026",
     "title": "Every cultural asset gets a status",
     "s": "The prototype mixed AI-generated guardians, unverified audio and author-made art with no way to tell them apart.",
     "t": "Make placeholder versus verified visible and enforceable.",
     "a": "Each culturally loaded asset was registered with one of four statuses: placeholder-internal-only, needs-cultural-review, verified-with-source, community-led. Both guardian models and the warriors were placeholder-internal-only; the app icon, star imagery and scene audio needed review.",
     "r": "Distribution gates now check these statuses. The prototype was declared not cleared for public release, conference demo, or showing to Māori reviewers without the placeholder framing made explicit.",
     "vis": {
      "type": "card",
      "badges": [
       "placeholder",
       "needs review",
       "verified",
       "community-led"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-discover",
     "date": "1 Jun 2026",
     "title": "What the journey lacked",
     "s": "The thesis described the scenes, but the edges of the user journey were implicit.",
     "t": "Reconstruct the current journey and name the gaps.",
     "a": "The audit found no reflective close-out, no pronunciation support, no gesture onboarding for first-time visionOS users, no clearly findable exit from immersive scenes, and five of nine stars under-served.",
     "r": "These became backlog items: calm exit affordance, gesture hint, transition pattern, reflection moments, accessibility pass. Several were locked as design calls within the week.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Launch",
       "Select",
       "Volumetric",
       "Immersive",
       "Return"
      ]
     },
     "status": "Recorded"
    },
    {
     "phase": "d2-discover",
     "date": "2 Jun 2026",
     "title": "The rockets are not dead code",
     "s": "File names like FullRocketRealityArea, MissionArea and EarthGods, and a full quiz flow, were not described in the thesis.",
     "t": "Audit the 29 Swift files and the RealityKit package before changing anything.",
     "a": "The audit found the rocket-named files were the live immersive containers, inherited from a public sample template; scene IDs were hard-coded in three places; both immersive scenes reset the same flag; the quiz flashed ticks and crosses; 'EarthGods' named atua with colonising language.",
     "r": "Each became a decision item rather than a quick fix: renames deferred at Thomas's request, the quiz routed to a cultural call, scene IDs consolidated in Sprint 01.",
     "vis": {
      "type": "card",
      "badges": [
       "Rocket scenes",
       "Quiz",
       "EarthGods",
       "Shared flag"
      ]
     },
     "status": "Recorded"
    },
    {
     "phase": "d2-discover",
     "date": "2 Jun 2026",
     "title": "Thomas is the named cultural reviewer",
     "s": "The doctrine had treated the human reviewer as a future external advisor, which blocked all cultural asset work.",
     "t": "Clarify who holds authority on cultural safety now.",
     "a": "Thomas, as Māori and the author of Kaupapa Māori research, declared himself the named cultural-safety reviewer. The reviewer agent shifted from blocking to running checklists, flagging tensions and logging his decisions.",
     "r": "Cultural work unblocked without lowering the bar. Iwi-specific elements still flag for that iwi's involvement, and external review remains valuable before distribution.",
     "vis": {
      "type": "hub",
      "centre": "Reviewer",
      "spokes": [
       "Checklist",
       "Flags",
       "Decisions",
       "Iwi gate"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-discover",
     "date": "3 Jun 2026",
     "title": "What to steal from Apple's Hello World",
     "s": "Apple's sample app demonstrates all three visionOS scene types cleanly.",
     "t": "Analyse it for patterns worth lifting into Matariki.",
     "a": "One enum as the single source of truth for cards, destinations and scene IDs; three drop-in modifiers for typewriter text, drag rotation and placement; a configuration-driven entity that works in every scene; cross-scene state on navigation pop; shader parameters driven from Swift.",
     "r": "The analysis also named what Hello World lacks: narrative arc, audio, reflection and cultural framing. Those gaps shaped all five upgrade proposals.",
     "vis": {
      "type": "bank"
     },
     "status": "Recorded"
    },
    {
     "phase": "d2-define",
     "date": "3 Jun 2026",
     "title": "The cluster is the menu",
     "s": "Five upgrade proposals offered different bets: a full modular port, the constellation as navigation, four themed groupings, reflection overlays on existing scenes, and a time-of-year teaching scene.",
     "t": "Choose the scope for Sprint 01 and beyond.",
     "a": "Thomas chose Te Kāhui Whetū: the Matariki cluster becomes the home and navigation surface. Each star is a gazeable, pinchable entity; a glass panel shows its story; a single call to action steps into its scene. Existing scenes survive as step-in experiences.",
     "r": "The windowed card grid was retired as the landing surface. The recommended lower-risk sequence (overlays first) was declined in favour of the most spatially native move.",
     "vis": {
      "type": "hub",
      "centre": "Cluster",
      "spokes": [
       "Gaze",
       "Panel",
       "Enter",
       "Return"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "3 Jun 2026",
     "title": "Keep the questions, drop the score",
     "s": "The quiz violated the no-gamification rule, but Thomas wanted the questioning experience preserved.",
     "t": "Decide the fate of the quiz.",
     "a": "It was reframed as recognition and reflection: no score, streak or win state; no green or red flashes; questions phrased as 'Which kaitiaki guards the freshwater?' with star silhouettes lighting softly; affirmation instead of 'Correct'; a gentle re-prompt instead of 'Wrong'; offered only after visiting a star, optional and dismissible.",
     "r": "The underlying state machine was reused and the presentation rewritten. The closing line acknowledges reflection rather than completion.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "check",
       "xmark",
       "bars"
      ],
      "b": [
       "steps-text"
      ]
     },
     "status": "Pivoted"
    },
    {
     "phase": "d2-define",
     "date": "4 Jun 2026",
     "title": "The macron that did not exist",
     "s": "Thomas generated storyboard frames from the designer's prompts. One prompt specified a macron over the first u of Ururangi.",
     "t": "Catch and correct a cultural typography error before it became reference material.",
     "a": "The generator obeyed and rendered 'Ūrurangi'. The prompt was fixed, the code's display string verified as macron-free, and a per-star macron table (which vowels carry macrons, which never do) was baked verbatim into every future prompt.",
     "r": "The incident became the proof case for a project rule: image generators follow wrong instructions exactly, so macron accuracy is checked in every prompt and at every type scale.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "xmark"
      ],
      "b": [
       "check"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d2-define",
     "date": "4 Jun 2026",
     "title": "Stop coding, lock the design",
     "s": "Two Sprint 01 tickets had shipped (the lifted modifiers and a nine-case Star enum). Six of the remaining eight depended on design that existed only as prose across many files.",
     "t": "Decide whether to keep building.",
     "a": "Thomas halted code at 5 of 28 story points. Sprint 02 opened as a Discover and Define sprint with no code tickets: the app shell journey, nine per-star journeys and storyboards, the cultural review queue, and locked contracts for cluster UX, visuals, sound, accessibility, pipeline and continuity.",
     "r": "Sprint 03 would then build all nine stars against one coherent map rather than star by star. The retrospective noted the plan should have gate-checked Define before scoping code.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Code",
       "Halt",
       "Design",
       "Lock",
       "Code"
      ]
     },
     "status": "Pivoted"
    },
    {
     "phase": "d2-define",
     "date": "4 Jun 2026",
     "title": "No phonetic guides, poetic copy, a thematic order",
     "s": "The first designer pass produced nine star files with Anglicised pronunciation hints and the prototype's long educational panel text.",
     "t": "Settle wording calls that apply to all nine stars at once.",
     "a": "Thomas removed phonetic guides entirely in favour of tap-to-hear verified audio; promoted the shorter poetic drafts to canonical panel copy; set 'Return to Matariki' for eight stars and 'Return to the cluster' for Matariki's own scene; and ordered the stars thematically: remembrance, sustenance, elements, aspiration, centre.",
     "r": "The order (Pōhutukawa first, Matariki last) became both build order and emotional arc. A later sweep found a phonetic guide still lurking in one prompt, so cross-file greps became standard verification.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Pōhutukawa",
       "Sustenance",
       "Elements",
       "Hiwa-i-te-rangi",
       "Matariki"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "4 Jun 2026",
     "title": "From silhouettes to atua",
     "s": "The prototype doctrine kept guardians abstract: no moko, no attire, no taonga, power shown only through environment. Pōhutukawa's journey surfaced seven cultural holds.",
     "t": "Decide how the guardians should look.",
     "a": "Thomas reversed the default: each star's atua may be a fully realised Māori figure with moko, korowai tinted to the star's colour, taonga and a pose tied to its element, while never fabricating iwi-specific markings or named ancestors. For Pōhutukawa he dropped an iwi-disclosure card, kept a silent 'speak a name' moment with no microphone, swapped an iwi-specific proverb for a pan-tribal one, and set the call to action 'Sit with Pōhutukawa'.",
     "r": "All nine image-generation prompt sets were re-cut under the new doctrine; earlier renders became reference only. Audio stayed deferred until Thomas supplies verified recordings.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "dots"
      ],
      "b": [
       "map"
      ]
     },
     "status": "Pivoted"
    },
    {
     "phase": "d2-define",
     "date": "4 Jun 2026",
     "title": "Ten shell questions, nine answered in one go",
     "s": "The app-shell journey raised ten open calls about welcome copy, transitions, return cues, calm mode, comfort timing and audio-only mode.",
     "t": "Resolve them without stalling the per-star work.",
     "a": "Thomas delegated to designer judgement. Locks: hint copy 'Look at a star. Pinch to enter.'; step-in as a slow recede (cluster up and back, 30 percent smaller) with a cut-with-fade variant for reduce motion; one warm pulse from the cluster per breath while inside a scene; return affordance gaze-revealed top right; calm mode off by default; an eight-minute 'Pause for a breath?' nudge with no visible timer; audio-only mode deferred.",
     "r": "The te reo welcome subtitle was held for Thomas's own review and later approved as canonical. Every per-star journey inherited these locks.",
     "vis": {
      "type": "toggle",
      "items": [
       "Calm off",
       "Reduce motion",
       "8-min nudge"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "5 Jun 2026",
     "title": "Nine guardians that must read apart at a glance",
     "s": "With atua now depicted, nine figures risked blurring into one.",
     "t": "Give each star's kaitiaki a distinct identity without inventing culture.",
     "a": "The designer kept a running directory of implements and gaze directions: a tokotoko, a kō, a hue, a hoe, three empty-hand palm orientations (forward, down, up), a starlight orb over one palm, and palms facing each other around a cluster orb. Gazes ran sideways, down, up, out to a far horizon, into close mist, inward with eyes closed, and, for Matariki alone, at the user. Four uncertain attributions stayed as star-as-kaitiaki rather than naming contested atua.",
     "r": "Tāwhirimātea, the most conflict-coded atua, was shown at peace with eyes closed as the strongest marker against storm-god framing. Every later brief required explicit implement and gaze statements.",
     "vis": {
      "type": "labels"
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "10 Jun 2026",
     "title": "One cultural sitting clears the queue",
     "s": "Five content holds and the mandatory pre-generation review of Matariki herself had accumulated across nine stars.",
     "t": "Clear them in one structured pass rather than ticket by ticket.",
     "a": "Thomas approved Matariki depicted with her gaze on the user, generated front view first for inspection before the other three views; included two Whanganui river proverbs for Waitī and activated an iwi-consultation flag before any public distribution; included native bird audio in direction; kept a proverb at its literal canopy reading; approved two modern compositions attributed as contemporary; and made three te reo lines canonical.",
     "r": "Image generation unblocked across the app. Waitī's public gate now carries a standing requirement for Whanganui involvement.",
     "vis": {
      "type": "burst"
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "10 Jun 2026",
     "title": "Catalogue positions and 'Gather with Matariki'",
     "s": "The cluster needed a position source and a commit gesture before coordinates or code could be authored.",
     "t": "Lock the cluster arrangement and interaction grammar.",
     "a": "Positions follow the standard astronomical catalogue for the nine stars as identified in Matariki scholarship, flattened to shallow 3D with Matariki central and brightest, stylised at most 10 percent so no two stars sit within five degrees. Gaze targets and pinch commits; tap was rejected as outside comfortable reach and dwell as a Midas-touch risk against an unhurried register. Matariki's call to action became 'Gather with Matariki'.",
     "r": "Coordinates were authored against the standard within a day. The 10 percent bound would be relaxed a day later on the headset.",
     "vis": {
      "type": "pin"
     },
     "status": "Locked"
    },
    {
     "phase": "d2-develop",
     "date": "11 Jun 2026",
     "title": "Type, tint and a soundscape that is never silent",
     "s": "Nine scenes and a shell needed one vocabulary.",
     "t": "Lock the visual, motion and audio systems.",
     "a": "System serif for reflective text at 64, 40 and 21 points at one metre; a binding te reo typesetting gate that checks every macron at every scale and forbids typefaces without full coverage; midnight navy, starlight white and a warm gold thread with per-star tints at 10 to 15 percent. Four audio layers with a starfield bed at 70 percent at home and 30 percent in scene, equal-power crossfades, silent held moments, and every asset deferred to a register where te reo rows can only be owned by Thomas.",
     "r": "The prototype's unverified audio files were excluded from any build under the new architecture. Cue sounds were allowed to be silence.",
     "vis": {
      "type": "swatches",
      "colours": [
       "#101826",
       "#F5F2E8",
       "#E8C87A",
       "#C4543A"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-develop",
     "date": "11 Jun 2026",
     "title": "Two tracks, stricter wins; honest pronunciation",
     "s": "System reduce motion and an in-app calm mode could conflict, and VoiceOver would mispronounce te reo names.",
     "t": "Lock accessibility and comfort behaviour.",
     "a": "Reduce motion forces cut-with-fade transitions and halved pulses; calm mode adds paused rotation and quieter ambience; where both apply, the stricter row wins. Eleven discrete commands mirror every gesture. For VoiceOver, te reo strings are tagged as Māori language with macron-correct labels, verified clips will replace the synthetic voice, and phonetic respelling is banned everywhere.",
     "r": "Thomas accepted poor interim pronunciation as more honest than an approximation. The eight-minute nudge stayed the only comfort enforcement; nothing times out against the user.",
     "vis": {
      "type": "toggle",
      "items": [
       "Reduce motion",
       "Calm mode",
       "Both"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-develop",
     "date": "11 Jun 2026",
     "title": "Image to Meshy to Blender to RCP, gated at every step",
     "s": "Atua images, meshes, rigs, animations and scenes would pass through several tools and several working chats.",
     "t": "Lock the asset pipeline end to end.",
     "a": "Thomas runs the four-view T-pose generation and inspects every set before anything enters Meshy; Meshy produces rigged characters from approved multi-view images; Blender stitches a short peace-register animation loop (breath, slow look, gentle gesture) and exports USDZ in a mandatory two-stage round trip; Reality Composer Pro assembles with gaze-axis checks. Matariki's chest cluster-orb is built in RCP, never in the rig.",
     "r": "Any drift from the reference (wrong implement, missing orb, broken moko region) is a cultural fidelity failure that escalates rather than being patched creatively. Cluster glow needs no Blender at all.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Image",
       "Review",
       "Meshy",
       "Blender",
       "RCP"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-develop",
     "date": "11 Jun 2026",
     "title": "One full-motion scene, Swift drives the calm",
     "s": "Calm mode and reduce motion could be baked as scene states or driven at runtime.",
     "t": "Decide the load-bearing architecture before any scene is built.",
     "a": "Scenes are authored in exactly one full-motion state. A single MotionPolicy resolver reads both settings live and sets parameters on named entities, the pattern the prototype's orbit system already used. Ten architecture confirmations landed with zero designer proposals overturned. Legacy assets stay until each scene is superseded by an approved brief.",
     "r": "Thomas directed building the entire new app rather than deploying the old prototype as a baseline. Sprint 03 opened with the cluster home first.",
     "vis": {
      "type": "layers",
      "base": "RCP scene (full motion)",
      "layers": [
       "MotionPolicy",
       "Named entities"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-develop",
     "date": "11 Jun 2026",
     "title": "First headset preview: clipped title, tight cluster",
     "s": "The cluster home was built in a day and deployed to Thomas's Vision Pro, never the simulator.",
     "t": "Test the arrival on real hardware.",
     "a": "Thomas loved the title, tints, glow, pulse and slow rotation. But the splash clipped to 'Mānawatia a...', the splash window and the volume overlapped as two surfaces, and the stars sat too close. He directed one volumetric only, with the glass card inside it and stars fading in after the text, and a spread outward from Matariki that keeps sibling pairs closer.",
     "r": "The cluster spread 1.7 times, superseding the 10 percent stylisation bound. With the bigger cluster, the maximum scale was cut from 2 times to 1.2 to avoid clipping the volume.",
     "vis": {
      "type": "range",
      "label": "Scale max",
      "min": "0.5×",
      "max": "1.2×",
      "old": "2.0× (was)"
     },
     "status": "Pivoted"
    },
    {
     "phase": "d2-develop",
     "date": "11 Jun 2026",
     "title": "Build 2 would not launch",
     "s": "The one-volumetric arrival never rendered. The app hung on launch.",
     "t": "Find why a new build died before the first frame.",
     "a": "A legacy file force-unwrapped a Matariki video that no longer existed in the copied project, and visionOS scene restoration was rebuilding the old window tree at launch. The file was de-fanged, every force-unwrap swept, and launch restoration suppressed so a fresh launch always lands in the arrival.",
     "r": "The fix exposed a stale deployment floor: the guard APIs needed visionOS 26, not 2.2. Thomas raised the floor himself, settling on 26.6. Apple API availability could not be caught in the Linux sandbox, so the Mac build became the only true check.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "xmark"
      ],
      "b": [
       "check"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d2-develop",
     "date": "11 Jun 2026",
     "title": "Rotate only, labels face you, and leave the volume",
     "s": "Round three on the headset: pinch-drag could pull the cluster out of its volume, labels faced away, and panel text clipped at the edge.",
     "t": "Fix the interaction grammar on evidence from the device.",
     "a": "Translation was removed; grab-drag rotates only and the cluster stays fixed in place. Name labels and panels billboard to the head. Rather than keep fighting container edges, the cluster home moved from a volumetric window to an immersive space, eliminating the clipping class structurally.",
     "r": "The first attempt used progressive immersion, which left a dark dial-controlled veil after returning from a scene. Round seven confirmed the fix: plain pass-through, stars never dismissable by the crown. The trade-off, no 'deepen the sky' dial at home, was accepted.",
     "vis": {
      "type": "toggle",
      "items": [
       "Volumetric",
       "Progressive",
       "Mixed"
      ]
     },
     "status": "Pivoted"
    },
    {
     "phase": "d2-develop",
     "date": "11 Jun 2026",
     "title": "Card first, then type, then stars",
     "s": "Rounds four and five tuned rhythm and placement with Thomas directing from inside the headset.",
     "t": "Make the arrival and the step-ins feel right.",
     "a": "The splash card appears instantly, title and subtitle type out, and only then do the stars fade in; the delay belongs to the stars, never the card. Labels moved beneath their stars, then back above for seven of nine (only Tupu-ā-nuku and Waitā kept beneath, made per-star configurable). Return moved into the in-scene Interact ornament as an arrow and 'Return', and returning must restore normal pass-through.",
     "r": "A scale bug was kept on purpose in one direction: the cluster shrinks on entering a volumetric scene, which Thomas liked, but it had to restore fully on every return instead of compounding.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Card",
       "Title",
       "Subtitle",
       "Beat",
       "Stars"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-develop",
     "date": "11 Jun 2026",
     "title": "Stop patching, find the owner",
     "s": "After eight rounds the arrival still played everything at once and a volumetric return brought back no stars.",
     "t": "Run the root-cause audit Thomas directed: find what prevents the sequence, remove it, rebuild clean.",
     "a": "Three causes were named. Card visibility had two owners since an RCP anchor moved the splash inside the scene. The immersive step-in paths differed only by a missing pre-present fade, so Ururangi's choreography became the single standard for every route. Unvalidated bounds fed a NaN into collider radii, which RealityKit skipped silently.",
     "r": "Ownership became singular and all bounds-derived values were validated. The device logs Thomas captured, not inference, were the instrument throughout.",
     "vis": {
      "type": "branch",
      "from": "Symptom",
      "to": [
       "Two owners",
       "Path drift",
       "NaN"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d2-develop",
     "date": "11 Jun 2026",
     "title": "The fades were never animations",
     "s": "Round nine: the card finally faded beautifully, but the stars never animated in.",
     "t": "Close the arrival bug for good.",
     "a": "The star fades had been stepped opacity writes from sleeping tasks, which RealityKit applies instantly, so no transition ever rendered. A transition engine replaced them. Builds 12 to 15 then eliminated candidates by log until the true cause appeared: an animated grow on the cluster root raced the per-frame auto-rotation on the same entity and composed a NaN transform that culled the stars.",
     "r": "Auto-rotation is now held during any transition, one transform writer at a time. The grow was removed from the arrival and flagged as a polish ticket rather than silently dropped. Thomas's build 15 log was clean.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "bars",
       "xmark"
      ],
      "b": [
       "check"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d2-deliver",
     "date": "11 Jun 2026",
     "title": "Nine headset rounds in a day, each written down",
     "s": "The feedback loop ran between Thomas on the headset, a planning chat, a code chat, a scene-building chat and a deploy chat.",
     "t": "Keep design authority and evidence intact at speed.",
     "a": "Every finding received an F-number, a severity and a route; every brief a paired report; every amendment a decision entry. Wins were logged alongside defects: 'fading away beautifully', 'this is what we want'.",
     "r": "Thirty-four findings and fifteen builds in one day produced a cluster home Thomas accepts, with a documentation sync list for the designer rather than drift between contract and build.",
     "vis": {
      "type": "timeline",
      "marks": [
       "Build 1",
       "Build 4",
       "Build 9",
       "Build 11",
       "Build 15"
      ]
     },
     "status": "Recorded"
    },
    {
     "phase": "d2-deliver",
     "date": "11 Jun 2026",
     "title": "Not cleared for the public, and saying so",
     "s": "A working build invites the question of showing it.",
     "t": "Define what must be true before any distribution surface opens.",
     "a": "The pre-distribution checklist carries Waitī's Whanganui consultation flag, the te reo typesetting gate, verification that held moments are truly silent, no prototype audio in any build, parity between gestures and discrete commands, and a comfort lens on sessions over fifteen minutes in one immersive scene. The prototype's legacy guardians remain placeholders until superseded.",
     "r": "The anti-roadmap stands: no App Store, no public TestFlight expansion, no conference demo of placeholder assets without a fresh cultural review.",
     "vis": {
      "type": "badges"
     },
     "status": "Internal only"
    },
    {
     "phase": "d2-deliver",
     "date": "Jun 2026",
     "title": "Templates ready for the testers who are not here yet",
     "s": "The thesis's main limitation was self-evaluation.",
     "t": "Prepare evaluation infrastructure for external participants.",
     "a": "NASA-TLX and TAM were templated for participants rather than self-rating. A testing plan layered build verification, device smoke tests, comfort and HIG review, accessibility review and cultural review, with the Vision Pro required for any comfort claim. External recruitment waits on an ethics pathway and the cultural pathway.",
     "r": "Each real bug fixed adds a regression line. External testing stays deferred until review and recruitment are in place.",
     "vis": {
      "type": "card",
      "badges": [
       "NASA-TLX",
       "TAM",
       "Comfort",
       "Cultural"
      ]
     },
     "status": "Planned"
    },
    {
     "phase": "d2-deliver",
     "date": "15 Jun 2026",
     "title": "Xcode 27 and RCP 3: migrate after the milestone",
     "s": "A new toolchain offered native Gaussian splats, room-reaching light, live preview to the headset and an in-editor generative assistant.",
     "t": "Decide when to migrate and what the assistant may touch.",
     "a": "The assessment recommended finishing the cluster-home preview on the current toolchain, then a mechanical migration with a dated backup of the RealityKit package before any resave, then opportunistic adoption. The RCP 3 Assistant is to be limited to abstract and environmental content and never atua, moko, garments, taonga or te reo audio.",
     "r": "The package backup folder was created the same day. The migration awaits Thomas's call on timing and the assistant rule before it becomes a decision entry.",
     "vis": {
      "type": "timeline",
      "marks": [
       "Preview",
       "Backup",
       "Mechanical",
       "Adopt"
      ]
     },
     "status": "Open"
    },
    {
     "phase": "d2-deliver",
     "date": "Jun 2026",
     "title": "What is live, what is next",
     "s": "Sprint 03, the build-out, is open.",
     "t": "State plainly where the project stands.",
     "a": "Live on Thomas's Vision Pro: the cluster home in pass-through with a typed welcome, nine tinted pulsing stars at catalogue positions, gaze-and-pinch panels with star-specific calls to action, and step-ins to the four prototype interiors with return. Not yet: the nine new star scenes, which wait on Thomas generating and inspecting atua image sets for the Meshy pipeline.",
     "r": "Next in order: a settings panel where calm mode becomes MotionPolicy's first live exercise, the arrival grow restored under the one-writer rule, then scenes in thematic order with Matariki last. Beyond that, the thesis pathways: external testing, community partnership and cultural perpetuity.",
     "vis": {
      "type": "burst"
     },
     "status": "Live"
    }
   ]
  },
  kinsafe: {
   "name": "KINsafe",
   "accent": "#1f7a5c",
   "kind": "Product · iOS AR training",
   "intro": "KINsafe turns a learner's physical space into a construction safety scenario on an iPhone. This journey follows the first hazard-identification module through two cycles: Scenario 1 (Basic Site Setup) from persona to a shipped, device-verified scene, and Scenario 2, which was designed once, then redesigned around a crane, a chemical spill and a live cable.",
   "people": [
    {
     "name": "Thomas Perese",
     "role": "Project lead, design and build"
    },
    {
     "name": "Ray Hikaka",
     "role": "Co-founder; AR safety-training research (AUT)"
    },
    {
     "name": "Otene Hopa",
     "role": "Cultural lead"
    },
    {
     "name": "Donna Perese",
     "role": "Stakeholder and industry relationships"
    }
   ],
   "phases": [
    {
     "id": "d1-discover",
     "name": "Discover · Scenario 1",
     "colour": "#1f7a5c",
     "shape": "circle",
     "bg": "flow",
     "dir": "dr",
     "zoom": 1
    },
    {
     "id": "d1-define",
     "name": "Define · Scenario 1",
     "colour": "#2a3d8f",
     "shape": "square",
     "bg": "squares",
     "dir": "r",
     "zoom": 0.95
    },
    {
     "id": "d1-develop",
     "name": "Develop · Scenario 1",
     "colour": "#a5762a",
     "shape": "triangle",
     "bg": "circuit",
     "dir": "d",
     "zoom": 1.05
    },
    {
     "id": "d1-deliver",
     "name": "Deliver · Scenario 1",
     "colour": "#6b3fa0",
     "shape": "hexagon",
     "bg": "foam",
     "dir": "l",
     "zoom": 1
    },
    {
     "id": "d2-discover",
     "name": "Discover · Scenario 2",
     "colour": "#d9521b",
     "shape": "circle",
     "bg": "branches",
     "dir": "dr",
     "zoom": 1
    },
    {
     "id": "d2-define",
     "name": "Define · Scenario 2",
     "colour": "#0e6f8a",
     "shape": "diamond",
     "bg": "contours",
     "dir": "r",
     "zoom": 0.9
    },
    {
     "id": "d2-develop",
     "name": "Develop · Scenario 2",
     "colour": "#b8461a",
     "shape": "triangle",
     "bg": "lattice",
     "dir": "ur",
     "zoom": 1.05
    },
    {
     "id": "d2-deliver",
     "name": "Deliver · Scenario 2",
     "colour": "#16130f",
     "shape": "hexagon",
     "bg": "dots",
     "dir": "r",
     "zoom": 1
    }
   ],
   "stations": [
    {
     "phase": "d1-discover",
     "date": "May 2026",
     "title": "Set the North Star: AR competency training industry trusts",
     "s": "Slide-deck and video safety inductions are the norm on New Zealand construction sites, and they are poorly retained. KINsafe needed one sentence that every sprint goal could ladder up to.",
     "t": "Write down what the product is for and what the next month, quarter and year must deliver.",
     "a": "The North Star was set as AR-delivered competency training recognised by NZ industry and accredited through bodies such as NZQA, MITO and BCITO. An outcome ladder was written: a one-month TestFlight with a handful of modules, then an App Store soft launch, then more modules and a competence index. The PM role was given the job of cutting any sprint goal that did not ladder cleanly.",
     "r": "Every later scope call (narrowing to two scenarios, parking the backend) was argued against this ladder rather than on its own merits.",
     "vis": {
      "type": "timeline",
      "marks": [
       "1 month",
       "3 months",
       "12 months",
       "5+ years"
      ]
     },
     "status": "Origin"
    },
    {
     "phase": "d1-discover",
     "date": "22 May 2026",
     "title": "Recon the existing Xcode shell before scaffolding anything",
     "s": "The first sprint plan assumed the iOS app had to be built from scratch, with two modules. An earlier round of Xcode work was sitting in a folder on Thomas's Mac.",
     "t": "Find out what already exists and what is actually missing.",
     "a": "The iOS Engineer and AR Scene Builder roles audited the Round 18 source: about 40 Swift files covering the app shell, every scenario-flow screen, the AR coordinator scaffolding and the domain models. Missing were the Reality Composer Pro scene package, any real backend, and 3D content. The backend plan was switched from AWS to Supabase at the same time because the four-week window could not absorb one to two weeks of infrastructure setup.",
     "r": "Sprint 1 was reframed from building a scaffold to wiring real content into an existing one. The source was migrated to a clean private repo on Day 1.",
     "vis": {
      "type": "layers",
      "base": "Round 18 shell (40 Swift files)",
      "layers": [
       "RCP scene package",
       "Supabase auth + data",
       "3D content"
      ]
     },
     "status": "Recorded"
    },
    {
     "phase": "d1-discover",
     "date": "22 May 2026",
     "title": "Write the apprentice persona as the centre of gravity",
     "s": "The team needed one user to design for, and construction has many: apprentices, foremen, safety managers, sole traders.",
     "t": "Describe the primary v1 user well enough that every copy and UX decision can be tested against them.",
     "a": "A composite persona was written: an 18-year-old first-year scaffolder apprentice in Auckland on a residential subcontractor's crew. He learns on smoko breaks, watches 60-second videos and scrolls past paragraphs, trusts senior scaffolders over HR voices, and is most afraid of looking stupid in front of the crew. A table of decision moments was drafted, from install to first wrong answer to showing a score to his foreman.",
     "r": "The persona became the standing test for Sprint 1 and 2 decisions. Foremen and safety managers were explicitly deferred to the company tier.",
     "vis": {
      "type": "phone",
      "card": "First wrong answer",
      "note": "never say 'incorrect'"
     },
     "status": "Recorded"
    },
    {
     "phase": "d1-discover",
     "date": "22 May 2026",
     "title": "Ground the three hazards in the hierarchy of controls",
     "s": "Scenario 1 had three hazards (trip hazard, open excavation, moving plant) but no agreed basis for why one control is right and another wrong.",
     "t": "Write a domain brief that ties each hazard to NZ regulation and field reality.",
     "a": "A Construction Safety SME brief framed everything under the Health and Safety at Work Act 2015 and WorkSafe New Zealand guidance, with the hierarchy of controls (eliminate, substitute, isolate, engineering, administrative, PPE) as the scoring backbone. Each hazard was mapped to a rung: clearing the walkway teaches elimination, a physical barrier teaches engineering control, a spotter teaches active dynamic control. Signage alone was defined as a fail everywhere.",
     "r": "The brief became the source for scripts, scene states and marking. Wrong answers were required to recognise good intent before redirecting.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Eliminate",
       "Substitute",
       "Isolate",
       "Engineer",
       "Admin",
       "PPE"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-discover",
     "date": "22 May 2026",
     "title": "UX review: well built, but it reads as corporate training",
     "s": "The inherited screens were clean SwiftUI with sensible navigation, yet nothing an apprentice would describe as worth using.",
     "t": "Review every scenario-flow screen against the persona and rank the fixes.",
     "a": "The review found a red X with 'Try Again' on wrong answers, a 'Check My Choices' button that read as a primary-school app, back buttons rendering at 24 to 30 points, 'Step 1 of 3' progress labels, a yellow severity badge that failed contrast, and a paper-document icon on the first screen. Fixes were ranked P0 to P3; most were copy-only.",
     "r": "Six P0 and P1 fixes were committed to Sprint 1: feedback tone, 56-point touch targets for gloved hands, dot progress indicators, badge contrast, a small celebration on correct answers.",
     "vis": {
      "type": "badges"
     },
     "status": "Recorded"
    },
    {
     "phase": "d1-define",
     "date": "22 May 2026",
     "title": "Speak professionally, not in tradie voice",
     "s": "The persona prefers peer voices, and the first copy rewrites leaned into that ('Tap every hazard you spotted out there', 'Gear up').",
     "t": "Decide the register of every app-facing line.",
     "a": "The product decision went the other way: professional, plain English, no slang. Four reasons were recorded: safety training must read as serious content; the foreman or safety advisor who recommends the app judges its credibility; many NZ construction workers read English as a second language and slang is harder to parse; and the apprentice trusts competence, not mimicry. Corporate-flat words like 'appropriate' and 'utilise' were banned too.",
     "r": "The script was revised to the professional register and the rule was stored as a standing convention for every later scenario and VO recording.",
     "vis": {
      "type": "toggle",
      "items": [
       "Tradie slang",
       "Corporate-flat",
       "Plain professional"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "22 May 2026",
     "title": "Kill the red X: 'Review Required' in orange",
     "s": "A wrong answer showed a big red cross and the title 'Try Again', exactly the school-test feel the persona fears.",
     "t": "Rewrite the feedback path so a wrong answer points to action without feeling like a fail.",
     "a": "'Try Again' became 'Review Required' with an orange exclamation icon, never red, never a cross. 'Correct!' lost its exclamation mark. 'Check My Choices' became 'Submit'. 'Revise in AR' became 'Review in AR'. 'Attempt 1' was hidden on the first pass and only shown from the second attempt.",
     "r": "The rewrites shipped in Sprint 1 and set the tone rule later carried into Scenario 2: encouraging through word choice, not through casual register.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "xmark",
       "btn-s"
      ],
      "b": [
       "check",
       "btn-l"
      ]
     },
     "status": "Shipped"
    },
    {
     "phase": "d1-define",
     "date": "26 May 2026",
     "title": "Narrow the MVP to two scenarios, defer the third",
     "s": "Module 1 was designed with three scenarios. Asset production, a second module and closeout work already filled Sprint 2.",
     "t": "Decide what the MVP actually ships.",
     "a": "Scenario 3 (Complex Work Area) was moved out of the MVP into a Sprint 2 stretch or Sprint 3 slot, with its own ticket and the rule that it starts with an SME brief before any scaffold. The reasoning was written down: better to ship two polished scenarios than three rushed ones.",
     "r": "Sprint 2 capacity was protected. Scenario 3 later became the Sprint 3 deliverable in the revised roadmap.",
     "vis": {
      "type": "branch",
      "from": "Module 1",
      "to": [
       "Scenario 1 · build",
       "Scenario 2 · build",
       "Scenario 3 · deferred"
      ]
     },
     "status": "Cut"
    },
    {
     "phase": "d1-define",
     "date": "26 May 2026",
     "title": "Bundle assets in the binary; On-Demand Resources later",
     "s": "Thomas asked how heavy the app would get as scenarios and meshes accumulated.",
     "t": "Choose how AR scene assets reach the device.",
     "a": "Three options were weighed: bundled in the app, Apple On-Demand Resources, or custom hosting. Bundled won for the MVP: at two or three scenarios the bundle sits well under Apple's limits and works offline from first launch, which matters on sites with unreliable signal. ODR was scheduled for when content grows to around six modules. Custom hosting was ruled out entirely.",
     "r": "A standing decision document and a migration ticket were created. Only the active scene loads into memory either way, so runtime performance was separated from download size.",
     "vis": {
      "type": "layers",
      "base": "App binary (offline from first launch)",
      "layers": [
       "Bundled .rkassets (MVP)",
       "On-Demand Resources (Sprint 3+)"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "26 May 2026",
     "title": "Three production paths for 3D, and ship the primitive first",
     "s": "3D content was named the riskiest path in the MVP: Blender iteration time does not scale with model speed.",
     "t": "Spec how every asset class gets made and what budget it must fit.",
     "a": "Humans go through Mixamo (pre-rigged, free animation library), equipment through Meshy text-to-3D then Blender cleanup, and site props through procedural Blender via MCP. Everything exports to USDZ. Poly and texture budgets were set per class, with the whole Scenario 1 scene under 100k triangles. The mitigation rule: a yellow cone on the floor beats a photorealistic excavator that takes eight hours.",
     "r": "Asset production was sequenced in phases (props, PPE, worker, machinery, assembly) and gated on the scene-authoring tooling landing first.",
     "vis": {
      "type": "hub",
      "centre": "USDZ",
      "spokes": [
       "Mixamo",
       "Meshy",
       "Blender MCP",
       "Reality Composer Pro"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "28 May 2026",
     "title": "Near-miss, never impact: lock the consequence-preview tone",
     "s": "Each hazard needed a short demo of what happens if it is not fixed. Storyboards were drafted in two versions, near-miss and full impact.",
     "t": "Pick one framing for every hazard demo across every scenario.",
     "a": "Near-miss won: the character stumbles, freezes, pulls back or steps short. No falls to the ground, no contact with machinery, no gore. Three reasons were recorded: App Store review rejects depicted injury even when stylised, it matches NZ induction practice, and apprentices respond harder to 'that almost was me' than to 'that person is hurt'. Allowed audio was limited to a sharp inhale, 'whoa' or 'hey'.",
     "r": "The term 'consequence preview' was adopted in code, copy and docs. The rule held for Scenario 1 and was deliberately revisited for Scenario 2.",
     "vis": {
      "type": "toggle",
      "items": [
       "Near-miss",
       "Full impact"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "28 May 2026",
     "title": "Every tap gets a sensory acknowledgement",
     "s": "Trainees use the app on noisy sites and need fast confirmation that something happened. The scene also appeared all at once, which felt jarring.",
     "t": "Define the audio, animation and haptic target experience and the order to build it.",
     "a": "The principle was written down: every interaction gets a visual, audio or haptic response. The plan covered a staged pop-in reveal, an ambient construction bed, voice narration recorded by Thomas in a NZ safety-officer register, per-hazard demo animations, a PPE avatar, and a haptic matrix with four mute toggles. Thomas chose to build the ambient experience first so interactive animations would land in a scene that already felt alive.",
     "r": "The phases shipped roughly in that order. The avatar visibility rules (hazard avatar only during a demo, PPE avatar only during PPE) also came out of this document.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Reveal",
       "Ambient",
       "Voice",
       "Demos",
       "PPE avatar",
       "Haptics"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "28 May 2026",
     "title": "Hide the hotspots: the trainee hunts, with an 8-second pulse",
     "s": "The hazard hotspots had evolved from visible red spheres to transparent ones, and were still pointing at the answer.",
     "t": "Decide how much the scene should help the trainee find each hazard.",
     "a": "Thomas's call: the trainee should hunt, not be pointed at. Hotspots became invisible collision volumes. As a safety net, every eight seconds each one fades to about 25 percent red for roughly a second and back out. On tap there is a brief flash. In measure mode the same pulse turns blue. A dedicated hint button was rejected because the pulse already does that job passively.",
     "r": "Swift took ownership of hotspot visuals; the scene file carries only the colliders. The hunt phase became the core of the learning loop.",
     "vis": {
      "type": "timeline",
      "marks": [
       "Hunt · red pulse",
       "Identified · flash",
       "Measure · blue pulse",
       "Complete · off"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-define",
     "date": "28 May 2026",
     "title": "AR first: park the backend until the scenes are done",
     "s": "Sprint 1 still had backend wiring, a security review, a TestFlight upload and company account migration on the board, alongside an unfinished AR scene.",
     "t": "Decide what to finish first.",
     "a": "Everything that is not the AR experience (data persistence, dashboards, security review, TestFlight, account migration, asset-delivery migration) was deferred until all three Module 1 scenarios were AR-complete. The reasoning: AR is the product; the rest is plumbing that users never see.",
     "r": "A phase plan for AR completion replaced the original day-by-day sprint plan. The project stayed on a personal developer account in the meantime.",
     "vis": {
      "type": "toggle",
      "items": [
       "Backend plumbing",
       "AR scenes first"
      ]
     },
     "status": "Pivoted"
    },
    {
     "phase": "d1-develop",
     "date": "23 May 2026",
     "title": "Scripts first, then hand the scene to Reality Composer Pro",
     "s": "Two ways to author the first scene were on the table: Python scripts that emit the USDA, or building an MCP tool first and iterating through it.",
     "t": "Get a tappable scene that matches the entity-name contract, fast.",
     "a": "Scripts won. They produced a 99-entity scene with all 17 required names and collision and input components on all 19 tappable entities, authored directly in the file so Swift needed no runtime setup. When Reality Composer Pro refused to open the bare asset folder, the package was wrapped in a local Swift Package. Then the team realised RCP was more expressive than scripts, made RCP the canonical editor, and put a force-guard on the scripts so a rerun could not wipe hand edits.",
     "r": "The MCP ticket was rescoped from 'wrap the scripts' to a read-write tool that edits named entities surgically without disturbing RCP's work. Building the MCP first would have cost two to three days for no visible scene.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Contract",
       "Python emit",
       ".usda",
       "RCP edits"
      ]
     },
     "status": "Pivoted"
    },
    {
     "phase": "d1-develop",
     "date": "24 May 2026",
     "title": "First device test: all visible, no taps, scale stuck",
     "s": "The live Start Scenario path was retrofitted to load the RCP scene instead of procedural primitives. Thomas sideloaded it onto his iPhone.",
     "t": "Make the authored scene behave like the procedural one it replaced.",
     "a": "Three bugs surfaced at once: unsafe, demo and corrected state groups all showed together; taps on hotspots fired nothing; tabletop, room and world scale all looked the same. Recon before code found the causes: state groups needed hiding on load, loaded entities needed collision shapes, and a wrapper transform in the scene was swallowing the placement anchor's scale. A fourth issue followed: world-space UI panels shrank with the scene, fixed with inverse-scale compensation inside the billboard update.",
     "r": "Scales were retuned (tabletop about 40 cm, room about 2 m, world about 5 m) and the PPE indicator was attached to an authored torso anchor instead of a hardcoded offset. Scenario 1 ran end to end on device for the first time.",
     "vis": {
      "type": "range",
      "label": "Scene scale",
      "min": "0.2× tabletop",
      "max": "2.5× world",
      "old": "1.0× / 1.8× / 3.0× (was)"
     },
     "status": "Fixed"
    },
    {
     "phase": "d1-develop",
     "date": "26 May 2026",
     "title": "A read-write MCP that edits the same file as RCP",
     "s": "With RCP as canonical editor, the risk was that any programmatic edit would re-serialise the scene and churn every line.",
     "t": "Ship a tool that scaffolds new scenarios and edits existing entities without disturbing hand edits.",
     "a": "A FastMCP server with 14 tools landed: scaffold, inspect, move, scale, rotate, add component, replace mesh reference, toggle state groups, validate, rename across scenarios. The acceptance test had Thomas drag an entity in RCP and save, then the MCP move a different entity; both edits coexisted with a two-line diff and every other entity byte-identical.",
     "r": "The biggest risk in the design record dissolved: re-serialising through OpenUSD was byte-identical. Scenario 2's scene was scaffolded as the greenfield test.",
     "vis": {
      "type": "hub",
      "centre": ".usda",
      "spokes": [
       "Reality Composer Pro",
       "ar_scene MCP",
       "Swift",
       "Validator"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-develop",
     "date": "26 May 2026",
     "title": "A pancaked cone on a button: three entity categories",
     "s": "The first real mesh swap put a traffic cone onto the 'Create Exclusion Zone' entity. It rendered as a tiny flattened cone on a floating UI panel.",
     "t": "Work out why the swap was wrong and stop it happening again.",
     "a": "The entity was a UI button, not a world prop. A three-category framework was locked: Category 1 UI button icons need flat textures; Category 2 world-placed props live in the scene file and swap via the MCP; Category 3 runtime visualisations are spawned by Swift and never appear in the file. The button icons were then produced as image textures on flat planes from open-licence icon sets rather than modelled pictograms, and later re-picked for a better-fit, licence-clean set of 15.",
     "r": "Every later swap started with a category check. The icon pipeline was also the first time the team proved one asset end to end before batching the rest.",
     "vis": {
      "type": "branch",
      "from": "Scene entity",
      "to": [
       "UI button icon",
       "World-placed prop",
       "Swift-spawned"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-develop",
     "date": "28 May 2026",
     "title": "Five thin board tickets beat one fat one",
     "s": "The floating measure and PPE boards were procedural rounded boxes. Each hardware test revealed a layer of problems the simulator never showed.",
     "t": "Get the boards visually complete on device.",
     "a": "Five small tickets ran in sequence, each verified on device with screenshots and logs: swap boxes for icon meshes; orient icons to face the camera; fix flicker with a clone cache and give each row an invisible full-width tap target; make boards fully opaque because translucency was decorative, not load-bearing; size headers to measured text and switch feedback bar text to white after the opacity change made it invisible.",
     "r": "Each round caught the next layer: orientation, flicker, tap accuracy, opacity, contrast. Two deviations from spec by the implementing agent were caught and confirmed because the diffs stayed small.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Orientation",
       "Flicker",
       "Tap target",
       "Opacity",
       "Contrast"
      ]
     },
     "status": "Shipped"
    },
    {
     "phase": "d1-develop",
     "date": "28 May 2026",
     "title": "Meshy at scale: eight props and three traps",
     "s": "Placeholder primitives were replaced with generated meshes for the first time at volume: excavator, wheel loader, A-frame barrier, loose cable, timber offcut, excavation pit, stakes and walkway stripes.",
     "t": "Run the Meshy to Blender to USDZ pipeline end to end and record what breaks.",
     "a": "Three conventions came out of it. Generated materials arrive with a stray emissive texture that makes assets glow and washes out colour; always disconnect it. Blender's USD exporter does not convert Z-up to Y-up, so meshes land face-down unless the mesh data is rotated before export. And the DCC Bridge only sends a character's active animation, so the spotter came through with a walk instead of its look-around idle; rigged characters must go FBX download, manual import, delete the other actions.",
     "r": "Eight assets shipped into the scene in a day. The conventions were written into memory and the asset-prompt documents so the next batch did not relearn them.",
     "vis": {
      "type": "labels"
     },
     "status": "Built"
    },
    {
     "phase": "d1-develop",
     "date": "29 May 2026",
     "title": "Retire per-item PPE: one animated avatar per outfit",
     "s": "PPE items attached to the worker were clustering around his shins. The offset from visual origin to chest was zero, so everything measured from the feet.",
     "t": "Fix PPE placement, or find a simpler model.",
     "a": "The offset was fixed and verified on device, then the whole approach was retired. Instead of attaching six items to body anchors, the plan became one rigged low-poly worker per outfit: a casual no-PPE worker reused in every scenario, and a full-PPE worker per scenario that doubles as that scenario's hazard-reaction character. Swift swaps models rather than dressing one.",
     "r": "Lighter, visually consistent, and it reused the proven authored-group pattern. The old attachment code became a no-op once the full-PPE mesh landed.",
     "vis": {
      "type": "layers",
      "base": "Casual worker (no PPE)",
      "layers": [
       "Full-PPE · Scenario 1",
       "Full-PPE · Scenario 2",
       "Full-PPE · Scenario 3"
      ]
     },
     "status": "Pivoted"
    },
    {
     "phase": "d1-develop",
     "date": "31 May 2026",
     "title": "Stop chaining clips at runtime; bake one sequence per hazard",
     "s": "Each hazard demo was meant to chain several Mixamo clips in Swift. Only the first clip ever played, and the clip files turned out to be mislabelled: renaming a USDZ wrapper does not rename the animation inside it.",
     "t": "Get a full multi-clip reaction playing reliably for each hazard.",
     "a": "Playback-completed events did not fire for retargeted clips, so a duration timer was tried next. Then the method changed: assemble each hazard's sequence in Blender, bake it to one continuous action with root motion made continuous across seams, and export one self-contained USDZ per hazard. Thomas watched every clip in the Action Editor to assign true names; 13 actions were renamed in a two-pass rename to avoid collisions.",
     "r": "The whole class of runtime sequencing bugs disappeared and the demos became fixed, smooth cinematics. Ordering and looping stayed in Blender, not Swift.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Stumble walk",
       "Angry stomp",
       "Stand talking",
       "Hold"
      ]
     },
     "status": "Pivoted"
    },
    {
     "phase": "d1-develop",
     "date": "1 Jun 2026",
     "title": "The FBX round-trip that unblocked animation",
     "s": "Baked sequences exported from Blender 5.1 contained a rest pose only, and patched files failed to bind at runtime. Five approaches had failed.",
     "t": "Find an export path that gives RealityKit a time-varying skeletal animation it can bind.",
     "a": "The fix was to round-trip the Blender file through FBX inside Blender before exporting USDZ, which strips the slotted-action wrappers the USD exporter mishandles. After that, the exporter wrote proper per-frame samples and the clip bound cleanly with no warnings. All five failures were written into a 'what does not work' table.",
     "r": "Four hazard and state animations played on device the same day. The pipeline became canonical for every future character in KINsafe.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Meshy / Mixamo",
       "Blender SEQ",
       "FBX round-trip",
       "USDZ",
       "RealityKit"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d1-develop",
     "date": "1 Jun 2026",
     "title": "Restructure the flow: PPE first, then hunt hazards",
     "s": "The original loop went hazards, then measures, then PPE, then complete. The casual worker and the full-PPE worker now existed as separate models.",
     "t": "Decide the order a trainee moves through a scenario.",
     "a": "The flow was inverted into a nine-phase state machine: find the site board, read it, find the casual worker, select PPE, watch him suit up, then find hazards, apply measures, site secured. The decisions were taken with Thomas as the build went: incremental build, hazards then measures then secured as the terminal, reuse of the existing modal and transition overlays.",
     "r": "The PPE-first order became part of the clone pattern for every later scenario. The earlier audio vision document was marked stale because it described the old order.",
     "vis": {
      "type": "timeline",
      "marks": [
       "Site board",
       "PPE",
       "Find hazards",
       "Measures",
       "Secured"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-develop",
     "date": "2 Jun 2026",
     "title": "Three days on occlusion: the bug was navigation, not config",
     "s": "People occlusion worked but the wheel loader kept drawing through real walls. Six device rounds of configuration changes did not fix it.",
     "t": "Make LiDAR scene occlusion survive a normal user journey.",
     "a": "The device log told the story: the AR view was being destroyed on every Go Back and rebuilt on re-entry, and each fresh session wiped ARKit's accumulated scene mesh. The fix was one AR view for the app lifetime, with the session started exactly once and scene state reset on each rebind. A single log line proves it: across enter, back, re-enter and place, the session-run message prints once.",
     "r": "Occlusion held across tabletop, room and world scale. The pattern was declared canonical infrastructure that Scenarios 2 and 3 never need to rebuild.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "xmark",
       "dots"
      ],
      "b": [
       "check"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d1-deliver",
     "date": "2 Jun 2026",
     "title": "Scenario 1 shipped on device, and the playbook written",
     "s": "The scene, animations, flow, occlusion and new pit and walkway assets were all working on Thomas's iPhone.",
     "t": "Ship the scene and capture the pattern before starting the next one.",
     "a": "Three commits closed the scene. A six-phase scenario build playbook was written the same week: define in the vault before opening a tool, assets via the canonical pipeline, scene assembly with the category check, Swift wired phase by phase, the persistent AR view, audio last but scripted first, and a device checklist before any commit. It also lists what not to do, from chaining clips to calling session-run on re-entry.",
     "r": "Scenario 1 became the template. The roadmap for Sprints 2 and 3 assumed the playbook was baked.",
     "vis": {
      "type": "burst"
     },
     "status": "Shipped"
    },
    {
     "phase": "d1-deliver",
     "date": "2 Jun 2026",
     "title": "Bulk delete without scope: the worker source files are gone",
     "s": "A tidy-up of the staging directory was meant to remove things no longer used.",
     "t": "Clear the staging folder.",
     "a": "The clear went too far and deleted the source-of-truth Blender files for the worker animations. The production USDZ files in the app bundle were unaffected.",
     "r": "Rebuilding any worker animation now means going back through Meshy and Mixamo from scratch via the pipeline document. The lesson was recorded plainly: scope a 'remove what we no longer use' request before acting on it.",
     "vis": {
      "type": "abstract",
      "seed": 7
     },
     "status": "Recorded"
    },
    {
     "phase": "d1-deliver",
     "date": "4 Jun 2026",
     "title": "Defer TestFlight until the module and dashboard exist",
     "s": "Sprint 1 was meant to end with a TestFlight build to a few testers. The AR-first pivot had already pushed the plumbing out.",
     "t": "Decide when outside eyes see the product.",
     "a": "Thomas chose to defer all TestFlight activity, internal and external, until all three scenarios and a dashboard exist. No early external feedback; build it out, then ship. The one mitigation for the risk of a late first upload: every sprint must end with a clean local Release archive, and if it cannot, the next sprint starts with build fixes.",
     "r": "A five-sprint roadmap replaced the original two-sprint plan: Scenario 2, Scenario 3, dashboard, then TestFlight and App Store.",
     "vis": {
      "type": "timeline",
      "marks": [
       "Scenario 1",
       "Scenario 2",
       "Scenario 3",
       "Dashboard",
       "TestFlight"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-deliver",
     "date": "4 Jun 2026",
     "title": "23 voice lines by Thomas, queued so none overlap",
     "s": "Every phase transition in the nine-phase flow needed a spoken instruction or confirmation, in the professional register already locked for copy.",
     "t": "Record and wire the full narration arc for Scenario 1.",
     "a": "Thomas recorded 23 lines in a NZ safety-officer register on his phone, from 'Find the site information board' to 'All hazards controlled. Site secured. Well done.' A narration service plays them from a queue so lines never talk over each other, respects a mute setting, and waits two seconds after the scene reveal before the welcome line. Generic lines for 'choose a measure' and 'correct' were kept as fallbacks so later scenarios work before their own lines exist.",
     "r": "Every user action now gets a contextual line. A side lesson: cloud-synced folders ghosted the audio files as zero-byte placeholders, which pushed the vault off the synced Desktop.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Find the board",
       "Gear up",
       "Find hazards",
       "Apply measures",
       "Site secured"
      ]
     },
     "status": "Shipped"
    },
    {
     "phase": "d1-deliver",
     "date": "10 Jun 2026",
     "title": "Seven spatial sounds, mono, anchored at the hazard",
     "s": "A spatial audio service existed as a stub with call sites already wired. It needed real sounds.",
     "t": "Specify, source and wire the per-hazard sound effects.",
     "a": "The iOS Engineer role specified seven sounds (cable scuff, stumble, gravel slide, soft thud, a seamless diesel hum loop, a machine nudge, an approval chime) as mono files because RealityKit spatialises mono sources best. The PM role sourced them from attribution-free libraries, trimmed and loudness-matched them, and built a seven-second hum with a crossfaded loop point. Spatial effects were muted under the existing 'Sound effects and cues' toggle rather than a new key.",
     "r": "The stubs were replaced with zero call-site changes except one authorised line for the loader bump. A settings screen exposing the four mute toggles shipped alongside.",
     "vis": {
      "type": "labels"
     },
     "status": "Shipped"
    },
    {
     "phase": "d1-deliver",
     "date": "11 Jun 2026",
     "title": "Sprint 1 closes on a clean Release archive",
     "s": "The only release Xcode on the machine was gone; a newer beta was all that remained. The sprint discipline required an archive.",
     "t": "Prove the app could ship without actually shipping it.",
     "a": "Thomas blessed the beta toolchain for the build-verify, the three queued commits (voice close-out, settings, spatial SFX) and the Release archive. The PM role recorded the risk: an archive on a beta SDK one version ahead is a weaker proof than the release toolchain, so the archive should be re-run on release Xcode before TestFlight. Nothing was pushed to the remote without approval.",
     "r": "The archive succeeded with zero compile warnings. Sprint 1 closed, pending Thomas's device audition of the mute toggles and spatial sounds.",
     "vis": {
      "type": "card",
      "badges": [
       "Archive OK",
       "0 warnings",
       "Local only"
      ]
     },
     "status": "Shipped"
    },
    {
     "phase": "d2-discover",
     "date": "26 May 2026",
     "title": "Scenario 2 begins as the MCP's acceptance test",
     "s": "The new scene-authoring MCP needed a greenfield test, and Module 1 had a second scenario on paper only.",
     "t": "Scaffold Scenario 2 from a description and prove the tool and RCP can share the file.",
     "a": "The MCP scaffolded an Active Work Zone scene of 890 lines with the three planned hazard groups (vehicle movement, pedestrian conflict, poor signage), passing the contract check and opening in Reality Composer Pro as a sibling of Scenario 1. The acceptance test also confirmed a hand edit in RCP and a tool edit could coexist byte for byte.",
     "r": "Scenario 2 existed as a primitive scaffold weeks before its design. The brief for its first serious build later assumed the file did not exist, which the builder caught.",
     "vis": {
      "type": "card",
      "badges": [
       "17/17 names",
       "14/14 tappables",
       "RCP opens"
      ]
     },
     "status": "Origin"
    },
    {
     "phase": "d2-discover",
     "date": "5 Jun 2026",
     "title": "Domain brief: the level-up is telling controls apart",
     "s": "Scenario 1 taught the hierarchy of controls with clear-cut answers. Scenario 2 needed to be harder without contradicting it.",
     "t": "Write the SME brief for vehicle movement, pedestrian conflict and poor signage.",
     "a": "Each hazard was mapped a rung higher or sideways from Scenario 1: routine plant movement calls for a traffic management plan rather than a spotter; workers cutting through active work call for an exclusion zone rather than a barrier; and missing signage is the one case where an administrative control is the correct fix, because the hazard is the absence of information itself. Safety glasses were added to the required PPE. The brief flagged two scoring questions for the PM: partial credit for near-right answers, and how to treat a dust mask that is not wrong on a real site.",
     "r": "The design and script that followed were built on this canon. It was later superseded in full, but its 'read the site, not just the hazard' framing shaped the pedagogy.",
     "vis": {
      "type": "branch",
      "from": "Hierarchy of controls",
      "to": [
       "Traffic plan · route design",
       "Exclusion zone · perimeter",
       "Signage · the gap itself"
      ]
     },
     "status": "Superseded"
    },
    {
     "phase": "d2-discover",
     "date": "10 Jun 2026",
     "title": "Quality check across SME, design and script before building",
     "s": "Three documents by three roles had to agree before anyone opened Blender or RCP. Five days had passed since they landed and the PM chat had been migrated to a fresh session.",
     "t": "Verify the three deliverables are mutually consistent and pipeline-ready.",
     "a": "The check covered entity-name contract compliance, measure mappings across all three documents, identical near-miss pairs in design and script, PPE classification, voice rules, near-miss framing and sequencing. Verdict: pass, with two non-blocking notes: the new scene-root name was a sanctioned extension of the contract, and the iOS Engineer had to confirm which measures each hazard's board exposes before board geometry was finalised.",
     "r": "The AR Scene Builder kickoff was written with a checkpoint after the asset spec so the asset pipeline could start in parallel. Three SME re-review flags were carried forward rather than blocking.",
     "vis": {
      "type": "hub",
      "centre": "PM check",
      "spokes": [
       "SME brief",
       "ID design",
       "CW script",
       "Contract"
      ]
     },
     "status": "Recorded"
    },
    {
     "phase": "d2-define",
     "date": "5 Jun 2026",
     "title": "Sequence hazards for pedagogy: plant, people, then signs",
     "s": "The SME brief was order-neutral. Hazards could be met in whatever order was easiest to author.",
     "t": "Decide the order a trainee meets the three hazards.",
     "a": "Vehicle movement first, as the clearest step up from Scenario 1's spotter answer and the most kinetic. Pedestrian conflict second, a subtler discrimination between two isolation controls. Poor signage last, so the one case where an administrative control is right lands as a refinement of the hierarchy rule rather than a contradiction. The next hotspot is gated until the previous hazard is corrected.",
     "r": "Gating and pedagogical ordering carried into the clone pattern. The specific order was later replaced along with the hazards.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Vehicle movement",
       "Pedestrian conflict",
       "Poor signage"
      ]
     },
     "status": "Superseded"
    },
    {
     "phase": "d2-define",
     "date": "5 Jun 2026",
     "title": "Partial credit lives in the copy, not the score",
     "s": "Three near-right answers (spotter for routine plant, barrier for an active area, exclusion zone for moving plant) deserved recognition. The Scenario 1 scoring pipeline was binary and shipped.",
     "t": "Resolve the SME's partial-credit flag and the dust-mask ambiguity.",
     "a": "Scoring stayed binary right or wrong. The three near-miss pairs were flagged in the data model so the wrong-answer copy could be distinctly warmer: lead with intent recognition, then redirect. Adding a third rubric state mid-sprint was judged scope creep. The dust mask became a soft-correct decoy: encouraging feedback that names the right instinct, bridging to Scenario 3, and no effect on the PPE score, which iterates the required set only.",
     "r": "The 70 percent pass threshold and equal-thirds weighting were held so Sprint 4's dashboard aggregation stays trivial. Both calls were later simplified when the hazards changed.",
     "vis": {
      "type": "toggle",
      "items": [
       "Correct",
       "Near-miss copy",
       "Hard wrong",
       "Soft-correct"
      ]
     },
     "status": "Superseded"
    },
    {
     "phase": "d2-define",
     "date": "10 Jun 2026",
     "title": "Reuse first: three bakes, five props and a gate post",
     "s": "Scenario 1 had left a large mesh library. Generated assets cost credits and Blender time.",
     "t": "Spec the Scenario 2 assets with the smallest possible new footprint.",
     "a": "The casual worker mesh was reused for all three demo characters, with only new baked sequences. New props were held to four AS/NZS 1319 signs (blue circular mandatory, yellow triangular warning, red circular prohibition, blue route sign) and one gate-post threshold marker, authored in Blender from image-generated decals rather than through Meshy. The gate post exists so the absence of a sign is readable: without a place where a sign obviously belongs, the poor-signage hazard cannot be seen. Thomas skipped all three optional props in favour of Scenario 1 fallbacks and set the order: props first, characters second, audio last. Near-miss cue sounds would be his own voice, not a library.",
     "r": "Five reference images, five small USDZs and three queued character bakes replaced what could have been a dozen generations.",
     "vis": {
      "type": "bank"
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "13 Jul 2026",
     "title": "Pivot the narrative: crane, chemical spill, live cable",
     "s": "Scenario 2's hazards were abstract in AR: routes, perimeters and the absence of signs are hard to read at tabletop scale. The scaffold was built and the character phase was queued.",
     "t": "Decide whether to keep going or change the hazards.",
     "a": "Thomas changed them. Scenario 2 became a mobile crane on uneven ground that tips, a leaking chemical drum running into an open stormwater drain, and a cut power cable lying in water. The recorded reasons: each reads instantly in AR, each has a concrete cause and a concrete fix, and together they span three distinct control families: stability engineering, containment and cleanup, source elimination with lockout. The SME brief, design and script were marked historical and queued to be redone.",
     "r": "Downstream roles had to re-run, but the scene scaffold, the five signs and the whole Scenario 1 mesh library survived as reusable infrastructure.",
     "vis": {
      "type": "branch",
      "from": "Scenario 2",
      "to": [
       "Crane instability",
       "Spill into drain",
       "Cable in water"
      ]
     },
     "status": "Pivoted"
    },
    {
     "phase": "d2-define",
     "date": "13 Jul 2026",
     "title": "Clone Scenario 1 wholesale, swap only the content",
     "s": "Scenario 1 was proven end to end on device. Each new scenario risked a fresh architecture debate.",
     "t": "Lock how Scenarios 2, 3 and any future Module 1 scenario get built.",
     "a": "Everything structural is held identical: file structure, scene skeleton, the nine-phase state machine, coordinator routing, feedback paths, scoring pipeline, audio services, UI shell. Only the content layer changes: hazards and their measure mappings, dialogue and on-screen text, icons, voice recordings, props, character animations, required PPE. The iOS Engineer duplicates the Scenario 1 handler rather than building a generic multiplexer before Sprint 4.",
     "r": "Regression risk is bounded to swapped assets, and Scenario 1 must keep working whenever a new scenario lands. Module 2 (Working at Heights) was explicitly excluded and may get a fresh pass.",
     "vis": {
      "type": "layers",
      "base": "Scenario 1 skeleton",
      "layers": [
       "Hazards + measures",
       "Dialogue + VO",
       "Props + animations"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "13 Jul 2026",
     "title": "Equipment can fail fully; the worker still gets a near-miss",
     "s": "The near-miss-only tone was locked for Scenario 1. A crane that never tips teaches little.",
     "t": "Decide how far Scenario 2's consequences can go.",
     "a": "Per hazard: the crane genuinely tips and falls while a nearby worker dives clear; the spill reaches the drain while the worker backs out of the puddle with a 'what is this mess' reaction; and for the cable, the worker is shown taking the shock, a stylised shake and fall with no gore, burns or blood. Scenario 1's tone is unchanged and Scenario 3's is open.",
     "r": "The highest-consequence moment in the module now sits in Scenario 2. A possible App Store age-rating change was flagged for review at archive time, and accepted as not gating the design.",
     "vis": {
      "type": "badges"
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "13 Jul 2026",
     "title": "Three tiles per hazard, binary scoring, composite measures",
     "s": "Scenario 1 used a shared six-tile measure board. The new hazards each had a layered fix (level, pad, reposition, sole boards) that no single tile name captured.",
     "t": "Decide the board and the marking for the new hazards.",
     "a": "Each hazard's board shows three tiles: one correct and two familiar-but-wrong Scenario 1 answers. The correct tiles are composite umbrellas (level the ground, absorb the spill, replace the cable) whose feedback walks through the layered steps. The near-miss scoring category was dropped; marking is binary and wrong-answer copy still teaches. Install Barrier appears on all three boards on purpose, teaching 'isolation is not elimination' three times in three contexts.",
     "r": "Lower cognitive load than six tiles, and the decoys feel like real choices. The small deviation from the clone pattern is a per-hazard visibility flag, not a new component.",
     "vis": {
      "type": "toggle",
      "items": [
       "Level ground",
       "Install barrier",
       "Use spotter"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "13 Jul 2026",
     "title": "Name it 'Critical Site Hazard', add chemical gloves",
     "s": "The old title 'Active Work Zone' no longer described the scenario. The spill hazard needed PPE the module did not have.",
     "t": "Close the remaining sign-offs so the downstream roles can be briefed.",
     "a": "Thomas chose the singular title 'Critical Site Hazard' and the matching scene-root rename. A chemical gloves PPE tile was added, and a new PPE-complete worker mesh with gloves baked in was judged cheaper than layering gloves onto the existing rig. Electrical gloves were kept as a visual callout on the qualified worker rather than a board tile, because apprentices do not do live electrical work. Prop scope stayed on hold until Thomas could inspect a generated wide view of the site.",
     "r": "Hazard-level design was fully locked. Roughly 18 new props, triple the earlier count, were flagged for his tolerance.",
     "vis": {
      "type": "card",
      "badges": [
       "Critical Site Hazard",
       "chemicalGloves",
       "3-tile boards"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-develop",
     "date": "10 Jun 2026",
     "title": "Signs built straight in Blender from generated decals",
     "s": "The four signs and gate post needed reference images, then meshes. Meshy credits were at zero.",
     "t": "Produce the five props without spending on generation.",
     "a": "An image-generation chat produced five flat sign-face and gate-post references, all passing the quality gate on the first pass. Thomas then had the same chat run the Blender stage in-session, a lane deviation the PM accepted: four signs as disc or triangle plus post with the decal mapped on, gate posts from primitives, at 23 to 146 polygons each. A naming rule was locked: file name, asset folder and USDZ stem are always the same, never generic.",
     "r": "Five approved USDZs landed in the signage folder the same evening. All five survived the later pivot as corrected-state infrastructure.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Generated decal",
       "Blender plane + post",
       "USDZ",
       "Signage/"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d2-develop",
     "date": "10 Jun 2026",
     "title": "Scaffold wired on a branch; keep the as-built root name",
     "s": "The design document named the scene root one way; the scaffold and the Swift binding used another. Two lanes (iOS tail-close and scene builder) shared one working tree.",
     "t": "Wire the five props into the three hazard state groups without stepping on the other lane.",
     "a": "The builder landed the scene on a local branch with the five new props and two Scenario 1 fallbacks (the excavation pit as a trench, A-frame barriers as a perimeter), 16 of 16 tappables, a clean validation and a contract addendum. The PM kept the as-built root name because the Swift binding already used it and noted the divergence in the design docs. One sign mapping was accepted with a polish note, and the branch was held unmerged until the iOS lane's archive passed and Thomas approved.",
     "r": "Scenario 2 had a wired scaffold with signage within a day of its asset spec. The branch later carried the Sprint 1 tail commits too.",
     "vis": {
      "type": "card",
      "badges": [
       "16/16 tappables",
       "Branch only",
       "Contract addendum"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d2-develop",
     "date": "13 Jul 2026",
     "title": "What survives the pivot, and what has to be rebuilt",
     "s": "The narrative pivot landed mid-sprint with the scene scaffold complete and three character bakes queued but not started.",
     "t": "Separate reusable work from work that must be redone.",
     "a": "Kept: the clone pattern, the scene scaffold structure (state-group contents replaced), all five signs reused at entries and perimeters, and the Scenario 1 mesh library. Replaced: the three planned near-miss bakes become crane, spill and cable sequences on the same casual mesh, plus one new gloved PPE-complete mesh. New: around 17 props across a crane, drum, drain, spill, cable and distribution-board set, three new measure icons, five voice lines for Thomas to record. The old Scenario 2 voice files were retired.",
     "r": "The asset list roughly tripled, which was surfaced to Thomas rather than absorbed quietly. The character brief's rule still stands: FBX round-trip before any USDZ export, and stop to ask if a Mixamo clip is missing.",
     "vis": {
      "type": "layers",
      "base": "Scene scaffold (kept)",
      "layers": [
       "5 signs reused",
       "4 character sequences",
       "~17 new props"
      ]
     },
     "status": "Open"
    },
    {
     "phase": "d2-deliver",
     "date": "13 Jul 2026",
     "title": "Next: see the site before locking what gets modelled",
     "s": "Hazard-level design was locked but the prop list was large and not yet visualised.",
     "t": "Set the order of the remaining Scenario 2 work.",
     "a": "The PM role was asked for an image-generation prompt for a wide view of the new site so Thomas can inspect the layout before approving prop scope, the same gate used for Scenario 1 assets. After that: new SME brief, instructional design, script, asset spec and scene rebuild, Swift manifest and tap-routing updates, and Thomas's five voice recordings. The site-brief board copy also needs rewriting for the new scenario.",
     "r": "Scenario 2 moves forward through the same six-phase playbook, with Scenario 1 regression mandatory when it lands.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Site visual",
       "Prop scope",
       "SME · ID · CW",
       "Scene + Swift",
       "Device verify"
      ]
     },
     "status": "Open"
    },
    {
     "phase": "d2-deliver",
     "date": "Jul 2026",
     "title": "The road to TestFlight: Scenario 3, dashboard, then testers",
     "s": "TestFlight was deferred until the full module and a dashboard exist.",
     "t": "Lay out what follows Scenario 2.",
     "a": "The roadmap runs Scenario 3 (Complex Work Area: unsecured materials, edge risk, dust exposure) through the same playbook, then a dashboard MVP reading scenario completions and pass status from stored training events, then an internal TestFlight with Thomas, Ray Hikaka and a few close testers, an external round with testers from the NZ construction industry, and an App Store submission. Billing, the company tier and Module 2 stay out of scope until after launch.",
     "r": "Each sprint must still end with a clean Release archive, re-run on release Xcode before the first upload.",
     "vis": {
      "type": "timeline",
      "marks": [
       "Scenario 3",
       "Dashboard",
       "Internal TestFlight",
       "External testers",
       "App Store"
      ]
     },
     "status": "Planned"
    },
    {
     "phase": "d2-deliver",
     "date": "31 Aug 2026",
     "title": "KINsafe becomes a product of Tiaki Mai Rā Limited",
     "s": "Older vault documents name the business after the app itself.",
     "t": "Record the company change so downstream work reads entity names correctly.",
     "a": "The vault's routing note was updated: the business is Tiaki Mai Rā Limited, and KINsafe is one product alongside the Tiaki assistant and other portfolio projects. Company documents written before the rename are to be read with that in mind.",
     "r": "KINsafe's identity shifted from company to product line without changing the build.",
     "vis": {
      "type": "hub",
      "centre": "Tiaki Mai Rā",
      "spokes": [
       "KINsafe",
       "Tiaki assistant",
       "Portfolio projects"
      ]
     },
     "status": "Recorded"
    }
   ]
  },
  tiaki: {
   "name": "Tiaki",
   "accent": "#a5762a",
   "kind": "Product · AI assistant, mobile-first",
   "intro": "Tiaki (to care for) is an AI assistant that carries your context so you do not have to. This journey follows two cycles: a six-day challenge build in August 2026 that shipped the learn, plan, adjust, log, resume loop as an installable web app, and the September product phase that hardened it against the model's own mistakes and pointed it at students.",
   "people": [
    {
     "name": "Thomas Perese",
     "role": "Design, build, field testing"
    }
   ],
   "phases": [
    {
     "id": "d1-discover",
     "name": "Discover · Challenge",
     "colour": "#a5762a",
     "shape": "circle",
     "bg": "flow",
     "dir": "dr",
     "zoom": 1
    },
    {
     "id": "d1-define",
     "name": "Define · Challenge",
     "colour": "#2a3d8f",
     "shape": "square",
     "bg": "squares",
     "dir": "r",
     "zoom": 0.95
    },
    {
     "id": "d1-develop",
     "name": "Develop · Challenge",
     "colour": "#1f7a5c",
     "shape": "triangle",
     "bg": "circuit",
     "dir": "d",
     "zoom": 1.05
    },
    {
     "id": "d1-deliver",
     "name": "Deliver · Challenge",
     "colour": "#6b3fa0",
     "shape": "hexagon",
     "bg": "foam",
     "dir": "l",
     "zoom": 1
    },
    {
     "id": "d2-discover",
     "name": "Discover · Product",
     "colour": "#d9521b",
     "shape": "circle",
     "bg": "branches",
     "dir": "dr",
     "zoom": 1
    },
    {
     "id": "d2-define",
     "name": "Define · Product",
     "colour": "#0e6f8a",
     "shape": "diamond",
     "bg": "contours",
     "dir": "r",
     "zoom": 0.9
    },
    {
     "id": "d2-develop",
     "name": "Develop · Product",
     "colour": "#b8461a",
     "shape": "triangle",
     "bg": "lattice",
     "dir": "ur",
     "zoom": 1.05
    },
    {
     "id": "d2-deliver",
     "name": "Deliver · Product",
     "colour": "#16130f",
     "shape": "hexagon",
     "bg": "dots",
     "dir": "r",
     "zoom": 1
    }
   ],
   "stations": [
    {
     "phase": "d1-discover",
     "date": "26 Aug 2026",
     "title": "Name the enemy: the restart tax",
     "s": "Thomas was running several ventures at once: KINsafe, Guardians of Matariki, the World Art Generator, the Tiaki Mai Rā website. Every switch between them cost time reconstructing where he had left off.",
     "t": "Frame one problem precisely enough that a product could be built to kill it.",
     "a": "The lost time was named the restart tax. The bet was an assistant that keeps your context: it learns your world once through conversation, plans each day against what it knows, absorbs curveballs, records progress and recounts exactly where every project stopped, from stored state rather than chat history. The name Tiaki (to care for, to look after) tied it to the Tiaki Mai Rā brand values of manaakitanga and kaitiakitanga.",
     "r": "This became the north star that every later scope call was argued against.",
     "vis": {
      "type": "hub",
      "centre": "Stored state",
      "spokes": [
       "KINsafe",
       "Guardians of Matariki",
       "World Art Generator",
       "Website"
      ]
     },
     "status": "Origin"
    },
    {
     "phase": "d1-discover",
     "date": "26 Aug 2026",
     "title": "Dogfood on real projects, under a hard deadline",
     "s": "A product-design challenge submission gave the first build a deadline measured in days, not weeks. Test data could have been invented.",
     "t": "Decide what the first version would be tested against, and how it would be built.",
     "a": "Thomas loaded his real portfolio as the test bed so that failures would carry real stakes, and chose to build with AI end to end: Claude for architecture, code and deploys, Gemini as the in-app brain. Every build, test, learn loop was to be written up in a design log for the design story.",
     "r": "Five sprints ran in two days. The design log, not the code, became the record this journey is drawn from.",
     "vis": {
      "type": "timeline",
      "marks": [
       "Iteration 0",
       "First tester",
       "Self-test",
       "Open sign-up",
       "Quota fence"
      ]
     },
     "status": "Recorded"
    },
    {
     "phase": "d1-define",
     "date": "26 Aug 2026",
     "title": "Scope to one loop, not a feature list",
     "s": "An assistant for a whole life invites an endless feature list: tasks, calendars, notes, reminders, goals.",
     "t": "Pick the smallest thing that is the product rather than a piece of it.",
     "a": "Scope was set to one loop: learn, plan, adjust, log, resume. Onboarding learns your world, daily planning builds the day, conversation adjusts it, an end-of-day reflection logs it, and \"pick up where I left off\" recounts finished, blocked and next from stored state. Anything that did not serve the loop was left out.",
     "r": "The loop stayed the product through both phases; later features such as steps, calendar and imports were judged by whether they fed it.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Learn",
       "Plan",
       "Adjust",
       "Log",
       "Resume"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "26 Aug 2026",
     "title": "Put the model behind a wall, and the app on the home screen",
     "s": "A chat model that writes straight into a database will eventually write nonsense, and a key in the browser is a key for everyone.",
     "t": "Choose a stack that keeps the model honest and makes the product installable on a phone without an app store.",
     "a": "React, TypeScript and Vite as an installable PWA on Netlify; Supabase Postgres with row-level security on every table; Gemini called only from an edge function with the key kept server-side; every AI reply returned as structured JSON against a response schema and validated before any write. Voice input runs through the Web Speech API behind a swappable hook.",
     "r": "The structure held through phase two without a rewrite. A later scale assessment found the architecture right and only the free tiers wrong.",
     "vis": {
      "type": "layers",
      "base": "Postgres + row-level security",
      "layers": [
       "Edge function + Gemini (key server-side)",
       "Installable PWA"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-develop",
     "date": "26 Aug 2026",
     "title": "The AI described plans but never saved them",
     "s": "Backend testing before any human tester showed Gemini presenting tidy schedules in prose while the database stayed empty, and project updates going unrecorded so continuity broke. The free model tier also truncated long replies mid-JSON.",
     "t": "Make saving something the model cannot forget to do.",
     "a": "Each conversation mode got required fields in the response schema, so a planning reply without a plan is rejected. A server-side continuity guarantee means a work session always writes a resumable record whatever the model says. The model was switched to a lighter variant and a retry and parse-recovery ladder was added for truncated output.",
     "r": "The first hard rule of the product was written: never trust the model to remember to save; make skipping it structurally impossible.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "steps-text",
       "xmark"
      ],
      "b": [
       "list",
       "check"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d1-develop",
     "date": "26 Aug 2026",
     "title": "A badge over the send button, and an empty summary",
     "s": "The URL was sent cold to a first remote tester on mobile Safari. Three findings came back in five minutes, none of which self-testing had surfaced.",
     "t": "Fix what blocked the core action and what broke the product's promise.",
     "a": "The hosting platform's badge was covering the send button and two nav tabs on iPhone; it was disabled at the platform level. Onboarding had wrapped after three shallow answers with an empty \"here's what I picked up\" screen. The AI must now extract facts every turn, cannot end the interview before covering work, a project or goal and a routine with at least five memories saved, and the summary shows projects and goals with an honest empty state whose primary action is \"Keep chatting\".",
     "r": "The second rule: the first ninety seconds carry the whole product; onboarding must visibly bank what the user says, or trust never forms.",
     "vis": {
      "type": "phone",
      "card": "What Tiaki knows",
      "note": "empty state → Keep chatting"
     },
     "status": "Fixed"
    },
    {
     "phase": "d1-develop",
     "date": "27 Aug 2026",
     "title": "Every input keeps the 'just talk to me' promise",
     "s": "Thomas ran the full scripted loop on desktop with real KINsafe data after the first fixes. The loop held. One thing jarred: the \"Add something Tiaki should know\" box accepted typing only, unlike every chat box.",
     "t": "Decide whether a consistency gap is worth fixing ahead of new features.",
     "a": "The same speech-to-text hook was wired into the memory-add box, with a mic beside the field, live transcription and stop-on-save.",
     "r": "Rule three: input modality is a promise. If the product says \"just talk to me\", every field has to keep that promise.",
     "vis": {
      "type": "toggle",
      "items": [
       "Chat",
       "Memory add",
       "Plan"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d1-develop",
     "date": "27 Aug 2026",
     "title": "Open the front door: a privacy policy unlocks sign-in",
     "s": "Testing with a second Google account hit two blockers the same evening: email sign-up tripped the built-in sender's rate limit, and Google sign-in was restricted to a hand-listed set of test users behind a vague \"configuration incomplete\" banner.",
     "t": "Get any tester through the door without hand-holding.",
     "a": "The banner turned out to mean a privacy policy URL was required before the OAuth app could be published. A real privacy policy page was written in the app's own style, added to the OAuth branding, and the app was published so any Google account could sign in. The email limit was documented, with custom SMTP logged as future work.",
     "r": "Rule five: distribution is part of the product. If a tester cannot get through the front door, nothing behind it exists.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "list",
       "xmark"
      ],
      "b": [
       "check",
       "btn-l"
      ]
     },
     "status": "Shipped"
    },
    {
     "phase": "d1-develop",
     "date": "27 Aug 2026",
     "title": "Fence the shared quota per user, and fail open",
     "s": "With sign-ups open to anyone, every user drew on one shared free-tier AI pool. One runaway tab or bad actor could starve everyone, including a live demo.",
     "t": "Protect the shared resource without punishing ordinary use.",
     "a": "A per-user rate limit is enforced server-side through a Postgres counter the client cannot touch; the edge function checks it before every AI call and returns a friendly in-chat message when it is exceeded. If the counter itself errors, the check fails open: availability over strictness for a prototype.",
     "r": "Rule four: shared resources need per-user fences. Politeness is a UX feature; enforcement is a server feature.",
     "vis": {
      "type": "range",
      "label": "AI requests per user",
      "min": "per minute",
      "max": "per day",
      "old": "one shared pool (was)"
     },
     "status": "Built"
    },
    {
     "phase": "d1-deliver",
     "date": "31 Aug 2026",
     "title": "Ship the loop, submit the story, write down the rules",
     "s": "Six days after the first commit the loop worked end to end: conversational onboarding with an editable \"What Tiaki knows\", daily planning with conversational adjustment, per-project work logs with \"pick up where I left off\", an end-of-day reflection feeding a progress dashboard, and voice on every input.",
     "t": "Deliver the challenge and hand a clean baseline to whatever came next.",
     "a": "The PWA went live with JSON export and confirmed full deletion as data controls. A short video and deck were submitted. The five design principles that had emerged from the iterations were written into the north star as hard rules carried forward.",
     "r": "Phase one closed with a live product, a public privacy policy and a set of rules that phase two kept testing itself against.",
     "vis": {
      "type": "burst"
     },
     "status": "Shipped"
    },
    {
     "phase": "d1-deliver",
     "date": "31 Aug 2026",
     "title": "Park mobile; deepen the web app",
     "s": "The phase-two bet in the north star was an assistant that is ambient and in your pocket. Three paths were laid out: polish the PWA, wrap it in Capacitor for the app stores, or build a native SwiftUI companion with widgets and Siri.",
     "t": "Decide where the next month of effort goes.",
     "a": "The written recommendation was PWA polish now and the SwiftUI companion later, skipping the wrapper. Thomas made a different call: he was happy with Tiaki as a web app and wanted to deepen how it worked. Mobile was parked with the options recorded for when it becomes the priority.",
     "r": "Sprint 01 was framed as product deepening on the web, driven by real use. Web push later delivered much of the \"taps you on the shoulder\" value without a native shell.",
     "vis": {
      "type": "branch",
      "from": "Mobile",
      "to": [
       "PWA polish",
       "Capacitor wrapper",
       "SwiftUI companion"
      ]
     },
     "status": "Parked"
    },
    {
     "phase": "d2-discover",
     "date": "Aug 2026",
     "title": "Nobody in Aotearoa is doing this, and raw AI is free",
     "s": "Phase two needed to know where Tiaki sat. The field split into professional auto-schedulers priced for workers, study-only planners, generic chatbots, institutional AI access deals and staff-facing student-success dashboards.",
     "t": "Find the gap, and the threats, before pitching to anyone.",
     "a": "The analysis found no New Zealand product combining a personal daily assistant, whole-of-life scope, conversational memory and an institutional channel. Two overseas lessons shaped design: a large US university system bought AI access for every student and saw tiny voluntary uptake, so access without adoption fails; and free AI chat for students is becoming the norm, so model access is not a moat.",
     "r": "Design priorities were set: compete on memory, the loop and reporting, never on raw AI; conversational onboarding as the adoption weapon; role presets for students and staff; te reo touches as substance rather than garnish.",
     "vis": {
      "type": "spread"
     },
     "status": "Recorded"
    },
    {
     "phase": "d2-discover",
     "date": "31 Aug 2026",
     "title": "The architecture scales; the free tiers do not",
     "s": "An education conversation raised the question of serving tens of thousands of users.",
     "t": "Find out honestly whether the live architecture could, and what would have to change.",
     "a": "The assessment found the stateless edge function, Postgres with row-level security and static front end would scale with configuration and money, not a rewrite. The two blockers were billing switches on the AI and database tiers. A hardening list followed: a prompt and token diet, per-user cost telemetry, tiered model routing, pruning old conversation rows (safe because continuity lives in stored state, not chat history), observability, a load test before any pilot, and a tenant layer for institutions.",
     "r": "The list became the \"Now\" section of the roadmap. Model routing and token telemetry arrived in September as the router redesign.",
     "vis": {
      "type": "badges"
     },
     "status": "Recorded"
    },
    {
     "phase": "d2-discover",
     "date": "1 Sep 2026",
     "title": "From inner-circle testers to matched pairs",
     "s": "Evidence that Tiaki changes anything had to come from somewhere other than the founder's own use.",
     "t": "Design a tester programme and a pilot study that one person can run.",
     "a": "The tester programme runs in three waves over two months, from an inner circle with personal onboarding to a cold-start wave to a wider funnel, with simple event counts, an in-app feedback button and a read-feedback-Monday, ship-fixes-Friday ritual. One question matters most: does anyone return unprompted? Thomas then designed a pilot: about ten students across ten subjects use Tiaki free for half a semester, each matched with a comparison classmate, with assignment outcomes compared pair by pair at six weeks. For a wānanga or tertiary pilot conversation the plan was to open with internal champions who use it, not the chief executive, and to have straight answers ready on data sovereignty and academic integrity: Tiaki plans and tracks, it never writes coursework.",
     "r": "Both were written up as signal studies, not proof, and the pilot is free for every participant by design.",
     "vis": {
      "type": "timeline",
      "marks": [
       "Wave 1 · inner circle",
       "Wave 2 · cold start",
       "Wave 3 · wider",
       "Matched-pair pilot"
      ]
     },
     "status": "Planned"
    },
    {
     "phase": "d2-discover",
     "date": "3 Sep 2026",
     "title": "Never pay for sign-up; saturate one room",
     "s": "Thinking turned to how students would ever find Tiaki. The obvious moves were an orientation-week stall and a sign-up voucher.",
     "t": "Run a Discover pass with only the facts and the gut, holding judgement for later.",
     "a": "The facts cut against both moves: a large meta-analysis shows that expected rewards for starting something reduce later engagement; every documented campus success saturated one small, socially dense unit before spreading; three NZ universities already give students free AI chat, so \"access to AI\" is not a proposition; and the semester calendar meant orientation week was six months away while the assignment crunch was now. The gut read: a stall feels like a bank, the week-seven panic is the real front door, and a mate's one sentence beats any stall. Twenty-seven raw options were flushed for later and seven questions were handed to Decide.",
     "r": "Nothing was decided in this pass, by design. The next session settled two of the seven questions.",
     "vis": {
      "type": "branch",
      "from": "Discover",
      "to": [
       "White · facts",
       "Red · gut",
       "Green · options",
       "Blue · questions"
      ]
     },
     "status": "Recorded"
    },
    {
     "phase": "d2-discover",
     "date": "3 Sep 2026",
     "title": "Students first, and it is not an education app",
     "s": "The lead plan had been an institutional licence to a wānanga. The research pointed the other way.",
     "t": "Decide the order of attack and the positioning that goes with it.",
     "a": "The order flipped: go direct to everyday students at the largest NZ universities, earn usage and testimonials, and let institutions come later. Thomas corrected the positioning to carry everywhere: Tiaki is a productivity assistant for a whole life that happens to bite hardest in a semester, so it is benchmarked against productivity retention, never education apps, and the line is never \"come use AI\" but \"here is an assistant to help you do your work\". The first room to saturate was chosen: the Faculty of Design and Creative Technologies at AUT. Whether to start with an undergraduate tutorial, a postgraduate office or both was left open, since the need is best evidenced in postgraduates and reach is easiest in undergraduates.",
     "r": "The institutional pilot became a later-stage hypothesis. Sprint 02's test personas were drawn from that faculty.",
     "vis": {
      "type": "labels"
     },
     "status": "Pivoted"
    },
    {
     "phase": "d2-define",
     "date": "31 Aug 2026",
     "title": "Order the roadmap by value over effort",
     "s": "The parked mobile plan, the scale list and Thomas's own wish list all competed for the same weeks.",
     "t": "Decide what to build next and in what order, with external lead times in view.",
     "a": "Four requests were assessed in one note. Lock-screen reminders: yes, as web push, with the honest iOS limit that the app must be added to the home screen, which onboarding would teach. Over-budget AI requests: a first-in-first-out ticket queue rather than an error. Google Calendar from chat: yes, staged, read before write, with incremental consent so sign-in scopes stay minimal, and email as draft-and-open links before any send permission. A payments path was designed with the free tier staying the default. Build order followed value over effort and external approvals: push and queue first, payments plumbing next, calendar verification started early because it is the longest wait.",
     "r": "Push and the queue shipped the same day. The roadmap's education layer (tenant model, student and staff presets, te reo touches with cultural review) was written down as required for any pilot.",
     "vis": {
      "type": "timeline",
      "marks": [
       "Push + reminders",
       "Ticket queue",
       "Payments path",
       "Calendar scope"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "1 Sep 2026",
     "title": "The pilot is free, and payments stay switched off",
     "s": "Payments plumbing was built end to end while the education pricing direction was still being argued, and a requirement arrived mid-build: after a month of free use, ask people to subscribe.",
     "t": "Decide how asking for money sits alongside a pilot that must cost participants nothing.",
     "a": "The education direction settled on positioning as a funded student-success service tied to retention evidence, piloting low and renewing on evidence, with no number fixed. In the app, the ask became a warm, dismissible card that appears after thirty days, snoozes for a month and follows the user across devices, never a paywall. Then it was clarified: payment setup is deferred until after the pilot. A single switch keeps every supporter prompt hidden and Settings reads \"during the pilot, everything is free\".",
     "r": "Free stays the default forever; flipping one switch is the whole go-live when the time comes.",
     "vis": {
      "type": "toggle",
      "items": [
       "Free forever",
       "Supporter (later)"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "11 Sep 2026",
     "title": "Import the semester: timetable, brief, class link",
     "s": "A student's week already exists in a timetable file and an assignment brief. Asking them to retype it is the empty-state problem all over again.",
     "t": "Design how a student brings their semester into Tiaki in the first session.",
     "a": "A design canvas was revised against three notes from Thomas: no morning prompt asking for files, instead a \"+\" attach menu on the input; a link between a project and a class means the whole class series across the calendar; and the calendar window runs a full year ahead. Built on the test app only: a timetable (.ics) import that parses server-side into a tick-and-confirm list and lands recurring series as single recurring events so times match the file exactly; a PDF or Markdown brief that becomes a reviewed project proposal created only on confirm; and project-to-class linking that Tiaki suggests by course code and the user confirms.",
     "r": "These features became Sprint 02's P0 rows. Testing later added duplicate detection on re-import and an \"enrich this project\" choice when a brief matched an existing project.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Attach .ics",
       "Tick series",
       "Confirm",
       "On calendar"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d2-define",
     "date": "Sprint 02",
     "title": "Test through three lives, log everything, fix after",
     "s": "Field testing so far had been Thomas's own day. The student features had never met a student's week.",
     "t": "Design a test programme that produces before-and-after evidence, not just a bug list.",
     "a": "Three personas were written from the chosen faculty: a second-year design student with a café shift and netball, a senior lecturer with school pickups and a marking crunch, and a Master's student in a thesis year with an internship. Each is one mini-sprint from a fresh user. Severity 1 was defined as data wrong or lost, or a dishonest claim uncaught. Measures: first-try pass rate, import accuracy, how often the server had to publicly correct the model (footers firing means the safety net works; the trend down means the model is improving), wrong writes, and turns to done. Thomas set the rule: backlog everything during testing and fix after, unless it blocks the run; then re-run the whole script from scratch and compare.",
     "r": "The exit bar was set at ninety percent of checks passing first try before moving to the next persona.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Fresh user",
       "Run script",
       "Log",
       "Fix round",
       "Re-run",
       "Compare"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "24 Sep 2026",
     "title": "Free keeps the daily loop; Full keeps the whole life",
     "s": "\"Free\" had only ever meant lower AI limits. With trials, earned months and a future subscription, the product needed a clear line.",
     "t": "Define what the app is for someone who never pays, without ever taking their data away.",
     "a": "Three states: Trial for the first ninety days, Limited after that, Subscribed. Limited keeps planning, adjusting, remembering and logging, morning digests and reminders; Full adds Google Calendar in chat, imports and class links, AI step breakdowns, wrap-up suggestions, all charts and full history. Nothing is deleted when access drops; extra projects go read-only; export is always free. Limits live in admin-tunable settings, and complimentary Full access from the admin page is how a pilot cohort or a tester is thanked. The same limits are enforced in the database, the server and the UI.",
     "r": "Built on the test stack, then promoted to production the same day with every existing account resolving to Trial.",
     "vis": {
      "type": "layers",
      "base": "Limited · the daily loop",
      "layers": [
       "Calendar in chat",
       "Imports + class links",
       "All charts + history"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d2-develop",
     "date": "31 Aug 2026",
     "title": "Tap the shoulder, and queue instead of saying no",
     "s": "A daily assistant that only speaks when opened is not an assistant. And with one shared AI quota, the sixteenth request in a busy minute was failing with an error.",
     "t": "Reach out to the user, and degrade gracefully under scarcity.",
     "a": "Web push: a morning checklist on the lock screen and reminders a chosen number of minutes before plan items, collected each minute by the database and delivered by an edge function, with buttons that deep-link into the plan or the chat. Onboarding teaches iOS users to add the app to their home screen. Admission control: over-budget requests take a first-in-first-out ticket and the app quietly retries, telling the user \"you're third in line, this sends itself\". Stale tickets expire and a ticket cannot be forged to bypass the per-user limit.",
     "r": "Two principles: meet the user where their attention already is, and degrade by queueing, not refusing. A later fix made the morning push nudge \"no plan yet\" on an unplanned day instead of staying silent.",
     "vis": {
      "type": "phone",
      "card": "Morning checklist",
      "note": "You're 3rd in line"
     },
     "status": "Shipped"
    },
    {
     "phase": "d2-develop",
     "date": "31 Aug 2026",
     "title": "Projects become step decks; progress rolls up by itself",
     "s": "A project was one line of state and a log. Thomas wanted to see the work inside it and watch progress take shape.",
     "t": "Give projects a structure the AI can maintain and the user can read at a glance.",
     "a": "Per Thomas's design, projects break into ordered step cards with their own progress slider, a plain-language High, Medium or Low priority badge, a blocked-by dependency and notes; a database trigger rolls step progress up into the project percentage. The AI creates and maintains step lists from chat. The Progress tab gained selectable pie, bars, line and heatmap charts in hand-rolled SVG with a validated colourblind-safe palette, tooltips and a table fallback, then a swipeable carousel from all projects to each project's step donut. Phone screenshots drove a tidy: single-line pills, one step per slide, chat input contained.",
     "r": "A later fix made history entries mirror the real created steps after the AI enumerated thirteen invented ones.",
     "vis": {
      "type": "card",
      "badges": [
       "High",
       "Blocked by",
       "50%"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d2-develop",
     "date": "1 Sep 2026",
     "title": "A thinking-bias matrix over the double diamond",
     "s": "Thomas wanted Tiaki to think the way he works: on the Double Diamond, with the Six Thinking Hats underneath.",
     "t": "Turn a methodology into something a user can set with a thumb and the AI can obey.",
     "a": "\"Tiaki Knows\" gained a draggable orb over a Discover, Decide, Develop, Deliver field; where it sits weights the AI's behaviour, with the Hats as hidden logic and a methodology sheet explaining each phase. Modes started as Default, Ask and Suggest; Ask was retired for Custom, which any hand drag selects, while Suggest reads the active projects and glides the orb to Tiaki's pick. The card became tap-to-expand after precise placement proved fiddly on a small preview. A second layer followed: each project can carry its own phase override. Tiaki probes once, suggests a phase in one line, flags a transition when the work clearly moves on, and never changes it silently or re-raises a declined suggestion.",
     "r": "Every methodology, built in or added, became editable after a remote tester found that added ones had no description.",
     "vis": {
      "type": "hub",
      "centre": "Tiaki orb",
      "spokes": [
       "Discover",
       "Decide",
       "Develop",
       "Deliver"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d2-develop",
     "date": "2 Sep 2026",
     "title": "The model interprets; plain server code enforces the truth",
     "s": "Booking from chat worked. Deleting did not: \"delete the Thursday one\" kept removing Friday's session while the reply claimed Thursday, through four rounds of stricter prompt rules.",
     "t": "Stop a destructive action from ever depending on the model being right.",
     "a": "A screenshot gave the root cause: the model wrote \"Thursday September 4th\", and 4 September was a Friday. It cannot be trusted with date-to-weekday arithmetic. So the server computes the weekday for every event, re-fetches the live calendar before any delete and blocks anything whose id or date no longer matches. A claim audit followed: when a reply says \"I've logged it\" or \"removed it\" and the server counted zero matching writes, a public correction is appended to that same reply. Compound requests are checked clause by clause. Anything from outside the user's own message, such as an event title or a document, is treated as data, never instruction. Finally, after a remote tester's \"delete everything for Friday\" removed one event while chat claimed all were gone, chat lost the right to delete at all: it shows a checkbox picker and a can't-be-undone confirm, and only the confirmed selection goes.",
     "r": "The doctrine for the rest of the build: the model suggests, the server guarantees. Correction footers became a metric to drive down, not a feature.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "steps-text",
       "xmark"
      ],
      "b": [
       "check",
       "list"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d2-develop",
     "date": "3 Sep 2026",
     "title": "The plan must respect calendar, routine and clock",
     "s": "Thomas's morning test caught the plan built as though the calendar were empty, a rebuild wiping three ticked items, and a Monday, Wednesday, Friday routine ignored even though it sat in the AI's context among sixty memories.",
     "t": "Make the day plan trustworthy without trusting the model to read sixty lines.",
     "a": "After any plan write the server merges every timed calendar event the model omitted, carries check-off state across rebuilds, pre-filters today's routines by weekday in code so the model only sees what applies, floors movable items at the current time, pushes clashing items to the end of the previous block and re-sorts by start time. The routines rule carried an honest limit: free-text routines can only get maximum salience plus a hard rule, not a mechanical guarantee. The same rule caused the week's most instructive bug: a remote tester was told \"today's a job-applications afternoon\", which was the author's own example sentence from the shared prompt. No data crossed between users; the example itself had leaked.",
     "r": "\"Examples are not data\" became a standing prompt rule, and personal-flavoured examples were banned from shared prompt text.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Model plan",
       "Merge calendar",
       "Keep ticks",
       "Deconflict",
       "Sort"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d2-develop",
     "date": "14 Sep 2026",
     "title": "Glass pill in, floating tab bar out",
     "s": "Sprint 02's first persona run filled a backlog of twenty-three findings, several about the chat input: the type area was tiny between two round buttons, long dictations were hard to review, and study deadlines filed under Work.",
     "t": "Fix the daily surface in one round, taking Thomas's reference image as the shape to aim for.",
     "a": "The input became one rounded glass pill with attach on the left and the mic on the right, growing on focus so a long dictation can be read back. The same pill replaced the Projects tab's card-and-button pair. A Study category joined the memory taxonomy. Additive tick-lists moved to accent green, with red reserved for deletion. The bottom nav became a floating glass pill too, and Thomas reverted it the next day: it did not work, so glass stays on the input only and the classic bar returned. Later rounds let users name their assistant, formatted replies for a phone screen, and scrubbed vendor names from the UI in favour of \"Tiaki is in beta\".",
     "r": "The reversal was logged as a decision in its own right, not a bug.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "btn-s",
       "bars"
      ],
      "b": [
       "btn-l",
       "check"
      ]
     },
     "status": "Shipped"
    },
    {
     "phase": "d2-develop",
     "date": "24 Sep 2026",
     "title": "Reports become tickets; testers earn credits",
     "s": "Testers were screenshotting bugs into group chats, and the only way to thank them was a message back.",
     "t": "Build the feedback loop into the product, and reward evidence rather than sign-ups.",
     "a": "A referral programme was ported from Thomas's wholesale marketplace app and redesigned: a ninety-day trial for all, five onboarded friends earns a free month, no stacking. Problem reporting arrived with a \"Not right?\" link under the latest reply, categories, a screenshot and auto-attached context, triaged on an admin page. Confirmed reports earn the same credit as a referral, so first testers are rewarded for finding real problems. A \"Send to Claude\" mark turns a confirmed report into a ticket worked straight from the database; the first ticket, a wrapping placeholder, went from report to fixed to credited the same day. A giving-back programme was built behind a switch as coming soon. A security review was run across the whole app and its findings fixed.",
     "r": "The reward unit changed from \"qualified referral\" to \"credit\", so evidence and advocacy pay the same.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Report",
       "Triage",
       "Fix",
       "Credit"
      ]
     },
     "status": "Shipped"
    },
    {
     "phase": "d2-develop",
     "date": "24 Sep 2026",
     "title": "One brain becomes a router and eleven specialists",
     "s": "One system prompt carried every rule for every job, so a plain question cost tens of thousands of input tokens, the day summary was written with calendar rules in view and padded with filler, and ten regex truth checks had been bolted on to catch claims the model never acted on.",
     "t": "Make wrong-job behaviour impossible rather than caught.",
     "a": "A router decides the job deterministically from where the user is and what they said, falling back to a tiny classifier call only when nothing matches. Eleven specialists each declare the context they need, the rule blocks they get and the output fields they may emit; constrained decoding means a question-answerer physically cannot write a plan. Wrap-up became three small calls, with a writer that never sees a calendar rule. Calendar is fetched once per request and token usage is logged per call so cost per specialist is visible.",
     "r": "Prompt size per turn fell to a fraction of before; the filler problem disappeared at the source and the sanitiser became a backstop. Timing instrumentation was added when test-stack turns felt slow.",
     "vis": {
      "type": "hub",
      "centre": "Router",
      "spokes": [
       "Answerer",
       "Planner",
       "Scheduler",
       "Calendar clerk",
       "Memory keeper",
       "Logger"
      ]
     },
     "status": "Shipped"
    },
    {
     "phase": "d2-deliver",
     "date": "13 Sep 2026",
     "title": "Run one: one false claim, twenty-three fixes in a round",
     "s": "The first persona run passed most P0 rows first try: timetable import exact to the minute, briefs turned into projects, class links, routines applied unprompted the next morning. The truth-check row failed.",
     "t": "Decide what to do with twenty-three findings and one failed safety row.",
     "a": "The failure was a false provenance claim: the reply said it had \"shifted\" a block that had never been on the plan. The state was right, so no harm, but by the sprint's own definition an uncaught dishonest claim is severity 1, and it was counted as one. Thomas's call was \"do all the fixes now\": onboarding may not close until it has touched work or study, projects, routines and life outside; a wrap-up claim without the completion flag is corrected; reworded re-saves are caught by fuzzy matching; a question never spawns a plan; invented filler blocks are banned; the server diffs old and new plans and rewrites \"moved\" to \"added\".",
     "r": "Run one closed as logged. A full re-run from a fresh user was set as the comparison that proves the fixes.",
     "vis": {
      "type": "badges"
     },
     "status": "Fixed"
    },
    {
     "phase": "d2-deliver",
     "date": "14 Sep 2026",
     "title": "Ship to production before run two",
     "s": "The agreed flow was prototype on the test app, prove it, then merge. Everything from Sprint 02 sat on the test stack with its own backend, behind an amber \"TEST VERSION\" banner.",
     "t": "Choose between the process and getting the features into real hands.",
     "a": "Thomas's call, confirmed over the test-first flow: merge to the original app. Both apps now run identical code with the test banner gated by environment. Sign-in had already become Google-only on both to sidestep email limits for the pilot. The run-two comparison still stands as the quality gate, after the fact.",
     "r": "Sprint 02 features went live untested by the persona runs, and the exception was recorded honestly as a conscious one. The staging backend was later paused by a free-tier project limit, so following rounds shipped to production directly.",
     "vis": {
      "type": "recede"
     },
     "status": "Live"
    },
    {
     "phase": "d2-deliver",
     "date": "24 Sep 2026",
     "title": "Tiers and the router go live; what is next",
     "s": "The access tiers, the router and the ticket flow had all been built on the test stack in one long day.",
     "t": "Promote, and set the next gates.",
     "a": "After Thomas's run-through on the test app, the tiers migration, the router brain and the ticket flow were promoted together. Five policy documents were drafted and placed behind an acceptance gate after sign-in, marked as drafts under review. Still open: the run-two comparison against run one, an email inbox digest as one more context block, the pilot proposal for the tertiary conversation, consent-screen verification, and the payments switch, which stays off through the pilot.",
     "r": "Every account resolves to Trial; nobody drops to Limited until their ninety days are up.",
     "vis": {
      "type": "timeline",
      "marks": [
       "Run 2 compare",
       "Email digest",
       "Pilot proposal",
       "Payments switch"
      ]
     },
     "status": "Live"
    }
   ]
  },
  nearby: {
   "name": "Nearby Stock",
   "accent": "#0e6f8a",
   "kind": "Product · Next.js PWA marketplace",
   "intro": "A mobile-first marketplace that lets New Zealand farms, fishers and growers tell nearby restaurants and grocers what stock they have today, and lets buyers contact them directly. Thomas Perese designed and built it with Claude in September 2026: a first cycle from idea to a live demo in four days, then a second cycle that paused building to validate the market, harden the foundation and open a feedback loop with testers.",
   "people": [
    {
     "name": "Thomas Perese",
     "role": "Design and build"
    },
    {
     "name": "Donna Perese",
     "role": "Community and market validation"
    },
    {
     "name": "Ray Hikaka",
     "role": "Collaborator"
    }
   ],
   "phases": [
    {
     "id": "d1-discover",
     "name": "Discover · Build",
     "colour": "#0e6f8a",
     "shape": "circle",
     "bg": "flow",
     "dir": "dr",
     "zoom": 1
    },
    {
     "id": "d1-define",
     "name": "Define · Build",
     "colour": "#2a3d8f",
     "shape": "square",
     "bg": "contours",
     "dir": "r",
     "zoom": 0.95
    },
    {
     "id": "d1-develop",
     "name": "Develop · Build",
     "colour": "#1f7a5c",
     "shape": "triangle",
     "bg": "circuit",
     "dir": "d",
     "zoom": 1.05
    },
    {
     "id": "d1-deliver",
     "name": "Deliver · Build",
     "colour": "#a5762a",
     "shape": "hexagon",
     "bg": "foam",
     "dir": "l",
     "zoom": 1
    },
    {
     "id": "d2-discover",
     "name": "Discover · Validate",
     "colour": "#6b3fa0",
     "shape": "diamond",
     "bg": "binary",
     "dir": "r",
     "zoom": 0.9
    },
    {
     "id": "d2-define",
     "name": "Define · Validate",
     "colour": "#d9521b",
     "shape": "square",
     "bg": "hexes",
     "dir": "ur",
     "zoom": 1
    },
    {
     "id": "d2-develop",
     "name": "Develop · Validate",
     "colour": "#b8461a",
     "shape": "triangle",
     "bg": "lattice",
     "dir": "r",
     "zoom": 1.1
    },
    {
     "id": "d2-deliver",
     "name": "Deliver · Validate",
     "colour": "#16130f",
     "shape": "circle",
     "bg": "dots",
     "dir": "dr",
     "zoom": 0.95
    }
   ],
   "stations": [
    {
     "phase": "d1-discover",
     "date": "15 Sep 2026",
     "title": "Stock that expires before the right buyer hears",
     "s": "Suppliers such as farms, growers, fishers and butchers regularly have surplus or time-sensitive stock: a carcass, a catch, a harvest. They sell it through phone trees, Facebook posts and word of mouth, and it often expires first. Buyers such as restaurants, caterers and grocers do not know what is available nearby today, so they find out too late or pay a middleman.",
     "t": "Write the problem for each side in their own words, without mentioning the product.",
     "a": "Thomas framed two sides plus an admin role for himself, and wrote the problem statement into the product vision before any screen existed. He also noted which side has to show up first: suppliers, because buyers see no value until there is stock to see.",
     "r": "A two-sentence problem per side that every later decision could be checked against. The supply-first observation later shaped a longer free period for suppliers than for buyers.",
     "vis": {
      "type": "branch",
      "from": "Surplus stock",
      "to": [
       "Phone tree",
       "Facebook post",
       "Word of mouth"
      ]
     },
     "status": "Origin"
    },
    {
     "phase": "d1-discover",
     "date": "15 Sep 2026",
     "title": "Suppliers already live in WhatsApp, so no chat",
     "s": "Suppliers and buyers already deal through WhatsApp, Messenger, phone and email. Building in-app messaging would mean moderation, storage, notifications and abuse handling for a one-person team.",
     "t": "Decide whether to rebuild the channels users already have.",
     "a": "The team chose not to build chat. \"Contact supplier\" opens the supplier's own channel through a validated link built on the server, and that tap is recorded as a contact event (ADR-004). Contact details are never sent to the browser before the tap and are rate limited.",
     "r": "Fast to ship and familiar to users. The cost is honest: the platform never sees conversation content, so it has less evidence in a dispute, and reviews had to be gated on contact events instead.",
     "vis": {
      "type": "hub",
      "centre": "Contact supplier",
      "spokes": [
       "WhatsApp",
       "Messenger",
       "Phone",
       "Email",
       "Website"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-discover",
     "date": "15 Sep 2026",
     "title": "One launch market, its settings written down once",
     "s": "New Zealand was the one market Thomas could reach in person that month. Hardcoding NZ details across the interface would make any later market a rewrite.",
     "t": "Choose a launch market and keep its units, currency, language and time zone in a single place.",
     "a": "New Zealand, with NZD, km, kg, en-NZ and the Auckland time zone, all defined in one config object (ADR-013). All formatting runs through one library; money is stored as integer cents. The working name \"Nearby Stock\" was also kept in config only, so branding would not block the build (ADR-014).",
     "r": "Another market becomes a configuration change plus payment prices. The record admits where the intent slipped: some SQL still hardcodes the time zone, and the name is still hardcoded in policies and the service worker.",
     "vis": {
      "type": "toggle",
      "items": [
       "NZD",
       "km",
       "kg",
       "en-NZ"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-discover",
     "date": "15 Sep 2026",
     "title": "Admit it: no interviews before building",
     "s": "The product was built from a brief and Thomas's own knowledge of the trade. No supplier or buyer interviews ran before the build, and the original brief survives only as requirement tables.",
     "t": "Record the research gap honestly rather than paper over it.",
     "a": "The design process document says so plainly: the first real user feedback came from Thomas testing on his own phone, four days in. The portfolio outline carries the same note for the public page.",
     "r": "A standing rule for the next project: keep the raw brief as a file and talk to at least five people on each side before settling principles. In this project that validation step arrived later, as a survey in the second cycle.",
     "vis": {
      "type": "abstract",
      "seed": 7
     },
     "status": "Recorded"
    },
    {
     "phase": "d1-define",
     "date": "15 Sep 2026",
     "title": "The contact tap is the conversion; the rest is out",
     "s": "A marketplace can measure many things. The team needed one event that proves the product did its job, and a written list of what it would deliberately not do.",
     "t": "Define the conversion precisely enough to count in the database, and write the out-of-scope list with reasons.",
     "a": "The supplier job: when I have stock that will not keep, tell nearby buyers in under a minute. The buyer job: see what is available within driving distance today and buy direct. The conversion is the contact event, recorded server-side. Out of scope on day one: payments or escrow between users, messaging, delivery logistics, POS inventory sync and multi-currency. Payments are used only for the two platform subscriptions (ADR-003).",
     "r": "The list saved weeks and kept the legal position simple: Nearby Stock is an introduction service that never touches the goods or the money. Views and favourites became secondary signals.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Browse nearby",
       "Open listing",
       "Contact supplier",
       "Event recorded"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "15 Sep 2026",
     "title": "Six principles and fourteen ADRs before any screen",
     "s": "With one person designing and developing alongside Claude, arguments that are not settled early get settled badly in the middle of a build.",
     "t": "Decide the things the team would otherwise argue about later, and record every hard-to-reverse choice with its costs.",
     "a": "Six testable principles went into the vision: direct connection, privacy by default, trust is a feature, honest community impact, mobile first and installable, and rules live in one place. Fourteen architecture decision records followed the same day, each with context, decision and consequences.",
     "r": "Most small decisions during the build ended at \"does a principle already decide it?\". The journal credits this step for the speed of the slices that followed.",
     "vis": {
      "type": "hub",
      "centre": "Principles",
      "spokes": [
       "Direct connection",
       "Privacy by default",
       "Trust is a feature",
       "Honest impact",
       "Mobile first",
       "Rules in one place"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "15 Sep 2026",
     "title": "A buyer's location is never shown to anyone",
     "s": "A buyer's search origin is usually their shop or their home. A supplier's address is often a farm that is also a home. Both are sensitive in different ways.",
     "t": "Set the location rules so the safe choice is the one you get without thinking.",
     "a": "The buyer's exact origin is used server-side for search and never returned to others; even the buyer's own map gets a coarsened point. Suppliers are approximate by default on a grid about 5 km across and can opt into exact if they want walk-in buyers. Admin maps aggregate to 0.1-degree buckets and analytics events carry no coordinates (ADR-007). The database views enforce this, not the interface.",
     "r": "Strong privacy, with an accepted cost: distances to approximate suppliers are themselves approximate, which later shaped how distance is displayed.",
     "vis": {
      "type": "pin"
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "15 Sep 2026",
     "title": "The database decides access, the UI explains it",
     "s": "Access depends on trial, payment, grace period, referral rewards and moderation. If the interface, the payment webhook and the database each worked it out, they would drift.",
     "t": "Put the access rules in exactly one place and make every other layer read from it.",
     "a": "One Postgres function resolves a user's entitlement and persists it; webhooks only record facts, then call it; a TypeScript mirror exists only for tests and display (ADR-005). On top of that, a copy rule: every locked feature says why and offers two ways forward, subscribe or refer five people.",
     "r": "No drift between what a screen shows and what the database enforces. The two-paths rule gives people without budget a way in and grows the network at the same time.",
     "vis": {
      "type": "layers",
      "base": "Postgres resolves entitlement",
      "layers": [
       "Server reads it",
       "UI explains it"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-define",
     "date": "15 Sep 2026",
     "title": "Time-based trials, and limited rather than locked out",
     "s": "Supply is irregular: a fisher might post five times one week and not at all the next. A usage cap such as ten free listings would punish exactly the behaviour the product wants.",
     "t": "Choose how free access ends, and what a non-paying user still sees.",
     "a": "Trials are time-based, one date in the entitlements table, with suppliers given longer because supply has to exist before buyers see value. A buyer whose trial ends becomes \"limited\": they can still browse within 20 km but see no supplier identity and cannot contact. An unpaid supplier becomes \"inactive\": listings leave search, drafts keep their work safe. A short grace period follows a failed payment because card failures are usually accidental.",
     "r": "Easy to explain on a pricing page and easy to enforce in one function. The limited state keeps showing value so the upgrade makes sense.",
     "vis": {
      "type": "toggle",
      "items": [
       "Trial",
       "Paid",
       "Limited",
       "Inactive"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-define",
     "date": "15 Sep 2026",
     "title": "Promise only what the product can enforce",
     "s": "Two places invited over-promising: referral rewards, where unlimited stacking lets a power referrer get free access forever, and community giving, where a fixed percentage is a promise a young business might not keep.",
     "t": "Set the rules for rewards and for giving so neither can become a broken promise.",
     "a": "Referrals: five qualified referrals earn one free month, only one reward can be queued or active at a time, and referrals made while a reward is live are recorded but do not count (ADR-006). A referral qualifies when the friend finishes onboarding and is still active seven days later, with no payment required. Fraud signals are soft flags for a human, never automatic voids, because shared addresses are common in a family or a shop. Impact: the copy says part of the platform's success supports charitable causes and members' votes help guide where it goes, with no percentage or amount promised, backed by a setting.",
     "r": "Predictable cost and honest copy. The locked referral window had to be explained in the interface and terms, and it hid a real bug that surfaced in the documentation pass.",
     "vis": {
      "type": "card",
      "badges": [
       "No stacking",
       "No fixed %"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d1-develop",
     "date": "15 Sep 2026",
     "title": "Tokens and nineteen primitives before the first page",
     "s": "Six build slices were about to run in parallel. Without a shared system they would look like six products.",
     "t": "Build the design system first so every later screen is cheaper and consistent.",
     "a": "Character: calm, fresh, trustworthy. Deep green primary, warm orange accent kept for the few things that need attention, off-white page and a tuned dark set, all as tokens in one file with no raw hex in components. Nineteen Radix-based primitives with 44px default touch targets, one easing curve and three durations. Glass is allowed only on chrome: top bar, bottom nav, sheets and floating controls, never on cards or forms, always with a solid fallback and off under reduced transparency.",
     "r": "Six slices built the same day looked like one product, and dark mode, reduced motion and focus states came for free. The system was missing one rule, a narrow-width check, and that gap came back on a real phone.",
     "vis": {
      "type": "swatches",
      "colours": [
       "#0f5e4f",
       "#e07a2f",
       "#f6f7f5",
       "#16130f"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-develop",
     "date": "15 Sep 2026",
     "title": "Five tabs, Post in the middle, and a Kia ora",
     "s": "A phone bottom bar holds five destinations with readable labels at 360px, and five is the common limit on both platforms. The team had more features than slots.",
     "t": "Decide the navigation per role before any page existed, and set the tone of the first line a user reads.",
     "a": "Buyers get Home, Map, Alerts, Favourites and Profile, with notifications moved to a bell in the top bar. Suppliers get Dashboard, Stock, Post, Insights and Profile, with Post highlighted in the centre because posting stock is the whole reason a supplier opens the app and the middle is easiest for a thumb. The marketplace and supplier dashboard open with \"Kia ora\", the everyday greeting in New Zealand.",
     "r": "The five-slot limit forced the team to choose what matters. One word at the top tells a user this was made here, for them, at no cost.",
     "vis": {
      "type": "phone",
      "card": "Kia ora",
      "note": "Post highlighted in the centre tab"
     },
     "status": "Built"
    },
    {
     "phase": "d1-develop",
     "date": "15 Sep 2026",
     "title": "A shared foundation, then six vertical slices",
     "s": "Building layer by layer means nothing works end to end until the last layer lands. The team wanted whole journeys early, and slices that could run in parallel.",
     "t": "Choose how to split one day's build between parallel agents without them colliding.",
     "a": "Foundation first: config, tokens, primitives, auth, PWA shell, schema and demo seed. Then six slices, each from database to screen with its own tests: buyer, supplier, monetisation, notifications, impact with trust and safety and legal pages, and an admin control centre. Each slice had to ship loading, error and empty states and a session log entry.",
     "r": "First commit at 17:01, last slice at 20:11, with 242 unit tests and eight end-to-end smoke tests by the end of the day. Demo-ready, not launch-ready, and the log said so.",
     "vis": {
      "type": "hub",
      "centre": "Foundation",
      "spokes": [
       "Buyer",
       "Supplier",
       "Money",
       "Notify",
       "Trust",
       "Admin"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-develop",
     "date": "15 Sep 2026",
     "title": "Demo mode as a first-class feature, not a stub",
     "s": "Google sign-in, Maps, payment and push credentials were not ready on day one, and there was no moderation team or budget. Thomas still wanted to show the product to people straight away.",
     "t": "Make every journey work without any third party, without faking the real paths away.",
     "a": "Every integration got an adapter with a fallback chosen from the environment: demo password sign-in, a demo payment provider, a no-op push provider, a region picker instead of address search, a list instead of a map (ADR-012). Pages degrade with a clear message when a migration or key is missing instead of crashing. A seed creates a dozen buyers, fourteen suppliers and an admin.",
     "r": "The whole product could be deployed and tested four days in. The cost is that production safety depends on two switches being off, which became a named launch gate.",
     "vis": {
      "type": "toggle",
      "items": [
       "Demo sign-in",
       "Demo billing",
       "List not map",
       "No-op push"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-develop",
     "date": "15 Sep 2026",
     "title": "Post in under a minute: optional price, one-tap expiry",
     "s": "Wholesale prices move with the day's catch, weight and quantity. Most stock is perishable. A long form would stop a supplier posting from a paddock or a wharf.",
     "t": "Design the post form around speed without forcing suppliers to lie.",
     "a": "Four price types: fixed, from, contact and none, with the card reading \"Contact for price\" when there is no number. Expiry presets of Today, 24 hours, 3 days, 1 week or custom, with automatic expiry every five minutes. Only essentials show by default; photos, description, minimum order and notes sit under \"More details\". Distances are rounded to match the privacy grid: under 1 km, one decimal below 10 km, whole km above, and 5 km bands for limited buyers.",
     "r": "Suppliers can post honestly in a few taps, and the price nudge points buyers at the contact event the product measures. The record flags a copy mismatch to fix: the vision says under a minute, the form says under 30 seconds.",
     "vis": {
      "type": "card",
      "badges": [
       "Contact for price",
       "Today"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-develop",
     "date": "15 Sep 2026",
     "title": "A primitive that crashed in the first slice",
     "s": "The shared Button primitive supported rendering as a link. In the buyer slice it threw at runtime because the slot received both the loading spinner and the children.",
     "t": "Keep the slice moving without breaking the shared system under the other slices.",
     "a": "The buyer slice shipped a small LinkButton workaround and logged the fault. The primitive itself was fixed afterwards in the 0.1.0 changelog.",
     "r": "A new rule in the process: every primitive needs a smoke test for each variant before the slices start using it.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "btn-l",
       "xmark"
      ],
      "b": [
       "btn-l",
       "check"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d1-develop",
     "date": "15 Sep 2026",
     "title": "Writing the docs was itself a review",
     "s": "The same evening, the team wrote the project vault and checked it against the code and the live database. Earlier that day a public listing view had failed for signed-in users because a helper it called was not executable by their role.",
     "t": "Decide what documentation is for, and how it relates to the code.",
     "a": "The vault's rule: if the code and a document disagree, the code wins and the document is the bug. Reading the code to document it found seven more real issues, including a referral edge case that could stall scheduled maintenance and supplier rewards that never activated, each logged with a severity and a fix direction.",
     "r": "\"Document it\" became part of every slice's definition of done rather than an afterthought. The view failure left its own lesson: test views as the real roles, not as the owner.",
     "vis": {
      "type": "bank"
     },
     "status": "Recorded"
    },
    {
     "phase": "d1-deliver",
     "date": "19 Sep 2026",
     "title": "Live on day four, in demo mode",
     "s": "The documentation pass had produced a list of fixes. A review-fix migration landed, including clamping the admin radius setting to the range the database accepts, a direct application of the rules-in-one-place principle.",
     "t": "Get the product in front of a real phone as soon as the fixes were in.",
     "a": "The repo moved to Thomas's Mac and the first deploy went up on Netlify in demo mode. Trial buyer, subscribed buyer, supplier and admin were each verified landing where they should.",
     "r": "Four days from first commit to a live deploy. The journal's lesson arrived the same night: the recipe matters more than the machine, and the deploy itself was the start of the real testing.",
     "vis": {
      "type": "burst"
     },
     "status": "Live"
    },
    {
     "phase": "d1-deliver",
     "date": "19 Sep 2026",
     "title": "Sign out did nothing",
     "s": "Late that night Thomas tested the live site on his phone. \"Sign out\" in the account menu did nothing; the session cookie stayed put. 242 unit tests and eight smoke tests had missed it because none of them signed out.",
     "t": "Find why a working form did nothing inside a menu, and stop the class of bug.",
     "a": "The menu library closes its items on pointer-up, so the form nested inside never received the click. The fix calls the sign-out action from the item's own select handler and shows \"Signing out...\" while it runs. Verified for all three roles against the production build and redeployed.",
     "r": "The first time Thomas used his own product as a user found a bug no emulator would. New rule: menus own their pointer events, so never put a form inside one.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "btn-s",
       "xmark"
      ],
      "b": [
       "btn-s",
       "check"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d1-deliver",
     "date": "20 Sep 2026",
     "title": "One iPhone screenshot became a responsive test",
     "s": "Thomas sent a screenshot from his iPhone 14 Pro with content running off the right edge. The screenshot showed one broken page; the real problem was that nothing in the design system or the tests checked narrow widths.",
     "t": "Fix the class of bug, not the page.",
     "a": "A responsive audit covered 312 page visits at 393, 375 and 360px in light and dark. The marketing header's secondary links collapse into a bottom sheet on small screens, the content gutter honours safe-area insets, a bleed utility handles edge-to-edge rows, and overflow was fixed on the chip row, inventory, dashboard and admin pages. Then a new end-to-end test signs in as each role and fails if any element sticks out past a 375px viewport.",
     "r": "The fix that matters is the test. It is ready for CI, and the record is honest that CI itself does not exist yet.",
     "vis": {
      "type": "range",
      "label": "Audited widths",
      "min": "360px",
      "max": "393px",
      "old": "unchecked (was)"
     },
     "status": "Fixed"
    },
    {
     "phase": "d1-deliver",
     "date": "20 Sep 2026",
     "title": "Every legal page returned 404 in production",
     "s": "After a deploy, every policy page returned 404 on Netlify. The loader read markdown files from disk, and that folder was not in the hosting function bundle. It worked locally.",
     "t": "Make the legal pages independent of the production filesystem.",
     "a": "A build-time script now embeds the markdown into a generated TypeScript file through a prebuild hook, so the loader never touches disk. A second 404 appeared later when a prerender flag went stale, and that flag was removed.",
     "r": "\"Works locally\" is not \"works on Netlify\". Each production-only bug now has its cause written down, not just its fix.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "steps-text",
       "xmark"
      ],
      "b": [
       "steps-text",
       "check"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d1-deliver",
     "date": "20 Sep 2026",
     "title": "Hold flagged listings, don't block or delete them",
     "s": "A direct-contact wholesale marketplace is an obvious channel for drugs, stolen goods, homekill meat, unlicensed alcohol, vapes and firearms. Before this day there was no content screening at all.",
     "t": "Moderate a marketplace with no moderators, without punishing honest suppliers.",
     "a": "Screening in eleven NZ-relevant categories, applied at three layers: a soft warning while typing that names the category and never blocks saving, a flag added by the form schema, and a database trigger. Of three options for a match, blocking teaches evasion and auto-deleting punishes false positives, so a flagged listing is held as a draft marked for review, a high-severity system report opens for an admin, and the supplier sees \"being reviewed before it goes live\". Rewording to clean text clears the hold. Terms that could not be made safe, such as grass, hash, knife and cider, were dropped on purpose with the reason recorded.",
     "r": "\"Grass-fed\", \"hash browns\" and \"ginger beer\" stay clean. The cost is that an admin has to clear holds, and there is no dedicated queue screen yet.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Soft warning",
       "Form flag",
       "Held as draft",
       "Report opens",
       "Admin clears"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d1-deliver",
     "date": "20 Sep 2026",
     "title": "Hardening produced screens, not just code",
     "s": "A security review, the trust and safety layer and a legal pass all landed the same day. Each one changed what users see.",
     "t": "Treat the hardening phase as design work and plan for new screens.",
     "a": "Report categories were re-ordered so illegal goods, threats, unsafe product, food safety, recalls and scams come first as one-tap chips, with emergency and Police numbers shown for the urgent ones, because an item at position nine of eighteen is how a marketplace never hears about it. Suppliers now attest to a lawful business and being over 18 at onboarding. Five policies were rewritten as version 2 with a re-acceptance gate for every existing user. Photo location metadata is stripped in the browser before upload, since a farm photo can reveal a home. Listing and supplier views now require sign-in at the database level, not just in the routing layer.",
     "r": "The held-for-review state, the chip order, the attestations and the re-acceptance gate are all user-facing design. The policies still carry a DRAFT banner until a NZ lawyer reviews them.",
     "vis": {
      "type": "badges"
     },
     "status": "Built"
    },
    {
     "phase": "d1-deliver",
     "date": "20 Sep 2026",
     "title": "A launch checklist with no code steps left",
     "s": "The code was complete in demo mode. What remained between the demo and a real launch was accounts, keys, a clean production database and legal review, none of it code.",
     "t": "Separate code work from account setup so anyone could finish the launch.",
     "a": "PROJECT_STATE got a ten-step manual checklist: sign-in provider, maps key, payments, service keys, push keys, a production database with demo flags off, admin bootstrap with MFA, replacing placeholders, legal review, and optional domain and insurance.",
     "r": "The handover's definition of done: the state document is true on its date, every known issue has an ID and severity, and the checklist has only account and legal steps left.",
     "vis": {
      "type": "timeline",
      "marks": [
       "Code complete",
       "Accounts",
       "Legal review",
       "Launch"
      ]
     },
     "status": "Open"
    },
    {
     "phase": "d2-discover",
     "date": "24 Sep 2026",
     "title": "An advisor email reopens \"accepted by design\"",
     "s": "An automated database advisor flagged a geospatial reference table living in the public schema. Four days earlier it had been waved through as reference data and a low-priority nice-to-have.",
     "t": "Look again at a finding that had been dismissed, and decide whether the foundation was right.",
     "a": "The extension could not be relocated once installed, so the only fix was to rebuild the database from the first migration with extensions in their own schema, and write a guarded reset script for demo databases only. The rebuild ran from Thomas's Mac: 27 migrations from scratch in about 40 seconds.",
     "r": "Two lessons in the journal: \"accepted by design\" needs a date and a reason and must be revisited when context changes, and getting the database foundation wrong on day one costs a full rebuild later.",
     "vis": {
      "type": "layers",
      "base": "Migration 0001",
      "layers": [
       "extensions schema",
       "public schema"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d2-discover",
     "date": "24 Sep 2026",
     "title": "The demo that looked dead",
     "s": "The demo seed wrote every timestamp relative to the moment it ran. A few days later listings had expired and \"posted 6d ago\" read \"posted 3w ago\". A working product looked abandoned.",
     "t": "Keep the demo alive without risking a production database.",
     "a": "A nightly reset at 03:00 NZ time re-runs the seed, guarded so it only acts on a database that is clearly a demo. Its first scheduled run failed on a foreign key ordering and was fixed at source two days later.",
     "r": "A demo is a product too, and a buyer of the business will judge it by the demo. Accepted side effect: anything a tester creates during the day is wiped overnight.",
     "vis": {
      "type": "timeline",
      "marks": [
       "Seeded",
       "Posted 3w ago",
       "Nightly reset",
       "Fresh again"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "d2-discover",
     "date": "24 Sep 2026",
     "title": "Prepare it for sale, which changes the handover",
     "s": "The handover had been written for the next developer. Thomas decided to prepare Nearby Stock for sale to a wholesaler rather than only run it himself.",
     "t": "Work out what the change in direction does to the design record.",
     "a": "The journal recorded the decision and its consequence: the user of the handover is now a buyer of the business, who needs to see the value, the risks and what it costs to run. A design folder was started the same day with a decision index, a journal, the extracted process and a portfolio outline.",
     "r": "\"Hand over\" turned from a developer handover into a business handover. The record is candid that the reasons for the sale came from Thomas and were not yet in the vault.",
     "vis": {
      "type": "branch",
      "from": "Hand over",
      "to": [
       "Next developer",
       "Business buyer"
      ]
     },
     "status": "Pivoted"
    },
    {
     "phase": "d2-discover",
     "date": "26 Sep 2026",
     "title": "Validate before building more: the Eastern Bay survey",
     "s": "The product had been built without talking to users first. Before adding features, Thomas wanted evidence from the Eastern Bay of Plenty.",
     "t": "Run the research step that was skipped, as a market validation survey.",
     "a": "A seventeen-page Tally survey: the problem with published market figures, the Nearby Stock concept and a link to the live demo, usefulness and price-sensitivity questions, separate buyer, supplier and community branches, and an early adopter sign-up.",
     "r": "The journal reframed the survey as a design artefact: the page order is a persuasion and consent flow, hook, consent, credibility, problem, solution, validation, branch, price, ask.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Hook",
       "Consent",
       "Credibility",
       "Problem",
       "Solution",
       "Ask"
      ]
     },
     "status": "Shipped"
    },
    {
     "phase": "d2-define",
     "date": "26 Sep 2026",
     "title": "Consent before the prototype, not after",
     "s": "Respondents were about to see confidential material. Putting consent at the end, or leaving it out, would improve completion but would not be honest.",
     "t": "Decide where consent sits and what it covers.",
     "a": "Consent moved to page two, before the credibility and problem pages and before the prototype link, as one question with three required boxes: privacy, over 18 and confidentiality. A feedback licence says suggestions may be used freely, and a confidentiality reminder sits on the demo page. Thomas's own feedback drove the protective wording: he wanted protection against better-resourced suppliers copying the idea.",
     "r": "The journal is frank: you cannot protect an idea with a form. Copyright protects screens and words, a trade mark the name, and a clickwrap promise is a deterrent and a record. The real protection is speed and the relationships the survey creates.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "steps-text",
       "dots"
      ],
      "b": [
       "check",
       "steps-text"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "26 Sep 2026",
     "title": "One legal entity name on everything",
     "s": "Three different spellings of the company name had come up in conversation. The app footer, meta tags, policies, licence and survey each needed to say who carries the liability and owns the copyright.",
     "t": "Settle company identity before public contact.",
     "a": "Tiaki Mai Rā Limited became the single legal entity name in the app config, policies, licence, page head and profile footers, replacing a product-named placeholder. A product name is not a legal person. The spelling is marked for a check against the Companies Office.",
     "r": "The survey, the policies and the app now agree. The decision index also notes the interim support address until a company mailbox exists.",
     "vis": {
      "type": "labels"
     },
     "status": "Locked"
    },
    {
     "phase": "d2-define",
     "date": "26 Sep 2026",
     "title": "The survey should feel like the product",
     "s": "The survey is the first touch of the brand for most respondents. The form builder's default theme and visible \"[INFOGRAPHIC]\" placeholders would not do.",
     "t": "Decide how much of the product's design system a research instrument should carry.",
     "a": "The survey was styled with the app's tokens: Geist, the forest green, the off-white and pill buttons. Infographic placeholders were hidden until the images existed, then placed only after the hosted files were confirmed reachable, because the form builder silently substitutes a stock photo otherwise. Long privacy and IP texts became two summary cards linking to full pages in the app, the tap-to-expand equivalent in a tool with no accordion.",
     "r": "A published survey never shows scaffolding, and respondents meet one consistent brand from the first page to the demo.",
     "vis": {
      "type": "swatches",
      "colours": [
       "#0f5e4f",
       "#f0f2ee",
       "#e07a2f",
       "#16130f"
      ]
     },
     "status": "Shipped"
    },
    {
     "phase": "d2-develop",
     "date": "26 Sep 2026",
     "title": "Problem reports are not Trust and Safety reports",
     "s": "Testers were about to start using the demo. Reports about the app (bugs, confusing screens, ideas) have a different audience, workflow and retention from reports about other members, which may sit under legal hold.",
     "t": "Decide whether to reuse the existing report system or build a separate one.",
     "a": "A separate table, form and admin queue, ported from the Tiaki project. Entry points sit under Profile, beneath each listing as \"Something not right?\", and on the marketplace empty and error states. Each report carries page, app version, role and access state automatically, plus an optional screenshot re-encoded on the phone. The form redirects content abuse to the Trust and Safety path at the top.",
     "r": "Product feedback and member-conduct reports never mix. Report text is treated as untrusted data, never as instructions, which is written into the workflow for any Claude session that works tickets.",
     "vis": {
      "type": "branch",
      "from": "Report",
      "to": [
       "About the app",
       "About a member"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d2-develop",
     "date": "26 Sep 2026",
     "title": "One credits ledger: invite people or report problems",
     "s": "Rewarding testers for useful reports could have meant a second counter beside referrals, with its own rules to explain.",
     "t": "Reward validated reports without creating a parallel reward system.",
     "a": "A single reward-credits ledger unifies referrals, confirmed reports and admin bonuses: five credits earn one free month through the existing referral cycle, so the no-stacking rule and billing code are reused unchanged. A report earns a credit only when confirmed or fixed, once per report; an earned month is never clawed back; credits earned while a free month is live are banked for the next round, at most five per round.",
     "r": "One pot is easier to explain and nothing earned is lost, while a burst of reports still cannot pre-pay many months.",
     "vis": {
      "type": "hub",
      "centre": "Reward credits",
      "spokes": [
       "Referrals",
       "Confirmed reports",
       "Admin bonus"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d2-develop",
     "date": "26 Sep 2026",
     "title": "\"Send to Claude\" is its own switch",
     "s": "Thomas checked the admin Reports area and found the Tiaki-style switch missing. The first port had treated \"Confirmed\" as the signal to fix.",
     "t": "Separate the triage decision from the go-and-fix decision.",
     "a": "An explicit switch on each report, \"Yes, fix this\", independent of status. Flicking it stores a compact copy of the screenshot made in the admin's browser, so a later Claude session can read the picture from the database without a storage key. The list gets a Claude chip, a \"Claude's list\" tab and a KPI. Closing the report clears the mark automatically.",
     "r": "The switch is the contract: Claude works only what is on the list. Proven end to end the same day by filing a report with a large screenshot, flicking the switch and decoding the copy.",
     "vis": {
      "type": "toggle",
      "items": [
       "Open",
       "Confirmed",
       "Send to Claude"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "d2-develop",
     "date": "26 Sep 2026",
     "title": "A real map now, a production key before launch",
     "s": "Thomas asked why billing was needed for maps that are free. A real key needs a card attached even at zero usage, while a no-billing demo key covers everything the app uses with a daily cap and prototyping-only terms.",
     "t": "Decide what respondents and testers should see on the map screen during the survey period.",
     "a": "Ship the live map on the demo key now, because respondents judge a real map differently from a list, and move to a billed, domain-restricted key with a Map ID before public launch. Verified live: tiles, the radius circle and clustered pins for a buyer, address search for a supplier, and the admin heat map.",
     "r": "The list fallback stays in place for when the cap pauses the key. The swap is recorded as a launch gate.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "list"
      ],
      "b": [
       "map"
      ]
     },
     "status": "Live"
    },
    {
     "phase": "d2-deliver",
     "date": "27 Sep 2026",
     "title": "Working the first tickets: a bug only WebKit showed",
     "s": "Thomas filed five reports from his iPhone in dark mode, confirmed them and flicked the switch. One said the home cards were bleeding off the edge, a bug the responsive test on Chromium had never shown.",
     "t": "Use the new loop for real and reproduce an iPhone-only layout fault.",
     "a": "The session read the fix list, decoded the five screenshot copies and worked only those. The overflow reproduced only in WebKit against the live site: a price span that could not shrink shared a line with the supplier's pricing note. The fix splits the price into amount and a wrapping note, and adds a global grid rule so single-column lists can never grow past their container. A WebKit Playwright config was added for ad-hoc iPhone runs.",
     "r": "All five closed with \"Fixed in\" the deployed version and the reporter notified; the extra credits banked for the next round exactly as designed. New rule in the workflow: most tester phones are iPhones, so reproduce on WebKit.",
     "vis": {
      "type": "phone",
      "card": "Home cards bleeding off the edge",
      "note": "WebKit only, 45px overflow"
     },
     "status": "Fixed"
    },
    {
     "phase": "d2-deliver",
     "date": "27 Sep 2026",
     "title": "Floating tab bar, hiding top bar, collapsed filters",
     "s": "The other tickets were about chrome: the top bar felt heavy, the bottom tabs sat flat, alert cards hid their detail, and the map's filters crowded the screen.",
     "t": "Rework the shell from tester feedback while keeping the glass-only-on-chrome rule.",
     "a": "The top bar is thinner on phones and hides on scroll down, returning on scroll up. The tab bar floats inset with a large radius over the content, with darker glass in dark mode for legibility. Alert cards expand on tap to show their full detail. Map filters collapse behind one glass button remembered per device, and a radius stepper on the map walks through the presets.",
     "r": "Each change came from a tester's words rather than a redesign. Each left a test behind in a dated spec at iPhone 14 Pro size.",
     "vis": {
      "type": "layers",
      "base": "Content",
      "layers": [
       "Floating tab bar",
       "Top bar hides on scroll"
      ]
     },
     "status": "Shipped"
    },
    {
     "phase": "d2-deliver",
     "date": "27 Sep 2026",
     "title": "The first survey response, and what is next",
     "s": "One completed survey submission arrived. It was the first evidence from outside the team since the project began.",
     "t": "Check that the instrument works before trusting its data, and set the next steps.",
     "a": "The response was checked field by field against the sheet: branching sent a buyer through the right pages and skipped the supplier and community ones, conditional follow-ups stayed blank where they should, the ranking differed from the option order so it was genuinely ranked, and the price ladder was monotonic. Suggested tweaks were recorded, not applied, including asking for a town when a respondent is outside the target area.",
     "r": "Still no user or revenue numbers, and the record says so plainly. Next: the launch gates, CI for the tests that already exist, direct database permission tests, and the sale pack that the second cycle started.",
     "vis": {
      "type": "timeline",
      "marks": [
       "First response",
       "Launch gates",
       "CI",
       "Sale pack"
      ]
     },
     "status": "Planned"
    }
   ]
  },
  waga: {
   "name": "WAGA · World Art Generator",
   "accent": "#6b3fa0",
   "kind": "Experimental · visionOS",
   "intro": "WAGA is an experimental Apple Vision Pro app: describe a world in plain language, pick one of several AI-generated concepts, then step inside it. This journey follows the project from a mock-data prototype to a working skybox and Gaussian splat pipeline, including the on-device bugs that reshaped how it stores and recovers worlds.",
   "people": [
    {
     "name": "Thomas Perese",
     "role": "Design and build"
    }
   ],
   "phases": [
    {
     "id": "discover",
     "name": "Discover",
     "colour": "#6b3fa0",
     "shape": "circle",
     "bg": "flow",
     "dir": "dr",
     "zoom": 1
    },
    {
     "id": "define",
     "name": "Define",
     "colour": "#1f7a5c",
     "shape": "square",
     "bg": "contours",
     "dir": "r",
     "zoom": 0.95
    },
    {
     "id": "develop",
     "name": "Develop",
     "colour": "#d9521b",
     "shape": "triangle",
     "bg": "circuit",
     "dir": "d",
     "zoom": 1.05
    },
    {
     "id": "deliver",
     "name": "Deliver",
     "colour": "#0e6f8a",
     "shape": "hexagon",
     "bg": "foam",
     "dir": "ur",
     "zoom": 0.9
    }
   ],
   "stations": [
    {
     "phase": "discover",
     "date": "2 Jun 2026",
     "title": "Inspect first, then plan in phases with gates",
     "s": "WAGA began as an idea for a spatial creative tool on Vision Pro: speak or type a world, get concept options, enter the one you like. Nothing had been scoped and visionOS 26 was new enough that older tutorials could not be trusted.",
     "t": "Turn the idea into a project that could be built safely by several agents without over-reaching.",
     "a": "Thomas Perese ran a Phase 0 kickoff: the existing code was inspected, an MVVM plus protocol-services architecture was defined, a five-phase roadmap was written, and a risk register, research plans and an agent plan were seeded in a vault. Each phase got an explicit gate that Thomas approves before the next begins.",
     "r": "The whole project could be reasoned about from the documents alone. The gates became the main defence against scope creep, which the risk register rated as a high-likelihood, high-impact risk.",
     "vis": {
      "type": "timeline",
      "marks": [
       "Phase 0 setup",
       "Phase 1 mock",
       "Phase 2 real AI",
       "Phase 3 accounts",
       "Phase 5 spatial"
      ]
     },
     "status": "Origin"
    },
    {
     "phase": "discover",
     "date": "2 Jun 2026",
     "title": "Compare four image providers on quality, speed and Swift fit",
     "s": "Real concept images would eventually replace mock cards, but the right provider was unclear and each had a different API shape and content policy.",
     "t": "Pick a default image generator and a fallback before any paid call was made.",
     "a": "A research agent compared Fal.ai Flux, Replicate Flux 2 Pro, OpenAI image models and Stability on composition quality, cold-start latency and how cleanly each mapped to a Swift request-poll-download loop. Midjourney was ruled out for having no first-party API.",
     "r": "Fal.ai Flux was recommended for bulk draft concepts and Replicate Flux 2 Pro as a hero tier, both behind a single proxy with a config flag so the provider could change without an app update.",
     "vis": {
      "type": "toggle",
      "items": [
       "Fal.ai Flux",
       "Replicate",
       "OpenAI",
       "Stability"
      ]
     },
     "status": "Recorded"
    },
    {
     "phase": "discover",
     "date": "2 Jun 2026",
     "title": "SHARP lifts a photo to 3D, but only up close",
     "s": "The roadmap listed an Apple SHARP investigation with thirteen open questions, from whether it was callable from Swift to what file format it produced.",
     "t": "Find out what SHARP actually is and where it could honestly sit in the product.",
     "a": "The research found SHARP is an open-source Apple model that turns a single image into a Gaussian splat in one pass, ships with a Core ML conversion and writes PLY files that MetalSplatter can render. It also found the key limit: it renders well only close to the original camera position.",
     "r": "SHARP was reframed from a possible world generator into a 2D to 3D bridge: a depth-coherent object or diorama you can lean around, not a space you can walk through. That distinction shaped the later tier structure.",
     "vis": {
      "type": "recede"
     },
     "status": "Recorded"
    },
    {
     "phase": "discover",
     "date": "2 Jun 2026",
     "title": "RealityKit cannot draw splats on visionOS 26, so Metal must",
     "s": "Gaussian splatting was the long-term route to walkable worlds, but it was unknown whether Apple's own rendering stack could display one.",
     "t": "Establish whether a custom renderer was unavoidable and, if so, how to contain the risk.",
     "a": "The research confirmed RealityKit on visionOS 26 has no splat primitive. MetalSplatter, a Swift package rendering PLY and SPZ in stereo through CompositorServices, was identified as the production path, with a recommendation to hide it behind a thin protocol in case Apple shipped native support at WWDC.",
     "r": "Metal was accepted as necessary but kept out of the MVP entirely: the risk register marked it research-only, and any prototype had to live in an isolated repo until validated.",
     "vis": {
      "type": "layers",
      "base": "RealityKit chrome and hands",
      "layers": [
       "Metal splat layer (MetalSplatter)",
       "Protocol so a native swap is mechanical"
      ]
     },
     "status": "Recorded"
    },
    {
     "phase": "discover",
     "date": "9 Jun 2026",
     "title": "Audit after WWDC26: resolution is the quality ceiling",
     "s": "The day after the WWDC26 keynote announced visionOS 27, the project had a working 2K panorama dome and stubbed splat endpoints, yet worlds did not feel like Apple's own environments.",
     "t": "Work out why, and map the new Apple APIs against the plan.",
     "a": "An audit compared the 2048 by 1024 panorama to Apple's environment design bar and found the dome was rendering at roughly a seventh of the recommended pixel density. It also noted the dome re-downloaded its texture on every entry, splat worlds used mixed immersion when they should fill the view, and soundscapes were still UI-only.",
     "r": "Five concrete gaps replaced a vague sense of 'not good enough'. Upscaling the chosen panorama to 8K became the single biggest quality lever.",
     "vis": {
      "type": "range",
      "label": "Pixels per degree",
      "min": "5.7 (2K today)",
      "max": "22 (8K floor)",
      "old": "40 (Apple bar)"
     },
     "status": "Recorded"
    },
    {
     "phase": "define",
     "date": "2 Jun 2026",
     "title": "Prove the flow with mock data before spending anything",
     "s": "It was tempting to wire real AI generation straight in. The risk register rated 'adding real AI before the flow is validated' as high likelihood and high impact.",
     "t": "Scope a Phase 1 that proves the product feel without any paid API, backend or payment.",
     "a": "Phase 1 was locked to a complete end-to-end loop on fake data: prompt, style and mood pickers, a simulated two-second generation returning four cards, a gallery, a detail view, a coloured RealityKit skybox to enter, and a saved-worlds library. Fourteen style presets, including a Māori / Pacific option, and ten moods gave the pickers real vocabulary. Every service was a protocol with a mock implementation so real ones could be swapped in later.",
     "r": "The full MVP was built and testable the same day. Phase 2 was explicitly gated on Thomas confirming on device that the flow felt right.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Prompt",
       "Style + mood",
       "Gallery",
       "Detail",
       "Enter world",
       "Save"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "define",
     "date": "2 Jun 2026",
     "title": "Safety sheet once, exit always visible, seated default",
     "s": "Full immersion in a small room is a physical safety issue, not just a UX one. The risk register flagged it as medium likelihood, high impact.",
     "t": "Decide the minimum safety behaviour the app ships with from the first prototype.",
     "a": "A one-time safety onboarding sheet was made a must-have for Phase 1 and stored locally so it shows once. The exit control inside any immersive space was required to be always visible, and seated use was made the default assumption.",
     "r": "The risk was marked mitigated before any real world could be entered. Later splat spaces kept the principle with a palm-up gesture and a watchdog that exits automatically if tracking never starts.",
     "vis": {
      "type": "phone",
      "card": "Before you enter",
      "note": "shown once · exit always visible"
     },
     "status": "Locked"
    },
    {
     "phase": "define",
     "date": "2 Jun 2026",
     "title": "Agents plan or build; only Thomas spends money",
     "s": "Several AI agents were going to work on WAGA at once: an Xcode-based PM agent, research and strategy chats, and Claude Code sessions for backend and filesystem work. Conflicting edits were a real risk.",
     "t": "Set rules so agents could work in parallel without stepping on each other or spending money unasked.",
     "a": "A multi-agent workflow was written down: only one agent touches a file area at a time, strategy agents never edit production Swift, coding agents never make product or cost decisions, and any action that could cost real money raises a flag for Thomas to approve. A handoff log records every completed and pending task.",
     "r": "The handoff log became the project's memory across tools. The real-money rule held: no paid key was provisioned until Thomas signed off.",
     "vis": {
      "type": "branch",
      "from": "Thomas Perese (product owner)",
      "to": [
       "Xcode PM agent",
       "Co-Work research agents",
       "Claude Code build agents"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "define",
     "date": "2 Jun 2026",
     "title": "A Cloudflare Worker between headset and every provider",
     "s": "A visionOS app bundle can be unpacked. Any provider key shipped inside it would be extracted and used to burn credits.",
     "t": "Specify how the app reaches paid AI services without ever holding a secret.",
     "a": "A Worker spec was written as the only thing the app talks to: it builds an enhanced prompt from style, mood and the user's text, fans out image requests in parallel, enforces a prompt length cap and per-IP rate limiting, passes through the provider's safety checker, and returns plain image URLs. App Attest was planned as a later gate so only the real app can call it.",
     "r": "The Worker shape held through every provider change that followed. Swapping SHARP's backend, adding Marble and adding splat status polling were all Worker-side edits with the Swift contract unchanged.",
     "vis": {
      "type": "layers",
      "base": "Vision Pro app",
      "layers": [
       "Cloudflare Worker (prompt, limits, safety)",
       "Image and world providers"
      ]
     },
     "status": "Built"
    },
    {
     "phase": "define",
     "date": "9 Jun 2026",
     "title": "Hybrid ladder: 8K skybox, on-device depth, Marble splat",
     "s": "Four approaches to immersive environments were on the table: an AI skybox on a dome, text-to-3D meshes, Apple's new spatial scene APIs, and World Labs Marble splat worlds. None alone reached Apple-environment quality.",
     "t": "Pick an approach that fits the existing codebase and token economy.",
     "a": "The approaches were compared on quality, latency and risk. Meshes were ruled out as object-scale only. The decision was a ladder: an 8K skybox for instant entry on the free tier, Apple's on-device spatial scene conversion for parallax as a v2 pass, and a Marble Gaussian splat as the paid full-depth tier, with each tier reusing the previous tier's panorama as input.",
     "r": "The plan matched what was already built and gave a clear order of work. Marble's native RealityKit splat rendering in visionOS 27 was pencilled in as the v3 route to retire the custom renderer.",
     "vis": {
      "type": "layers",
      "base": "8K skybox dome (instant)",
      "layers": [
       "Spatial-scene depth (on device)",
       "Marble splat world (walkable)"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "develop",
     "date": "Jun 2026",
     "title": "Wrong field name quietly selected the most expensive model",
     "s": "The Marble world-generation endpoint was being wired into the Worker. The planning spec called the quality selector 'tier'; the shipped code parsed 'model' and silently fell back to the top model when the field was missing or unrecognised.",
     "t": "Get the first real splat world generated end to end and make the integration safe to iterate on.",
     "a": "A smoke test generated a draft world from a text prompt in about 23 seconds and downloaded its SPZ file. The field mismatch was caught the hard way. The handoff then set rules: use the draft model throughout development, validate the model string, let the headset download SPZ straight from the CDN rather than proxying bytes through the Worker, and split rate limits so status polling cannot starve generation requests.",
     "r": "The first real 3D world existed as a test fixture, and the integration brief carried an explicit warning so the mistake would not repeat.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "xmark",
       "bars"
      ],
      "b": [
       "check",
       "list"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "develop",
     "date": "Jun 2026",
     "title": "SHARP backend dead on arrival, so move it to Replicate",
     "s": "SHARP had been wired to a community-hosted Hugging Face Space. Every request returned an error with no data, and the Space was shared, quota-limited hosting in any case.",
     "t": "Prove where the failure was and find a reliable home for the same model.",
     "a": "Five tests isolated it: through the Worker, calling the Space directly, uploading the file first, using the Space's own schema example, and checking Space health. All failed identically, so the fault was inside the Space. A Replicate deployment of the same Apple model with the same PLY output was found, with a far simpler two-call API.",
     "r": "The Worker's SHARP handler was rewritten for Replicate and the custom event-stream parser deleted. The Swift side did not change at all. Later, polling for Replicate jobs became its own saga.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Worker test",
       "Direct call",
       "Upload first",
       "Schema example",
       "Health check",
       "Switch host"
      ]
     },
     "status": "Pivoted"
    },
    {
     "phase": "develop",
     "date": "Jun 2026",
     "title": "Replace synthetic noise with twelve recorded loops",
     "s": "Soundscapes had shipped as generated noise per category. Presence inside an environment depends heavily on ambient audio, and the noise did not help.",
     "t": "Give each of the twelve soundscape categories a real looping track without a licensing burden.",
     "a": "Thomas chose, trimmed and approved twelve freely licensed ambient recordings, each cut to 25 seconds from the most active section with half-second fades so the loop joins are inaudible. Three fits were accepted as imperfect rather than chased across other libraries: the fire track is lava not campfire, the magical track leans sci-fi, and the soft synth leans tense. Playback moved to a simple looping player set to mix with other audio.",
     "r": "Every category now plays a real sound and swaps cleanly when the user changes world. The three weak fits were documented as a v2 upgrade, not a blocker.",
     "vis": {
      "type": "bank"
     },
     "status": "Built"
    },
    {
     "phase": "develop",
     "date": "11 Jun 2026",
     "title": "Device is the source of truth; the bucket is a day cache",
     "s": "Worlds were saving references to images and splats hosted in a storage bucket with a 24-hour lifecycle rule. Days later, saved worlds lost their thumbnails, could not re-enter their skybox and failed to regenerate.",
     "t": "Decide once where a saved world's assets truly live.",
     "a": "Thomas confirmed the bucket is deliberately transient. The rule became: every asset a saved world needs, panorama, perspective image, SPZ and PLY, is downloaded to on-device storage immediately after every save path, and completed splat jobs backfill locally. A once-per-launch pass repairs older entries while their URLs are still alive. Drafts intentionally expire at 24 hours to match. Regeneration must re-upload a local file first, never submit a local path.",
     "r": "Every consumption path was verified to read local files. Worlds whose images had already expired could not be repaired, so those now fail fast with a clear message instead of slowly and silently.",
     "vis": {
      "type": "hub",
      "centre": "On-device store",
      "spokes": [
       "Panorama",
       "Perspective image",
       "SPZ splat",
       "PLY object"
      ]
     },
     "status": "Locked"
    },
    {
     "phase": "develop",
     "date": "11 Jun 2026",
     "title": "A timeout is not a failure: keep finished SHARP jobs",
     "s": "SHARP jobs on Replicate sometimes queue for longer than six minutes on a cold start. The app's poll gave up at six minutes and cleared the operation, so a job that later succeeded was forgotten and the card asked the user to pay again.",
     "t": "Separate 'this job failed' from 'we stopped waiting' everywhere the app polls.",
     "a": "Polling was rewritten with adaptive intervals across a thirty-minute budget. A typed error split terminal generation failure from a non-terminal poll timeout. On timeout the operation is suspended, keeping the persisted record so the next activation re-polls and backfills the finished file automatically. A credit refund fires exactly once and only on confirmed failure, through a single function all failure paths route to.",
     "r": "Verified on device: both splats playable from the library with no second charge. A second gap appeared straight after: a suspended job waited for 'next launch' that never came because the process stayed alive, so resume now also runs on every return to foreground.",
     "vis": {
      "type": "timeline",
      "marks": [
       "3 s under 2 min",
       "10 s under 10 min",
       "30 s after",
       "30 min budget"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "develop",
     "date": "11 Jun 2026",
     "title": "Persistent helper window was wrong; go back to ephemeral",
     "s": "Splat spaces render through a CompositorLayer that cannot own dismissal, so an invisible one-point helper window handles exits. A redesign made that helper always alive so the app could recover if it ever had zero scenes.",
     "t": "Stop the main volumetric window appearing uninvited.",
     "a": "Testing showed the always-alive helper received an activation event every time the user dismissed the visionOS Home view, and activation cannot be told apart from an icon tap, so the recovery logic opened the volumetric on every Digital Crown toggle. Worse, a lingering invisible window is exactly what stops visionOS presenting the default scene on icon tap, which had caused the original 'tapped the icon and nothing appeared' bug.",
     "r": "The helper went back to being opened at splat entry and dismissed at exit, with a janitor for strays. Zero scenes after closing the last window is now treated as the correct quit state and visionOS presents the volumetric natively. Marked 'do not regress' in project memory.",
     "vis": {
      "type": "beforeafter",
      "a": [
       "btn-l",
       "xmark"
      ],
      "b": [
       "btn-s",
       "check"
      ]
     },
     "status": "Pivoted"
    },
    {
     "phase": "develop",
     "date": "11 Jun 2026",
     "title": "Invisible splats and silent failures: expired downloads",
     "s": "View Object opened a space showing nothing but passthrough with no UI, then the badge vanished and the card asked for payment again. The next splat entry was also blank and the app needed two force quits. Separately, an old library world's SHARP badge kept disappearing across days.",
     "t": "Find why a 'successful' splat could be empty and why a failure could be invisible.",
     "a": "The download call does not throw on HTTP errors, so an expired bucket object's 404 body had been saved as a splat file. Fixes: validate HTTP status and a minimum size before persisting, throw on zero-point splats so the space auto-exits, add a five-second no-anchor watchdog so the user is never stuck without hand tracking, drop zombie operations older than two hours, and gate every enter button on a valid local file. For the old world, every regeneration referenced a dead image URL and failed silently; failures now show a Retry card with a refund message, and a HEAD check fails fast before submitting.",
     "r": "Fresh worlds' full lifecycle, including headset off, app close and re-entry, was verified as clean. The honest Generate button replaced an enterable empty space.",
     "vis": {
      "type": "badges"
     },
     "status": "Fixed"
    },
    {
     "phase": "develop",
     "date": "11 Jun 2026",
     "title": "Open the window before dismissing the space",
     "s": "Palm-up exit from a splat world intermittently sent the whole app to the visionOS Home view. Reopening the app landed on the correct card, so the exit logic had run, just while the app was backgrounded.",
     "t": "Remove the race that left the app with no visible scene.",
     "a": "The exit routine awaited dismissal of the immersive space before opening the main window. In that gap the app's only scene was the invisible helper, and visionOS sometimes backgrounded it. The order was reversed: open or reuse the main window first, then await dismissal. Mixed immersion allows a window and a space to coexist, so the app always has a visible scene across the transition.",
     "r": "The cost is a brief flash of the card during teardown, accepted as fine. Palm-up exit from all three immersive spaces now returns to the launching card with no blank screens or duplicate windows.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Palm up",
       "Open card window",
       "Dismiss space",
       "Card visible"
      ]
     },
     "status": "Fixed"
    },
    {
     "phase": "deliver",
     "date": "6 Jun 2026",
     "title": "Test in-app purchases without real money or a second headset",
     "s": "WAGA sells consumable credit packs. Thomas needed to test the free-tier paywall and a real purchase on one Vision Pro without being charged.",
     "t": "Write a testing path from local mock to TestFlight that fits a solo developer.",
     "a": "A playbook was verified against Apple's documentation: a local StoreKit configuration file for the fastest loop, sandbox tester accounts for a clean 'new user' state on device, and internal-only TestFlight so no review wait is needed. One visionOS-specific decision came out of it: trigger the paywall from a window, never from inside an immersive space, where the purchase sheet has nothing to attach to.",
     "r": "The checklist also captured the launch gate of turning App Attest enforcement on before submission, and the gotcha that consumed credits never restore, so the local ledger is the balance of record.",
     "vis": {
      "type": "sequence",
      "steps": [
       "Local StoreKit",
       "Sandbox on device",
       "TestFlight internal",
       "Submit"
      ]
     },
     "status": "Planned"
    },
    {
     "phase": "deliver",
     "date": "11 Jun 2026",
     "title": "Persistence verified on device across every round trip",
     "s": "After a week of fixes to polling, storage and window handling, the question was whether a saved world really survives everything a user does to it.",
     "t": "Confirm the whole lifecycle on the headset, not in the simulator.",
     "a": "Thomas tested on device: generation badges survived navigation and immersive round trips, the library card showed both the 3D and Object badges, and both splats played from the library with no re-payment. Palm-up exit from all three immersive spaces returned to the launching card.",
     "r": "Marked WORKING in project memory. It is the first point where the paid part of the product could be trusted end to end.",
     "vis": {
      "type": "burst"
     },
     "status": "Built"
    },
    {
     "phase": "deliver",
     "date": "11 Jun 2026",
     "title": "A retest list, kept honest",
     "s": "Several fixes landed in one day and could not all be verified in the same session.",
     "t": "Record exactly what still needs a device test rather than calling it done.",
     "a": "Project memory lists the open retests: a cold-start SHARP job over six minutes must keep its badge, killing the app mid-generation must recover on relaunch, a genuinely failed job must still show Retry, toggling the Crown menu must not show the volumetric, and closing the last window then tapping the icon must present it. Known low-priority issues are listed too, including a navigation shader that fails to compile on device.",
     "r": "Nothing marked fixed is presented as verified until it has been run on the headset.",
     "vis": {
      "type": "labels"
     },
     "status": "Open"
    },
    {
     "phase": "deliver",
     "date": "Jun 2026",
     "title": "Next: ship skybox worlds now, adopt visionOS 27 for full 3D",
     "s": "With the pipeline stable, the roadmap splits into what can ship on visionOS 26 and what waits for the autumn release.",
     "t": "Order the remaining work so each step reuses the last.",
     "a": "The MVP phase is prompt to 8K skybox world: an upscale step in the Worker, a local asset cache with progressive 2K to 8K swap and a fade-from-black entry, and speech input on the prompt screen. v2 adds presence: soundscapes wired to categories, a ground plane, and an on-device depth toggle. v3 moves splat worlds into RealityKit's native Gaussian splatting once visionOS 27 ships, unifying exit, audio and ground across tiers, and explores exporting worlds as system custom environments if Apple exposes it.",
     "r": "Open checks remain against the Xcode 27 beta: whether the spatial scene API accepts panoramas, and which splat formats RealityKit will load.",
     "vis": {
      "type": "timeline",
      "marks": [
       "MVP · 8K skybox",
       "v2 · presence",
       "v3 · native splats",
       "Custom environments?"
      ]
     },
     "status": "Planned"
    }
   ]
  },
};
