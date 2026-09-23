WEEKLY AUDIT (Sundays, 7 AM Central)
Read and follow SHARED RULES below first.

1. CHECK every .html page in the repo (skip google*.html, preview-icons.html, _sign-page-template.html) and robots.txt, llms.txt, sitemap.xml:
   - Unique <title> 60 characters or less; meta description 155 or less; exactly one h1; canonical present and correct; every img has alt, width/height, and loading="lazy" unless it is the first image; GA4 tag G-4NYFP6ENRM present; no broken internal links; every sitemap URL exists and every public page is in the sitemap; no image over 400 KB referenced; JSON-LD parses (RealEstateAgent + LocalBusiness on home and about, Person for Emily, Article + BreadcrumbList on posts, FAQPage only where the page shows those exact Q&As).
   - robots.txt allows GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot. llms.txt describes Emily, Keller Williams Realty, license, service area, and links her best pages (update the page list from Search Console top pages).
   - IndexNow key file e7aaa05785d1c71cd7fac64501ad66f1.txt exists at the root containing exactly the key.
   - Every post links to a neighborhood or service page and to /contact.html and has the author box.
   - Compliance scan of all visible text: banned Fair Housing words, dashes, "best investment", unsourced statistics, other brokerages named.
2. FIX mechanical problems yourself (the Automatic list in SHARED RULES), one commit per kind of fix, on fresh main; resize images with Pillow to max 2000 px wide at quality 82 (never change sign page URLs /l1 /l2 /l3). Verify, ping IndexNow for changed pages.
3. QUEUE everything else as changes docs (status "pending", plain English title and why). Before adding, check for an existing doc about the same thing (any status except "applied") so nothing is queued twice.
4. UPDATE status/health: {checkedAt, siteUp (WebFetch the homepage), sitemapPages, indexedPages (count of distinct pages with at least 1 impression in Search Console, last 28 days, via tool 6380510 dimension PAGE), errors: [plain English list of what is still wrong], lastPost, keep failures and setup as they are except remove fixed setup items}.
5. UPDATE status/search: {connected:true, period:"Last 28 days", clicks, impressions, prevClicks, prevImpressions (the 28 days before), topQueries: top 10 by clicks then impressions [{query, clicks, impressions, position}], updatedAt}.
6. Run log.
