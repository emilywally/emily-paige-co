BLOG DRAFTER (Tuesdays and Thursdays, 7 AM Central)
Read and follow SHARED RULES below first.

1. LEARN FROM EMILY (do this before anything else)
   a. drafts docs with an `edited` field and no `learnedAt`: compare `edited` to `body`. Turn real patterns into 1 to 3 short rules (examples: "one sentence intros", "homes, not properties", "no exclamation points"). Merge into voice/guide `text`: keep it one page, merge duplicates, prune rules her edits contradict, never pile up. Append a changelog entry {date, change} saying what you added/changed in plain words. Set learnedAt on the draft.
   b. drafts with status "rejected" and no `learnedAt`: turn the `reason` into one Steer avoid item or one voice rule (whichever fits). Steer changes normally wait for approval, but a rejection reason is Emily's own instruction, so add it directly and note it in the voice changelog. Set learnedAt.
   c. drafts with status "changes": revise that draft first using her `notes` (and her `edited` text if present, which wins). Update the branch, set body to the new text, clear edited, revision += 1, status "pending". That counts as this run's draft; skip to step 6.
2. READ STEER (steer/lists: anchor = always cover over time, prefer = lean into, avoid = never) and voice/guide.
3. PICK THE TOPIC
   - Search Console (tool 6380510, last 28 days, dimension QUERY, limit 200): favor queries at position 5 to 20 with impressions, narrow and local. Skip anything stuck past position 50. Write next to what already ranks.
   - ai_results docs: questions where Emily is not cited but competitors are: a post that answers it better is a strong pick.
   - If Gmail is available: search the last 21 days for website form leads (formsubmit) and note repeated questions. Extract the QUESTION only, never the person.
   - Dedupe against blog/posts.json and all drafts docs (any status). No content calendar needed.
   - Ties go to Steer anchor topics and to first time buyers / sellers weighing flat fee brokerages.
4. RESEARCH: current GMAR monthly report (WebFetch the PDF on gmar.com), Freddie Mac PMMS for rates (as a dated fact, never a prediction), local specifics (real streets, parks, commute times, local rules like Milwaukee's point of sale requirements where relevant). Drop anything older than about two months.
5. WRITE (800 to 1,400 words): h1 is the question; the direct answer in the first two sentences; h2s phrased as real searches; local specifics; 3 to 5 question FAQ at the end with FAQPage JSON-LD for exactly those Q&As; one call to action to /contact.html; one link to the most relevant neighborhood or service page; author box (photo /images/team/ Emily headshot used on about.html, "Emily Walczak, Realtor, Keller Williams Realty, WI license #95426-94, helping Milwaukee buyers and sellers since 2021"). Article + BreadcrumbList JSON-LD, canonical, OG tags, article:published_time. Copy the structure of the newest post in blog/ as the template.
   Compliance pass: grep your text for every banned word in SHARED RULES and for dashes; fix all hits.
6. SAVE AS A DRAFT (never on main): branch claude/draft-<slug> from fresh main. Commit blog/<slug>.html alone, then a second commit adding the post to blog/index.html (top of .post-list), blog/posts.json and sitemap.xml. Push. Verify bytes via GitHub API.
7. SEND TO THE CONTROL PAGE: set drafts/<slug> = {kind:"post", title, slug, branch, words, summary (one sentence), why (one sentence: what data picked it), body (the post as plain text with "## " headings and blank lines between paragraphs, including the FAQ), status:"pending", revision, createdAt}.
8. Run log. Never publish. Never touch main.
