# ShotStudio — Performance Baseline
*Measured: 2026-07-14 · Next.js 16.2.6 production build*

---

## 1. Stack

| Layer | Version / Detail |
|---|---|
| Framework | Next.js 16.2.6 (Turbopack) |
| Runtime | React 19.2.4 |
| Language | TypeScript strict |
| CSS | Tailwind v4 via @tailwindcss/postcss |
| Auth / DB | Firebase 12.15.0 (auth + firestore, client-side) |
| Hosting | Vercel (no vercel.json — Next.js headers only) |
| Bundle analyser | ❌ not installed |
| Lighthouse CI | ❌ not configured |

---

## 2. Asset inventory

### 2a. Totals

| Category | File count | Total size on disk |
|---|---|---|
| MP4 videos | 37 | ~72 MB |
| WebM videos | 46 | ~35 MB |
| PNG images | 47 | ~85 MB |
| JPG images | 8 | ~0.6 MB |
| SVG / other | 7 | ~0.8 MB |
| **Grand total** | **145** | **~196 MB** |

### 2b. Top 20 heaviest files

| Size | File |
|---|---|
| 5.75 MB | `tools-videos/Ghost Mannequin.mp4` ← **DUPLICATE** |
| 5.55 MB | `tools-videos/ghost manquin.mp4` ← **DUPLICATE** |
| 3.07 MB | `tools-videos/old imagre restoration.mp4` |
| 3.05 MB | `images/Textile snap pro app.png.png` |
| 2.99 MB | `images/antiques-vintage-snap-pro.png` |
| 2.90 MB | `tools-videos/distortion correction fixes.mp4` |
| 2.87 MB | `niches-videos/Textile_Fabrics_refined_web.mp4` |
| 2.83 MB | `niches-videos/Textile_Fabrics_refined_web.webm` |
| 2.79 MB | `images/real-estate-snap-pro.png` |
| 2.76 MB | `images/pattren repeat.png` |
| 2.68 MB | `tools-videos/sky replace.mp4` |
| 2.65 MB | `tools-videos/twillit sky change.mp4` |
| 2.61 MB | `images/Photography-snap-pro.png` |
| 2.60 MB | `tools-videos/background remove.mp4` |
| 2.56 MB | `images/Sky-Replace.png` |
| 2.53 MB | `images/makeup-snap-pro.png` |
| 2.48 MB | `tools-videos/crowd blur.mp4` |
| 2.47 MB | `images/old photo.png` |
| 2.47 MB | `tools-videos/wrinkle remove.mp4` |
| 2.43 MB | `tools-videos/pdf export.mp4` |

### 2c. Tool card videos vs. target budget

Every tool card renders at ~334×250 px. The skill file budget: **≤350 KB per clip**.

| File | MP4 size | WebM size | Status |
|---|---|---|---|
| Ghost Mannequin.mp4 + ghost manquin.mp4 | 5.75 MB + 5.55 MB | 886 KB + 1.37 MB | ❌ **DUPLICATE + 16× over** |
| old imagre restoration.mp4 | 3.07 MB | 1.17 MB | ❌ 8.8× over |
| distortion correction fixes.mp4 | 2.90 MB | 1.73 MB | ❌ 8.3× over |
| sky replace.mp4 | 2.68 MB | 1.20 MB | ❌ 7.7× over |
| twillit sky change.mp4 | 2.65 MB | 1.18 MB | ❌ 7.6× over |
| background remove.mp4 | 2.60 MB | 1.04 MB | ❌ 7.4× over |
| crowd blur.mp4 | 2.48 MB | 1.22 MB | ❌ 7.1× over |
| wrinkle remove.mp4 | 2.47 MB | 860 KB | ❌ 7.1× over |
| pdf export.mp4 | 2.43 MB | 1.07 MB | ❌ 6.9× over |
| room staging.mp4 | 2.37 MB | 1.20 MB | ❌ 6.8× over |
| object erase.mp4 | 2.27 MB | 1.09 MB | ❌ 6.5× over |
| packaging.mp4 | 2.10 MB | 893 KB | ❌ 6.0× over |
| room declutering.mp4 | 2.09 MB | 916 KB | ❌ 6.0× over |
| Show room Gen.mp4 | 1.77 MB | 929 KB | ❌ 5.1× over |
| reflect .mp4 | 1.72 MB | 551 KB | ❌ 4.9× over |
| 360 spin.mp4 | 1.70 MB | 1.02 MB | ❌ 4.9× over |
| cast shadow.mp4 | 1.64 MB | 566 KB | ❌ 4.7× over |
| ligth and mood.mp4 | 1.64 MB | 429 KB | ❌ 4.7× over |
| studio white.mp4 | 1.18 MB | 410 KB | ❌ 3.4× over |
| auto backdrop.mp4 | 1.18 MB | 432 KB | ❌ 3.4× over |
| mirror reflection.mp4 | 1.20 MB | 413 KB | ❌ 3.4× over |
| color variants.mp4 | 1.04 MB | 438 KB | ❌ 3.0× over |

**None of the tool card videos meet the ≤350 KB target.** Total tool video weight: ~38 MB MP4 + ~22 MB WebM = 60 MB for clips that display at thumbnail size.

### 2d. Images — none have WebP/AVIF on-disk variants

All product/gallery images are stored as PNG (1–3 MB each). Next.js Image Optimization converts them to AVIF/WebP at request time **only** when rendered through the `<Image>` component from `next/image`. Two code paths bypass this:

1. **`CreativePowerSection.tsx`** — carousel scene images (`loft.png`, `studio.png`, `outdoor.png`, `minimal.png`) use raw `<img>` tags. These are served as-is (1–2 MB PNG each).
2. **Direct `public/` URLs in `<source>` or CSS** — not currently the case but a future risk.

---

## 3. JavaScript bundle (production build)

| Chunk | Size (raw) | Notes |
|---|---|---|
| `0.7nu__5l090t.js` | **675 KB** | Firebase SDK (auth + firestore) — loaded on every page |
| `10u3y4bw1ayzs.js` | 227 KB | Likely app code / page components |
| `02g3221oh~3le.js` | 150 KB | |
| `03~yq9q893hmn.js` | 113 KB | |
| `0d3shmwh5_nmn.js` | 55 KB | |
| `0clukkb4dtf-f.js` | 53 KB | |
| `0dgq26a5_oy.a.js` | 51 KB | |
| All other chunks | ~271 KB | |
| **Total JS** | **~1,595 KB** | (~450 KB gzipped est.) |

CSS: 58 KB (single Tailwind stylesheet).

**Zero dynamic imports exist in the app.** All 14 home-page sections are imported statically at module level. This means the Firebase SDK ships in the critical path even for the landing page where auth is never triggered.

---

## 4. Critical loading path (home page)

1. HTML shell (~15 KB)
2. `turbopack.js` (11 KB) + main JS chunks → **Firebase initialises immediately** even if user never signs in
3. Hero video (`hero-main-web.webm`, 804 KB) — loads via `HeroVideo.tsx` on mount
4. First scroll: NichesSection fires `LazyVideo` observers with `rootMargin: "300px"` — up to **6 niche videos** start fetching simultaneously
5. Further scroll: ServicesSection fires **23 tool card** LazyVideo observers — up to 23 more video streams
6. `LazyVideo` default `preload` prop is `"auto"` — callers that omit it will cause the browser to buffer the full video

**There is no prioritisation between hero video, niche videos, and tool videos. A slow connection will contend across all of them.**

---

## 5. Other issues found

| Issue | Impact | Details |
|---|---|---|
| Duplicate ghost mannequin videos | 11 MB wasted | `Ghost Mannequin.mp4/webm` + `ghost manquin.mp4/webm` — identical content, different names |
| Orphaned hero files | 2.8 MB wasted | `main_hero_web.mp4` (1.7 MB) + `main1.webm` (1.1 MB) + `main1.jpg` — not referenced in any source file |
| Logo SVG is 781 KB | 781 KB wasted per page load | `public/logo/snap-pro-logo.svg` referenced in `Logo.tsx` — almost certainly contains an embedded raster |
| CSP blocks Firebase | Auth broken in prod | `connect-src 'self'` forbids Firebase REST/WebSocket endpoints. Firebase only works if env vars are absent (isFirebaseConfigured = false) |
| No poster for tool cards | Visible blank flash | `ServicesSection` calls `<LazyVideo>` without a `poster` prop — cards show only a gradient until video plays |
| `LazyVideo` rootMargin 300px | Over-eager loading | Videos start loading 300px before viewport — fine on desktop, but on mobile with 23 tool cards this can trigger 10+ simultaneous video downloads |
| `<img>` in CreativePowerSection | Bypasses AVIF/WebP | 4 carousel images (~6 MB total) served as raw PNG |

---

## 6. Lighthouse baseline

> Lighthouse cannot be run from the CLI environment (requires a browser). Scores must be measured manually in Chrome DevTools or via `lighthouse` CLI with a local production server.
>
> **Action required:** Run `npm run build && npx serve .next` then measure `/` on mobile throttled (Moto G4 / 150 ms RTT / 1.6 Mbps). Record LCP, CLS, TBT, INP, and Total Transfer Size here before Phase 3 begins.

Estimated LCP risk: **HIGH** — hero video starts loading on mount with no prioritised preload, and the logo SVG (781 KB) is a render-blocking image in the navbar.

---

*PERF_RESULTS.md will be written after Phase 3 with a before/after table.*
