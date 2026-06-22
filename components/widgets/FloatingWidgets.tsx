"use client";

import { useEffect, useId, useRef, useState } from "react";
import WidgetShell from "./WidgetShell";
import HowToUsePanelContent from "./HowToUsePanelContent";
import FeedbackPanelContent from "./FeedbackPanelContent";

type PanelKey = "howto" | "feedback" | null;

function BookIcon() {
  return (
    <svg width='17' height='17' viewBox='0 0 17 17' fill='none' aria-hidden='true'>
      <path
        d='M2 3.2C2 2.5 2.6 2 3.3 2H8v12.5H3.3c-.7 0-1.3-.5-1.3-1.2V3.2Z'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinejoin='round'
      />
      <path
        d='M15 3.2c0-.7-.6-1.2-1.3-1.2H9v12.5h4.7c.7 0 1.3-.5 1.3-1.2V3.2Z'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function FeedbackIcon() {
  return (
    <svg width='17' height='17' viewBox='0 0 17 17' fill='none' aria-hidden='true'>
      <path
        d='M2 4.5A2 2 0 0 1 4 2.5h9a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8.5L5 14.5V11.5H4a2 2 0 0 1-2-2v-5Z'
        stroke='currentColor'
        strokeWidth='1.3'
        strokeLinejoin='round'
      />
      <circle cx='6' cy='6.8' r='0.9' fill='currentColor' />
      <circle cx='8.5' cy='6.8' r='0.9' fill='currentColor' />
      <circle cx='11' cy='6.8' r='0.9' fill='currentColor' />
    </svg>
  );
}

interface FabProps {
  label: string;
  icon: React.ReactNode;
  isMobile: boolean;
  expandedWidth: number;
  isActive: boolean;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onClick: () => void;
}

function Fab({ label, icon, isMobile, expandedWidth, isActive, buttonRef, onClick }: FabProps) {
  const [hovered, setHovered] = useState(false);
  const expanded = !isMobile && (hovered || isActive);

  return (
    <button
      ref={buttonRef}
      type='button'
      aria-label={label}
      aria-expanded={isActive}
      title={label}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{
        height: 44,
        width: expanded ? expandedWidth : 44,
        borderRadius: 999,
        border: `1px solid ${expanded ? "rgba(56,189,248,0.35)" : "var(--line)"}`,
        background: "color-mix(in oklab, var(--surface) 78%, transparent)",
        backdropFilter: "blur(14px) saturate(140%)",
        WebkitBackdropFilter: "blur(14px) saturate(140%)",
        color: expanded ? "var(--blue)" : "var(--ink)",
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        paddingLeft: 13,
        cursor: "pointer",
        overflow: "hidden",
        boxShadow: expanded
          ? "0 0 0 1px rgba(56,189,248,0.2), 0 10px 30px -6px rgba(56,189,248,0.35), 0 10px 30px rgba(0,0,0,0.35)"
          : "0 10px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.04)",
        transition:
          "width 250ms cubic-bezier(0.16, 1, 0.3, 1), border-color 200ms ease, color 200ms ease, box-shadow 250ms ease",
      }}
    >
      <span style={{ flexShrink: 0, display: "flex" }}>{icon}</span>
      <span
        style={{
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontSize: 12.5,
          fontWeight: 600,
          whiteSpace: "nowrap",
          opacity: expanded ? 1 : 0,
          transition: "opacity 180ms ease",
        }}
      >
        {label}
      </span>
    </button>
  );
}

/**
 * Two signature floating widgets, mounted once at the root layout: a "How to
 * Use" guide and a "Feedback & Suggestions" form. Stacked directly above the
 * existing ScrollFloater so the whole right edge reads as one aligned
 * utility column. See WidgetShell for the open/close morph + a11y machinery.
 */
export default function FloatingWidgets() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 720px)").matches
      : false,
  );
  const [openPanel, setOpenPanel] = useState<PanelKey>(null);
  const howToRef = useRef<HTMLButtonElement>(null);
  const feedbackRef = useRef<HTMLButtonElement>(null);
  const howToTitleId = useId();
  const feedbackTitleId = useId();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          right: "clamp(14px, 2.4vw, 28px)",
          bottom: "calc(clamp(18px, 3vw, 32px) + 116px)",
          zIndex: 65,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 14,
        }}
      >
        <Fab
          label='How to Use'
          icon={<BookIcon />}
          isMobile={isMobile}
          expandedWidth={146}
          isActive={openPanel === "howto"}
          buttonRef={howToRef}
          onClick={() => setOpenPanel((p) => (p === "howto" ? null : "howto"))}
        />
        <Fab
          label='Feedback & Suggestions'
          icon={<FeedbackIcon />}
          isMobile={isMobile}
          expandedWidth={196}
          isActive={openPanel === "feedback"}
          buttonRef={feedbackRef}
          onClick={() => setOpenPanel((p) => (p === "feedback" ? null : "feedback"))}
        />
      </div>

      <WidgetShell
        isOpen={openPanel === "howto"}
        onClose={() => setOpenPanel(null)}
        triggerRef={howToRef}
        titleId={howToTitleId}
        title='How to Use Snap Pro'
        accentIcon={<BookIcon />}
      >
        <HowToUsePanelContent />
      </WidgetShell>

      <WidgetShell
        isOpen={openPanel === "feedback"}
        onClose={() => setOpenPanel(null)}
        triggerRef={feedbackRef}
        titleId={feedbackTitleId}
        title='Feedback & Suggestions'
        accentIcon={<FeedbackIcon />}
      >
        <FeedbackPanelContent />
      </WidgetShell>
    </>
  );
}
