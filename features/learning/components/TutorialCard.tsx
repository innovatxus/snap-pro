import Image from "next/image";
import Link from "next/link";
import type { Tutorial } from "../types";
import { DifficultyBadge, DurationBadge } from "./Badges";
import { Icon } from "./Icon";

interface TutorialCardProps {
  tutorial: Tutorial;
  /** Optional 0..1 progress ratio rendered as a thin bar overlay. */
  progressRatio?: number;
  /** Visual size — featured cards are larger and use the sheen+glow language. */
  emphasis?: "default" | "featured";
  /** Optional click target override (defaults to /learn/tutorials/[slug]). */
  href?: string;
}

export function TutorialCard({
  tutorial,
  progressRatio,
  emphasis = "default",
  href,
}: TutorialCardProps) {
  const isFeatured = emphasis === "featured";
  const target = href ?? `/learn/tutorials/${tutorial.slug}`;

  return (
    <Link
      href={target}
      className={`stagger-item card-hover sheen ${
        isFeatured ? "tilt" : ""
      } group relative flex flex-col overflow-hidden`}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-xl)",
        textDecoration: "none",
        color: "inherit",
      }}
      aria-label={`${tutorial.title} — ${tutorial.durationMin} minute ${tutorial.difficulty} ${tutorial.kind}`}
    >
      {/* Thumbnail — 4:3 to match the snap-pro-ui spec for tool/service tiles */}
      <div
        style={{
          position: "relative",
          aspectRatio: "4 / 3",
          overflow: "hidden",
        }}
      >
        <Image
          src={tutorial.thumbnailUrl}
          alt=''
          fill
          sizes='(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 25vw'
          className='object-cover'
        />
        {/* Bottom-up overlay so badges and play affordance stay legible */}
        <div
          aria-hidden='true'
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 35%, rgba(8,10,16,0.45) 70%, rgba(8,10,16,0.85) 100%)",
          }}
        />
        {/* Top row — difficulty + (optional) coming soon */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            right: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
          }}
        >
          <DifficultyBadge difficulty={tutorial.difficulty} />
          <DurationBadge minutes={tutorial.durationMin} />
        </div>
        {/* Play affordance */}
        <div
          aria-hidden='true'
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: isFeatured ? 0.95 : 0.85,
          }}
        >
          <span
            style={{
              width: 52,
              height: 52,
              borderRadius: 999,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(8,10,16,0.55)",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color: "white",
              transform: "translateZ(0)",
            }}
          >
            <Icon name='play' size={20} />
          </span>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          padding: 18,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flex: 1,
        }}
      >
        <h3
          className='font-fraunces'
          style={{
            fontSize: isFeatured ? 22 : 18,
            fontWeight: 400,
            lineHeight: 1.15,
            color: "var(--ink)",
            letterSpacing: "-0.01em",
          }}
        >
          {tutorial.title}
        </h3>
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.5,
            color: "var(--mute)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {tutorial.blurb}
        </p>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            fontSize: 12,
            color: "var(--mute)",
          }}
        >
          <span>{tutorial.instructor.name}</span>
          <span
            className='link-underline'
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "var(--ink)",
              fontWeight: 500,
            }}
          >
            Watch
            <Icon name='arrowRight' size={14} />
          </span>
        </div>
      </div>

      {/* Optional progress bar */}
      {typeof progressRatio === "number" && progressRatio > 0 && (
        <div
          aria-hidden='true'
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 3,
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${Math.min(100, Math.max(0, progressRatio * 100))}%`,
              background: "var(--blue-grad)",
            }}
          />
        </div>
      )}
    </Link>
  );
}
