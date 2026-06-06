"use client";

import { useState } from "react";
import type { ReactElement } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { toolSlug } from "@/features/editor/data/niches";
import { studioServiceName } from "@/features/editor/data/studio";

// ─── Services ─────────────────────────────────────────────────────────────────

const SERVICES = [
  // ── CUT (3) ──────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Background",
    italic: "Remove",
    cat: "cut",
    catLabel: "CUT",
    credit: "1 cr",
    desc: "Pixel-perfect cutout, hair and fur included. Auto-detects subject in 0.4s.",
  },
  {
    id: 2,
    name: "Ghost",
    italic: "Mannequin",
    cat: "cut",
    catLabel: "CUT",
    credit: "2 cr",
    desc: "Auto-fills the inside of garments. Perfect for apparel listings.",
  },
  {
    id: 3,
    name: "Object",
    italic: "Erase",
    cat: "cut",
    catLabel: "CUT",
    credit: "1 cr",
    desc: "Tap any unwanted element — props, hands, watermarks. Gone in one stroke.",
  },
  // ── STAGE (11) ───────────────────────────────────────────────────────────
  {
    id: 4,
    name: "Auto",
    italic: "Backdrop",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Eight studio scenes. Light intensity and shadow depth in two sliders.",
  },
  {
    id: 5,
    name: "Room",
    italic: "Stage",
    cat: "stage",
    catLabel: "STAGE",
    credit: "3 cr",
    desc: "Place furniture in a styled room — kitchen, living, bedroom, patio.",
  },
  {
    id: 6,
    name: "Cast",
    italic: "Shadow",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Realistic ground or wall shadows. Direction, blur, and opacity controls.",
  },
  {
    id: 7,
    name: "Glass",
    italic: "Reflection",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Adds a tabletop mirror reflection — perfect for bottles, jars, watches.",
  },
  {
    id: 8,
    name: "Sky",
    italic: "Replace",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Swap gray skies for golden hour, blue noon, or stormy drama. Auto-matches subject lighting.",
  },
  {
    id: 9,
    name: "Room",
    italic: "Declutter",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Remove furniture and clutter from room photos. Clean canvas for real-estate virtual staging.",
  },
  {
    id: 10,
    name: "Showroom",
    italic: "Gen",
    cat: "stage",
    catLabel: "STAGE",
    credit: "3 cr",
    desc: "Photorealistic automotive showroom scenes. Floor reflections and directional lighting included.",
  },
  {
    id: 21,
    name: "Perspective",
    italic: "Fix",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Correct wide-angle distortion and converging verticals. Furniture, real estate, architecture.",
  },
  {
    id: 22,
    name: "Studio",
    italic: "White",
    cat: "stage",
    catLabel: "STAGE",
    credit: "1 cr",
    desc: "Pure white studio isolation with zero shadow bleed. Required for Amazon, eBay, and packaging.",
  },
  {
    id: 23,
    name: "Twilight",
    italic: "Convert",
    cat: "stage",
    catLabel: "STAGE",
    credit: "3 cr",
    desc: "Day-to-dusk sky swap with auto-matched interior warm lighting. Real estate hero shots.",
  },
  {
    id: 24,
    name: "Box",
    italic: "Mockup",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Generate 3D packaging mockups from flat artwork. Lid-open, angled, and flat views.",
  },
  // ── ENHANCE (12) ─────────────────────────────────────────────────────────
  {
    id: 11,
    name: "Upscale",
    italic: "4K",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "3 cr",
    desc: "2× to 4× resolution. Detail recovery for printable catalogs and Amazon zoom.",
  },
  {
    id: 12,
    name: "Color",
    italic: "Match",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "2 cr",
    desc: "Match a Pantone, hex, or reference photo. Keep your catalog consistent.",
  },
  {
    id: 13,
    name: "Wrinkle",
    italic: "Smooth",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "1 cr",
    desc: "Removes garment creases without losing fabric texture.",
  },
  {
    id: 14,
    name: "Reflection",
    italic: "Clean",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "2 cr",
    desc: "Removes lens glare, fingerprints, and ambient light from glossy surfaces.",
  },
  {
    id: 15,
    name: "Studio",
    italic: "Pack",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "4 cr",
    desc: "All-in-one: cut, stage, light, shadow, format. Hands-free batch mode.",
  },
  {
    id: 16,
    name: "Crowd",
    italic: "Blur",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "2 cr",
    desc: "Selectively blur or remove background people. Faces preserved on subjects you mark.",
  },
  {
    id: 17,
    name: "Light &",
    italic: "Mood",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "3 cr",
    desc: "Cinematic lighting and atmosphere edit. Directional light, golden hour, or dramatic studio.",
  },
  {
    id: 25,
    name: "Color",
    italic: "Variants",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "2 cr",
    desc: "Generate multiple colorway versions from a single source image. Textiles, apparel, and product lines.",
  },
  {
    id: 26,
    name: "HDR",
    italic: "Balance",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "2 cr",
    desc: "Tone-map bracketed interior shots for even exposure. Eliminates blown windows and blocked shadows.",
  },
  {
    id: 27,
    name: "Old Photo",
    italic: "Restore",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "3 cr",
    desc: "Repair damaged, faded, or torn archival photos. Face recovery and color grading included.",
  },
  {
    id: 28,
    name: "Macro",
    italic: "Sharpen",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "2 cr",
    desc: "Micro-detail enhancement for jewelry, fabric weaves, and small-scale product textures.",
  },
  {
    id: 29,
    name: "Skin",
    italic: "Smooth",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "1 cr",
    desc: "Natural portrait skin retouching. Preserves texture and identity — no plastic effect.",
  },
  // ── FORMAT (4) ───────────────────────────────────────────────────────────
  {
    id: 18,
    name: "Marketplace",
    italic: "Resize",
    cat: "format",
    catLabel: "FORMAT",
    credit: "1 cr",
    desc: "One source, twelve sizes. Shopify 2048², Amazon 1500², Meta 1080².",
  },
  {
    id: 19,
    name: "Pattern",
    italic: "Repeat",
    cat: "format",
    catLabel: "FORMAT",
    credit: "2 cr",
    desc: "Tileable patterns from a single fabric swatch. Seam-blended automatically.",
  },
  {
    id: 20,
    name: "360°",
    italic: "Spin",
    cat: "format",
    catLabel: "FORMAT",
    credit: "3 cr",
    desc: "Generate a 24-frame product spin from 6 source angles.",
    comingSoon: true,
  },
  {
    id: 30,
    name: "PDF",
    italic: "Export",
    cat: "format",
    catLabel: "FORMAT",
    credit: "2 cr",
    desc: "Auto-layout product grid with SKU and price injection. One-click catalog or linesheet PDF.",
    comingSoon: true,
  },
];

// ─── Tab config ───────────────────────────────────────────────────────────────
// Cut 3 · Stage 11 · Enhance 12 · Format 4 = 30 total

const TABS = ["All", "Cut", "Stage", "Enhance", "Format"] as const;

const TAB_COUNTS: Record<string, number> = {
  All: SERVICES.length,
  Cut: SERVICES.filter((s) => s.cat === "cut").length,
  Stage: SERVICES.filter((s) => s.cat === "stage").length,
  Enhance: SERVICES.filter((s) => s.cat === "enhance").length,
  Format: SERVICES.filter((s) => s.cat === "format").length,
};

// ─── Category visuals ─────────────────────────────────────────────────────────

const catBg: Record<string, string> = {
  cut: "linear-gradient(135deg, #001830 0%, #002a50 50%, #000d20 100%)",
  stage: "linear-gradient(135deg, #181818 0%, #242424 50%, #111 100%)",
  enhance: "linear-gradient(135deg, #1a0f00 0%, #2e1a00 50%, #0d0800 100%)",
  format: "linear-gradient(135deg, #0a0010 0%, #160020 50%, #050008 100%)",
};

const catTagClass: Record<string, string> = {
  cut: "tag-cut",
  stage: "tag-stage",
  enhance: "tag-enhance",
  format: "tag-format",
};

const catSvg: Record<string, ReactElement> = {
  cut: (
    <svg viewBox='0 0 160 120' className='w-full h-full opacity-20'>
      <rect
        x='30'
        y='15'
        width='100'
        height='90'
        rx='8'
        fill='rgba(56,189,248,0.15)'
        stroke='rgba(56,189,248,0.3)'
        strokeWidth='1'
      />
      <path
        d='M30 60 L130 60'
        stroke='rgba(56,189,248,0.5)'
        strokeWidth='1.5'
        strokeDasharray='4 3'
      />
      <circle
        cx='80'
        cy='60'
        r='12'
        fill='rgba(56,189,248,0.2)'
        stroke='rgba(56,189,248,0.5)'
        strokeWidth='1'
      />
    </svg>
  ),
  stage: (
    <svg viewBox='0 0 160 120' className='w-full h-full opacity-20'>
      <rect
        x='0'
        y='0'
        width='160'
        height='120'
        fill='rgba(255,255,255,0.03)'
      />
      <ellipse cx='80' cy='110' rx='60' ry='10' fill='rgba(255,255,255,0.08)' />
      <rect
        x='55'
        y='20'
        width='50'
        height='70'
        rx='4'
        fill='rgba(255,255,255,0.12)'
        stroke='rgba(255,255,255,0.2)'
        strokeWidth='0.5'
      />
    </svg>
  ),
  enhance: (
    <svg viewBox='0 0 160 120' className='w-full h-full opacity-20'>
      <circle
        cx='80'
        cy='60'
        r='40'
        fill='rgba(255,200,87,0.1)'
        stroke='rgba(255,200,87,0.25)'
        strokeWidth='1'
      />
      <circle cx='80' cy='60' r='25' fill='rgba(255,200,87,0.12)' />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
        <line
          key={i}
          x1={80 + 42 * Math.cos((a * Math.PI) / 180)}
          y1={60 + 42 * Math.sin((a * Math.PI) / 180)}
          x2={80 + 52 * Math.cos((a * Math.PI) / 180)}
          y2={60 + 52 * Math.sin((a * Math.PI) / 180)}
          stroke='rgba(255,200,87,0.3)'
          strokeWidth='1.5'
        />
      ))}
    </svg>
  ),
  format: (
    <svg viewBox='0 0 160 120' className='w-full h-full opacity-20'>
      <rect
        x='20'
        y='15'
        width='55'
        height='55'
        rx='4'
        fill='rgba(200,182,255,0.1)'
        stroke='rgba(200,182,255,0.25)'
        strokeWidth='1'
      />
      <rect
        x='85'
        y='15'
        width='55'
        height='35'
        rx='4'
        fill='rgba(200,182,255,0.08)'
        stroke='rgba(200,182,255,0.2)'
        strokeWidth='1'
      />
      <rect
        x='85'
        y='60'
        width='55'
        height='55'
        rx='4'
        fill='rgba(200,182,255,0.1)'
        stroke='rgba(200,182,255,0.25)'
        strokeWidth='1'
      />
      <rect
        x='20'
        y='80'
        width='55'
        height='35'
        rx='4'
        fill='rgba(200,182,255,0.08)'
        stroke='rgba(200,182,255,0.2)'
        strokeWidth='1'
      />
    </svg>
  ),
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.cat === activeTab.toLowerCase());

  return (
    <section id='services' className='relative z-10 mt-40'>
      <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
        {/* Section header */}
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
              Every edit. <em className='silver'>One</em> studio.
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
              {SERVICES.length} specialist services across cutting, staging,
              enhancing, and formatting. All AI-powered, all under one roof.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter tabs */}
        <div
          className='flex items-center gap-1 mb-10 overflow-x-auto'
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--line)",
            borderRadius: 999,
            padding: "4px",
            width: "fit-content",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`service-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              <span
                style={{
                  marginLeft: 5,
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 9,
                  opacity: activeTab === tab ? 0.6 : 0.4,
                  letterSpacing: "0.04em",
                }}
              >
                · {TAB_COUNTS[tab]}
              </span>
            </button>
          ))}
        </div>

        {/* Service cards */}
        <ScrollReveal
          stagger
          threshold={0}
          className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'
        >
          {filtered.map((svc) => {
            const comingSoon = "comingSoon" in svc && svc.comingSoon === true;
            const cardInner = (
              <>
                {/* Thumbnail */}
                <div
                  className='relative overflow-hidden'
                  style={{ aspectRatio: "4/3", background: catBg[svc.cat] }}
                >
                  <div className='absolute inset-0 flex items-center justify-center'>
                    {catSvg[svc.cat]}
                  </div>

                  {/* Category tag */}
                  <div className='absolute top-3 left-3'>
                    <span
                      className={`chip ${catTagClass[svc.cat]}`}
                      style={{ fontSize: 9, padding: "3px 8px" }}
                    >
                      {svc.catLabel}
                    </span>
                  </div>

                  {/* Coming-soon badge — top right */}
                  {comingSoon && (
                    <div className='absolute top-3 right-3'>
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono), monospace",
                          fontSize: 9,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "#0b0d12",
                          background:
                            "linear-gradient(135deg, #ffffff 0%, #d8dce3 30%, #b5bac2 65%, #ffffff 100%)",
                          padding: "4px 10px",
                          borderRadius: 999,
                          fontWeight: 700,
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.6), 0 4px 14px rgba(0,0,0,0.35)",
                        }}
                      >
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Credit cost */}
                  <div
                    className='absolute bottom-3 right-3'
                    style={{
                      background: "rgba(8,10,14,0.92)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "var(--r-sm)",
                      padding: "4px 10px",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      color: "var(--silver-2)",
                    }}
                  >
                    {svc.credit}
                  </div>
                </div>

                {/* Info */}
                <div className='p-4 flex flex-col gap-1'>
                  <h3
                    className='font-fraunces'
                    style={{
                      fontSize: 20,
                      fontWeight: 400,
                      lineHeight: 1.1,
                      color: "var(--ink)",
                    }}
                  >
                    {svc.name} <em className='silver'>{svc.italic}</em>
                  </h3>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--mute)",
                      lineHeight: 1.5,
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    {svc.desc}
                  </p>
                </div>
              </>
            );

            const baseStyle = {
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-lg)",
              textDecoration: "none",
              color: "inherit",
            } as const;

            if (comingSoon) {
              return (
                <div
                  key={svc.id}
                  aria-disabled='true'
                  aria-label={`${svc.name} ${svc.italic} — coming soon`}
                  className='stagger-item service-card flex flex-col overflow-hidden'
                  style={{
                    ...baseStyle,
                    cursor: "not-allowed",
                    opacity: 0.78,
                  }}
                >
                  {cardInner}
                </div>
              );
            }

            return (
              <Link
                key={svc.id}
                href={`/edit/studio/${toolSlug(studioServiceName(svc))}`}
                prefetch={false}
                aria-label={`Open ${svc.name} ${svc.italic} editor`}
                className='stagger-item card-hover sheen service-card flex flex-col overflow-hidden'
                style={baseStyle}
              >
                {cardInner}
              </Link>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
