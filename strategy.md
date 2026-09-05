# DEVELOPER OFFICE — WEBSITE CONTENT & DIGITAL EXPERIENCE STRATEGY

*A complete, build-ready specification: brand, content, information architecture, UI system, motion, mobile, SEO and conversion. Hand this directly to designers and developers.*

> **How to read this document.** Everything in normal type is final, publishable website copy. Everything in `[SQUARE BRACKETS]` is a placeholder that must be confirmed or supplied by Developer Office before launch. Design and behaviour notes are set off under **Visual / Build** headings. Nothing in this document invents a client, a statistic, an award, or a result. Where a fact was not verifiable from the current site, it is flagged.

---

## 1. EXECUTIVE SUMMARY

Developer Office is a thirty-year software engineering studio in Colombo that combines research, AI engineering and product delivery in a single dedicated team. The current website communicates this competently but modestly. It reads as a capable studio; it does not yet read as *the* studio you call when the problem is hard, the data is sensitive, and the system has to survive courts, banks and government registries.

This redesign closes that gap. It repositions Developer Office from "software engineering studio in Colombo" to **a research-driven engineering studio that builds software that matters** — production systems where reliability, accuracy, privacy and domain knowledge are non-negotiable. The site is rebuilt to feel less like an agency brochure and more like an engineering publication: editorial storytelling, large typography, real evidence, restrained motion, and case studies structured like technical write-ups rather than marketing.

The strategy rests on assets the company genuinely owns and few competitors can claim: 97% Sinhala & Tamil OCR accuracy on scripts the large labs ignore; AskLex.law, a citable legal-AI system for Sri Lankan law; product engineering for a Fortune 500 financial platform; production AI agents; and data-protection advisory grounded in Sri Lanka's DPA regime. These are not slogans — they are shipped systems. The site is built to let them do the persuading.

The document delivers: a positioning platform and brand narrative; a revised information architecture (Home, Work, Capabilities, Studio, Insights, Contact); complete homepage copy; a reusable case-study template with four case studies drafted to the edge of what is publicly verifiable; six capability pages; a dedicated AI narrative; a five-stage methodology; a full UI component system; visual, motion and mobile specifications; per-page SEO; and a conversion plan. It is written so that a designer, a developer, a UX designer and a business reviewer can each work from it without a rewrite.

**The one-line test the finished site must pass:** a CTO landing on the homepage should think, within a few seconds, *"These people understand difficult technology problems"* — and know exactly how to start a conversation.

---

## 2. BRAND POSITIONING

### 2.1 Positioning statement

> **Developer Office is a research-driven engineering studio that builds production-grade software and intelligent systems for problems where reliability, accuracy and privacy are not optional.**

### 2.2 What we are

A single, dedicated engineering team that takes a hard problem from first question to operating system — through discovery, research, design, engineering and long-term operation. Software engineering, AI engineering and applied research live inside one organisation, so the research that informs a build and the engineers who ship it are never in separate companies.

### 2.3 What we are *not* (positioning guardrails)

Developer Office is deliberately **not** positioned as any of the following, and copy must never drift toward them:

- a generic software outsourcing company
- a low-cost development agency competing on rate
- a freelancer marketplace or talent broker
- a staff-augmentation / "bums on seats" provider
- a generic "digital transformation" consultancy

We are an engineering studio. We scope, staff and ship complete systems, and we stand behind how they run.

### 2.4 Brand character

Intelligent · Technical · Premium · Mature · Confident · Precise · Research-driven · Human · Calm · International · Engineering-first.

The tone is the tone of a senior engineer explaining something difficult to another senior person: clear, specific, unhurried, never selling.

### 2.5 Banned language

Never use: *cutting-edge, best-in-class, digital transformation experts, innovative solutions, revolutionary, next-generation, world-class (as self-description), synergy, leverage (as a verb), game-changing, seamless, turnkey, bleeding-edge, robust (as filler), AI-powered (as decoration).*

Note: the current homepage uses "At the cutting-edge of Applied AI." This redesign replaces that heading (see §15). Retire the phrase across the site.

### 2.6 Preferred language

Specific, verifiable, and quantified where possible: *97% accuracy · deterministic execution · citations a lawyer can verify · permissioned access · high-volume workflows · survives contact with real users · auditability · thirty years.* Name the constraint, then name what was built to meet it.

---

## 3. BRAND NARRATIVE

### 3.1 The central idea

# WE BUILD SOFTWARE THAT MATTERS.

**Supporting line:** Research-driven engineering for complex products and intelligent systems.

"Matters" is doing specific work here. It means the software runs somewhere the stakes are real — a court, a bank, a registry, a newsroom, an archive. It means someone depends on the answer being right. The brand idea is a filter as much as a slogan: Developer Office is for the problems where getting it *roughly* working isn't good enough.

### 3.2 The narrative in full (canonical brand story)

Some software can be approximate. A recommendation that's usually right, a layout that's mostly aligned, a feature that fails quietly and gets fixed next sprint. And some software cannot. When a legal answer is cited in a filing, when a financial workflow executes against real money, when a citizen's record is digitised from a decades-old document, when personal data crosses a system that has to comply — approximate is not a category that exists.

Developer Office builds the second kind.

For thirty years, from Colombo, we've worked on problems where reliability, accuracy and privacy are the whole point. We started in an environment where a mature software ecosystem couldn't be assumed — where you couldn't reach for an off-the-shelf answer, because for the problems in front of us there often wasn't one. So we learned to work from first principles: understand the real problem, research it properly, and build something that holds up in the real world. That instinct never left. It's why AI, at Developer Office, is engineering rather than marketing — retrieval you can audit, agents with permissioned access, models trained for scripts the big labs ignore, systems with a human in the loop where a human belongs.

We keep research, AI and product engineering inside one team on purpose. The person who investigates the problem and the person who ships the system are colleagues, not vendors to each other. And we build for operation, not just launch — because the systems we care about are the ones that have to keep working after the launch post goes out.

We build software that matters. If you have a problem that has to be right, let's figure out what to build.

### 3.3 Message hierarchy

1. **Primary:** We build software that matters — production systems for problems where reliability, accuracy and privacy are non-negotiable.
2. **Proof:** Thirty years; 97% Sinhala & Tamil OCR; citable legal AI; Fortune 500 financial platform engineering; production AI agents; data-protection engineering.
3. **Differentiator:** Research, AI and product engineering inside one dedicated team — scoped, staffed and shipped end-to-end, and built to operate, not just to launch.
4. **Invitation:** Have a difficult problem? Let's figure out what to build.

---

## 4. TARGET AUDIENCES

### 4.1 Primary

Founders, CTOs, CIOs, technology and product leaders, and enterprise organisations carrying a genuinely difficult technical problem — one where correctness, security, scale or domain complexity has stalled an ordinary vendor.

**What they need in the first ten seconds:** evidence of depth, not adjectives. They are pattern-matching for competence and will leave the moment the copy sounds like every other agency.

### 4.2 Secondary

Research organisations, government institutions, financial organisations, legal organisations, universities, international technology companies, and internal innovation teams.

**What they need:** signals of rigour, discretion and institutional fit — that Developer Office can operate inside procurement, compliance and long horizons without losing engineering standards.

### 4.3 What every audience must grasp immediately

1. **What we do** — build production-grade software and intelligent systems.
2. **What makes us different** — research + AI + product engineering in one team, built for reliability.
3. **What we can solve** — hard problems: language tech, legal AI, financial platforms, agents, data protection.
4. **Why trust us** — thirty years, shipped systems, verifiable results, real institutions.
5. **How to start** — one clear path: *Start a Project.*

---

## 5. INFORMATION ARCHITECTURE

The current site runs Home / Work / Studio / Clients / Contact with capabilities folded into Work and no true case-study depth. The redesign introduces two things it lacks: a **Capabilities** layer (so buyers can self-select by need) and an **Insights** layer (so the "engineering publication" positioning has somewhere to live). "Clients" is absorbed into Work and the homepage trust section rather than standing alone.

### 5.1 Top-level structure

```
HOME
WORK
  ├─ Sinhala & Tamil OCR                (case study)
  ├─ AskLex.law                         (case study)
  ├─ Financial Platform Engineering     (case study)
  ├─ AI Agent Systems                   (case study)
  ├─ Data Protection Advisory           (case study)
  ├─ Product Engineering                (case study)
  └─ Discovery & Research               (case study)
CAPABILITIES
  ├─ Product Engineering
  ├─ AI Engineering
  ├─ Applied Research
  ├─ Language & Data
  ├─ Enterprise Systems
  └─ Technology Advisory
STUDIO
  ├─ About
  ├─ Approach            (the methodology)
  ├─ Team
  └─ Careers
INSIGHTS
  ├─ Research
  ├─ Engineering
  ├─ AI
  └─ Product
CONTACT
  ├─ Start a Project     (primary)
  └─ General Enquiries
```

### 5.2 Rationale for the change

- **Capabilities added as a first-class section.** Buyers arrive knowing their *need* ("we need AI engineering") more often than a project name. Capability pages are the SEO and self-qualification layer; Work is the proof layer. They reference each other.
- **Insights promoted from a homepage anchor to a section.** The current "Thinking" lives only as `#thinking`. To earn the "engineering publication" positioning, it needs real URLs, categories and article pages.
- **AI is a narrative woven through Capabilities and a dedicated page (§15), not a separate nav item** — it belongs everywhere the work is, and pulling it into its own tab would undercut the "AI is engineering, not a bolt-on" message.
- **Contact splits into two intents.** "Start a Project" is the qualified, primary path; "General Enquiries" catches press, careers overflow and partnerships without diluting the project funnel.

### 5.3 URL scheme

Flat and readable: `/work`, `/work/sinhala-tamil-ocr`, `/capabilities`, `/capabilities/ai-engineering`, `/studio`, `/studio/approach`, `/insights`, `/insights/why-sinhala-ocr-took-30-years`, `/contact`, `/contact/start-a-project`. Lowercase, hyphenated, no trailing slashes, no dates in article URLs.

---

## 6. NAVIGATION

### 6.1 Desktop

A single horizontal bar, generous horizontal padding, one clear action on the right.

```
Developer Office        Work   Capabilities   Studio   Insights        Start a Project →
```

- **Left:** wordmark "Developer Office" (links home). Not an abstract logo mark — the name *is* the mark, set in the display face.
- **Centre / left-of-centre:** four primary links. No more. Contact is intentionally absent from the link list because it is the CTA.
- **Right:** `Start a Project →` as a filled button (cobalt on off-white, or off-white on near-black depending on the header state — see §6.4).

### 6.2 Dropdowns

Only **Work** and **Capabilities** get a dropdown; Studio and Insights are single hub pages and navigate directly on click.

- **Hover (desktop, pointer):** a wide, low mega-panel drops beneath the bar. Left column = section intro line + "View all →"; right columns = the child links with a one-line descriptor each. Cobalt hairline separates panel from page.
- **Work panel** lists the seven projects with their category tag (Language, Legal AI, Finance, Agents, Compliance, Product, Research).
- **Capabilities panel** lists the six capabilities, each with its one-line promise.
- **Keyboard / touch:** the parent is itself a link to the hub page; the panel opens on focus/first-tap and navigates on second tap. Never trap the user in a hover-only menu.

### 6.3 Sticky behaviour

- Header is **fixed** and always present.
- On load (over the hero) it is **transparent** with off-white text/marks.
- After ~80px of scroll it transitions (180ms) to a **solid off-white bar** with near-black text and a 1px soft-grey bottom hairline. A subtle backdrop blur is acceptable but keep it faint.
- On scroll-down it may translate up and hide; on scroll-up it returns immediately. The CTA button is never hidden on mobile (see §26).

### 6.4 CTA behaviour

`Start a Project →` is the only button in the chrome and never changes label. Over the hero it is an outline/ghost button in off-white; in the solid header it becomes a filled cobalt button. Hover: arrow advances 4px, background deepens one step. It routes to `/contact/start-a-project`.

### 6.5 Mobile

- Bar shows wordmark (left) + a hamburger/`Menu` toggle (right). The `Start a Project →` button collapses into the menu, but a persistent bottom action bar keeps it reachable (see §26.11).
- Tapping `Menu` opens a **full-screen overlay** in near-black: the four primary links set large (display face, ~32–40px), stacked, each with its children indented and revealed by an accordion chevron. Contact details, email and phone sit at the bottom. A large `Start a Project →` button pins to the lower third.
- Open/close is a 240ms ease; links stagger-reveal by ~30ms each. Body scroll locks while open.

### 6.6 Hierarchy rules

Four primary links is the ceiling. If a future section is proposed, something else must leave the top bar. Secondary destinations (Careers, General Enquiries, Privacy, Terms) live in-page and in the footer, never in the header.

---

## 7. HOMEPAGE — COMPLETE CONTENT

The homepage is a scroll narrative in nine sections. Copy below is final. Each section carries a **Visual / Build** note.

### SECTION 01 — HERO

**Eyebrow:** `Engineering studio · Colombo`

# We build software that matters.

**Sub-headline:**
Research-driven engineering for complex products and intelligent systems.

**Intro paragraph:**
Developer Office is a software engineering studio in Colombo. For thirty years we've combined research, AI engineering and product delivery in a single dedicated team — taking hard problems from first question to production, and building systems that hold up in courts, banks, registries and newsrooms.

**Primary CTA:** `Explore Our Work` → `/work`
**Secondary CTA:** `Start a Project →` → `/contact/start-a-project`

**Visual / Build.**
Full-viewport, warm off-white (#F7F6F2). The headline is the hero — set enormous (clamp ~48px mobile to ~140px desktop), near-black, tight leading, ranged left, "matters." allowed to sit on its own line. No stock imagery, no gradients, no robot art. The only motion: on load, the three headline lines rise and fade in with a 60ms stagger (respecting `prefers-reduced-motion`). Beneath the CTAs, a thin cobalt rule and a `scroll` cue. Optional: a single restrained technical texture — a faint dot-grid or a slowly-drawn hairline diagram — bled off the right edge at low contrast, never competing with the type. The eyebrow and a small `©2026` / location marker anchor the corners to feel like a printed cover.

### SECTION 02 — OPENING STATEMENT (editorial)

# Complex problems deserve serious engineering.

Most software problems have a known shape and an off-the-shelf answer. The ones we take on don't. They sit at the intersection of **software engineering, artificial intelligence, applied research and product development** — where the right approach has to be found before it can be built, and where "mostly working" isn't a finish line.

We operate across all four disciplines inside one team, on purpose. Research informs what we build. Engineering makes it real. Product thinking keeps it usable. And because the people doing each are colleagues rather than separate vendors, nothing important gets lost in the handoff.

**Visual / Build.**
Editorial two-part layout: oversized statement headline occupying the left/top, body set in a comfortable measure (~62ch) to the right/below. Wide margins, a lot of air. On scroll, the headline reveals line-by-line (mask-up reveal, ~500ms) as it enters the viewport. Four discipline words (software engineering / artificial intelligence / applied research / product development) are emphasised in cobalt or set in a mono face as inline "tags." No image.

### SECTION 03 — PROOF / TRUST (large editorial numbers)

**Section label:** `Why teams trust us`

A row of large, editorial figures — not a boxed stat grid.

**30 years**
of engineering practice, from Colombo.

**97%**
Sinhala & Tamil OCR accuracy, on scripts most labs skip.

**Fortune 500**
financial platform engineered for high-volume, deterministic execution.

**One team**
research, AI and product engineering under one roof.

*Supporting line beneath the row:*
Every number on this site is something we can show you. If we can't verify it, we don't publish it.

**Visual / Build.**
Each figure is set very large (display face, ~72–120px), near-black, with its descriptor in small caps or mono beneath. Arrange as a four-item editorial row on desktop that stacks to a single column on mobile. The numeral portion counts up once on first entry (respecting reduced-motion; count duration ≤900ms, ease-out). A cobalt hairline runs above the row. **Do not** put these in cards with borders and icons — the restraint is the point.

> `[VERIFY WITH DEVELOPER OFFICE]` — the current site does **not** state engineer headcount or a client-count/continents figure, though the master brief lists "40+ engineers" and "clients across three continents" as *potential* facts. Use those two only after Developer Office confirms them; a confirmed "40+ engineers" figure would make a strong fifth number here. The four figures above are all supported by the current site copy.

### SECTION 04 — SELECTED WORK

**Section label:** `Selected work`

## The proof is the projects.

We don't lead with promises. We lead with systems that are running now — in language technology, legal AI, financial infrastructure and autonomous agents.

*Then: four featured project cards (full content in §8 and §10). Card face shows:*

- **Sinhala & Tamil OCR** — *Language* — Optical character recognition for Sinhala and Tamil at 97% accuracy, digitising archives, court records and print collections at scale.
- **AskLex.law** — *Legal AI* — A legal research assistant for Sri Lankan law: statute and case-law questions answered in seconds, with citations a lawyer can verify.
- **Financial Platform Engineering** — *Finance* — Product engineering for a Fortune 500 financial platform: high-volume workflows, deterministic execution, long-term maintainability.
- **AI Agent Systems** — *Agents* — Autonomous and semi-autonomous agents that research, draft and monitor, with permissioned access and workflows configured per operation.

**Link:** `View all work →` → `/work`

**Visual / Build.**
Large image-led project cards (see §24 project-card spec). On desktop, a two-up editorial grid with generous gutters, or a horizontal-scroll rail of full-height cards (§25) — pick one and hold it. Each card: category tag top-left, project name in display face, one-line descriptor, hover reveals a `View case →` affordance and a subtle image scale (1.03) with a cobalt corner tick. Imagery must be real: product screenshots, scans, diagrams — never stock or generative filler.

### SECTION 05 — BUILT FOR REALITY

# Built for the systems people actually use.

Courts. Banks. Government registries. Newsrooms. Archives. The places our software runs don't tolerate approximations, and they don't get to restart. So we design every component to survive contact with real users, real data and real deadlines — and to keep working long after launch.

**Link:** `See who we build for →` → `/work` (or clients anchor)

**Visual / Build.**
Full-bleed section, optionally on near-black for contrast against the surrounding off-white. Headline large; body to one side. If an image is used, it is a real photograph of infrastructure/architecture at low contrast (the current site's "glass towers from below" is an acceptable register) — never a stock handshake or server-room cliché. A quiet horizontal reveal of the institution words (courts · banks · registries · newsrooms · archives) as a mono list.

### SECTION 06 — AI, ENGINEERED (teaser to §15)

**Section label:** `Applied AI`

# Intelligence, engineered.

We don't treat AI as a marketing layer. We treat it as engineering: retrieval you can audit, agents with permissioned access, models trained for the scripts and domains the big labs overlook, and a human in the loop wherever a human belongs.

*Four compact strands (each links deeper):*
- **Language AI** — Sinhala & Tamil OCR at 97%, built on models trained for scripts the large labs ignore.
- **Legal intelligence** — AskLex.law: retrieval-grade AI for Sri Lankan law, with checkable citations.
- **Financial platforms** — deterministic, auditable engineering for high-volume financial workflows.
- **AI agents** — systems that research, draft and monitor, with permissioned access and configurable workflows.

**Link:** `How we think about AI →` → `/capabilities/ai-engineering`

**Visual / Build.**
Restrained. Headline + four short strands as a mono-labelled list or a 2×2 editorial block. Optional single animated technical diagram (a retrieval or agent flow) that draws itself once on entry — clean line art in cobalt on off-white, no glow, no particles. This section is the "AI is engineering, not hype" proof; keep it sober.

### SECTION 07 — HOW WE WORK (methodology teaser)

**Section label:** `How we work`

## Five stages, from first question to running system.

**01 Understand** — the organisation, its users, its constraints, and the actual problem.
**02 Model** — research the problem and define the technical approach before committing to a build.
**03 Build** — design and engineer the system.
**04 Validate** — test against real-world requirements, not demo conditions.
**05 Operate** — deploy, measure, improve and maintain.

**Link:** `Our approach in detail →` → `/studio/approach`

**Visual / Build.**
A horizontal five-step sequence on desktop (numbered 01–05, cobalt numerals, hairline connectors) that becomes a vertical stepper on mobile. As the section scrolls into view, steps illuminate in order along the connector line. Keep it diagrammatic and calm — this is a process line, not an animation showcase.

### SECTION 08 — INSIGHTS TEASER

**Section label:** `Thinking`

## We publish what we learn.

*Three latest articles (titles from current site; treat dates/authors as placeholders — see §20):*
- **Research** — *Why Sinhala OCR Took 30 Years: Notes from a 97% Accuracy Run* — `[DATE]`
- **Product** — *AskLex.law: What It Takes to Make Legal AI Citable* — `[DATE]`
- **Engineering** — *Agents in Production: What Survived Contact with Real Workflows* — `[DATE]`

**Link:** `Read the Insights →` → `/insights`

**Visual / Build.**
Three article cards (§24 article-card spec): category tag, title in display face, thin rule, `[reading time]` and `[date]` in mono. Hover lifts the title toward cobalt and advances a small arrow. No thumbnail is fine; if used, keep imagery editorial and real.

### SECTION 09 — CLOSING CTA

**Section label:** `Let's work`

# Have a difficult problem?

## Let's figure out what to build.

A single engineering studio built for teams shipping at scale. We work directly with you — scoping, staffing and shipping the system end-to-end — from Colombo, for thirty years.

**Primary CTA:** `Start a Project →` → `/contact/start-a-project`
**Secondary:** `Talk with an engineer` (routes to same, or opens contact details)

**Visual / Build.**
Full-viewport closer, near-black or deep-cobalt field with off-white type for a decisive end-note. Headline huge. Beneath the CTA, the essentials: `[email protected]` · `+94 77 755 2555` · Nugegoda, Colombo. This mirrors the current site's closing intent but elevated. One subtle motion: the headline reveals on entry; the button's arrow loops a gentle nudge every few seconds to signal interactivity (disable under reduced-motion).


---

## 8. WORK SECTION

### 8.1 Work index page (`/work`)

**Eyebrow:** `Selected work`

# Systems that are running now.

We take on problems where correctness, privacy and scale decide whether the software is any good at all. Below is a selection of what we've built and what we learned building it.

**Visual / Build.**
A tall editorial index. Each project is a full-width row alternating image-left / image-right on desktop, collapsing to stacked cards on mobile. Row shows: category tag, project name (display, large), the short descriptor, and a `Read case →` link. A left-rail filter (`All · Language · Legal AI · Finance · Agents · Compliance · Product · Research`) lets buyers self-select; filtering is an in-page state change with a quick cross-fade, not a page reload. Hover on a row scales its image (1.03) and shifts the name toward cobalt.

### 8.2 The seven Work entries and their category tags

| Project | Tag | One-line descriptor (final copy) |
|---|---|---|
| Sinhala & Tamil OCR | Language | OCR for Sinhala and Tamil at 97% accuracy, digitising archives, court records and print collections at scale. |
| AskLex.law | Legal AI | A research assistant for Sri Lankan law — statute and case-law answers in seconds, with citations a lawyer can verify. |
| Financial Platform Engineering | Finance | Product engineering for a Fortune 500 financial platform: high-volume workflows, deterministic execution, maintainability. |
| AI Agent Systems | Agents | Autonomous and semi-autonomous agents that research, draft and monitor — permissioned, and configured per operation. |
| Data Protection Advisory | Compliance | DPA-readiness assessment and engineering for organisations handling personal data under Sri Lanka's data-protection regime. |
| Product Engineering | Product | End-to-end product teams — design, build, ship, operate — for founders and institutions that need software done properly. |
| Discovery & Research | Research | Structured discovery that turns open questions into buildable specs, prototypes and evidence before a build is committed. |

Four are drafted as full case studies in §10 (OCR, AskLex, Financial, Agents). Data Protection, Product Engineering and Discovery & Research use the same template; their non-public specifics are marked `[CONTENT REQUIRED]`.

---

## 9. CASE STUDY PAGE TEMPLATE

A reusable thirteen-part architecture. Every case study follows it. The visual spine is a **left-hand progress rail** numbering 01–13 that tracks scroll position, with the content in a single readable column to its right.

| # | Section | Purpose | Visual treatment |
|---|---|---|---|
| 01 | Context | Who, where, and the world the system lives in. | Short intro paragraph under a full-bleed hero image (real: screenshot/scan/site). Project meta strip: client type, domain, year, disciplines. |
| 02 | The Problem | The concrete difficulty. | Large pull-statement of the problem in display type; 1–2 supporting paragraphs. |
| 03 | The Question | The single question the engagement had to answer. | One line, set very large in cobalt. This is the pivot of the story. |
| 04 | Research | What we investigated before building. | Body text with optional inline diagram or data figure; mono captions. |
| 05 | Approach | The chosen technical direction and why. | Text + a simple architecture/flow diagram (line art). |
| 06 | Engineering | What we actually built. | Text; optional annotated screenshots; a technical detail callout in mono. |
| 07 | Validation | How we proved it works against reality. | Method described; metric(s) surfaced as a mid-size figure. |
| 08 | Result | The measurable outcome. | Large editorial number(s), same treatment as homepage proof. |
| 09 | Impact | What changed for the client / users. | Short, plain paragraphs. No hyperbole. |
| 10 | What We Learned | The honest, transferable lesson. | Editorial pull-quote in the studio voice. |
| 11 | Technology | The stack, named plainly. | A mono tag row / small table. |
| 12 | Related Work | Two or three sibling cases. | Compact project cards. |
| 13 | CTA | The next step. | `Have a similar problem? Start a Project →` band. |

**Global rules.** Real imagery only. Any figure without a public source is `[RESULT TO BE VERIFIED]`. The progress rail is sticky on desktop and hidden on mobile (replaced by a thin top scroll-progress bar). Numbers animate once. Section 03 (The Question) is always the visual peak of the page.


---

## 10. INDIVIDUAL CASE STUDY CONTENT

Four case studies, drafted to the edge of what is publicly verifiable. Anything not confirmable from the current site is marked. Results Developer Office can prove should replace the flags before launch.

### 10.1 — Sinhala & Tamil OCR

**Tag:** Language · **URL:** `/work/sinhala-tamil-ocr`

**01 · Context.** Vast amounts of Sri Lanka's written record — archives, court files, print collections — exist only on paper, in Sinhala and Tamil. Both are complex scripts, and both are largely ignored by the major OCR and AI labs, whose models are tuned for high-resource languages. Digitising this material at scale meant OCR that could actually read these scripts, not approximate them.

**02 · The Problem.** General-purpose OCR fails on Sinhala and Tamil. The scripts are dense with ligatures, modifiers and combining forms; document sources are old, degraded and inconsistently printed. Off-the-shelf accuracy was nowhere near usable for records where a single mis-read character can change a name, a date or a legal meaning.

**03 · The Question.** *Could OCR read Sinhala and Tamil accurately enough to trust for archival and legal digitisation?*

**04 · Research.** We treated it as a language-technology problem, not a scanning problem — studying the scripts' structure, the failure modes of existing models, and the conditions of real source documents. Where usable training data didn't exist for the scripts the big labs ignore, building the data was part of the work.

**05 · Approach.** Rather than adapt a general model, we built on models trained specifically for these scripts, with a pipeline designed around the realities of degraded, real-world documents.

**06 · Engineering.** A production OCR engine built to run against archives, court records and print collections at scale — engineered for throughput and for the messiness of decades-old material, not clean lab inputs.

**07 · Validation.** Accuracy was measured against real archival and record material, the conditions the system was actually meant to serve.

**08 · Result.** **97%** OCR accuracy on Sinhala and Tamil.

**09 · Impact.** Digitisation of Sinhala and Tamil archives, court records and print collections becomes feasible at scale — material that was effectively locked in paper becomes searchable and usable. `[Specific deployments / volumes: CONTENT REQUIRED]`.

**10 · What We Learned.** *When the big labs skip your language, accuracy is an engineering problem you have to own end-to-end — from the data up.*

**11 · Technology.** OCR / language models trained for Sinhala & Tamil; document-processing pipeline. `[Precise stack: CONTENT REQUIRED]`.

**12 · Related Work.** AskLex.law · AI Agent Systems · Discovery & Research.

**13 · CTA.** Have a language- or document-intelligence problem the big models can't read? `Start a Project →`

---

### 10.2 — AskLex.law

**Tag:** Legal AI · **URL:** `/work/asklex-law`

**01 · Context.** Legal research in Sri Lanka means navigating statutes, case law and commentary — slow, manual, and unforgiving of error. AskLex.law is a legal research assistant that answers questions about Sri Lankan law in seconds.

**02 · The Problem.** Legal AI has an inherent trust problem: a fluent answer that can't be checked is worse than no answer, because it invites reliance without verification. For a legal tool, the citation is the product — an answer a lawyer can't trace back to a source is unusable.

**03 · The Question.** *Can AI answer legal questions in seconds with citations a lawyer can actually verify?*

**04 · Research.** We approached it as a retrieval and reliability problem, not a chatbot problem — how to ground answers in real statutes and case law, and surface citations the user can check rather than take on faith.

**05 · Approach.** Retrieval-grade AI: answers built from and anchored to primary legal sources — statutes, case law and commentary — with verifiable citations attached to what the system says.

**06 · Engineering.** A system that returns statute and case-law answers in seconds, each carrying citations a lawyer can follow to the source.

**07 · Validation.** The bar is verifiability: citations must resolve to real, correct sources a legal professional can confirm. `[Evaluation method / accuracy: CONTENT REQUIRED]`.

**08 · Result.** Legal questions answered in seconds, with checkable citations. `[Quantified outcome: RESULT TO BE VERIFIED]`.

**09 · Impact.** Legal research that took hours compresses toward seconds — without asking the user to trust an unverifiable answer. `[Usage / adoption: CONTENT REQUIRED]`.

**10 · What We Learned.** *In legal AI, the citation is the product. Fluency without verifiability is a liability, not a feature.*

**11 · Technology.** Retrieval-augmented AI over Sri Lankan legal corpora; citation resolution. `[Precise stack: CONTENT REQUIRED]`.

**12 · Related Work.** Sinhala & Tamil OCR · AI Agent Systems · Data Protection Advisory.

**13 · CTA.** Building AI that has to be trusted, not just fluent? `Start a Project →`

---

### 10.3 — Financial Platform Engineering

**Tag:** Finance · **URL:** `/work/financial-platform-engineering`

**01 · Context.** Product engineering for a **Fortune 500 financial platform** — software operating at the scale and reliability standards of a global financial institution. `[Client named only with permission — CONTENT REQUIRED; otherwise remains "a Fortune 500 financial platform".]`

**02 · The Problem.** Financial platforms carry constraints most software never meets at once: high transaction volume, zero tolerance for non-deterministic behaviour, full auditability, and integration into a large, pre-existing environment — all while staying maintainable for years.

**03 · The Question.** *How do you engineer for high volume and absolute determinism inside a system that already exists and can't be disrupted?*

**04 · Research.** Understanding the existing environment, its workflows and its failure modes came before any build — in financial infrastructure the integration surface is the hard part.

**05 · Approach.** Engineering for deterministic behaviour and auditability first, designed to slot into the existing platform rather than replace it.

**06 · Engineering.** High-volume workflows built for predictable, deterministic execution, with auditability and long-term maintainability as first-order requirements.

**07 · Validation.** Correctness under volume and determinism under load, validated against the standards of a Fortune 500 financial environment. `[Specifics: CONTENT REQUIRED]`.

**08 · Result.** `[RESULT TO BE VERIFIED]` — high-volume workflows running with deterministic execution and auditability.

**09 · Impact.** `[Impact metrics: CONTENT REQUIRED]`.

**10 · What We Learned.** *At financial scale, "works" means "works the same way every time, and can prove it did."*

**11 · Technology.** `[Stack: CONTENT REQUIRED]`.

**12 · Related Work.** AI Agent Systems · Data Protection Advisory · Product Engineering.

**13 · CTA.** Need financial-grade reliability and auditability? `Start a Project →`

---

### 10.4 — AI Agent Systems

**Tag:** Agents · **URL:** `/work/ai-agent-systems`

**01 · Context.** Autonomous and semi-autonomous agents that do real work inside real operations — researching, drafting and monitoring — rather than agents that demo well and fail in production.

**02 · The Problem.** Most agent demos collapse on contact with reality: unbounded permissions, no configurability, and workflows that don't match how an actual operation runs. In production, an agent with the wrong access or the wrong assumptions is a risk, not a feature.

**03 · The Question.** *What does it take for an AI agent to survive contact with a real workflow?*

**04 · Research.** We studied where agents break in production — permissions, reliability, and the gap between a generic workflow and a specific operation's real one.

**05 · Approach.** Agents with **permissioned access** and workflows **configured to each operation**, with a human in the loop where judgment belongs — autonomy scoped deliberately, not maximised.

**06 · Engineering.** Systems that research, draft and monitor, built around each operation's actual process and access boundaries.

**07 · Validation.** The test is production: whether the agent keeps doing useful, correct work inside a live workflow. `[Specifics: CONTENT REQUIRED]`.

**08 · Result.** `[RESULT TO BE VERIFIED]` — agents running in production workflows with permissioned access.

**09 · Impact.** `[Impact metrics: CONTENT REQUIRED]`.

**10 · What We Learned.** *Production agents are an engineering discipline, not a prompt. Scope the autonomy; earn the trust.*

**11 · Technology.** Agentic AI; permissioned access controls; workflow configuration. `[Precise stack: CONTENT REQUIRED]`.

**12 · Related Work.** AskLex.law · Financial Platform Engineering · Sinhala & Tamil OCR.

**13 · CTA.** Want agents that survive production, not just demos? `Start a Project →`


---

## 11. CAPABILITIES

Six capability pages. Each follows the same architecture: **Hero → The problem we solve → What we do → How we work → Relevant projects → Technologies → FAQ → CTA.** Copy below is final for hero, problem and "what we do"; project links and FAQ answers pull from Work and are marked where specifics are needed.

### 11.1 Capabilities index (`/capabilities`)

# What we do, and how we do it.

Six capabilities, built to take a product from first question to running system. Most engagements combine several — because real problems rarely respect the boundaries between them.

*Then six capability cards, each linking to its page.*

---

### 11.2 Product Engineering (`/capabilities/product-engineering`)

**Hero:** *End-to-end product engineering.*
Research → Strategy → Design → Engineering → Production. One team, the whole way.

**The problem we solve.** Products stall when the people who research, design and build them belong to different companies with different incentives. Handoffs leak context; nobody owns the outcome.

**What we do.** We run the full arc — discovery, strategy, design, engineering and operation — as a single dedicated team for founders and institutions who need software done properly. We ship products and then keep them running.

**How we work.** Our five-stage method (§16): Understand → Model → Build → Validate → Operate.

**Relevant projects.** Financial Platform Engineering · AskLex.law · `[others: CONTENT REQUIRED]`.
**Technologies.** `[Stack summary: CONTENT REQUIRED]`.
**FAQ.** *Do you work with existing teams?* · *Do you maintain what you build?* · *What size of engagement?* — `[Answers: CONTENT REQUIRED]`.
**CTA.** `Start a Project →`

---

### 11.3 AI Engineering (`/capabilities/ai-engineering`)

**Hero:** *AI as engineering, not a marketing layer.*

**The problem we solve.** Most AI projects die between the demo and production — unreliable, unauditable, or unsafe with real data and real permissions.

**What we do.** We build AI systems that hold up in production: **AI agents** with permissioned access; **intelligent workflows** configured to real operations; **retrieval** systems grounded in real sources; rigorous **evaluation**; and **production deployment** with a human in the loop where judgment belongs. This is the same discipline behind AskLex.law's citable answers and our production agents.

**How we work.** Retrieval and evaluation first; autonomy scoped deliberately; privacy and auditability as requirements, not afterthoughts.

**Relevant projects.** AskLex.law · AI Agent Systems · Sinhala & Tamil OCR.
**Technologies.** Retrieval-augmented generation; agentic systems; evaluation harnesses. `[Precise stack: CONTENT REQUIRED]`.
**FAQ.** *How do you stop hallucinations?* · *Can answers be audited?* · *How do you handle sensitive data?* — `[Answers: CONTENT REQUIRED]`.
**CTA.** `Start a Project →`

---

### 11.4 Applied Research (`/capabilities/applied-research`)

**Hero:** *Research that ends in something buildable.*

**The problem we solve.** Some problems can't be estimated until they've been investigated. Committing to a build before the research is done is how projects fail expensively.

**What we do.** Structured experimentation, technical research and prototyping — especially in language technology — that turns open questions into validated, buildable specifications and evidence before a full build is committed.

**How we work.** Discovery engagements that produce specs, prototypes and validation, so the decision to build is made on evidence.

**Relevant projects.** Sinhala & Tamil OCR · Discovery & Research · AskLex.law.
**Technologies.** `[CONTENT REQUIRED]`.
**FAQ.** *What's the output of a research engagement?* · *How long?* — `[Answers: CONTENT REQUIRED]`.
**CTA.** `Start a Project →`

---

### 11.5 Language & Data (`/capabilities/language-and-data`)

**Hero:** *Software that can read Sinhala, Tamil and the documents nobody else can.*

**The problem we solve.** The scripts and documents that matter most locally — Sinhala, Tamil, degraded archival material — are exactly the ones global tools handle worst.

**What we do.** OCR for **Sinhala** and **Tamil** at 97% accuracy; **document intelligence** for archives, court records and print collections; and the **data processing** pipelines that make messy, real-world material usable at scale.

**Relevant projects.** Sinhala & Tamil OCR · AskLex.law.
**Technologies.** Sinhala/Tamil OCR models; document pipelines. `[CONTENT REQUIRED]`.
**FAQ.** *What accuracy on my documents?* · *Can you handle degraded scans?* — `[Answers: CONTENT REQUIRED]`.
**CTA.** `Start a Project →`

---

### 11.6 Enterprise Systems (`/capabilities/enterprise-systems`)

**Hero:** *Institutional software that has to keep working.*

**The problem we solve.** Institutional systems — financial, governmental, legal — carry constraints most software never faces: volume, determinism, auditability, security, and integration into environments that already exist.

**What we do.** **Financial systems** and **institutional software** engineered for reliability; **integrations** into existing environments; and **security** and **auditability** built in from the start.

**Relevant projects.** Financial Platform Engineering · AI Agent Systems · Data Protection Advisory.
**Technologies.** `[CONTENT REQUIRED]`.
**FAQ.** *Can you integrate with our existing platform?* · *How do you handle audit requirements?* — `[Answers: CONTENT REQUIRED]`.
**CTA.** `Start a Project →`

---

### 11.7 Technology Advisory (`/capabilities/technology-advisory`)

**Hero:** *The engineering decisions that are hard to reverse.*

**The problem we solve.** Architecture, data protection and AI-adoption choices set years of consequences. Getting advice from people who don't also build is how you get advice that doesn't survive contact with reality.

**What we do.** **Architecture** and **technical strategy**; **data protection** — DPA-readiness assessment and engineering aligned to Sri Lanka's data-protection regime; **AI-adoption** guidance grounded in what actually ships; and help with the **engineering decisions** that are expensive to unwind. Advice from a team that also builds.

**Relevant projects.** Data Protection Advisory · Financial Platform Engineering.
**Technologies.** N/A (advisory). 
**FAQ.** *Do you advise without building?* · *What does a DPA-readiness assessment cover?* — `[Answers: CONTENT REQUIRED]`.
**CTA.** `Start a Project →`

---

## 12. AI POSITIONING — DEDICATED NARRATIVE

Lives at `/capabilities/ai-engineering` and is teased on the homepage (§7.06). This is the canonical AI story.

# Intelligence, engineered.

At Developer Office, AI is not a layer we add to sound modern. It's engineering — held to the same standard as any system that has to work in the real world.

That distinction shows up everywhere in how we build:

- **AI agents** get **permissioned access** and workflows configured to a specific operation. Autonomy is scoped on purpose, not maximised for a demo.
- **Language AI** means models trained for the scripts the big labs ignore — Sinhala and Tamil OCR at 97%, against real archives and records.
- **Document intelligence** turns degraded, real-world material into something searchable and usable.
- **Legal AI** — AskLex.law — is built on **retrieval** grounded in primary sources, with **citations a lawyer can verify.** In a legal tool, an answer you can't check is a liability.
- **Retrieval systems** anchor answers to real sources instead of a model's confidence.
- **Evaluation** is a first-class part of the work: we measure whether a system is right, not just whether it's fluent.
- **Production AI** is the goal, not a demo. The interesting engineering is everything between "it works once" and "it works every time."
- **Human-in-the-loop** design keeps a person where judgment belongs.
- **Reliability and privacy** are requirements from the start, especially where sensitive data is involved.

We don't do AI hype. We do AI that has to be right.

**Visual / Build.** Sober, technical, editorial. One or two clean line-art diagrams (a retrieval flow; an agent-with-permissions flow) that draw on scroll. No neon, no particles, no "brain" imagery. Cobalt as the single accent.


---

## 13. METHODOLOGY (`/studio/approach`)

**Eyebrow:** `How we work`

# From first question to running system.

Five stages. Each one earns the right to the next.

### 01 — Understand
We start with the organisation, not the technology. Who are the real users? What are the actual constraints — regulatory, operational, institutional? What is the problem *beneath* the problem you came to us with? Most failed projects were solving the wrong thing precisely. We make sure we're solving the right thing before anything else.

### 02 — Model
Some problems can't be estimated until they've been investigated. We research the problem, study its failure modes, and define a technical approach — with prototypes and evidence where the risk warrants it — before committing to a build. This is where a hard problem stops being a gamble.

### 03 — Build
We design and engineer the system. Research, design and engineering happen inside one team, so the thing that ships is the thing that was investigated — not a diluted handoff of it. We build for the real conditions the system will face, not the demo.

### 04 — Validate
We test against real-world requirements: real users, real data, real volume, real edge cases. For the systems we build — legal, financial, archival — "passes the demo" is not validation. "Holds up under the conditions it was built for" is.

### 05 — Operate
Software is built for operation, not launch. We deploy, measure, improve and maintain — because the systems worth building are the ones that have to keep working long after the launch announcement.

**Visual / Build.** A vertical numbered narrative on the page, with a persistent progress indicator. Each stage is a large numeral (cobalt), a short heading, and a paragraph. Optional: a single end-to-end process diagram at the top that the five sections map onto as you scroll. Calm, diagrammatic, publication-grade.

---

## 14. WHY DEVELOPER OFFICE

A homepage-eligible and About-eligible section. Six reasons, each grounded in something the studio genuinely does.

# Why teams choose Developer Office.

**Engineering first.**
Technical depth is the centre of every engagement, not a resource we bolt on. You're hiring engineers who research, not a sales layer in front of a delivery team.

**Research driven.**
Hard problems get investigated before they get built. When the answer isn't off the shelf — as with Sinhala OCR — we build the understanding first.

**Built for reality.**
We design around real institutional constraints — courts, banks, registries, newsrooms — so systems survive contact with real users, real data and real deadlines.

**Long-term thinking.**
We build for operation, not just launch. The measure of the work is whether it's still working, and still maintainable, years later.

**Direct collaboration.**
You work directly with the engineering team. No account layer between you and the people writing the code.

**Technical depth in one place.**
Software engineering, AI and applied research live inside one organisation — so the disciplines a hard problem needs are colleagues, not a supply chain.

**Visual / Build.** Six items as an editorial 2×3 (desktop) / stacked (mobile) block. No icons-in-circles cliché; use a numeral or a short mono label per item and let the typography carry it. Hover: a cobalt hairline draws under the heading.

---

## 15. STUDIO / ABOUT (`/studio`)

**Eyebrow:** `The studio`

# Thirty years of building software that has to be right.

**The story.**
Developer Office began in Sri Lanka, in an environment where a mature software ecosystem couldn't simply be assumed. When the off-the-shelf answer often didn't exist, we learned to work from first principles — understand the real problem, research it properly, and build something that survives the real world. That discipline shaped everything since. Over roughly three decades we evolved from traditional software engineering into modern AI and applied research, without ever losing the engineering-first instinct we started with. And we keep publishing and sharing what we learn, because the systems we ship should be grounded in both rigour and operational reality.

**Philosophy.**
We build software that matters — the kind where reliability, accuracy and privacy are the whole point. We keep research, AI and product engineering in one team so nothing important is lost between disciplines. We build for operation, not launch. And we don't publish a claim we can't show you.

**Mission.**
To solve complex technology problems and build production-grade systems for the organisations and institutions that depend on them — from Colombo, for the long term.

**Values.**
Rigour over hype · Evidence over adjectives · First-principles over off-the-shelf · Operation over launch · Directness over account management · Discretion with sensitive work.

**Working culture.**
A single dedicated team that scopes, staffs and ships end-to-end. Engineers work directly with clients. Research and delivery sit together. `[Expand with real cultural specifics — CONTENT REQUIRED]`.

**Office & global reach.**
Based in Nugegoda, Colombo. We work with organisations across multiple regions. `[Specific regions / "three continents" figure — VERIFY WITH DEVELOPER OFFICE before publishing.]`

**Visual / Build.** Editorial long-read. Large opening statement; body in a comfortable measure; a real photograph of the studio/office if available (never stock). Values as a mono list. A restrained timeline (founding → software engineering → AI & research → today) rendered as a hairline with a few dated nodes — dates `[CONTENT REQUIRED]`.

---

## 16. TEAM (`/studio/team`)

**Eyebrow:** `The team`

# Engineers, researchers, and the depth to move between them.

Developer Office is a single dedicated team where software engineering, AI and applied research sit side by side. You work directly with the people who investigate your problem and build your system.

`[TEAM CONTENT REQUIRED]` — Developer Office to supply: leadership names and roles, a short note on the engineering and research disciplines represented, and (optionally) headcount. If a verified "40+ engineers" figure is confirmed, feature it here and in the homepage proof row.

**Visual / Build.** Deliberately *not* a generic agency grid of headshots. Options, in order of preference:
1. **Culture-led:** a short statement on how the team works, a few real candid photographs of people working, and named leadership only — depth communicated through voice, not a wall of faces.
2. **Discipline map:** the team expressed as the disciplines under one roof (engineering, AI, research, product, advisory), each with a line on what it owns.
Avoid role-title tiles and stock "diverse team high-fiving" imagery entirely. If headshots are used, one consistent, restrained treatment (same crop, same mono caption).

---

## 17. INSIGHTS (`/insights`)

**Eyebrow:** `Thinking`

# We publish what we learn.

Notes from real engagements — the research, the engineering, and the honest lessons. Written for people who build.

**Categories:** `Research · Engineering · AI · Product`

### Existing / launch articles

**1.**
- **Title:** Why Sinhala OCR Took 30 Years: Notes from a 97% Accuracy Run
- **Subtitle:** What it actually takes to make a machine read a script the big labs ignore.
- **Category:** Research
- **Summary:** A field report from building Sinhala & Tamil OCR to 97% accuracy — the script complexity, the missing training data, and why this was a language-technology problem before it was a scanning one.
- **Author:** `[AUTHOR REQUIRED]` · **Reading time:** `[X min]` · **Date:** `[DATE]`

**2.**
- **Title:** AskLex.law: What It Takes to Make Legal AI Citable
- **Subtitle:** In a legal tool, the citation is the product.
- **Category:** Product
- **Summary:** Why fluent legal answers aren't enough, and how retrieval-grade AI grounded in primary sources makes answers a lawyer can verify.
- **Author:** `[AUTHOR REQUIRED]` · **Reading time:** `[X min]` · **Date:** `[DATE]`

**3.**
- **Title:** Agents in Production: What Survived Contact with Real Workflows
- **Subtitle:** Most agent demos die on contact with reality. Here's what doesn't.
- **Category:** Engineering
- **Summary:** Permissioned access, per-operation configuration and human-in-the-loop design — the engineering that separates a production agent from a demo.
- **Author:** `[AUTHOR REQUIRED]` · **Reading time:** `[X min]` · **Date:** `[DATE]`

> Do not invent authors, reading times or dates. All three are placeholders until Developer Office supplies them. The current site shows dates (6.12.26 / 5.28.26 / 4.30.26) — confirm and reuse those exact dates if accurate.

**Visual / Build.** Index: a filterable editorial list (category chips), each entry a large title in the display face, subtitle, category tag, and mono meta (`date · reading time`). Article template: a clean long-read column, ~68ch measure, large headline, a standfirst, generous spacing, code/diagram blocks styled in mono with a soft-grey background, and a `Related work / Related insights` footer plus a soft CTA to Start a Project. This section is what earns the "engineering publication" positioning — treat typography and reading comfort as the priority.


---

## 18. CONTACT / START A PROJECT (`/contact/start-a-project`)

**Eyebrow:** `Let's work`

# Have a difficult problem?

## Let's figure out what to build.

Tell us what you're trying to solve. This isn't a sales form — it's the start of a technical conversation, and it goes to an engineer, not a queue.

### Enquiry form

Fields (label · type · notes):

- **Name** · text · required
- **Organisation** · text · required
- **Email** · email · required
- **Project type** · select · options: `Product engineering · AI engineering · Applied research · Language & data · Enterprise systems · Technology advisory · Not sure yet`
- **The problem or opportunity** · long text · required · placeholder: *"What's hard about it? What has to be true for it to work?"*
- **Timeline** · select · `Exploring · < 3 months · 3–6 months · 6+ months · Ongoing`
- **Budget range** · select · `[Ranges: CONTENT REQUIRED]` + `Prefer to discuss`
- **Anything else** · long text · optional

**Submit button:** `Start the conversation →`
**Post-submit:** *"Thank you. An engineer at Developer Office will read this and reply personally."* `[Confirm SLA wording — CONTENT REQUIRED]`.

### Direct details (always visible beside the form)

- **Email:** `[email protected]`
- **Phone:** +94 77 755 2555
- **Location:** 208 Stanley Thilakaratne Mawatha, Nugegoda, Colombo
- **Prefer to talk first?** `Talk with an engineer` → same phone/email.

**Visual / Build.** Two-column on desktop: left = the headline + direct details + one line of reassurance; right = the form. Off-white field, near-black labels, cobalt focus ring on inputs. Form fields are underline-style or hairline-bordered, never heavy boxes. The submit button is the only filled cobalt element. On mobile the form stacks below the headline; direct details sit above the form so a caller never has to scroll the whole form to reach the phone number. Inline validation, no CAPTCHA if avoidable, honeypot for spam.

### General Enquiries (`/contact/general-enquiries`)
A lighter page for press, partnerships and careers overflow: name, email, message, and the direct details. `[Routing: CONTENT REQUIRED]`.

---

## 19. FOOTER

Minimal, four-column on desktop, stacked on mobile.

**Column 1 — Developer Office**
Wordmark. One line: *Research-driven engineering. Software that matters.* Nugegoda, Colombo.

**Column 2 — Navigate**
Home · Work · Capabilities · Studio · Insights · Contact

**Column 3 — Work**
Sinhala & Tamil OCR · AskLex.law · Financial Platforms · AI Agent Systems · Data Protection · Product Engineering

**Column 4 — Contact**
`[email protected]` · +94 77 755 2555 · Nugegoda, Colombo · `Start a Project →`

**Bottom bar**
©2026 Developer Office. All rights reserved. · Privacy · Terms

**Visual / Build.** Near-black field, off-white type, cobalt on link hover. Generous top padding; a hairline separates the bottom bar. Wordmark set large-ish as a quiet sign-off. No newsletter form unless one is genuinely maintained (the current site has a "Subscribe" — keep only if real; otherwise omit rather than ship a dead field). Privacy and Terms are the only legal links.

---

## 20. UI DESIGN SYSTEM

Every component defined for shape, border, radius, type, spacing, and states. Radii are small throughout — this is a precise, engineered brand, not a soft consumer one.

**Global tokens.**
Radius: `4px` default, `2px` for inputs, `0` acceptable for large editorial blocks. Border: `1px solid #E8E8E3` (soft grey) default; `1px solid #111111` for emphasis; cobalt `#3155FF` for active/focus. Spacing scale (px): `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`. Transition: `180ms ease` for state, `240–500ms` for reveals. Focus ring: `2px` cobalt outline, `2px` offset — never removed.

### Buttons
- **Primary:** filled cobalt `#3155FF`, off-white text, radius 4px, padding `14/24`, display/UI face, trailing `→`. Hover: background darkens ~8%, arrow advances 4px. Active: 1px inset. Disabled: soft grey.
- **Secondary / ghost:** transparent, 1px near-black border, near-black text. Hover: near-black fill, off-white text. On dark sections: off-white border/text inverting on hover.
- **Text link button:** near-black text + trailing arrow, cobalt on hover, animated underline draw.
- **Mobile:** min height 48px, full-width in stacked contexts.

### Links (inline)
Near-black, 1px underline offset ~3px in soft grey; on hover the underline recolours to cobalt and thickens to reach full opacity. Visited never dimmed. External links get a small `↗`.

### Cards (base)
Off-white surface, 1px soft-grey border, radius 4px, padding 24–32px. Hover: border → near-black, a 1px cobalt tick draws in a corner, shadow stays minimal (`0 1px 0` feel, not a lifted drop). No heavy elevation.

### Project cards
Image-led. Large real image (16:10) top or full-bleed; category tag (mono, uppercase, cobalt) top-left overlaid or above; project name in display face; one-line descriptor. Hover: image scales 1.03 (overflow hidden), name shifts toward cobalt, `View case →` fades up. Mobile: full-width, image first, text below, generous vertical rhythm; tap = navigate (no hover dependency).

### Service / capability cards
Text-led. Capability name (display, medium), one-line promise, mono `Explore →`. Hover: cobalt hairline draws under the name; whole card is the hit target. Mobile: stacked, comfortable tap height.

### Statistics
Not carded. Large numeral (display, 72–120px), descriptor beneath in small-caps/mono, cobalt hairline above the group. Count-up once on entry (≤900ms). Stack on mobile with tighter numerals (~56px).

### Navigation
See §6. Bar: 1px bottom hairline in solid state. Links: UI face, hover recolours to cobalt with a 2px cobalt indicator drawing under the active item. Dropdown panels: off-white, 1px soft-grey border, subtle shadow, cobalt hairline at top.

### Mobile menu
Full-screen near-black overlay; links display-face ~32–40px; accordion children with chevrons; staggered reveal; pinned `Start a Project →`. Close = `×` top-right, min 44px target.

### Forms & inputs
Underline or hairline-bordered fields, not filled boxes. Label above field, mono or UI face, near-black. Input text near-black on off-white. Focus: 2px cobalt underline/ring. Error: 1px near-black border + a short mono error line in a muted red `[define token, e.g. #B4322A]`. Selects styled to match; native on mobile. Min height 48px.

### Tags / chips
Mono, uppercase, small (11–12px), letter-spaced. Category tags in cobalt; filter chips as 1px soft-grey pills that fill near-black when active. Radius: pill (999px) for filters, `2px` for inline tags.

### Breadcrumbs
Only on case-study and article pages. Mono, small, soft-grey with cobalt on the current-adjacent link; separator `/`. Format: `Work / Sinhala & Tamil OCR`.

### FAQ (accordion)
Question in UI face medium, near-black; 1px soft-grey divider between items; chevron rotates on open; answer reveals with a height ease (240ms). One open at a time optional. Full-width, comfortable tap targets.

### Footer
See §19. Links UI face small, hover cobalt.

### Article cards
Category tag (mono, cobalt), title (display, medium), optional standfirst, mono meta row (`date · reading time`). Hover: title toward cobalt, arrow advances. Optional real thumbnail (never stock).

### Image galleries
Editorial, not lightbox-heavy. Full-bleed or wide figures with mono captions beneath. On case studies, annotated screenshots preferred. Lazy-load; fixed aspect ratios to prevent layout shift. Optional click-to-zoom with a calm fade (no bounce).

### Technical diagrams
Line art: 1–1.5px strokes, near-black lines, cobalt accents, mono labels, off-white ground. Consistent node/edge language across the site. Animate by drawing strokes on scroll-in (respect reduced-motion → show final state instantly). These are a signature asset — commission them as a small reusable diagram kit.

---

## 21. VISUAL DIRECTION

### 21.1 Palette
- **Warm Off-White** `#F7F6F2` — primary background.
- **Near-Black** `#111111` — primary text, dark sections, footer.
- **Cobalt / Electric Blue** `#3155FF` — single accent: CTAs, active states, diagram accents, category tags. Used sparingly so it always means "action/important."
- **Soft Grey** `#E8E8E3` — borders, dividers, muted surfaces.
- *Support (define if needed):* a muted error red `[e.g. #B4322A]`; a mid-grey for captions `[e.g. #6B6B66]`.

Note: the current site's theme colour is a deeper blue (`#044ab3`). The brief specifies the brighter cobalt `#3155FF`; confirm which is canonical. Recommendation: adopt `#3155FF` as the accent for energy, and keep the deeper blue only if brand continuity requires it. Don't run both as accents.

Contrast: near-black on off-white and off-white on near-black both pass AA comfortably. Cobalt on off-white passes for large text and UI; verify cobalt-on-off-white for any body-size use and darken if needed.

### 21.2 Typography
- **Display / headlines:** Space Grotesk or Satoshi — geometric, technical, characterful at very large sizes. (Pick one; Space Grotesk leans more "engineering.")
- **Body / UI:** Inter or Geist — neutral, legible, excellent at text sizes.
- **Mono (labels, meta, code, captions, tags):** Geist Mono or a comparable mono — this is the "engineering" signal; use it deliberately for eyebrows, categories, stat descriptors and captions.

Hierarchy: enormous display headlines (clamp 40→140px) with tight leading and ranged-left setting; clear step-down to section headings; comfortable body at 17–19px, measure ~62–68ch; mono meta at 11–13px, letter-spaced, uppercase for tags.

### 21.3 Layout & imagery
Generous whitespace; editorial, asymmetric layouts; large project imagery; real technical diagrams, data visualisations, product screenshots and real photography. A faint dot-grid or hairline system can run behind sections as a quiet "engineering paper" texture.

**Forbidden imagery:** generic stock photos; fake/generative AI imagery; generic coding/keyboard photos; handshake photos; robot-brain / glowing-AI clichés; excessive gradients; heavy glassmorphism; flashy hero animations. When in doubt, choose type and diagram over photograph.

---

## 22. MOTION STRATEGY

Principle: **clarity > novelty.** Motion signals precision and intelligence, never spectacle. Everything respects `prefers-reduced-motion` (reveals become instant; counters show final values; diagrams show completed state).

- **Scroll reveals:** text masks up / fades in on entry (400–600ms, gentle ease). Applied to headlines and section intros, not every element.
- **Number counters:** stat figures count up once, ≤900ms, ease-out.
- **Project card hover:** image scale 1.03 + name recolour + affordance fade (180ms).
- **Diagram animation:** strokes draw on scroll-in; agent/retrieval flows animate once.
- **Page transitions:** a subtle cover/reveal (cobalt or near-black wipe, ~300ms) between top-level pages — enough to feel considered, never long enough to delay.
- **Horizontal scroll:** optional for Selected Work and for case-study image sequences; must support wheel, drag and keyboard, with a visible progress indicator, and must degrade to vertical stacking on mobile.
- **Cursor:** optional restrained custom cursor on interactive media (a small cobalt dot that grows over cards). Never a trailing/particle cursor. Desktop-only.
- **Header:** transparent→solid transition (§6.3).

Do not make it feel like a gaming site: no parallax overload, no scroll-jacking that traps the user, no bouncing, no confetti, no autoplay sound. If a motion doesn't clarify or guide, cut it.


---

## 23. MOBILE UX

The mobile site is designed, not compressed. Distinct decisions, not a squeezed desktop.

- **Navigation.** Wordmark + `Menu`. Full-screen near-black overlay; four links display-face (~32–40px) with accordion children; contact details and a pinned `Start a Project →` at the base. Body scroll locks when open.
- **Hero.** Headline clamps down to ~40–56px but stays the dominant element; CTAs stack full-width (primary above secondary); the decorative texture reduces or drops so it never crowds the type.
- **Typography scaling.** Display clamps fluidly; body holds at 17px minimum; measure narrows naturally; mono meta stays ≥11px. Line-height loosens slightly for touch reading.
- **Section spacing.** Vertical rhythm increases relative to desktop density — one idea per screen where possible; sections breathe rather than tile.
- **Project cards.** Full-width, image-first, text below; tap navigates (no hover-dependent content). `View case →` shown statically, not on hover.
- **Case studies.** Progress rail becomes a thin top scroll-progress bar. Section numerals (01–13) stay as inline labels. Diagrams scale to full width or become horizontally swipeable with a hint affordance.
- **Forms.** Single column, labels above fields, native selects, 48px min targets, numeric/email keyboards triggered by input type, direct contact details placed *above* the form so the phone number is reachable without scrolling.
- **Horizontal scrolling.** Any desktop horizontal rail becomes a native swipe carousel with a progress dots/bar and a peek of the next card to signal more.
- **Touch targets.** ≥44×44px everywhere; adequate spacing between adjacent tappables.
- **Image behaviour.** Correctly sized, lazy-loaded, fixed aspect ratios (no layout shift); art-directed crops for portrait where a desktop landscape image would waste space.
- **CTA placement.** A persistent, unobtrusive bottom action bar keeps `Start a Project →` one tap away on long pages (auto-hides while the menu or a form is focused). Every major section still ends with an inline CTA.

---

## 24. SEO STRATEGY

Per-page metadata below. Rule: one clear primary keyword per page, natural secondaries, no stuffing. Titles ≤~60 chars, meta descriptions ~150–160 chars. Keep the credible, specific vocabulary the brand already owns.

**Home** — `/`
- **SEO title:** Developer Office — Engineering-Grade Software from Colombo
- **Meta:** A research-driven engineering studio in Colombo building production software and AI systems where reliability, accuracy and privacy matter. Thirty years.
- **Primary:** software engineering studio · **Secondary:** AI engineering, product engineering, software development Sri Lanka, Colombo
- **H1:** We build software that matters.
- **Intent:** navigational + commercial (evaluating a serious engineering partner).

**Work** — `/work`
- **Title:** Selected Work — Developer Office
- **Meta:** Production systems in language technology, legal AI, financial platforms and AI agents — with the problems, engineering and results behind them.
- **Primary:** software engineering case studies · **Secondary:** AI projects, enterprise software case studies
- **H1:** Systems that are running now. · **Intent:** commercial investigation.

**Sinhala & Tamil OCR** — `/work/sinhala-tamil-ocr`
- **Title:** Sinhala & Tamil OCR at 97% Accuracy — Developer Office
- **Meta:** How we built OCR for Sinhala and Tamil at 97% accuracy, digitising archives, court records and print collections the big labs ignore.
- **Primary:** Sinhala OCR · **Secondary:** Tamil OCR, Sinhala Tamil document digitisation, OCR Sri Lanka
- **H1:** OCR that reads Sinhala and Tamil at 97%. · **Intent:** informational + commercial.

**AskLex.law** — `/work/asklex-law`
- **Title:** AskLex.law — Citable Legal AI for Sri Lankan Law
- **Meta:** A legal research assistant for Sri Lankan law: statute and case-law answers in seconds, with citations a lawyer can verify.
- **Primary:** legal AI · **Secondary:** Sri Lanka legal research AI, citable legal AI, legal technology
- **H1:** Legal answers in seconds, with citations you can verify. · **Intent:** informational + commercial.

**Financial Platform Engineering** — `/work/financial-platform-engineering`
- **Title:** Financial Platform Engineering — Developer Office
- **Meta:** Product engineering for a Fortune 500 financial platform: high-volume workflows, deterministic execution, auditability and long-term maintainability.
- **Primary:** financial software engineering · **Secondary:** enterprise software engineering, fintech platform engineering
- **H1:** Financial-grade engineering: deterministic, auditable, at scale. · **Intent:** commercial.

**AI Agent Systems** — `/work/ai-agent-systems`
- **Title:** Production AI Agent Systems — Developer Office
- **Meta:** AI agents that research, draft and monitor in production — with permissioned access and workflows configured to each operation.
- **Primary:** AI agents · **Secondary:** production AI agents, agentic AI systems, AI automation
- **H1:** Agents that survive production. · **Intent:** commercial + informational.

**Capabilities** — `/capabilities`
- **Title:** Capabilities — Product, AI, Research & Enterprise Engineering
- **Meta:** Product engineering, AI engineering, applied research, language & data, enterprise systems and technology advisory — from one team.
- **Primary:** software engineering services · **Secondary:** AI engineering, product engineering
- **H1:** What we do, and how we do it. · **Intent:** commercial.

**AI Engineering** — `/capabilities/ai-engineering`
- **Title:** AI Engineering — Retrieval, Agents & Production AI | Developer Office
- **Meta:** AI as engineering, not a marketing layer: agents, retrieval, evaluation and production deployment with reliability and privacy built in.
- **Primary:** AI engineering · **Secondary:** AI development Sri Lanka, RAG systems, production AI
- **H1:** Intelligence, engineered. · **Intent:** commercial.

**Product Engineering** — `/capabilities/product-engineering`
- **Title:** Product Engineering — Research to Production | Developer Office
- **Meta:** End-to-end product engineering — discovery, design, build and operate — as one dedicated team for founders and institutions.
- **Primary:** product engineering · **Secondary:** software product development, end-to-end product teams
- **H1:** End-to-end product engineering. · **Intent:** commercial.

*(Applied Research, Language & Data, Enterprise Systems, Technology Advisory follow the same pattern — primary keywords: applied research / language technology / Sinhala OCR, enterprise software engineering, technology advisory & data protection Sri Lanka.)*

**Studio / About** — `/studio`
- **Title:** The Studio — Developer Office, Colombo
- **Meta:** A thirty-year engineering studio in Colombo combining research, AI and product delivery in one dedicated team.
- **Primary:** software engineering studio Sri Lanka · **Secondary:** software development company Colombo
- **H1:** Thirty years of building software that has to be right. · **Intent:** navigational + trust.

**Insights** — `/insights`
- **Title:** Insights — Research, Engineering, AI & Product | Developer Office
- **Meta:** Notes from real engagements on language AI, legal AI, production agents and engineering, written for people who build.
- **Primary:** software engineering blog · **Secondary:** AI engineering articles, Sinhala OCR, legal AI
- **H1:** We publish what we learn. · **Intent:** informational.

**Contact / Start a Project** — `/contact/start-a-project`
- **Title:** Start a Project — Developer Office
- **Meta:** Have a difficult technology problem? Start a technical conversation with an engineer at Developer Office in Colombo.
- **Primary:** hire software engineering studio · **Secondary:** AI development Sri Lanka, software development Colombo
- **H1:** Have a difficult problem? · **Intent:** transactional.

**Technical SEO notes.** Server-render for crawlability if using a JS framework; unique title/meta per page; `Organization` + `WebSite` schema on home, `Article` schema on Insights, `BreadcrumbList` on deep pages; OG/Twitter cards per page (reuse the strong current OG copy); XML sitemap; fast LCP (hero is type, not a heavy image — an advantage); descriptive alt text on real imagery; canonical tags. Target the honest local + specialist terms (Sinhala OCR, Tamil OCR, legal AI Sri Lanka, software development Sri Lanka) rather than generic high-competition heads.

---

## 25. CONVERSION STRATEGY

### 25.1 The journey
**Visitor → Understand → Trust → Explore Work → Understand Capability → Contact.**

1. **Understand (Hero + Opening Statement).** In seconds: what Developer Office is and that it's serious. The headline and opening statement do this.
2. **Trust (Proof numbers + Built for Reality).** Verifiable figures and real institutions establish credibility before any ask.
3. **Explore Work (Selected Work → case studies).** Proof deepens; case studies are structured to build conviction (problem → question → result).
4. **Understand Capability (Capabilities).** Buyer self-selects by need and sees it's backed by real projects.
5. **Contact (Start a Project).** A technical-conversation form, routed to an engineer.

### 25.2 CTAs
- **Primary CTA everywhere:** `Start a Project →` (routes to the enquiry form). One label, one destination, site-wide.
- **Secondary CTA:** `Explore Our Work` / `View all work →` — moves undecided visitors deeper into proof rather than out.
- **Placement:** hero (both CTAs); end of every homepage section (contextual); end of every case study (§9.13); end of every capability page; persistent header button (desktop) and bottom action bar (mobile); closing homepage band.

### 25.3 Trust signals
Verifiable numbers (30 years, 97%, Fortune 500, one team); named real systems (AskLex.law, Sinhala & Tamil OCR); real institutions (courts, banks, registries, newsrooms); the "we don't publish what we can't show you" line; direct-to-engineer framing; published Insights as evidence of depth.

### 25.4 Case-study conversion
Each case ends with a targeted CTA tied to the problem type ("Building AI that has to be trusted? Start a Project"). Related-work links keep momentum. The Question (03) and Result (08) are the emotional/logical hooks — designed as the visual peaks.

### 25.5 Contact conversion
Reframe the form as the start of a technical conversation, not a lead-capture. Fields qualify (project type, problem, timeline, budget) without feeling like a sales gate. Direct email/phone always visible for buyers who prefer to skip the form. Personal reply promise reduces friction.

### 25.6 Mobile conversion
Persistent bottom `Start a Project →`; phone number tap-to-call surfaced above forms and in the menu; short, native-input forms; one-idea-per-screen so the argument still lands on a small screen.


---

## 26. CONTENT GOVERNANCE

Rules for every future piece of website content. These protect the one asset the positioning depends on: credibility.

### 26.1 The case-study test
Every new case study must answer, in order:
1. What problem existed?
2. Why was it difficult?
3. What did Developer Office discover?
4. What was built?
5. How was it validated?
6. What changed?
7. What was learned?

If a case can't answer all seven honestly, it isn't ready to publish.

### 26.2 The claim test
Every claim on the site must be:
- **Verifiable** — there's a source or artefact behind it.
- **Specific** — a number, a named system, a concrete constraint, not an adjective.
- **Defensible** — it would survive a CTO asking "prove it."

### 26.3 Hard rules
- **Never** invent statistics, clients, technologies, awards or results.
- Unverified figures use `[VERIFY WITH DEVELOPER OFFICE]`; unavailable results use `[RESULT TO BE VERIFIED]`; missing sections use `[CONTENT REQUIRED]`.
- Named clients appear only with permission; otherwise use the category ("a Fortune 500 financial platform").
- No banned-language list terms (§2.5). No copying competitor copy.
- Numbers get refreshed on a schedule ("30 years" and any headcount/continent figures have a review date).

### 26.4 Voice checklist (per §31)
**Do:** be specific, concise, confident; explain technical concepts clearly; show evidence; tell real stories; write for senior decision-makers.
**Don't:** invent anything; use generic marketing language; overuse buzzwords; make unsupported claims; copy competitors.

---

## 27. IMPLEMENTATION RECOMMENDATIONS

Guidance for the build team — architecture-level, not prescriptive.

- **Stack.** A server-rendered or static-first framework (e.g. Next.js/Astro/SvelteKit) for SEO and fast LCP; the type-led hero means no heavy hero image, which is a real performance win — protect it. Headless CMS (e.g. Sanity/Contentful/Payload) for Work, Insights, Capabilities and Team so non-engineers can add case studies and articles against the fixed templates in §9 and §17.
- **Content model.** Model `CaseStudy` on the thirteen-section template (§9) and `Insight` on §17 fields so governance is enforced structurally (e.g. a `result` field with a "verified?" flag; a required `whatWeLearned`).
- **Design tokens.** Ship the §20 tokens (colour, spacing, radius, type scale, motion) as a single source of truth (CSS variables / Tailwind config / design-token file) so designer and developer share one system.
- **Diagram kit.** Commission a small reusable set of line-art technical diagrams (retrieval flow, agent-with-permissions, five-stage method, OCR pipeline) as SVG components — a signature asset and a differentiator.
- **Motion.** Implement reveals/counters with an intersection-observer utility that centrally honours `prefers-reduced-motion`. Keep motion in one layer so it can be tuned or disabled globally.
- **Accessibility.** AA contrast (verify cobalt at text sizes), visible focus states, keyboard-navigable menus and carousels, real alt text, semantic headings, reduced-motion support, form labels and error messaging. Treat this as a launch gate, not a polish item.
- **Performance.** Budget for fast LCP/CLS: system-metric-friendly font loading (`font-display: swap`, preloaded display face), image lazy-loading with fixed aspect ratios, no layout shift, minimal JS on first paint.
- **Analytics & conversion.** Track the funnel in §25 (hero CTA clicks → work views → capability views → form starts → form completes). Privacy-respecting analytics fit the data-protection positioning — avoid heavyweight trackers.
- **Forms.** Server-side validation + spam honeypot; route Start-a-Project to an engineer inbox, not a generic sales alias; confirm the reply-SLA copy.
- **Migration.** Preserve/redirect existing URLs where they change (`/company` → `/studio`, `/clients` absorbed into `/work` + home). 301 old paths. Reuse the strong existing OG metadata.
- **Pre-launch content pass.** Resolve every `[CONTENT REQUIRED]` / `[VERIFY]` / `[RESULT TO BE VERIFIED]` flag, or cut the claim. Nothing bracketed ships live.

### 27.1 Open items for Developer Office to confirm before launch
- Engineer headcount (brief suggests "40+" — unconfirmed on current site).
- Regional reach / "clients across three continents" claim.
- Canonical accent blue: `#3155FF` (brief) vs `#044ab3` (current site theme).
- Insights authors, dates, reading times.
- Case-study results/metrics currently flagged (financial, agents, AskLex specifics).
- Team names/leadership and the preferred team-page treatment.
- Budget ranges for the enquiry form; reply-SLA wording.
- Whether the newsletter/subscribe is genuinely maintained.

---

## 28. FINAL BRAND NARRATIVE

*The definitive statement of the brand — for the About page, for internal alignment, and as the tone reference for every future writer.*

Some software can be approximate. Ours can't.

Developer Office builds the systems where "close enough" isn't a category — where a legal citation has to resolve, a financial workflow has to execute the same way every time, a citizen's record has to be read correctly off a sixty-year-old page, and personal data has to move through a system that complies. For thirty years, from Colombo, we've taken on the problems that don't come with an off-the-shelf answer.

We started where the easy answers weren't available, and it taught us the habit that still defines us: understand the real problem, research it properly, and build something that survives the real world. That's why AI, here, is engineering — retrieval you can audit, agents with permissioned access, models trained for the scripts the big labs ignore, a human in the loop where a human belongs. It's why we keep research, AI and product engineering inside one team, and why we build for operation, not just launch.

Complex problems deserve serious engineering. We build software that matters.

**Have a difficult problem? Let's figure out what to build.**

---

*End of document. Every bracketed item must be resolved or removed before launch. Nothing in this document invents a client, statistic, technology, award or result; unverifiable claims are flagged, not fabricated.*
