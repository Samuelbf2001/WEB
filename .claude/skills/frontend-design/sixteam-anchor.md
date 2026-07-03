# Sixteam.pro V2 — committed anchor

Project pin for the [frontend-design](SKILL.md) skill. The skill says: pick ONE anchor, commit fully, no hybridizing. For Sixteam V2 (`/v2`, light), the anchor is fixed below. Design-only: never alter site copy/content (see the user's standing rule).

## Anchor: Warm Editorial (cream, Organic-leaning)

Guided by the two reference sites the user named: **Foaster** (foaster.ai) and **Automation Agency** (automationagency.com). Both are warm cream/off-white, bold editorial type, one accent, heavy restraint, human touches.

Note the skill's "Organic" anchor forbids cream `#F0+`; we deliberately keep cream as the base (to match Foaster/AA) and pull Organic's *earth accents* (clay, ochre, sand) on top. This is the one intentional deviation; everything else holds.

- **Surface:** cream / warm paper — existing V2 tokens `#fdfcf8`, `#f4f3ee`, `#faf9f5` (keep).
- **Ink:** `#0a2342` headings, `#334155` body.
- **Accents (keep brand colors, rebalanced):** warm gold/sand `#d4a853` / `#8a7a4f` as the PRIMARY editorial accent; teal `#00bfa5` + blue `#1d70a2` kept but used *sparingly* (teal is a flagged "everyone's-SaaS" fingerprint — do not let it dominate).
- **Type:** Poppins bold display (existing), serif italic for accent words (Foaster/AA move). Cap body 65–75ch.
- **Texture:** grain 1–3% via SVG feTurbulence (subtle, warm).
- **Differentiator (the one memorable move):** hand-drawn marker marks on key words (`UnderlineSvg` scribble/circle) — Automation Agency's signature. Use it deliberately, not everywhere.
- **Motion:** gentle ease 300–500ms. No bounce/elastic.

## Anti-slop fingerprints to AVOID (so it doesn't look "made by AI / like everyone else")

Sourced from the frontend-design skill + community anti-slop kits (rohitg00/awesome-claude-design):

- Teal accent used as the default everywhere (the #1 generic-SaaS tell). Lead with warm gold; teal as a guest.
- Gradient TEXT (`background-clip:text`). Solid color + weight instead.
- Glassmorphism by default; blinking status dots; "live" telemetry decoration.
- Identical repeated icon+heading+paragraph card grids. Vary layout/rhythm.
- Over-decorated backgrounds (stacked aurora orbs + floating geometric shapes + topo lines). One restrained layer max. (Hero already fixed.)
- Fabricated data / filler mono-caps kickers / themed replacements of standard UI copy. Content stays real (and untouched).

## Source
Skill: github.com/Ilm-Alan/frontend-design (MIT, © 2025 Alan). Community kit: github.com/rohitg00/awesome-claude-design.
