import { HOW_TO_USE_INTRO, HOW_TO_USE_STEPS } from "./howToUseSteps";

export default function HowToUsePanelContent() {
  return (
    <div>
      <p
        style={{
          fontSize: 13.5,
          lineHeight: 1.6,
          color: "var(--mute)",
          marginBottom: 22,
        }}
      >
        {HOW_TO_USE_INTRO}
      </p>

      <ol style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {HOW_TO_USE_STEPS.map((step, i) => (
          <li
            key={step.title}
            className='widget-stagger-item'
            style={{
              display: "flex",
              gap: 14,
              animationDelay: `${i * 50}ms`,
            }}
          >
            <span
              aria-hidden='true'
              style={{
                flexShrink: 0,
                width: 26,
                height: 26,
                borderRadius: "var(--r-sm)",
                background: "var(--surface-2)",
                border: "1px solid var(--line)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 11,
                fontWeight: 600,
                color: "var(--blue)",
              }}
            >
              {i + 1}
            </span>
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: 4,
                  letterSpacing: "-0.01em",
                }}
              >
                {step.title}
              </p>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: "var(--mute)",
                }}
              >
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <a
        href='/learn'
        className='btn-lift'
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginTop: 24,
          padding: "11px 18px",
          borderRadius: 999,
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.14)",
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontWeight: 500,
          fontSize: 13,
          color: "rgba(255,255,255,0.85)",
          letterSpacing: "-0.01em",
          textDecoration: "none",
        }}
      >
        Visit the Learning Center
        <svg width='12' height='12' viewBox='0 0 12 12' fill='none' aria-hidden='true'>
          <path
            d='M2.5 6h7M7 3.5L9.5 6 7 8.5'
            stroke='#38BDF8'
            strokeWidth='1.3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </a>
    </div>
  );
}
