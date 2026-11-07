# shcherban.de

Website of the gynaecological practice Ganna Shcherban, Berlin-Friedrichshain.

React Router (prerendered to static HTML) + Tailwind 4 + shadcn/ui (Base UI), deployed to GitHub Pages.

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # static site in build/client
```

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.
