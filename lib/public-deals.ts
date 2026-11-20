/**
 * Deals data layer. SweetLivingRoom ships without a deals database, so these
 * return empty lists until data/deals.ts is introduced. Kept so the /deals
 * route and the homepage deals section render without special-casing.
 */
import type { Product } from "@/data/products";

export interface PublicDeal {
  id: string;
  productId: string;
  productSlug: string;
  title: string;
  slug: string;
  label: string;
  description: string;
  section: string;
  placement: string;
  amazonUrl: string;
  ctaText: string;
  priceRange: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  displayOrder: number;
  product?: Product;
}

export async function getPublicDeals(): Promise<PublicDeal[]> {
  return [];
}

export async function getPublicFeaturedDeals(): Promise<PublicDeal[]> {
  return [];
}

export async function getPublicDealsBySection(_section: string): Promise<PublicDeal[]> {
  void _section;
  return [];
}
