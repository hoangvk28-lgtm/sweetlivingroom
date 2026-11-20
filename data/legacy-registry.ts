// Restored root-level article URLs (old sweetlivingroom.com paths that still
// carry backlinks). They live at the original path, e.g. /how-to-make-a-bath-pillow,
// NOT under /guide/, so the backlink value is preserved.
// Literal imports only, never a template-literal expression (see CLAUDE.md).
export const legacyLoaders: Record<string, () => Promise<Record<string, unknown>>> = {
  "what-should-a-3-year-old-know-educationally": () => import("./legacy/what-should-a-3-year-old-know-educationally"),
  "how-to-make-a-bath-pillow": () => import("./legacy/how-to-make-a-bath-pillow"),
  "why-is-it-called-a-husband-pillow": () => import("./legacy/why-is-it-called-a-husband-pillow"),
  "how-to-relieve-tailbone-pain-while-sleeping": () => import("./legacy/how-to-relieve-tailbone-pain-while-sleeping"),
};

export const legacySlugs = Object.keys(legacyLoaders);
