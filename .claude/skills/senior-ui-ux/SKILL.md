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

## 8. Reusable component design

Design components so the next change is cheap. A "good" component is one a
junior engineer can drop in without reading the implementation, and a senior
engineer can extend without rewriting.

### 8.1 Component contract

Every component must declare an explicit contract:

- **Props are an interface, not a kitchen sink.** Name them after intent
  (`variant`, `tone`, `density`, `align`), never after implementation
  (`fontSize16`, `bgGradient`).
- **Required props ≤ 3.** If you need more, the component is doing too much.
  Split it or accept a config object.
- **Sensible defaults.** Every optional prop has a default that produces the
  most common variant with no extra wiring.
- **Discriminated unions over boolean explosions.** Replace `isPrimary`,
  `isGhost`, `isDanger` with `variant: "primary" | "ghost" | "danger"`.
- **Forward `className`, `style`, and `children`.** Composition over config.
- **Forward refs** with `forwardRef` whenever the component renders a real DOM
  element a parent might want to focus, scroll, or measure.
- **Polymorphic when it matters.** Accept an `as` prop (typed `ElementType`) for
  primitives that legitimately render different tags (`Heading`,
  `Button`-as-`<a>`, `ScrollReveal`).

### 8.2 Variants & tokens, not magic numbers

- Every visual decision (color, spacing, radius, shadow, duration) resolves to a
  **design token** (`var(--blue)`, `var(--r-xl)`, `var(--shadow-blue)`).
- One-off magic numbers are a code smell. If the value is intentional, promote
  it to a token. If it's accidental, snap it to the system.
- Prefer **CVA-style variant maps** (or a plain object literal in this repo's
  pattern) over chained ternaries:

  ```ts
  const TONE = {
    primary: { bg: "var(--blue-grad)", fg: "white" },
    silver: { bg: "var(--silver-grad)", fg: "#000" },
    ghost: { bg: "transparent", fg: "var(--ink)" },
  } as const;
  ```

### 8.3 Composition rules

- **Slot pattern over prop drilling.** A `Card` accepts `header`, `body`,
  `footer` slots; it does not accept `title`, `subtitle`, `ctaLabel`, `ctaHref`,
  `ctaIcon`, etc.
- **Headless logic, styled shell.** Hooks like `useDisclosure`, `useReveal`,
  `useMediaQuery` carry behavior; presentational components carry style. Don't
  mix.
- **Single source of truth per concern.** A reveal component owns intersection
  logic; sections never re-implement `IntersectionObserver`.
- **Children > config arrays** when the consumer needs custom markup. Use config
  arrays only when shape is enforced (pricing tiers, nav items).
- **No prop renaming.** If a child takes `disabled`, the parent passes
  `disabled` through, not `inactive`.

### 8.4 State & data ownership

- **Lift state only as far as needed.** Local first, context second, store last.
  No global state for UI flags that one component owns.
- **Server components by default** in this Next.js app. Mark `"use client"` only
  when the component needs hooks, refs, listeners, or browser-only APIs.
- **Memoize on evidence, not instinct.** `useMemo` / `useCallback` /
  `React.memo` are profile-driven, not decorative.
- **Stable keys.** Never use array index as a key for items that can reorder.
- **Controlled vs uncontrolled is a deliberate choice.** Document it in props.

### 8.5 Reusability tests (run mentally)

Before declaring a component "reusable," answer all five with yes:

1. Can I drop it into a different section with no edits to its file?
2. Can I theme it with tokens alone, no style overrides?
3. Does it survive empty / very long / RTL / dark / reduced-motion content?
4. Is the prop API documented by the type signature alone?
5. Will a teammate understand its purpose from the name + first 10 lines?

### 8.6 What lives where (this repo)

- [components/ScrollReveal.tsx](../../../components/ScrollReveal.tsx) —
  intersection-driven reveal primitive (`variant`, `stagger`, `as`, `delay`).
  Reuse; never re-implement.
- [components/](../../../components/) — section components. Each section is a
  cohesive unit; do not split prematurely.
- [app/globals.css](../../../app/globals.css) — utility classes (`card-hover`,
  `sheen`, `tilt`, `btn-lift`, `glow-border`, `marquee`, `aurora-orb`,
  `stagger`/`stagger-item`). Compose; never inline-replicate.
- New shared primitives go in `components/ui/` (create the folder when the
  second consumer appears — never on the first).

### 8.7 The "rule of three"

Don't extract a component on the first occurrence. On the **third** occurrence
of the same pattern, extract. Premature abstraction is more expensive than
duplication.

## 9. Production-grade engineering discipline

Write code as if it ships to production tonight and is read by a stranger
tomorrow.

### 9.1 Clean code non-negotiables

- **Naming carries intent.** `tier`, not `t`. `isFeaturedTier`, not `flag`.
  Function names are verbs (`renderPricingTier`, `formatCredit`); component and
  type names are nouns (`PricingTier`, `TierProps`).
- **Functions do one thing.** If you can describe a function with "and," split
  it. Target ≤ 30 lines, ≤ 3 levels of nesting.
- **Early returns over nested conditionals.** Guard clauses first; happy path
  flat at the bottom.
- **No dead code.** Delete commented-out blocks, unused imports, unreachable
  branches immediately.
- **No magic strings/numbers** (status codes, role names, breakpoints,
  durations). Promote to a typed constant or token.
- **Comments explain _why_, never _what_.** If the code needs a comment to
  explain what it does, rename a variable or extract a function instead.
- **Public APIs are documented by types**, not by JSDoc. Strict TypeScript, no
  `any`, no `as` casts unless asserting a runtime guarantee that's commented.

### 9.2 TypeScript discipline

- `strict: true` everywhere. Treat type errors as build failures.
- **Domain types live next to domain code**, not in a global `types.ts` dump.
- Prefer `interface` for object contracts (extends well), `type` for unions,
  intersections, and mapped types.
- **Avoid `enum`**; prefer `as const` objects + derived union types.
- **Discriminated unions** for state machines and variant props.
- **Narrow at boundaries**: API responses, URL params, form input. Inside the
  app, types should already be precise.
- **`unknown` over `any`** for untrusted data. Always narrow before use.
- **Exhaustive switches** with `assertNever` on the default branch.

### 9.3 React discipline

- Hooks at the top level, never conditional. Custom hooks named `useX`.
- **Effects are an escape hatch**, not a default. If you can derive it, derive
  it. If you can compute it during render, compute it.
- **No setState in `useEffect` synchronously** (lint rule
  `react-hooks/set-state-in-effect`). Use lazy initial state or derive from
  props.
- **Cleanup every subscription** (`return () => observer.disconnect()`).
- Server components by default in Next.js 16; client components are opt-in.
- Suspense + streaming for async data; never block the route shell.

### 9.4 Performance budget

- **First Load JS** ≤ 200 KB per route (gzip). Audit with `next build` output.
- **LCP** ≤ 2.5 s, **CLS** ≤ 0.1, **INP** ≤ 200 ms on a 4× CPU-throttled Moto
  G4.
- **No layout thrash.** Animate only `transform` and `opacity`. Reads before
  writes.
- **Images** via `next/image` with explicit `sizes`; videos lazy-mounted with
  posters; fonts via `next/font` with `display: swap`.
- **Tree-shake**: prefer named imports, avoid `import * as`.
- **No client-side data fetching for above-the-fold content.** Use RSC + cache.

### 9.5 Accessibility (engineering side)

- Semantic HTML first (`<button>`, `<a>`, `<nav>`, `<main>`, `<h1>`–`<h6>`),
  ARIA only as a last resort.
- Every interactive element has a focus state, a label, and a keyboard path.
- `aria-hidden` only on truly decorative content; never on focusable elements.
- Skip-link to `<main id="content">` on every page.
- Tested with keyboard-only and a screen reader before shipping.

### 9.6 Error handling, edge states, observability

- **Render every state**: empty, loading, partial, error, offline,
  unauthenticated, rate-limited. None are afterthoughts.
- **Error boundaries** at route + section level. Never let the whole tree die.
- **Fail loud in dev, soft in prod.** Surface errors in dev console with
  context; show user-safe fallback in prod.
- **Log decisions, not noise.** Log every server error with a correlation ID and
  the inputs that produced it.
- **No silent catches.** `catch` either handles, rethrows, or logs — never
  swallows.

### 9.7 Security baseline (OWASP-aware)

- Treat every input as hostile. Validate at the boundary; trust nothing inside.
- **Never** dangerously set HTML on user content. If you must, sanitize with a
  vetted library.
- Secrets never in client bundles. Use server actions, route handlers, or env
  vars on the server.
- Strict CSP. No inline scripts, no `unsafe-eval`. Hash or nonce images and
  styles where required.
- Auth on every mutation; verify origin and session.
- Avoid `target="_blank"` without `rel="noopener noreferrer"`.

### 9.8 Testing strategy

- **Unit** for pure logic and utility functions.
- **Component tests** (Testing Library) for behavior and accessibility, not
  implementation details.
- **E2E** (Playwright) for the critical user journeys: hero → pricing → CTA.
- **Visual regression** for key sections at 360, 768, 1440.
- **Lint and types in CI** — green on every PR. No skipped tests, no `.only`.

### 9.9 Git & change hygiene

- Commits are imperative, ≤ 72 chars subject, optional body explaining _why_.
- One concern per commit. Refactors do not ride along with features.
- PRs ≤ 400 lines of diff when possible. Include before/after screenshots for UI
  work.
- Never `--force` push shared branches. `--force-with-lease` if you must.
- `npm run lint && npm run build` green before push, every time.

### 9.10 Reading list (mental model anchors)

- Tailwind v4 + CSS variables for tokens (this repo).
- shadcn/ui + Radix primitives — the canonical reusable-component pattern.
- Linear, Vercel, Stripe engineering blogs — the bar for craft.
- Kent C. Dodds on testing trophies; Dan Abramov on `useEffect`; Sebastian
  Markbåge on RSC mental model.

## 10. Output discipline

- Implement changes; don't only describe them.
- Match existing code style exactly (quote style, JSX attribute formatting,
  inline-style vs className conventions, file structure).
- Don't refactor untouched code, don't add comments to unchanged blocks, don't
  introduce new dependencies.
- Run `npm run lint && npm run build` after every UI change. Both green.
- When in doubt, mirror the closest existing component.

## 11. Authoritative references for this product

- `snap-pro-ui` skill — tokens, utilities, asset specs, ScrollReveal API.
- [components/](../../../components/) — canonical patterns. Read the closest
  existing section before authoring a new one.
- [app/globals.css](../../../app/globals.css) — single source of truth for every
  token and animation utility.

The taste bar: every section should feel like it could ship on the homepage of
Linear, Vercel, Apple, or Family. If it wouldn't pass that bar, iterate.
