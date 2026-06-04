"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

type Variant = "up" | "fade" | "right" | "left" | "scale" | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  variant?: Variant;
  /** When true, applies staggered child reveals (children should have `stagger-item`). */
  stagger?: boolean;
  as?: ElementType;
  /** Re-trigger every time it enters viewport. Default false (one-shot). */
  repeat?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  stagger = false,
  as: Tag = "div",
  repeat = false,
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          if (!repeat) obs.unobserve(el);
        } else if (repeat) {
          el.classList.remove("in");
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [repeat, threshold]);

  const variantClass = `reveal-${variant}`;
  const delayClass = delay > 0 ? `reveal-d${delay}` : "";
  const staggerClass = stagger ? "stagger" : "";

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`${variantClass} ${staggerClass} ${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
