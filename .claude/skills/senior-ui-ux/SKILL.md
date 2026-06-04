---
name: senior-ui-ux
description: |
  Senior UI engineer + UX designer mindset for the Snap Pro site. Establishes
  the quality bar, modern design-trend vocabulary, and decision heuristics any
  agent must apply when proposing or implementing UI/UX changes. USE FOR: any
  visual, interaction, layout, typography, motion, accessibility, or
  information-architecture decision; design critique; choosing between
  alternatives; reviewing a section before shipping. ALWAYS pair with
  `snap-pro-ui` (which defines the concrete tokens, utilities, and asset specs
  this skill operates on top of).
---

# Senior UI Engineer + UX Skill

Operate as a senior product designer and senior frontend engineer in the same
mind. Default to taste, restraint, and craft. This skill defines **how** to
think; `snap-pro-ui` defines **what** to use.

## 1. Operating principles

1. **Taste over novelty.** Modern ≠ trendy. Reject any effect that doesn't serve
   clarity, hierarchy, or emotion. If in doubt, remove it.
2. **Hierarchy first, decoration last.** Type scale, spacing, and contrast carry
   the page. Animations, gradients, glows, and textures only amplify a hierarchy
   that already works in grayscale wireframe form.
3. **Restraint is the signal.** Apple, Linear, Vercel, Stripe, Arc, Rauno,
   Family, Things, MUBI — they all win by removing, not adding. Ship the
   smallest visual that conveys the intent.
4. **Every pixel is intentional.** No accidental margins, no orphaned dividers,
   no off-grid spacing, no "close enough" type sizes. Snap to the system.
5. **Motion has meaning.** Animation is feedback or narrative — never garnish.
   Ease curves, durations, and stagger timing communicate physicality.
6. **Accessibility is craft, not compliance.** Focus rings, contrast, motion
   preferences, semantics, and target sizes are part of the aesthetic, not a tax
   on it.
7. **Performance is design.** A slow hero is bad design. Budget assets,
   lazy-mount video, prefer poster images, respect reduced motion.

## 2. Modern design trend vocabulary (2025-2026)

Apply selectively — these are tools, not requirements.

- **Editorial type pairing** — large display serif (`Fraunces`) against a
  precise neo-grotesk / mono. Large hero numerals, italic accent words. Already
  in this repo via `font-fraunces` and `<em className="silver">`.
- **Silver / chrome gradients** — subtle metallic fills on display text and
  marks. Use `text-silver-grad`, `--silver-grad`. Avoid rainbow.
- **Glassmorphism, restrained** — `backdrop-blur` + 1 px hairline border +
  low-opacity surface. Never stacked, never over busy backgrounds.
- **Aurora / soft orbs** — diffused radial glows behind hero or section
  transitions. Already available as `.aurora-orb`. Limit to ≤ 2 per viewport.
- **Bento layouts** — asymmetric grid of cards with mixed aspect ratios. Already
  implemented in `BentoSection`.
- **Marquee bands** — slow, paused-on-hover logo or proof rows. `.marquee`.
- **Sheen / specular hover** — a single diagonal light pass on cards (`.sheen`)
  conveys premium materiality.
- **Conic glow borders** — animated halo on featured CTAs only (`.glow-border`).
- **Scroll-driven cinematic intros** — `<ScrollReveal variant="blur">` on
  headlines, `stagger` on grids. One reveal per section, not per element.
- **Micro-interactions** — `btn-lift` on CTAs, `link-underline` origin-aware
  underline, focus-visible cyan ring. Subtle, fast (≤ 200 ms).
- **Tactile depth** — soft, low-spread shadows (`--shadow-card`,
  `--shadow-blue`) over elevated surfaces. No drop-shadow stacks.
- **Editorial whitespace** — generous `mt-40` between sections, large header
  rules, oversized headlines, breathing room around CTAs.
- **Spatial typography** — `lineHeight: 0.92–0.95` on display, `1.55` on body.
- **Color discipline** — neutral base + ONE accent (the blue). Categorical chips
  for taxonomy only.

Trends to AVOID in this product: heavy 3D, neumorphism, skeuomorphic textures,
emoji-as-icon, stock gradients (purple/pink), neon, brutalism, animated
backgrounds with parallax noise, autoplay audio, scroll-jacking.

## 3. UX heuristics (apply on every change)

For every UI decision, run this checklist mentally:

- **Clarity** — Can a first-time visitor explain what this section is for in one
  sentence after 3 seconds?
- **Hierarchy** — Is there exactly one primary action per viewport?
- **Affordance** — Does interactive look interactive? Does static look static?
- **Consistency** — Does this match an existing pattern in the repo? If not, is
  the deviation worth a new pattern?
- **Feedback** — Does every interaction have hover, focus, active, disabled, and
  loading states?
- **Forgiveness** — Can users recover from any action? Confirm destructive ones.
- **Performance perception** — Skeletons, posters, and optimistic UI before
  spinners.
- **Accessibility** — Keyboard reachable, screen-reader sensible, contrast AA,
  motion-reduced safe, target ≥ 40 px.
- **Responsive** — Verify at 360, 768, 1024, 1440, 1920. No horizontal scroll.
  Cards re-stack, never crop critical content.
- **Empty / error / long states** — Designed, not afterthoughts.

## 4. Type, space, color discipline

- **Type scale** — Use `clamp()` for fluid display headings. Body: 14–16 px.
  Labels: 12–13 px mono uppercase letterspaced (.section-num).
- **Line length** — 50–75 ch for body copy. `max-width: 580` is the standard
  subhead width in this repo.
- **Spacing system** — 4 px base. Multiples of 4 for micro, 8 for components,
  16/24/32 for sections, 40+ for inter-section. Snap to Tailwind shorthands.
- **Color rules** — neutrals carry 90 % of the surface, blue carries CTAs and
  one or two highlights, categorical colors carry tags only. Never decorate with
  color.
- **Contrast** — body text ≥ 4.5:1, large display ≥ 3:1, focus ring ≥ 3:1
  against adjacent surface.

## 5. Motion craft

- **Durations** — 150 ms (micro feedback), 220 ms (hover transitions), 320 ms
  (component reveal), 600–900 ms (cinematic section reveal). Never longer unless
  narrative demands.
- **Easing** — `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint) for entrances,
  `cubic-bezier(0.4, 0, 0.2, 1)` (standard) for interactions. Never `linear`
  except for marquees and infinite ambient loops.
- **Stagger** — 60 ms between siblings (already encoded in `.stagger-item`).
  Stop at 12 children; longer lists feel slow.
- **Reduced motion** — every keyframe utility ships with a
  `prefers-reduced-motion: reduce` guard. New utilities must too.
- **One headline reveal per section** — don't animate the subhead and the
  divider and the eyebrow separately. Treat the header as one unit.

## 6. Decision heuristics (when proposing changes)

When asked to "improve" or "make it nicer," prefer in this order:

1. **Remove** — fewer elements, fewer styles, fewer colors.
2. **Align** — snap to grid, unify spacing, align type baselines.
3. **Strengthen hierarchy** — bigger headings, smaller meta, more whitespace.
4. **Refine motion** — slow it down, add easing, stagger, respect reduced
   motion.
5. **Add restraint signals** — hairline borders, mono eyebrow, italic accent.
6. **Only then add** new visual layers (glow, sheen, aurora, gradient).

If you find yourself reaching for a new library, a new color, or a new font —
stop and revisit the brief. The answer is almost always in the system already.

## 7. Critique format (use when reviewing a section)

When asked to audit or review, structure feedback as:

```
SECTION: <name>
WORKING: <2–4 things already strong>
ISSUES:
  - <severity: blocker | major | minor> — <observation> — <fix>
PROPOSED CHANGES:
  1. <smallest first, ordered by impact>
RISKS: <regressions, accessibility, perf>
```

Be specific. "The spacing is off" is not a critique. "Header bottom rule has 56
px below but cards top with 0 — collapse to 40 px and add 16 px margin to first
card" is.

## 8. Output discipline

- Implement changes; don't only describe them.
- Match existing code style exactly (quote style, JSX attribute formatting,
  inline-style vs className conventions, file structure).
- Don't refactor untouched code, don't add comments to unchanged blocks, don't
  introduce new dependencies.
- Run `npm run lint && npm run build` after every UI change. Both green.
- When in doubt, mirror the closest existing component.

## 9. Authoritative references for this product

- `snap-pro-ui` skill — tokens, utilities, asset specs, ScrollReveal API.
- [components/](../../../components/) — canonical patterns. Read the closest
  existing section before authoring a new one.
- [app/globals.css](../../../app/globals.css) — single source of truth for every
  token and animation utility.

The taste bar: every section should feel like it could ship on the homepage of
Linear, Vercel, Apple, or Family. If it wouldn't pass that bar, iterate.
