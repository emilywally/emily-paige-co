# Blog Standards: Emily Paige & Co. Journal

Every post follows these rules. When Claude drafts a new post, it uses this checklist.

## Voice

The governing brand document is **"Emily Paige Brand Strategy" (ERA Social)**. Where it conflicts with anything else, ERA wins. The older `brand-voice` doc is superseded; in particular ERA lists *excessive sentimentality* as something to avoid, so skip the "closing one chapter, opening another" framing.

Target register, per ERA: **warm, confident, conversational, personable, assured, lightly playful.** Conversational, never overly casual. When the topic turns to actual real estate substance, be clear, assured and direct. Personal without being overly familiar, elevated without being formal, playful without losing credibility.

- Written as Emily. First person.
- **Have an opinion and say it.** "My honest opinion, after watching a lot of people through it..." Hedged, neutral copy is off-brand.
- **Tell the uncomfortable truth plainly**, especially when it costs Emily something or corrects a hopeful assumption. "Almost never, and I would rather be straight with you than let you build a plan around it." This is the single most important trait.
- **One dry, light line per post**, not more. "Nobody enjoys owning two houses at once, but plenty of people have survived it."
- **Include the lifestyle and design lens.** ERA positions the brand at "where real estate, lifestyle and design meet." A post that is pure market mechanics is off-brand. Reach for what listing photos cannot show: afternoon light, how a layout suits a Tuesday, whether the kitchen works the way someone cooks.
- **Short declaratives and fragments for rhythm.** "Finding the next house." "A real path, and a nervous way to live."
- **Name the reader's real fear**, then reframe it with data rather than reassurance.
- **Do not name an objection the reader did not have.** Saying "this sounds self-serving" creates the doubt rather than defusing it. Give the reasoning and let it stand on its own.
- Milwaukee-first. Real neighborhood names. Bay View and Wauwatosa are not the same market.
- No hype, no hard sell, no status flex. Avoid corporate real estate language, stiff luxury phrasing, generic Realtor messaging, overly trendy language, and anything juvenile or performative.
- Never invent client stories or make guarantees about home value or investment returns.
- Sign off as an invitation, not a call to action. "I'd love to hear about it."
- **No em dashes.** Not the character, not the `&mdash;` entity. Rewrite the sentence instead: use a comma, a colon, a period, or parentheses. This is Emily's standing preference and applies to every post, headline, excerpt, and meta description.
- No emojis. No exclamation points.

## Data rules (non-negotiable)

Emily's readers are in Milwaukee. Statewide Wisconsin figures do not speak to them, and the Milwaukee market behaves differently from the rest of the state.

- **Lead with metro Milwaukee.** Primary source is the Greater Milwaukee Association of REALTORS® monthly report (gmar.com), covering Milwaukee, Waukesha, Ozaukee and Washington counties.
- Statewide WRA figures may appear **only as contrast**, to show why the state number misleads. Never as the headline number.
- Go to the county or neighborhood level wherever the data allows.
- Always label whether a figure is an **average or a median**. GMAR publishes averages, which run higher than medians.
- Every statistic needs a named source and a date. Discard anything more than roughly two months stale rather than presenting it as current.
- **Pair the MLS-wide number with Emily's own.** When days on market comes up, give the GMAR metro average and then Emily's own listing average (currently **3 days**), clearly labeled as hers and not an MLS-wide figure. Confirm the current number with Emily before publishing; it is not derivable from Follow Up Boss.
- **Do not present contingent offers as a realistic path.** Sellers accepting an offer contingent on the buyer's home sale is rare. The listings that do accept are typically homes needing significant work, or priced above market, that have been sitting. Say so.

## Structure

- One `<h1>` (the post title).
- `<h2>`s phrased as real questions people Google (e.g., "How much does it cost to live in Bay View?").
- 600–900 words is the sweet spot, up to ~1,000 when the topic genuinely earns it. Cut whole sections rather than sanding every sentence, which flattens the voice.
- Short paragraphs. Generous white space. Never a wall of text.
- One "big idea" per post. Resist the urge to cram in five.

## SEO on every post

- **Title tag:** unique, ~55 chars max, includes the primary keyword naturally.
- **Meta description:** ~155 chars, actively invites the click.
- **URL slug:** kebab-case, keyword-forward, no dates in the URL.
- Include local keywords (city, neighborhood, "Milwaukee") when contextually relevant, never forced.
- One internal link to another post or a service page (About / Contact / Listings).
- **Point sellers toward a listing appointment, early.** Do not tell a potential seller to hold off or "start with a conversation" instead. Getting in front of them sooner is the goal; frame the appointment as how they get the two numbers every other decision depends on, and note that it is not a commitment to list.
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
