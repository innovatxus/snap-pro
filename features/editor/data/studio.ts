import type { Niche } from "./niches";

/**
 * Single source of truth for the unified "Studio" tool catalogue rendered by
 * `components/ServicesSection.tsx`.
 *
 * Mirrored into a `Niche`-shaped entry so the existing `/edit/[niche]/[tool]`
 * routes pick up every tool automatically. Each service's display name must
 * combine the `name` and `italic` pieces exactly as they appear on the
 * ServicesSection card — the slug derived from this string is what each card's
 * `Link` targets.
 */

export interface StudioService {
  /** e.g. "Background" — leading word(s) on the card. */
  name: string;
  /** e.g. "Remove" — the silver-italic trailing word. */
  italic: string;
  /** Category tag (cut · stage · enhance · format). */
  cat: "cut" | "stage" | "enhance" | "format";
  /** Credit cost label (e.g. "2 cr"). */
  credit: string;
}

export const STUDIO_SERVICES: StudioService[] = [
  // ── CUT (4) ─────────────────────────────────────────────────────────────
  { name: "Background", italic: "Remove", cat: "cut", credit: "1 cr" },
  { name: "Virtual", italic: "Modeling", cat: "cut", credit: "2 cr" },
  { name: "Object", italic: "Erase", cat: "cut", credit: "1 cr" },
  { name: "Ghost", italic: "Mannequin", cat: "cut", credit: "2 cr" },
  // ── STAGE (11) ──────────────────────────────────────────────────────────
  { name: "Auto", italic: "Backdrop", cat: "stage", credit: "2 cr" },
  { name: "Room", italic: "Stage", cat: "stage", credit: "3 cr" },
  { name: "Cast", italic: "Shadow", cat: "stage", credit: "2 cr" },
  { name: "Glass", italic: "Reflection", cat: "stage", credit: "2 cr" },
  { name: "Sky", italic: "Replace", cat: "stage", credit: "2 cr" },
  { name: "Room", italic: "Declutter", cat: "stage", credit: "2 cr" },
  { name: "Showroom", italic: "Gen", cat: "stage", credit: "3 cr" },
  { name: "Perspective", italic: "Fix", cat: "stage", credit: "2 cr" },
  { name: "Studio", italic: "White", cat: "stage", credit: "1 cr" },
  { name: "Twilight", italic: "Convert", cat: "stage", credit: "3 cr" },
  { name: "Box", italic: "Mockup", cat: "stage", credit: "2 cr" },
  // ── ENHANCE (12) ────────────────────────────────────────────────────────
  { name: "Upscale", italic: "4K", cat: "enhance", credit: "3 cr" },
  { name: "Color", italic: "Match", cat: "enhance", credit: "2 cr" },
  { name: "Wrinkle", italic: "Smooth", cat: "enhance", credit: "1 cr" },
  { name: "Reflection", italic: "Clean", cat: "enhance", credit: "2 cr" },
  { name: "Studio", italic: "Pack", cat: "enhance", credit: "4 cr" },
  { name: "Crowd", italic: "Blur", cat: "enhance", credit: "2 cr" },
  { name: "Light &", italic: "Mood", cat: "enhance", credit: "3 cr" },
  { name: "Color", italic: "Variants", cat: "enhance", credit: "2 cr" },
  { name: "HDR", italic: "Balance", cat: "enhance", credit: "2 cr" },
  { name: "Old Photo", italic: "Restore", cat: "enhance", credit: "3 cr" },
  { name: "Macro", italic: "Sharpen", cat: "enhance", credit: "2 cr" },
  { name: "Skin", italic: "Smooth", cat: "enhance", credit: "1 cr" },
  // ── FORMAT (3) ──────────────────────────────────────────────────────────
  { name: "Pattern", italic: "Repeat", cat: "format", credit: "2 cr" },
  { name: "360°", italic: "Spin", cat: "format", credit: "3 cr" },
  { name: "PDF", italic: "Export", cat: "format", credit: "2 cr" },
];

/** Display name combining `name` + `italic` for slug derivation and header. */
export function studioServiceName(
  s: Pick<StudioService, "name" | "italic">,
): string {
  return `${s.name} ${s.italic}`;
}

/** The unified Studio editor surface exposed at `/edit/studio`. */
export function buildStudioNiche(): Niche {
  return {
    id: "studio",
    name: "Studio",
    suffix: "",
    italicWord: "tools",
    tagline: "CUT · STAGE · ENHANCE · FORMAT",
    label: "Suite",
    services: STUDIO_SERVICES.map((s, i) => ({
      name: studioServiceName(s),
      featured: i < 3,
    })),
  };
}
