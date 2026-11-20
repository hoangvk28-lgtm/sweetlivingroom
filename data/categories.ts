export interface Category {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    slug: "sofas-seating",
    name: "Sofas & Seating",
    description:
      "Sofas, sectionals, loveseats, recliners and accent chairs, compared on footprint, seat depth, cushion fill and frame construction, so the piece you order fits the room and still feels right after a year of use.",
    shortDescription: "Sofas, sectionals, recliners and accent chairs.",
    icon: "Sofa",
    color: "#B98A5E",
    subcategories: [],
  },
  {
    slug: "rugs-flooring",
    name: "Rugs & Flooring",
    description:
      "Area rugs, runners and rug pads, sized against real seating layouts and judged on pile height, fiber type, shedding and how each one handles pets, sunlight and heavy foot traffic.",
    shortDescription: "Area rugs, runners, pads and floor coverings.",
    icon: "Rug",
    color: "#7C9A80",
    subcategories: [],
  },
  {
    slug: "lighting",
    name: "Lighting",
    description:
      "Floor lamps, table lamps, ceiling fixtures and smart bulbs, explained through lumens, color temperature and beam spread, so a room reads warm in the evening without turning dim and flat.",
    shortDescription: "Floor lamps, table lamps, ceilings and smart bulbs.",
    icon: "Lamp",
    color: "#D2A24C",
    subcategories: [],
  },
  {
    slug: "storage-media",
    name: "Storage & Media",
    description:
      "TV stands, media consoles, bookshelves, coffee tables and baskets, measured on load rating, cable management, depth against a wall and how much clutter each one genuinely hides.",
    shortDescription: "TV stands, shelving, coffee tables and storage.",
    icon: "Shelf",
    color: "#6B7B8C",
    subcategories: [],
  },
  {
    slug: "decor-styling",
    name: "Decor & Styling",
    description:
      "Curtains, throw pillows, blankets, wall art and mirrors, the finishing layer that decides whether a room looks furnished or styled, compared on fabric weight, sizing and color behavior.",
    shortDescription: "Curtains, pillows, throws, art and mirrors.",
    icon: "Decor",
    color: "#B98A5E",
    subcategories: [],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
