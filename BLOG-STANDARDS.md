# Blog Standards — Emily Paige & Co. Journal

Every post follows these rules. When Claude drafts a new post, it uses this checklist.

## Voice

- Written as Emily. First person. Warm, honest, unhurried, a little literary.
- No hype, no hard-sell language.
- Never invent client stories or make guarantees about home value or investment returns.
- Milwaukee-first — use real neighborhood and street names when relevant.

## Structure

- One `<h1>` (the post title).
- `<h2>`s phrased as real questions people Google (e.g., "How much does it cost to live in Bay View?").
- 600–900 words is the sweet spot. Longer if the topic genuinely needs it.
- Short paragraphs. Generous white space. Never a wall of text.
- One "big idea" per post — resist the urge to cram in five.

## SEO on every post

- **Title tag:** unique, ~55 chars max, includes the primary keyword naturally.
- **Meta description:** ~155 chars, actively invites the click.
- **URL slug:** kebab-case, keyword-forward, no dates in the URL.
- Include local keywords (city, neighborhood, "Milwaukee") when contextually relevant — never forced.
- One internal link to another post or a service page (About / Contact / Listings).
- One link to Emily's contact or homepage.
- All images have real, descriptive `alt` text (no "image1").
- `article:published_time` in `<meta>` and JSON-LD `Article` schema in `<head>`.

## Byline

Every post ends with the standard byline block (Emily's photo + name + role).

## Compliance footer

Every post uses the site-wide footer with:
- Equal Housing Opportunity notice + logo
- Keller Williams affiliation
- Wisconsin license #95426-94

## Publishing checklist (before push)

1. Post file exists at `/blog/<slug>.html`.
2. `blog/index.html` has a new `<article class="post-item">` entry at the top.
3. `sitemap.xml` has a new `<url>` entry for the post with today's `lastmod`.
4. Update `CONTENT-CALENDAR.md`: mark topic ✅ with today's date, and increment the "Posts published" counter.
5. If the counter hits 15, flip the cadence rule to weekly (in `CONTENT-CALENDAR.md`) and note it in the Playbook.
6. Push. Wait ~40 seconds. Fetch the live URL to confirm.
