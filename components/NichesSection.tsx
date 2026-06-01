import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const NICHES = [
  {
    id: "fashion",
    name: "Fashion",
    suffix: "& Apparel",
    italicWord: "styled",
    tagline: "GHOST MANNEQUIN · WRINKLE SMOOTH · COLOR MATCH",
    label: "Fashion",
    toolCount: 7,
    video: "/assets/video/cards/nitches/fashion and apparel.mp4",
    services: [
      { name: "Ghost Mannequin", featured: true },
      { name: "Background Remove" },
      { name: "Auto Backdrop" },
      { name: "Cast Shadow" },
      { name: "Upscale 4K" },
      { name: "Color Match" },
      { name: "Wrinkle Smooth" },
    ],
  },
  {
    id: "textile",
    name: "Textile",
    suffix: "& Fabrics",
    italicWord: "refined",
    tagline: "BACKGROUND REMOVE · AUTO BACKDROP · UPSCALE 4K",
    label: "Textile",
    toolCount: 3,
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Background Remove", featured: true },
      { name: "Auto Backdrop" },
      { name: "Upscale 4K" },
    ],
  },
  {
    id: "realtors",
    name: "Realtors",
    suffix: "& Listings",
    italicWord: "staged",
    tagline: "VIRTUAL STAGING · FURNITURE AI · DECLUTTERING",
    label: "Real Estate",
    toolCount: 3,
    video: "/assets/video/cards/nitches/real estate.mp4",
    services: [
      { name: "Virtual Staging", featured: true },
      { name: "Room Decluttering" },
      { name: "Furniture Placement AI" },
    ],
  },
  {
    id: "electronics",
    name: "Electronics",
    suffix: "& Tech",
    italicWord: "precision",
    tagline: "BACKGROUND REMOVE · AUTO BACKDROP · UPSCALE 4K",
    label: "Tech",
    toolCount: 3,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Background Remove", featured: true },
      { name: "Auto Backdrop" },
      { name: "Upscale 4K" },
    ],
  },
  {
    id: "beauty",
    name: "Beauty",
    suffix: "& Skincare",
    italicWord: "glowing",
    tagline: "BACKGROUND REMOVE · AUTO BACKDROP · UPSCALE 4K",
    label: "Beauty",
    toolCount: 3,
    video: "/assets/video/cards/nitches/beauty card.mp4",
    services: [
      { name: "Background Remove", featured: true },
      { name: "Auto Backdrop" },
      { name: "Upscale 4K" },
    ],
  },
  {
    id: "antiques",
    name: "Antiques",
    suffix: "& Vintage",
    italicWord: "timeless",
    tagline: "BACKGROUND REMOVE · AUTO BACKDROP · UPSCALE 4K",
    label: "Antiques",
    toolCount: 3,
    image:
      "https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Background Remove", featured: true },
      { name: "Auto Backdrop" },
      { name: "Upscale 4K" },
    ],
  },
  {
    id: "furniture",
    name: "Furniture",
    suffix: "& Decor",
    italicWord: "ambient",
    tagline: "BACKGROUND REMOVE · AUTO BACKDROP · UPSCALE 4K",
    label: "Furniture",
    toolCount: 3,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Background Remove", featured: true },
      { name: "Auto Backdrop" },
      { name: "Upscale 4K" },
    ],
  },
  {
    id: "auto",
    name: "Auto",
    suffix: "& Dealers",
    italicWord: "showroom-ready",
    tagline: "AUTO BACKDROP · SHOWROOM GENERATION",
    label: "Automotive",
    toolCount: 2,
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Auto Backdrop", featured: true },
      { name: "Showroom Generation" },
    ],
  },
  {
    id: "jewelry",
    name: "Jewelry",
    suffix: "",
    italicWord: "brilliant",
    tagline: "AUTO BACKDROP · UPSCALE 4K",
    label: "Jewellery",
    toolCount: 2,
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Auto Backdrop", featured: true },
      { name: "Upscale 4K" },
    ],
  },
  {
    id: "products",
    name: "Products",
    suffix: "",
    italicWord: "perfect",
    tagline: "BACKGROUND REMOVE · CAST SHADOW · UPSCALE 4K",
    label: "Products",
    toolCount: 4,
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
    toolCount: 2,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Auto Backdrop", featured: true },
      { name: "Upscale 4K" },
    ],
  },
  // Kept from original — not in updated list, not repetitive
  {
    id: "food",
    name: "Food",
    suffix: "& Drink",
    italicWord: "fresh",
    tagline: "COLOR CORRECT · LIGHT & MOOD",
    label: "Food",
    toolCount: 3,
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop",
    services: [
      { name: "Color Correct", featured: true },
      { name: "Light & Mood" },
      { name: "Social Square" },
    ],
  },
];

export default function NichesSection() {
  return (
    <section id='niches' className='relative z-10 mt-40'>
      <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
        {/* Section header */}
        <div
          className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'
          style={{
            borderBottom: "1px solid var(--line)",
            paddingBottom: 28,
            marginBottom: 56,
          }}
        >
          <div>
            <h2
              className='font-fraunces'
              style={{
                fontSize: "clamp(40px, 5vw, 76px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--ink)",
              }}
            >
              Built for every <em className='silver'>seller.</em>
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
              From fashion to automotive, every industry gets a dedicated
              toolkit tuned to its unique visual demands.
            </p>
          </div>
        </div>

        {/* 3-col niche grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
          {NICHES.map((niche, i) => (
            <ScrollReveal key={niche.id} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
              <div
                className='card-hover rounded-[22px] overflow-hidden flex flex-col relative'
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-xl)",
                  height: 540,
                }}
              >
                {/* Full-card video background */}
                {niche.video && (
                  <video
                    src={niche.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload='metadata'
                    className='absolute inset-0 w-full h-full object-cover z-0'
                  />
                )}

                {/* Full-card image background (when no video) */}
                {niche.image && !niche.video && (
                  <Image
                    src={niche.image}
                    alt={`${niche.name}${niche.suffix ? " " + niche.suffix : ""} product photography`}
                    fill
                    className='object-cover'
                    style={{ zIndex: 0 }}
                    sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
                  />
                )}

                {/* Gradient overlay */}
                {(niche.video || niche.image) && (
                  <div
                    className='absolute inset-0'
                    style={{
                      zIndex: 1,
                      background:
                        "linear-gradient(to bottom, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.85) 100%)",
                    }}
                  />
                )}

                {/* Image area */}
                <div
                  className='relative overflow-hidden'
                  style={{
                    height: 310,
                    background: "transparent",
                    zIndex: 2,
                  }}
                >
                  {/* Top-left: category pill */}
                  <div className='absolute top-3 left-3'>
                    <div
                      className='chip'
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

                  {/* Bottom overlay: niche name */}
                  <div className='absolute bottom-0 left-0 right-0 p-4'>
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
                      <em className='silver'>{niche.italicWord}.</em>
                    </h3>
                  </div>
                </div>

                {/* Services chips area */}
                <div
                  className='p-4 flex flex-col gap-3 relative'
                  style={{ zIndex: 2, height: 230 }}
                >
                  <div className='flex items-center justify-between'>
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

                  <div
                    className='flex flex-wrap gap-2'
                    style={{ minHeight: 52 }}
                  >
                    {niche.services.slice(0, 3).map((svc) => (
                      <span
                        key={svc.name}
                        className={`chip ${svc.featured ? "chip-blue" : ""}`}
                        style={
                          svc.featured
                            ? { fontSize: 9, gap: 4 }
                            : { fontSize: 9 }
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

                  {/* CTA row */}
                  <div
                    className='flex items-center justify-between mt-auto pt-2'
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
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                      >
                        <path
                          d='M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9'
                          stroke='#000'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
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
