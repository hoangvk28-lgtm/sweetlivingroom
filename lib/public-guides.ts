/**
 * Public-facing guide data layer.
 *
 * data/guides.ts is the single source of truth. The functions stay async so
 * every page keeps the same call shape it had on the database-backed template.
 */
import { guides as staticGuides, type Guide } from "@/data/guides";
import type { GuideProductPick } from "@/lib/site-types";

export type { GuideProductPick };

export interface PublicGuide extends Guide {
  metaTitle?: string;
  metaDescription?: string;
  heroImageAlt?: string;
  intro?: string;
  productPicks?: GuideProductPick[];
}

export async function getPublicGuides(): Promise<PublicGuide[]> {
  return [...staticGuides].sort((a, b) =>
    (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? "")
  );
}

export async function getPublicGuideBySlug(slug: string): Promise<PublicGuide | undefined> {
  return staticGuides.find((g) => g.slug === slug);
}

export async function getPublicGuideSlugs(): Promise<string[]> {
  return staticGuides.map((g) => g.slug);
}

export async function getPublicGuidesByCategory(categorySlug: string): Promise<PublicGuide[]> {
  const all = await getPublicGuides();
  return all.filter((g) => g.categorySlug === categorySlug);
}

export async function getFeaturedPublicGuides(limit = 6): Promise<PublicGuide[]> {
  const all = await getPublicGuides();
  return all.slice(0, limit);
}

export async function getRelatedPublicGuides(slugs: string[]): Promise<PublicGuide[]> {
  if (slugs.length === 0) return [];
  const all = await getPublicGuides();
  return slugs
    .map((slug) => all.find((g) => g.slug === slug))
    .filter((g): g is PublicGuide => g !== undefined);
}
