# SweetLivingRoom

Affiliate buying-guide site for living room furniture and decor
(sweetlivingroom.com). Next.js 16 App Router, Tailwind v4, **fully static
export** for Cloudflare Pages.

The UI structure is ported from the MachineFanatic template and re-themed:
warm cream background, forest-green brand, terracotta CTA, brass accent,
Fraunces display serif over Inter body.

## Commands

```bash
npm install
npm run dev     # local dev at http://localhost:3000
npm run build   # next build -> static site in out/ (+ prune-export postbuild)
npx tsc --noEmit
```

## Cloudflare Pages

Create a Pages project pointing at this repo and set:

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20 or newer |
| `NEXT_PUBLIC_SITE_URL` | `https://www.sweetlivingroom.com` |
| `NEXT_PUBLIC_GA_ID` | GA4 id, optional |
| `NEXT_PUBLIC_CLARITY_ID` | Clarity project id, optional |

See `.env.example`. All three are build-time variables, so changing one needs a
redeploy, not just a settings save.

Set the non-www to www redirect as a Cloudflare **Redirect Rule** on the zone.
`public/_redirects` cannot match on hostname, so it cannot do that one.

`public/_headers` and `public/_redirects` carry the security headers and the
301s, because `next.config.ts` `headers()`/`redirects()` do not run on a
static export. `scripts/prune-export.mjs` strips Next's per-segment prefetch
payloads after the build so the deployment stays under Cloudflare's 20,000
file cap.

## Content pipeline

- `data/guides/<slug>.ts` holds a guide's full content (`products`,
  `buyingCriteria`, `howWeEvaluated`, `howToChoose`, `faq`).
- Register it in `data/dynamic-guides-registry.ts` (literal `import()` only)
  and in `data/guides.ts`, which feeds the sitemap, category pages and the
  `/guide` index.
- `components/guide/RichGuidePage.tsx` renders it. Never hand-write a guide's
  JSX.
- Under `output: "export"` every slug must be returned by
  `generateStaticParams()`, or the page simply does not exist in `out/`.

Three sample guides ship with the repo so the design can be reviewed; they
are placeholder content with Unsplash photography and Amazon **search** links,
not researched product picks.

## Not included

No admin panel, no Supabase, no API routes: a static export cannot serve them.
Content lives in `data/`. The legacy root-URL route is parked in
`docs/legacy-route-template` (see `data/legacy/README.md`).
