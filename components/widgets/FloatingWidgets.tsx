"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
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

interface OrbFabProps {
  variant: "gas" | "chrome";
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onClick: () => void;
}

/**
 * The "gas globe" / "liquid chrome" floating trigger. Stays a perfect circle
 * in every state — the label surfaces as a small fade-in tooltip rather than
 * stretching the orb into a pill. Gas globe nudges its inner blobs toward the
 * cursor on hover (desktop/fine-pointer only, skipped under reduced-motion);
 * chrome orb fires a one-shot liquid ripple on press. Every animated layer
 * lives in CSS (transform/opacity only) — see the ".fab-orb*" rules in
 * globals.css for the actual motion.
 */
function OrbFab({ variant, label, icon, isActive, buttonRef, onClick }: OrbFabProps) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [rippleKey, setRippleKey] = useState(0);
  const blobsRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  const canHover =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>) => {
      if (variant !== "gas" || !canHover || reducedMotion || !blobsRef.current) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        blobsRef.current?.style.setProperty("--gx", `${relX * 6}px`);
        blobsRef.current?.style.setProperty("--gy", `${relY * 6}px`);
      });
    },
    [variant, canHover, reducedMotion],
  );

  const onPointerLeave = useCallback(() => {
    setTooltipVisible(false);
    if (variant !== "gas") return;
    blobsRef.current?.style.setProperty("--gx", "0px");
    blobsRef.current?.style.setProperty("--gy", "0px");
  }, [variant]);

  const handleClick = () => {
    if (variant === "chrome") setRippleKey((k) => k + 1);
    onClick();
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        ref={buttonRef}
        type='button'
        aria-label={label}
        aria-expanded={isActive}
        title={label}
        className={`fab-orb fab-orb-${variant}`}
        onClick={handleClick}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={onPointerLeave}
        onFocus={() => setTooltipVisible(true)}
        onBlur={() => setTooltipVisible(false)}
        onPointerMove={onPointerMove}
      >
        {variant === "gas" ? (
          <>
            <span ref={blobsRef} aria-hidden='true' className='fab-orb-blobs'>
              <span className='fab-orb-blob fab-orb-blob-a' />
              <span className='fab-orb-blob fab-orb-blob-b' />
            </span>
            <span aria-hidden='true' className='fab-orb-core' />
          </>
        ) : (
          <>
            <span aria-hidden='true' className='fab-orb-spec' />
            <span aria-hidden='true' className='fab-orb-shine' />
            {rippleKey > 0 && <span key={rippleKey} aria-hidden='true' className='fab-orb-ripple' />}
          </>
        )}
        <span className='fab-orb-icon'>{icon}</span>
      </button>
      <span className={`fab-orb-tooltip${tooltipVisible ? " is-visible" : ""}`}>{label}</span>
    </div>
  );
}

/**
 * Two signature floating widgets, mounted once at the root layout: a "How to
 * Use" guide and a "Feedback & Suggestions" form. Stacked directly above the
 * existing ScrollFloater so the whole right edge reads as one aligned
 * utility column. See WidgetShell for the open/close morph + a11y machinery.
 */
export default function FloatingWidgets() {
  const [openPanel, setOpenPanel] = useState<PanelKey>(null);
  const [tabHidden, setTabHidden] = useState(() =>
    typeof document !== "undefined" ? document.hidden : false,
  );
  const howToRef = useRef<HTMLButtonElement>(null);
  const feedbackRef = useRef<HTMLButtonElement>(null);
  const howToTitleId = useId();
  const feedbackTitleId = useId();

  // Pause the orbs' idle motion while the tab is backgrounded — no point
  // animating gas/chrome for nobody to see, and it saves battery.
  useEffect(() => {
    const onVisibilityChange = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  return (
    <>
      <div
        className={tabHidden ? "tab-hidden" : undefined}
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
        <OrbFab
          variant='gas'
          label='How to Use'
          icon={<BookIcon />}
          isActive={openPanel === "howto"}
          buttonRef={howToRef}
          onClick={() => setOpenPanel((p) => (p === "howto" ? null : "howto"))}
        />
        <OrbFab
          variant='chrome'
          label='Feedback & Suggestions'
          icon={<FeedbackIcon />}
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
