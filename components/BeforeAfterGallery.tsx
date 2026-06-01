"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const GALLERY_ITEMS = [
  {
    id: 1,
    product: "Fashion Jacket",
    service: "Background Removal",
    cat: "CUT",
    catClass: "tag-cut",
    beforeBg: "linear-gradient(135deg, #1a0d00 0%, #2e1a00 40%, #1a0f00 100%)",
    afterBg: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
    beforeSvg: (
      <svg viewBox='0 0 200 240' className='w-full h-full opacity-40'>
        <path
          d='M100 20 L140 50 L130 90 L150 90 L150 220 L50 220 L50 90 L70 90 L60 50 Z'
          fill='rgba(255,255,255,0.2)'
          stroke='rgba(255,255,255,0.3)'
          strokeWidth='1'
        />
        <ellipse
          cx='100'
          cy='20'
          rx='20'
          ry='15'
          fill='rgba(255,255,255,0.15)'
        />
      </svg>
    ),
    afterSvg: (
      <svg viewBox='0 0 200 240' className='w-full h-full opacity-70'>
        <path
          d='M100 20 L140 50 L130 90 L150 90 L150 220 L50 220 L50 90 L70 90 L60 50 Z'
          fill='rgba(30,40,60,0.25)'
          stroke='rgba(30,40,60,0.4)'
          strokeWidth='1'
        />
        <ellipse cx='100' cy='20' rx='20' ry='15' fill='rgba(30,40,60,0.2)' />
      </svg>
    ),
  },
  {
    id: 2,
    product: "Perfume Bottle",
    service: "Studio White",
    cat: "STAGE",
    catClass: "tag-stage",
    beforeBg: "linear-gradient(135deg, #1a0f00 0%, #3a2000 40%, #1a0f00 100%)",
    afterBg: "linear-gradient(135deg, #f8f8f8 0%, #ececec 100%)",
    beforeSvg: (
      <svg viewBox='0 0 200 260' className='w-full h-full opacity-40'>
        <rect
          x='80'
          y='70'
          width='40'
          height='130'
          rx='20'
          fill='rgba(255,210,100,0.3)'
          stroke='rgba(255,210,100,0.5)'
          strokeWidth='1'
        />
        <ellipse
          cx='100'
          cy='65'
          rx='18'
          ry='10'
          fill='rgba(255,210,100,0.4)'
        />
        <rect
          x='89'
          y='48'
          width='22'
          height='20'
          rx='4'
          fill='rgba(255,210,100,0.2)'
        />
      </svg>
    ),
    afterSvg: (
      <svg viewBox='0 0 200 260' className='w-full h-full opacity-80'>
        <rect
          x='80'
          y='70'
          width='40'
          height='130'
          rx='20'
          fill='rgba(120,80,30,0.2)'
          stroke='rgba(120,80,30,0.35)'
          strokeWidth='1'
        />
        <ellipse cx='100' cy='210' rx='35' ry='8' fill='rgba(0,0,0,0.06)' />
        <ellipse cx='100' cy='65' rx='18' ry='10' fill='rgba(120,80,30,0.15)' />
        <rect
          x='89'
          y='48'
          width='22'
          height='20'
          rx='4'
          fill='rgba(120,80,30,0.1)'
        />
      </svg>
    ),
  },
  {
    id: 3,
    product: "Modern Sofa",
    service: "Lifestyle Scene",
    cat: "STAGE",
    catClass: "tag-stage",
    beforeBg: "linear-gradient(135deg, #1a0d00 0%, #2e1800 40%, #111 100%)",
    afterBg: "linear-gradient(160deg, #f5f0e8 0%, #ede5d8 50%, #d4c8b8 100%)",
    beforeSvg: (
      <svg viewBox='0 0 200 160' className='w-full h-full opacity-35'>
        <rect
          x='20'
          y='100'
          width='160'
          height='50'
          rx='4'
          fill='rgba(255,255,255,0.15)'
          stroke='rgba(255,255,255,0.2)'
          strokeWidth='1'
        />
        <rect
          x='30'
          y='80'
          width='140'
          height='30'
          rx='8'
          fill='rgba(255,255,255,0.18)'
        />
        <rect
          x='20'
          y='120'
          width='20'
          height='30'
          rx='2'
          fill='rgba(255,255,255,0.1)'
        />
        <rect
          x='160'
          y='120'
          width='20'
          height='30'
          rx='2'
          fill='rgba(255,255,255,0.1)'
        />
      </svg>
    ),
    afterSvg: (
      <svg viewBox='0 0 200 160' className='w-full h-full opacity-70'>
        <rect
          x='20'
          y='100'
          width='160'
          height='50'
          rx='4'
          fill='rgba(140,100,60,0.25)'
          stroke='rgba(140,100,60,0.3)'
          strokeWidth='1'
        />
        <rect
          x='30'
          y='80'
          width='140'
          height='30'
          rx='8'
          fill='rgba(140,100,60,0.2)'
        />
        <ellipse cx='100' cy='152' rx='80' ry='6' fill='rgba(0,0,0,0.08)' />
      </svg>
    ),
  },
  {
    id: 4,
    product: "Running Shoes",
    service: "Color Correct",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    beforeBg: "linear-gradient(135deg, #1a1200 0%, #2a1c00 40%, #0d0900 100%)",
    afterBg: "linear-gradient(135deg, #f0f4ff 0%, #e4eaff 100%)",
    beforeSvg: (
      <svg viewBox='0 0 220 140' className='w-full h-full opacity-35'>
        <ellipse
          cx='110'
          cy='90'
          rx='85'
          ry='35'
          fill='rgba(255,255,255,0.1)'
          stroke='rgba(255,255,255,0.2)'
          strokeWidth='1'
        />
        <path
          d='M40 85 Q80 40 160 65 L170 90 L30 95 Z'
          fill='rgba(255,255,255,0.15)'
        />
      </svg>
    ),
    afterSvg: (
      <svg viewBox='0 0 220 140' className='w-full h-full opacity-75'>
        <ellipse cx='110' cy='100' rx='85' ry='12' fill='rgba(0,0,0,0.06)' />
        <ellipse
          cx='110'
          cy='88'
          rx='80'
          ry='30'
          fill='rgba(60,100,200,0.2)'
          stroke='rgba(60,100,200,0.3)'
          strokeWidth='1'
        />
        <path
          d='M40 80 Q80 35 160 60 L168 85 L32 90 Z'
          fill='rgba(60,100,200,0.25)'
        />
      </svg>
    ),
  },
  {
    id: 5,
    product: "Face Cream",
    service: "Skin Retouch",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    beforeBg: "linear-gradient(135deg, #1a0010 0%, #2e0020 40%, #0d0008 100%)",
    afterBg: "linear-gradient(135deg, #fdf8f0 0%, #f5ede0 100%)",
    beforeSvg: (
      <svg viewBox='0 0 200 220' className='w-full h-full opacity-35'>
        <rect
          x='70'
          y='60'
          width='60'
          height='110'
          rx='30'
          fill='rgba(255,220,180,0.2)'
          stroke='rgba(255,220,180,0.35)'
          strokeWidth='1'
        />
        <ellipse
          cx='100'
          cy='55'
          rx='25'
          ry='12'
          fill='rgba(255,220,180,0.15)'
        />
        <rect
          x='82'
          y='40'
          width='36'
          height='18'
          rx='5'
          fill='rgba(255,220,180,0.1)'
        />
      </svg>
    ),
    afterSvg: (
      <svg viewBox='0 0 200 220' className='w-full h-full opacity-80'>
        <rect
          x='70'
          y='60'
          width='60'
          height='110'
          rx='30'
          fill='rgba(180,140,100,0.2)'
          stroke='rgba(180,140,100,0.3)'
          strokeWidth='1'
        />
        <ellipse cx='100' cy='175' rx='45' ry='7' fill='rgba(0,0,0,0.05)' />
        <ellipse
          cx='100'
          cy='55'
          rx='25'
          ry='12'
          fill='rgba(180,140,100,0.18)'
        />
      </svg>
    ),
  },
  {
    id: 6,
    product: "Wireless Earbuds",
    service: "Amazon Pack",
    cat: "FORMAT",
    catClass: "tag-format",
    beforeBg: "linear-gradient(135deg, #0a0010 0%, #14001a 40%, #050008 100%)",
    afterBg: "linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)",
    beforeSvg: (
      <svg viewBox='0 0 200 200' className='w-full h-full opacity-35'>
        <ellipse
          cx='75'
          cy='100'
          rx='25'
          ry='30'
          fill='rgba(200,182,255,0.2)'
          stroke='rgba(200,182,255,0.35)'
          strokeWidth='1'
        />
        <ellipse
          cx='125'
          cy='100'
          rx='25'
          ry='30'
          fill='rgba(200,182,255,0.2)'
          stroke='rgba(200,182,255,0.35)'
          strokeWidth='1'
        />
        <rect
          x='85'
          y='130'
          width='30'
          height='45'
          rx='8'
          fill='rgba(200,182,255,0.15)'
          stroke='rgba(200,182,255,0.25)'
          strokeWidth='1'
        />
      </svg>
    ),
    afterSvg: (
      <svg viewBox='0 0 200 200' className='w-full h-full opacity-80'>
        <ellipse
          cx='75'
          cy='100'
          rx='25'
          ry='30'
          fill='rgba(30,30,30,0.18)'
          stroke='rgba(30,30,30,0.3)'
          strokeWidth='1'
        />
        <ellipse
          cx='125'
          cy='100'
          rx='25'
          ry='30'
          fill='rgba(30,30,30,0.18)'
          stroke='rgba(30,30,30,0.3)'
          strokeWidth='1'
        />
        <rect
          x='85'
          y='130'
          width='30'
          height='45'
          rx='8'
          fill='rgba(30,30,30,0.15)'
          stroke='rgba(30,30,30,0.25)'
          strokeWidth='1'
        />
        <ellipse cx='100' cy='178' rx='40' ry='5' fill='rgba(0,0,0,0.06)' />
      </svg>
    ),
  },
  {
    id: 7,
    product: "Luxury Watch",
    service: "Product Polish",
    cat: "ENHANCE",
    catClass: "tag-enhance",
    beforeBg: "linear-gradient(135deg, #0d0900 0%, #1e1500 40%, #080600 100%)",
    afterBg: "linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    beforeSvg: (
      <svg viewBox='0 0 200 220' className='w-full h-full opacity-30'>
        <rect
          x='80'
          y='30'
          width='40'
          height='20'
          rx='4'
          fill='rgba(255,200,80,0.3)'
        />
        <circle
          cx='100'
          cy='115'
          r='55'
          fill='rgba(255,200,80,0.1)'
          stroke='rgba(255,200,80,0.3)'
          strokeWidth='1.5'
        />
        <circle cx='100' cy='115' r='42' fill='rgba(255,200,80,0.08)' />
        <rect
          x='80'
          y='150'
          width='40'
          height='20'
          rx='4'
          fill='rgba(255,200,80,0.3)'
        />
      </svg>
    ),
    afterSvg: (
      <svg viewBox='0 0 200 220' className='w-full h-full opacity-70'>
        <rect
          x='80'
          y='30'
          width='40'
          height='20'
          rx='4'
          fill='rgba(200,180,100,0.4)'
          stroke='rgba(200,180,100,0.5)'
          strokeWidth='0.5'
        />
        <circle
          cx='100'
          cy='115'
          r='55'
          fill='none'
          stroke='rgba(200,180,100,0.6)'
          strokeWidth='2'
        />
        <circle
          cx='100'
          cy='115'
          r='42'
          fill='rgba(20,30,60,0.3)'
          stroke='rgba(200,180,100,0.3)'
          strokeWidth='1'
        />
        <line
          x1='100'
          y1='85'
          x2='100'
          y2='108'
          stroke='rgba(255,255,255,0.7)'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
        <line
          x1='100'
          y1='115'
          x2='120'
          y2='115'
          stroke='rgba(255,255,255,0.5)'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
        <circle cx='100' cy='115' r='3' fill='rgba(255,255,255,0.8)' />
        <rect
          x='80'
          y='150'
          width='40'
          height='20'
          rx='4'
          fill='rgba(200,180,100,0.4)'
        />
      </svg>
    ),
  },
  {
    id: 8,
    product: "Flower Bouquet",
    service: "Shadow Add",
    cat: "STAGE",
    catClass: "tag-stage",
    beforeBg: "linear-gradient(135deg, #001a0a 0%, #002a10 40%, #000d05 100%)",
    afterBg: "linear-gradient(135deg, #f8f8f8 0%, #eeeeee 100%)",
    beforeSvg: (
      <svg viewBox='0 0 200 240' className='w-full h-full opacity-30'>
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => (
          <circle
            key={i}
            cx={100 + 40 * Math.cos((a * Math.PI) / 180)}
            cy={90 + 40 * Math.sin((a * Math.PI) / 180)}
            r='18'
            fill={`rgba(${i % 2 ? 200 : 150},${i % 3 ? 100 : 180},${i % 2 ? 100 : 60},0.25)`}
          />
        ))}
        <path
          d='M95 130 L90 220 L110 220 L105 130 Z'
          fill='rgba(80,120,60,0.3)'
        />
      </svg>
    ),
    afterSvg: (
      <svg viewBox='0 0 200 240' className='w-full h-full opacity-75'>
        <ellipse cx='100' cy='220' rx='60' ry='8' fill='rgba(0,0,0,0.1)' />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => (
          <circle
            key={i}
            cx={100 + 40 * Math.cos((a * Math.PI) / 180)}
            cy={90 + 40 * Math.sin((a * Math.PI) / 180)}
            r='18'
            fill={`rgba(${i % 2 ? 220 : 180},${i % 3 ? 80 : 150},${i % 2 ? 80 : 40},0.3)`}
            stroke={`rgba(${i % 2 ? 200 : 160},${i % 3 ? 60 : 130},${i % 2 ? 60 : 20},0.4)`}
            strokeWidth='0.5'
          />
        ))}
        <path
          d='M95 130 L90 218 L110 218 L105 130 Z'
          fill='rgba(60,100,40,0.35)'
        />
      </svg>
    ),
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
    const raw = ((clientX - r.left) / r.width) * 100;
    setPct(Math.max(4, Math.min(96, raw)));
  }, []);

  useEffect(() => {
    const onUp = () => {
      dragging.current = false;
    };
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      update(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging.current) return;
      update(e.touches[0].clientX);
    };
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [update]);

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
        onMouseDown={(e) => {
          dragging.current = true;
          e.preventDefault();
        }}
        onTouchStart={() => {
          dragging.current = true;
        }}
      >
        {/* After layer */}
        <div
          className='ba-after-img flex items-center justify-center'
          style={{ background: item.afterBg }}
        >
          {item.afterSvg}
        </div>

        {/* Before layer (clipped) */}
        <div
          className='ba-before-img flex items-center justify-center'
          style={{
            background: item.beforeBg,
            clipPath: `inset(0 ${100 - pct}% 0 0)`,
          }}
        >
          {item.beforeSvg}
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
            8 transformations
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
