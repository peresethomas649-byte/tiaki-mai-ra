function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// components.jsx — shared primitives for KINSafe site
// Babel-transpiled. All exported to window at the end.

const {
  useEffect,
  useRef,
  useState,
  useMemo
} = React;

// ─── useLingeringValue: keep a value mounted briefly after deactivation ───
// Used by Hero/Demo/PPE/HowItWorks/AppFlow card-fade-out animations.
// When `value` becomes the inactive sentinel, the returned `display` value
// lingers for `lingerMs` so React doesn't unmount the inner content before
// the wrapper's CSS transition has a chance to play out.
//
// Usage:
//   const [active, setActive] = useState(null);
//   const display = useLingeringValue(active, 320);
//   <div style={{ opacity: active ? 1 : 0, transition: 'opacity 320ms' }}>
//     {display ? <Content for={display} /> : null}
//   </div>
function useLingeringValue(value, lingerMs = 320, isInactive = v => v == null) {
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    if (!isInactive(value)) {
      setDisplay(value);
      return;
    }
    const t = setTimeout(() => setDisplay(value), lingerMs);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, lingerMs]);
  return display;
}

// ─── Logo: shared eye-dot mark used in NavBar + Footer ─────────
function Logo({
  size = 28
}) {
  const inset = Math.max(2, Math.round(size * 0.14));
  const dot = Math.max(4, Math.round(size * 0.21));
  return /*#__PURE__*/React.createElement("span", {
    className: "relative inline-flex rounded-full overflow-hidden items-center justify-center",
    style: {
      width: size,
      height: size,
      background: "linear-gradient(135deg, var(--ss-navy), #2a3a55)"
    },
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute rounded-full",
    style: {
      inset,
      background: "var(--ss-yellow)",
      opacity: 0.95
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute rounded-full",
    style: {
      width: dot,
      height: dot,
      background: "var(--ss-navy)"
    }
  }));
}

// ─── Reveal: fades in on scroll ───────────────────────────────
function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("in"), delay);
          io.unobserve(el);
        }
      });
    }, {
      threshold: 0.15
    });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: `reveal ${className}`
  }, rest), children);
}

// ─── Section heading ──────────────────────────────────────────
function SectionHead({
  eyebrow,
  title,
  sub,
  align = "left",
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "eyebrow mb-4"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, title), sub ? /*#__PURE__*/React.createElement("p", {
    className: "mt-5 text-lg md:text-xl text-[color:var(--ss-muted)] leading-relaxed"
  }, sub) : null);
}

// ─── Glass card with mouse-light effect ───────────────────────
function GlassCard({
  children,
  className = "",
  interactive = true,
  ...rest
}) {
  const ref = useRef(null);
  const onMove = e => {
    if (!interactive) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    onMouseMove: onMove,
    className: `glass relative overflow-hidden ${interactive ? "transition-all duration-500 hover:-translate-y-1" : ""} ${className}`
  }, rest), interactive ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    className: "pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500",
    style: {
      background: "radial-gradient(280px circle at var(--mx,50%) var(--my,50%), rgba(251,207,44,0.18), transparent 60%)"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, children));
}

// ─── Tiny inline icon set (no external deps) ─────────────────
function Icon({
  name,
  className = "w-5 h-5",
  stroke = 1.6
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  switch (name) {
    case "scan":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M4 8V6a2 2 0 0 1 2-2h2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M20 8V6a2 2 0 0 0-2-2h-2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4 16v2a2 2 0 0 0 2 2h2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M20 16v2a2 2 0 0 1-2 2h-2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 12h8"
      }));
    case "shield":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m9 12 2 2 4-4"
      }));
    case "vest":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M8 4 4 7v13h16V7l-4-3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 4v16M16 4v16"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 4v6"
      }));
    case "layers":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "m12 3 9 5-9 5-9-5 9-5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m3 13 9 5 9-5"
      }));
    case "pulse":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M3 12h4l2-7 4 14 2-7h6"
      }));
    case "chart":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M4 20V10M10 20V4M16 20v-7M22 20H2"
      }));
    case "arrow":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M5 12h14M13 6l6 6-6 6"
      }));
    case "play":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M6 4v16l14-8z"
      }));
    case "phone":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "6",
        y: "2",
        width: "12",
        height: "20",
        rx: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M11 18h2"
      }));
    case "ar":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M3 7l9-4 9 4-9 4-9-4Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 7v10l9 4 9-4V7"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 11v10"
      }));
    case "alert":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M12 3 2 21h20L12 3Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 10v5M12 18v.01"
      }));
    default:
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }));
  }
}

// ─── NavBar (sticky liquid glass) ────────────────────────────
function NavBar({
  links
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: "fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-24px)] max-w-6xl"
  }, /*#__PURE__*/React.createElement("nav", {
    className: `ss-nav glass-thin px-4 sm:px-5 py-3 flex items-center justify-between transition-all duration-500 ${scrolled ? "shadow-lg" : ""}`,
    style: {
      borderRadius: "999px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "flex items-center gap-2 font-semibold tracking-tight"
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 28
  }), /*#__PURE__*/React.createElement("span", null, "KINSafe")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex items-center gap-6 text-sm text-[color:var(--ss-muted)]"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    className: "hover:text-[color:var(--ss-navy)] transition"
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    className: "btn btn-primary !py-2 !px-4 !text-sm"
  }, "Get the app")), /*#__PURE__*/React.createElement("button", {
    className: "md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/60",
    onClick: () => setMobileOpen(v => !v),
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block w-4 h-[2px] bg-[color:var(--ss-navy)] relative"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-1.5 left-0 w-4 h-[2px] bg-[color:var(--ss-navy)]"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute top-1.5 left-0 w-4 h-[2px] bg-[color:var(--ss-navy)]"
  })))), mobileOpen ? /*#__PURE__*/React.createElement("div", {
    className: "md:hidden glass mt-2 p-4 flex flex-col gap-3"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    onClick: () => setMobileOpen(false),
    className: "text-sm"
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: "#cta",
    onClick: () => setMobileOpen(false),
    className: "btn btn-primary justify-center"
  }, "Get the app")) : null);
}

// ─── Mouse-follow glow wrapper ────────────────────────────────
function MouseGlow({
  children,
  className = "",
  color = "rgba(251,207,44,0.18)"
}) {
  const ref = useRef(null);
  const onMove = e => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${e.clientX - r.left}px`);
    el.style.setProperty("--gy", `${e.clientY - r.top}px`);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseMove: onMove,
    className: `relative ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    className: "pointer-events-none absolute inset-0",
    style: {
      background: `radial-gradient(420px circle at var(--gx,50%) var(--gy,50%), ${color}, transparent 65%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, children));
}
Object.assign(window, {
  Reveal,
  SectionHead,
  GlassCard,
  Icon,
  NavBar,
  MouseGlow,
  Logo,
  useLingeringValue
});// sections.jsx — all KINSafe sections
// Reads window.SS_DATA, uses primitives from components.jsx.

const D = window.SS_DATA;

// ───────────────────────────────────────────────────────────────
// 1. HERO
// ───────────────────────────────────────────────────────────────
function HeroPhone({
  activeHazard,
  onHover
}) {
  // virtual phone with AR construction scene.
  // `displayHazard` lingers for one transition cycle after activeHazard
  // clears, so the tooltip's content stays mounted through the fade-out.
  const displayHazard = useLingeringValue(activeHazard, 320);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-[420px] mx-auto aspect-[9/19] anim-float",
    style: {
      filter: "drop-shadow(0 40px 60px rgba(10,22,40,0.25))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 rounded-[44px] p-[10px] ss-phone-body",
    style: {
      background: "linear-gradient(160deg, #1a2638, #0a1628)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-[10px] rounded-[36px] overflow-hidden",
    style: {
      background: "linear-gradient(180deg, #cfd6e2 0%, #94a0b8 60%, #6e7e9c 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 top-0 h-1/2 ss-scene-sky",
    style: {
      background: "linear-gradient(180deg, #d6deec, #a8b6cf)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 bottom-0 h-1/2 ss-scene-ground",
    style: {
      background: "linear-gradient(180deg, #8a96b0, #5b6680)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute",
    style: {
      left: "10%",
      top: "22%",
      width: "30%",
      height: "55%"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 180",
    className: "w-full h-full",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "#142337",
    strokeWidth: "2",
    fill: "none",
    opacity: "0.85"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "5",
    width: "90",
    height: "170"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "55",
    x2: "95",
    y2: "55"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "105",
    x2: "95",
    y2: "105"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "5",
    x2: "50",
    y2: "175"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "5",
    x2: "95",
    y2: "55"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "absolute",
    style: {
      right: "12%",
      bottom: "18%",
      width: "26%",
      height: "20%"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 80",
    className: "w-full h-full",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "40",
    width: "90",
    height: "14",
    fill: "#fbcf2c",
    stroke: "#142337",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "26",
    width: "80",
    height: "14",
    fill: "#fb923c",
    stroke: "#142337",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "15",
    y: "12",
    width: "70",
    height: "14",
    fill: "#fbcf2c",
    stroke: "#142337",
    strokeWidth: "1.5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute",
    style: {
      left: "44%",
      bottom: "16%",
      width: "12%",
      height: "32%"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 60 160",
    className: "w-full h-full",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "22",
    r: "14",
    fill: "#fbcf2c",
    stroke: "#142337",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "36",
    width: "32",
    height: "50",
    fill: "#fb923c",
    stroke: "#142337",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "86",
    width: "14",
    height: "60",
    fill: "#142337"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "32",
    y: "86",
    width: "14",
    height: "60",
    fill: "#142337"
  }))), /*#__PURE__*/React.createElement("svg", {
    className: "absolute inset-0 w-full h-full ss-ar-grid",
    viewBox: "0 0 100 180",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "grdLine",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#fff",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#fff",
    stopOpacity: "0.55"
  }))), [0, 1, 2, 3, 4, 5, 6].map(i => /*#__PURE__*/React.createElement("line", {
    key: `h${i}`,
    x1: "0",
    x2: "100",
    y1: 100 + i * 12,
    y2: 100 + i * 12,
    stroke: "url(#grdLine)",
    strokeWidth: "0.4"
  })), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => /*#__PURE__*/React.createElement("line", {
    key: `v${i}`,
    x1: i * 10,
    x2: 50 + (i - 5) * 4,
    y1: "180",
    y2: "100",
    stroke: "url(#grdLine)",
    strokeWidth: "0.4"
  }))), D.hazards.slice(0, 3).map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: h.id,
    className: `hazard-dot ${activeHazard === h.id ? "active" : ""}`,
    style: {
      left: `${h.x}%`,
      top: `${h.y}%`
    },
    onMouseEnter: () => onHover(h.id),
    onMouseLeave: () => onHover(null),
    onTouchStart: () => onHover(h.id)
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-thin px-2 py-1 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
  }), "AR \xB7 TRACKING"), /*#__PURE__*/React.createElement("div", {
    className: "glass-thin px-2 py-1"
  }, "3/5 HAZARDS")), /*#__PURE__*/React.createElement("div", {
    className: "glass-thin absolute z-20",
    style: {
      top: "10%",
      right: "4%",
      width: "56%",
      padding: "10px 12px",
      borderRadius: 14,
      pointerEvents: "none",
      opacity: activeHazard ? 1 : 0,
      transform: activeHazard ? "translateY(0)" : "translateY(-6px)",
      transition: "opacity 320ms cubic-bezier(0.4, 0, 0.2, 1), transform 320ms cubic-bezier(0.4, 0, 0.2, 1)"
    }
  }, (() => {
    const h = displayHazard ? D.hazards.find(x => x.id === displayHazard) : null;
    if (!h) return null;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1.5 mb-0.5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full bg-[color:var(--ss-yellow)]"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] font-mono uppercase tracking-widest text-[color:var(--ss-muted)]"
    }, "Hazard detected")), /*#__PURE__*/React.createElement("div", {
      className: "font-semibold text-[12px] leading-tight text-[color:var(--ss-fg)]"
    }, h.label), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] leading-snug text-[color:var(--ss-muted)] mt-1"
    }, h.body));
  })()), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-3 left-3 right-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-thin p-3 flex items-center gap-3",
    style: {
      borderRadius: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-9 h-9 rounded-full bg-[var(--ss-yellow)] flex items-center justify-center text-[var(--ss-navy)]"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono text-[color:var(--ss-muted)]"
  }, "CURRENT TASK"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-semibold text-[color:var(--ss-navy)] truncate"
  }, "Identify 5 hazards within 60s")), /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-xs text-[color:var(--ss-navy)]"
  }, "00:42")))), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 pointer-events-none",
    style: {
      background: "linear-gradient(115deg, rgba(255,255,255,0.25) 0%, transparent 25%, transparent 75%, rgba(255,255,255,0.15) 100%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black/95 ss-phone-notch"
  })));
}
function Hero() {
  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  // Visibility flag: pause the auto-cycle interval whenever the hero
  // is scrolled offscreen. Saves CPU/battery on long-scroll mobile users.
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!sectionRef.current || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.1
    });
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  // Auto-cycle hazards every 3.5s when the user isn't interacting AND the
  // hero is visible.
  useEffect(() => {
    if (active || !visible) return;
    const ids = D.hazards.slice(0, 3).map(h => h.id);
    let i = 0;
    const t = setInterval(() => {
      const id = ids[i % ids.length];
      setActive(id);
      setTimeout(() => setActive(null), 1400);
      i++;
    }, 3500);
    return () => clearInterval(t);
  }, [active, visible]);
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    ref: sectionRef,
    className: "relative section-pad pt-[140px] sm:pt-[160px]"
  }, /*#__PURE__*/React.createElement(MouseGlow, {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow mb-5"
  }, D.hero.eyebrow)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    className: "h-display whitespace-pre-line"
  }, D.hero.headline)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    className: "mt-7 text-lg md:text-xl text-[color:var(--ss-muted)] max-w-xl leading-relaxed"
  }, D.hero.sub)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-9 flex flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#how",
    className: "btn btn-primary"
  }, D.hero.primaryCta, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#flow",
    className: "btn btn-glass"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    className: "w-4 h-4"
  }), D.hero.secondaryCta))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 320
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-12 text-sm text-[color:var(--ss-muted)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sm:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-xs tracking-widest uppercase mb-3"
  }, "Built for"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-x-6 gap-y-2"
  }, /*#__PURE__*/React.createElement("span", null, "Apprentices"), /*#__PURE__*/React.createElement("span", null, "HSE Teams"), /*#__PURE__*/React.createElement("span", null, "Training Providers"), /*#__PURE__*/React.createElement("span", null, "Site Educators"))), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:flex flex-wrap gap-x-8 gap-y-3 items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-xs tracking-widest uppercase"
  }, "Built for"), /*#__PURE__*/React.createElement("span", null, "Apprentices"), /*#__PURE__*/React.createElement("span", {
    className: "opacity-30"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "HSE Teams"), /*#__PURE__*/React.createElement("span", {
    className: "opacity-30"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Training Providers"), /*#__PURE__*/React.createElement("span", {
    className: "opacity-30"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Site Educators"))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement(HeroPhone, {
    activeHazard: active,
    onHover: setActive
  })))));
}

// ───────────────────────────────────────────────────────────────
// 2. PROBLEM
// ───────────────────────────────────────────────────────────────
function Problem() {
  return /*#__PURE__*/React.createElement("section", {
    id: "problem",
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "The Problem",
    title: "Site safety can't be learned from a slide deck.",
    sub: "Traditional construction safety training is passive, text-heavy, and disconnected from real site conditions. KINSafe makes training active, spatial, and scenario-based."
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
  }, D.problem.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.title,
    delay: i * 80
  }, /*#__PURE__*/React.createElement(GlassCard, {
    className: "p-6 h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-xs text-[color:var(--ss-muted)] mb-4"
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-semibold mb-2"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-[color:var(--ss-muted)] leading-relaxed"
  }, p.body)))))));
}

// ───────────────────────────────────────────────────────────────
// 3. HOW IT WORKS — interactive flow
// ───────────────────────────────────────────────────────────────

// Step preview (mini scene + copy). Used by both the desktop sticky
// pane and the mobile inline accordion.
function HowStepPreview({
  step,
  index,
  total,
  compact
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-xs text-[color:var(--ss-muted)] mb-3"
  }, "STEP ", step.num, " \u2014 PREVIEW"), /*#__PURE__*/React.createElement("h3", {
    className: `font-semibold mb-3 ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`
  }, step.title), /*#__PURE__*/React.createElement("p", {
    className: "text-[color:var(--ss-muted)] leading-relaxed mb-5 text-sm sm:text-base"
  }, step.body), /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[16/10] rounded-2xl overflow-hidden",
    style: {
      background: "linear-gradient(160deg, #142337, #0a1628)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-50",
    style: {
      backgroundImage: "linear-gradient(rgba(251,207,44,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(251,207,44,0.18) 1px, transparent 1px)",
      backgroundSize: "28px 28px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-4 left-4 right-4 flex justify-between text-[10px] font-mono text-white/70"
  }, /*#__PURE__*/React.createElement("span", null, "SCENE \xB7 ", step.id.toUpperCase()), /*#__PURE__*/React.createElement("span", null, "0", index + 1, " / 0", total)), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-thin !bg-white/15 !border-white/30 text-white px-6 py-4 max-w-xs text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-semibold mb-1"
  }, step.num), /*#__PURE__*/React.createElement("div", {
    className: "text-sm opacity-80"
  }, step.title)))));
}
function HowItWorks() {
  // Desktop: step 1 active by default. Mobile accordion: -1 means none open.
  const [active, setActive] = useState(0);
  // `display` lingers 480ms after active goes to -1 so the inner preview
  // stays mounted through the slide-out animation.
  const display = useLingeringValue(active, 480, v => v < 0);
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "How it works",
    title: "From a real room to a complete site safety scenario.",
    sub: "Six steps. Each one anchored to your physical space, scored, and reviewable."
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 lg:hidden space-y-3"
  }, D.flow.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.id,
    delay: i * 50
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive(active === i ? -1 : i),
    className: `w-full text-left glass-thin px-5 py-4 flex items-center gap-4 transition-all duration-300 ${active === i ? "!bg-white !border-white shadow-lg" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `font-mono text-sm w-10 ${active === i ? "text-[color:var(--ss-navy)]" : "text-[color:var(--ss-muted)]"}`
  }, s.num), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold"
  }, s.title)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    className: `w-4 h-4 transition-transform ${active === i ? "rotate-90 text-[color:var(--ss-navy)]" : "text-[color:var(--ss-muted)]"}`
  })), /*#__PURE__*/React.createElement("div", {
    className: `overflow-hidden ${active === i ? "max-h-[720px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`,
    style: {
      transitionProperty: "max-height, opacity, margin-top",
      transitionDuration: "480ms",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  }, display === i ? /*#__PURE__*/React.createElement("div", {
    className: "glass-thin p-5",
    style: {
      borderRadius: 18
    }
  }, /*#__PURE__*/React.createElement(HowStepPreview, {
    step: s,
    index: i,
    total: D.flow.length,
    compact: true
  })) : null))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 hidden lg:grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, D.flow.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.id,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("button", {
    onMouseEnter: () => setActive(i),
    onClick: () => setActive(i),
    className: `w-full text-left glass-thin px-5 py-4 flex items-center gap-4 transition-all duration-300 ${active === i ? "!bg-white !border-white shadow-lg -translate-y-0.5" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `font-mono text-sm w-10 ${active === i ? "text-[color:var(--ss-navy)]" : "text-[color:var(--ss-muted)]"}`
  }, s.num), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold"
  }, s.title)), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    className: `w-4 h-4 transition-transform ${active === i ? "translate-x-1 text-[color:var(--ss-navy)]" : "text-[color:var(--ss-muted)]"}`
  }))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(GlassCard, {
    className: "p-7 lg:sticky lg:top-32"
  }, /*#__PURE__*/React.createElement(HowStepPreview, {
    step: D.flow[active >= 0 ? active : 0],
    index: active >= 0 ? active : 0,
    total: D.flow.length
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-9 left-11 flex gap-1.5"
  }, D.flow.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `h-1 rounded-full transition-all ${i === active ? "w-8 bg-[color:var(--ss-yellow)]" : "w-3 bg-white/30"}`
  }))))))));
}

// ───────────────────────────────────────────────────────────────
// 4. SITE DEMO
// ───────────────────────────────────────────────────────────────
function SiteDemo() {
  const [active, setActive] = useState(null);
  // `display` lingers 500ms after active clears so card content stays
  // mounted through the close animation (480ms transition + 20ms buffer).
  const display = useLingeringValue(active, 500);
  return /*#__PURE__*/React.createElement("section", {
    id: "demo",
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Interactive demo",
    title: "Walk a virtual site. Tap the hazards.",
    sub: "Hover or tap a marker to see how KINSafe surfaces hazard information in-app."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-14 relative aspect-[16/9] rounded-[28px] overflow-hidden glass"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 ss-scene-sky",
    style: {
      background: "linear-gradient(180deg, #b8c3d8 0%, #8a96b0 55%, #5d6a85 100%)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    className: "absolute inset-0 w-full h-full ss-ar-grid",
    viewBox: "0 0 200 100",
    preserveAspectRatio: "none"
  }, [0, 1, 2, 3, 4, 5, 6, 7].map(i => /*#__PURE__*/React.createElement("line", {
    key: `gh${i}`,
    x1: "0",
    x2: "200",
    y1: 55 + i * 6,
    y2: 55 + i * 6,
    stroke: "#fbcf2c",
    strokeWidth: "0.15",
    opacity: 0.3 + i * 0.08
  })), Array.from({
    length: 21
  }).map((_, i) => /*#__PURE__*/React.createElement("line", {
    key: `gv${i}`,
    x1: i * 10,
    x2: 100 + (i - 10) * 1.2,
    y1: "100",
    y2: "55",
    stroke: "#fbcf2c",
    strokeWidth: "0.15",
    opacity: "0.4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute",
    style: {
      left: "12%",
      top: "20%",
      width: "20%",
      height: "60%"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 200",
    className: "w-full h-full",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "#0a1628",
    strokeWidth: "1.5",
    fill: "none",
    opacity: "0.9"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "5",
    width: "90",
    height: "190"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "55",
    x2: "95",
    y2: "55"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "105",
    x2: "95",
    y2: "105"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "155",
    x2: "95",
    y2: "155"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "5",
    x2: "50",
    y2: "195"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "5",
    x2: "95",
    y2: "55"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "95",
    y1: "5",
    x2: "5",
    y2: "55"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "absolute",
    style: {
      left: "30%",
      bottom: "8%",
      width: "40%",
      height: "20%"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 60",
    className: "w-full h-full",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "0,60 200,60 160,0 40,0",
    fill: "#142337",
    opacity: "0.35",
    stroke: "#fbcf2c",
    strokeWidth: "0.6",
    strokeDasharray: "2 2"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute",
    style: {
      right: "8%",
      top: "28%",
      width: "18%",
      height: "45%"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 120",
    className: "w-full h-full",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "60",
    width: "60",
    height: "40",
    fill: "#fb923c",
    stroke: "#0a1628",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "35",
    y: "35",
    width: "30",
    height: "25",
    fill: "#fbcf2c",
    stroke: "#0a1628",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "50",
    y1: "35",
    x2: "80",
    y2: "10",
    stroke: "#0a1628",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "80",
    cy: "10",
    r: "3",
    fill: "#0a1628"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "105",
    r: "6",
    fill: "#0a1628"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "105",
    r: "6",
    fill: "#0a1628"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute",
    style: {
      left: "55%",
      top: "55%",
      width: "12%",
      height: "15%"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 50",
    className: "w-full h-full",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "32",
    width: "96",
    height: "14",
    fill: "#fbcf2c",
    stroke: "#0a1628",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "18",
    width: "84",
    height: "14",
    fill: "#fb923c",
    stroke: "#0a1628",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "4",
    width: "72",
    height: "14",
    fill: "#fbcf2c",
    stroke: "#0a1628",
    strokeWidth: "1.2"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute",
    style: {
      left: "37%",
      top: "55%",
      width: "5%",
      height: "25%"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 60 160",
    className: "w-full h-full",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "22",
    r: "14",
    fill: "#fbcf2c",
    stroke: "#0a1628",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "36",
    width: "32",
    height: "50",
    fill: "#fb923c",
    stroke: "#0a1628",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "86",
    width: "14",
    height: "60",
    fill: "#142337"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "32",
    y: "86",
    width: "14",
    height: "60",
    fill: "#142337"
  }))), D.hazards.map(h => /*#__PURE__*/React.createElement("div", {
    key: h.id,
    className: `hazard-dot ${active === h.id ? "active" : ""}`,
    style: {
      left: `${h.x}%`,
      top: `${h.y}%`
    },
    onMouseEnter: () => setActive(h.id),
    onMouseLeave: () => setActive(null),
    onClick: () => setActive(v => v === h.id ? null : h.id)
  })), (() => {
    const h = display ? D.hazards.find(x => x.id === display) : null;
    const onLeft = h && h.x > 60;
    return /*#__PURE__*/React.createElement("div", {
      className: "glass absolute z-10 max-w-[260px] p-4 hidden sm:block",
      style: {
        left: h ? onLeft ? `calc(${h.x}% - 280px)` : `calc(${h.x}% + 28px)` : "0",
        top: h ? `calc(${h.y}% - 20px)` : "0",
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(-6px)",
        transition: "opacity 320ms cubic-bezier(0.4, 0, 0.2, 1), transform 320ms cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: "none",
        visibility: h ? "visible" : "hidden"
      }
    }, h ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-1.5"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert",
      className: "w-4 h-4 text-[color:var(--ss-orange)]"
    }), /*#__PURE__*/React.createElement("span", {
      className: "eyebrow !text-[10px]"
    }, h.label)), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-[color:var(--ss-navy)] leading-relaxed"
    }, h.body)) : null);
  })(), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-5 left-5 right-5 hidden sm:flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-thin px-3 py-1.5 text-xs font-mono flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
  }), "AR \xB7 LIVE SCENE"), /*#__PURE__*/React.createElement("div", {
    className: "glass-thin px-3 py-1.5 text-xs font-mono"
  }, active ? `1 / ${D.hazards.length} INSPECTED` : `${D.hazards.length} HAZARDS`)), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-5 left-5 right-5 hidden sm:flex items-center justify-between text-xs font-mono text-[color:var(--ss-navy)]/80"
  }, /*#__PURE__*/React.createElement("span", null, "HOVER OR TAP A MARKER"), /*#__PURE__*/React.createElement("span", null, "SCENE \xB7 STRUCTURAL \xB7 FOUNDATION")))), /*#__PURE__*/React.createElement("div", {
    className: `sm:hidden overflow-hidden ${active ? "max-h-[260px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`,
    style: {
      transitionProperty: "max-height, opacity, margin-top",
      transitionDuration: "460ms",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  }, (() => {
    const h = display ? D.hazards.find(x => x.id === display) : null;
    if (!h) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "glass-thin p-4",
      style: {
        borderRadius: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-1.5"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert",
      className: "w-4 h-4 text-[color:var(--ss-orange)]"
    }), /*#__PURE__*/React.createElement("span", {
      className: "eyebrow !text-[10px]"
    }, h.label)), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-[color:var(--ss-navy)] leading-relaxed"
    }, h.body));
  })()), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 sm:hidden grid grid-cols-2 gap-2"
  }, D.hazards.map(h => /*#__PURE__*/React.createElement("button", {
    key: h.id,
    onClick: () => setActive(v => v === h.id ? null : h.id),
    className: `text-left glass-thin px-3 py-2 text-xs transition-colors duration-300 ease-in-out ${active === h.id ? "!bg-[color:var(--ss-yellow)]/30" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold"
  }, h.label))))));
}

// ───────────────────────────────────────────────────────────────
// 5. PPE AVATAR
// ───────────────────────────────────────────────────────────────
function PPEAvatar() {
  const [active, setActive] = useState(null);
  // Linger pattern keeps card content mounted through the fade-out
  // so the close animation stays smooth.
  const display = useLingeringValue(active, 320);
  const positions = {
    head: {
      top: "8%",
      left: "50%"
    },
    eyes: {
      top: "18%",
      left: "50%"
    },
    torso: {
      top: "40%",
      left: "50%"
    },
    hands: {
      top: "50%",
      left: "20%"
    },
    feet: {
      top: "85%",
      left: "50%"
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "ppe",
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "PPE Selection",
    title: "Equip the worker. Get it wrong, fail the scenario.",
    sub: "Tap each piece of PPE to learn what it protects against and when it's required."
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 grid lg:grid-cols-[1fr_1fr] gap-10 items-center"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto w-full max-w-[420px] aspect-[3/4]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-8 bottom-0 h-12 rounded-full",
    style: {
      background: "radial-gradient(closest-side, rgba(10,22,40,0.25), transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 280",
    className: "absolute inset-0 w-full h-full"
  }, /*#__PURE__*/React.createElement("g", {
    style: {
      opacity: active === "helmet" ? 1 : 0.95,
      filter: active === "helmet" ? "drop-shadow(0 0 16px rgba(251,207,44,0.8))" : "none",
      transition: "all 300ms"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M70 38 Q100 10 130 38 L132 50 L68 50 Z",
    fill: "#fbcf2c",
    stroke: "#0a1628",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "64",
    y: "48",
    width: "72",
    height: "6",
    fill: "#fbcf2c",
    stroke: "#0a1628",
    strokeWidth: "2"
  })), /*#__PURE__*/React.createElement("ellipse", {
    cx: "100",
    cy: "68",
    rx: "20",
    ry: "22",
    fill: "#e8c8a8",
    stroke: "#0a1628",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("g", {
    style: {
      opacity: active === "eyes" ? 1 : 0.95,
      filter: active === "eyes" ? "drop-shadow(0 0 14px rgba(251,207,44,0.8))" : "none",
      transition: "all 300ms"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M82 64 Q100 60 118 64 L118 70 Q100 72 82 70 Z",
    fill: "#142337",
    opacity: "0.6",
    stroke: "#0a1628",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "92",
    y: "88",
    width: "16",
    height: "12",
    fill: "#e8c8a8",
    stroke: "#0a1628",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("g", {
    style: {
      opacity: active === "vest" ? 1 : 0.95,
      filter: active === "vest" ? "drop-shadow(0 0 18px rgba(251,207,44,0.9))" : "none",
      transition: "all 300ms"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M60 100 L140 100 L150 180 L50 180 Z",
    fill: "#fb923c",
    stroke: "#0a1628",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "125",
    width: "80",
    height: "6",
    fill: "#f0f4f8"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "155",
    width: "80",
    height: "6",
    fill: "#f0f4f8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "100",
    x2: "100",
    y2: "180",
    stroke: "#0a1628",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "40",
    y: "100",
    width: "20",
    height: "70",
    fill: "#142337",
    stroke: "#0a1628",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "140",
    y: "100",
    width: "20",
    height: "70",
    fill: "#142337",
    stroke: "#0a1628",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("g", {
    style: {
      opacity: active === "gloves" ? 1 : 0.95,
      filter: active === "gloves" ? "drop-shadow(0 0 14px rgba(251,207,44,0.8))" : "none",
      transition: "all 300ms"
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "178",
    rx: "14",
    ry: "10",
    fill: "#fbcf2c",
    stroke: "#0a1628",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "150",
    cy: "178",
    rx: "14",
    ry: "10",
    fill: "#fbcf2c",
    stroke: "#0a1628",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "70",
    y: "180",
    width: "22",
    height: "70",
    fill: "#142337",
    stroke: "#0a1628",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "108",
    y: "180",
    width: "22",
    height: "70",
    fill: "#142337",
    stroke: "#0a1628",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("g", {
    style: {
      opacity: active === "boots" ? 1 : 0.95,
      filter: active === "boots" ? "drop-shadow(0 0 14px rgba(251,207,44,0.8))" : "none",
      transition: "all 300ms"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "64",
    y: "248",
    width: "36",
    height: "14",
    rx: "3",
    fill: "#0a1628",
    stroke: "#fbcf2c",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "100",
    y: "248",
    width: "36",
    height: "14",
    rx: "3",
    fill: "#0a1628",
    stroke: "#fbcf2c",
    strokeWidth: "2"
  }))), D.ppe.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onMouseEnter: () => setActive(p.id),
    onMouseLeave: () => setActive(null),
    onClick: () => setActive(v => v === p.id ? null : p.id),
    className: `hazard-dot`,
    style: {
      ...positions[p.region],
      transform: "translate(-50%, -50%)",
      background: active === p.id ? "var(--ss-orange)" : "var(--ss-yellow)"
    },
    "aria-label": p.label
  })), /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden absolute glass-thin z-20",
    style: {
      top: "0%",
      right: "0%",
      width: "36%",
      padding: "8px 10px",
      borderRadius: 12,
      pointerEvents: "none",
      opacity: active ? 1 : 0,
      transform: active ? "translateY(0)" : "translateY(-6px)",
      transition: "opacity 320ms cubic-bezier(0.4, 0, 0.2, 1), transform 320ms cubic-bezier(0.4, 0, 0.2, 1)"
    }
  }, (() => {
    const p = display ? D.ppe.find(x => x.id === display) : null;
    if (!p) return null;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "text-[8px] font-mono uppercase tracking-widest text-[color:var(--ss-muted)]"
    }, "PPE \xB7 Required"), /*#__PURE__*/React.createElement("div", {
      className: "font-semibold text-[11px] leading-tight mt-0.5 text-[color:var(--ss-fg)]"
    }, p.label), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] leading-snug text-[color:var(--ss-muted)] mt-1"
    }, p.body));
  })()))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 hidden lg:block"
  }, D.ppe.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.id,
    delay: i * 60
  }, /*#__PURE__*/React.createElement("button", {
    onMouseEnter: () => setActive(p.id),
    onClick: () => setActive(v => v === p.id ? null : p.id),
    className: `w-full text-left glass-thin p-5 transition-all duration-300 ${active === p.id ? "!bg-white shadow-lg -translate-y-0.5" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${active === p.id ? "bg-[color:var(--ss-yellow)]" : "bg-[color:var(--ss-bg-deep)]"}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.id === "vest" ? "vest" : p.id === "helmet" ? "shield" : "scan",
    className: "w-5 h-5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold mb-1"
  }, p.label), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-[color:var(--ss-muted)]"
  }, p.body))))))))));
}

// ───────────────────────────────────────────────────────────────
// 6. SCROLL SHOWCASE
// ───────────────────────────────────────────────────────────────
function ScrollShowcase() {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -r.top / total));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const stepIndex = Math.min(D.scrollSteps.length - 1, Math.floor(progress * D.scrollSteps.length * 0.999));
  const step = D.scrollSteps[stepIndex];
  return /*#__PURE__*/React.createElement("section", {
    id: "scroll",
    ref: wrapRef,
    className: "relative",
    style: {
      height: "320vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-frame section-pad !pt-0 !pb-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto h-full grid lg:grid-cols-[1fr_1fr] gap-10 items-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow mb-4"
  }, "Scroll showcase"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "From real space to AR training."), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 text-base sm:text-lg text-[color:var(--ss-muted)] max-w-xl leading-relaxed"
  }, "A guided scroll-based sequence shows how KINSafe transforms a learner's physical space into an interactive construction safety training environment."), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 space-y-3 max-w-md hidden lg:block"
  }, D.scrollSteps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    className: `flex items-start gap-4 transition-all duration-500 ${i === stepIndex ? "opacity-100 translate-x-0" : "opacity-40"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm flex-shrink-0 transition-colors ${i === stepIndex ? "bg-[color:var(--ss-yellow)] text-[color:var(--ss-navy)]" : "bg-white/60 text-[color:var(--ss-muted)]"}`
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold"
  }, s.label), i === stepIndex ? /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-[color:var(--ss-muted)] mt-1"
  }, s.body) : null))))), /*#__PURE__*/React.createElement("div", {
    className: "relative aspect-[4/5] sm:aspect-[16/12] glass-dark overflow-hidden",
    style: {
      borderRadius: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 opacity-25",
    style: {
      backgroundImage: "linear-gradient(rgba(251,207,44,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,207,44,0.5) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
      transform: `translateY(${(progress - 0.5) * -40}px)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-5 left-5 right-5 flex justify-between text-[10px] font-mono text-white/70"
  }, /*#__PURE__*/React.createElement("span", null, "SCROLL \xB7 SCENE TRANSITION"), /*#__PURE__*/React.createElement("span", null, String(stepIndex + 1).padStart(2, "0"), " / 0", D.scrollSteps.length)), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-white/90 text-[clamp(80px,18vw,200px)] leading-none",
    style: {
      transform: `scale(${0.9 + progress * 0.2})`
    }
  }, step.n), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-white/80 text-lg"
  }, step.label))), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-6 right-6 bottom-6 glass-thin !bg-white/10 !border-white/15 p-4",
    style: {
      transform: `translateY(${(1 - progress) * 30}px)`,
      opacity: 0.8 + progress * 0.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono text-white/60 uppercase tracking-widest mb-1"
  }, "Insert your asset"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-white/90"
  }, "Replace this frame with a Lottie file, video, 3D scene, or live app capture.")), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 right-0 h-1 bg-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-[color:var(--ss-yellow)] transition-all",
    style: {
      width: `${progress * 100}%`
    }
  }))))));
}

// ───────────────────────────────────────────────────────────────
// 7. FEATURES
// ───────────────────────────────────────────────────────────────
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Features",
    title: "Everything you need to build site-ready instincts."
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, D.features.map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: f.title,
    delay: i * 70
  }, /*#__PURE__*/React.createElement(GlassCard, {
    className: "p-7 h-full group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-12 h-12 rounded-2xl flex items-center justify-center mb-5 overflow-hidden",
    style: {
      background: "linear-gradient(135deg, rgba(251,207,44,0.35), rgba(251,146,60,0.25))"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    className: "w-6 h-6 text-[color:var(--ss-navy)] relative z-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 shimmer opacity-0 group-hover:opacity-100"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-semibold mb-2"
  }, f.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-[color:var(--ss-muted)] leading-relaxed"
  }, f.body)))))));
}

// ───────────────────────────────────────────────────────────────
// 8. MODULES
// ───────────────────────────────────────────────────────────────
function Modules() {
  const [open, setOpen] = useState(null);
  return /*#__PURE__*/React.createElement("section", {
    id: "modules",
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Training modules",
    title: "Eight scenario-based modules. More each quarter."
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
  }, D.modules.map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.name,
    delay: i * 50
  }, /*#__PURE__*/React.createElement("button", {
    onMouseEnter: () => setOpen(m.name),
    onMouseLeave: () => setOpen(null),
    onClick: () => setOpen(v => v === m.name ? null : m.name),
    className: "text-left w-full"
  }, /*#__PURE__*/React.createElement(GlassCard, {
    className: "p-5 h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 font-mono text-xs text-[color:var(--ss-muted)] mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: `w-1.5 h-1.5 rounded-full ${m.level === "Foundation" ? "bg-emerald-500" : m.level === "Intermediate" ? "bg-[color:var(--ss-yellow)]" : "bg-[color:var(--ss-orange)]"}`
  }), m.level, " \xB7 ", m.time), /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-base mb-2"
  }, m.name), /*#__PURE__*/React.createElement("div", {
    className: `text-sm text-[color:var(--ss-muted)] overflow-hidden transition-all duration-500 ${open === m.name ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`
  }, m.body))))))));
}

// ───────────────────────────────────────────────────────────────
// 9. APP FLOW (premium walkthrough)
// ───────────────────────────────────────────────────────────────
function AppFlow() {
  // Click-toggle (works on touch + desktop). -1 = nothing open.
  // The detail card lives BELOW the pill row instead of as an absolute
  // popup, so it never floats over the next pill on mobile.
  const [active, setActive] = useState(-1);
  const stepBody = i => {
    if (i < 0) return "";
    return `Stage ${i + 1} of ${D.appFlow.length}. ${D.appFlow[i] === "Review Results" ? "Score breakdown by hazard, time, and PPE accuracy." : `Continue to ${D.appFlow[i + 1] || "summary"}.`}`;
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "flow",
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "App flow",
    title: "One unbroken journey from start to review."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-12 glass p-6 sm:p-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-x-2 gap-y-4"
  }, D.appFlow.map((step, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: step
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive(active === i ? -1 : i),
    onMouseEnter: () => {
      if (window.matchMedia("(hover: hover)").matches) setActive(i);
    },
    className: `relative px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out ${active === i ? "bg-[color:var(--ss-navy)] text-white -translate-y-0.5 shadow-lg" : "bg-white/60 text-[color:var(--ss-navy)]"}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[10px] mr-2 opacity-60"
  }, String(i + 1).padStart(2, "0")), step), i < D.appFlow.length - 1 ? /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    className: "w-4 h-4 text-[color:var(--ss-muted)] hidden sm:block"
  }) : null))), /*#__PURE__*/React.createElement("div", {
    className: `overflow-hidden transition-all ease-in-out ${active >= 0 ? "max-h-[200px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}`,
    style: {
      transitionDuration: "420ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-thin p-4 max-w-xl mx-auto text-center text-sm text-[color:var(--ss-navy)]"
  }, active >= 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-[10px] tracking-widest uppercase text-[color:var(--ss-muted)] mb-1"
  }, String(active + 1).padStart(2, "0"), " \xB7 ", D.appFlow[active]), /*#__PURE__*/React.createElement("div", null, stepBody(active))) : null))))));
}

// ───────────────────────────────────────────────────────────────
// 10. ANALYTICS
// ───────────────────────────────────────────────────────────────
function Ring({
  value,
  label,
  delta,
  unit
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          let v = 0;
          const target = typeof value === "number" ? value : parseFloat(value);
          const t = setInterval(() => {
            v += target / 30;
            if (v >= target) {
              v = target;
              clearInterval(t);
            }
            setShown(v);
          }, 30);
          io.unobserve(el);
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  const pct = unit === "%" ? shown : shown / (value * 1.4) * 100;
  const r = 38;
  const c = 2 * Math.PI * r;
  const off = c - Math.min(100, pct) / 100 * c;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "96",
    height: "96",
    viewBox: "0 0 100 100",
    className: "flex-shrink-0"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: r,
    fill: "none",
    stroke: "rgba(10,22,40,0.08)",
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: r,
    fill: "none",
    stroke: "url(#ringGrad)",
    strokeWidth: "8",
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: off,
    transform: "rotate(-90 50 50)",
    style: {
      transition: "stroke-dashoffset 60ms linear"
    }
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ringGrad",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#fbcf2c"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#fb923c"
  }))), /*#__PURE__*/React.createElement("text", {
    x: "50",
    y: "56",
    textAnchor: "middle",
    className: "font-semibold",
    fontSize: "18",
    fill: "#0a1628"
  }, Math.round(shown), unit === "%" ? "%" : "")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-[color:var(--ss-muted)] mt-1"
  }, delta)));
}
function Analytics() {
  const bars = D.hazardOverTime;
  // Scroll-triggered chart animation — bars rise from 0 to their target height
  // when the dashboard enters the viewport. We DON'T animate on mount because
  // that fires before the user can see it.
  const [chartActive, setChartActive] = React.useState(false);
  const chartRef = React.useRef(null);
  React.useEffect(() => {
    if (!chartRef.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setChartActive(true);
    }, {
      threshold: 0.4
    });
    obs.observe(chartRef.current);
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "analytics",
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Future vision",
    title: "Adaptive learning, surfaced on a dashboard.",
    sub: "As a learner completes scenarios, KINSafe builds a picture of strengths, gaps, and the modules they should retake."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement("div", {
    ref: chartRef,
    className: "mt-14 glass-dark p-6 sm:p-10 relative overflow-hidden",
    style: {
      borderRadius: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-xs text-white/60 uppercase tracking-widest"
  }, "Cohort dashboard"), /*#__PURE__*/React.createElement("div", {
    className: "text-xl font-semibold mt-1"
  }, "Apprentices \xB7 Q3 cohort")), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:flex items-center gap-2 text-xs font-mono text-white/60"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
  }), "LIVE")), /*#__PURE__*/React.createElement("div", {
    className: "grid lg:grid-cols-[1fr_1.4fr] gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 glass-thin !bg-white/5 !border-white/10 p-5"
  }, D.metrics.map(m => /*#__PURE__*/React.createElement(Ring, {
    key: m.label,
    value: m.value,
    unit: m.unit,
    label: m.label,
    delta: m.delta
  }))), /*#__PURE__*/React.createElement("div", {
    className: "glass-thin !bg-white/5 !border-white/10 p-5 flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-white/80 font-semibold"
  }, "Hazard recognition over time"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-mono text-white/50"
  }, "7 DAYS")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-stretch gap-2 h-[200px] sm:h-[220px]"
  }, bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "flex-1 flex flex-col items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 w-full flex items-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ss-bar w-full rounded-t-md transition-all ease-out",
    style: {
      height: chartActive ? `${b}%` : "0%",
      transitionDuration: "1100ms",
      transitionDelay: `${i * 90}ms`,
      background: "linear-gradient(180deg, var(--ss-yellow), color-mix(in oklab, var(--ss-orange) 60%, transparent))"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono text-white/50"
  }, "D", i + 1)))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex flex-wrap gap-2"
  }, ["Strengths", "Gaps", "Recommended", "Streak"].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono text-white/80"
  }, t)))))))));
}

// ───────────────────────────────────────────────────────────────
// 11. TARGET USERS
// ───────────────────────────────────────────────────────────────
function Users() {
  return /*#__PURE__*/React.createElement("section", {
    id: "users",
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Who it's for",
    title: "Built for everyone who steps onto, or runs, a site."
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, D.users.map((u, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: u.title,
    delay: i * 60
  }, /*#__PURE__*/React.createElement(GlassCard, {
    className: "p-6 h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
    style: {
      background: "linear-gradient(135deg, rgba(10,22,40,0.9), rgba(20,35,55,0.7))"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[color:var(--ss-yellow)] font-mono text-xs"
  }, "0", i + 1)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold"
  }, u.title), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-[color:var(--ss-muted)] mt-1.5 leading-relaxed"
  }, u.body)))))))));
}

// ───────────────────────────────────────────────────────────────
// 12. CTA
// ───────────────────────────────────────────────────────────────
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    id: "cta",
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "glass-dark relative overflow-hidden text-center px-8 py-16 sm:py-24",
    style: {
      borderRadius: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-20 -right-20 w-80 h-80 rounded-full",
    style: {
      background: "radial-gradient(closest-side, rgba(251,207,44,0.5), transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-20 -left-20 w-80 h-80 rounded-full",
    style: {
      background: "radial-gradient(closest-side, rgba(251,146,60,0.4), transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow !text-white/60 mb-4"
  }, "Ready when you are"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section text-white max-w-3xl mx-auto"
  }, D.cta.headline), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 text-lg text-white/70 max-w-2xl mx-auto"
  }, D.cta.sub), /*#__PURE__*/React.createElement("div", {
    className: "mt-9 flex justify-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "btn btn-yellow"
  }, D.cta.button, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    className: "w-4 h-4"
  }))))))));
}

// ───────────────────────────────────────────────────────────────
// 13. FOOTER
// ───────────────────────────────────────────────────────────────
function Footer() {
  const links = [{
    label: "About",
    href: "#problem"
  }, {
    label: "Features",
    href: "#features"
  }, {
    label: "Training Flow",
    href: "#flow"
  }, {
    label: "Modules",
    href: "#modules"
  }, {
    label: "Contact",
    href: "#cta"
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "section-pad !pt-12 !pb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto glass-thin px-6 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 28
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold"
  }, "KINSafe"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-[color:var(--ss-muted)]"
  }, "AR construction safety training \xB7 iOS"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-x-6 gap-y-2 text-sm text-[color:var(--ss-muted)]"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    className: "hover:text-[color:var(--ss-navy)] transition"
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-[color:var(--ss-muted)] font-mono"
  }, "\xA9 2026 \xB7 KINSafe")));
}
Object.assign(window, {
  Hero,
  Problem,
  HowItWorks,
  SiteDemo,
  PPEAvatar,
  ScrollShowcase,
  Features,
  Modules,
  AppFlow,
  Analytics,
  Users,
  CTA,
  Footer
});// app.jsx — production App entry.
// Previously this file owned a dev-only tweaks panel that drove every
// CSS variable and body[data-*] attribute live. For production we baked
// those values into styles.css :root and removed the panel + the runtime
// CSS-var setter. This file is now just the component tree.

function App() {
  const navLinks = [{
    label: "How",
    href: "#how"
  }, {
    label: "Demo",
    href: "#demo"
  }, {
    label: "Features",
    href: "#features"
  }, {
    label: "Modules",
    href: "#modules"
  }, {
    label: "Analytics",
    href: "#analytics"
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, {
    links: navLinks
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Problem, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(SiteDemo, null), /*#__PURE__*/React.createElement(PPEAvatar, null), /*#__PURE__*/React.createElement(ScrollShowcase, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Modules, null), /*#__PURE__*/React.createElement(AppFlow, null), /*#__PURE__*/React.createElement(Analytics, null), /*#__PURE__*/React.createElement(Users, null), /*#__PURE__*/React.createElement(CTA, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));