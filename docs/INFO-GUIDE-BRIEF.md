# SweetLivingRoom: brief for 20 informational guides

Give this whole document to the writer. Everything in it is a hard requirement
unless it says "prefer" or "optional". All 20 articles are written in one run,
each delivered as its own `.html` file. See section 7 for the output format.

---

## 1. The site

**SweetLivingRoom.com** publishes buying advice for living rooms: seating, rugs,
lighting, storage and media furniture, and decor. It earns affiliate commission
on Amazon links. It is not a store and it does not sell anything.

**Reader:** a homeowner or renter who is about to spend real money on a piece of
furniture and is worried about getting it wrong. They have a specific room with
specific dimensions. They are not designers. They respond to numbers, clearances
and plain tradeoffs, not to mood boards.

**Voice:** a careful, experienced editor explaining a decision to someone who
asked. Direct, concrete, unhurried. Never breathless, never a listicle voice,
never addressing the reader as "folks" or opening with a rhetorical question.

**What these 20 articles are:** informational guides that answer a question.
They are not product roundups. A separate set of "best X" articles handles
product recommendations, so these articles explain the underlying decision and
link to a roundup where one exists.

---

## 2. The non-negotiable rules

Breaking any of these means the article is sent back.

### Honesty

1. **Never claim hands-on testing.** The site does not test products. Banned:
   "we tested", "we tried", "in our lab", "we measured", "our testing", "hands-on".
   Use instead: "we evaluated", "we researched", "based on published
   specifications", "based on patterns in owner feedback", "our analysis".
2. **Never invent a number, a standard or a regulation.** If research does not
   support a figure, leave it out or describe the range qualitatively. A
   plausible-sounding invented statistic is the worst failure mode here.
3. **When the honest answer is "nobody knows", say so.** Several of these topics
   have no documented answer. Saying that plainly, and explaining what the
   competing explanations are and why neither is verified, beats a confident
   invented history. It is also the thing that differentiates the article.
4. **Do not expose the research process.** No "according to a study", no "experts
   say", no citations in the prose. State the knowledge as established buying
   knowledge, the way a reference book does.

### Commercial compliance

5. **No dollar figures anywhere.** Not "$300 sofa", not "around $1,200", not a
   price range. Prices change and a stale number destroys trust. Use relative
   terms instead: "the budget end of the category", "a premium price relative to
   a flat-pack frame".
6. **No star ratings and no review counts.** Not "4.6 stars", not "over 12,000
   reviews". Amazon's terms restrict republishing those, and it is an
   account-level risk. Qualitative framing is fine: "well reviewed", "a long
   track record", "a newer listing with a short history".
7. **No brand bashing and no unverifiable brand claims.** Naming a brand is fine
   when stating a verifiable fact about a product type. Claiming a brand's
   products fail is not.

### Formatting

8. **No em dashes and no en dashes. Anywhere.** Not in the body, not in the meta
   block, not in alt text. Use a comma, a colon, a period, or rewrite. This is
   checked automatically and is the single most common reason for a rejection.
9. **Plain ASCII punctuation.** No full-width brackets, no smart quote characters
   that break the build, no emoji.
10. **No price, no rating, no "sponsored" claims in headings.**

### Health and safety topics

11. Where a topic touches health (pain, injury, child development, furniture
    tip-over), the article manages comfort and decisions, it does not diagnose or
    treat. Include a short, specific section on when to consult a professional,
    with concrete warning signs. Do not hedge the entire article into
    uselessness; be specific about the practical advice and specific about the
    limits.

---

## 3. Length and structure

**Target 3,000 to 3,300 words of body prose.** Below 2,900 is rejected. The
count excludes the meta block and figure captions.

Deliver one `.html` file per article, in exactly this shape:

```html
<!--meta
slug: how-to-measure-a-living-room-for-a-sofa
title: How to Measure a Living Room for a Sofa Before You Order
metaTitle: How to Measure a Room for a Sofa
metaDescription: The four measurements that decide whether a sofa fits: wall run, walkway, door path and seat depth, plus the one most people forget.
category: sofas-seating
keyword: how to measure for a sofa
readTime: 14 min
hero: living-room-tape-measure.webp | A tape measure held along a living room wall beside a sofa
quickAnswer: Measure four things before ordering, not one. ...
related: Best sectional sofas for small living rooms|/guide/best-sectional-sofas-for-small-living-rooms; How we rate the pieces we recommend|/how-we-review
shop: Best sectional sofas for small living rooms|/guide/best-sectional-sofas-for-small-living-rooms|Five frames compared on footprint and seat depth
-->

<p>Opening paragraph...</p>

<h2 id="section-slug">Section heading</h2>
...
```

### The meta block

| Field | Rule |
|---|---|
| `slug` | lowercase kebab-case, matches the assigned topic exactly |
| `title` | the on-page H1. Descriptive, no year needed on info guides |
| `metaTitle` | **47 characters maximum.** The site appends " \| SweetLivingRoom" (13 chars) and the total must stay under 60. Count the characters, do not estimate |
| `metaDescription` | **120 to 160 characters.** Count them. This also renders as the page subtitle, so it must read as a sentence, not as keywords |
| `category` | one of: `sofas-seating`, `rugs-flooring`, `lighting`, `storage-media`, `decor-styling` |
| `keyword` | the main search phrase the article targets |
| `readTime` | e.g. `14 min`, roughly words ÷ 225 |
| `hero` | `filename.webp \| alt text`. **Invent the filename**, describe the photo you want. The images are sourced separately; just name the file and say what it must show |
| `quickAnswer` | 60 to 110 words. A complete, standalone answer to the title question, written so it could be lifted as a featured snippet. No "read on to find out" |
| `related` | 2 to 4 entries, `Title\|/path`, separated by `;` |
| `shop` | optional, `Title\|/path\|one-line blurb`, only when a matching roundup exists |

### The body

- **7 to 12 `<h2>` sections**, every one with a unique `id` attribute in
  kebab-case. The id drives the table of contents, so a missing one breaks the page.
- **One section must be `<h2 id="faq">`** with **5 or more** `<h3>` questions,
  each answered in 2 to 4 real sentences. Cover different angles, not five
  rewordings of the title. At minimum: a sizing or measurement question, a
  cost-of-ownership question, a common misconception, and a "what if my
  situation is different" question.
- **End with `<h2 id="bottom-line">`**, 2 to 3 paragraphs that commit to an
  answer. Do not restate the article; tell the reader what to do.
- Allowed tags: `<p> <h2> <h3> <ul> <ol> <li> <strong> <a> <figure> <img>
  <figcaption> <table> <thead> <tbody> <tr> <th> <td>`. Nothing else, no
  inline styles, no classes, no `<div>`.
- **Use at least one `<table>`** where the content is genuinely a lookup: a
  size-to-recommendation map, a material comparison, a clearance chart. A table
  that is just prose in cells is worse than a paragraph.
- Paragraphs of 40 to 120 words. Avoid one-sentence paragraphs used for drama.

### Images

Specify **the hero plus 2 to 4 in-body figures**. Do not source them; name them
and describe them.

```html
<figure>
  <img src="/images/articles/rug-size-under-sofa.webp" alt="An area rug running under the front legs of a sofa and two chairs" />
  <figcaption>What the front-legs-on rule looks like in a standard seating group.</figcaption>
</figure>
```

- `src` is always `/images/articles/<kebab-name>.webp`.
- `alt` describes the photo for a screen reader, 15 characters minimum.
- `figcaption` says what the photo shows and why it matters, 20 characters minimum.
- **Never put a photographer or source credit in a caption.** Credits are
  handled once, at the end of the page, automatically.
- Every photo must be something a real camera could have taken of the real
  subject. Do not request illustrations, renders, diagrams or infographics.

---

## 4. The quality bar

A section passes if it could not be copied into another article in the same
category without changing a word. Specifically:

- **Numbers with units, in the prose.** "30 to 36 inches of walkway", "2700K",
  "a 0.3 inch pile", "26 inch seat depth". An article about sizing that never
  states a size has failed.
- **Name the tradeoff, then resolve it.** Every recommendation has a cost. State
  it, then say who should accept it. "Deeper seats are more comfortable but push
  the coffee table into the walkway, so below about 12 feet of room width, take
  the shallower seat."
- **Explain mechanism, not just rules.** Not "use a rug pad", but "a thin rug
  without a pad slides because nothing resists the shear load of a footstep, and
  the corners curl because the backing has no support at the edge".
- **Anticipate the reader's real situation.** Rented flat, awkward stairwell,
  a partner who disagrees, a room that is also a dining room. These are where
  competitor articles stop and where this site earns the ranking.
- **Surface the non-obvious failure.** Each article should contain at least two
  things the reader would not have thought to check. Those are the reason the
  page gets linked to.

**Self-check before delivering:** pick three sentences at random from the middle
of the article. If any of them would be equally true in an article about a
different product in the same category, rewrite that section.

---

## 5. Internal linking

- **At least 3 distinct internal links** in the body, placed where they genuinely
  help, with natural anchor text. Never "click here", never a bare URL.
- **Only link to paths on this list.** A link to a page that does not exist is an
  automatic rejection:
  - `/guide/best-sectional-sofas-for-small-living-rooms`
  - `/guide/best-area-rugs-for-living-rooms`
  - `/guide/best-floor-lamps-for-living-rooms`
  - `/categories/sofas-seating`, `/categories/rugs-flooring`,
    `/categories/lighting`, `/categories/storage-media`,
    `/categories/decor-styling`
  - `/how-we-review`, `/about-us`, `/guide`, `/guide/all`
  - `/why-is-it-called-a-husband-pillow`
  - `/how-to-make-a-bath-pillow`
  - `/how-to-relieve-tailbone-pain-while-sleeping`
  - **Plus any other slug from the 20 topics below**, as `/guide/<slug>`. Linking
    between these 20 is encouraged; they are being published together.
- **Never a trailing slash.** `/how-we-review` not `/how-we-review/`.
- External links: only when citing a standard or a regulator, and sparingly.
  Never link to a competitor's buying guide or to a retailer other than Amazon.

---

## 6. The 20 topics

Each row is one article. The slug is fixed. The angle note says what the article
must do that competing pages do not.

### Sofas and seating

| # | Slug | Title angle | Must cover |
|---|---|---|---|
| 1 | `how-to-measure-a-living-room-for-a-sofa` | The four measurements, not one | Wall run, walkway clearance, door and stair path, seat depth against room depth. The forgotten one: the diagonal of the stairwell turn |
| 2 | `sofa-seat-depth-explained` | What 21, 23 and 26 inches actually feel like | Posture at each depth, who each suits by height, why a deep seat ruins a small room, lumbar pillow as a partial fix |
| 3 | `sofa-frame-materials-explained` | What actually fails, and where | Kiln-dried hardwood vs engineered vs particleboard, the front rail as the failure point, sinuous springs vs webbing vs eight-way hand-tied, how to read a vague listing |
| 4 | `will-my-sofa-fit-through-the-door` | The measurement people take wrong | Diagonal depth vs width, the "it goes in on its side" rule, hinge removal, modular and knock-down frames as the escape hatch, when to measure the lift instead |
| 5 | `sofa-fabric-types-compared` | Living with each one | Performance weave, linen, cotton blend, velvet, bonded vs top-grain leather. Cleaning codes W, S, WS, X and what they actually permit. Pets, sunlight, pilling |

### Rugs and flooring

| # | Slug | Title angle | Must cover |
|---|---|---|---|
| 6 | `what-size-rug-for-a-living-room` | Size by layout, not by room | All-legs-on, front-legs-on and floating. Standard sizes against standard seating groups. Why the common advice to "go bigger" fails in a narrow room |
| 7 | `rug-pile-height-explained` | The number that decides daily annoyance | Low, medium, high pile and shag. Door clearance, chair legs, vacuum compatibility, how pile traps and releases dirt |
| 8 | `wool-vs-polypropylene-rugs` | The honest comparison | Shedding window, spill behaviour, sunlight fading, static, feel underfoot, cost over years rather than at purchase |
| 9 | `do-you-need-a-rug-pad` | Why it is not optional | Slip resistance, corner curling, pile crushing, floor finish protection, felt vs rubber vs combination, sizing the pad smaller than the rug |
| 10 | `how-to-clean-an-area-rug-at-home` | By fiber, because the answers differ | Blotting vs rubbing, what wet cleaning does to jute and to wool, vacuum settings and the beater bar, when a professional clean is cheaper than a replacement |

### Lighting

| # | Slug | Title angle | Must cover |
|---|---|---|---|
| 11 | `how-many-lumens-for-a-living-room` | Lumens, not watts | Rough lumens per square foot, how layering changes the requirement, why one bright ceiling fixture reads worse than three smaller sources |
| 12 | `color-temperature-explained-2700k-vs-3000k` | The mistake that makes a room look wrong | What each Kelvin value looks like on warm and cool wall colors, why mixing temperatures is the real error, CRI and why it matters for fabric and wood |
| 13 | `layered-lighting-living-room` | Ambient, task and accent in a real room | What each layer does, the minimum viable version in a rental, switching and dimming, where to put each source relative to the seating |
| 14 | `how-high-to-hang-a-light-over-a-living-room` | Heights that come from sightlines | Pendant over a coffee table, ceiling fixture clearance, floor lamp shade height against seated eye level, glare and the bare-bulb problem |

### Storage and media

| # | Slug | Title angle | Must cover |
|---|---|---|---|
| 15 | `how-high-should-a-tv-be-mounted` | Seated eye level, not above the fireplace | Measuring seated eye height, the center-of-screen rule, why above-fireplace mounting causes neck strain, tilting mounts as a compromise |
| 16 | `tv-size-for-viewing-distance` | The number that makes a room feel right | Distance to screen size, field of view, resolution's effect on the usable distance, why the biggest screen that fits is often wrong |
| 17 | `coffee-table-height-and-clearance` | The three gaps that matter | Height against seat height, distance from the sofa, walkway on the far side, shape against traffic flow, nesting and lift-top as small-room answers |
| 18 | `anchoring-furniture-to-the-wall` | Tip-over, explained properly | Which pieces tip, how anchors actually work, studs vs drywall anchors vs masonry, what renters can do, checking an existing anchor. Treat child and pet safety seriously and specifically |

### Decor and styling

| # | Slug | Title angle | Must cover |
|---|---|---|---|
| 19 | `curtain-length-and-width-guide` | The two numbers people get wrong | Width as a multiple of the window for fullness, length options (sill, apron, float, puddle) and where each belongs, rod placement above and beyond the frame, how that changes the apparent window size |
| 20 | `how-high-to-hang-art-above-a-sofa` | Center height and the gap | 57 inch center as a starting point and when to break it, the gap above the sofa back, sizing art to the furniture rather than the wall, grouping rules |

---

## 7. Delivery

**Write all 20 articles in this one run.** Do not stop after a sample, do not ask
which to start with, and do not wait for approval between articles. Work through
the topic table in order, 1 to 20.

One `.html` file per article, named `<slug>.html`, using the slug exactly as it
appears in the topic table. Output them one after another, each in its own code
block, with the filename on the line immediately above the block:

```
=== FILE: how-to-measure-a-living-room-for-a-sofa.html ===
<!--meta
...
-->
<p>...</p>
```

Then continue straight into the next file. Nothing between files except the next
`=== FILE: ... ===` line: no commentary, no summaries, no "here is the next one",
no progress notes.

**If the response runs out of room**, stop at the end of the last complete file
and say only `CONTINUE FROM #<n>`. On the next turn, resume at that article and
keep going. Never deliver a partial article, and never shorten later articles to
fit them in.

**Every article gets the same effort.** Articles 15 to 20 must be as specific,
as long and as well researched as articles 1 to 5. Shortening the back half of
the batch is the most common failure when writing twenty at once, and it is the
first thing that gets checked.

**Reuse nothing between articles.** Twenty articles for one site will be read
side by side, so a repeated sentence skeleton is obvious and reads as spam to a
search engine. Vary the opening framing across the set: some articles open on a
mistake, some on a measurement, some on a question a reader actually asks, some
on what a listing leaves out. Never open two articles the same way, and never
reuse a paragraph structure you have already used in this batch.

Before sending each file, confirm:

Before sending each file, confirm:

- [ ] Body is 3,000 to 3,300 words
- [ ] Zero em dashes and zero en dashes in the entire file
- [ ] `metaTitle` is 47 characters or fewer, counted
- [ ] `metaDescription` is 120 to 160 characters, counted
- [ ] Every `<h2>` has a unique `id`
- [ ] There is an `<h2 id="faq">` with 5 or more `<h3>` questions
- [ ] There is an `<h2 id="bottom-line">`
- [ ] At least one real `<table>`
- [ ] Hero plus 2 to 4 `<figure>` blocks, each with alt and figcaption, no credits in captions
- [ ] At least 3 internal links, all from the allowed list, none with a trailing slash
- [ ] No dollar figures, no star ratings, no review counts
- [ ] No claim of hands-on testing
- [ ] Three random sentences from the middle each contain something specific to
      this topic that could not be said about a different product

The site runs `node scripts/info/check-article.mjs <file>` on delivery, which
verifies every mechanical item on that list automatically. Editorial depth is
reviewed by hand.
