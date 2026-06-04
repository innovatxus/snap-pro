"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchAll } from "../services/learning-service";
import type { SearchHit } from "../types";
import { Icon } from "./Icon";

const KIND_LABEL: Record<SearchHit["kind"], string> = {
  tutorial: "Tutorial",
  category: "Category",
  path: "Path",
  resource: "Resource",
  faq: "FAQ",
};

const QUICK_ACTIONS: { label: string; href: string }[] = [
  { label: "Continue learning", href: "#continue-learning" },
  { label: "Browse tutorials", href: "#categories" },
  { label: "Start a path", href: "#paths" },
  { label: "View certifications", href: "#certifications" },
];

export function LearnSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const hits = useMemo(() => searchAll(query, 8), [query]);

  // ⌘K / Ctrl+K opens the search field
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMeta = e.metaKey || e.ctrlKey;
      if (isMeta && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (e.key === "Escape") {
        inputRef.current?.blur();
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close results when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={containerRef} className='relative'>
      <div
        style={{
          position: "relative",
          background: "var(--surface)",
          border: "1px solid var(--line)",
          borderRadius: "var(--r-pill)",
          padding: "4px 6px 4px 18px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          boxShadow: "var(--shadow-card)",
        }}
      >
        <Icon name='search' size={18} aria-hidden='true' />
        <input
          ref={inputRef}
          type='search'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder='Search tutorials, tools, workflows, resources…'
          aria-label='Search the Learning Center'
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            fontFamily: "var(--font-geist-sans)",
            fontSize: 15,
            color: "var(--ink)",
            padding: "12px 0",
          }}
        />
        <kbd
          aria-hidden='true'
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "var(--mute)",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--line)",
            borderRadius: "var(--r-sm)",
            padding: "4px 8px",
            marginRight: 4,
          }}
        >
          ⌘K
        </kbd>
      </div>

      {/* Quick actions strip */}
      <div
        style={{
          marginTop: 14,
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {QUICK_ACTIONS.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className='btn-lift'
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "8px 14px",
              borderRadius: "var(--r-pill)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--line)",
              color: "var(--ink)",
              textDecoration: "none",
            }}
          >
            {action.label}
          </Link>
        ))}
      </div>

      {/* Results dropdown */}
      {open && query.trim().length > 0 && (
        <div
          role='listbox'
          aria-label='Search results'
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            left: 0,
            right: 0,
            zIndex: 30,
            background: "rgba(14,18,28,0.92)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid var(--line)",
            borderRadius: "var(--r-lg)",
            boxShadow: "var(--shadow-card)",
            overflow: "hidden",
          }}
        >
          {hits.length === 0 ? (
            <div
              style={{
                padding: "20px 22px",
                color: "var(--mute)",
                fontSize: 13,
              }}
            >
              No matches for “{query}”. Try a tool or category name.
            </div>
          ) : (
            <ul style={{ listStyle: "none", margin: 0, padding: 6 }}>
              {hits.map((hit) => (
                <li key={`${hit.kind}-${hit.id}`}>
                  <Link
                    href={hit.href}
                    role='option'
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "12px 14px",
                      borderRadius: "var(--r-md)",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "background 200ms",
                    }}
                    onClick={() => setOpen(false)}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.04)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: 9,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--blue)",
                        minWidth: 70,
                      }}
                    >
                      {KIND_LABEL[hit.kind]}
                    </span>
                    <span style={{ flex: 1 }}>
                      <span
                        style={{
                          display: "block",
                          fontSize: 14,
                          color: "var(--ink)",
                          fontWeight: 500,
                          marginBottom: 2,
                        }}
                      >
                        {hit.title}
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: 12,
                          color: "var(--mute)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {hit.blurb}
                      </span>
                    </span>
                    <Icon name='arrowRight' size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
