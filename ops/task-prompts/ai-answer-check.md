AI ANSWER CHECK (Saturdays, 7 AM Central)
Read and follow SHARED RULES below first. No repo changes in this task.

1. Read ai/questions.list.
2. For each question: run WebSearch with the question exactly as written (this is what Claude and similar AI search tools see). Record the domains of the results in order. Then answer the question yourself in two or three sentences from those results only, as an AI assistant would, and note which sources you relied on.
3. Write ai_results/<short-slug-of-question> = {question, citesMe (true if emilypaigeandco.com appears in the top 10 results or in the sources you relied on), myRank (position of emilypaigeandco.com or null), cited: [top 5 domains, most prominent first], checkedAt, engine:"Claude web search"}. Also append {date, citesMe, myRank} to that doc's `history` array (keep the last 12).
4. For questions where competitors are cited and Emily is not, and no pending changes doc covers it, add a changes doc: title "Answer this better: <question>", why = who is cited now and what a better answer from Emily would cover. (The blog drafter also reads ai_results.)
5. Run log.
