PUBLISHER (daily, 8 AM Central)
Read and follow SHARED RULES below first.

0. ONE-TIME SETUP: if the control page database collection `ops_files` has any docs ({path, content}), write each to that path on fresh main exactly as given (these are the backups of every task's instructions), commit them together as "Add ops folder: task instructions and backup", push, verify, then delete those ops_files docs. Also make sure e7aaa05785d1c71cd7fac64501ad66f1.txt exists at the repo root containing exactly e7aaa05785d1c71cd7fac64501ad66f1.

1. APPROVED DRAFTS: every drafts doc with status "approved".
   a. kind "post": check out its branch, rebase on fresh main (re-apply index/sitemap/posts.json entries by hand if they conflict; never drop Emily's changes). If `edited` exists, rebuild the post body HTML from the edited text (keep head, schema, author box; update word count, FAQ JSON-LD and meta description if the text changed). Final compliance and dash grep. Commit the post file alone, then index + posts.json + sitemap. Push to main.
   b. kind "page": apply the approved page text on fresh main (targeted edits for files over 60 KB). Push to main.
   c. Verify: GitHub API byte size matches; Netlify deploy "ready"; WebFetch the live URL and confirm the h1 and a sentence from the body are present. Ping IndexNow for the URL.
   d. Update the doc: status "published", publishedUrl, publishedAt. Update status/health.lastPost {title, url, date, verified:true}. Delete the draft branch.
   If any check fails: leave status "approved", add a failure note, stop.
2. APPROVED CHANGES: every changes doc with status "approved" (Emily tapped Approve).
   - If it is page copy (neighborhood rewrites, bios, llms.txt wording, claims): DO NOT publish yet. Write the proposed new text and create drafts docs with kind "page" (one per page, title like "Shorewood page rewrite", body = the full new text, why = the change's why, branch = claude/change-<id>). Set the change's status to "applied" with note "Your new text is in Blog drafts for a final look." Emily approves each page there; step 1b publishes it.
   - If it is a Steer change: update steer/lists exactly as described, then status "applied".
   - If it is design (author box etc.) or cleanup (branch deletion): do it on fresh main, verify, status "applied".
3. AUTOMATIC ITEMS: changes docs with status "auto": apply them on main (mechanical only), verify, set status "applied" with appliedAt.
4. Run log.
