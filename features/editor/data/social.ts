import type { Niche } from "./niches";

/**
 * Single source of truth for social platform export sizes.
 *
 * Consumed by:
 *   - components/SocialSizes.tsx           (marketing grid)
 *   - features/editor/data/niches.ts       (registers each platform as a
 *                                            Niche-shaped editor surface)
 *
 * Each `SocialPlatform` corresponds to one `Niche` whose `services` are the
 * platform's export sizes — so the existing `/edit/[niche]` and
 * `/edit/[niche]/[tool]` routes pick them up automatically.
 */

export interface SocialSizePreset {
  /** Friendly preset name, e.g. "Profile Photo". */
  name: string;
  /** Pixel dimensions in `W × H` form. */
  dim: string;
}

export interface SocialPlatform {
  /** Platform id without the `social-` prefix (e.g. `facebook`). */
  id: string;
  /** Display name (e.g. "Facebook"). */
  name: string;
  sizes: SocialSizePreset[];
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: "facebook",
    name: "Facebook",
    sizes: [
      { name: "Profile Photo", dim: "180 × 180" },
      { name: "Cover Photo", dim: "851 × 315" },
      { name: "Post Image", dim: "1200 × 630" },
      { name: "Story", dim: "1080 × 1920" },
      { name: "Event Cover", dim: "1920 × 1005" },
    ],
  },
  {
    id: "instagram",
    name: "Instagram",
    sizes: [
      { name: "Square Post", dim: "1080 × 1080" },
      { name: "Portrait Post", dim: "1080 × 1350" },
      { name: "Story / Reel", dim: "1080 × 1920" },
      { name: "Landscape Post", dim: "1080 × 566" },
      { name: "Profile Photo", dim: "320 × 320" },
    ],
  },
  {
    id: "tiktok",
    name: "TikTok",
    sizes: [
      { name: "Video", dim: "1080 × 1920" },
      { name: "Feed Square", dim: "1080 × 1080" },
      { name: "Profile Photo", dim: "200 × 200" },
      { name: "Thumbnail Cover", dim: "1080 × 608" },
    ],
  },
  {
    id: "youtube",
    name: "YouTube",
    sizes: [
      { name: "Thumbnail", dim: "1280 × 720" },
      { name: "Channel Art", dim: "2560 × 1440" },
      { name: "Profile Photo", dim: "800 × 800" },
      { name: "End Screen", dim: "1920 × 1080" },
    ],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    sizes: [
      { name: "Profile Photo", dim: "400 × 400" },
      { name: "Cover Photo", dim: "1584 × 396" },
      { name: "Post Image", dim: "1200 × 627" },
      { name: "Company Logo", dim: "300 × 300" },
    ],
  },
  {
    id: "x-twitter",
    name: "X / Twitter",
    sizes: [
      { name: "Profile Photo", dim: "400 × 400" },
      { name: "Header Image", dim: "1500 × 500" },
      { name: "Post Image", dim: "1200 × 675" },
    ],
  },
  {
    id: "pinterest",
    name: "Pinterest",
    sizes: [
      { name: "Standard Pin", dim: "1000 × 1500" },
      { name: "Square Pin", dim: "1000 × 1000" },
      { name: "Story Pin", dim: "1080 × 1920" },
    ],
  },
  {
    id: "snapchat",
    name: "Snapchat",
    sizes: [
      { name: "Snap Ad", dim: "1080 × 1920" },
      { name: "Discover Tile", dim: "360 × 600" },
    ],
  },
  {
    id: "threads",
    name: "Threads",
    sizes: [
      { name: "Square Post", dim: "1080 × 1080" },
      { name: "Landscape Post", dim: "1080 × 566" },
    ],
  },
];

/** Build the niche slug used in `/edit/[niche]` for a platform. */
export function socialNicheSlug(platformId: string): string {
  return `social-${platformId}`;
}

/** Compose the chip/service name shown in the editor (includes dimensions). */
export function socialServiceName(size: SocialSizePreset): string {
  return `${size.name} · ${size.dim}`;
}

/**
 * Project the platform catalogue into `Niche[]` shape so the existing editor
 * route machinery (lookups, static-params, header rendering) works as-is.
 */
export function buildSocialNiches(): Niche[] {
  return SOCIAL_PLATFORMS.map((p) => ({
    id: socialNicheSlug(p.id),
    name: p.name,
    suffix: "",
    italicWord: "ready",
    tagline: p.sizes
      .slice(0, 3)
      .map((s) => s.name.toUpperCase())
      .join(" · "),
    label: "Social",
    services: [
      ...p.sizes.map((s, i) => ({
        name: socialServiceName(s),
        featured: i === 0,
      })),
    ],
  }));
}
