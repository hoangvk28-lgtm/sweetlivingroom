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
