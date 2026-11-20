#!/usr/bin/env node
// Turns a delivered .html file (meta block + body) into data/guides/<slug>.ts
// as an InfoGuideModule, then registers the slug so /guide/<slug> resolves.
//
// Usage: node scripts/info/build-article.mjs <file.html> [images.tsv]
//
// The writer never touches TypeScript, so backticks, ${ and quotes in the prose
// cannot break the module.
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const [src, manifest] = process.argv.slice(2);
if (!src) {
  console.error("usage: node scripts/info/build-article.mjs <file.html> [images.tsv]");
  process.exit(1);
}
const raw = readFileSync(src, "utf8");

const m = raw.match(/<!--\s*meta([\s\S]*?)-->/);
if (!m) { console.error("no <!--meta ... --> block at the top of the file"); process.exit(1); }
const meta = {};
for (const line of m[1].split("\n")) {
  const k = line.match(/^\s*([a-zA-Z]+)\s*:\s*(.*)$/);
  if (k) meta[k[1]] = k[2].trim();
}
const body = raw.slice(m.index + m[0].length).trim();

const need = ["slug", "title", "metaTitle", "metaDescription", "readTime", "hero", "quickAnswer"];
const missing = need.filter((k) => !meta[k]);
if (missing.length) { console.error("meta block is missing: " + missing.join(", ")); process.exit(1); }

const [heroFile] = meta.hero.split("|").map((s) => s.trim());

const pairs = (v) => (v || "").split(";").map((s) => s.trim()).filter(Boolean).map((pair) => {
  const [title, href] = pair.split("|").map((x) => x.trim());
  return { title, href };
});
const related = pairs(meta.related);
const shop = (meta.shop || "").split(";").map((s) => s.trim()).filter(Boolean).map((row) => {
  const [title, href, blurb] = row.split("|").map((x) => x.trim());
  return { title, href, blurb: blurb || "" };
});

let credits = [];
if (manifest && existsSync(manifest)) {
  credits = readFileSync(manifest, "utf8").trim().split("\n")
    .map((l) => l.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split(/\t|\s*\|\s*/).map((s) => s.trim()))
    .filter((c) => c[0] && c[0].endsWith(".webp") && c[3])
    .map(([image, , source, author, license, via]) => ({ image, author, license: license || "", source, ...(via ? { via } : {}) }));
}

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
const j = (v) => JSON.stringify(v);
const arr = (items) => (items.length ? "[\n" + items.map((x) => "    " + j(x) + ",").join("\n") + "\n  ]" : "[]");

const out = `import type { InfoGuideModule } from "@/components/guide/InfoGuidePage";

const guide: InfoGuideModule = {
  kind: "info",
  guideSlug: ${j(meta.slug)},
  guideTitle: ${j(meta.title)},
  metaTitle: ${j(meta.metaTitle)},
  metaDescription: ${j(meta.metaDescription)},
  heroImage: ${j("/images/articles/" + heroFile)},
  lastUpdated: ${j(meta.lastUpdated || new Date().toISOString().slice(0, 10))},
  readTime: ${j(meta.readTime)},
  quickAnswer: ${j(meta.quickAnswer)},
  html: \`${esc(body)}\`,
  imageCredits: ${arr(credits)},
  shopGuides: ${arr(shop)},
  relatedGuides: ${arr(related)},
};

export default guide;
export const kind = guide.kind;
export const guideSlug = guide.guideSlug;
export const guideTitle = guide.guideTitle;
export const metaTitle = guide.metaTitle;
export const metaDescription = guide.metaDescription;
export const heroImage = guide.heroImage;
export const lastUpdated = guide.lastUpdated;
export const readTime = guide.readTime;
export const quickAnswer = guide.quickAnswer;
export const html = guide.html;
export const imageCredits = guide.imageCredits;
export const shopGuides = guide.shopGuides;
export const relatedGuides = guide.relatedGuides;
`;

writeFileSync(`data/guides/${meta.slug}.ts`, out);
console.log(`wrote data/guides/${meta.slug}.ts  (${body.split(/\s+/).length} words, ${credits.length} credits)`);

// ── register in the dynamic registry ──
const regPath = "data/dynamic-guides-registry.ts";
let reg = readFileSync(regPath, "utf8");
if (!reg.includes(`"${meta.slug}"`)) {
  reg = reg.replace("unknown>>> = {\n", `unknown>>> = {\n  "${meta.slug}": () => import("./guides/${meta.slug}"),\n`);
  writeFileSync(regPath, reg);
  console.log("registered in dynamic-guides-registry.ts");
}

// ── register in data/guides.ts so the sitemap, index and category pages see it ──
const gPath = "data/guides.ts";
let g = readFileSync(gPath, "utf8");
if (!g.includes(`slug: "${meta.slug}"`)) {
  const entry = `  {
    title: ${j(meta.title)},
    slug: ${j(meta.slug)},
    categorySlug: ${j(meta.category || "")},
    subcategorySlug: "",
    description: ${j(meta.metaDescription)},
    mainKeyword: ${j(meta.keyword || "")},
    subKeywords: [],
    heroImage: ${j("/images/articles/" + heroFile)},
    lastUpdated: ${j(meta.lastUpdated || new Date().toISOString().slice(0, 10))},
    author: "Elena Hart",
    readTime: ${j(meta.readTime)},
    recommendedProductIds: [],
    sections: [],
    faq: [],
    relatedGuideSlugs: [],
    buyingCriteria: [],
  },
`;
  g = g.replace("export const guides: Guide[] = [\n", "export const guides: Guide[] = [\n" + entry);
  writeFileSync(gPath, g);
  console.log("registered in data/guides.ts");
}
