// ─── Central brand configuration ──────────────────────────────────────────────
export const BRAND_NAME = "SweetLivingRoom";
export const BRAND_TAGLINE = "Living rooms, planned before they're furnished.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.sweetlivingroom.com";

export const SITE_DESCRIPTION =
  "Buying guides for living room furniture, rugs, lighting, storage and media setups. SweetLivingRoom compares size, materials, comfort and real room fit.";

export const CONTACT_EMAIL = "hello@sweetlivingroom.com";
export const SOCIAL_LINKS: { platform: string; url: string }[] = [];

// TODO: confirm the real Associates tag for sweetlivingroom.com before launch.
export const AMAZON_ASSOCIATE_TAG = "sweetlivingroom-20";

export const AUDIENCE_DESCRIPTION =
  "Homeowners, renters and first-time furnishers who want to know how a piece will fit, feel and wear before it arrives.";

export const CONTENT_PILLARS = [
  { label: "Sofas & Seating", slug: "sofas-seating" },
  { label: "Rugs & Flooring", slug: "rugs-flooring" },
  { label: "Lighting", slug: "lighting" },
  { label: "Storage & Media", slug: "storage-media" },
  { label: "Decor & Styling", slug: "decor-styling" },
] as const;

// ─── SweetLivingRoom Room Score methodology ───────────────────────────────────
export const RATING_CRITERIA = [
  { label: "Room Fit and Footprint", weight: 25 },
  { label: "Comfort and Everyday Use", weight: 25 },
  { label: "Materials and Build", weight: 20 },
  { label: "Style Versatility", weight: 15 },
  { label: "Assembly and Upkeep", weight: 10 },
  { label: "Value for Money", weight: 5 },
] as const;

export const DISCLOSURE_SHORT =
  "SweetLivingRoom is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no additional cost to you.";

export const DISCLOSURE_FULL =
  "SweetLivingRoom participates in affiliate programs, including the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click a product link and make a purchase, we may earn a small commission at no additional cost to you. Our recommendations are based on published specifications, manufacturer documentation and patterns in verified buyer feedback. Our editorial opinions are independent and are never influenced by affiliate relationships.";
