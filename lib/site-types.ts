/**
 * Shared content types for the static (export-only) data layer.
 * SweetLivingRoom ships as a fully static Cloudflare Pages site, so these
 * shapes are filled from files under data/, never from a database.
 */

export interface GuideProductPick {
  id: string;
  productId?: string;
  badge: string;
  name: string;
  brand?: string;
  asin?: string;
  affiliateUrl: string;
  imageUrl: string;
  priceLabel: "Budget" | "Mid-range" | "Premium" | "Check Amazon";
  fitScore?: number;
  summary: string;
  whyItWins: string;
  bestFor?: string;
  skipIf?: string;
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  ctaLabel?: string;
}

export interface HomepageSettings {
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    subtitle: string;
    primaryCtaText: string;
    primaryCtaHref: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
    searchPlaceholder: string;
    badgeText: string;
    heroImageUrl: string;
    heroImageAlt: string;
    featuredProductSlugs: string[];
  };
  trustBar: {
    items: Array<{ number: string; unit: string; label: string; description: string }>;
  };
  featuredGuideSlug: string;
  sections: {
    guides: { title: string; description: string; limit: number };
    deals: { title: string; description: string };
    categories: { title: string; description: string };
  };
  newsletter: {
    enabled: boolean;
    eyebrow: string;
    title: string;
    description: string;
    inputPlaceholder: string;
    buttonText: string;
    disclaimer: string;
  };
}

export interface GlobalSettings {
  siteName: string;
  siteTagline: string;
  header: {
    logoText: string;
    showDealsButton: boolean;
    dealsButtonText: string;
  };
}

export interface AffiliateSettings {
  disclosureShort: string;
  disclosureFull: string;
  disclosureBannerText: string;
  amazonTag: string;
}

export interface FooterSettings {
  description: string;
  copyrightText: string;
  showAffiliateDisclosure: boolean;
}
