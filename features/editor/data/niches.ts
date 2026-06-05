/**
 * Single source of truth for niches + their tool catalogues.
 *
 * Consumed by:
 *   - components/NichesSection.tsx           (marketing grid)
 *   - app/edit/[niche]/page.tsx              (full editor)
 *   - app/edit/[niche]/[tool]/page.tsx       (single-tool focus)
 *
 * Add a niche by appending an entry. Add a tool by adding an item to its
 * `services` list — both UI surfaces pick it up automatically.
 */

export type NicheService = {
  name: string;
  /** Marks the hero/preset tool for the niche. */
  featured?: boolean;
};

export type Niche = {
  id: string;
  name: string;
  suffix: string;
  italicWord: string;
  tagline: string;
  label: string;
  /** One of `video` | `image` is required for the marketing card. */
  video?: string;
  image?: string;
  services: NicheService[];
};

export const NICHES: Niche[] = [
  {
    id: "fashion",
    name: "Fashion",
    suffix: "& Apparel",
    italicWord: "styled",
    tagline: "GHOST MANNEQUIN · WRINKLE SMOOTH · COLOR MATCH",
    label: "Fashion",
    video: "/assets/video/cards/nitches/fashion and apparel.mp4",
    services: [
      { name: "Ghost Mannequin", featured: true },
      { name: "Background Remove" },
      { name: "Color Match" },
      { name: "Cast Shadow" },
      { name: "Wrinkle Smooth" },
      { name: "Auto Backdrop" },
      { name: "Upscale 4K" },
      { name: "Color Variants" },
    ],
  },
  {
    id: "textile",
    name: "Textile",
    suffix: "& Fabrics",
    italicWord: "refined",
    tagline: "PATTERN REPEAT · COLOR VARIANTS · MACRO SHARPEN",
    label: "Textile",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Pattern Repeat", featured: true },
      { name: "Color Variants" },
      { name: "Macro Sharpen" },
      { name: "Tile Preview" },
      { name: "Texture Enhance" },
      { name: "Auto Backdrop" },
    ],
  },
  {
    id: "realtors",
    name: "Real",
    suffix: "Estate",
    italicWord: "staged",
    tagline: "ROOM STAGE · SKY REPLACE · TWILIGHT CONVERT",
    label: "Real Estate",
    video: "/assets/video/cards/nitches/real estate.mp4",
    services: [
      { name: "Room Stage", featured: true },
      { name: "Sky Replace" },
      { name: "HDR Balance" },
      { name: "Perspective Fix" },
      { name: "Room Declutter" },
      { name: "Twilight Convert" },
      { name: "Upscale 4K" },
      { name: "Lawn Enhance" },
    ],
  },
  {
    id: "electronics",
    name: "Electronics",
    suffix: "& Tech",
    italicWord: "precision",
    tagline: "REFLECTION CLEAN · STUDIO WHITE · EDGE SHARPEN",
    label: "Tech",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Reflection Clean", featured: true },
      { name: "Studio White" },
      { name: "Macro Sharpen" },
      { name: "360° Spin" },
      { name: "Perspective Fix" },
      { name: "Upscale 4K" },
      { name: "Edge Sharpen" },
    ],
  },
  {
    id: "beauty",
    name: "Beauty",
    suffix: "& Skincare",
    italicWord: "glowing",
    tagline: "GLASS REFLECTION · MACRO SHARPEN · SKIN SMOOTH",
    label: "Beauty",
    video: "/assets/video/cards/nitches/beauty card.mp4",
    services: [
      { name: "Glass Reflection", featured: true },
      { name: "Background Remove" },
      { name: "Color Match" },
      { name: "Macro Sharpen" },
      { name: "Cast Shadow" },
      { name: "Skin Smooth" },
      { name: "Upscale 4K" },
      { name: "Light & Mood" },
      { name: "Color Variants" },
    ],
  },
  {
    id: "antiques",
    name: "Antiques",
    suffix: "& Vintage",
    italicWord: "timeless",
    tagline: "OLD PHOTO RESTORE · MACRO SHARPEN · COLOR MATCH",
    label: "Antiques",
    image:
      "https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Old Photo Restore", featured: true },
      { name: "Macro Sharpen" },
      { name: "Color Match" },
      { name: "Auto Backdrop" },
      { name: "Background Remove" },
      { name: "Patina Boost" },
    ],
  },
  {
    id: "furniture",
    name: "Furniture",
    suffix: "& Decor",
    italicWord: "ambient",
    tagline: "ROOM STAGE · PERSPECTIVE FIX · CAST SHADOW",
    label: "Furniture",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Room Stage", featured: true },
      { name: "Cast Shadow" },
      { name: "Auto Backdrop" },
      { name: "Upscale 4K" },
      { name: "Perspective Fix" },
      { name: "HDR Balance" },
      { name: "Color Match" },
    ],
  },
  {
    id: "auto",
    name: "Cars",
    suffix: "& Vehicles",
    italicWord: "showroom-ready",
    tagline: "SHOWROOM GEN · SKY REPLACE · 360° SPIN",
    label: "Automotive",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Showroom Gen", featured: true },
      { name: "Sky Replace" },
      { name: "Reflection Clean" },
      { name: "360° Spin" },
      { name: "Cast Shadow" },
      { name: "Plate Blur" },
      { name: "Paint Enhance" },
      { name: "Perspective Fix" },
    ],
  },
  {
    id: "jewelry",
    name: "Jewelry",
    suffix: "& Gold",
    italicWord: "brilliant",
    tagline: "MACRO SHARPEN · SPARKLE BOOST · REFLECTION CLEAN",
    label: "Jewellery",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Macro Sharpen", featured: true },
      { name: "Glass Reflection" },
      { name: "Reflection Clean" },
      { name: "Upscale 4K" },
      { name: "Sparkle Boost" },
      { name: "Stone Color True" },
      { name: "21K vs 18K Tone" },
      { name: "Auto Backdrop" },
    ],
  },
  {
    id: "products",
    name: "Products",
    suffix: "",
    italicWord: "perfect",
    tagline: "BACKGROUND REMOVE · CAST SHADOW · UPSCALE 4K",
    label: "Products",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Background Remove", featured: true },
      { name: "Auto Backdrop" },
      { name: "Cast Shadow" },
      { name: "Upscale 4K" },
    ],
  },
  {
    id: "events",
    name: "Special",
    suffix: "Events",
    italicWord: "memorable",
    tagline: "AUTO BACKDROP · UPSCALE 4K",
    label: "Events",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Auto Backdrop", featured: true },
      { name: "Upscale 4K" },
    ],
  },
  {
    id: "food",
    name: "Food",
    suffix: "& Drink",
    italicWord: "appetizing",
    tagline: "COLOR MATCH · STEAM FX · LIGHT & MOOD",
    label: "Food & F&B",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Color Match", featured: true },
      { name: "Light & Mood" },
      { name: "Background Remove" },
      { name: "Steam & Sizzle FX" },
      { name: "Plate Cleanup" },
      { name: "Marketplace Resize" },
      { name: "Menu Photo Resizer" },
      { name: "Arabic Caption Overlay" },
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    suffix: "Sellers",
    italicWord: "converting",
    tagline: "BACKGROUND REMOVE · MARKETPLACE RESIZE · BULK CATALOG",
    label: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Background Remove", featured: true },
      { name: "Marketplace Resize" },
      { name: "Cast Shadow" },
      { name: "Glass Reflection" },
      { name: "Bulk Catalog Editor" },
      { name: "Brand Kit Lock" },
    ],
  },
  {
    id: "hotels",
    name: "Hotels",
    suffix: "& Hospitality",
    italicWord: "luminous",
    tagline: "HDR BALANCE · SKY REPLACE · PERSPECTIVE FIX",
    label: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "HDR Balance", featured: true },
      { name: "Sky Replace" },
      { name: "Perspective Fix" },
      { name: "Light & Mood" },
      { name: "Window Light Lift" },
      { name: "Pool & Sky Refresh" },
      { name: "Wide-angle Correction" },
      { name: "Mood Presets" },
    ],
  },
  {
    id: "weddings",
    name: "Wedding",
    suffix: "& Events",
    italicWord: "timeless",
    tagline: "SKIN SMOOTH · VENUE LIGHT MATCH · ALBUM LAYOUT",
    label: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Skin Smooth", featured: true },
      { name: "Light & Mood" },
      { name: "Crowd Blur" },
      { name: "Henna Color True" },
      { name: "Group Sharpen" },
      { name: "Venue Light Match" },
      { name: "Album Layout AI" },
    ],
  },
  {
    id: "construction",
    name: "Construction",
    suffix: "& Architecture",
    italicWord: "striking",
    tagline: "SKY REPLACE · DRONE STITCH · HDR BALANCE",
    label: "Architecture",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Sky Replace", featured: true },
      { name: "HDR Balance" },
      { name: "Perspective Fix" },
      { name: "Upscale 4K" },
      { name: "Site Cleanup" },
      { name: "Drone Stitch" },
      { name: "Render Polish" },
      { name: "Watermark Stamp" },
    ],
  },
  {
    id: "creators",
    name: "Influencers",
    suffix: "& Creators",
    italicWord: "viral",
    tagline: "SKIN SMOOTH · FORMAT PACK · BACKGROUND REMOVE",
    label: "Creators",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Skin Smooth", featured: true },
      { name: "Marketplace Resize" },
      { name: "Background Remove" },
      { name: "Color Match" },
      { name: "One-Tap Brand Look" },
      { name: "Cover Maker" },
      { name: "Background Pop" },
      { name: "Outfit Color Sync" },
    ],
  },
  {
    id: "cafes",
    name: "Cafés",
    suffix: "& Specialty",
    italicWord: "steaming",
    tagline: "COLOR MATCH · STEAM HALO · LIGHT & MOOD",
    label: "Cafés",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Color Match", featured: true },
      { name: "Light & Mood" },
      { name: "Background Remove" },
      { name: "Coffee Color Match" },
      { name: "Steam Halo" },
      { name: "Counter Cleanup" },
      { name: "Window-Light Mood" },
      { name: "Story Sticker Pack" },
    ],
  },
  {
    id: "travel",
    name: "Travel",
    suffix: "& Tourism",
    italicWord: "breathtaking",
    tagline: "SKY REPLACE · CROWD BLUR · GOLDEN HOUR",
    label: "Travel",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Sky Replace", featured: true },
      { name: "Crowd Blur" },
      { name: "HDR Balance" },
      { name: "Upscale 4K" },
      { name: "Golden Hour Lift" },
      { name: "Sky & Sand True-Tone" },
      { name: "Panorama Stitch" },
      { name: "Brochure Layout" },
    ],
  },
  {
    id: "editorial",
    name: "News",
    suffix: "& Editorial",
    italicWord: "print-perfect",
    tagline: "SKIN SMOOTH · UPSCALE 4K · WEB/PRINT EXPORT",
    label: "Editorial",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Skin Smooth", featured: true },
      { name: "Upscale 4K" },
      { name: "Marketplace Resize" },
      { name: "Wire Photo Enhance" },
      { name: "Crop & Caption Studio" },
      { name: "Source-Safe Watermark" },
      { name: "Color-Accurate Skin Tones" },
      { name: "Web/Print Export" },
    ],
  },
];

// ── Slug helpers ─────────────────────────────────────────────────────────────

/** URL-safe slug from a tool/service name (e.g. "Color Match" → "color-match"). */
export function toolSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/°/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Sub-category single-purpose niches consumed by `components/SubCategoriesSection.tsx`.
 * Each entry routes to the same `/edit/[niche]` editor used by primary niches —
 * `getNicheBySlug` / `generateStaticParams` look in BOTH lists so the URL
 * surface is unified.
 */
export const SUB_TOOLS: Niche[] = [
  // ── Personal ────────────────────────────────────────────────────────────
  {
    id: "graduations",
    name: "Graduations",
    suffix: "",
    italicWord: "polished",
    tagline: "STUDIO BACKDROP · COLOR GRADE · PRINT EXPORT",
    label: "Personal",
    services: [
      { name: "Studio Backdrop", featured: true },
      { name: "Background Remove" },
      { name: "Skin Smooth" },
      { name: "Color Grade" },
      { name: "Print Export" },
    ],
  },
  {
    id: "anniversaries",
    name: "Anniversaries",
    suffix: "",
    italicWord: "memorable",
    tagline: "GOLDEN HOUR · SKIN SMOOTH · LIGHT & MOOD",
    label: "Personal",
    services: [
      { name: "Golden Hour", featured: true },
      { name: "Skin Smooth" },
      { name: "Light & Mood" },
      { name: "Color Match" },
    ],
  },
  {
    id: "makeup-guide",
    name: "Make Up Guide",
    suffix: "",
    italicWord: "flawless",
    tagline: "SKIN SMOOTH · COLOR MATCH · HDR POLISH",
    label: "Personal",
    services: [
      { name: "Skin Smooth", featured: true },
      { name: "Color Match" },
      { name: "HDR Polish" },
      { name: "Light & Mood" },
    ],
  },
  {
    id: "face-recognition",
    name: "Face Recognition",
    suffix: "",
    italicWord: "precise",
    tagline: "FACE DETECT · SKIN SMOOTH · BACKGROUND REMOVE",
    label: "Personal",
    services: [
      { name: "Face Detect", featured: true },
      { name: "Skin Smooth" },
      { name: "Background Remove" },
      { name: "Color Match" },
    ],
  },
  {
    id: "gym-staging",
    name: "Gym Staging",
    suffix: "",
    italicWord: "bold",
    tagline: "SKY REPLACE · BACKGROUND REMOVE · HDR POLISH",
    label: "Personal",
    services: [
      { name: "Sky Replace", featured: true },
      { name: "Background Remove" },
      { name: "Color Grade" },
      { name: "HDR Polish" },
    ],
  },
  {
    id: "event-portraits",
    name: "Event Portraits",
    suffix: "",
    italicWord: "clean",
    tagline: "CROWD BLUR · SKIN SMOOTH · LIGHT & MOOD",
    label: "Personal",
    services: [
      { name: "Crowd Blur", featured: true },
      { name: "Skin Smooth" },
      { name: "Light & Mood" },
      { name: "Color Grade" },
    ],
  },
  {
    id: "hajj-umrah",
    name: "Hajj & Umrah",
    suffix: "",
    italicWord: "restored",
    tagline: "OLD PHOTO RESTORE · FACE RECOVERY · WARM TONE",
    label: "Personal",
    services: [
      { name: "Old Photo Restore", featured: true },
      { name: "Face Recovery" },
      { name: "Warm Tone Grade" },
      { name: "Print Export" },
    ],
  },
  // ── Business ────────────────────────────────────────────────────────────
  {
    id: "digital-business-card",
    name: "Digital Business Card",
    suffix: "",
    italicWord: "professional",
    tagline: "BACKGROUND REMOVE · STUDIO WHITE · BRAND THEME",
    label: "Business",
    services: [
      { name: "Background Remove", featured: true },
      { name: "Studio White" },
      { name: "Brand Theme Apply" },
      { name: "Print Export" },
    ],
  },
  {
    id: "digital-brochure",
    name: "Digital Brochure",
    suffix: "",
    italicWord: "print-ready",
    tagline: "STUDIO WHITE · COLOR MATCH · PRINT EXPORT",
    label: "Business",
    services: [
      { name: "Studio White", featured: true },
      { name: "Color Match" },
      { name: "Brand Theme Apply" },
      { name: "Print Export" },
    ],
  },
  {
    id: "digital-menu",
    name: "Digital Menu",
    suffix: "",
    italicWord: "appetizing",
    tagline: "FOOD POP · STUDIO WHITE · STEAM HALO",
    label: "Business",
    services: [
      { name: "Food Pop", featured: true },
      { name: "Studio White" },
      { name: "Steam Halo" },
      { name: "Color Match" },
    ],
  },
  {
    id: "resume-redesign",
    name: "Resume Redesign",
    suffix: "",
    italicWord: "polished",
    tagline: "BACKGROUND REMOVE · SKIN SMOOTH · COLOR MATCH",
    label: "Business",
    services: [
      { name: "Background Remove", featured: true },
      { name: "Skin Smooth" },
      { name: "Color Match" },
      { name: "Print Export" },
    ],
  },
  {
    id: "logo-creation",
    name: "Logo Creation",
    suffix: "",
    italicWord: "on-brand",
    tagline: "LOGO CONCEPT · BRAND THEME · VECTOR EXPORT",
    label: "Business",
    services: [
      { name: "Logo Concept", featured: true },
      { name: "Brand Theme Apply" },
      { name: "Vector Export" },
      { name: "Color Match" },
    ],
  },
  {
    id: "brand-kit",
    name: "Brand Kit",
    suffix: "",
    italicWord: "consistent",
    tagline: "BRAND THEME · COLOR MATCH · VECTOR EXPORT",
    label: "Business",
    services: [
      { name: "Brand Theme Apply", featured: true },
      { name: "Color Match" },
      { name: "Vector Export" },
      { name: "Print Export" },
    ],
  },
  {
    id: "product-redesign",
    name: "Product Redesign",
    suffix: "",
    italicWord: "reimagined",
    tagline: "COLOR VARIANT · MATERIAL SWAP · A/B COMPARE",
    label: "Business",
    services: [
      { name: "Color Variant", featured: true },
      { name: "Material Swap" },
      { name: "A/B Compare" },
      { name: "Studio White" },
    ],
  },
  {
    id: "product-catalogues",
    name: "Product Catalogues",
    suffix: "",
    italicWord: "catalogued",
    tagline: "CATALOGUE LAYOUT · SKU SYNC · PRICE INJECTION",
    label: "Business",
    services: [
      { name: "Catalogue Layout", featured: true },
      { name: "SKU Sync" },
      { name: "Price Injection" },
      { name: "Brand Theme Apply" },
    ],
  },
  {
    id: "business-cards",
    name: "Business Cards",
    suffix: "",
    italicWord: "print-ready",
    tagline: "LOGO PLACEMENT · QR GENERATE · BLEED SETUP",
    label: "Business",
    services: [
      { name: "Logo Placement", featured: true },
      { name: "QR Generate" },
      { name: "Bleed Setup" },
      { name: "Mockup Render" },
    ],
  },
];

export function getNicheBySlug(slug: string): Niche | undefined {
  return (
    NICHES.find((n) => n.id === slug) ?? SUB_TOOLS.find((n) => n.id === slug)
  );
}

export function getToolByNicheAndSlug(
  nicheSlug: string,
  toolSlugStr: string,
): { niche: Niche; tool: NicheService } | undefined {
  const niche = getNicheBySlug(nicheSlug);
  if (!niche) return undefined;
  const tool = niche.services.find((s) => toolSlug(s.name) === toolSlugStr);
  if (!tool) return undefined;
  return { niche, tool };
}
