#!/usr/bin/env python3
"""Download the photos listed in an image manifest and write them as webp.

Manifest: one line per image, tab separated, no header:
    filename.webp <TAB> sourcePageUrl <TAB> author <TAB> license

sourcePageUrl is a Wikimedia Commons File: page. The script resolves it through
Special:FilePath, so a guessed upload.wikimedia hash path is never needed.

Usage: python3 -I scripts/info/fetch-images.py manifest.tsv
Writes: public/images/articles/<filename>.webp
Prints: the credits.tsv rows to hand to build-article.mjs
"""
import io, json, os, re, sys, time, urllib.parse, urllib.request
from PIL import Image

UA = {"User-Agent": "SweetLivingRoomImageResearch/1.0 (editorial research)"}
OUT = "public/images/articles"
API = "https://commons.wikimedia.org/w/api.php?"


def commons_title(url):
    m = re.search(r"commons\.wikimedia\.org/wiki/(?:File|Special:FilePath)[:/](.+)$", url)
    return urllib.parse.unquote(m.group(1).split("?")[0]) if m else None


def fetch(url, tries=4, timeout=60):
    for attempt in range(tries):
        try:
            return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=timeout).read()
        except Exception as e:
            print(f"    retry ({e})", file=sys.stderr)
            time.sleep(10 * (attempt + 1))
    return None


def main(path):
    os.makedirs(OUT, exist_ok=True)
    rows, credits, failed = [], [], 0
    for line in open(path, encoding="utf-8").read().strip().split("\n"):
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        parts = [p.strip() for p in re.split(r"\t|\s*\|\s*", line.strip("|"))]
        if len(parts) < 4 or not parts[0].endswith(".webp"):
            print(f"SKIP malformed: {line[:70]}", file=sys.stderr)
            continue
        rows.append(parts[:4])

    for name, source, author, license_ in rows:
        title = commons_title(source)
        if not title:
            print(f"FAIL {name}: not a Commons File: URL", file=sys.stderr)
            failed += 1
            continue
        meta_url = API + urllib.parse.urlencode({
            "action": "query", "format": "json", "titles": "File:" + title,
            "prop": "imageinfo", "iiprop": "url|extmetadata", "iiurlwidth": 960,
        })
        raw = fetch(meta_url, timeout=30)
        if not raw:
            print(f"FAIL {name}: metadata request failed", file=sys.stderr)
            failed += 1
            continue
        page = list(json.loads(raw)["query"]["pages"].values())[0]
        if "imageinfo" not in page:
            print(f"FAIL {name}: no such file on Commons", file=sys.stderr)
            failed += 1
            continue
        info = page["imageinfo"][0]
        real_license = (info["extmetadata"].get("LicenseShortName", {}) or {}).get("value", "")
        time.sleep(2)
        img = fetch(info.get("thumburl") or info["url"], tries=2)
        if not img and info.get("thumburl"):
            # Commons answers 429 for some thumb sizes; try another standard width, then the original
            img = fetch(info["thumburl"].replace("/960px-", "/1280px-"), tries=2) or fetch(info["url"], tries=2)
        if not img:
            print(f"FAIL {name}: download failed", file=sys.stderr)
            failed += 1
            continue
        im = Image.open(io.BytesIO(img)).convert("RGB")
        im.thumbnail((1400, 1400))
        im.save(f"{OUT}/{name}", "WEBP", quality=82, method=5)
        if real_license and license_ and real_license.lower() != license_.lower():
            print(f"  note {name}: manifest says {license_}, Commons says {real_license}", file=sys.stderr)
        credits.append((name, "", source, author, real_license or license_))
        print(f"ok   {name}  {im.width}x{im.height}  {real_license}", file=sys.stderr)
        time.sleep(2)

    print("\n# credits.tsv, pass this file to build-article.mjs", file=sys.stderr)
    for c in credits:
        print("\t".join(c))
    print(f"\n{len(credits)} downloaded, {failed} failed", file=sys.stderr)
    return 1 if failed else 0


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    sys.exit(main(sys.argv[1]))
