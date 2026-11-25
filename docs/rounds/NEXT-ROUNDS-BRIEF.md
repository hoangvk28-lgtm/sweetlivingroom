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

## RESUME 2026-11-25 (round 7, 59 best guides) - built and committed locally, NOT pushed

- Rounds 1 to 6 published through 2d0520e. Round 7 is committed locally only.
- Theme (user instruction): competitive niche long-tails plus price-intent keywords.
  18 `-under-N` budget guides and 41 qualifier niches (materials, styles, sizes).
  User explicitly chose numeric caps in slug and title over "budget/cheap" wording;
  `selfcheck.mjs` already allowed exactly the slug's cap and nothing else, so there is
  no conflict with CLAUDE.md section 3.
- Topics: `scripts/clone/list-r7.tsv` / `.txt` (60). Stage A DONE for all, do not rerun.
- Dropped before writing after eyeballing lineups: best-camelback-sofas (1 to 2 real
  camelback items, the rest sleepers and house paint), best-apartment-size-sofas
  (generic small sectionals, overlaps the published small-space guides). Both `skip`.
  Replaced by best-fluted-coffee-tables and best-arched-bookshelves, both clean.
- Near-dup check dropped best-curtain-liners (only 2 items in Stage A) and
  best-furniture-sliders (already a `skip` row); replaced by best-stain-resistant-rugs
  and best-low-profile-tv-stands.
- Writer: ONE Sonnet agent over all 60 in a continuous run, about 937k agent tokens.
- Skipped by the writer: best-led-light-bars (keyword resolves to truck light bars),
  reason in `scripts/clone/work/skips-r7.txt`, row set to `skip`.
- Two coordinator fix rounds sent back to the same agent (cheap, it kept its context):
  10 specs failed `audit-guides.mjs` on "intro has spec numbers" (the audit allows at
  most ONE spec figure in introParagraphs; selfcheck does not check this, so writers
  keep hitting it). Worth adding to the brief. Also de-overlapped
  best-accent-chairs-under-200, which shared 3 of 5 picks with best-accent-chairs.
- Gates all green: 59/59 `finish.mjs` ok/built/audit ok, `lineup-overlap.mjs` shows no
  round-7 pair at or above 0.5, `npx tsc --noEmit` 0 errors, `npm run lint` 0 errors
  (4 pre-existing warnings), `npx next build` Compiled successfully + Finished
  TypeScript, 571 static pages, 1617 files in out/, asset 404 check clean, no dashes,
  no brackets, and the only dollar figures in round-7 guides are the slugs' own caps.
- Registry, files and data/guides.ts all agree: 532 guides.
- Remaining: push on the user's explicit approval only.

## RESUME 2026-11-25 (round 8, 20 of 60 done) - committed locally, NOT pushed

Round 7 (59 guides) is pushed as 4e9712c and pinged to IndexNow. Round 8 was cut to
20 guides because the session neared its limit; the user will run the remaining 40 on
a new account.

### Done (20, lines 1 to 20 of scripts/clone/list-r8-A.txt)
best-sectionals-under-500, best-loveseats-under-300, best-accent-chairs-under-100,
best-ottomans-under-100, best-side-tables-under-100, best-coffee-tables-under-100,
best-tv-stands-under-100, best-area-rugs-under-50, best-curtains-under-100,
best-wall-art-under-50, best-floor-lamps-under-50, best-soundbars-under-100,
best-projectors-under-500, best-tvs-under-500, best-massage-chairs-under-1000,
best-electric-fireplaces-under-300, best-low-profile-sofas,
best-english-roll-arm-sofas (only 4 products, all that exist on topic),
best-down-filled-sofas, best-sofas-with-storage.
All registered in both registries (552 guides). Gates green: audit ok on all 20,
tsc 0 errors, lint 0 errors (4 pre-existing warnings), build Compiled successfully +
Finished TypeScript, 1657 files in out/, asset 404 check clean, no dashes, no brackets,
only the slugs' own caps as dollar figures, lineup-overlap has no round-8 pair at 0.5.

### Remaining (40) - STAGE A IS ALREADY DONE, DO NOT RERUN IT
`scripts/clone/list-r8-B.txt` holds all 40 in order. Every one has a
`scripts/clone/work/<slug>.compact.json`. The `source-index.json` rows are already
`inprogress`. Running Stage A again would waste Amazon API calls and change nothing.

Unfinished slugs:
  for s in $(cat scripts/clone/list-r8-B.txt); do [ -f data/guides/$s.ts ] || echo $s; done

### Findings from round 8 worth carrying forward

1. **A cap number that doubles as a spec number poisons Stage A.** Dropped before
   writing: best-recliners-under-1000 (Amazon returned 1000 lb lazy susans and 1000 N
   actuators, 4 items, no chairs) and best-bookshelves-under-200 ("200 lbs per shelf"
   kits, 3 items under cap, plus a book). Check a cap against common load ratings
   before adding it. best-hooked-rugs was dropped too: all 2x3 accent mats.
   Replacements with clean lineups: best-faux-fur-throw-blankets, best-velvet-ottomans,
   best-rotating-bookshelves (all three are in list-r8-B.txt).
2. **One WebSearch per cluster instead of per slug cost nothing in quality.** The
   writer did ZERO new searches for these 20, reusing docs/research/serp-*.md from
   rounds 3 to 7, and every guide passed audit. Round 7 spent 60 searches on this.
   Cost: round 7 about 16k agent tokens per guide, round 8 about 16k with no searches.
3. **Put the intro rule in the writer prompt.** Round 7 lost 10 coordinator fix cycles
   to `audit-guides.mjs` rejecting intros with more than one spec figure, a model code
   or a brand name; `selfcheck.mjs` does not check this. Round 8's prompt stated the
   rule and had zero intro failures. Better still: add the check to selfcheck.mjs.
4. **Having the writer run `finish.mjs` itself, not just selfcheck**, removed the
   coordinator's rework loop entirely.
