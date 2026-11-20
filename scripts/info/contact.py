#!/usr/bin/env python3
"""Search Wikimedia Commons and build one numbered contact sheet to eyeball.

Usage: python -I scripts/info/contact.py <out.jpg> "search term" ["term 2" ...]
Prints one line per usable candidate: N | title | license | author | pageUrl
Only reuse-compatible licences (CC0, public domain, CC BY, CC BY-SA) are kept.
The sheet labels each thumbnail with N so a single Read shows all candidates.
"""
import io, json, re, sys, urllib.parse, urllib.request
sys.stdout.reconfigure(encoding="utf-8")
from PIL import Image, ImageDraw

UA = {"User-Agent": "SweetLivingRoomImageResearch/1.0 (editorial research)"}
OK = re.compile(r"^(cc0|public domain|pd|cc by(-sa)? ?[0-9.]*( [a-z]+)?)", re.I)


def q(params):
    u = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    return json.load(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=30))


def main(out, terms):
    cands, seen = [], set()
    for term in terms:
        d = q({"action": "query", "format": "json", "generator": "search",
               "gsrsearch": f"filetype:bitmap {term}", "gsrnamespace": 6, "gsrlimit": 10,
               "prop": "imageinfo", "iiprop": "url|extmetadata|size", "iiurlwidth": 240})
        for p in (d.get("query", {}).get("pages", {}) or {}).values():
            if p["title"] in seen:
                continue
            ii = p["imageinfo"][0]; m = ii.get("extmetadata", {})
            g = lambda k: re.sub("<[^>]+>", "", (m.get(k, {}).get("value") or "")).strip()
            lic = g("LicenseShortName")
            if not OK.match(lic) or "nc" in lic.lower() or "nd" in lic.lower():
                continue
            if (ii.get("width") or 0) < 800:
                continue
            seen.add(p["title"])
            cands.append({"title": p["title"], "thumb": ii.get("thumburl"), "lic": lic,
                          "author": " ".join(g("Artist").replace("|", " ").split())[:60],
                          "page": ii.get("descriptionurl")})
    cands = cands[:24]
    cols, W, H = 6, 240, 200
    sheet = Image.new("RGB", (cols * W, ((len(cands) + cols - 1) // cols or 1) * H), "white")
    dr = ImageDraw.Draw(sheet)
    for i, c in enumerate(cands):
        try:
            im = Image.open(io.BytesIO(urllib.request.urlopen(urllib.request.Request(c["thumb"], headers=UA), timeout=30).read())).convert("RGB")
            im.thumbnail((W - 6, H - 22))
            sheet.paste(im, ((i % cols) * W + 3, (i // cols) * H + 20))
        except Exception:
            pass
        dr.rectangle([(i % cols) * W, (i // cols) * H, (i % cols) * W + 34, (i // cols) * H + 18], fill="black")
        dr.text(((i % cols) * W + 4, (i // cols) * H + 3), str(i + 1), fill="yellow")
        print(f"{i+1} | {c['title'][5:80]} | {c['lic']} | {c['author'] or 'Unknown'} | {c['page']}")
    sheet.save(out, quality=70)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(__doc__); sys.exit(1)
    main(sys.argv[1], sys.argv[2:])
