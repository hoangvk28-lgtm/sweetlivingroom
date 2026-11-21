# Info round 2 (60 articles, started 2026-11-21)

Rules = `docs/INFO-ROUND-OVERRIDE.md` (read it after sections 1 to 5 of
`docs/INFO-GUIDE-BRIEF.md`), with these changes:

- Your list: `docs/rounds/info-round2-<A|B>.tsv` (slug, category, writer, angle).
  The angle column is the brief for that article. Write in file order. Skip a slug
  whose `scripts/info/work/<slug>.html` already passes the checker (resume).
- Length: 2,300 to 2,500 body words, unchanged.
- Internal links, 3 to 6 per article: prefer the 80 **already published** info
  guides (first 80 rows of `docs/info-topics.tsv`) and the existing best guides in
  `data/guides.ts` (e.g. `/guide/best-rug-pads`) when on topic. At most 2 links to
  round-2 siblings. `related:` 2 to 4 entries, at least 2 of them published.
- Reuse `docs/research/<cluster>.md`; at most ~1 WebSearch per article.
- Images: one contact sheet per article (`scripts/info/work/sheet-<A|B>.jpg`),
  hero + at least 2 figures, filenames prefixed by a short slug word, manifest
  lines appended to `scripts/info/work/manifest-r2-<A|B>.tsv`. Do not download.
- Never register, build, commit or push. Touch only `scripts/info/work/`.
