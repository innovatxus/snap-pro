import Link from "next/link";
import { Icon, type IconName } from "./Icon";

interface HelpCenterProps {
  /** Optional handler URLs — defaults are sensible placeholders. */
  contactHref?: string;
  featureRequestHref?: string;
  communityHref?: string;
  knowledgeBaseHref?: string;
}

export function HelpCenter({
  contactHref = "mailto:support@shotstudio.ai",
  featureRequestHref = "#",
  communityHref = "#",
  knowledgeBaseHref = "#",
}: HelpCenterProps) {
  const TILES: {
    icon: IconName;
    title: string;
    body: string;
    href: string;
    external?: boolean;
  }[] = [
    {
      icon: "fileText",
      title: "Knowledge base",
      body: "Browse the full reference, organised by topic.",
      href: knowledgeBaseHref,
    },
    {
      icon: "helpCircle",
      title: "Contact support",
      body: "Reach a human in under an hour during business hours.",
      href: contactHref,
    },
    {
      icon: "sparkles",
      title: "Request a feature",
      body: "Tell us what you wish ShotStudio could do.",
      href: featureRequestHref,
    },
    {
      icon: "users",
      title: "Community",
      body: "Trade workflows and presets with other operators.",
      href: communityHref,
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {TILES.map((tile) => (
        <Link
          key={tile.title}
          href={tile.href}
          className='stagger-item card-hover sheen flex flex-col gap-3'
          style={{
            background: "var(--surface)",
            border: "1px solid var(--line)",
            borderRadius: "var(--r-lg)",
            padding: 22,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <span
            aria-hidden='true'
            style={{
              width: 38,
              height: 38,
              borderRadius: "var(--r-sm)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--line)",
              color: "var(--blue)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name={tile.icon} size={16} />
          </span>
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
            {tile.title}
          </h3>
          <p
            style={{
              fontSize: 13,
              color: "var(--mute)",
              lineHeight: 1.55,
              flex: 1,
            }}
          >
            {tile.body}
          </p>
          <span
            className='link-underline'
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "var(--ink)",
              fontWeight: 500,
            }}
          >
            Open
            <Icon name='arrowRight' size={14} />
          </span>
        </Link>
      ))}
    </div>
  );
}
