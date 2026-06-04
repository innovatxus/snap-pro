import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const NICHES = [
  // ── Existing niches (updated service lists) ───────────────────────────────

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

  // ── New niches ────────────────────────────────────────────────────────────

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

export default function NichesSection() {
  return (
    <section id="niches" className="relative z-10 mt-40">
      <div className="max-w-370 mx-auto px-12 max-[720px]:px-4">
        {/* Section header */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          style={{
            borderBottom: "1px solid var(--line)",
            paddingBottom: 28,
            marginBottom: 56,
          }}
        >
          <div>
            <h2
              className="font-fraunces"
              style={{
                fontSize: "clamp(40px, 5vw, 76px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--ink)",
              }}
            >
              Built for every <em className="silver">seller.</em>
            </h2>
            <p
              style={{
                marginTop: 16,
                maxWidth: 580,
                color: "var(--mute)",
                fontSize: 16,
                lineHeight: 1.55,
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              {NICHES.length} industries, each with a dedicated preset toolkit
              tuned to its unique visual demands.
            </p>
          </div>
          <div
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 11,
              color: "var(--mute)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {NICHES.length} industries · {NICHES.reduce((acc, n) => acc + n.services.length, 0)} tools
          </div>
        </div>

        {/* 3-col niche grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {NICHES.map((niche, i) => (
            <ScrollReveal
              key={niche.id}
              variant="up"
              delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
            >
              <div
                className="card-hover sheen tilt rounded-[22px] overflow-hidden flex flex-col relative"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-xl)",
                  height: 540,
                }}
              >
                {/* Video background */}
                {niche.video && (
                  <video
                    src={niche.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                )}

                {/* Image background */}
                {niche.image && !niche.video && (
                  <Image
                    src={niche.image}
                    alt={`${niche.name}${niche.suffix ? " " + niche.suffix : ""} photography`}
                    fill
                    className="object-cover"
                    style={{ zIndex: 0 }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                )}

                {/* Gradient overlay */}
                {(niche.video || niche.image) && (
                  <div
                    className="absolute inset-0"
                    style={{
                      zIndex: 1,
                      background:
                        "linear-gradient(to bottom, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.85) 100%)",
                    }}
                  />
                )}

                {/* Image area */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 310, background: "transparent", zIndex: 2 }}
                >
                  {/* Category pill */}
                  <div className="absolute top-3 left-3">
                    <div
                      className="chip"
                      style={{
                        background: "rgba(10,10,10,0.7)",
                        backdropFilter: "blur(12px)",
                        fontSize: 9,
                        padding: "4px 10px",
                        color: "var(--mute)",
                        letterSpacing: "0.16em",
                      }}
                    >
                      {niche.label}
                    </div>
                  </div>

                  {/* Niche heading */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: 24,
                        fontWeight: 700,
                        lineHeight: 1.05,
                        letterSpacing: "0.01em",
                        color: "var(--ink)",
                        minHeight: 50,
                      }}
                    >
                      {niche.name}
                      {niche.suffix ? ` ${niche.suffix} ` : " "}
                      <em className="silver">{niche.italicWord}.</em>
                    </h3>
                  </div>
                </div>

                {/* Services chips */}
                <div
                  className="p-4 flex flex-col gap-3 relative"
                  style={{ zIndex: 2, height: 230 }}
                >
                  <div className="flex flex-wrap gap-2" style={{ minHeight: 52 }}>
                    {niche.services.slice(0, 3).map((svc) => (
                      <span
                        key={svc.name}
                        className={`chip ${svc.featured ? "chip-blue" : ""}`}
                        style={
                          svc.featured ? { fontSize: 9, gap: 4 } : { fontSize: 9 }
                        }
                      >
                        {svc.featured && (
                          <span
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              background: "#38BDF8",
                              boxShadow: "0 0 6px rgba(56,189,248,0.8)",
                              flexShrink: 0,
                              display: "inline-block",
                            }}
                          />
                        )}
                        {svc.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span />
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: 11,
                        color: "var(--blue)",
                        fontWeight: 600,
                      }}
                    >
                      {niche.services.length}
                    </span>
                  </div>

                  {/* CTA row */}
                  <div
                    className="flex items-center justify-between mt-auto pt-2"
                    style={{ borderTop: "1px solid var(--line)" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                        fontSize: 13,
                        color: "var(--mute)",
                      }}
                    >
                      Explore {niche.name}
                    </span>
                    <button
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 999,
                        background: "var(--silver-grad)",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "var(--shadow-silver)",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                          stroke="#000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
