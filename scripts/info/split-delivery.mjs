#!/usr/bin/env node
// Splits one pasted multi-article delivery into individual .html files.
// The writer separates articles with:  === FILE: <slug>.html ===
// Usage: node scripts/info/split-delivery.mjs <delivery.txt> [--out <dir>]
//   default out dir: /tmp/slr-articles
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const src = args.find((a) => !a.startsWith("--"));
const oi = args.indexOf("--out");
const outDir = oi >= 0 ? args[oi + 1] : "/tmp/slr-articles";
if (!src) { console.error("usage: node scripts/info/split-delivery.mjs <delivery.txt> [--out <dir>]"); process.exit(1); }
mkdirSync(outDir, { recursive: true });

// Tolerate the writer wrapping each file in a markdown code fence.
const raw = readFileSync(src, "utf8").replace(/^```[a-z]*\s*$/gm, "");
const parts = raw.split(/^[=\s]*=== *FILE: *(.+?\.html) *===[=\s]*$/gm);

if (parts.length < 3) {
  console.error("no '=== FILE: <slug>.html ===' markers found");
  process.exit(1);
}

let n = 0;
for (let i = 1; i < parts.length; i += 2) {
  const name = parts[i].trim();
  const body = parts[i + 1].trim();
  if (!body.includes("<!--meta")) { console.error(`SKIP ${name}: no meta block`); continue; }
  const words = body.replace(/<!--[\s\S]*?-->/, "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  writeFileSync(join(outDir, name), body + "\n");
  console.log(`${name}\t${words} words`);
  n++;
}
console.log(`\n${n} file(s) written to ${outDir}`);
console.log(`next: node scripts/info/check-article.mjs ${outDir}/*.html`);
