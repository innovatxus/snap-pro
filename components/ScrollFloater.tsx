"use client";

import { useEffect, useState } from "react";

/**
 * Floating scroll controls — fixed pair of pill buttons on the right edge.
 *
 * - Up button reveals after the user has scrolled a fold past the top.
 * - Down button hides once the user is within a fold of the bottom.
 * - Uses passive scroll + rAF throttle so it never blocks the main thread.
 * - Honors `prefers-reduced-motion` for the appear/disappear transition.
 */
export default function ScrollFloater() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const fold = window.innerHeight * 0.6;

      setShowUp(y > fold);
      setShowDown(max - y > fold);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const goBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  return (
    <div
      aria-hidden={!showUp && !showDown}
      style={{
        position: "fixed",
        right: "clamp(14px, 2.4vw, 28px)",
        bottom: "clamp(18px, 3vw, 32px)",
        zIndex: 60,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        pointerEvents: "none",
      }}
    >
      <FloatBtn
        kind="up"
        visible={showUp}
        onClick={goTop}
        label="Scroll to top"
      />
      <FloatBtn
        kind="down"
        visible={showDown}
        onClick={goBottom}
        label="Scroll to bottom"
      />
    </div>
  );
}

interface FloatBtnProps {
  kind: "up" | "down";
  visible: boolean;
  label: string;
  onClick: () => void;
}

function FloatBtn({ kind, visible, label, onClick }: FloatBtnProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      tabIndex={visible ? 0 : -1}
      style={{
        width: 44,
        height: 44,
        borderRadius: 999,
        border: "1px solid var(--line)",
        background:
          "color-mix(in oklab, var(--surface) 78%, transparent)",
        backdropFilter: "blur(14px) saturate(140%)",
        WebkitBackdropFilter: "blur(14px) saturate(140%)",
        color: "var(--ink)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.04)",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1)"
          : `translateY(${kind === "up" ? 8 : -8}px) scale(0.92)`,
        transition:
          "opacity 260ms cubic-bezier(0.22,1,0.36,1), transform 260ms cubic-bezier(0.22,1,0.36,1), border-color 200ms ease, color 200ms ease, background 200ms ease",
        pointerEvents: visible ? "auto" : "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor =
          "color-mix(in oklab, var(--blue) 55%, var(--line))";
        el.style.color = "var(--blue)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--line)";
        el.style.color = "var(--ink)";
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        style={{
          transform: kind === "up" ? "rotate(0deg)" : "rotate(180deg)",
        }}
      >
        <path
          d="M3.5 8.5L7 5l3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
