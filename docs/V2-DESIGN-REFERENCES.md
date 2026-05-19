# V2 Design References — Foaster.ai & AutomationAgency.com

A concrete, build-ready design language brief synthesized from two reference sites for the Sixteam.pro V2 redesign. Numbers, hex codes, font families, and component dimensions were extracted directly from live CSS (via Playwright `getComputedStyle`) on 2026-05-16. A designer should be able to build from this document without re-visiting the sites.

---

## Site 1 — Foaster.ai

**Tagline:** "Your AI Transformation Partner." — Y Combinator-backed, sells AI transformation consulting.
**Overall feel:** Editorial-modernist. Light cream canvas, generous whitespace, restrained type system, no busy decoration. Reads like a Stripe-meets-Linear consulting practice.

### A. Above-the-fold pattern
- **Headline:** `Your AI Transformation\nPartner.` — H1 is **72px / weight 700 / line-height 77.76px / letter-spacing -2.16px** in SF Pro / Inter system stack. Explicit `<br>` between "Transformation" and "Partner." for the 2-line wrap. Period at the end (statement, not slogan).
- **Subhead:** Single sentence, ~24 words, gray `rgb(74,85,80)` at 18.4px / line-height 31.28px. Generous leading (1.7x), Lato-like rhythm.
- **Eyebrow above H1:** A tiny "Backed by **Y Combinator**" pill with the YC logo — small, centered, the only logo cloud they show.
- **CTAs:** Two — **primary** dark forest-green pill `rgb(31,47,44)` / white text / **0px border-radius** (square corners!) / 16px×36px padding / weight 600; **secondary** is a text link "Explore Our Approach →" with a 2px underline. No third CTA.
- **Hero visual:** A floating laptop video mock (large dark rounded rectangle with `border-radius: 32px`, `box-shadow: 0 40px 100px rgba(0,0,0,.06)`) showing a Foaster product loop. Centered below the H1+CTA block.
- **Background:** Solid `#F6F1EC` (warm cream). No gradient, no noise, no animated grid. Hero section padding: `160px 0 100px`.

### B. Section rhythm
- **7 sections** above the footer. Each section's background is a different micro-tinted cream — `#F6F1EC` → `#F7F5F0` → `#F2F4F1` → `#F9F7F4` → `#FFFFFF` → `#F9F7F4` → `#F6F1EC`. The transitions are **hard cuts between near-identical off-whites**; the eye registers them as "chapters" without the harshness of a color break.
- **Whitespace:** Generous-editorial. Section padding ranges `120–180px` vertical. The "AI transformation starts when the company can finally see itself" manifesto section is 180px×40px — pure breathing room around a single sentence.
- **Section transitions:** No gradients, no parallax. `IntersectionObserver` fade-in on a `.fade-in.visible` class (300–500ms ease). Sticky navbar.
- **Eyebrow labels:** Yes — used on subpages and within sections. Style: 12–13.6px, **uppercase**, letter-spacing **1.2–1.36px**, weight 500–700, sage green `#4A5C44` for the strong ones, muted `#7A857F` for secondary. Examples: `CASE STUDY`, `THE CHALLENGE`, `THE APPROACH`, `01` / `02` step numbers.

### C. Typography
- **Primary font:** System sans `-apple-system, BlinkMacSystemFont, Inter, "SF Pro Display"`. They lean on the operating system's native UI font — fast, modern, neutral.
- **Accent font:** **Instrument Serif** — used **only for the wordmark "Foaster"** and two micro-labels ("Get started", "Book your call"). 35.2px logo, 24px elsewhere. It is not used for body or headings.
- **Italic accents inside H1:** Foaster uses `<em>` italics (Inter italic) inside long-form headlines. E.g. case study H1: *"How a 350-person company built its **<em>AI roadmap</em>** in 9 days"*. Italic word becomes the emphasis without needing a color highlight.
- **Heading scale:** H1 72px / H2 51.2px / H3 ~36px / H4 ~24px. All weight 700, letter-spacing -1.5 to -2.2px (tight, modern).
- **Body:** 18.4px, line-height 31.28px (1.7x ratio — breathable editorial, not technical-dense).
- **Mixed case throughout.** Eyebrows are the only ALL CAPS.

### D. Color & motion
- **Background tokens:** `#F6F1EC` (primary cream), `#F7F5F0`, `#F2F4F1`, `#F9F7F4`, `#FFFFFF`. All within 4 points of each other on the L axis.
- **Ink color:** `#1F2F2C` (forest charcoal — *not* pure black). Body gray `#4A5550`.
- **Accent color:** Sage / forest green `#4A5C44` for eyebrows + Continue button. That's it. No bright accent.
- **Motion:** Scroll-driven fade-in (opacity 0→1, translateY 20px→0, 400ms). No marquees. Hover on dark CTA → subtle background lift (no shadow expansion). Cards on hover do not transform — restraint.

### E. Components catalog
- **Navbar:** Fixed top, `rgba(246,241,236,0.92)` + `backdrop-filter: blur(12px)`, no border, no shadow. Logo left (Instrument Serif "Foaster"), text links center (Solutions / How it works / Case study / Resources / About), dark pill CTA "Book a demo" right. The CTA pill has **border-radius 100px** even though the primary hero button is square — pill in nav, square in hero is a deliberate hierarchy trick.
- **Cards (4-step method):** **No card chrome at all** — transparent background, no border, no shadow, no radius. Each step is just an image + H3 + paragraph stacked. The image is the card.
- **Cards (FAQ panel):** Single oversize glass panel — `rgba(255,255,255,0.4)`, `border-radius: 40px`, `border: 1px solid rgba(255,255,255,0.5)`, `box-shadow: 0 30px 60px rgba(0,0,0,.04)`, `padding: 64px`. Each FAQ row inside is just a `+` toggle.
- **Solutions cards (3-col):** Lifestyle photographs (desk, plants, laptop) at `border-radius: 32px` with a `box-shadow: 0 40px 100px rgba(0,0,0,.06)`. Headline below, "LEARN MORE →" underneath.
- **Case-study metadata strip:** A horizontal `key  value` row under the H1: `Industry  Professional Services    Employees  350 across 2 offices    Duration  9 days    Interviews  280 people`. Key is bold, value is muted.
- **Footer:** Minimal. "Backed by Y Combinator" + LinkedIn + X. No mega-menu.

### F. The signature move
**The four-step "method" section.** Four lifestyle/abstract images in a row, each captioned with a single verb: `Interviews` / `Map` / `Roadmap` / `Transform`. No cards, no icons, no numbers above them — just photographs that *feel* like documentary stills. It's the move a copycat misses because it looks like nothing's happening; the editorial restraint is the whole point.

---

## Site 2 — AutomationAgency.com

**Tagline:** "It's Not Just *You* Anymore." — AI + human marketing team for founders.
**Overall feel:** Warm, conversational, founder-relatable. Same cream canvas as Foaster but with personality: orange CTAs, hand-drawn cyan SVG annotations, italic serif emphasis everywhere.

### A. Above-the-fold pattern
- **Headline:** `It's Not Just <br> You Anymore.` — H1 is **72px / weight 500 / line-height 79.2px / letter-spacing -1.8px** in **Graphik**. The word **"You" is wrapped in `<span class="font-serif italic">`** rendered in **GT Super Text italic**, and a cyan SVG circle `#00B3FF` is positioned absolutely around it with `viewBox="0 0 100 60"` — looks hand-drawn with a felt marker.
- **Subhead:** 4 short sentences in staccato rhythm: *"Your funnels get built. Your emails go out. Your content gets created. Your automations run. You just… move on with your day."* The phrase "move on with your day" gets the **same cyan hand-drawn underline SVG**.
- **Eyebrow above H1:** A small orange pill: `Your marketing, running 24/7` on `bg-orange-100` / `text-orange-600` / `border-orange-200`, pill-shaped.
- **CTAs:** Two — **primary** "Get Started" full orange pill `oklch(0.705 0.213 47.604)` ≈ `#F26B1D` / white text / weight 700 / border-radius `999px` / orange glow `box-shadow: 0 10px 15px -3px rgba(242,107,29,.2)`; **secondary** "Watch 2-Min Demo" white/50% glass pill with 2px black/5% border. Both pill-shaped.
- **Hero visual:** A floating "Your marketing this week" task card on the right (white/60% glass, `border-radius: 12px`, `border 1px black/5%`, `backdrop-blur`) with 5 task rows showing a checklist with status pills. Reads as a literal product mock.
- **Background:** Solid `#F7F4EB` (warm sand cream — almost identical to Foaster's `#F6F1EC` but with more yellow).

### B. Section rhythm
- **15 sections** before footer — much denser than Foaster. Section padding is `96px 0` (vs Foaster's 120–180px).
- **Alternating bands:** `#F7F4EB` cream → `#FFFFFF` white → `#F7F4EB` → `#FFFFFF` ... → final section pure `#000000`. The black final-CTA section is the dramatic close ("The Cost of Waiting").
- **Eyebrows:** Heavily used. 12–14px ALL CAPS, letter-spacing 1.2–1.4px, weight 700. Color-coded per agent: `CONCIERGE AGENT` = cyan `#00B3FF`, `STRATEGY AGENT` = green `#21B573`, `COPYWRITER AGENT` = yellow `#FDCE2E`. Each AI agent gets its own brand color used as a sub-accent.
- **Whitespace:** Tighter modernist (96px vs 160px). Faster reading rhythm — more sections, more proof points.

### C. Typography
- **Primary font:** **Graphik** (sans-serif). H1 72px weight 500 — notably **light** for a hero compared to Foaster's 700.
- **Accent font:** **GT Super Text** serif italic — used aggressively for *every* emphasized word. H1 "You", H2 italic "Done.", "Action.", "Your", section eyebrows, even quote attributions ("Harv Eker", "Taki Moore"). On pricing page: *"Marketing That Just **Gets Done.**"* with the orange italic phrase.
- **Heading scale:** H1 72px / H2 36–48px / H3 20px / body ~16px. H2 is much smaller than Foaster's (36px vs 51.2px) → relies on italic serif punch instead of size.
- **Body:** Tighter line-height (~1.5x), feels technical compared to Foaster's editorial breath.
- **Mixed case body**, ALL CAPS for eyebrows + urgency badges (`VIP ONBOARDING BONUS`).

### D. Color & motion
- **Backgrounds:** `#F7F4EB` (primary cream), `#FFFFFF`, `#000000` (final CTA only).
- **Ink color:** `#1A1A1A` (warm near-black). Body gray `#666666`.
- **Primary accent:** **Orange** `oklch(0.705 0.213 47.604)` ≈ `#F26B1D`. Used for: CTA pills, italic emphasis ("Gets Done."), badges, best-value pricing ribbons, agent avatars.
- **Secondary accent:** **Cyan** `#00B3FF` — used *only* for hand-drawn SVG annotations (circles, underlines).
- **Agent colors:** Cyan / green `#21B573` / yellow `#FDCE2E` — each AI persona has a sub-color.
- **Tinted card backgrounds:** `bg-orange-50/50` and `bg-sky-50/50` for grouping panels inside larger cards (10% tints on the brand colors).
- **Motion:** Scroll-triggered chat-bubble animation in the "You Say What You Need" section (messages appear sequentially with a delay). Animated countdown timer on pricing (`1 day, 19 hrs, 59 min, 36 sec`). Hover on CTAs: slight brightness lift, shadow expands. Star ratings + verified badges throughout.

### E. Components catalog
- **Navbar:** Sticky, `rgba(247,244,235,0.9)` + `backdrop-blur 12px`, no shadow. Logo left ("automation agency" stacked wordmark), text links center (How It Works / Meet Your Team / Pricing / About), Login + orange pill "Get Started" right. Pill `border-radius: 999px` / padding 8×24.
- **Cards (general):** `bg-white/60`, `padding: 16–24px`, `border-radius: 12px`, `border: 1px solid black/5%`, `box-shadow: 0 1px 2px rgba(0,0,0,.05)`, `backdrop-blur`. Light, floating, "Notion-like."
- **Cards (pricing):** 3-column. White bg, soft border, **best-value middle card** has an orange ribbon banner (`BEST VALUE 3X CAPACITY`) sitting on top + thicker orange border. Sub-panels inside each card use color-tinted backgrounds: blue-tinted `bg-sky-50/50` for "Unlimited Strategy & Chat", orange-tinted `bg-orange-50/50` for "Human Specialists" capacity. Inside-card grouping by color is the pricing-page signature.
- **Pricing toggle:** Pill-shaped segmented control, `bg-gray-100`, padding 6px, `border-radius: 16px`. Active tab = white card with shadow. "2 Months Free" badge on the Annual tab.
- **Urgency card:** Gradient orange `from-orange-50 to-amber-50`, `border-radius: 16px`, padding 32px, with live countdown digits in monospace-feel boxes.
- **Testimonial blocks:** Quote in italic-serif feel, 5 orange stars, name in italic serif bold, "✓ Verified Client" badge in tiny green. Trust signals stacked.
- **Logo cloud:** Founder *names* in italic serif (Harv Eker / Taki Moore / Jairek Robbins / David Jenyns) instead of logos. Closing with "*and 1,000+ more founders*". Much more personal than a logo grid.
- **Comparison table:** Wide table on pricing — `Automation Agency / DIY / Full-time VA / Traditional Agency` columns, with green/orange/red word tags ("Flat Monthly Rate" / "Subscription Fatigue" / "Disjointed Chaos") instead of checkmarks. Tags are pill-shaped colored cells.
- **Footer:** Dark cream `#F7F4EB`, 6-column (Product / Capabilities / Industries / Platform Expertise / Company / Legal), social row at bottom.

### F. The signature move
**Hand-drawn cyan SVG annotations around italic serif words.** Every italic-serif word in a heading gets either a marker-circle or wavy underline in `#00B3FF`. It's the gesture of a founder grabbing a Sharpie and circling the most important word in a slide deck. Copycats reach for `text-decoration: underline` and miss the wobble of the hand-drawn path.

---

## Synthesis — Adaptation recommendation for Sixteam.pro V2

Sixteam.pro is a Colombian RevOps studio. The user wants the V2 visual *vibe* of these references on a **light cream/white canvas**, using Sixteam's existing brand palette (navy `#0a2342`, blue `#1d70a2`, teal `#00bfa5`) instead of green/orange.

### Adopt these 6 patterns (high confidence)

1. **Warm cream canvas, not pure white.** Use `#F6F1EC` (Foaster's cream) or a slightly cooler `#F4F1EB` as the body background. Reserve pure `#FFFFFF` for alternating section bands. Avoid `#F9F9F9` cool grays — those read SaaS-generic. Body text: a deep ink `#0A2342` (navy) instead of forest charcoal. Body secondary: `#4A5550`-equivalent muted.
2. **Italic-emphasis-inside-headlines pattern.** Every H1/H2 picks one word to italicize: *"Operaciones que **funcionan** solas."* Use a serif italic (Instrument Serif or GT Super if budget) for the italic word — this is the single highest-leverage move from these references. Layer Sixteam's teal `#00bfa5` as the italic color (replaces Foaster's all-black italics and AA's orange).
3. **Eyebrow labels in sage/teal, uppercase, tight letter-spacing.** 12–13px, `text-transform: uppercase`, `letter-spacing: 1.2–1.4px`, weight 600. Color: teal `#00bfa5` for primary eyebrows, `#1d70a2` blue for secondary. Examples: `CASO DE ESTUDIO`, `EL RETO`, `EL ENFOQUE`, `01` / `02` step numbers.
4. **Pill-shaped CTAs with branded glow.** Primary = teal-to-blue gradient pill `linear-gradient(90deg, #1d70a2, #00bfa5)`, `border-radius: 999px`, padding 14×32, white text weight 700, `box-shadow: 0 10px 15px -3px rgba(0,191,165,.25)`. Secondary = white/60% glass pill with `border: 2px solid rgba(10,35,66,.08)` + backdrop-blur. Two CTAs in hero, never three.
5. **Floating-mock hero visual.** Either a laptop video loop (Foaster pattern, `border-radius: 32px`, `box-shadow: 0 40px 100px rgba(0,0,0,.06)`) **or** a side-panel "Your week, handled" task-card mock (AA pattern, `bg-white/60`, `border-radius: 12px`, `backdrop-blur`). Pick one — for a B2B RevOps story, the task-card mock with HubSpot-style dashboard rows wins because it shows the actual output.
6. **Hard-cut alternating cream-to-white section bands** with `IntersectionObserver` fade-in. No gradients between sections, no parallax. Section padding `120–160px` (closer to Foaster's editorial pace, not AA's denser 96px) — Sixteam is selling consulting/expertise, not productized marketing, so slower rhythm reads as more premium.

### Strong-recommend-also (1 bonus)

7. **Color-coded micro-panels inside cards** (AA pricing pattern). On the Sixteam pricing/plans page, use blue-tinted `rgba(29,112,162,.08)` for "Sistema CRM incluido" rows and teal-tinted `rgba(0,191,165,.08)` for "Implementación humana" rows. Sub-grouping by tinted color inside a white card is the cleanest way to show "this plan includes A *and* B" without bullet-list fatigue.

### Do NOT copy these 3 patterns

1. **AA's hand-drawn cyan marker SVG annotations.** They work for a $249/mo founder-facing service because they signal "human, scrappy, founder-built." For a B2B RevOps studio selling six-figure transformations to enterprise/mid-market, the marker scribble reads as too casual. *Skip the hand-drawn circle around the italic word — the italic alone is enough.*
2. **AA's countdown-timer urgency cards + "VIP BONUS — sign up in next 1 day 19 hrs" pattern.** Pressure-tactic conversion design is fine for $249 self-serve subscriptions; it actively *destroys* trust for consultative B2B sales cycles. Sixteam's buyers (CRO, VP RevOps, founders of 50-500-person companies) will register it as "sketchy."
3. **AA's named-founder logo cloud in italic serif ("Harv Eker, Taki Moore…").** This works because AA's target buyer is a coaching-industry founder who recognizes those names. Sixteam's logo cloud should be **company logos** (Bavaria, Comfama, Postobón, local LATAM mid-market brands) in a grayscale grid — credibility through *brand recognition*, not personality. Keep it traditional here.

### Single page-template recipe (build from this)

**Section 1 — Hero:** `#F6F1EC` cream, 160px×0 padding. Small teal eyebrow pill ("RevOps as a Service"). H1 72px Poppins weight 700, line 1.05, letter-spacing -2px, with one *italic* serif word in teal `#00bfa5`. 24-word subhead in Lato 18px, line 1.7. Two CTAs (teal gradient pill primary, glass pill secondary). Floating task-card mock on right showing a HubSpot pipeline snapshot.

**Section 2 — Trust band:** `#F7F5F0`, 80px padding. Logo cloud, 6 grayscale customer logos centered, "Equipos RevOps de" eyebrow above.

**Section 3 — Method (4 steps):** `#F2F4F1`, 120px padding. Eyebrow `NUESTRO MÉTODO`. H2 "Cómo *operamos* contigo" (italic teal "operamos"). 4-column row of *lifestyle photos* (not icons, not cards) captioned `Diagnóstico / Diseño / Implementación / Optimización`.

**Section 4 — Manifesto:** `#F9F7F4`, 180px×40px padding. One sentence H2 centered, 48px, with italic serif emphasis on the key noun. Nothing else on the screen.

**Section 5 — Solutions:** white, 140px padding. 3-column lifestyle photo cards at `border-radius: 32px`, `box-shadow: 0 40px 100px rgba(0,0,0,.06)`, with `LEARN MORE →` underneath each.

**Section 6 — FAQ:** `#F9F7F4`, 140px padding. Single oversize glass panel: `bg: rgba(255,255,255,0.4)`, `border-radius: 40px`, `padding: 64px`, `box-shadow: 0 30px 60px rgba(0,0,0,.04)`. Each FAQ row a `+` toggle.

**Section 7 — Final CTA:** `#F6F1EC`, 160px padding. "Comienza tu transformación RevOps." H2 + subhead + single dark-navy square (not pill) button — the deliberate square corner on the final CTA contrasts with the pill nav and signals "this is different, this is the close."

---

**Reference screenshots saved at project root:** `foaster-hero.png`, `foaster-full2.png`, `foaster-case.png`, `aa-hero.png`, `aa-full.png`, `aa-pricing.png`.
