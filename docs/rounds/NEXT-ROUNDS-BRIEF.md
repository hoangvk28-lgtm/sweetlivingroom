# Next rounds brief

## RESUME 2026-11-21 (round 4, 58 best guides)

- Round 3 (100 best guides) published in 9255fe0.
- Round 4 topics: `scripts/clone/list-r4.tsv` (60 picked, near-dup checked). Stage A done (`.compact.json` exist, do NOT rerun). Dropped before writing: best-decorative-throw-pillows (lineup is pillow inserts), best-memory-foam-rugs (overlaps washable rugs); both `skip` in source-index.
- Writers (Sonnet, background): A = `scripts/clone/list-r4-A.txt` (29), B = `scripts/clone/list-r4-B.txt` (29). Skips in `scripts/clone/work/skips-r4-{A,B}.txt`.
- Unfinished slugs:
  `for s in $(cat scripts/clone/list-r4.txt); do [ -f data/guides/$s.ts ] || echo $s; done`
- Remaining: relaunch writers on unfinished slugs if needed; register (`node scripts/register-dynamic-guide.mjs <slugs>` + `node scripts/register-new-guides.mjs <slugs>`); lineup overlap check; tsc, lint, build, dash/price grep, 404 check; report; push on approval.


## DONE 2026-11-21 (round 3, 100 best guides)

- Round 2 (40 best guides) published in cce8890.
- Round 3 topics: `scripts/clone/list-r3.txt` (100 slugs, near-dup checked against data/guides.ts, info topics and earlier skips). Stage A done (`.compact.json` exist, do NOT rerun Stage A).
- Writers (Sonnet, background): A = `scripts/clone/list-r3-A.txt` (48, sofas/rugs/lighting), B = `scripts/clone/list-r3-B.txt` (52, storage/media/decor). Skips logged in `scripts/clone/work/skips-r3-{A,B}.txt`.
- Brief now has step 3b: per-slug competitor scan (1 WebSearch, snippets only) into `docs/research/serp-<cluster>.md`.
- Unfinished slugs:
  `for s in $(cat scripts/clone/list-r3.txt); do [ -f data/guides/$s.ts ] || echo $s; done`
- Remaining coordinator steps: relaunch writers on unfinished slugs if a session died; register (`node scripts/register-dynamic-guide.mjs <slugs>` + `node scripts/register-new-guides.mjs <slugs>`); lineup overlap check; tsc, lint, build, dash/price grep, 404 check; report to user; push only on approval.

## RESUME 2026-11-23 (round 5, 61 best guides)

- Round 4 (58 best guides) published in 48338da. Round 5 is NOT yet committed or pushed.
- Round 5 topics: `scripts/clone/list-r5.tsv` (62 picked). `source-index.json` had no `todo`
  rows left, so the 62 were appended as new rows. Stage A is DONE for all of them
  (`.compact.json` exist, do NOT rerun Stage A).
- Near-dup check: new `node scripts/clone/neardup.mjs <list.tsv>` implements section 4c
  (strip `best-`, singularise, drop stop words, sort, plus token overlap) against
  `data/guides.ts`, `docs/info-topics.tsv` and every `source-index.json` row including
  `skip`. 8 candidates were dropped before Stage A: best-sofa-slipcovers,
  best-bean-bag-chairs, best-rug-grippers, best-throw-pillow-covers and best-cord-covers
  collided with earlier `skip` rows; best-tufted-rugs duplicated best-hand-tufted-rugs;
  best-shoe-storage-benches is entryway furniture; best-replacement-sofa-cushions is in
  the replacement-part family that was already skipped.
- Writers (Sonnet, background): A = `scripts/clone/list-r5-A.txt` (32, all audit ok),
  B = `scripts/clone/list-r5-B.txt` (30, 29 audit ok). Cost was about 17.5k tokens per
  guide for both writers.
- Skipped: best-bluetooth-transmitters-for-tv, only 2 distinct on-topic products after
  the one allowed extra search (`scripts/clone/work/skips-r5-B.txt`).
- All 61 built guides are registered in both `data/dynamic-guides-registry.ts` and
  `data/guides.ts` (443 guides, registry and files and guides.ts all agree).
- Gates run: `npx tsc --noEmit` 0 errors (after removing a stray empty string in the
  `howToChoose` cards of best-coasters.ts), `npm run lint` 0 errors and 4 warnings,
  no dashes, no `$` figures, no bracket ad copy in `data/guides/`. `npm run build` was
  started at handoff; confirm `Compiled successfully` and `Finished TypeScript` before
  pushing.
- Unfinished slugs:
  `for s in $(cat scripts/clone/list-r5.txt); do [ -f data/guides/$s.ts ] || echo $s; done`
- Remaining: confirm the build, run the 404 check from CLAUDE.md section 5, report, push
  on approval.

### Demo slugs sourced but not written

`scripts/clone/list-r5-demo.txt` holds 5 audience-qualifier slugs with Stage A done.
Only `best-sofas-for-cat-owners` was written (by the coordinator, as a cost experiment)
and it is registered and audit ok. The other four have `.compact.json` and no spec:
best-rugs-for-dog-owners, best-recliners-for-tall-people, best-rugs-for-high-traffic-areas,
best-accent-chairs-for-small-spaces.

### Findings worth carrying forward

1. **Audience-qualifier keywords source badly.** Stage A on "sofa for cat owners" returned
   cat couches and dog beds, because Amazon reads the audience word as the product. Give
   these slugs product-type queries (`boucle sofa 3 seater`, `top grain leather sofa`) via
   `scripts/clone/search.mjs` before writing. `junk.mjs` now has a PET_FURNITURE phrase
   list for this; it flags none of the 1,719 published product names.
2. **`junk.mjs` had a bare `/\bfilament\b/`** for 3D printing stock, which silently
   dropped real Edison filament bulbs. Now tied to the printing materials.
3. **`scripts/register-new-guides.mjs` could not run**: it imported `data/guides/<slug>.ts`
   directly, which needs a TypeScript loader this repo's Node does not have. It now parses
   the generated file instead. Its hardcoded author was also changed to Elena Hart.
4. **`author: "James Miller"` on 238 rows of `data/guides.ts` is dead data**, not a live
   bug. There is no such entry in `data/authors.ts`, but a full build was checked and the
   string appears on zero pages: all 449 built guides link to `/author/elena-hart`, so the
   rendered byline does not come from that field. Worth tidying for consistency, nothing
   more. `scripts/register-new-guides.mjs` now writes Elena Hart so new rows stay clean.
5. **Writing a guide at the coordinator instead of a Sonnet writer cost roughly twice the
   tokens at a much higher per-token price**, almost all of it spent converging on the
   3,000 to 3,800 word window. Writers aim just over the floor (3,001 to 3,094) and land
   first time; the coordinator aimed near 3,800 and needed nine `finish.mjs` runs.
   Keep the writer-agent split.
