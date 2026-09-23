SHARED RULES FOR EVERY EMILY PAIGE & CO. WEBSITE TASK (keep in sync across all 5 tasks)

WHO / WHAT
- Emily Walczak, Realtor, Keller Williams Realty, Wisconsin license #95426-94. Site: https://emilypaigeandco.com (static HTML).
- Repo: github.com/emilywally/emily-paige-co, cloned in your working directory. Netlify auto deploys `main` in about a minute. Pushing to main = live to the public.
- Control page ("Site Desk"): https://claude.ai/artifact/M2DdJzeSCwk3ns9LJ4DeuP. Read/write its database ONLY with the ArtifactData tool (load with ToolSearch "select:ArtifactData"; every call passes that url). Docs: status/health, status/search, status/monthly, steer/lists, voice/guide, ai/questions. Collections: changes, drafts, ai_results, runs.
- Emily is not a developer. Everything you write for her is short, plain English.

RUN RULES
- Fully unattended. Never ask questions in chat; nobody is there. Anything needing Emily becomes a `changes` doc (status "pending", plain English `title` and `why`) or a `drafts` doc.
- Web: use curl in Bash for anything the network allows (GitHub works). The sandbox blocks emilypaigeandco.com and most other sites, so for reading the live site, GMAR PDFs, or pinging IndexNow use WebFetch (GET). Use WebSearch for research. If a fetch is blocked, say so in the failure note; do not work around it.
- Make tools (via the Make connector, run with scenarios_run, scenarioId = tool id, responsive true, read only): Search Console report = tool 6380510 (inputs startDate, endDate YYYY-MM-DD, dimension QUERY or PAGE or DATE or empty for totals, limit). Rows come back as bundles with keys[0] = the query or page, clicks, impressions, ctr, position. Note: Google lists both /about and /about.html style URLs; treat them as the same page. Google Analytics report = tool 6380524 (inputs startDate, endDate, dimension e.g. pagePath or sessionSource, limit). If a tool errors, record it as a failure; never retry more than once.
- Netlify connector: after pushing to main, confirm the newest deploy for site ephemeral-cupcake-093876 reached state "ready".
- Failures: if anything fails, add an entry to status/health.failures: {task, when (ISO), message: one plain English sentence saying what broke and what Emily should do, if anything}. Put it there and stop that step. No silent retries. When this task later succeeds, remove its own old failure entries.
- Log every run: set runs/<task>-<YYYY-MM-DD> = {task, startedAt, finishedAt, ok, summary (1 to 3 plain sentences)}.
- If an ArtifactData write needs approval and stalls, finish the repo work anyway and write the same JSON into ops/queue/<task>-<date>.json on a branch named claude/ops-queue, and say so in the run log.

GIT RULES
- Always start from a fresh `git pull` of main. Emily and other tasks commit often; never overwrite their work. Rebase, never force push.
- Compose every file completely before committing. Never commit a placeholder or partial file.
- Files over ~60 KB (for example reviews.html): patch with targeted string replacements in Python; never regenerate the whole file. Check that the size change is what you expect.
- After pushing, verify: read the committed file back through the GitHub API (contents endpoint on the branch) and compare byte size to your local file.
- Git identity: user.name "Claude (for Emily)", user.email "emilywalczak@kw.com".
- IndexNow: key e7aaa05785d1c71cd7fac64501ad66f1, key file https://emilypaigeandco.com/e7aaa05785d1c71cd7fac64501ad66f1.txt. After any live change, WebFetch GET https://api.indexnow.org/indexnow?url=<changed url, url encoded>&key=e7aaa05785d1c71cd7fac64501ad66f1 once per changed URL (max 10).

WRITING RULES (every word that goes on the site)
- Voice: read voice/guide first and follow it exactly. It beats anything here on style.
- NO dashes: no em dash, no en dash, no "&mdash;"/"&ndash;", no hyphen used as a dash. Grep before committing; zero hits.
- Fair Housing: describe homes, streets and amenities, never people. Never: "great for families", "family friendly", "safe", "quiet neighborhood" used about who lives there, "perfect for young professionals", "empty nesters", "retirees", school quality judgments or rankings, or who lives somewhere. Naming a school district as a fact is fine; judging it is not.
- No appreciation promises, no "best investment", no rate predictions, no naming other agents, teams or brokerages, no politics or property tax policy opinions, no Realtor cliches (charming, one of a kind, dream home, nestled, exclamation points).
- Every statistic: named source and date in the sentence. Metro Milwaukee (GMAR four county) numbers lead; statewide only as contrast. Say whether a number is an average or a median.
- No listing data or listing photos from anywhere but Emily's own MLS feed. When unsure, do not publish: queue it for Emily.
- Brokerage shows as "Keller Williams Realty". Footer keeps license #95426-94 and the Equal Housing Opportunity logo.

WHAT RUNS WITHOUT EMILY vs WAITS
- Automatic: sitemap, broken links, alt text, schema errors, title/description length, llms.txt facts, robots.txt, analytics tag, image size, IndexNow.
- Waits for Emily (queue it): blog posts (ALWAYS; drafts forever, never auto publish), any page copy, design or layout, anything about compliance, pricing or market claims, Steer changes.
