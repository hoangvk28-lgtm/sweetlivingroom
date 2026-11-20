# 80-article info round: overrides to INFO-GUIDE-BRIEF.md

Read `docs/INFO-GUIDE-BRIEF.md` once (sections 1 to 5 apply in full), then this file.
Where they differ, this file wins.

## Scope and length
- Topics: `docs/info-topics.tsv` (slug, category, writer A/B, angle). Write only your
  letter's rows, in file order. "See brief topic #N" means the angle in brief section 6.
- **Body 2,300 to 2,500 words** (checker fails below 2,250). 7 to 10 h2 sections,
  FAQ with 5 h3 questions, bottom-line. Same depth bar: numbers with units, tradeoffs,
  mechanisms, two non-obvious failures per article. Cut repetition, not substance.
- No delivery file: write each article straight to `scripts/info/work/<slug>.html`
  (meta block + body, exact format of brief section 3), in ONE Write call.

## Internal links
- Allowed: the brief section 5 list, plus `/guide/<slug>` for **any slug in
  docs/info-topics.tsv** (all 80 publish together). 3 to 6 body links per article,
  natural anchors, prefer close siblings (rug pad <-> rug size <-> pile height).
  `related:` 2 to 4 entries. `shop:` only for the 3 existing best-guides.

## Research (keep it cheap)
- Use what you know as established buying knowledge. Use WebSearch only when a
  specific figure is needed and you are not sure of it (at most ~1 search per article,
  zero is fine). Never invent a figure; describe qualitatively instead.

## Images (real photos, Wikimedia Commons)
After the article passes the checker:
1. `python -I scripts/info/contact.py scripts/info/work/sheet.jpg "term 1" "term 2" "term 3"`
   prints numbered candidates (licence already filtered) and saves one contact sheet.
2. Read the sheet image once and pick a hero + at least 2 figure photos that really
   show the subject (a sofa, a rug, a lamp...). Drop anything off-topic, staged with
   watermarks, or a render/illustration. One sheet per article; if the first sheet is
   weak, at most one more search.
3. Rename the `hero:` filename and figure `src` names in the html to match what you
   picked if needed (kebab-case `.webp`, unique across the whole round: prefix with
   a short slug word). Adjust alt/figcaption to describe the actual photo. Drop a
   figure (keep at least 2) rather than use a wrong photo.
4. Append one line per image to `scripts/info/work/manifest-<A|B>.tsv`:
   `filename.webp<TAB>commonsPageUrl<TAB>author<TAB>licence`
   Do NOT download images; the coordinator runs fetch-images.

## Per article loop
cd to the repo root before any command. Write html -> `node scripts/info/check-article.mjs scripts/info/work/<slug>.html`
-> fix with Edit until PASS -> images -> next article. Do not build, register, commit
or touch anything outside `scripts/info/work/`.
