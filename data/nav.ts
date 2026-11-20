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
  explainers: [
    { label: "Why is it called a husband pillow?", href: "/why-is-it-called-a-husband-pillow" },
    { label: "How to make a bath pillow", href: "/how-to-make-a-bath-pillow" },
    { label: "Tailbone pain while sleeping", href: "/how-to-relieve-tailbone-pain-while-sleeping" },
    { label: "What a 3 year old should know", href: "/what-should-a-3-year-old-know-educationally" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ],
};
