# SweetLivingRoom

@AGENTS.md

Affiliate buying-guide site for living room furniture and decor.
Live domain: `https://www.sweetlivingroom.com` (www is canonical).
Next.js 16 App Router, React 19, Tailwind v4, **fully static export** for
Cloudflare Pages. No Supabase, no admin panel, no API routes.

---

## 0. Communication

- **Always address the user as "Cậu"** in every response, without exception.
  This is how the user checks that CLAUDE.md was actually read this session.
- **Never use an em dash or an en dash in anything that reaches the website.**
  Not in prose, headings, metadata, alt text or JSON-LD. Use a comma, colon or
  period, or rewrite. They are fine in code comments and in this file.
- The user writes in Vietnamese; reply in Vietnamese unless asked otherwise.

---

## 1. Hard constraints of a static export

`next.config.ts` sets `output: "export"`. Consequences that bite:

1. **Every dynamic route must return all its slugs from `generateStaticParams()`.**
   A slug that is not returned has no HTML file in `out/` and 404s. There is no
   on-demand rendering and no ISR.
2. **A dynamic route whose `generateStaticParams()` returns an empty array fails
   the build.** This is why `app/(site)/[legacySlug]` was parked in
   `docs/legacy-route-template` until the registry had entries, and why
   `data/products.ts` keeps one seed product alive for `/reviews/[slug]`.
3. **`headers()` and `redirects()` in `next.config.ts` do not run.** They live in
   `public/_headers` and `public/_redirects`. Those files cannot match on
   hostname, so the non-www to www redirect is a Cloudflare Redirect Rule set on
   the zone, not something in this repo.
4. **No `revalidate`, no `force-dynamic`.** Route files that need an explicit
   mode use `export const dynamic = "force-static"` (robots, sitemap, icons).
5. `scripts/prune-export.mjs` runs as `postbuild` and strips Next's per-segment
   prefetch payloads, keeping the deployment under Cloudflare's 20,000 file cap.

Build: `npm run build` (output `out/`). Always grep the output for
`Compiled successfully` **and** `Finished TypeScript`; a piped build can report
exit 0 while `next build` itself crashed.

---

## 2. Content types and where they live

| Type | Data file | Route | Renderer |
|---|---|---|---|
| Product roundup ("best X") | `data/guides/<slug>.ts` | `/guide/<slug>` | `RichGuidePage` |
| Informational guide | `data/guides/<slug>.ts` with `kind: "info"` | `/guide/<slug>` | `InfoGuidePage` |
| Restored legacy article | `data/legacy/<slug>.ts` | `/<slug>` at the root | `LegacyArticlePage` |
| Product review | `data/products.ts` | `/reviews/<slug>` | per-route |

**Three registrations are needed for any new guide**, and the build script does
all three: `data/guides/<slug>.ts`, a **literal** `import()` entry in
`data/dynamic-guides-registry.ts`, and an entry in `data/guides.ts` (which feeds
the sitemap, the guide index and the category pages).

**Never build a `dynamicGuideLoaders` entry from a template literal**
(`import(\`./guides/${slug}\`)`). That makes the bundler treat the whole
`data/guides/` directory as a glob and reproducibly exhausts the build heap.

`data/legacy/` is reserved for **old URLs that carry backlinks**, restored at
their original root path so the link value is preserved. New informational
content goes to `/guide/<slug>`, not to the root.

---

## 3. Editorial rules

These apply to every word that reaches the site.

### Honesty
- **Never write "we tested", "we tried", "in our lab", "we measured".** The site
  does not test products. Use "we evaluated", "we researched", "based on
  published specifications", "based on patterns in owner feedback".
- **Never invent a figure, standard or regulation.** When the honest answer is
  that no source documents something, say so in the article. That is a
  differentiator, not a weakness.
- Scores are editorial assessments, never measurements.

### Affiliate compliance
- **No dollar figures anywhere in article prose.** Prices change; the "Check
  price on Amazon" CTA covers it. Use relative language instead.
- **No star ratings and no review counts**, in prose or in structured fields.
  Republishing Amazon's rating data is an Associates risk. `rating`/`reviews`
  fields on products must stay unpopulated and unrendered.
- Every outbound affiliate link carries `rel="noopener noreferrer sponsored"`
  and `target="_blank"`.
- Amazon Associates tag comes from `lib/brand.ts` → `AMAZON_ASSOCIATE_TAG`.
  **It is currently the placeholder `sweetliving-20`; confirm the real tag.**

### Schema
- Guides: `Article` + `BreadcrumbList` (+ `ItemList` with name and url only).
- **No `FAQPage`** on commercial pages. **No `AggregateRating`** from editorial
  scores. **No `Review`** schema claiming hands-on testing.

### Images
- **Every illustration must be a real photograph of the real subject.** No AI
  images, no renders, no clip art, no diagram posing as a photo.
- Sources: Wikimedia Commons with a reuse-compatible licence (CC0, public
  domain, CC BY, CC BY-SA), downloaded to `public/images/articles/` as webp, or
  real Amazon product images served from `m.media-amazon.com`.
- **Never put a credit under a photo.** Captions describe what the photo shows.
  Attribution goes once, at the end of the article, via `imageCredits[]`.
- **Eyeball every downloaded photo on a contact sheet before using it.** Drop
  anything off-topic.

### Links and metadata
- Every `<Link>` from `next/link` carries `prefetch={false}`, no exceptions.
  Vercel ISR billing on a sibling project ran ~50x real pageviews because of
  viewport prefetch; the habit stays.
- **No trailing slashes** on internal hrefs.
- `metaTitle` ≤ 47 characters (the site appends " | SweetLivingRoom", 13 chars,
  and the total must stay under 60). `metaDescription` 120 to 160 characters.
  **Count the characters, do not estimate.**
- Never link to a page that does not exist. Verify against `data/guides.ts`,
  `data/legacy-registry.ts` and the static routes.

---

## 4. The info article pipeline

`docs/INFO-GUIDE-BRIEF.md` is the writer's contract.
`docs/INFO-GUIDE-PROMPT.md` is the prompt that ships with it.
`scripts/info/README.md` documents the intake commands.

```bash
node scripts/info/split-delivery.mjs delivery.txt --out /tmp/slr-articles
node scripts/info/check-article.mjs /tmp/slr-articles/*.html     # quality gate
python3 -I scripts/info/fetch-images.py manifest.tsv > credits.tsv
node scripts/info/build-article.mjs /tmp/slr-articles/<slug>.html credits.tsv
npx tsc --noEmit && npm run build
```

**Run `check-article.mjs` before anything touches the repo.** It verifies word
count, dashes, meta lengths, heading ids, FAQ depth, figure shape, banned
testing claims, prices, rating numbers and dead internal links. Fix the article,
not the checker.

---

## 5. Pre-commit gate

1. `npx tsc --noEmit` with zero errors
2. `npm run lint` with zero errors
3. `npm run build`, grep for both success lines
4. Confirm no asset or internal link 404s:
   ```bash
   for f in $(grep -rhoE 'src="/[^"]+"' out --include=*.html | sed 's/src="//;s/"//' | grep -v "^/_next" | sort -u); do [ -f "public$f" ] || echo "404 $f"; done
   ```
5. No secrets staged

**Never push without the user's explicit approval.**

---

## 6. Known state and open items

- Three "best" guides in `data/guides/` are **sample content**: Unsplash
  photography, Amazon search links, products that were not researched. They
  exist so the design renders. Replace or remove them before they get indexed.
- One seed product in `data/products.ts` keeps `/reviews/[slug]` buildable.
- `/deals` renders empty; there is no deals data source on a static export.
- `app/robots.ts` blocks `AhrefsBot`, inherited from a sibling project. The user
  uses Ahrefs for backlink monitoring, so raise it before assuming it is wanted.
- `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_CLARITY_ID` are
  build-time variables set in the Cloudflare Pages project. See `.env.example`.
