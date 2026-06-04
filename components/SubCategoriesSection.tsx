import type { ReactNode } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

// ── Data ────────────────────────────────────────────────────────────────────

interface Tool {
  id: string;
  name: string;
  desc: string;
  icon: ReactNode;
  image: string;
}

const S = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PERSONAL: Tool[] = [
  {
    id: "graduations",
    name: "Graduations",
    desc: "Studio-finish graduation portraits with polished backdrops.",
    image:
      "https://images.unsplash.com/photo-1722648325285-058946b4487b?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <path d='M8 2L15 6L8 10L1 6L8 2Z' />
        <path d='M4 8.5V12.5' />
        <path d='M8 10V13' />
        <circle cx='8' cy='14' r='1' fill='currentColor' stroke='none' />
      </svg>
    ),
  },
  {
    id: "anniversaries",
    name: "Anniversaries",
    desc: "Elegant scene enhancements for milestone anniversary photos.",
    image:
      "https://images.unsplash.com/photo-1540076156429-35ffe82b7870?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <path d='M8 13.5L2.5 8C2.5 5.5 4.5 3.5 6.5 4.5C7.5 5 8 6 8 6C8 6 8.5 5 9.5 4.5C11.5 3.5 13.5 5.5 13.5 8L8 13.5Z' />
      </svg>
    ),
  },
  {
    id: "makeup-guide",
    name: "Make Up Guide",
    desc: "Visualize makeup looks with AI skin and color enhancement.",
    image:
      "https://images.unsplash.com/photo-1512207426415-91c2e14fbe36?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <rect x='6.5' y='4' width='3' height='6' rx='0.5' />
        <rect x='6.5' y='10' width='3' height='4' rx='0.5' />
        <path d='M7 4L9 4L8 2Z' />
        <path d='M6.5 7H9.5' />
      </svg>
    ),
  },
  {
    id: "face-recognition",
    name: "Face Recognition",
    desc: "AI face detection for precise portrait retouching.",
    image:
      "https://images.unsplash.com/photo-1579473865557-61c4274a8ebb?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <circle cx='8' cy='7' r='3' />
        <path d='M1 3V1H3' />
        <path d='M13 1H15V3' />
        <path d='M1 13V15H3' />
        <path d='M13 15H15V13' />
        <path d='M6.5 8.5C7 9.5 7.5 10 8 10C8.5 10 9 9.5 9.5 8.5' />
      </svg>
    ),
  },
  {
    id: "gym-staging",
    name: "Gym Staging",
    desc: "Dynamic backdrop scenes for fitness and gym photography.",
    image:
      "https://images.unsplash.com/photo-1758957646695-ec8bce3df462?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <path d='M4 8H12' />
        <rect x='1' y='6' width='2' height='4' rx='0.5' />
        <rect x='3.5' y='5' width='1.5' height='6' rx='0.5' />
        <rect x='11' y='5' width='1.5' height='6' rx='0.5' />
        <rect x='13' y='6' width='2' height='4' rx='0.5' />
      </svg>
    ),
  },
  {
    id: "event-portraits",
    name: "Event Portraits",
    desc: "Enhance event and occasion photography with clean finishes.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <rect x='1' y='5' width='14' height='10' rx='1.5' />
        <circle cx='8' cy='10' r='2.5' />
        <path d='M5.5 5V4C5.5 3 6 2 7.5 2H8.5C10 2 10.5 3 10.5 4V5' />
        <circle cx='12' cy='7.5' r='0.5' fill='currentColor' stroke='none' />
      </svg>
    ),
  },
  {
    id: "hajj-umrah",
    name: "Hajj & Umrah",
    desc: "Restore family pilgrimage archives. Old photo repair, face recovery, warm-tone grading, and print export.",
    image:
      "https://images.unsplash.com/photo-1474314170901-c8e060a0cb04?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <rect x='1' y='3' width='11' height='9' rx='1' />
        <path d='M1 8.5L3.5 6.5L6.5 8.5L9.5 6' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M13.5 1L14 3L15.5 3.5L14 4L13.5 6L13 4L11.5 3.5L13 3L13.5 1Z'
          fill='currentColor' strokeWidth='0.5' />
      </svg>
    ),
  },
];

const BUSINESS: Tool[] = [
  {
    id: "digital-business-card",
    name: "Digital Business Card",
    desc: "Generate polished digital business cards from a photo.",
    image:
      "https://images.unsplash.com/photo-1718670013921-2f144aba173a?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <rect x='1' y='4' width='14' height='9' rx='1.5' />
        <circle cx='11' cy='7.5' r='1.5' />
        <path d='M4 7.5H8' />
        <path d='M4 10H9' />
      </svg>
    ),
  },
  {
    id: "digital-brochure",
    name: "Digital Brochure",
    desc: "Create print-ready brochure visuals from product images.",
    image:
      "https://images.unsplash.com/photo-1695634621224-656c9906e92b?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <path d='M6 2H3C2.4 2 2 2.4 2 3V13C2 13.6 2.4 14 3 14H13C13.6 14 14 13.6 14 13V3C14 2.4 13.6 2 13 2H10' />
        <rect x='6' y='1' width='4' height='3' rx='0.5' />
        <path d='M5 7H11' />
        <path d='M5 10H11' />
      </svg>
    ),
  },
  {
    id: "digital-menu",
    name: "Digital Menu",
    desc: "Style food and drink photos into clean digital menu assets.",
    image:
      "https://images.unsplash.com/photo-1612939675110-fe3a0129a024?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <rect x='3' y='2' width='10' height='12' rx='1' />
        <path d='M6 5.5H10' />
        <path d='M5 8H11' />
        <path d='M5 10.5H11' />
      </svg>
    ),
  },
  {
    id: "resume-redesign",
    name: "Resume Redesign",
    desc: "Replace or enhance headshots for a professional resume look.",
    image:
      "https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <rect x='3' y='1' width='10' height='14' rx='1' />
        <circle cx='8' cy='5.5' r='1.5' />
        <path d='M5.5 10C5.5 8.6 6.6 7.8 8 7.8C9.4 7.8 10.5 8.6 10.5 10' />
        <path d='M6 12H10' />
      </svg>
    ),
  },
  {
    id: "logo-creation",
    name: "Logo Creation",
    desc: "Generate and refine logo concepts from brand references.",
    image:
      "https://images.unsplash.com/photo-1498075702571-ecb018f3752d?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <path d='M8 1.5L9.8 6H14.5L10.5 8.8L12 13.5L8 10.5L4 13.5L5.5 8.8L1.5 6H6.2L8 1.5Z' />
      </svg>
    ),
  },
  {
    id: "brand-kit",
    name: "Brand Kit",
    desc: "Maintain consistent visual identity across all brand assets.",
    image:
      "https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <rect x='1' y='1' width='6' height='6' rx='1' />
        <rect x='9' y='1' width='6' height='6' rx='1' />
        <rect x='1' y='9' width='6' height='6' rx='1' />
        <rect x='9' y='9' width='6' height='6' rx='1' />
      </svg>
    ),
  },
  {
    id: "product-redesign",
    name: "Product Redesign",
    desc: "Generate color variants, material swaps, and concept iterations. A/B compare directly in the canvas.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <path d='M13 4.5A5.5 5.5 0 1 0 13.5 8' strokeLinecap='round' />
        <path d='M13 1.5V4.5H10' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ),
  },
  {
    id: "product-catalogues",
    name: "Product Catalogues",
    desc: "Auto-layout PDF lookbooks and linesheets with SKU sync, price injection, and brand theming.",
    image:
      "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <rect x='1.5' y='2' width='13' height='12' rx='1.5' />
        <path d='M1.5 6.5H14.5' />
        <path d='M1.5 11H14.5' />
        <path d='M6 6.5V14' />
      </svg>
    ),
  },
  {
    id: "business-cards",
    name: "Business Cards",
    desc: "Print-ready card design with logo placement, bleed setup, QR code generation, and mockup render.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop",
    icon: (
      <svg {...S}>
        <rect x='1.5' y='4.5' width='13' height='8' rx='1.5' />
        <path d='M4 8H8.5' />
        <path d='M4 10.5H12' />
        <circle cx='11.5' cy='7.5' r='1.5' />
      </svg>
    ),
  },
];

// ── Compact image card ────────────────────────────────────────────────────────

function CompactToolCard({ tool }: { tool: Tool }) {
  return (
    <div
      role='listitem'
      className='card-hover relative overflow-hidden flex flex-col justify-end'
      style={{
        aspectRatio: "4/3",
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-lg)",
      }}
    >
      <Image
        src={tool.image}
        alt={`${tool.name} photography`}
        fill
        className='object-cover'
        sizes='(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 17vw'
      />

      {/* Gradient overlay */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.0) 20%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* Text */}
      <div className='relative z-10' style={{ padding: "0 12px 12px" }}>
        <p
          className='font-fraunces'
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: "var(--ink)",
            lineHeight: 1.2,
            marginBottom: 3,
          }}
        >
          {tool.name}
        </p>
        <p
          style={{
            fontSize: 10,
            color: "var(--mute)",
            fontFamily: "var(--font-geist-sans)",
            lineHeight: 1.4,
          }}
        >
          {tool.desc}
        </p>
      </div>
    </div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────

interface GroupProps {
  label: string;
  heading: string;
  italic: string;
  tools: Tool[];
  delayBase: 0 | 1 | 2;
}

function ToolGroup({ label, heading, italic, tools, delayBase }: GroupProps) {
  return (
    <div>
      <div
        style={{
          borderBottom: "1px solid var(--line)",
          paddingBottom: 20,
          marginBottom: 28,
        }}
      >
        <div className='section-num'>{label}</div>
        <h3
          className='font-fraunces'
          style={{
            fontSize: "clamp(24px, 2.8vw, 36px)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "var(--ink)",
          }}
        >
          {heading} <em className='silver'>{italic}</em>
        </h3>
      </div>

      <div
        role='list'
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3'
        aria-label={`${label} tools`}
      >
        {tools.map((tool, i) => (
          <ScrollReveal
            key={tool.id}
            delay={((delayBase + (i % 3)) % 5) as 0 | 1 | 2 | 3 | 4}
          >
            <CompactToolCard tool={tool} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default function SubCategoriesSection() {
  return (
    <section
      id='subcategories'
      className='relative z-10 mt-40'
      aria-labelledby='subcategories-heading'
    >
      <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
        {/* Section header */}
        <div
          className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'
          style={{
            borderBottom: "1px solid var(--line)",
            paddingBottom: 28,
            marginBottom: 56,
          }}
        >
          <div>
            <h2
              id='subcategories-heading'
              className='font-fraunces'
              style={{
                fontSize: "clamp(40px, 5vw, 76px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--ink)",
              }}
            >
              Tools for every <em className='silver'>workflow.</em>
            </h2>
            <p
              style={{
                marginTop: 16,
                maxWidth: 580,
                color: "var(--mute)",
                fontSize: 16,
                lineHeight: 1.55,
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              Whether you edit solo or run a full production team, every tool is
              sized to your workflow.
            </p>
          </div>
        </div>

        {/* Two groups — stacked vertically, each full-width */}
        <div className='flex flex-col gap-16'>
          <ToolGroup
            label='Personal Tools'
            heading='Built for'
            italic='individuals.'
            tools={PERSONAL}
            delayBase={0}
          />
          <ToolGroup
            label='Business Tools'
            heading='Built for'
            italic='teams.'
            tools={BUSINESS}
            delayBase={1}
          />
        </div>
      </div>
    </section>
  );
}
