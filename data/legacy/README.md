# Legacy root-level articles

Empty on a new domain. If SweetLivingRoom ever takes over old URLs that carry
backlinks, restore them here:

1. Add `data/legacy/<slug>.ts` (shape: see `components/guide/LegacyArticlePage.tsx`).
2. Register it in `data/legacy-registry.ts` with a literal `import("./legacy/<slug>")`.
3. Move `docs/legacy-route-template` back to `app/(site)/[legacySlug]`.

The route is parked outside `app/` because `output: "export"` rejects a dynamic
route whose `generateStaticParams()` returns an empty list.
