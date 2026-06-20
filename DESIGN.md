---
name: Olya Kudina
description: Academic personal site for a tech ethicist — Gloock serif display, Hanken Grotesk body, terracotta accent, night/cream palette
colors:
  terracotta: "#C4622D"
  terracotta-deep: "#A8501F"
  terracotta-pale: "#ECC9AF"
  ink: "#1A1714"
  ink-soft: "#3D342C"
  ink-muted: "#7A6A5C"
  cream: "#FAF7F2"
  cream-warm: "#F2EDE4"
  cream-deep: "#E8DFD3"
  night: "#18150F"
  night-lifted: "#231E17"
  text-on-dark: "#F0E9DE"
  border-light: "#DDD5C8"
  border-dark: "#FFFFFF12"
typography:
  display:
    fontFamily: "'Gloock', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(3.5rem, 9vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Gloock', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.9rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.14em"
  body:
    fontFamily: "'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.22em"
rounded:
  none: "0px"
spacing:
  s1: "0.5rem"
  s2: "1rem"
  s3: "1.5rem"
  s4: "2rem"
  s5: "3rem"
  s6: "4.5rem"
  s7: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.9rem"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.9rem"
  form-input:
    backgroundColor: "{colors.cream-warm}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1rem"
  news-card:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "2.25rem"
  news-card-featured:
    backgroundColor: "{colors.cream-warm}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "2.25rem"
  social-btn:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.none}"
    size: "42px"
---

# Design System: Olya Kudina

## 1. Overview

**Creative North Star: "The Philosophical Study"**

Olya Kudina's website is a philosopher's study made visible — a space where serious ideas about technology, ethics, and human values are presented with the restraint and authority they deserve. The design rejects visual noise in favour of typographic structure. The pairing of Gloock (a contemporary high-contrast display serif) for headings and Hanken Grotesk (a clean humanist sans) for body copy establishes a reading environment, not a marketing surface. Together they signal: precision and depth, not performance.

The palette moves between a near-white cream ground and a near-black night depth, with one accent — Terracotta (`#C4622D`) — used sparingly to mark decisions: a primary CTA, a hover affordance on cards, an inline link. The warmth is carried by the accent and typography; the backgrounds stay close to neutral so the ideas carry the atmosphere.

The information architecture is long-scroll and section-based — About, Research & Teaching, News, Contact. Depth is achieved through the rhythm between warm-light sections (cream, cream-warm) and the deep-night sections (hero, research panel, footer), not through decorative embellishment. This system explicitly rejects: clinical academic white + institutional blue, SaaS-inspired feature grids, all-serif editorial clichés (Cormorant italic drop caps, tracked uppercase kicker above every section), and any design where decoration competes with the ideas.

**Key Characteristics:**
- Gloock (serif) display + Hanken Grotesk (humanist sans) — contrast pair on the stroke-and-weight axis
- Terracotta accent on ≤10% of any visible screen surface
- All surfaces flat at rest; depth is tonal (cream ↔ night section alternation)
- Zero border-radius on all interactive elements — sharp, editorial geometry
- Night sections (`#18150F`) carry reversed warm-white type; light sections carry dark ink

## 2. Colors: The Ground & Ember Palette

A two-band palette: a warm-cream light band and a near-black night band, bridged by a single terracotta accent.

### Primary
- **Terracotta** (`#C4622D`): The sole accent. CTAs, section-label rule, card hover affordance, inline anchor links. Never used as a surface fill at scale.
- **Terracotta Deep** (`#A8501F`): Hover/active transition target for Terracotta. Never at rest.
- **Terracotta Pale** (`#ECC9AF`): The night-surface variant — eyebrow labels, institution names, and accent rules on dark backgrounds.

### Neutral
- **Ink** (`#1A1714`): Near-black primary text on all light surfaces.
- **Ink Soft** (`#3D342C`): Long body paragraphs where full black would fatigue at length.
- **Ink Muted** (`#7A6A5C`): Card body copy, contact description, placeholder text. Verify ≥4.5:1 against Cream before use.
- **Cream** (`#FAF7F2`): Primary body background. About and Contact sections.
- **Cream Warm** (`#F2EDE4`): Section alternation — News background, form inputs, contact info column.
- **Cream Deep** (`#E8DFD3`): Portrait placeholder gradient base; inset container option.
- **Night** (`#18150F`): The dark ground. Hero, Research & Teaching panel, footer. Warm undertone, not a true black.
- **Night Lifted** (`#231E17`): One step above Night. Available for elevated cards on dark surfaces.
- **Text on Dark** (`#F0E9DE`): Headings and primary text on Night. Warm off-white, never pure white.
- **Border Light** (`#DDD5C8`): 1px structural borders on light surfaces.
- **Border Dark** (`#FFFFFF12`): Structural borders on Night surfaces.

### Named Rules
**The One Voice Rule.** Terracotta is the only accent. It appears on no more than one primary action at any moment. Its rarity is the point — the moment it appears decoratively, it loses force.

**The No-Beige Rule.** The cream background (`#FAF7F2`) is close to neutral — minimal chroma toward the brand hue, not "warm by default." If the background reads as cream/sand/parchment, it has tipped into the AI-default band. The warmth in this brand is carried by the accent, not the surface.

## 3. Typography

**Display Font:** Gloock (Google Fonts, weight 400 regular + italic)
**Body Font:** Hanken Grotesk (Google Fonts, weights 400 / 500 / 600)

**Character:** Gloock is a contemporary high-contrast display serif — it has the authority of classical scholarship without the fussiness of Victorian display faces. Hanken Grotesk is clean, open, humanist — the geometric opposite of Gloock's stroke contrast. The pair reads as precise and deliberate: intellectual without performing it. Neither font is on the training-data reflex list. Avoid pairing the system with Playfair Display, Cormorant Garamond, Fraunces, Inter, DM Sans, or Plus Jakarta Sans — all are saturated AI defaults in 2026.

### Hierarchy
- **Display** (Gloock 400, `clamp(3.5rem, 9vw, 6rem)`, line-height 1.0, letter-spacing −0.02em): Hero h1 only. "Kudina" renders in Gloock italic — the single sanctioned italic use. Maximum 6rem; above that the page shouts.
- **Headline** (Gloock 400, `clamp(1.9rem, 4vw, 3rem)`, line-height 1.18, letter-spacing −0.02em): Section h2. `text-wrap: balance` applied.
- **Title** (Hanken Grotesk 600, `0.75rem`, letter-spacing 0.14em, uppercase): Column sub-headings in the Research & Teaching panel. Hanken at label scale, not Gloock — signals structure, not content.
- **Body** (Hanken Grotesk 400, `1.05rem`, line-height 1.75): All paragraph text. Max 68ch per line. `text-wrap: pretty` applied.
- **Label** (Hanken Grotesk 600, `0.72rem`, letter-spacing 0.22em, uppercase): Section eyebrow kickers, date strings, institution abbreviations, form field labels.

### Named Rules
**The One Italic Rule.** Gloock italic appears in exactly one place: the second line of the hero name ("Kudina"). It is a typographic signature, not a styling tool. Italic is never used for emphasis in body copy — use Hanken Grotesk weight 500 or 600 instead.

**The Floor Rule.** Display letter-spacing minimum: −0.04em. The current value of −0.02em is well above this floor. Never go tighter than −0.04em; at −0.05em and below, Gloock's letters touch and the heading reads cramped, not designed.

## 4. Elevation

The system is flat by default. No decorative shadows appear on any element at rest. Depth is conveyed entirely through background-color alternation between the cream band and the night band — the rhythm of light and dark sections creates spatial structure without shadow layering.

Hover states use pure transform: news cards lift with `translateY(-4px)` and a top accent bar scales in (`scaleX(0 → 1)`) — a kinetic affordance without shadow. Buttons rise `translateY(-1px)` on hover.

The navigation bar on scroll gains `backdrop-filter: blur(14px)` and a 1px bottom border — a functional elevation signal, not decoration.

### Named Rules
**The No-Shadow Rule.** `box-shadow` for decoration is prohibited. The only permitted use is the focus ring on form inputs (`0 0 0 3px rgba(196,98,45,0.10)`) — a functional accessibility signal. If an element needs differentiation, use background tint or a full border, never a drop shadow.

## 5. Components

### Buttons
The only variant currently implemented is the primary CTA. Shape: zero border-radius, flat-sided rectangle.
- **Primary:** Terracotta (`#C4622D`) fill, white text, `0.85rem 1.9rem` padding. Hanken Grotesk 600, 0.06em tracking, uppercase.
- **Hover:** Background shifts to Terracotta Deep + `translateY(-1px)` in 0.28s `cubic-bezier(0.4, 0, 0.2, 1)`. No shadow added.
- **Focus:** 2px solid Terracotta outline, 3px offset.

### Form Inputs & Textarea
- Cream Warm background, 1px solid Border Light, zero border-radius.
- Hanken Grotesk 400, body size. Placeholder: Ink Muted at 45% opacity.
- **Focus:** Border → Terracotta + `box-shadow: 0 0 0 3px rgba(196,98,45,0.10)` focus ring.

### News Cards
- Cream background, 1px solid Border Light, zero border-radius, `2.25rem` padding.
- Featured variant: Cream Warm background, spans two grid columns.
- **Hover:** `translateY(-4px)`, border → Cream Deep, background → Cream Warm. Top accent bar (`::before`, 2px, Terracotta) scales from `scaleX(0)` to `scaleX(1)`.
- No shadow at rest or on hover.

### Social Icon Buttons
- 42×42px square, 1px solid Border Light, transparent background.
- **Hover:** Border → Terracotta, icon → Terracotta, background → `rgba(196,98,45,0.12)`.
- All icons are inline SVG, 15–17px, stroke-based.

### Navigation
- Transparent + white text while over the hero viewport.
- After 40px scroll: `rgba(250,247,242,0.96)` background, `backdrop-filter: blur(14px)`, 1px bottom border, text → Ink.
- Desktop links: Hanken Grotesk 400, 0.82rem, 0.12em tracking, uppercase. Hover underline slides from left via `::after` (width 0 → 100%, Terracotta, 0.55s).
- Mobile: hamburger opens a full-width slide-down drawer. Drawer links: Gloock 400, 1.6rem.

### Portrait Placeholder
- 3:4 aspect ratio, Cream Deep gradient, hatched diagonal texture overlay (contained within the image slot — not a section background).
- Camera SVG icon + "Portrait Photograph" label centered.
- 3px Terracotta bar at base.
- Replace with `<img>` at same dimensions when the photograph is available.

## 6. Do's and Don'ts

### Do:
- **Do** use Gloock for all h1–h3 headings. Never substitute Hanken Grotesk or any other font for headings, even at compact sizes.
- **Do** keep Terracotta to ≤10% of any visible screen surface. One CTA, one active affordance — that is the budget.
- **Do** use Night (`#18150F`) as the dark ground. Do not substitute near-blacks with blue, purple, or cool tints.
- **Do** use `transform: translateY()` as the only hover-elevation signal. Never add `box-shadow` on hover.
- **Do** verify Ink Muted (`#7A6A5C`) achieves ≥4.5:1 contrast on Cream (`#FAF7F2`) before using it for body text.
- **Do** cap body line length at 65–75ch with `max-width` on prose containers.
- **Do** apply `text-wrap: balance` on all h1–h3; `text-wrap: pretty` on long prose.
- **Do** serve the hero with a real photograph of Olya when available. The image placeholder is a stand-in, not a design choice.
- **Do** include `@media (prefers-reduced-motion: reduce)` alternatives for all animations — crossfade, not removed.

### Don't:
- **Don't** pair with Playfair Display, Cormorant Garamond, Fraunces, Inter, DM Sans, or Plus Jakarta Sans. These are training-data defaults; any of them undoes the font investment.
- **Don't** use Terracotta as a background fill on any surface larger than a button.
- **Don't** add `box-shadow` to cards, sections, or containers for decoration. The No-Shadow Rule is absolute.
- **Don't** use `border-left` or `border-right` greater than 2px as a permanent, resting colored accent. The top accent bar on news cards exists only on hover — it must not appear at rest.
- **Don't** pair a 1px border with a `box-shadow` blur ≥ 16px on the same element at rest (the "ghost card" pattern).
- **Don't** apply Gloock italic outside the hero name treatment. It is a signature, not a style utility.
- **Don't** add eyebrow kickers ("— ABOUT", "— LATEST") above every section heading. The current implementation uses this pattern on every section — that is the saturated AI-grammar reflex. Reserve the `.tag` eyebrow for at most one or two sections where it carries information the heading cannot.
- **Don't** add `border-radius` to buttons, inputs, or cards. Sharp edges are the system's geometric identity.
- **Don't** use gradient text (`background-clip: text`), glassmorphism, or diagonal stripe backgrounds (`repeating-linear-gradient` on section or body pseudo-elements).
- **Don't** reproduce the WordPress academic site pattern: top nav, hero photo, sidebar archive. Olya's work deserves a designed object, not a template.
