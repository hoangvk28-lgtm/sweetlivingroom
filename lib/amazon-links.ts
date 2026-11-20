const TAG = "sweetliving-20";

export const amazonSearchLinks: Record<string, string> = {
  "sofas-seating": `https://www.amazon.com/s?k=living+room+sofa+couch&tag=${TAG}`,
  "rugs-flooring": `https://www.amazon.com/s?k=living+room+area+rug&tag=${TAG}`,
  "lighting": `https://www.amazon.com/s?k=living+room+floor+lamp&tag=${TAG}`,
  "storage-media": `https://www.amazon.com/s?k=tv+stand+media+console&tag=${TAG}`,
  "decor-styling": `https://www.amazon.com/s?k=living+room+decor+throw+pillows&tag=${TAG}`,
};

export const heroChipLinks = [
  { label: "Sofas & Seating", href: amazonSearchLinks["sofas-seating"] },
  { label: "Rugs & Flooring", href: amazonSearchLinks["rugs-flooring"] },
  { label: "Lighting", href: amazonSearchLinks["lighting"] },
  { label: "Storage & Media", href: amazonSearchLinks["storage-media"] },
];
