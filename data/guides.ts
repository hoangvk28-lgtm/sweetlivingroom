// ─── Types ───────────────────────────────────────────────────────────────────

export interface GuideSection {
  heading: string;
  body: string;
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideBuyingCriterion {
  criterion: string;
  content: string; // use \n to separate bullet points within a cell
}

export interface Guide {
  title: string;
  slug: string;
  categorySlug: string;
  subcategorySlug: string;
  description: string;
  mainKeyword: string;
  subKeywords: string[];
  heroImage: string;
  thumbnailImage?: string;
  lastUpdated: string;
  author: string;
  readTime: string;
  recommendedProductIds: string[];
  sections: GuideSection[];
  faq: GuideFaq[];
  relatedGuideSlugs: string[];
  buyingCriteria?: GuideBuyingCriterion[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// New guides are appended here by scripts/register-new-guides.mjs (see the
// generate-guide-page.mjs + data/guides/<slug>.ts pipeline documented in
// CLAUDE.md). This array starts empty for a fresh site.

export const guides: Guide[] = [
  {
    title: "Best Sectional Sofas for Small Living Rooms (2026)",
    slug: "best-sectional-sofas-for-small-living-rooms",
    categorySlug: "sofas-seating",
    subcategorySlug: "",
    description: "Five sectionals sized for small living rooms, compared on overall footprint, seat depth, chaise reversibility and how much walking clearance each one leaves.",
    mainKeyword: "sectional sofa for small living room",
    subKeywords: ["sectional sofa for small living room", "best sectional sofa for small living room"],
    heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    lastUpdated: "2026-11-20",
    author: "Elena Hart",
    readTime: "12 min",
    recommendedProductIds: [],
    sections: [],
    faq: [],
    relatedGuideSlugs: [],
    buyingCriteria: [],
  },
  {
    title: "Best Area Rugs for Living Rooms (2026)",
    slug: "best-area-rugs-for-living-rooms",
    categorySlug: "rugs-flooring",
    subcategorySlug: "",
    description: "Four living room area rugs compared on pile height, fiber type, shedding and how each size works with a standard sofa-and-chair seating layout.",
    mainKeyword: "living room area rug",
    subKeywords: ["living room area rug", "best living room area rug"],
    heroImage: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=1200&q=80",
    lastUpdated: "2026-11-20",
    author: "Elena Hart",
    readTime: "10 min",
    recommendedProductIds: [],
    sections: [],
    faq: [],
    relatedGuideSlugs: [],
    buyingCriteria: [],
  },
  {
    title: "Best Floor Lamps for Living Rooms (2026)",
    slug: "best-floor-lamps-for-living-rooms",
    categorySlug: "lighting",
    subcategorySlug: "",
    description: "Four living room floor lamps compared on lumen output, color temperature, beam direction and base footprint, so the room reads warm instead of flat after dark.",
    mainKeyword: "living room floor lamp",
    subKeywords: ["living room floor lamp", "best living room floor lamp"],
    heroImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80",
    lastUpdated: "2026-11-20",
    author: "Elena Hart",
    readTime: "10 min",
    recommendedProductIds: [],
    sections: [],
    faq: [],
    relatedGuideSlugs: [],
    buyingCriteria: [],
  },
];
