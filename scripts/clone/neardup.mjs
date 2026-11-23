// Near-duplicate check for a candidate round list (CLAUDE.md section 4c).
//
// Compares candidate slugs against every slug already in data/guides.ts, the
// info topic list and source-index.json (including rows marked skip), after
// normalising: drop "best-", singularise, drop stop words, sort the words. Also
// reports high token overlap, which is what catches "small vs compact" and
// "for-X vs X-for" pairs that an exact match misses.
//
// Usage: node scripts/clone/neardup.mjs scripts/clone/list-r5.tsv

import { readFileSync, existsSync } from "fs";

const STOP = new Set(["for", "the", "a", "an", "with", "and", "in", "of", "to", "your", "living", "room", "rooms", "home"]);

function norm(slug) {
  return slug
    .replace(/^best-/, "")
    .split("-")
    .map((w) => w.replace(/ies$/, "y").replace(/sses$/, "ss").replace(/s$/, ""))
    .filter((w) => w && !STOP.has(w))
    .sort();
}
const key = (slug) => norm(slug).join("-");
function overlap(a, b) {
  const A = new Set(a), B = new Set(b);
  let hit = 0;
  for (const w of A) if (B.has(w)) hit++;
  return hit / Math.max(1, Math.min(A.size, B.size));
}

// ─── existing corpus ────────────────────────────────────────────────────────
const existing = new Map(); // key -> original slug

function add(slug, where) {
  if (!slug) return;
  const k = key(slug);
  if (!existing.has(k)) existing.set(k, `${slug} (${where})`);
}

for (const m of readFileSync("data/guides.ts", "utf-8").matchAll(/slug: "([^"]+)"/g)) add(m[1], "data/guides.ts");
if (existsSync("docs/info-topics.tsv")) {
  for (const line of readFileSync("docs/info-topics.tsv", "utf-8").split("\n")) {
    add(line.split("\t")[0]?.trim(), "info-topics");
  }
}
if (existsSync("scripts/clone/source-index.json")) {
  for (const r of JSON.parse(readFileSync("scripts/clone/source-index.json", "utf-8"))) {
    add(r.slug, `source-index:${r.status}`);
  }
}

// ─── candidates ─────────────────────────────────────────────────────────────
const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/clone/neardup.mjs <list.tsv>");
  process.exit(1);
}
const rows = readFileSync(file, "utf-8")
  .split("\n")
  .map((l) => l.split("\t")[0]?.trim())
  .filter(Boolean);

let exact = 0;
let near = 0;
const seen = new Set();

for (const slug of rows) {
  const k = key(slug);
  const words = norm(slug);

  if (seen.has(k)) { console.log(`DUP-IN-LIST  ${slug}`); exact++; continue; }
  seen.add(k);

  if (existing.has(k)) {
    console.log(`EXACT        ${slug}\n             collides with ${existing.get(k)}`);
    exact++;
    continue;
  }
  const hits = [];
  for (const [ek, orig] of existing) {
    const o = overlap(words, ek.split("-"));
    if (o >= 0.8) hits.push(`${orig} [${o.toFixed(2)}]`);
  }
  if (hits.length) {
    console.log(`NEAR         ${slug}\n             ${hits.slice(0, 4).join("\n             ")}`);
    near++;
  }
}

console.log(`\n${rows.length} candidates: ${exact} exact, ${near} near, ${rows.length - exact - near} clean`);
