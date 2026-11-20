// ─── Types ───────────────────────────────────────────────────────────────────

export interface ProductScore {
  overall: number;       // 1-10  weighted aggregate
  smallSpaceFit: number; // how well it works in a tight/dorm space
  buildQuality: number;  // materials, finish, sturdiness
  easeOfUse: number;     // setup time, daily usability
  valueForMoney: number; // price vs. performance vs. competition
  buyerFeedback: number; // derived from verified Amazon review patterns
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  subcategorySlug: string;
  image: string;
  amazonUrl: string;
  priceRange: string;   // display string, e.g. "$25-$30"
  badge?: string;       // single primary editorial badge
  shortDescription: string;
  bestFor: string[];
  notIdealFor: string[];
  specs: Record<string, string>;
  pros: string[];
  cons: string[];
  scores: ProductScore;
  reviewSummary: string;
  alternatives: string[];      // sibling product IDs
  relatedGuideSlugs: string[]; // guides that feature this product
  // Product Library fields (Phase 2)
  asin?: string;           // Amazon ASIN (auto-builds amazonUrl if set)
  priceLabel?: "Budget" | "Mid-range" | "Premium" | "Check Amazon";
  useCase?: string;        // one-line use-case summary for editors
  sourceNotes?: string;    // internal verification notes, not rendered publicly
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// Empty for a fresh site. Most guides on this pipeline (data/guides/<slug>.ts +
// scripts/generate-guide-page.mjs) carry their own products[] inline and don't
// need entries here — this file is the legacy static fallback array, kept only
// for guides built via the older Supabase-backed component pipeline.

export const products: Product[] = [
  {
    id: "compact-reversible-chaise-sectional",
    name: "Compact Reversible-Chaise Sectional (78 in)",
    slug: "compact-reversible-chaise-sectional",
    categorySlug: "sofas-seating",
    subcategorySlug: "",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
    amazonUrl: "https://www.amazon.com/s?k=small+sectional+sofa+reversible+chaise&tag=sweetliving-20",
    priceRange: "Mid-range",
    priceLabel: "Mid-range",
    badge: "Top Pick",
    shortDescription:
      "A 78 inch sectional with a reversible chaise and a kiln-dried hardwood frame, sized for living rooms under 12 feet across.",
    bestFor: [
      "Rooms under 12 feet wide",
      "Renters who may flip the chaise side",
      "Upright, conversation-first seating",
    ],
    notIdealFor: ["Lounging with your legs up", "Households that want washable covers"],
    specs: {
      "Overall width": "78 in",
      "Seat depth": "22 in",
      Chaise: "Reversible, either side",
      Frame: "Kiln-dried hardwood",
      Suspension: "Sinuous springs",
    },
    pros: [
      "Shortest frame that still seats three",
      "Chaise reverses without a mirrored order",
      "Hardwood frame rather than plywood",
    ],
    cons: ["22 in seat is upright, not a lounging depth", "Back cushions are attached, so no flipping"],
    scores: {
      overall: 8.6,
      smallSpaceFit: 9.2,
      buildQuality: 8.5,
      easeOfUse: 8.4,
      valueForMoney: 8.3,
      buyerFeedback: 8.5,
    },
    reviewSummary:
      "The small-room default: a 78 inch footprint that still seats three, on a hardwood frame that holds its front edge. The 22 inch seat trades lounging depth for the walkway it gives back, which is the right trade in a room under 12 feet across.",
    alternatives: [],
    relatedGuideSlugs: ["best-sectional-sofas-for-small-living-rooms"],
    useCase: "Primary seating in a small or rented living room.",
  },
];
