#!/usr/bin/env node
// Quality gate for a delivered info article, run BEFORE build-article.mjs.
// Zero AI tokens. Usage: node scripts/info/check-article.mjs <file.html> [more.html ...]
//
// Checks the rules in docs/INFO-GUIDE-BRIEF.md that a machine can verify.
// Editorial depth still needs a human read; this catches the mechanical failures
// that have shipped on past batches.
import { readFileSync, readdirSync, existsSync } from "node:fs";

const files = process.argv.slice(2);
if (!files.length) { console.error("usage: node scripts/info/check-article.mjs <file.html> [...]"); process.exit(1); }

const guideSlugs = existsSync("data/guides") ? readdirSync("data/guides").filter(f => f.endsWith(".ts")).map(f => f.slice(0, -3)) : [];
const legacySlugs = existsSync("data/legacy") ? readdirSync("data/legacy").filter(f => f.endsWith(".ts")).map(f => f.slice(0, -3)) : [];
const staticPaths = ["/", "/guide", "/guide/all", "/categories", "/compare", "/deals", "/reviews",
  "/how-we-review", "/about-us", "/contact", "/privacy-policy", "/terms-of-use", "/affiliate-disclosure"];
const categorySlugs = ["sofas-seating", "rugs-flooring", "lighting", "storage-media", "decor-styling"];

const BANNED_PHRASES = [
  /\bwe tested\b/i, /\bwe tried\b/i, /\bin our lab\b/i, /\bwe measured\b/i, /\bhands[- ]on test/i,
  /\bour testing\b/i, /\bwe bought\b/i, /\bI tested\b/i,
];
const AD_COPY = [/^\s*(tired of|abandon|introducing|experience the|say goodbye)/i];

let totalFail = 0;

for (const file of files) {
  const raw = readFileSync(file, "utf8");
  const fails = [];
  const warns = [];

  const m = raw.match(/<!--\s*meta([\s\S]*?)-->/);
  if (!m) { console.log(`\n${file}\n  FAIL no <!--meta--> block`); totalFail++; continue; }
  const meta = {};
  for (const line of m[1].split("\n")) {
    const k = line.match(/^\s*([a-zA-Z]+)\s*:\s*(.*)$/);
    if (k) meta[k[1]] = k[2].trim();
  }
  const body = raw.slice(m.index + m[0].length).trim();
  const text = body.replace(/<figure[\s\S]*?<\/figure>/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const words = text.trim().split(" ").filter(Boolean).length;

  // ── meta ──
  for (const k of ["slug", "title", "metaTitle", "metaDescription", "readTime", "hero", "quickAnswer", "category", "keyword"]) {
    if (!meta[k]) fails.push(`meta.${k} missing`);
  }
  if (meta.metaTitle && meta.metaTitle.length + 13 > 60) fails.push(`metaTitle ${meta.metaTitle.length} chars, +13 for the suffix exceeds 60`);
  if (meta.metaDescription && (meta.metaDescription.length < 120 || meta.metaDescription.length > 160))
    fails.push(`metaDescription ${meta.metaDescription.length} chars, must be 120 to 160`);
  if (meta.slug && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(meta.slug)) fails.push(`slug "${meta.slug}" is not lowercase kebab-case`);
  if (meta.slug && guideSlugs.includes(meta.slug)) warns.push(`slug already exists in data/guides, build will overwrite it`);
  if (meta.category && !categorySlugs.includes(meta.category)) fails.push(`meta.category "${meta.category}" is not one of ${categorySlugs.join(", ")}`);
  if (meta.quickAnswer && meta.quickAnswer.split(/\s+/).length < 40) warns.push(`quickAnswer is only ${meta.quickAnswer.split(/\s+/).length} words, aim for 60 to 110`);

  // ── length ──
  if (words < 2900) fails.push(`${words} words in the body, minimum is 2900`);
  if (words > 3800) warns.push(`${words} words, longer than the 3300 target`);

  // ── dashes ──
  const dash = raw.match(/[–—]/g);
  if (dash) fails.push(`${dash.length} em or en dash characters, none are allowed`);

  // ── structure ──
  const h2 = [...body.matchAll(/<h2(?:\s+id="([^"]+)")?[^>]*>([\s\S]*?)<\/h2>/g)];
  if (h2.length < 7) fails.push(`${h2.length} h2 sections, minimum is 7`);
  const noId = h2.filter(x => !x[1]);
  if (noId.length) fails.push(`${noId.length} h2 headings without an id attribute`);
  const ids = h2.map(x => x[1]).filter(Boolean);
  const dupIds = ids.filter((v, i) => ids.indexOf(v) !== i);
  if (dupIds.length) fails.push(`duplicate h2 ids: ${[...new Set(dupIds)].join(", ")}`);
  if (!ids.includes("faq")) fails.push(`no <h2 id="faq"> section`);
  const faqQs = (body.split('id="faq"')[1] || "").match(/<h3[^>]*>/g) || [];
  if (faqQs.length < 5) fails.push(`FAQ has ${faqQs.length} questions, minimum is 5`);
  if (!/<h2 id="bottom-line"/.test(body)) warns.push(`no bottom-line section`);

  // ── figures ──
  const figs = [...body.matchAll(/<figure>[\s\S]*?<\/figure>/g)];
  if (figs.length < 2) fails.push(`${figs.length} <figure> blocks, minimum is 2 besides the hero`);
  for (const f of figs) {
    if (!/<img[^>]+src="\/images\/articles\/[a-z0-9-]+\.webp"/.test(f[0])) fails.push(`a figure's img src is not /images/articles/<name>.webp`);
    if (!/alt="[^"]{15,}"/.test(f[0])) fails.push(`a figure's img has a missing or too short alt`);
    if (!/<figcaption>[^<]{20,}/.test(f[0])) fails.push(`a figure has a missing or too short figcaption`);
    if (/(photo|image|picture)\s*(by|:|credit)/i.test(f[0])) fails.push(`a figcaption carries a credit, credits belong in the manifest only`);
  }

  // ── compliance ──
  for (const re of BANNED_PHRASES) if (re.test(text)) fails.push(`banned testing claim: ${re.source}`);
  const prices = text.match(/\$\s?\d[\d,]*(\.\d\d)?/g);
  if (prices) fails.push(`dollar figures are not allowed: ${[...new Set(prices)].slice(0, 5).join(", ")}`);
  const ratings = [
    ...(text.match(/\b\d[.,]\d\s*(?:stars?|out of 5|\/\s*5)/gi) || []),
    ...(text.match(/\b[\d,]{3,}\s*(?:reviews|ratings)\b/gi) || []),
  ];
  if (ratings.length) fails.push(`Amazon rating or review counts are not allowed: ${[...new Set(ratings)].slice(0, 3).join(", ")}`);
  if (/[【】]/.test(raw)) fails.push(`full-width bracket label found, raw seller copy leaked in`);
  for (const re of AD_COPY) {
    for (const p of body.match(/<p>([\s\S]*?)<\/p>/g) || []) {
      if (re.test(p.replace(/<[^>]+>/g, ""))) fails.push(`ad-copy opener in a paragraph: ${re.source}`);
    }
  }

  // ── internal links ──
  const hrefs = [...body.matchAll(/href="(\/[^"#?]*)"/g)].map(x => x[1]);
  const metaHrefs = [meta.related, meta.shop].filter(Boolean).join(";")
    .split(";").map(s => s.split("|")[1]).filter(Boolean).map(s => s.trim());
  for (const h of [...new Set([...hrefs, ...metaHrefs])]) {
    if (h.endsWith("/") && h !== "/") { fails.push(`internal link has a trailing slash: ${h}`); continue; }
    const g = h.match(/^\/guide\/([a-z0-9-]+)$/);
    const ok = staticPaths.includes(h)
      || (g && (guideSlugs.includes(g[1]) || categorySlugs.includes(g[1]) || g[1] === meta.slug))
      || /^\/categories\/([a-z0-9-]+)$/.test(h) && categorySlugs.includes(h.split("/")[2])
      || legacySlugs.includes(h.slice(1))
      || /^\/author\/elena-hart$/.test(h);
    if (!ok) fails.push(`internal link target does not exist: ${h}`);
  }
  const internalCount = new Set(hrefs).size;
  if (internalCount < 3) fails.push(`${internalCount} distinct internal links in the body, minimum is 3`);

  // ── paragraph shape ──
  const paras = (body.match(/<p>[\s\S]*?<\/p>/g) || []).map(p => p.replace(/<[^>]+>/g, "").trim());
  const longest = Math.max(0, ...paras.map(p => p.split(/\s+/).length));
  if (longest > 160) warns.push(`longest paragraph is ${longest} words, consider splitting`);
  const oneLiners = paras.filter(p => p.split(/\s+/).length < 12).length;
  if (oneLiners > paras.length * 0.25) warns.push(`${oneLiners} of ${paras.length} paragraphs are under 12 words`);

  const status = fails.length ? "FAIL" : "PASS";
  console.log(`\n${file}  ${status}  (${words} words, ${h2.length} sections, ${figs.length} figures, ${internalCount} internal links)`);
  for (const f of fails) console.log(`  FAIL  ${f}`);
  for (const w of warns) console.log(`  warn  ${w}`);
  if (fails.length) totalFail++;
}

console.log(`\n${files.length} file(s), ${totalFail} failing`);
process.exit(totalFail ? 1 : 0);
