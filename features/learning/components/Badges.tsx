import type { CSSProperties } from "react";

interface DifficultyBadgeProps {
  difficulty: "beginner" | "intermediate" | "advanced";
}

const TONE: Record<DifficultyBadgeProps["difficulty"], CSSProperties> = {
  beginner: {
    color: "var(--blue)",
    background: "color-mix(in oklab, var(--blue) 12%, transparent)",
    border: "1px solid color-mix(in oklab, var(--blue) 35%, transparent)",
  },
  intermediate: {
    color: "#FFC857",
    background: "color-mix(in oklab, #FFC857 12%, transparent)",
    border: "1px solid color-mix(in oklab, #FFC857 35%, transparent)",
  },
  advanced: {
    color: "#C8B6FF",
    background: "color-mix(in oklab, #C8B6FF 12%, transparent)",
    border: "1px solid color-mix(in oklab, #C8B6FF 38%, transparent)",
  },
};

const LABEL: Record<DifficultyBadgeProps["difficulty"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-geist-mono)",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        borderRadius: "var(--r-pill)",
        padding: "4px 10px",
        lineHeight: 1,
        ...TONE[difficulty],
      }}
    >
      {LABEL[difficulty]}
    </span>
  );
}

export function DurationBadge({ minutes }: { minutes: number }) {
  const label =
    minutes < 60 ? `${minutes} min` : `${(minutes / 60).toFixed(1)} hr`;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-geist-mono)",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--mute)",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-pill)",
        padding: "4px 10px",
        lineHeight: 1,
      }}
    >
      {label}
    </span>
  );
}

export function ComingSoonBadge() {
  return (
    <span
      aria-label='Coming soon'
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-geist-mono)",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--blue)",
        background: "color-mix(in oklab, var(--blue) 12%, transparent)",
        border: "1px solid color-mix(in oklab, var(--blue) 35%, transparent)",
        borderRadius: "var(--r-pill)",
        padding: "4px 10px",
        lineHeight: 1,
      }}
    >
      <span
        className='blue-pulse'
        style={{ width: 6, height: 6, borderRadius: 999 }}
      />
      Coming soon
    </span>
  );
}
