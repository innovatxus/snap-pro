import type { MetadataRoute } from "next";
import {
  NICHES,
  SOCIAL_NICHES,
  STUDIO_NICHE,
  SUB_TOOLS,
  toolSlug,
} from "@/features/editor/data/niches";
import { LEGAL_PAGES, POLICY_PAGES, TRUST_PAGES } from "@/lib/legal";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://snappro.app";

/**
 * Production sitemap.
 *
 * Enumerates every real, indexable route. Marketing stubs (the ones rendered
 * by `MarketingStub`) are intentionally excluded — they are noindex until they
 * carry real content.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/learn`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/templates`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/trust`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const allNiches = [...NICHES, ...SUB_TOOLS, ...SOCIAL_NICHES, STUDIO_NICHE];

  const nicheRoutes: MetadataRoute.Sitemap = allNiches.map((n) => ({
    url: `${SITE_URL}/edit/${n.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const toolRoutes: MetadataRoute.Sitemap = allNiches.flatMap((n) =>
    n.services.map((s) => ({
      url: `${SITE_URL}/edit/${n.id}/${toolSlug(s.name)}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  );

  const legalRoutes: MetadataRoute.Sitemap = [
    ...LEGAL_PAGES.map((p) => ({
      url: `${SITE_URL}/legal/${p.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...POLICY_PAGES.map((p) => ({
      url: `${SITE_URL}/policies/${p.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...TRUST_PAGES.map((p) => ({
      url: `${SITE_URL}/trust/${p.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];

  return [...staticRoutes, ...nicheRoutes, ...toolRoutes, ...legalRoutes];
}
