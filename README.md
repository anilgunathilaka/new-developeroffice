# Developer Office — Website

Marketing website for Developer Office, built with **Nest.js (MVC) + Handlebars** and **hand-written CSS** (no framework). Server-rendered pages, vanilla-JS interactions, typed content modules.

Built to the spec in `CLAUDE.md` (architecture) and the strategy document (content + design).

## Quick start

```bash
npm install
cp .env.example .env      # set ENQUIRY_TO etc.
npm run start:dev         # http://localhost:3000
```

Build & run production:

```bash
npm run build
npm run start:prod
```

## Stack

- Nest.js + `@nestjs/platform-express`, view engine `hbs` (Handlebars)
- Custom CSS: `public/css/tokens.css` (tokens/reset/fonts), `main.css` (shared components), `pages/*.css` (per page)
- Vanilla JS: `public/js/*` (header, reveal, count, method) — no framework, no jQuery
- Typed content in `src/content` — controllers build view models, templates stay logic-free

## Structure

- `src/pages/*` — one controller per site section; routes mirror the IA
- `src/enquiry/*` — Start-a-Project form (validation, honeypot, service)
- `src/seo/*` — metadata service + `/sitemap.xml` and `/robots.txt`
- `views/` — Handlebars: `layouts/main.hbs` shell, `partials/` (incl. `viz/` SVGs), page templates
- `public/` — CSS, JS, fonts, images (served statically)

## Before launch (open items)

1. **Fonts** — drop the self-hosted `woff2` files into `public/fonts` (names in `tokens.css`). System-ui fallbacks work until then.
2. **Accent colour** — `--cobalt` is `#3155FF` (strategy). Live site uses `#044ab3`. Change once in `tokens.css`.
3. **Enquiry email** — set real `ENQUIRY_TO`; wire SMTP in `enquiry.service.ts` (placeholder logs to console).
4. **Content** — resolve every `[CONTENT REQUIRED]` / `[VERIFY WITH DEVELOPER OFFICE]` / `[RESULT TO BE VERIFIED]` / `[TEAM CONTENT REQUIRED]` marker before publishing. Never invent stats, clients, results, authors or dates.

## Content governance

All content lives in `src/content/*.ts` as typed objects. Case-study results carry a `resultVerified` flag; unverified ones render a `[RESULT TO BE VERIFIED]` treatment. See `CLAUDE.md` §7.
