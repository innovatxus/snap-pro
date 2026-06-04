"use client";

import { useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const UGC_CARDS = [
  {
    id: "fashion",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
    alt: "Fashion apparel flat lay product photography",
    label: "Fashion",
    heading: "Studio quality.",
    sub: "No studio needed.",
    body: "Upload a phone photo. Get a hero image that sells.",
  },
  {
    id: "beauty",
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop",
    alt: "Beauty and cosmetics product photography on marble",
    label: "Beauty",
    heading: "Glow-worthy.",
    sub: "Every drop.",
  },
  {
    id: "watch",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop",
    alt: "Luxury watch product photography on white background",
    label: "Electronics",
    heading: "Precision.",
    sub: "Every detail.",
  },
  {
    id: "food",
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
    alt: "Artisan food product photography styled flatlay",
    label: "Food & Drink",
    heading: "Always fresh.",
    sub: "Always on-brand.",
  },
  {
    id: "headphones",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
    alt: "Premium headphones product shot on gradient background",
    label: "Tech",
    heading: "Detail-perfect.",
    sub: "Every angle.",
  },
];

export default function BentoSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollCards = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const amount = direction === "left" ? -360 : 360;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id='about' className='relative z-10 mt-24'>
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
              Every pixel. <em className='silver'>Perfected.</em>
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
              From raw snapshots to hero images — Snap Pro handles every step,
              every format, every channel.
            </p>
          </div>
        </div>

        {/* ── 5 UGC portrait cards ── */}
        <div className='flex items-center justify-end gap-2 mb-4'>
          <button
            type='button'
            aria-label='Scroll cards left'
            onClick={() => scrollCards("left")}
            style={{
              width: 34,
              height: 34,
              borderRadius: 999,
              border: "none",
              background: "var(--silver-grad)",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "var(--shadow-silver)",
            }}
          >
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
              <path
                d='M7.5 2.5L4 6l3.5 3.5'
                stroke='currentColor'
                strokeWidth='1.3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button
            type='button'
            aria-label='Scroll cards right'
            onClick={() => scrollCards("right")}
            style={{
              width: 34,
              height: 34,
              borderRadius: 999,
              border: "none",
              background: "var(--silver-grad)",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "var(--shadow-silver)",
            }}
          >
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
              <path
                d='M4.5 2.5L8 6l-3.5 3.5'
                stroke='currentColor'
                strokeWidth='1.3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>

        <div
          ref={sliderRef}
          className='flex gap-4 overflow-x-auto pb-2'
          style={{ scrollbarWidth: "none" }}
        >
          {UGC_CARDS.map((card, i) => (
            <ScrollReveal
              key={card.id}
              delay={(i % 4) as 0 | 1 | 2 | 3 | 4}
              className='shrink-0 w-[calc(50%-8px)] lg:w-[calc(20%-13px)]'
            >
              <div
                className='card-hover relative overflow-hidden flex flex-col justify-end'
                style={{
                  aspectRatio: "9/16",
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-xl)",
                }}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 50vw, 20vw'
                  loading='lazy'
                />

                {/* Top gradient */}
                <div
                  className='absolute inset-0'
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.75) 70%, rgba(0,0,0,0.95) 100%)",
                  }}
                />

                {/* Top-left label chip */}
                <div className='absolute top-3 left-3 z-10'>
                  <div
                    className='chip'
                    style={{
                      background: "rgba(10,10,10,0.7)",
                      backdropFilter: "blur(12px)",
                      fontSize: 9,
                      padding: "4px 10px",
                      letterSpacing: "0.16em",
                    }}
                  >
                    {card.label}
                  </div>
                </div>

                {/* Bottom text */}
                <div className='relative z-10 p-5 flex flex-col gap-1'>
                  <h3
                    className='font-fraunces'
                    style={{
                      fontSize: "clamp(16px, 1.6vw, 22px)",
                      fontWeight: 300,
                      lineHeight: 1.1,
                      color: "var(--ink)",
                    }}
                  >
                    {card.heading}
                    <br />
                    <em className='silver'>{card.sub}</em>
                  </h3>
                  {card.body && (
                    <p
                      style={{
                        fontSize: 12,
                        color: "var(--mute)",
                        fontFamily: "var(--font-geist-sans)",
                        lineHeight: 1.45,
                        marginTop: 4,
                      }}
                    >
                      {card.body}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
