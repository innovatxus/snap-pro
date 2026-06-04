import Link from "next/link";
import type { LearningPath, Tutorial } from "../types";
import { Icon } from "./Icon";

const ACCENT: Record<LearningPath["accentToken"], string> = {
  blue: "var(--blue)",
  silver: "var(--silver-3)",
  cyan: "#67E8F9",
  amber: "#FFC857",
  violet: "#C8B6FF",
};

interface LearningPathCardProps {
  path: LearningPath;
  /** Tutorials referenced by `path.tutorialIds`, resolved by the caller. */
  tutorials: Tutorial[];
  /** 0..1 completion ratio (computed from progress). */
  completionRatio?: number;
}

export function LearningPathCard({
  path,
  tutorials,
  completionRatio = 0,
}: LearningPathCardProps) {
  const accent = ACCENT[path.accentToken];
  const totalMin = tutorials.reduce((sum, t) => sum + t.durationMin, 0);
  const stops = tutorials.length;

  return (
    <Link
      href={`/learn/paths/${path.slug}`}
      className={`stagger-item card-hover sheen ${
        path.isFeatured ? "glow-border" : ""
      } relative flex flex-col overflow-hidden`}
      style={{
        background: "var(--surface)",
        border: `1px solid ${
          path.isFeatured
            ? "color-mix(in oklab, var(--blue) 35%, transparent)"
            : "var(--line)"
        }`,
        borderRadius: "var(--r-xl)",
        textDecoration: "none",
        color: "inherit",
        padding: 26,
        gap: 18,
      }}
      aria-label={`${path.name} learning path — ${stops} tutorials, ${path.estimatedHours} hours`}
    >
      {/* Eyebrow */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: accent,
          }}
        >
          Learning path
        </span>
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--mute)",
          }}
        >
          {stops} stops · {path.estimatedHours} hr · {totalMin} min
        </span>
      </div>

      {/* Title + tagline */}
      <div>
        <h3
          className='font-fraunces'
          style={{
            fontSize: 28,
            fontWeight: 400,
            lineHeight: 1.1,
            color: "var(--ink)",
            letterSpacing: "-0.01em",
            marginBottom: 6,
          }}
        >
          {path.name}
        </h3>
        <p
          style={{
            fontSize: 14,
            color: "var(--mute)",
            lineHeight: 1.55,
          }}
        >
          {path.tagline}
        </p>
      </div>

      {/* Stops timeline */}
      <ol
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {tutorials.map((t, i) => (
          <li
            key={t.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              aria-hidden='true'
              style={{
                width: 22,
                height: 22,
                borderRadius: 999,
                background: `color-mix(in oklab, ${accent} 12%, transparent)`,
                border: `1px solid color-mix(in oklab, ${accent} 35%, transparent)`,
                color: accent,
                fontFamily: "var(--font-geist-mono)",
                fontSize: 10,
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {i + 1}
            </span>
            <span
              style={{
                fontSize: 13,
                color: "var(--ink)",
                lineHeight: 1.4,
                flex: 1,
                minWidth: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {t.title}
            </span>
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 10,
                color: "var(--mute)",
                flexShrink: 0,
              }}
            >
              {t.durationMin}m
            </span>
          </li>
        ))}
      </ol>

      {/* Footer */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: 14,
          borderTop: "1px solid var(--line)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <div
          aria-hidden='true'
          style={{
            flex: 1,
            height: 4,
            borderRadius: 999,
            background: "rgba(255,255,255,0.05)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${Math.min(100, Math.max(0, completionRatio * 100))}%`,
              background: accent,
              transition: "width 320ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </div>
        <span
          className='link-underline'
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            color: "var(--ink)",
            fontWeight: 500,
            flexShrink: 0,
          }}
        >
          {completionRatio > 0 ? "Continue" : "Start path"}
          <Icon name='arrowRight' size={14} />
        </span>
      </div>
    </Link>
  );
}
