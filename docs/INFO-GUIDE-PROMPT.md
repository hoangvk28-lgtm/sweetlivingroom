# Prompt to paste into ChatGPT

Paste **this prompt**, then paste the full contents of `INFO-GUIDE-BRIEF.md`
directly underneath it, in the same message.

---

```
You are the staff writer for SweetLivingRoom.com, a living room furniture and
decor advice site. Below this prompt is the complete editorial brief. Treat it
as a specification, not as suggestions: every rule in it is checked by an
automated gate on delivery, and any article that fails is sent back unpaid.

Your job: write all 20 articles listed in section 6 of the brief, in order,
starting now, in this response.

Before you write, read the brief in full. Do not summarise it back to me, do not
confirm you understand it, do not ask which article to start with, and do not
ask any clarifying questions. If something is genuinely ambiguous, make the
choice a careful editor would make and keep writing.

Output format, exactly:

=== FILE: <slug>.html ===
<!--meta
...
-->
<p>...</p>

Then go straight into the next === FILE: line. Nothing between articles: no
commentary, no "here is article 3", no progress notes, no closing summary.

Hard limits, the five that fail most often:
1. 3,000 to 3,300 words of body prose per article. Under 2,900 is rejected.
2. Zero em dashes and zero en dashes anywhere in the output, including the meta
   block and alt text. Count them before you send.
3. metaTitle is 47 characters or fewer. metaDescription is 120 to 160
   characters. Count the actual characters; do not estimate.
4. Every <h2> carries a unique kebab-case id. One of them must be id="faq" with
   5 or more <h3> questions, and one must be id="bottom-line".
5. Internal links may only point at the paths listed in section 5 of the brief,
   plus /guide/<slug> for any of the 20 slugs in section 6. Never a trailing
   slash. A link to anything else is an automatic rejection.

Also rejected on sight: any dollar figure, any star rating or review count, any
claim that the site tested or tried a product, and any invented statistic,
standard or regulation.

If you run out of room in a response, stop at the end of the last COMPLETE
article and write only:

CONTINUE FROM #<n>

Never deliver a half-finished article, and never shorten the later articles to
fit more of them in. Articles 15 to 20 must be as detailed and as specific as
articles 1 to 5.

Begin with article 1 now.
```

---

## Continuation prompt

When it stops and prints `CONTINUE FROM #n`, reply with only this:

```
Continue from article #<n>. Same format, same rules, same length per article.
No recap, no commentary. Start with the === FILE: line.
```

---

## Operating notes

- Use the strongest reasoning model available, with the longest output setting.
  These articles are long and the quality drop on a weaker model is obvious in
  the specificity, which is exactly what this site competes on.
- Expect 3 to 6 continuations for 20 articles. That is normal, not a failure.
- Do not let it write into a canvas or a single document: the `=== FILE:` markers
  in plain chat output are what the splitter reads.
- Save the whole conversation output to one text file, then run:

  ```bash
  node scripts/info/split-delivery.mjs delivery.txt --out /tmp/slr-articles
  node scripts/info/check-article.mjs /tmp/slr-articles/*.html
  ```

- If a batch comes back with the same failure on many files, fix it by replying
  with the specific rule and the list of offending slugs, rather than
  regenerating everything.
