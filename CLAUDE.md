# CLAUDE.md — Developer Office Website (Nest.js + Handlebars)

Instructions for any AI coding agent (Claude Code) working on this repository. Read this file fully before writing code. Follow it exactly unless the human explicitly overrides it.

---

## 0. Stack decision (read first)

The human has chosen to build the **frontend with Nest.js**, rendering server-side HTML via the **Handlebars (`hbs`)** template engine, with **custom hand-written CSS** (no framework). This is a deliberate choice; build to it.

**What this means, honestly:** Nest.js is primarily a backend framework. It renders pages through its MVC mode (`@nestjs/platform-express` + a view engine) — this works well for a content site, but it does **not** give you the automatic per-page SEO, image optimisation, or font handling a React meta-framework would. This file therefore specifies how to do each of those **manually** so the site still hits the strategy's SEO (`strategy.md` §24) and performance (§27) goals. Do not treat those as optional.

- **Rendering:** Nest.js MVC, Express platform, `hbs` templates. Every page is a controller action returning a rendered view.
- **Styling:** plain `.css` files served as static assets. **No Tailwind, no Bootstrap, no CSS framework, no CSS-in-JS.**
- **Interactivity:** vanilla JS served as static assets (scroll reveals, mobile menu, count-up, header state). **No React, no Vue, no frontend framework, no jQuery.**
- **Backend needs** (the Start-a-Project form) live in the same Nest app as normal controllers/services — see §11.

If a task seems to require a client-side framework, stop and confirm — it almost certainly doesn't for this site.

---

## 1. What this project is

Developer Office is a research-driven software engineering studio in Colombo, Sri Lanka (~30 years). This repo is its marketing website: home, work (case studies), capabilities, studio/about, insights (articles), and contact.

**Authoritative content & design source:** `strategy.md` in the repo root — the full content + UX/UI spec (final copy, information architecture, UI component system, visual tokens, motion rules, mobile UX, SEO metadata, content-governance rules). **When copy, structure, tokens or behaviour are unclear, `strategy.md` is the source of truth — do not invent an alternative.**

A reference static homepage (`reference/index.html`) already exists — a single self-contained HTML file implementing the homepage with the exact markup, CSS and vanilla-JS behaviour intended. **This is your primary implementation target:** decompose it into Handlebars partials/views + external CSS + external JS. Preserve its markup, tokens, and interactions faithfully; do not redesign it.

---

## 2. Tech stack (fixed — do not substitute)

- **Nest.js** (latest stable), TypeScript.
- **@nestjs/platform-express** (Express under the hood — required for MVC/views).
- **hbs** as the view engine (Handlebars).
- **Custom CSS only**, served from `/public`. Vanilla JS only, served from `/public`.
- **Fonts:** self-hosted (see §5) — Space Grotesk (display), Inter (body), Space Mono (labels/meta). No other typefaces.
- **Validation** (form): `class-validator` + `class-transformer` (Nest standard).
- **Config:** `@nestjs/config` for env vars.
- **Content:** typed TS modules in `src/content` (plain objects). No CMS unless asked (§10).
- **Package manager:** use the existing lockfile; if none, `npm`.
- **Node:** 18.18+ or 20+.

Before adding **any** dependency, check it against this list. If it is not implied here, ask first. Prefer zero extra runtime dependencies beyond the above.

---

## 3. Directory structure

```
/
├── CLAUDE.md
├── strategy.md                      # content + design spec (source of truth)
├── reference/index.html             # implementation target for the homepage
├── nest-cli.json
├── tsconfig.json
├── package.json
├── .env.example
├── public/                          # served statically (main.ts useStaticAssets)
│   ├── css/
│   │   ├── tokens.css               # :root tokens + reset + @font-face + base elements
│   │   ├── main.css                 # shared layout/component styles
│   │   └── pages/                   # page-specific css (home.css, work.css, ...)
│   ├── js/
│   │   ├── header.js                # solid/hide-on-scroll, mobile menu, action bar
│   │   ├── reveal.js                # IntersectionObserver reveals + fail-safe
│   │   ├── count.js                 # stat count-up
│   │   └── method.js                # 5-step sequence highlight
│   ├── fonts/                       # self-hosted woff2 (see §5)
│   └── images/                      # real imagery only (see §7)
└── src/
    ├── main.ts                      # bootstrap: hbs engine, views dir, partials, static assets
    ├── app.module.ts
    ├── pages/                       # one controller per section of the site
    │   ├── pages.module.ts
    │   ├── home.controller.ts
    │   ├── work.controller.ts       # index + :slug
    │   ├── capabilities.controller.ts
    │   ├── studio.controller.ts     # about, approach, team, careers
    │   ├── insights.controller.ts   # index + :slug
    │   └── contact.controller.ts    # contact, general-enquiries
    ├── enquiry/                     # Start-a-Project form (see §11)
    │   ├── enquiry.module.ts
    │   ├── enquiry.controller.ts    # GET + POST /contact/start-a-project
    │   ├── enquiry.service.ts
    │   └── dto/create-enquiry.dto.ts
    ├── seo/                         # metadata builder + JSON-LD + sitemap/robots
    │   ├── seo.service.ts
    │   └── sitemap.controller.ts
    ├── content/                     # typed content: work.ts, capabilities.ts, insights.ts, stats.ts
    └── common/                      # shared types, view-model helpers, hbs helpers
└── views/                          # Handlebars templates
    ├── layouts/
    │   └── main.hbs                 # <html> shell: head, header, {{{body}}}, footer, scripts
    ├── partials/
    │   ├── header.hbs
    │   ├── mobile-menu.hbs
    │   ├── footer.hbs
    │   ├── action-bar.hbs
    │   ├── seo-head.hbs             # <title>, meta, OG/Twitter, JSON-LD
    │   ├── button.hbs
    │   ├── project-card.hbs
    │   ├── article-card.hbs
    │   ├── stat.hbs
    │   └── viz/                     # inline-SVG line-art visuals for cards
    ├── home.hbs
    ├── work/{index,detail}.hbs      # detail = 13-section case-study template
    ├── capabilities/{index,detail}.hbs
    ├── studio/{about,approach,team,careers}.hbs
    ├── insights/{index,detail}.hbs
    └── contact/{index,start-a-project,general-enquiries}.hbs
```

Adjust names sensibly if Nest conventions call for it, but keep the shape: controllers per section, views mirroring routes, partials for anything reused.

---

## 4. Bootstrap (main.ts)

Configure the MVC layer explicitly:

```ts
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import * as hbs from "hbs";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.setViewEngine("hbs");
  hbs.registerPartials(join(__dirname, "..", "views", "partials"));
  // register custom helpers here (see §6)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

- Use `layouts/main.hbs` as the shared shell. Enable layout support (the `hbs` layout convention, or render the layout explicitly passing `{{{body}}}`). Keep one shell; pages provide only their `<main>` content + a per-page metadata object.
- `views/` and `public/` must resolve after `npm run build` (a common Nest MVC footgun — paths point at project root, not `dist`). Add `assets` entries to `nest-cli.json` for `views` and `public` if you copy them, or keep the `join(__dirname, "..", …)` paths above. Verify in a production build.

---

## 5. Fonts (self-hosted)

There is no `next/font` here — self-host to avoid layout shift and a render-blocking third-party request:

- Download **Space Grotesk** (400/500/600/700), **Inter** (400/500/600), **Space Mono** (400/700) as `woff2` into `public/fonts`.
- Declare `@font-face` in `tokens.css` with `font-display: swap`.
- `<link rel="preload" as="font" type="font/woff2" crossorigin>` the two–three critical weights (display 700 for the hero, body 400) in `seo-head.hbs`.
- Reference via the family CSS variables in tokens (below). Do not `@import` from Google Fonts.

---

## 6. Handlebars conventions

- **Layout shell** (`layouts/main.hbs`) contains `<html>`, `<head>` (includes `{{> seo-head}}`), `{{> header}}`, `{{> mobile-menu}}`, `<main>{{{body}}}</main>`, `{{> footer}}`, `{{> action-bar}}`, and `<script defer>` tags for `/js/*`.
- **Partials** for every reused unit (header, footer, buttons, cards, stats, viz). Cards take a context object so pages loop: `{{#each work}}{{> project-card this}}{{/each}}`.
- **Register helpers** in `main.ts` for anything logic-like Handlebars can't do inline: `eq`, `formatDate`, `readingTime`, `json` (for JSON-LD), `asset` (cache-busting suffix). Keep helpers tiny and pure in `src/common`.
- Escaping: use `{{ }}` (escaped) for all content. Only use `{{{ }}}` for trusted pre-built HTML (the layout body slot, inline SVG partials, JSON-LD contents). Never triple-brace user input.
- Keep templates dumb: no business logic in `.hbs`. Controllers build a typed **view model** and pass it in.

---

## 7. Content & content-governance rules (STRICT)

From `strategy.md` §29 and §31 — non-negotiable:

- **Never invent** statistics, clients, technologies, awards, project results, team members, article authors or dates. If a value isn't verified, render the placeholder exactly: `[VERIFY WITH DEVELOPER OFFICE]`, `[RESULT TO BE VERIFIED]`, `[CONTENT REQUIRED]`, or `[TEAM CONTENT REQUIRED]`. Do not silently fill them in.
- **Copy is fixed.** Use exact wording from `strategy.md`. Don't paraphrase headlines or rewrite body copy. If copy is missing, use a placeholder token — don't fabricate.
- **Imagery must be real** — product screenshots, document scans, diagrams, real photography. **No stock photos, no AI-generated/"robot brain" imagery, no generic coding/handshake photos, no decorative gradients or glassmorphism.** Where a real image isn't available, use the inline-SVG line-art `viz` partials or a plain tokened placeholder block — never stock.
- **Banned marketing language** (never write it, including alt text and meta): cutting-edge, best-in-class, digital transformation experts, innovative solutions, revolutionary, next-generation, world-class (self-description), synergy, leverage (verb), game-changing, seamless, turnkey, bleeding-edge, "AI-powered" as decoration.
- Model content as typed objects in `src/content` so controllers pass arrays to views (e.g. `work.ts` exports `CaseStudy[]`; `work/detail.hbs` renders any entry). Enforce the 13-section case-study shape (`strategy.md` §9) and the insight shape (§17) in TypeScript types, including a `verified?: boolean` flag on results so unverified numbers can't ship unflagged.

---

## 8. Design tokens & CSS architecture

- **`public/css/tokens.css`** holds ONLY: reset/normalize, `@font-face`, `:root` tokens, base element styles (`body`, headings, links, `:focus-visible`, `::selection`), and the `prefers-reduced-motion` block.
- **`public/css/main.css`** holds shared layout + component styles (header, footer, buttons, cards, sections used on multiple pages).
- **`public/css/pages/*.css`** holds page-specific styles; include the relevant one per page via a `pageCss` variable rendered in the layout `<head>`.
- Use tokens for **every** colour, space, radius, font. Never hard-code a hex that exists as a token. Never add a colour outside the palette without asking.
- Use `clamp()` for fluid type (values in `strategy.md` §21 and `reference/index.html`). Body measure ≤ ~68ch. Keep specificity flat (one class per rule where possible).

```css
:root{
  --off-white:#F7F6F2;
  --near-black:#111111;
  --cobalt:#3155FF;        /* accent — see NOTE */
  --cobalt-dark:#2643CC;
  --soft-grey:#E8E8E3;
  --mid-grey:#6B6B66;

  --space-1:4px;  --space-2:8px;  --space-3:12px; --space-4:16px;
  --space-5:24px; --space-6:32px; --space-7:48px; --space-8:64px;
  --space-9:96px; --space-10:128px;

  --radius:4px; --radius-sm:2px;
  --ease:cubic-bezier(.2,.6,.2,1);
  --t-state:180ms var(--ease);

  --page-x:clamp(20px,6vw,120px);
  --measure:64ch;

  --display:"Space Grotesk", system-ui, sans-serif;
  --body:"Inter", system-ui, sans-serif;
  --mono:"Space Mono", ui-monospace, monospace;
}
```

> **NOTE — accent colour unresolved.** `strategy.md` specifies cobalt `#3155FF`; the live current site uses `#044ab3`. Default to `#3155FF`. It's a single-token change (`--cobalt`) — keep it centralised so the human can flip it in one place. Confirm if you can.

The exact token values, type scale, and component states are already implemented in `reference/index.html` — lift them from there rather than re-deriving.

---

## 9. SEO & metadata (manual — critical here)

No framework metadata API exists, so build it deliberately:

- Each controller action passes a typed `meta` object (title, description, canonical, ogImage, keywords) into the view. Titles/descriptions/keywords come **verbatim** from `strategy.md` §24 per-page table. Centralise defaults + per-route overrides in `src/seo/seo.service.ts`.
- `partials/seo-head.hbs` renders `<title>`, `<meta name="description">`, canonical `<link>`, OpenGraph/Twitter tags from that object. Reuse strong existing OG copy from the current site where relevant.
- **JSON-LD:** `Organization` + `WebSite` on home, `Article` on insight pages, `BreadcrumbList` on deep pages. Build the object in the controller, serialise with a `json` helper, output inside `<script type="application/ld+json">{{{json ld}}}</script>`.
- **Sitemap & robots:** `sitemap.controller.ts` serves `/sitemap.xml` (built from the route/content list) and `/robots.txt` as real routes, so they stay in sync with content.
- One `<h1>` per page; ordered headings; semantic landmarks; descriptive `alt` on every image; unique title per route. All HTML is server-rendered by default here — lean into it.
- URLs are flat, lowercase-hyphenated, exactly per `strategy.md` §5.3 (e.g. `/work/sinhala-tamil-ocr`). Configure route params to match.

---

## 10. Content source (now vs later)

- **Now:** typed objects in `src/content`. Controllers import them, build view models, render. Simple, type-safe, no external service.
- **Later (only if asked):** a headless CMS or markdown pipeline for Insights/Work. Do not add one unprompted. If asked, keep the view-model shape identical so templates don't change.

---

## 11. The Start-a-Project form

Fields per `strategy.md` §18: name, organisation, email, project type, problem/opportunity, timeline, budget range, additional info.

- `enquiry.controller.ts`: `GET /contact/start-a-project` renders the form; `POST /contact/start-a-project` validates a `CreateEnquiryDto` (`class-validator`), runs a honeypot/spam check, calls `enquiry.service.ts`, then re-renders with a success state or inline field errors. Server-side validation is the baseline; progressive JS enhancement optional.
- `enquiry.service.ts`: send to a real engineer inbox (email) and/or persist. **Confirm the destination address with the human — do not hard-code a guessed email.** The reference uses `hello@developeroffice.com` as a placeholder only.
- Use a global `ValidationPipe` (whitelist + transform). Return accessible, inline error messages tied to fields (`aria-describedby`).
- **Never commit secrets.** Config via `.env` (gitignored) + `@nestjs/config`; document required vars in `.env.example` (e.g. SMTP creds, `ENQUIRY_TO`). No secrets in templates or client JS. Add CSRF protection for the POST.

---

## 12. Motion & interaction (vanilla JS)

Follow `strategy.md` §22. Principle: **clarity > novelty.** All behaviour is small vanilla-JS files in `public/js`, loaded with `defer`. No animation library.

- One hero load reveal; scroll reveals on section entry (IntersectionObserver); stat count-up once; five-step method sequence; SVG diagrams draw on entry; header transparent→solid + hide-on-scroll-down; mobile menu open/close with body-scroll lock; mobile action bar show-on-scroll; card hover (CSS).
- **Always** honour `prefers-reduced-motion: reduce` — reveals instant, counters show final value, diagrams show completed state, no looping motion. Put the fallback in `tokens.css` and also guard in JS.
- **Fail-safe:** reveal-hidden content must never get stuck invisible — reveal after a timeout / on load if the observer misses. (This bug existed in an earlier build; the reference file already fixes it — port the fix, don't regress it.)
- Lift the working JS from `reference/index.html` and split it into `public/js/*`; keep behaviour identical.

---

## 13. Accessibility & quality floor (launch gate, not polish)

- WCAG AA contrast. **Verify cobalt (`#3155FF`) at text sizes** — may need darkening for small text on off-white; large/UI is fine.
- Visible keyboard focus everywhere (`:focus-visible`, never remove outlines). Full keyboard nav for header dropdowns and mobile menu (open on focus, Escape closes, focus trap while open, restore focus on close).
- Semantic HTML: real `<button>`/`<a>` (never div-buttons), `<nav>`/`<main>`/`<footer>`, labelled form fields with inline errors, skip-to-content link in the layout.
- Respect reduced motion (§12). **No horizontal page overflow at any width** — test 1440 / 1024 / 768 / 390 (a real bug fixed in the reference; don't reintroduce it).
- Alt text on all images; decorative SVG `aria-hidden`.

---

## 14. Performance

- Server-rendered HTML is the baseline — keep pages lean. Minimal JS, all `defer`, no framework runtime.
- Self-hosted fonts with `swap` + preload of critical weights (§5). Hero is **type, not a heavy image** — keep it so; it's a real LCP win.
- No `next/image` here: size images correctly, set `width`/`height` (prevent CLS), lazy-load below the fold (`loading="lazy"`), serve `woff2`/optimised image formats. Pre-optimise assets; do not ship huge PNGs.
- Sensible cache headers on `/public`; cache-busting suffix via the `asset` helper when files change.
- Target good Core Web Vitals (LCP, CLS, INP). Run a production build and check before declaring done.

---

## 15. Commands & workflow

- Dev: `npm run start:dev` · Build: `npm run build` · Prod: `npm run start:prod` · Lint: `npm run lint` · Types: `npx tsc --noEmit`.
- **Before saying a task is done:** `npm run build` passes, `tsc --noEmit` clean, `npm run lint` clean; `views/` and `public/` resolve in the built app; page checked responsively (1440/1024/768/390) and with keyboard + reduced motion.
- Small scoped commits (one controller/view/partial per commit). Conventional-commit messages (`feat:`, `fix:`, `refactor:`).
- Do not push, deploy, delete files outside the repo, or run destructive git commands without being asked.

---

## 16. Build order

1. **Bootstrap** — `main.ts` (hbs, views dir, partials, static assets), `app.module.ts`, `layouts/main.hbs` shell, `tokens.css` (port tokens + reset from reference), self-hosted fonts.
2. **Shared partials + JS** — header, mobile-menu, footer, action-bar, buttons; `header.js`, `reveal.js`, `count.js`, `method.js` (ported from reference).
3. **Home** — `home.controller.ts` + `home.hbs`, composing all nine sections to match `reference/index.html` and `strategy.md` §7. This is the proof of the whole setup; get it faithful and overflow-free first.
4. **viz partials** — inline-SVG line-art (OCR strokes, doc→citation, deterministic bars, agent network), tokened, animate-on-scroll with reduced-motion fallback.
5. **Work** — index + case-study detail template, from `src/content/work.ts`.
6. **Capabilities** — index + detail, from `capabilities.ts`.
7. **Studio** — about, approach, team, careers.
8. **Insights** — index + article detail, from `insights.ts`.
9. **Contact / Start-a-Project** — form + enquiry module (§11).
10. **SEO plumbing** — `seo-head` wired everywhere, JSON-LD, `/sitemap.xml`, `/robots.txt`.

---

## 17. Working rules for the agent

- Read the relevant `strategy.md` section **before** building a page/component; treat it as the brief. Use `reference/index.html` as the implementation target for markup/CSS/JS.
- When something is ambiguous or missing, prefer a `[CONTENT REQUIRED]` placeholder + a note to the human over inventing content.
- Stay inside the fixed stack (§2). No React/Vue/jQuery, no CSS framework. Propose, don't silently add, any new dependency.
- Match the visual system exactly (tokens, type scale, spacing, restraint). "Spend boldness in one place" — the typographic hero — and keep everything else quiet. Don't add decoration the spec doesn't call for.
- Keep logic out of templates; controllers build typed view models.
- If you believe a spec or stack choice is wrong, say so and explain the tradeoff — but don't override the human's explicit instruction (Nest.js + hbs) without confirming.
- Keep this file updated if the stack or conventions change, so it stays the accurate build instruction.
