import type { Resource } from "../types";
import { Icon, type IconName } from "./Icon";

const KIND_ICON: Record<Resource["kind"], IconName> = {
  pdf: "fileText",
  template: "layers",
  checklist: "check",
  playbook: "fileText",
  preset: "sparkles",
};

const KIND_LABEL: Record<Resource["kind"], string> = {
  pdf: "PDF",
  template: "Template",
  checklist: "Checklist",
  playbook: "Playbook",
  preset: "Preset",
};

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const sizeLabel = resource.fileSizeKb
    ? resource.fileSizeKb >= 1024
      ? `${(resource.fileSizeKb / 1024).toFixed(1)} MB`
      : `${resource.fileSizeKb} KB`
    : null;

  return (
    <article
      className='stagger-item card-hover sheen relative flex flex-col'
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-lg)",
        padding: 20,
        gap: 14,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          aria-hidden='true'
          style={{
            width: 36,
            height: 36,
            borderRadius: "var(--r-sm)",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--line)",
            color: "var(--blue)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name={KIND_ICON[resource.kind]} size={16} />
        </span>
        <span
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--mute)",
          }}
        >
          {KIND_LABEL[resource.kind]}
          {sizeLabel ? ` · ${sizeLabel}` : ""}
        </span>
        {resource.isPremium && (
          <span
            style={{
              marginLeft: "auto",
              fontFamily: "var(--font-geist-mono)",
              fontSize: 9,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--blue)",
              background: "color-mix(in oklab, var(--blue) 12%, transparent)",
              border:
                "1px solid color-mix(in oklab, var(--blue) 35%, transparent)",
              borderRadius: "var(--r-pill)",
              padding: "3px 8px",
            }}
          >
            Premium
          </span>
        )}
      </div>

      <h3
        className='font-fraunces'
        style={{
          fontSize: 18,
          fontWeight: 400,
          lineHeight: 1.2,
          color: "var(--ink)",
          letterSpacing: "-0.01em",
        }}
      >
        {resource.title}
      </h3>
      <p
        style={{
          fontSize: 13,
          color: "var(--mute)",
          lineHeight: 1.55,
          flex: 1,
        }}
      >
        {resource.description}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          paddingTop: 8,
          borderTop: "1px solid var(--line)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {resource.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 9,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--mute)",
                border: "1px solid var(--line)",
                borderRadius: "var(--r-pill)",
                padding: "3px 8px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          type='button'
          className='link-underline'
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            color: "var(--ink)",
            fontWeight: 500,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          aria-label={`Download ${resource.title}`}
        >
          Download
          <Icon name='download' size={14} />
        </button>
      </div>
    </article>
  );
}
