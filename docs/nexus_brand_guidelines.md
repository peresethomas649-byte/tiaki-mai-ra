# NEXUS — Brand Design & Colour Palette Guidelines

> [!NOTE]
> Extracted from reference screenshot of the NEXUS website hero section. Use this as a prompt-ready design system when instructing an LLM to build or replicate this aesthetic.

---

## 1. Brand Identity

| Attribute | Detail |
|---|---|
| **Brand Name** | `<NEXUS>` |
| **Logo Treatment** | Brand name wrapped in angle brackets `< >`, rendered in a bold, condensed sans-serif typeface. All uppercase. The angle brackets are part of the identity — they evoke code/technology. |
| **Brand Personality** | Corporate-tech, authoritative, premium, forward-thinking |
| **Industry** | IT Strategy / Digital Innovation / Custom Technology Platforms |

---

## 2. Colour Palette

### Primary Colours

| Swatch | Name | Hex | RGB | Usage |
|---|---|---|---|---|
| ⬛ | **Deep Navy / Near-Black** | `#0A0F1A` | `10, 15, 26` | Primary text, logo, navigation links, footer |
| ⬜ | **Pure White** | `#FFFFFF` | `255, 255, 255` | Page background, hero section background |
| 🔵 | **Electric Cyan Blue** | `#00A8E8` | `0, 168, 232` | Accent glow effects, futuristic visual elements, hover states |

### Secondary / Supporting Colours

| Swatch | Name | Hex | RGB | Usage |
|---|---|---|---|---|
| 🔷 | **Steel Blue** | `#1B3A5C` | `27, 58, 92` | Hero headline primary text colour ("We drive companies beyond") |
| 🔵 | **Bright Azure** | `#0077B6` | `0, 119, 182` | Mid-tone blue used in gradient transitions of the lens effect |
| ⚪ | **Cool Grey** | `#6B7280` | `107, 114, 128` | Subheading text, secondary body copy, trust bar label |
| ⬛ | **Charcoal** | `#1F2937` | `31, 41, 55` | CTA button border, trust bar brand names |

### Glow / Effect Colours (for 3D or light effects)

| Swatch | Name | Hex | RGB | Usage |
|---|---|---|---|---|
| 🔵 | **Neon Cyan** | `#00D4FF` | `0, 212, 255` | Inner ring glow of the lens/portal effect |
| 🔵 | **Ice Blue** | `#7DD3FC` | `125, 211, 252` | Outer soft glow, ambient light bleed |
| ⚫ | **Void Black** | `#020617` | `2, 6, 23` | Centre of the lens/portal element (deep shadow) |

---

## 3. Typography

### Font Pairing

| Role | Typeface | Weight | Style | Fallback |
|---|---|---|---|---|
| **Logo** | Condensed geometric sans-serif (e.g., **Barlow Condensed**, **Industry**, or **Oswald**) | Bold (700) | Uppercase, tracked | `sans-serif` |
| **Navigation** | Clean sans-serif (e.g., **Inter**, **DM Sans**, or **Manrope**) | Medium (500) | Uppercase, wide letter-spacing (~2–4px) | `sans-serif` |
| **Hero Headline (primary)** | Sans-serif (e.g., **Inter**, **DM Sans**) | Bold (700) | Sentence case | `sans-serif` |
| **Hero Headline (emphasis)** | Serif (e.g., **Playfair Display**, **DM Serif Display**, or **Lora**) | Regular or Italic (400i) | Italic, sentence case — used for *"their biggest obstacles"* | `serif` |
| **Subheading / Body** | Sans-serif (same as headline) | Regular (400) | Sentence case, ~16–18px | `sans-serif` |
| **CTA Button** | Sans-serif | Bold (700) | All uppercase, letter-spacing ~2–3px, ~13–14px | `sans-serif` |
| **Trust Bar Label** | Sans-serif | Medium (500) | All uppercase, letter-spacing ~3–5px, ~11–12px | `sans-serif` |

### Typography Scale

| Element | Size (Desktop) | Line Height | Letter Spacing |
|---|---|---|---|
| Hero Headline | `48–56px` | `1.1–1.2` | `-0.02em` (tight) |
| Subheading | `16–18px` | `1.5–1.6` | `0` |
| Navigation Links | `13–14px` | `1` | `0.1–0.15em` |
| CTA Button Text | `13–14px` | `1` | `0.15–0.2em` |
| Trust Bar Label | `11–12px` | `1` | `0.2–0.3em` |
| Trust Bar Brands | `16–18px` | `1` | `0.05em` |

---

## 4. Layout & Spacing

### Grid System

| Property | Value |
|---|---|
| **Max Content Width** | `1200–1400px` |
| **Horizontal Padding** | `24–48px` (responsive) |
| **Layout** | Single-column, centred hero. Full-bleed visual effects extend to viewport edges. |

### Section Spacing

| Section | Spacing |
|---|---|
| **Navbar height** | `~72–80px` |
| **Hero top padding** | `~120–160px` from nav |
| **Headline → Subheading** | `~24–32px` |
| **Subheading → CTA** | `~32–40px` |
| **Hero → Trust Bar** | `~80–120px` |

---

## 5. Component Patterns

### Navigation Bar
- **Layout**: Logo left, nav links centre, CTA button right
- **Style**: Transparent background, no border
- **Logo**: `<NEXUS>` in bold condensed sans-serif, ~18px
- **Links**: Uppercase, spaced, medium weight, ~13px
- **CTA**: "GET IN TOUCH" — text link style (no button border), positioned far right

### Hero Section
- **Alignment**: Centre-aligned text
- **Headline**: Mixed typography — sans-serif bold for most words, **serif italic** for the emotional phrase ("their biggest obstacles")
- **Colour**: Deep steel blue (`#1B3A5C`) for sans-serif portion; the serif italic words appear in a slightly softer or matching dark blue
- **Subheading**: Centred, grey (`#6B7280`), narrow max-width (~500px) for readability
- **CTA Button**: Outlined/ghost button — dark border (`1.5–2px solid #1F2937`), transparent fill, uppercase bold text, modest padding (`14px 32px`)

### Visual Effects (Side Portals / Lens Elements)
- **Description**: Two large circular, futuristic lens/portal elements flanking the hero — one on the left edge, one on the right edge
- **Effect**: Concentric rings with electric cyan/blue glow, dark void centre, radiating light beams
- **Implementation**: Could be achieved with:
  - Spline 3D embedded models
  - CSS radial gradients + box-shadows + animation
  - Pre-rendered video/GIF backgrounds
  - WebGL / Three.js particle effects
- **Position**: Partially off-screen (cropped by viewport), creating depth and framing the hero text

### Trust / Social Proof Bar
- **Label**: "TRUSTED BY LEADING INNOVATORS WORLDWIDE" — all caps, small, spaced, grey
- **Logos**: Displayed as text (brand names in their brand fonts) or greyscale logo images
- **Layout**: Horizontally centred, evenly spaced
- **Colour**: Muted charcoal / dark grey — not full black, to stay secondary

---

## 6. Design Principles

1. **High Contrast, Minimal Palette** — White backgrounds with dark navy text. Blue is reserved exclusively for accent/glow effects. No additional colours.
2. **Serif + Sans-Serif Tension** — The headline uses a serif italic to inject warmth and sophistication into an otherwise technical, corporate aesthetic.
3. **Symmetrical Framing** — The two portal/lens visuals create a symmetric frame around the centred hero content, drawing the eye inward.
4. **Restrained UI** — Ghost/outline buttons, spacious layout, no heavy fills or gradients on UI elements. The visual drama comes from the 3D/glow effects, not from the UI chrome.
5. **Uppercase Authority** — Navigation, CTA, and trust bar all use uppercase with generous letter-spacing to convey precision and professionalism.
6. **Breathing Room** — Generous whitespace between all elements. Nothing feels cramped.

---

## 7. CSS Custom Properties (Ready-to-Use)

```css
:root {
  /* Primary */
  --color-background: #FFFFFF;
  --color-text-primary: #0A0F1A;
  --color-text-headline: #1B3A5C;
  --color-text-secondary: #6B7280;
  --color-text-dark: #1F2937;

  /* Accent / Glow */
  --color-accent-blue: #00A8E8;
  --color-accent-azure: #0077B6;
  --color-glow-cyan: #00D4FF;
  --color-glow-ice: #7DD3FC;
  --color-void-black: #020617;

  /* Typography */
  --font-sans: 'Inter', 'DM Sans', 'Manrope', system-ui, sans-serif;
  --font-serif: 'Playfair Display', 'DM Serif Display', 'Lora', Georgia, serif;
  --font-condensed: 'Barlow Condensed', 'Oswald', 'Industry', sans-serif;

  /* Spacing */
  --nav-height: 76px;
  --content-max-width: 1280px;
  --section-padding: 120px;

  /* Borders */
  --border-cta: 2px solid var(--color-text-dark);

  /* Transitions */
  --transition-default: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 8. Prompt-Ready Summary (Copy & Paste for LLM)

> **Design System: NEXUS**
>
> Build a modern corporate tech website with the following design language:
>
> - **Background**: Pure white (`#FFFFFF`)
> - **Primary text**: Deep navy (`#0A0F1A` to `#1B3A5C`)
> - **Accent**: Electric cyan blue (`#00A8E8`, `#00D4FF`) — used ONLY for glow/light effects, never for text or buttons
> - **Typography**: Sans-serif (Inter/DM Sans) paired with serif italic (Playfair Display) for headline emphasis words. Navigation and CTAs are uppercase with wide letter-spacing.
> - **Buttons**: Ghost/outline style — dark border, transparent background, uppercase text
> - **Layout**: Single-column, centred, generous whitespace, max-width ~1280px
> - **Visual Drama**: Futuristic circular lens/portal 3D elements flanking the hero section with concentric cyan glow rings and dark void centres
> - **Trust Bar**: Muted, uppercase label with brand names below in greyscale
> - **Overall Feel**: Premium, authoritative, restrained UI with dramatic visual effects. Think "enterprise tech meets sci-fi portal."
