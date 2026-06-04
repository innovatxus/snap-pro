import type { Certification } from "../types";
import { ComingSoonBadge } from "./Badges";
import { Icon } from "./Icon";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <article
      className='stagger-item card-hover sheen relative flex flex-col'
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-xl)",
        padding: 26,
        gap: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <span
          aria-hidden='true'
          style={{
            width: 44,
            height: 44,
            borderRadius: "var(--r-md)",
            background: "color-mix(in oklab, var(--blue) 12%, transparent)",
            border:
              "1px solid color-mix(in oklab, var(--blue) 30%, transparent)",
            color: "var(--blue)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name='trophy' size={20} />
        </span>
        {!certification.isAvailable && <ComingSoonBadge />}
      </div>

      <h3
        className='font-fraunces'
        style={{
          fontSize: 24,
          fontWeight: 400,
          lineHeight: 1.15,
          color: "var(--ink)",
          letterSpacing: "-0.01em",
        }}
      >
        {certification.name}
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "var(--mute)",
          lineHeight: 1.55,
          flex: 1,
        }}
      >
        {certification.blurb}
      </p>

      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
          fontFamily: "var(--font-geist-mono)",
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--mute)",
        }}
      >
        <li>{certification.requiredTutorialIds.length} tutorials</li>
        <li>{certification.assessmentQuestions} questions</li>
        <li>{Math.round(certification.passingScore * 100)}% to pass</li>
        <li>Certificate on completion</li>
      </ul>

      <button
        type='button'
        disabled={!certification.isAvailable}
        className='btn-lift'
        style={{
          marginTop: "auto",
          padding: "11px 18px",
          borderRadius: 999,
          border: "none",
          cursor: certification.isAvailable ? "pointer" : "not-allowed",
          fontFamily: "var(--font-geist-sans)",
          fontWeight: 600,
          fontSize: 13,
          background: certification.isAvailable
            ? "var(--blue-grad)"
            : "rgba(255,255,255,0.04)",
          color: certification.isAvailable ? "white" : "var(--mute)",
          boxShadow: certification.isAvailable
            ? "inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 24px var(--blue-glow)"
            : "none",
          opacity: certification.isAvailable ? 1 : 0.7,
        }}
      >
        {certification.isAvailable ? "Start assessment" : "Notify me"}
      </button>
    </article>
  );
}
