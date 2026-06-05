/**
 * Bilingual content schema for legal / policy / trust pages.
 *
 * Every page declares both EN and AR copy. The shell component (`LegalArticle`)
 * reads the user's active locale and renders the matching strings while flipping
 * `dir="rtl"` for AR.
 *
 * `status: "final"` → counsel-reviewed and published.
 * `status: "draft"` → structural skeleton; surface a DRAFT banner so users and
 * indexers know the page is under legal review.
 */

export type LegalStatus = "final" | "draft";

export interface BiText {
  en: string;
  ar: string;
}

export interface BiList {
  en: string[];
  ar: string[];
}

/**
 * A page section. `paragraphs` is rendered as <p>, `bullets` as <ul><li>, in that
 * order. Either / both may be empty.
 */
export interface LegalSection {
  id: string;
  heading: BiText;
  /** Optional intro sentence rendered between heading and content. */
  lede?: BiText;
  paragraphs?: BiList;
  bullets?: BiList;
  /** Optional `definition list` block — pairs of term + meaning. */
  defs?: { term: BiText; meaning: BiText }[];
  /** Optional table block — useful for sub-processors, retention, fees. */
  table?: {
    head: BiList;
    rows: BiList[];
  };
}

export interface LegalPage {
  /** URL slug under its tree. e.g. "privacy" → /legal/privacy */
  slug: string;
  /** Tree the slug belongs to. */
  tree: "legal" | "policies" | "trust" | "marketing";
  status: LegalStatus;
  /** Optional last-reviewed ISO date. Rendered in the page header. */
  updated?: string;
  title: BiText;
  meta: BiText;
  h1: BiText;
  /** One-paragraph plain-language summary at the top of the article. */
  summary?: BiText;
  sections: LegalSection[];
  /** Internal links rendered after the article. */
  related?: { href: string; label: BiText }[];
  /** Primary CTA block at the page bottom. */
  cta?: {
    label: BiText;
    href: string;
    note?: BiText;
  };
}
