# Info article pipeline

Four scripts, zero AI tokens. The writer's contract is `docs/INFO-GUIDE-BRIEF.md`.

```bash
# 1. one pasted delivery  ->  individual .html files
node scripts/info/split-delivery.mjs delivery.txt --out /tmp/slr-articles

# 2. quality gate, run before anything else touches the repo
node scripts/info/check-article.mjs /tmp/slr-articles/*.html

# 3. download the photos named in an image manifest
#    manifest row: filename.webp <TAB> commonsFilePageUrl <TAB> author <TAB> license
python3 -I scripts/info/fetch-images.py manifest.tsv > credits.tsv

# 4. build + register each article
node scripts/info/build-article.mjs /tmp/slr-articles/<slug>.html credits.tsv

# 5. verify
npx tsc --noEmit && npm run build
```

`build-article.mjs` writes `data/guides/<slug>.ts` as an `InfoGuideModule`, adds
the literal import to `data/dynamic-guides-registry.ts` and appends the entry to
`data/guides.ts`, so the page resolves at `/guide/<slug>` and appears in the
sitemap, the guide index and its category page.

Under `output: "export"` every slug must be returned by `generateStaticParams()`.
Registering is what puts it there, so an article that is built but not registered
simply has no HTML file in `out/`.
