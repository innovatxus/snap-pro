"use client";

import { useState } from "react";
import type { FaqItem } from "../types";
import { Icon } from "./Icon";

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenId?: string;
}

export function FaqAccordion({ items, defaultOpenId }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item) => {
        const isOpen = item.id === openId;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-btn-${item.id}`;
        return (
          <div
            key={item.id}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-lg)",
              overflow: "hidden",
            }}
          >
            <button
              id={buttonId}
              type='button'
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 20px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "inherit",
                textAlign: "left",
              }}
            >
              {item.topic && (
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--blue)",
                    minWidth: 80,
                  }}
                >
                  {item.topic}
                </span>
              )}
              <span
                style={{
                  flex: 1,
                  fontSize: 15,
                  color: "var(--ink)",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {item.question}
              </span>
              <span
                aria-hidden='true'
                style={{
                  width: 26,
                  height: 26,
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
                <Icon name='arrowRight' size={12} />
              </span>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role='region'
                aria-labelledby={buttonId}
                style={{
                  padding: "0 20px 18px 20px",
                  paddingLeft: item.topic ? 114 : 20,
                  fontSize: 14,
                  color: "var(--mute)",
                  lineHeight: 1.6,
                  maxWidth: 760,
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
