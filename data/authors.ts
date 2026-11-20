export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string[];
  avatarUrl?: string;
  coverUrl?: string;
  isPerson?: boolean; // true → Person schema; false/undefined → Organization
  expertise: string[];
  focus: { label: string; value: string }[];
  social: { platform: string; url: string; label: string }[];
  editorial: {
    process: string;
    independence: string;
  };
}

// NOTE: keep every statement here factual. Do not add years of experience,
// certifications, employers or awards unless the user supplies them and they
// are true. Fabricated credentials are an E-E-A-T and FTC risk.
export const authors: Author[] = [
  {
    slug: "elena-hart",
    name: "Elena Hart",
    role: "Lead Home Editor",
    avatarUrl: "/authors/elena-hart.webp",
    coverUrl: "/authors/elena-hart-room.webp",
    isPerson: true,
    bio: "Elena Hart leads SweetLivingRoom's buying guides, turning product dimensions, material specs and owner feedback into clear verdicts on sofas, rugs, lighting, storage and decor.",
    longBio: [
      "Elena Hart is the lead editor behind SweetLivingRoom's buying guides. Her job is to read the parts of a furniture listing most buyers skip: the overall footprint rather than the seat width, the frame material under the upholstery, the pile height of a rug and the lumen figure a lamp buries below its wattage.",
      "Every guide she edits starts from the same question: how will this piece behave in an ordinary room, with a real walkway, real light and real daily use? That means separating seat depth from sofa length, lumens from watts and pile height from pile weight, then explaining the difference in plain language.",
      "Elena focuses on the ownership side of a purchase as much as the first week: how a fabric cleans, how a frame ages at the front rail, how long a new wool rug sheds, and what a piece needs to clear on the way up the stairs. When a listing omits a figure that decides the buy, her guides say so instead of guessing.",
    ],
    expertise: [
      "Sofas, sectionals and seating",
      "Area rugs and floor coverings",
      "Residential lighting",
      "Media furniture and storage",
      "Window treatments and soft furnishings",
      "Small-space layout planning",
    ],
    focus: [
      { label: "Role", value: "Lead Home Editor" },
      { label: "Covers", value: "Seating, rugs, lighting, storage and decor" },
      { label: "Method", value: "Dimensions, material specs, owner feedback patterns" },
      { label: "Standard", value: "Measured fit over styled photography" },
    ],
    social: [],
    editorial: {
      process:
        "Each guide compares current pieces side by side on published dimensions, materials and documentation, then maps each one to the rooms and households it suits. Claims a listing cannot support are flagged in the copy rather than repeated.",
      independence:
        "Rankings are never sold. SweetLivingRoom earns affiliate commissions through Amazon links, and commission rates play no part in which piece is recommended or how it is ranked.",
    },
  },
];

export const DEFAULT_AUTHOR_SLUG = "elena-hart";

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((a) => a.name.toLowerCase() === name.toLowerCase());
}

export function getDefaultAuthor(): Author {
  return authors.find((a) => a.slug === DEFAULT_AUTHOR_SLUG)!;
}

export function authorToSlug(name: string): string {
  const match = getAuthorByName(name);
  if (match) return match.slug;
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
