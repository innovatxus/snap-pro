"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const GALLERY_ITEMS = [
  {
    id: 1,
    product: "Object Removal",
    service: "Object Erase",
    cat: "CUT",
    catClass: "tag-cut",
    src: "/assets/images/object erase.png",
    alt: "Object erase demonstration",
    beforeFilter:
      "brightness(0.45) contrast(1.25) saturate(0.45) sepia(0.25) hue-rotate(8deg)",
  },
  {
    id: 2,
    product: "Studio Lighting",
    service: "Studio White",
    cat: "STAGE",
    catClass: "tag-stage",
    src: "/assets/images/studio white.png",
    alt: "Studio white background demonstration",
    beforeFilter:
      "brightness(0.5) contrast(1.15) saturate(0.55) sepia(0.3) hue-rotate(-6deg)",
  },
  {
    id: 3,
    product: "Sky Enhancement",
    service: "Sky Replace",
    cat: "STAGE",
    catClass: "tag-stage",
    src: "/assets/images/Sky-Replace.png",
    alt: "Sky replacement demonstration",
    beforeFilter:
      "brightness(0.55) contrast(1.2) saturate(0.4) hue-rotate(-12deg)",
  },
  {
    id: 4,
    product: "Clarity Boost",
    service: "4K Upscale",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/4k upscale.png",
    alt: "4K upscale enhancement demonstration",
    beforeFilter:
      "brightness(0.55) contrast(0.9) saturate(0.4) sepia(0.35) hue-rotate(20deg)",
  },
  {
    id: 5,
    product: "Skin Perfection",
    service: "Skin Smooth",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/skin smooth.png",
    alt: "Skin smoothing demonstration",
    beforeFilter:
      "brightness(0.55) contrast(1.1) saturate(0.5) sepia(0.25) hue-rotate(-10deg)",
  },
  {
    id: 6,
    product: "Reflection Polish",
    service: "Reflection Clean",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/reflection clean.png",
    alt: "Reflection cleaning demonstration",
    beforeFilter:
      "brightness(0.5) contrast(1.2) saturate(0.4) hue-rotate(-20deg)",
  },
  {
    id: 7,
    product: "Room Staging",
    service: "Room Declutter",
    cat: "STAGE",
    catClass: "tag-stage",
    src: "/assets/images/room-declutring.png",
    alt: "Room decluttering demonstration",
    beforeFilter:
      "brightness(0.5) contrast(1.3) saturate(0.45) sepia(0.4) hue-rotate(12deg)",
  },
  {
    id: 8,
    product: "Mood Lighting",
    service: "Light & Mood",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/light and mood.png",
    alt: "Light and mood adjustment demonstration",
    beforeFilter:
      "brightness(0.55) contrast(1.15) saturate(0.5) sepia(0.2) hue-rotate(-18deg)",
  },
  {
    id: 9,
    product: "Professional Pack",
    service: "Studio Pack",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/studio pack.png",
    alt: "Studio pack professional tools demonstration",
    beforeFilter:
      "brightness(0.6) contrast(1.1) saturate(0.5) sepia(0.2) hue-rotate(-15deg)",
  },
  {
    id: 10,
    product: "Garment Isolation",
    service: "Ghost Mannequin",
    cat: "CUT",
    catClass: "tag-cut",
    src: "/assets/images/ghost mannequin-snap-pro.png",
    alt: "Ghost mannequin garment isolation demonstration",
    beforeFilter:
      "brightness(0.45) contrast(1.2) saturate(0.45) sepia(0.2) hue-rotate(10deg)",
  },
  {
    id: 11,
    product: "Surface Polish",
    service: "Glass Reflection",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/glass-reflection.png",
    alt: "Glass reflection cleanup demonstration",
    beforeFilter:
      "brightness(0.5) contrast(1.25) saturate(0.4) hue-rotate(-15deg)",
  },
  {
    id: 12,
    product: "Angle Correction",
    service: "Perspective Fix",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/Studio Perspective Fix. .png",
    alt: "Perspective fix correction demonstration",
    beforeFilter:
      "brightness(0.5) contrast(1.2) saturate(0.45) sepia(0.15) hue-rotate(6deg)",
  },
  {
    id: 13,
    product: "Evening Mood",
    service: "Twilight Convert",
    cat: "STAGE",
    catClass: "tag-stage",
    src: "/assets/images/twilght .png",
    alt: "Twilight conversion demonstration",
    beforeFilter:
      "brightness(0.65) contrast(1.1) saturate(0.5) hue-rotate(-8deg)",
  },
  {
    id: 14,
    product: "Detail Clarity",
    service: "Macro Sharpen",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/macro sharpen.png",
    alt: "Macro sharpen detail demonstration",
    beforeFilter:
      "brightness(0.55) contrast(0.95) saturate(0.45) sepia(0.3) hue-rotate(15deg)",
  },
  {
    id: 16,
    product: "Tileable Swatch",
    service: "Pattern Repeat",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    src: "/assets/images/pattren repeat.png",
    alt: "Pattern repeat tiling demonstration",
    beforeFilter:
      "brightness(0.55) contrast(1.05) saturate(0.4) sepia(0.2) hue-rotate(18deg)",
  },
];

function BACard({ item }: { item: (typeof GALLERY_ITEMS)[0] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.width === 0) return;
    const raw = ((clientX - r.left) / r.width) * 100;
    setPct(Math.max(4, Math.min(96, raw)));
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = stageRef.current;
      if (!el) return;
      dragging.current = true;
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        /* setPointerCapture can throw on some browsers if the pointer is no longer active */
      }
      update(e.clientX);
    },
    [update],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragging.current) return;
      update(e.clientX);
    },
    [update],
  );

  const onPointerEnd = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    const el = stageRef.current;
    if (el && el.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }
  }, []);

  return (
    <div
      className='shrink-0 overflow-hidden relative'
      style={{
        width: 280,
        aspectRatio: "3/4",
        borderRadius: "var(--r-lg)",
        border: "1px solid var(--line)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* ba-stage */}
      <div
        ref={stageRef}
        className='ba-stage absolute inset-0'
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onLostPointerCapture={() => {
          dragging.current = false;
        }}
        onDragStart={(e) => e.preventDefault()}
        style={{ touchAction: "none", userSelect: "none" }}
      >
        {/* After layer — the polished royalty-free photo */}
        <div
          className='ba-after-img'
          style={{ background: "var(--surface-2)" }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes='280px'
            style={{ objectFit: "cover" }}
            draggable={false}
          />
        </div>

        {/* Before layer (clipped) — same photo with a moody filter */}
        <div
          className='ba-before-img'
          style={{
            background: "#050505",
            clipPath: `inset(0 ${100 - pct}% 0 0)`,
            filter: item.beforeFilter,
          }}
        >
          <Image
            src={item.src}
            alt=''
            aria-hidden
            fill
            sizes='280px'
            style={{ objectFit: "cover" }}
            draggable={false}
          />
        </div>

        {/* Divider */}
        <div className='ba-divider-wrap' style={{ left: `${pct}%` }}>
          <div className='ba-divider-line' />
          <div className='ba-handle'>
            <svg width='12' height='10' viewBox='0 0 12 10' fill='none'>
              <path
                d='M1 5H11M1 5L4 2M1 5L4 8M11 5L8 2M11 5L8 8'
                stroke='#0EA5E9'
                strokeWidth='1.4'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className='absolute top-3 left-3 z-10'>
          <span
            className='chip'
            style={{
              fontSize: 9,
              padding: "3px 8px",
              background: "rgba(0,0,0,0.55)",
            }}
          >
            Before
          </span>
        </div>
        <div className='absolute top-3 right-3 z-10'>
          <span
            className='chip'
            style={{
              fontSize: 9,
              padding: "3px 8px",
              background: "rgba(0,0,0,0.55)",
              color: "var(--silver-2)",
            }}
          >
            After
          </span>
        </div>
      </div>

      {/* Service name overlay */}
      <div
        className='absolute bottom-3 left-3 z-10'
        style={{
          background: "rgba(8,10,14,0.92)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "var(--r-md)",
          padding: "8px 12px",
          boxShadow:
            "0 8px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: 13,
            fontWeight: 400,
            color: "var(--ink)",
            marginBottom: 2,
          }}
        >
          {item.product}
        </p>
        <span
          className={`chip ${item.catClass}`}
          style={{ fontSize: 8, padding: "2px 7px" }}
        >
          {item.service}
        </span>
      </div>
    </div>
  );
}

export default function BeforeAfterGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  return (
    <section id='gallery' className='relative z-10 mt-40'>
      {/* Section header */}
      <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
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
              See the <em className='silver'>difference.</em>
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
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  className='text-silver-grad'
                  aria-hidden='true'
                  style={{
                    flexShrink: 0,
                    display: "inline-block",
                    fontSize: 16,
                    lineHeight: 1,
                    fontWeight: 700,
                  }}
                >
                  ↔
                </span>
                <span>
                  Drag the slider on any card to compare before and after. Real
                  products, real results.
                </span>
              </span>
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
            {GALLERY_ITEMS.length} transformations
          </div>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        id='baScroll'
        ref={scrollRef}
        className='gallery-scroll flex gap-4 overflow-x-auto pb-6'
        style={{ paddingLeft: 48, paddingRight: 48, scrollbarWidth: "none" }}
        onMouseDown={(e) => {
          const el = scrollRef.current;
          if (!el) return;
          isDown.current = true;
          startX.current = e.pageX - el.offsetLeft;
          scrollLeft.current = el.scrollLeft;
        }}
        onMouseLeave={() => {
          isDown.current = false;
        }}
        onMouseUp={() => {
          isDown.current = false;
        }}
        onMouseMove={(e) => {
          if (!isDown.current || !scrollRef.current) return;
          e.preventDefault();
          const x = e.pageX - scrollRef.current.offsetLeft;
          scrollRef.current.scrollLeft =
            scrollLeft.current - (x - startX.current) * 1.2;
        }}
      >
        {GALLERY_ITEMS.map((item, i) => (
          <ScrollReveal
            key={item.id}
            delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}
            className='shrink-0'
          >
            <BACard item={item} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
