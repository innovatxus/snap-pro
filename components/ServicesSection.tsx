"use client";

import { useState } from "react";
import type { ReactElement } from "react";
import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  // CUT
  {
    id: 1,
    name: "Background",
    italic: "Removal",
    cat: "cut",
    catLabel: "CUT",
    credit: "1 cr",
    desc: "Instant AI cutout on any background.",
  },
  {
    id: 2,
    name: "Ghost",
    italic: "Mannequin",
    cat: "cut",
    catLabel: "CUT",
    credit: "3 cr",
    desc: "Hollow mannequin effect for fashion.",
  },
  {
    id: 3,
    name: "Hair",
    italic: "Masking",
    cat: "cut",
    catLabel: "CUT",
    credit: "2 cr",
    desc: "Precision cutout for fine hair strands.",
  },
  {
    id: 4,
    name: "Clipping",
    italic: "Path",
    cat: "cut",
    catLabel: "CUT",
    credit: "1 cr",
    desc: "Clean vector paths for every product.",
  },
  // STAGE
  {
    id: 5,
    name: "Studio",
    italic: "White",
    cat: "stage",
    catLabel: "STAGE",
    credit: "2 cr",
    desc: "Clean white studio backdrop, instantly.",
  },
  {
    id: 6,
    name: "Lifestyle",
    italic: "Scene",
    cat: "stage",
    catLabel: "STAGE",
    credit: "4 cr",
    desc: "Place products in aspirational settings.",
  },
  {
    id: 7,
    name: "Shadow",
    italic: "Add",
    cat: "stage",
    catLabel: "STAGE",
    credit: "1 cr",
    desc: "Realistic drop & contact shadows.",
  },
  {
    id: 8,
    name: "Model",
    italic: "Swap",
    cat: "stage",
    catLabel: "STAGE",
    credit: "5 cr",
    desc: "Replace mannequin with a real model.",
  },
  // ENHANCE
  {
    id: 9,
    name: "Color",
    italic: "Correct",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "1 cr",
    desc: "Match true-to-life product color.",
  },
  {
    id: 10,
    name: "Skin",
    italic: "Retouch",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "2 cr",
    desc: "Natural skin smoothing & blemish fix.",
  },
  {
    id: 11,
    name: "Product",
    italic: "Polish",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "2 cr",
    desc: "Remove dust, scratches, distractions.",
  },
  {
    id: 12,
    name: "Light",
    italic: "& Mood",
    cat: "enhance",
    catLabel: "ENHANCE",
    credit: "3 cr",
    desc: "Cinematic lighting & atmosphere edit.",
  },
  // FORMAT
  {
    id: 13,
    name: "Amazon",
    italic: "Pack",
    cat: "format",
    catLabel: "FORMAT",
    credit: "2 cr",
    desc: "All required Amazon image sizes.",
  },
  {
    id: 14,
    name: "Shopify",
    italic: "Set",
    cat: "format",
    catLabel: "FORMAT",
    credit: "2 cr",
    desc: "Storefront-ready product image set.",
  },
  {
    id: 15,
    name: "Social",
    italic: "Square",
    cat: "format",
    catLabel: "FORMAT",
    credit: "1 cr",
    desc: "1:1 optimised for Instagram & TikTok.",
  },
  {
    id: 16,
    name: "Banner",
    italic: "Crop",
    cat: "format",
    catLabel: "FORMAT",
    credit: "1 cr",
    desc: "Wide-format banners for any platform.",
  },
  {
    id: 17,
    name: "Print",
    italic: "Ready",
    cat: "format",
    catLabel: "FORMAT",
    credit: "3 cr",
    desc: "CMYK-converted high-res print files.",
  },
];

const TABS = ["All", "Cut", "Stage", "Enhance", "Format"];

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
              17 specialist services across cutting, staging, enhancing, and
              formatting. All AI-powered, all under one roof.
            </p>
          </div>
        </div>

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
            </button>
          ))}
        </div>

        {/* Service cards grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {filtered.map((svc, i) => (
            <ScrollReveal
              key={svc.id}
              delay={Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4}
            >
              <div
                className='card-hover service-card flex flex-col overflow-hidden'
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-lg)",
                }}
              >
                {/* Image area (4:3) */}
                <div
                  className='relative overflow-hidden'
                  style={{ aspectRatio: "4/3", background: catBg[svc.cat] }}
                >
                  <div className='absolute inset-0 flex items-center justify-center'>
                    {catSvg[svc.cat]}
                  </div>

                  {/* Category tag top-left */}
                  <div className='absolute top-3 left-3'>
                    <span
                      className={`chip ${catTagClass[svc.cat]}`}
                      style={{ fontSize: 9, padding: "3px 8px" }}
                    >
                      {svc.catLabel}
                    </span>
                  </div>

                  {/* Credit cost bottom-right */}
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
