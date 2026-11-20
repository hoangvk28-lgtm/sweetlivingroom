import type {
  HomepageSettings,
  GlobalSettings,
  AffiliateSettings,
  FooterSettings,
} from "@/lib/site-types";

// ── Defaults: the live site copy. Static site, so these are the only values. ──

export const DEFAULT_HOMEPAGE_SETTINGS: HomepageSettings = {
  hero: {
    eyebrow: "LIVING ROOM BUYING GUIDES",
    headline: "Make the room you live in feel right.",
    headlineAccent: "",
    subtitle:
      "We compare sofas, rugs, lighting, storage and screens on size, materials and real room fit, so the piece you order actually works in your space.",
    primaryCtaText: "Browse Buying Guides",
    primaryCtaHref: "/categories",
    secondaryCtaText: "How We Rate",
    secondaryCtaHref: "/how-we-review",
    searchPlaceholder: "Search sofas, rugs, floor lamps, TV stands…",
    badgeText: "Independent editorial picks, not sponsored or paid placement.",
    heroImageUrl: "",
    heroImageAlt: "",
    featuredProductSlugs: [],
  },
  trustBar: {
    items: [
      { number: "Room Fit", unit: "25%", label: "Measured against real floor plans", description: "Footprint, clearance and how a piece sits in a small or open-plan room." },
      { number: "Comfort", unit: "25%", label: "Seat depth, support and feel", description: "Cushion fill, seat height and how the piece holds up to daily lounging." },
      { number: "Materials", unit: "20%", label: "Fabric, frame and finish", description: "Upholstery weave, hardwood versus engineered frames and cleanability." },
      { number: "Style & Value", unit: "30%", label: "Looks, assembly and price", description: "How easily it blends with existing decor, plus setup effort and cost over years." },
    ],
  },
  featuredGuideSlug: "",
  sections: {
    guides: {
      title: "Latest living room buying guides",
      description: "Room-by-room comparisons of size, materials, comfort and finish.",
      limit: 6,
    },
    deals: {
      title: "Budget-Friendly Picks",
      description: "Well-priced living room pieces worth a look, curated by value score.",
    },
    categories: {
      title: "Start with a part of the room",
      description: "Seating, rugs and flooring, lighting, storage and media, plus finishing decor.",
    },
  },
  newsletter: {
    enabled: true,
    eyebrow: "Stay Updated",
    title: "Get new living room guides in your inbox.",
    description:
      "New guides, refreshed picks and practical styling advice. No spam, no sponsored content, no fluff.",
    inputPlaceholder: "you@example.com",
    buttonText: "Notify me",
    disclaimer: "No account required. Unsubscribe anytime. We'll never share your email.",
  },
};

export const DEFAULT_GLOBAL_SETTINGS: GlobalSettings = {
  siteName: "SweetLivingRoom",
  siteTagline: "Living rooms, planned before they're furnished.",
  header: {
    logoText: "SweetLivingRoom",
    showDealsButton: true,
    dealsButtonText: "Today's Deals",
  },
};

export const DEFAULT_AFFILIATE_SETTINGS: AffiliateSettings = {
  disclosureShort:
    "SweetLivingRoom is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no additional cost to you.",
  disclosureFull:
    "SweetLivingRoom participates in affiliate programs, including the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click a product link and make a purchase, we may earn a small commission at no additional cost to you. Our recommendations are based on published specifications, manufacturer documentation, and patterns in verified buyer feedback, our editorial opinions are independent and are never influenced by affiliate relationships.",
  disclosureBannerText:
    "We may earn a commission when you buy through Amazon links. Our recommendations are based on published specs, manufacturer documentation, and clear comparison criteria.",
  amazonTag: "sweetlivingroom-20",
};

export const DEFAULT_FOOTER_SETTINGS: FooterSettings = {
  description:
    "Independent buying guides for living room furniture, rugs, lighting, storage and media setups. No sponsored rankings.",
  copyrightText: "SweetLivingRoom. All rights reserved.",
  showAffiliateDisclosure: true,
};

// ── Public helpers ────────────────────────────────────────────────────────────

export async function getPublicHomepageSettings(): Promise<HomepageSettings> {
  return DEFAULT_HOMEPAGE_SETTINGS;
}

export async function getPublicGlobalSettings(): Promise<GlobalSettings> {
  return DEFAULT_GLOBAL_SETTINGS;
}

export async function getPublicAffiliateSettings(): Promise<AffiliateSettings> {
  return DEFAULT_AFFILIATE_SETTINGS;
}

export async function getPublicFooterSettings(): Promise<FooterSettings> {
  return DEFAULT_FOOTER_SETTINGS;
}
