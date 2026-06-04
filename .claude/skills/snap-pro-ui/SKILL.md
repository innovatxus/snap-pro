---
name: snap-pro-ui
description: |
  Design system, animation utilities, component conventions, and asset specs
  for the Snap Pro Next.js marketing site. USE FOR: building or modifying any
  section/component in this repo, applying animations, choosing card sizes,
  creating image/video assets that fit existing cards, adding accessibility
  treatments. DO NOT USE FOR: backend logic, deployment, infra. ALWAYS read
  before editing components, adding sections, or producing media assets.
---

# Snap Pro UI Skill

Authoritative reference for working on the Snap Pro Next.js 16 marketing site.
Read this BEFORE editing any component, adding a section, or producing
image/video assets. Conventions here override any defaults from your training
data.

## 1. Stack & build

- **Next.js 16.2.6** (Turbopack) — see `node_modules/next/dist/docs/` first;
  APIs may differ from training data. Heed deprecation notices.
- **React 19.2.4**, TypeScript strict.
- **Tailwind v4** via `@tailwindcss/postcss`. Prefer **shorthand utilities**
  (`mb-15`, `max-w-140`, `lg:min-h-155`) over arbitrary values (`mb-[60px]`) —
  the linter warns on arbitrary classes.
- **ESLint 9**, rule `react-hooks/set-state-in-effect` is active. Never call
  `setState` synchronously inside `useEffect`. Use lazy initial state instead.

Commands:

```bash
npm run dev     # Turbopack dev server
npm run build   # production build
npm run lint    # zero errors required before commit
```

Both `lint` and `build` must pass green. Five static routes expected: `/`,
`/_not-found`, `/icon.svg`, `/templates`.

## 2. Design tokens (`app/globals.css`)

Colors, gradients, shadows, radii are exposed as CSS variables. Reference them
via `var(--token)` in inline styles or Tailwind arbitrary values.

```text
Surfaces:    --bg, --bg-soft, --surface, --surface-2, --surface-3
Lines:       --line, --line-2
Ink/text:    --ink, --mute, --mute-2
Silver:      --silver-1..5, --silver-grad, --silver-grad-dark
Blue:        --blue, --blue-2, --blue-3, --blue-deep, --blue-grad,
             --blue-glow, --blue-glow-soft
Categories:  --cat-cut, --cat-stage, --cat-enhance, --cat-format
Radii:       --r-sm 8, --r-md 12, --r-lg 18, --r-xl 22, --r-pill 999
Shadows:     --shadow-card, --shadow-blue, --shadow-silver
Timing:      --t-fast 0.2s, --t-base 0.3s
```

Helper classes already exist:

- `font-fraunces` — display serif
- `text-silver-grad`, `text-blue-grad` — gradient text fills
- `em.silver` — italic silver chrome accent inside headings
- `chip`, `chip-blue`, `tag-cut|stage|enhance|format`
- `section-num`, `blue-pulse`, `lime-dot`, `cyan-dot`
- `phone-frame`, `card-hover`, `card-hover-xl`
- `service-tab`, `service-tab.active`
- `gallery-scroll`, `ba-stage`, `ba-divider-line`, `ba-handle`
- `hero-fallback-bg`, `hero-video`, `hero-animate`, `hero-animate-d1..d5`
- `scroll-indicator-icon`, `nav-dropdown`
- `scene-active`, `glow-breathe`, `shimmer-bg`

## 3. Animation utilities

All motion utilities respect `prefers-reduced-motion`. Compose freely.

### Scroll reveals

Wrap content in the `<ScrollReveal>` component
([components/ScrollReveal.tsx](../../../components/ScrollReveal.tsx)).

```tsx
<ScrollReveal variant="up">                          // default
<ScrollReveal variant="blur">                        // headlines
<ScrollReveal variant="fade" | "right" | "left" | "scale" />
<ScrollReveal stagger>...children with .stagger-item.../</ScrollReveal>
<ScrollReveal as="section" repeat threshold={0.2} />
```

Variants: `up | fade | right | left | scale | blur`. Use `blur` for cinematic
section headlines; `up` for cards; `stagger` on grid wrappers (children get
auto-staggered up to 12 items).

### Hover & interaction

- `sheen` — diagonal light sweep on hover (cards)
- `tilt` — 3D perspective lift on hover
- `btn-lift` — magnetic press feedback (CTAs)
- `glow-border` — conic-gradient halo (featured/primary cards only)
- `link-underline` — origin-aware underline grow

### Decorative

- `aurora-orb` — drifting blurred radial blob (hero / heavy sections)
- `marquee` + `marquee-track` — paused-on-hover conveyor with edge mask
- `float-idle` — subtle 6 s vertical idle

### Always include reduced-motion guard

When adding any new keyframe animation, append:

```css
@media (prefers-reduced-motion: reduce) {
  .your-class {
    animation: none !important;
    transform: none !important;
  }
}
```

## 4. Component conventions

### Section structure (canonical pattern)

```tsx
<section id='...' className='relative z-10 mt-40'>
  <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
    <ScrollReveal
      variant='blur'
      className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'
    >
      <div
        style={{
          borderBottom: "1px solid var(--line)",
          paddingBottom: 28,
          marginBottom: 56,
          width: "100%",
        }}
      >
        <h2
          className='font-fraunces'
          style={{
            fontSize: "clamp(40px, 5vw, 76px)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "var(--ink)",
          }}
        >
          Headline <em className='silver'>word</em>.
        </h2>
        <p
          style={{
            marginTop: 16,
            maxWidth: 580,
            color: "var(--mute)",
            fontSize: 16,
            lineHeight: 1.55,
          }}
        >
          Subhead copy.
        </p>
      </div>
    </ScrollReveal>

    <ScrollReveal stagger className='grid ...'>
      {items.map((item) => (
        <div key={item.id} className='stagger-item card-hover sheen ...'>
          ...
        </div>
      ))}
    </ScrollReveal>
  </div>
</section>
```

Rules:

- Container width: `max-w-370` (1480 px) with `px-12` (`max-[720px]:px-4`
  mobile).
- Section spacing: `mt-40` between major sections.
- Header bottom rule:
  `border-bottom: 1px solid var(--line); padding-bottom: 28; margin-bottom: 56`.
- Headline font: `font-fraunces`, weight 300, `lineHeight: 0.95`,
  `clamp(40px, 5vw, 76px)`.
- Subhead: `max-width: 580`, `color: var(--mute)`, `font-size: 16`,
  `line-height: 1.55`.
- Cards: `var(--surface)` bg, `1px solid var(--line)`, `var(--r-lg|xl)` radius.
- Featured card: `glow-border` + `box-shadow: var(--shadow-blue)`.

### Page render order ([app/page.tsx](../../../app/page.tsx))

```
Hero → NichesSection → CreativePowerSection → SubCategoriesSection
→ ServicesSection → PhoneShowcase → BeforeAfterGallery → SocialSizes
→ Pricing → Integrations → FinalCTA → BentoSection → Footer
```

Do not reorder without explicit user request.

## 5. Image / video asset specifications

Use `<Image fill className="object-cover" sizes="...">` from `next/image` for
images. For video, prefer
`<video autoPlay muted loop playsInline preload="metadata">` with a poster JPG
and consider lazy-mounting via `IntersectionObserver`.

Universal video defaults: H.264 High MP4 (primary) + VP9 WebM (sibling), 24–30
fps, no audio (`-an`), `-movflags +faststart`, 2 s GOP, sRGB Rec.709, seamless
loop (first frame = last frame).

### Per-section asset specs

| Section                 | Component                                | Aspect                        | Master                    | Display (largest) | File budget |
| ----------------------- | ---------------------------------------- | ----------------------------- | ------------------------- | ----------------- | ----------- |
| Hero background         | `Hero` + `HeroVideo`                     | 16:9                          | **1920×1080**             | full bleed        | 1.8 MB MP4  |
| Niche cards             | `NichesSection`                          | 16:9 (image area 310 px tall) | **1920×1080**             | ~688×310          | 900 KB MP4  |
| Creative thumbnail      | `CreativePowerSection` left card         | ~4:3 (236×174)                | **1024×768**              | 236×174           | 350 KB MP4  |
| Personal/Business tools | `SubCategoriesSection` `CompactToolCard` | 4:3                           | **1024×768** (or 800×600) | ~232×174          | 300 KB MP4  |
| Service cards           | `ServicesSection`                        | 4:3                           | **1024×768**              | ~334×250          | 350 KB MP4  |
| Phone dashboard         | `PhoneShowcase` `DashboardScreen`        | 1:2 (9:19.5)                  | **480×960** (or 720×1440) | 240×480           | 400 KB MP4  |
| UGC bento cards         | `BentoSection`                           | 9:16                          | **720×1280**              | ~328×583          | 700 KB MP4  |

Posters: same aspect as video, JPG q=4 (ffmpeg) ≤ 35 KB. Always provide a poster
— never let the user see a blank well while video buffers.

### Safe-area rules per card type

- **Niche cards (16:9):** subject in center 70% horizontally, center 70%
  vertically.
- **Tool / Service / Creative (4:3):** subject in **top 60%** of frame (bottom
  is overlaid by gradient + text labels).
- **Phone dashboard (1:2):** keep subject in y = 44–940 of master; avoid four
  96×96 px corners (rounded mask).
- **UGC (9:16):** subject in middle 44 % vertically, dark/quiet area at bottom
  40 % for title overlay; center 70 % horizontally.

### ffmpeg recipe (drop-in)

Replace `WIDTH:HEIGHT` and `BITRATE`:

```bash
ffmpeg -i source.mov -an -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -vf "scale=WIDTH:HEIGHT:force_original_aspect_ratio=increase,crop=WIDTH:HEIGHT" \
  -r 30 -g 60 -b:v BITRATEk -maxrate $(BITRATE*1.25)k -bufsize $(BITRATE*2)k \
  -movflags +faststart out.mp4

ffmpeg -i out.mp4 -an -c:v libvpx-vp9 -b:v $(BITRATE*0.75)k -row-mt 1 \
  -deadline good -cpu-used 2 out.webm

ffmpeg -i out.mp4 -frames:v 1 -q:v 4 out.jpg
```

## 6. Accessibility (non-negotiable)

- All interactive elements
  (`a, button, [role="button"], input, textarea, select`) inherit
  `:focus-visible` 2 px cyan outline globally — do not remove.
- Decorative media: `aria-hidden="true"`. Functional media: meaningful
  `aria-label`.
- Icon-only buttons: always `aria-label`.
- Image `alt`: descriptive, never the filename.
- Touch targets ≥ 40×40 px.
- Respect `prefers-reduced-motion` — every keyframe animation must have a
  reduced-motion guard.
- Maintain WCAG AA contrast on text.

## 7. Implementation discipline

- Make only the changes requested. Do not add features, refactor, or "improve"
  unrelated code.
- Do not add comments, JSDoc, or type annotations to code you didn't change.
- Do not create markdown documentation files unless explicitly requested.
- Read files before editing them. Match existing indentation, quote style, JSX
  attribute patterns (single quotes for strings, double for JSX).
- Use shorthand Tailwind classes; avoid arbitrary values when a shorthand
  exists.
- Inline styles are acceptable for design-token references and one-off layout
  numbers, consistent with existing components.
- After any edit, run `npm run lint && npm run build` and confirm both pass
  green before stopping.

## 8. Common pitfalls (learned the hard way)

- **`react-hooks/set-state-in-effect`** — fixed in `HeroVideo.tsx` by using a
  lazy initial state. Same pattern required anywhere matchMedia-derived state is
  needed at mount.
- **Arbitrary Tailwind classes** — `mb-[60px]` warns; use `mb-15`.
  `max-w-[560px]` → `max-w-140`.
- **Stagger structure** — parent gets `ScrollReveal stagger`, each direct child
  gets `stagger-item`. Don't nest a per-item `<ScrollReveal>` inside.
- **JSX wrapping ScrollReveal** — when changing `<div>` → `<ScrollReveal>`,
  remember the inner wrapper `<div>` and adjust closing tags symmetrically.
- **Push to remote** — repo is on branch `master` against default `main`. Auth
  required (`gh auth login`).

## 9. Quick reference: when to use what

| Need                          | Use                                                            |
| ----------------------------- | -------------------------------------------------------------- |
| Cinematic section intro       | `<ScrollReveal variant="blur">` on header                      |
| Cards reveal in sequence      | `<ScrollReveal stagger>` on grid + `stagger-item` on cards     |
| Hover light sweep             | `sheen`                                                        |
| 3D hover lift                 | `tilt`                                                         |
| Magnetic CTA                  | `btn-lift`                                                     |
| Highlight featured tier       | `glow-border` + `box-shadow: var(--shadow-blue)`               |
| Decorative animated bg        | `aurora-orb` (with random offsets)                             |
| Logo conveyor                 | `marquee` + `marquee-track` (children doubled for loop)        |
| Italic silver word in heading | `<em className="silver">`                                      |
| Mono eyebrow label            | `.section-num` or inline `font-family: var(--font-geist-mono)` |
