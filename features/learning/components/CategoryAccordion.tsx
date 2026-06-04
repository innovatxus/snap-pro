"use client";

import { useState } from "react";
import type { Tutorial, TutorialCategory } from "../types";
import { Icon, type IconName } from "./Icon";
import { TutorialCard } from "./TutorialCard";

interface CategoryAccordionProps {
  categories: TutorialCategory[];
  tutorialsByCategory: Record<string, Tutorial[]>;
  /** Categories expanded by default (e.g. ["getting-started"]). */
  defaultExpanded?: string[];
}

export function CategoryAccordion({
  categories,
  tutorialsByCategory,
  defaultExpanded = [],
}: CategoryAccordionProps) {
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(defaultExpanded),
  );

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {categories.map((category) => {
        const isOpen = expanded.has(category.id);
        const tutorials = tutorialsByCategory[category.id] ?? [];
        const panelId = `cat-panel-${category.id}`;
        const buttonId = `cat-btn-${category.id}`;

        return (
          <div
            key={category.id}
            id={category.id}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-xl)",
              overflow: "hidden",
            }}
          >
            <button
              id={buttonId}
              type='button'
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(category.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 18,
                padding: "20px 24px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "inherit",
                textAlign: "left",
              }}
            >
              <span
                aria-hidden='true'
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "var(--r-md)",
                  background:
                    "color-mix(in oklab, var(--blue) 12%, transparent)",
                  border:
                    "1px solid color-mix(in oklab, var(--blue) 30%, transparent)",
                  color: "var(--blue)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon name={category.iconKey as IconName} size={20} />
              </span>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    flexWrap: "wrap",
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--mute)",
                    }}
                  >
                    {category.eyebrow}
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
                    · {category.tutorialCount}{" "}
                    {category.tutorialCount === 1 ? "tutorial" : "tutorials"}
                    {category.totalDurationMin > 0 && (
                      <> · {category.totalDurationMin} min</>
                    )}
                  </span>
                </div>
                <h3
                  className='font-fraunces'
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: "var(--ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {category.name}
                </h3>
                <p
                  style={{
                    marginTop: 4,
                    fontSize: 13,
                    color: "var(--mute)",
                    lineHeight: 1.5,
                    maxWidth: 720,
                  }}
                >
                  {category.description}
                </p>
              </div>

              <span
                aria-hidden='true'
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 999,
                  border: "1px solid var(--line)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 280ms cubic-bezier(0.22, 1, 0.36, 1)",
                  color: "var(--ink)",
                }}
              >
                <Icon name='arrowRight' size={14} />
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role='region'
                aria-labelledby={buttonId}
                style={{
                  borderTop: "1px solid var(--line)",
                  padding: 18,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {tutorials.length === 0 ? (
                  <div
                    style={{
                      padding: "16px 6px",
                      color: "var(--mute)",
                      fontSize: 13,
                    }}
                  >
                    Tutorials in this category are on the way.
                  </div>
                ) : (
                  <div
                    style={{
                      display: "grid",
                      gap: 12,
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(240px, 1fr))",
                    }}
                  >
                    {tutorials.map((t) => (
                      <TutorialCard key={t.id} tutorial={t} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
