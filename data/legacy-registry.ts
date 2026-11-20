// Restored root-level article URLs (old paths that still carry backlinks).
// Literal imports only, never a template-literal expression (see CLAUDE.md).
export const legacyLoaders: Record<string, () => Promise<Record<string, unknown>>> = {
};

export const legacySlugs = Object.keys(legacyLoaders);
