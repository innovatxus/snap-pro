import type { LegalPage } from "./types";
import { LEGAL_PAGES } from "./content/legal";
import { POLICY_PAGES } from "./content/policies";
import { TRUST_PAGES } from "./content/trust";

export const ALL_PAGES: LegalPage[] = [
  ...LEGAL_PAGES,
  ...POLICY_PAGES,
  ...TRUST_PAGES,
];

export function getPage(
  tree: "legal" | "policies" | "trust",
  slug: string,
): LegalPage | undefined {
  return ALL_PAGES.find((p) => p.tree === tree && p.slug === slug);
}

export { LEGAL_PAGES, POLICY_PAGES, TRUST_PAGES };
