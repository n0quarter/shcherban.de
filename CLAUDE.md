# shcherban.de

Static website of a gynaecological practice in Berlin. Mostly edited by Claude Code on request, then pushed to `main`; GitHub Actions builds and deploys to GitHub Pages.

## Stack
- React Router 8 with `ssr: false` + `prerender: true`: every route becomes a real HTML file at build time (SEO). No server.
- Tailwind 4, shadcn/ui on Base UI (`components.json`, style `base-maia`). Theme colors and font live in `app/app.css`.
- pnpm. Check changes with `pnpm typecheck && pnpm build`.

## Where things live
- `app/routes.ts` – the page list. Paths mirror the old WordPress site. Each page is registered twice: German at `/<path>/`, English at `/en/<path>/`.
- `app/routes/**` – one file per page. Texts are written directly in JSX, both languages in the same file (`German()` / `English()` components or a `{ de, en }` object).
- `app/lib/practice.ts` – address, phone, opening hours, booking URL, navigation, `SITE_URL`.
- `app/lib/i18n.ts` – `useLang()`, `localizedPath()`; `app/lib/seo.ts` – `pageMeta()` for every route's `meta`.
- `app/components/` – header, footer, page layouts (`service-page.tsx`, `page-header.tsx`), shared blocks (`service-groups.tsx`, `photo-gallery.tsx` incl. lightbox, `team-member.tsx`, `doctolib-logo.tsx`); `app/components/ui/` – shadcn components.
- `app/lib/services.ts` – the 10 services (title, teaser, icon) used by the overview lists; each service also has its own page under `app/routes/leistungen/`.
- `public/images/` – web-sized photos. `old-site/` – archive of the old site (raw HTML + original images), local only and git-ignored (the repo is public); `content/` – old texts as Markdown, reference only.

## Rules
- Every text change goes into both languages. German is the original; English is a translation.
- Internal links always end with a slash (`/praxis/`) and go through `localizedPath(lang, ...)`.
- Domain: `SITE_URL` in `app/lib/practice.ts` and `public/CNAME` must match.
- Use `buttonVariants()` on `<a>`/`<Link>` for link-buttons instead of `<Button render>`.
- Don't promote the phone number: it appears only in the footer and on the Kontakt page. Calls to action point to Doctolib booking or the Kontakt page.

## UI kit and design feedback (local only)
- `/ui-kit` (http://localhost:5180/ui-kit/) shows the design building blocks with lettered variants. The route exists only on the dev server (`app/routes.ts`), never in the published build.
- The owner's picks, comments and answers are saved by the dev server to `design/ui-kit-feedback.json` (`tooling/ui-kit-feedback.ts`). Element ids are `<category>.<letter>` (e.g. `eyebrow.B`); a comment target without a letter refers to the whole category. Read this file when asked to apply the UI-kit decisions.
- Comments may carry a `quote` (text the owner selected on the page; shown as a highlighted margin note, `app/components/ui-kit/comment-margin.tsx`); answers to in-category questions are keyed `<category>:<question id>`. Questions live in `app/components/ui-kit/questions.tsx`, the live/partly/idea status of every category in `app/components/ui-kit/status.ts` – update the status when decisions are applied.
- Shared brand shapes (logo diamond, star) live in `app/components/brand.tsx`.
