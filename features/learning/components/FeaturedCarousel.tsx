"use client";

import { useRef } from "react";
import type { Tutorial } from "../types";
import { TutorialCard } from "./TutorialCard";
import { Icon } from "./Icon";

interface FeaturedCarouselProps {
  tutorials: Tutorial[];
}

export function FeaturedCarousel({ tutorials }: FeaturedCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-item]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <div className='relative'>
      <div
        ref={trackRef}
        className='gallery-scroll'
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "minmax(280px, 320px)",
          gap: 16,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingBottom: 8,
        }}
        role='region'
        aria-label='Featured tutorials carousel'
      >
        {tutorials.map((t) => (
          <div
            key={t.id}
            data-carousel-item
            style={{ scrollSnapAlign: "start" }}
          >
            <TutorialCard tutorial={t} emphasis='featured' />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div
        style={{
          position: "absolute",
          top: -56,
          right: 0,
          display: "flex",
          gap: 8,
        }}
      >
        <button
          type='button'
          onClick={() => scrollByCard(-1)}
          aria-label='Previous tutorials'
          className='btn-lift'
          style={{
            width: 38,
            height: 38,
            borderRadius: 999,
            background: "var(--surface)",
            border: "1px solid var(--line)",
            color: "var(--ink)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transform: "rotate(180deg)",
          }}
        >
          <Icon name='arrowRight' size={16} />
        </button>
        <button
          type='button'
          onClick={() => scrollByCard(1)}
          aria-label='Next tutorials'
          className='btn-lift'
          style={{
            width: 38,
            height: 38,
            borderRadius: 999,
            background: "var(--surface)",
            border: "1px solid var(--line)",
            color: "var(--ink)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Icon name='arrowRight' size={16} />
        </button>
      </div>
    </div>
  );
}
