"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

interface WidgetShellProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLElement | null>;
  titleId: string;
  title: string;
  accentIcon: ReactNode;
  children: ReactNode;
  widthPx?: number;
}

type Phase = "closed" | "opening" | "open" | "closing";

const OPEN_MS = 400;
const CLOSE_MS = 280;

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
}

/**
 * Shared shell for both floating panels — handles the signature "morph from
 * the trigger button" open animation, the mobile bottom-sheet layout,
 * Esc/overlay close, focus trap + restore, body scroll lock, and the
 * prefers-reduced-motion fallback (plain opacity crossfade, no scale/morph).
 */
export default function WidgetShell({
  isOpen,
  onClose,
  triggerRef,
  titleId,
  title,
  accentIcon,
  children,
  widthPx = 400,
}: WidgetShellProps) {
  const [phase, setPhase] = useState<Phase>("closed");
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 720px)").matches
      : false,
  );
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );
  const panelRef = useRef<HTMLDivElement>(null);
  const lastActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const rmq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    const onRmq = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onMq);
    rmq.addEventListener("change", onRmq);
    return () => {
      mq.removeEventListener("change", onMq);
      rmq.removeEventListener("change", onRmq);
    };
  }, []);

  // Adjust phase in response to isOpen changing (React's sanctioned
  // "adjust state during render" pattern — not an effect, so the
  // transition starts in the same commit as the prop change).
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setPhase("opening");
    } else if (phase === "open" || phase === "opening") {
      setPhase("closing");
    }
  }

  // Once "opening" commits: capture the element to restore focus to later,
  // then flip to "open" next frame so the CSS transition actually animates
  // from the initial scaled-down state.
  useEffect(() => {
    if (phase !== "opening") return;
    lastActiveElement.current = document.activeElement as HTMLElement | null;
    const raf = requestAnimationFrame(() => setPhase("open"));
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  // Once "closing" commits, unmount after the close transition finishes.
  useEffect(() => {
    if (phase !== "closing") return;
    const timer = setTimeout(
      () => {
        setPhase("closed");
        lastActiveElement.current?.focus?.();
      },
      reducedMotion ? 0 : CLOSE_MS,
    );
    return () => clearTimeout(timer);
  }, [phase, reducedMotion]);

  // Morph origin: scale in/out from the trigger button's screen position.
  useLayoutEffect(() => {
    if (phase !== "opening") return;
    const panel = panelRef.current;
    const trigger = triggerRef.current;
    if (!panel) return;
    if (!trigger || isMobile) {
      panel.style.transformOrigin = "100% 100%";
      return;
    }
    const panelRect = panel.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const originX = triggerRect.left + triggerRect.width / 2 - panelRect.left;
    const originY = triggerRect.top + triggerRect.height / 2 - panelRect.top;
    panel.style.transformOrigin = `${originX}px ${originY}px`;
  }, [phase, isMobile, triggerRef]);

  // Body scroll lock while mounted/visible.
  useEffect(() => {
    if (phase === "closed") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  // Esc to close + focus trap.
  useEffect(() => {
    if (phase === "closed") return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = getFocusable(panel);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, onClose]);

  // Move focus into the panel once it's mounted.
  useEffect(() => {
    if (phase !== "opening") return;
    const panel = panelRef.current;
    if (!panel) return;
    const focusable = getFocusable(panel);
    (focusable[0] ?? panel).focus();
  }, [phase]);

  const onOverlayPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  if (phase === "closed") return null;

  const visible = phase === "open";
  const animatedScale = reducedMotion ? 1 : visible ? 1 : 0.06;
  const transitionDuration = phase === "closing" ? CLOSE_MS : OPEN_MS;
  const easing = visible
    ? "cubic-bezier(0.34, 1.56, 0.64, 1)" /* --ease-spring */
    : "cubic-bezier(0.16, 1, 0.3, 1)" /* --ease-out-expo */;
  const transition = reducedMotion
    ? `opacity ${transitionDuration}ms ease`
    : `transform ${transitionDuration}ms ${easing}, opacity ${transitionDuration}ms ease`;

  return (
    <div
      className='fixed inset-0'
      style={{ zIndex: 70, pointerEvents: visible ? "auto" : "none" }}
      onPointerDown={onOverlayPointerDown}
    >
      {/* Backdrop — present on mobile sheets, a faint dimmer on desktop */}
      <div
        className='absolute inset-0'
        style={{
          background: isMobile ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.18)",
          opacity: visible ? 1 : 0,
          transition: `opacity ${transitionDuration}ms ease`,
        }}
      />

      <div
        ref={panelRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby={titleId}
        tabIndex={-1}
        className='absolute flex flex-col'
        style={
          isMobile
            ? {
                left: 0,
                right: 0,
                bottom: 0,
                maxHeight: "85vh",
                borderTopLeftRadius: "var(--r-xl)",
                borderTopRightRadius: "var(--r-xl)",
                paddingBottom: "env(safe-area-inset-bottom, 0px)",
                transform: `scale(${animatedScale}) translateY(${visible ? 0 : 12}px)`,
                opacity: visible ? 1 : 0,
                transition,
                background: "rgba(10,10,10,0.94)",
                backdropFilter: "blur(28px) saturate(140%)",
                WebkitBackdropFilter: "blur(28px) saturate(140%)",
                border: "1px solid var(--line)",
                borderBottom: "none",
                boxShadow: "0 -24px 64px rgba(0,0,0,0.6)",
              }
            : {
                right: "clamp(14px, 2.4vw, 28px)",
                bottom: 106,
                width: widthPx,
                maxHeight: "min(640px, 80vh)",
                borderRadius: "var(--r-xl)",
                transform: `scale(${animatedScale})`,
                opacity: visible ? 1 : 0,
                transition,
                background: "rgba(10,10,10,0.94)",
                backdropFilter: "blur(28px) saturate(140%)",
                WebkitBackdropFilter: "blur(28px) saturate(140%)",
                border: "1px solid var(--line)",
                boxShadow:
                  "0 24px 64px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 0 40px -12px rgba(56,189,248,0.25)",
              }
        }
      >
        {/* Drag handle (mobile only, decorative) */}
        {isMobile && (
          <div
            aria-hidden='true'
            style={{
              width: 36,
              height: 4,
              borderRadius: 999,
              background: "var(--line-2)",
              margin: "10px auto 2px",
              flexShrink: 0,
            }}
          />
        )}

        {/* Header */}
        <div
          className='flex items-center gap-3 flex-shrink-0'
          style={{
            padding: "16px 20px",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div
            aria-hidden='true'
            className='flex items-center justify-center flex-shrink-0'
            style={{
              width: 30,
              height: 30,
              borderRadius: "var(--r-md)",
              background: "rgba(56,189,248,0.1)",
              border: "1px solid rgba(56,189,248,0.25)",
              color: "var(--blue)",
            }}
          >
            {accentIcon}
          </div>
          <h2
            id={titleId}
            className='font-fraunces'
            style={{
              fontSize: 17,
              fontWeight: 400,
              color: "var(--ink)",
              flex: 1,
              margin: 0,
            }}
          >
            {title}
          </h2>
          <button
            type='button'
            aria-label='Close'
            onClick={onClose}
            style={{
              width: 30,
              height: 30,
              borderRadius: "var(--r-md)",
              border: "1px solid var(--line)",
              background: "var(--surface-2)",
              color: "var(--mute)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              transition: "color 200ms ease, border-color 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--ink)";
              e.currentTarget.style.borderColor = "var(--line-2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--mute)";
              e.currentTarget.style.borderColor = "var(--line)";
            }}
          >
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none' aria-hidden='true'>
              <path
                d='M2 2L12 12M12 2L2 12'
                stroke='currentColor'
                strokeWidth='1.6'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div
          className='flex-1'
          style={{
            overflowY: "auto",
            padding: "20px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
