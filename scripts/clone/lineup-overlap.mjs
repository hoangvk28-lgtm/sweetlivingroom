// Reports guide pairs that share too much of their product lineup.
// Two "best" guides built from mostly the same ASINs compete for one keyword
// and read as duplicates, which is the Finish-stage check CLAUDE.md section 4c
// asks for.
//
// Usage: node scripts/clone/lineup-overlap.mjs [threshold]   (default 0.5)

import { readFileSync, readdirSync } from "fs";

const DIR = "data/guides/";
const threshold = Number(process.argv[2]) || 0.5;

const lineups = new Map();
for (const f of readdirSync(DIR).filter((f) => f.endsWith(".ts"))) {
  const src = readFileSync(DIR + f, "utf-8");
  const asins = [...src.matchAll(/asin: "([A-Z0-9]{10})"/g)].map((m) => m[1]);
  // Older guides predate the asin field; fall back to the ASIN in the affiliate URL.
  const fromUrl = [...src.matchAll(/amazonUrl: "https:\/\/www\.amazon\.com\/dp\/([A-Z0-9]{10})/g)].map((m) => m[1]);
  const set = new Set(asins.length ? asins : fromUrl);
  if (set.size) lineups.set(f.replace(/\.ts$/, ""), set);
}

const slugs = [...lineups.keys()].sort();
const pairs = [];
for (let i = 0; i < slugs.length; i++) {
  for (let j = i + 1; j < slugs.length; j++) {
    const a = lineups.get(slugs[i]);
    const b = lineups.get(slugs[j]);
    let shared = 0;
    for (const x of a) if (b.has(x)) shared++;
    if (!shared) continue;
    const ratio = shared / Math.min(a.size, b.size);
    if (ratio >= threshold) pairs.push({ a: slugs[i], b: slugs[j], shared, ratio, sizes: [a.size, b.size] });
  }
}

pairs.sort((x, y) => y.ratio - x.ratio);
for (const p of pairs) {
  console.log(`${p.ratio.toFixed(2)}  ${p.shared} shared of ${p.sizes.join(" and ")}  ${p.a}  <->  ${p.b}`);
}
console.log(`\n${lineups.size} guides with ASIN data, ${pairs.length} pairs at or above ${threshold} overlap`);
