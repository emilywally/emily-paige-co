# Website Update Playbook

Everything you need to know about emilypaigeandco.com, written so that you (or any future Claude chat) can pick it up cold.

Last updated: July 26, 2026

---

## The 30-second version

- **Your site:** https://emilypaigeandco.com
- **Where the files live:** github.com/emilywally/emily-paige-co
- **How it goes live:** anything pushed to the `main` branch publishes automatically in about a minute, via Netlify. There is no build step and no "publish" button.
- **How you change it:** you ask a Claude chat, and it edits the files and pushes.
- **A new blog post drafts itself every Monday at 7:07 AM.** You approve before it publishes.

---

## How to ask for a change

Start a Cowork chat and say what you want. Useful things to include:

> The site is at github.com/emilywally/emily-paige-co. The GitHub token is in my "My website" folder at `.website/gh_token`. Connect that folder so you can reach it.

If the folder is not connected to the chat, Claude cannot reach the token and cannot publish. Click **Add folder** in the Claude desktop app and pick `Documents/My website`.

**Ask for drafts to go to a branch, not to `main`, if you want to review first.** Pushing to `main` publishes immediately to the public.

---

## The GitHub token

There is a file at `Documents/My website/.website/gh_token`. It is the key that lets a Claude chat publish to your site. It was created July 24, 2026, four minutes after the repo itself, during the session that built the site.

Things worth knowing:

- It is plain text. Anything with access to your Documents folder can read it.
- **Never paste it into a chat, an email, or a webpage.** Point Claude at the file instead and it will read it directly.
- Rotating it occasionally is good hygiene. Go to github.com, then Settings, then Developer settings, then Personal access tokens. Delete the old one, generate a new fine-grained token scoped to **only** the `emily-paige-co` repository with **Contents: Read and write** permission, and paste the new value into that same file, replacing what is there.
- If you ever think it leaked, revoke it first and ask questions after. Revoking only breaks publishing, and a replacement takes two minutes.

---

## What is in the repo

| File | What it is |
|---|---|
| `index.html` | Homepage |
| `about.html` | About Emily |
| `listings.html` | Featured listings |
| `reviews.html` | Client reviews |
| `contact.html` | Contact page |
| `blog/index.html` | The Journal index, lists every post |
| `blog/*.html` | Individual posts, one file each |
| `styles.css` | One stylesheet for the whole site |
| `images/`, `videos/` | Photography and video |
| `sitemap.xml` | The list of pages handed to Google |
| `robots.txt`, `llms.txt` | Instructions for search crawlers and AI assistants |
| `netlify.toml` | Hosting config: caching, security headers, redirects |
| `404.html` | Custom page-not-found |
| `BLOG-STANDARDS.md` | The rules every blog post follows |
| `CONTENT-CALENDAR.md` | Topic backlog and what has been published |
| `google7fc*.html` | Google Search Console verification. **Do not delete.** |

---

## The two blog rules that matter most

Both live in `BLOG-STANDARDS.md`, and the Monday task enforces them.

**1. Milwaukee data, never statewide.** Your readers are in Milwaukee, and the Milwaukee market behaves differently from the rest of Wisconsin. Posts lead with Greater Milwaukee Association of REALTORS numbers covering the four-county metro (Milwaukee, Waukesha, Ozaukee, Washington). Statewide Wisconsin figures may appear only as a contrast, to show why the state number misleads. Every figure gets labeled as an average or a median, because GMAR publishes averages and those run higher than medians.

**2. No em dashes.** Not the long dash character, not the HTML version. Sentences get rewritten with a comma, colon, period or parentheses instead.

Other standards: written as you, first person, warm and unhurried, no hype. One `<h1>`. Section headings phrased as questions people actually Google. 600 to 900 words. Every statistic gets a named source and a date. Never invent a client story or guarantee what a home is worth.

---

## The weekly Monday post

**When:** every Monday, 7:07 AM Central.

**What it does:**

1. Clones your site.
2. Looks through Follow Up Boss for questions your leads actually asked in the last two to three weeks. A question two or more people asked is a strong signal.
3. Searches the web for what Milwaukee buyers and sellers are asking right now.
4. Picks the topic where those overlap, checking the calendar so it does not repeat itself. The 25-topic backlog in `CONTENT-CALENDAR.md` is only a fallback for weeks when both come up empty.
5. Researches current GMAR and Freddie Mac numbers.
6. Writes the post, updates the Journal index, sitemap and calendar.
7. Pushes it to a **draft branch**, never to `main`.
8. Sends you a preview and waits.

**Privacy guardrail:** it extracts the question only, never the person. No client names, addresses, phone numbers, or anything identifying ever reaches a post.

**To publish an approved draft,** ask a Claude chat to merge that branch into `main`. Or, in GitHub, open the branch, click Pull request, then Merge.

**To change the schedule, cadence, or rules,** just say so in a chat. The task is called "Weekly Journal draft (Emily Paige & Co.)".

**If Monday's draft never arrives,** the most likely cause is that your "My website" folder was not connected, so it could not reach the token. It is built to still write the post and send it to you as a file in that case, so check your notifications before assuming it failed.

---

## Google Search Console

Set up July 26, 2026. It shows the actual search terms people typed before landing on your site.

- **Property:** `https://emilypaigeandco.com`, verified by the `google7fc11344b7567d3b.html` file in your repo. Deleting that file silently un-verifies you.
- **Sitemap:** submitted.
- **Where to look:** search.google.com/search-console

Give it a few weeks before expecting anything useful. The report that matters is **Performance**, and the gold is queries where you rank around position 8 to 15. Those are ones where a single good post can move you onto page one. Bring those to a chat and they become blog topics.

**Optional after publishing a post:** paste the post URL into the search bar at the top of Search Console, wait for the check to finish, then click **Request Indexing**. It pushes that page to the front of Google's queue instead of waiting for a normal crawl.

---

## If something breaks

**The site looks wrong or a change did not appear.** Netlify takes about a minute. Hard refresh first: Cmd+Shift+R. If it is still wrong, log in to Netlify and check whether the most recent deploy failed.

**You published something you regret.** Nothing is ever really lost. Every version is kept in Git. Ask a chat to revert to the previous commit and it takes seconds.

**A Claude chat says it cannot reach the repo.** The folder is not connected. Click **Add folder** in the desktop app and pick `Documents/My website`.

**Something looks wrong in a published post.** Say so in a chat and ask for it to be fixed and pushed. Corrections are cheap. A wrong statistic sitting on your site under your license number is not.

---

## The things still on the list

- Rotate the GitHub token to one scoped to just this repo.
- Add real listings to `listings.html`, which is currently a placeholder.
- Consider Google Business Profile, which matters more than almost anything else for local real estate search.
