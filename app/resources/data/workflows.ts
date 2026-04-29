export type WorkflowStep = {
  title: string
  description: string
  prompt: string
  tip: string
  watchOut: string
}

export type WorkflowLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export type Workflow = {
  id: string
  title: string
  useCase: string
  description: string
  tool: string
  timeSaved: string
  estimatedTime: string
  level: WorkflowLevel
  bestFor: string[]
  steps: WorkflowStep[]
}

export const workflows: Workflow[] = [
  {
    id: 'daily-task-planning',
    title: 'Daily Task Planning with AI',
    useCase: 'Productivity',
    description: 'Start every morning with a prioritized, realistic plan by using AI to sort, trim, and sequence your task list based on what actually matters today.',
    tool: 'ChatGPT / Claude',
    timeSaved: '20–30 min/day',
    estimatedTime: '10 min to complete',
    level: 'Beginner',
    bestFor: [
      'Founders and operators who start the day with a sprawling task list and no clear order',
      'Anyone who regularly ends the day with 90% of their tasks unfinished',
      'Small teams where one person is juggling multiple roles',
    ],
    steps: [
      {
        title: 'Brain dump your task list',
        description: 'Get everything out of your head and into one place before asking AI to help — the input quality directly determines the plan quality.',
        prompt: `I need to do a brain dump before planning my day. Ask me up to 10 questions, one at a time, to help me surface everything I need to get done today and this week. Start with the most important question first.

After I have answered all your questions, compile a complete flat list of every task I mentioned, exactly as I described it — no edits, no grouping yet.`,
        tip: 'Do this before you open email or Slack. Your brain dump is more accurate when you are not yet reacting to other people\'s priorities.',
        watchOut: 'Do not filter yourself during the dump. Include tasks that feel small or embarrassing to still have on the list — those are often the ones causing the most drag.',
      },
      {
        title: 'Separate urgent from important',
        description: 'Not everything on your list deserves your morning energy — this step forces an honest ranking before you commit to anything.',
        prompt: `Here is my full task list for today:
[PASTE YOUR TASK LIST]

Today's date: [DATE]
My main role: [FOUNDER / OPS / SALES / ETC]
Any hard deadlines I know about today: [LIST THEM OR "none"]

Sort these tasks into 3 buckets:
1. Must do today — has a real consequence if not done
2. Should do today — moves something important forward but no hard deadline
3. Can wait — low stakes, can defer without real cost

Be honest. Flag anything that sounds important but probably does not need to happen today. Do not add tasks I did not mention.`,
        tip: 'If more than 5 tasks land in "must do today," push back on yourself. Most "urgent" things are not actually urgent.',
        watchOut: 'AI will sometimes move everything to bucket 1 if you frame your list as urgent. Use the hard deadline field honestly — it helps the model calibrate.',
      },
      {
        title: 'Build a sequenced daily plan',
        description: 'Turn the sorted buckets into an ordered, time-blocked schedule you can actually follow.',
        prompt: `Here is my prioritized task list from the previous step:

Must do today:
[LIST]

Should do today:
[LIST]

Additional context:
- My best focus hours are: [MORNING / AFTERNOON / EVENING]
- I have meetings today at: [TIMES OR "none"]
- I have approximately [X] hours of uninterrupted work time

Create a realistic time-blocked daily plan using only the "must do" tasks. Slot "should do" tasks into any gaps. Leave at least 30 minutes as buffer — do not fill every hour.

Format: Time | Task | Estimated duration | Notes`,
        tip: 'Protect your first 90 minutes of focus time before any meetings start. That window is where your best work happens.',
        watchOut: 'AI tends to underestimate task durations. If a task gets flagged as "30 minutes," assume 45. Add your own buffer on top of the AI\'s estimate.',
      },
      {
        title: 'Write your one-sentence daily intention',
        description: 'Anchor the plan to a single outcome so the day has a clear definition of success, not just a list of things to complete.',
        prompt: `Based on this plan:
[PASTE YOUR TIME-BLOCKED PLAN]

Write one sentence that completes this prompt: "Today is a success if I _______."

It should reference a specific outcome, not a task. For example: not "send the proposal" but "get the proposal in front of [client] so they can make a decision."

Give me 3 options. I will choose one.`,
        tip: 'Pin this sentence somewhere visible — top of your notes app, your whiteboard, or as a pinned message to yourself in Slack.',
        watchOut: 'If all 3 options feel vague, your plan may be too scattered. That is a signal to cut one more task and go deeper on fewer things.',
      },
    ],
  },
  {
    id: 'weekly-report',
    title: 'Weekly Operations Summary',
    useCase: 'Reporting',
    description: 'Turn raw notes, Slack threads, and task lists into a clean executive summary your leadership or investors can actually read.',
    tool: 'ChatGPT / Claude',
    timeSaved: '1–2 hrs/week',
    estimatedTime: '15 min to complete',
    level: 'Beginner',
    bestFor: [
      'Ops leads who write the same update every Friday afternoon',
      'Founders who need to keep a board or investors in the loop without spending an hour on formatting',
      'Team leads summarizing progress for a weekly all-hands',
    ],
    steps: [
      {
        title: 'Collect your raw material',
        description: 'Pull everything you would normally paraphrase into one paste — the more raw the input, the more accurate the summary.',
        prompt: `I am going to give you raw material from my week: notes, task updates, Slack messages, or bullet points. Do not summarize yet. Just confirm you received it and tell me how many distinct topics or projects you identified.

Here is the raw material:
[PASTE EVERYTHING]`,
        tip: 'Include Slack threads, your task app\'s completed list, and any quick notes you jotted down. The AI is doing the synthesis work — give it everything.',
        watchOut: 'Do not pre-edit before pasting. Filtering before the brain dump means you will miss things. Clean up happens in the next step.',
      },
      {
        title: 'Generate the summary',
        description: 'Have the AI structure everything into a clean, scannable weekly update with the standard four sections.',
        prompt: `Using the material I just gave you, write a weekly operations summary with these four sections:

1. Wins — completed, shipped, or closed this week. Be specific.
2. In Progress — what is actively moving. Include who owns it if mentioned.
3. Blockers — anything stuck, waiting on a decision, or behind schedule.
4. Next Week — top 3 priorities only. One sentence each.

Tone: direct and factual. Bullet points under each section. One sentence per bullet. No filler, no commentary, no "great week everyone."`,
        tip: 'This output is usually 80% ready to send. Read it once for accuracy, not for style — the style is already set by the prompt.',
        watchOut: 'Check that blockers are real, not softened. AI sometimes reframes blockers as "areas of focus." If something is stuck, say it is stuck.',
      },
      {
        title: 'Trim and personalize',
        description: 'Make one pass to cut anything that does not need to be in a leadership update and add any context the AI could not have known.',
        prompt: `Here is my draft summary:
[PASTE DRAFT]

The audience for this update is: [LEADERSHIP / BOARD / INVESTORS / TEAM]

Review the draft and:
1. Flag any bullet that is too tactical for this audience (things they do not need to track)
2. Flag any bullet that is missing context a non-operator would need to understand
3. Suggest one sentence I could add to make the "Next Week" section feel more intentional

Do not rewrite the whole thing — just flag and suggest.`,
        tip: 'Tactical details (individual task names, tool names your audience does not use) can go. Outcomes and blockers always stay.',
        watchOut: 'If you skip this step and send the raw AI output, you will occasionally send something that is technically accurate but reads wrong for the context. One pass prevents that.',
      },
    ],
  },
  {
    id: 'cold-email',
    title: 'Cold Outreach Email',
    useCase: 'Sales',
    description: 'Write a short, specific cold email that leads with relevance and a clear ask — built in steps so each part does its job.',
    tool: 'ChatGPT / Claude',
    timeSaved: '20 min per prospect',
    estimatedTime: '12 min to complete',
    level: 'Beginner',
    bestFor: [
      'Founders doing their own outbound before they have a sales team',
      'SDRs who want to write better emails faster',
      'Consultants reaching out to a specific list of target accounts',
    ],
    steps: [
      {
        title: 'Research the specific reason to reach out',
        description: 'Before writing a word, identify the one signal that makes this prospect worth contacting right now.',
        prompt: `I am planning to reach out to a prospect. Help me identify the strongest possible reason to contact them specifically, right now.

Prospect: [NAME, TITLE, COMPANY]
What they do: [ONE LINE]
Why I think they might need what I offer: [YOUR HYPOTHESIS]
Any recent news I know about them: [FUNDING / HIRING / NEW PRODUCT / ETC OR "nothing specific"]

Based on this, what is the strongest opening angle? Give me 3 options ranked by likely relevance to them. One sentence each.`,
        tip: 'A job posting on their site is a better opening signal than "I came across your company." Check LinkedIn and their website before running this step.',
        watchOut: 'If you have no specific signal at all, do not send a cold email yet — or at least be honest that you are reaching out broadly. Fake specificity is worse than no specificity.',
      },
      {
        title: 'Write the email',
        description: 'Use the strongest opening angle from step 1 to write a tight, low-friction email with a single clear ask.',
        prompt: `Write a cold outreach email with the following inputs:

- Sender: [YOUR NAME], [YOUR COMPANY] — what we do: [ONE LINE]
- Recipient: [FIRST NAME], [TITLE] at [COMPANY]
- Opening angle: [USE THE BEST ANGLE FROM STEP 1]
- What I am offering or asking for: [SPECIFIC ASK]
- Desired outcome: [BOOK A CALL / GET A REPLY / INTRO TO SOMEONE]

Rules:
- Subject: 6 words or fewer, no clickbait, no question marks
- First line: references the opening angle directly
- Body: 3–4 sentences max
- CTA: one ask, low friction (e.g., "Worth a 20-minute call?" not "Let me know your availability")
- No "I hope this finds you well" or similar

Write 2 versions — one direct, one softer.`,
        tip: 'Read both versions out loud. The one that sounds like a human wrote it is the one to send.',
        watchOut: 'If the body is more than 5 lines when rendered in an email client, it is too long. People skim on mobile.',
      },
      {
        title: 'Write the follow-up',
        description: 'Draft a short follow-up in case they do not reply — one bump, sent 4–5 days later, adding a different angle.',
        prompt: `Here is the original email I sent:
[PASTE EMAIL]

They did not reply. Write a follow-up email to send in 4–5 days that:
- References the first email in one line ("Bumping this up in case it got buried")
- Adds one new angle or piece of value I did not mention before — either a relevant result, a different framing, or a shorter ask
- Is 3 sentences or fewer
- Does not guilt them for not replying

If I have nothing new to add, suggest what kind of value I could include.`,
        tip: 'The follow-up should not repeat the first email. Think of it as a second chance to find the angle that resonates.',
        watchOut: 'Do not send more than 2 follow-ups on a cold outreach thread. A third bump almost never works and risks burning the contact.',
      },
    ],
  },
  {
    id: 'sop-writer',
    title: 'SOP from Brain Dump',
    useCase: 'Operations',
    description: 'Describe a process out loud (or paste a rough walkthrough) and walk away with a clean, numbered SOP your team can follow without asking you questions.',
    tool: 'ChatGPT / Claude',
    timeSaved: '3–4 hrs per SOP',
    estimatedTime: '20 min to complete',
    level: 'Intermediate',
    bestFor: [
      'Operators documenting processes that only exist in one person\'s head',
      'Founders preparing to hand off a recurring task to a new hire',
      'Any team that regularly asks the same person "how do we do X again?"',
    ],
    steps: [
      {
        title: 'Record your brain dump',
        description: 'Walk through the process out loud or in a raw, unfiltered paragraph — the AI will clean it up in the next step.',
        prompt: `I am going to describe a business process in rough, unstructured language. Do not reformat yet. Just read it and ask me clarifying questions — one at a time — until you have enough to write a complete SOP.

Questions to ask if not covered:
- What triggers this process to start?
- Who runs it?
- How often does it happen?
- What tools or systems are involved?
- What does "done correctly" look like?
- What are the most common mistakes or edge cases?

Here is my brain dump:
[DESCRIBE THE PROCESS]`,
        tip: 'Speak or type it exactly as you would explain it to a new hire on their first day — informal and specific is better than polished and vague.',
        watchOut: 'Do not skip the clarifying questions round. SOPs built from the first draft alone usually miss edge cases that cause confusion later.',
      },
      {
        title: 'Generate the SOP draft',
        description: 'Turn the clarified process into a clean, numbered SOP formatted for your team to use without interpretation.',
        prompt: `Based on everything I described, write a Standard Operating Procedure in this format:

Title: [Process name]
Purpose: [One sentence — why this process exists]
Who runs this: [Role]
Frequency / Trigger: [When does it run?]
Tools required: [List]

Steps:
[Numbered list. Each step starts with an action verb. Include the tool or location where relevant. Flag any step with a decision point using: ⚠️ Decision required]

Edge Cases & Exceptions:
[List any "it depends" situations you mentioned]

Definition of Done:
[How does someone know the process was completed correctly?]

Do not add steps I did not describe. Flag anything ambiguous with [NEEDS CLARIFICATION] instead of guessing.`,
        tip: 'Read it as if you are the person doing the task for the first time. Anywhere you think "but wait, which one?" is a gap to fix.',
        watchOut: 'AI will sometimes add steps that seem logical but were not in your description. Check the output against your actual process, not against what sounds right.',
      },
      {
        title: 'Test and finalize',
        description: 'Run a quick review pass to catch anything missing before you hand it to your team.',
        prompt: `Here is the SOP draft:
[PASTE SOP]

Please review it and:
1. List any steps that are ambiguous (could be done multiple ways without more guidance)
2. Identify any tools or systems mentioned that a new person might not know how to access
3. Check if the "Definition of Done" is specific enough to verify — or just vague
4. Suggest one thing to add that would make this SOP usable by someone with zero prior context

Do not rewrite the whole SOP — just flag the issues.`,
        tip: 'Have someone else on your team read the final version and point out anything confusing. What feels obvious to you is often unclear to someone new.',
        watchOut: 'A SOP that takes more than 10 minutes to read will not be used. If it is getting long, split it into two processes.',
      },
    ],
  },
  {
    id: 'competitor-analysis',
    title: 'Competitor Snapshot',
    useCase: 'Research',
    description: 'Paste a competitor\'s website copy and come away with a structured read on their positioning, gaps, and the angle you can use against them.',
    tool: 'ChatGPT / Claude',
    timeSaved: '1–2 hrs per competitor',
    estimatedTime: '20 min to complete',
    level: 'Intermediate',
    bestFor: [
      'Founders preparing for investor questions about the competitive landscape',
      'Sales and marketing teams refreshing their battle cards',
      'Anyone considering entering a market and needing a fast read on who is already there',
    ],
    steps: [
      {
        title: 'Pull and paste their positioning copy',
        description: 'Collect the raw text from the pages that tell you the most about how they position themselves.',
        prompt: `I am going to paste copy from a competitor's website. This will include their homepage, pricing page, and any "how it works" or "about" page text. Do not analyze yet — just confirm you received it and tell me:
1. What problem they appear to be solving (one sentence)
2. Who they appear to be speaking to (one sentence)

Here is the copy:
[PASTE HOMEPAGE + PRICING + ABOUT TEXT]`,
        tip: 'Use a browser extension like Markdown Web Clipper or just copy the text directly. Ignore nav items and footer links — focus on headline copy, subheadings, and body paragraphs.',
        watchOut: 'Do not include testimonials or case study stats in this step — save those for the proof points pass. Mixed input makes the positioning read less clean.',
      },
      {
        title: 'Run the positioning breakdown',
        description: 'Extract the core strategic elements: how they talk, who they target, what they claim, and where they are vulnerable.',
        prompt: `Analyze the competitor copy I gave you and produce:

1. Positioning — the core problem they claim to solve and how they frame it
2. Target customer — company size, role, industry they appear to be targeting
3. Key value props — their top 3–4 claimed advantages, quoted or closely paraphrased
4. Tone — how they sound (one sentence: formal vs casual, technical vs plain, urgent vs calm)
5. Proof points — stats, customer logos, case study mentions, certifications
6. Gaps — things they do not address that a buyer would want to know
7. Vulnerability — the one thing a competitor could say to win deals they are probably losing

Be specific. Quote their words where useful.`,
        tip: 'The "gaps" section is usually the most valuable. Look for things that are conspicuously absent — pricing transparency, a specific use case, a type of customer they never mention.',
        watchOut: 'AI will sometimes generate plausible-sounding gaps that are not real. Cross-check the gaps section against the actual copy before using it in sales material.',
      },
      {
        title: 'Build your differentiation statement',
        description: 'Use the analysis to write one sharp sentence that positions you against this competitor specifically.',
        prompt: `Here is the competitor analysis:
[PASTE ANALYSIS FROM STEP 2]

Here is how I would describe my own company:
- What we do: [ONE LINE]
- Who we serve: [TARGET CUSTOMER]
- Our main advantages over competitors: [2–3 POINTS]

Write 3 one-sentence differentiation statements I could use against this specific competitor. Each should:
- Be written from the customer's perspective (what they get, not what we do)
- Directly address one of the gaps or vulnerabilities you identified
- Be usable in a sales conversation without sounding defensive

Then tell me which one is strongest and why.`,
        tip: 'The best differentiation statements mention something the competitor cannot easily copy, not just something you do better today.',
        watchOut: 'Do not build differentiation around price unless it is a durable advantage. Price can always be matched.',
      },
    ],
  },
  {
    id: 'job-post',
    title: 'Job Description Writer',
    useCase: 'Hiring',
    description: 'Turn a rough role idea into a clean, honest job post that attracts the right people and screens out the wrong ones — without spending a day on it.',
    tool: 'ChatGPT / Claude',
    timeSaved: '2–3 hrs per hire',
    estimatedTime: '15 min to complete',
    level: 'Beginner',
    bestFor: [
      'Founders writing their first few job descriptions without an HR team',
      'Hiring managers who keep recycling the same vague JD template',
      'Any team adding a new role and trying to define it clearly before posting',
    ],
    steps: [
      {
        title: 'Define the role before writing a word',
        description: 'Get clear on what success looks like in this role first — a well-defined role produces a better post and a better hire.',
        prompt: `I need to hire for a new role. Before I write the job description, help me get clear on what this role actually is.

Ask me these questions, one at a time:
1. What is the one outcome this person is responsible for in their first 90 days?
2. What does a bad hire in this role look like — what mistakes would they make?
3. What does a great hire do differently than an okay hire?
4. What are 3 things this person will do every single week?
5. What is one thing I keep saying I need to do that this person will take over?

After I answer all five, summarize the role in 3 bullet points.`,
        tip: 'The answers to "what does a bad hire look like" and "what does a great hire do differently" are often more useful than any job requirement you write.',
        watchOut: 'If you cannot answer question 1 (the 90-day outcome), stop and think before posting. Hiring without a clear outcome is how you get a misaligned hire.',
      },
      {
        title: 'Write the job description',
        description: 'Use your clarity from step 1 to generate a post that is honest, specific, and actually worth applying to.',
        prompt: `Write a job description using the following inputs:

Role title: [ROLE]
90-day outcome: [FROM STEP 1]
Weekly responsibilities: [3 THINGS THEY DO EVERY WEEK]
Must-have experience: [NON-NEGOTIABLES]
Nice-to-have: [OPTIONAL BONUSES]
Compensation: [RANGE OR "not listed"]
Location: [REMOTE / HYBRID / IN-OFFICE + CITY]
Company: [NAME + 1 SENTENCE DESCRIPTION]

Format:
- Open with a 2-sentence pitch for why this role exists and why it matters
- "What you will do" — clear action items ("You will…"), not vague duties
- "What we are looking for" — must-haves first, nice-to-haves clearly separated
- "What makes this role worth taking" — honest, specific, no corporate fluff
- Compensation and location at the bottom

No "fast-paced environment," "team player," "wear many hats," or similar. Be direct.`,
        tip: 'The "what makes this role worth taking" section is where most JDs fail. Write what is actually good about this job, not what sounds good.',
        watchOut: 'Do not list every tool you use as a requirement unless it is truly non-negotiable. Long requirements lists screen out good candidates who could learn quickly.',
      },
      {
        title: 'Write 3 screening questions',
        description: 'Add application questions that reveal judgment and self-awareness, not just experience.',
        prompt: `Here is the job description I just wrote:
[PASTE JD]

Write 3 application screening questions that:
- Cannot be answered well with a generic answer copied from the internet
- Reveal how this person actually thinks about the work
- Are answerable in 3–5 sentences (not essays)
- At least one question should surface a potential weakness or failure the candidate has experienced

For each question, explain in one sentence what a strong answer would reveal.`,
        tip: 'The best screening questions have no "right" answer — they show you how someone thinks under a small amount of pressure.',
        watchOut: 'Avoid questions that are really just "tell me about your experience with X." Those answers are easy to polish. Ask for judgment, not résumé recitation.',
      },
    ],
  },
  {
    id: 'client-followup',
    title: 'Client Follow-up Email',
    useCase: 'Client Management',
    description: 'After a client call or project milestone, generate a crisp follow-up that confirms decisions, owns next steps, and keeps the project moving.',
    tool: 'ChatGPT / Claude',
    timeSaved: '15 min per follow-up',
    estimatedTime: '8 min to complete',
    level: 'Beginner',
    bestFor: [
      'Consultants and agencies following up after every client touchpoint',
      'Project managers keeping external stakeholders aligned',
      'Founders who delay follow-ups because "I\'ll write it when I have more time"',
    ],
    steps: [
      {
        title: 'Dump the call notes',
        description: 'Before anything else, get the key points out of your head while they are fresh — the AI will structure them.',
        prompt: `I just finished a client call and need to write a follow-up email. I am going to give you my rough notes. Do not write the email yet — just organize what I gave you into:
1. What was discussed or completed
2. Decisions made (explicit yes/no or approvals)
3. Next steps (task + owner + deadline if mentioned)
4. Open questions (things that came up but were not resolved)

Flag anything that is unclear with [UNCLEAR — confirm?].

Here are my rough notes:
[PASTE CALL NOTES]`,
        tip: 'Jot notes during the call, not after. Even rough shorthand — "JT to send contract by Fri" — is enough for this step to work.',
        watchOut: 'If you cannot remember who owns a next step, mark it as TBD and confirm in the email. Assuming ownership leads to things falling through.',
      },
      {
        title: 'Write the follow-up email',
        description: 'Turn the organized notes into a professional, scannable email the client can act on in under two minutes.',
        prompt: `Using the organized notes from the previous step, write a follow-up email that:
- Opens with one specific, genuine observation from the call (not "Great speaking with you!")
- Summarizes key decisions and context in 2–3 bullets
- Lists next steps in a clear format: Task | Owner | Due Date
- Closes with one specific ask or confirmation I need from the client
- Is under 200 words total

Audience: [CLIENT NAME OR DESCRIPTION]
Tone: professional but not stiff. Direct.

Organized notes:
[PASTE ORGANIZED NOTES FROM STEP 1]`,
        tip: 'The opening line sets the tone. Something like "Glad we clarified the timeline question — that was the right call" lands better than any generic opener.',
        watchOut: 'Keep next steps to 5 or fewer in any single follow-up. If there are more, the email becomes a to-do list and nothing gets done.',
      },
    ],
  },
  {
    id: 'meeting-notes',
    title: 'Meeting Notes to Action Items',
    useCase: 'Operations',
    description: 'Paste raw meeting notes or a transcript and come away with a clean action item table, decisions log, and open questions list.',
    tool: 'ChatGPT / Claude',
    timeSaved: '20–30 min per meeting',
    estimatedTime: '5 min to complete',
    level: 'Beginner',
    bestFor: [
      'Team leads who run recurring standups or project syncs',
      'Operations managers responsible for tracking decisions across multiple meetings',
      'Anyone who leaves meetings not sure who owns what',
    ],
    steps: [
      {
        title: 'Extract the structured outputs',
        description: 'Have the AI do the first pass — pulling decisions, owners, and open questions directly from the raw notes.',
        prompt: `Here are notes (or a transcript) from a meeting. Extract:

1. Summary — 3 bullets on what this meeting was about and what was decided
2. Action Items — format as a table: Task | Owner | Due Date | Priority (High/Med/Low)
3. Decisions Made — explicit approvals, yes/no calls, or commitments
4. Open Questions — things that came up but were not resolved

Rules:
- Only include action items that were explicitly assigned or clearly implied by context
- Mark Owner as "TBD" if no one was assigned
- Mark Due Date as "TBD" if no date was mentioned
- Flag action items with no owner as [UNASSIGNED]

Meeting notes:
[PASTE NOTES OR TRANSCRIPT]`,
        tip: 'If you record your meetings, paste the auto-transcript directly. Most tools (Zoom, Google Meet, Otter) generate one — do not transcribe by hand.',
        watchOut: 'Auto-transcripts often mis-attribute who said what. Review ownership assignments carefully before sending to the team.',
      },
      {
        title: 'Assign and send the recap',
        description: 'Use the extracted outputs to build a short recap message to send to the team within an hour of the meeting.',
        prompt: `Here are the extracted outputs from the previous step:
[PASTE ACTION ITEMS AND DECISIONS]

Write a short meeting recap message to send to the team. Format:
- One line: what the meeting covered
- Decisions made (bullets)
- Action items (the table)
- Open questions, with a note on who should answer each one by when

Tone: direct and clear. This is not a summary for a manager — it is a working doc for the team.
Length: short enough to read in 90 seconds.`,
        tip: 'Send this within the hour. Memory decays fast and people move on to the next thing. A recap sent the next day is half as useful.',
        watchOut: 'If the open questions section has more than 3 items, you probably need another meeting — or the decision-maker was not in the room.',
      },
    ],
  },
]
