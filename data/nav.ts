export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNav: NavItem[] = [
  { label: "Sofas & Seating", href: "/categories/sofas-seating" },
  { label: "Rugs & Flooring", href: "/categories/rugs-flooring" },
  { label: "Lighting", href: "/categories/lighting" },
  { label: "Storage & Media", href: "/categories/storage-media" },
  { label: "Decor & Styling", href: "/categories/decor-styling" },
  { label: "How We Rate", href: "/how-we-review" },
];

export const footerNav = {
  categories: [
    { label: "Sofas & Seating", href: "/categories/sofas-seating" },
    { label: "Rugs & Flooring", href: "/categories/rugs-flooring" },
    { label: "Lighting", href: "/categories/lighting" },
    { label: "Storage & Media", href: "/categories/storage-media" },
    { label: "Decor & Styling", href: "/categories/decor-styling" },
  ],
  company: [
    { label: "How We Rate", href: "/how-we-review" },
    { label: "About", href: "/about-us" },
    { label: "Compare Rooms", href: "/compare" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ],
};
