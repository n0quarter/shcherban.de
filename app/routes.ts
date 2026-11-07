import { type RouteConfig, index, route } from "@react-router/dev/routes"

// Paths mirror the old WordPress site, so old links keep working.
// Every page exists twice: German at /<path>/ and English at /en/<path>/.
const pages: Record<string, string> = {
  "": "routes/home.tsx",
  praxisteam: "routes/praxisteam.tsx",
  praxis: "routes/praxis.tsx",
  leistungen: "routes/leistungen/index.tsx",
  "leistungen/krebsvorsorge": "routes/leistungen/krebsvorsorge.tsx",
  "leistungen/schwangerenbetreuung": "routes/leistungen/schwangerenbetreuung.tsx",
  "leistungen/verhuetung": "routes/leistungen/verhuetung.tsx",
  "leistungen/maedchen-sprechstunde": "routes/leistungen/maedchen-sprechstunde.tsx",
  "leistungen/kinderwunsch": "routes/leistungen/kinderwunsch.tsx",
  "leistungen/hormonsprechstunde": "routes/leistungen/hormonsprechstunde.tsx",
  "leistungen/inkontinenz-senkungbeschwerden": "routes/leistungen/inkontinenz-senkungbeschwerden.tsx",
  "leistungen/praeventionsmedizin": "routes/leistungen/praeventionsmedizin.tsx",
  "leistungen/impfungen": "routes/leistungen/impfungen.tsx",
  "leistungen/igel-leistungen": "routes/leistungen/igel-leistungen.tsx",
  actuales: "routes/news/index.tsx",
  kontakt: "routes/kontakt.tsx",
  impressum: "routes/impressum.tsx",
}

// News posts keep their old dated URLs. Each path needs an entry in app/content/news.tsx.
const newsPosts = [
  "2025/05/05/urlaub-vertretung",
  "2024/12/22/oeffnungszeiten-ueber-die-feiertage",
  "2024/09/08/neu-im-team-sabine-luedecke",
  "2023/09/06/urlaub-sonderoeffnugszeiten-vacation-special-opening-hours",
  "2023/08/06/geaenderte-oeffnungszeiten-28-8-bis-1-9-changed-opening-hours-28-8-1-9",
  "2023/07/06/praxis-am-19-5-geschlossen-office-closed-19-5",
]
for (const post of newsPosts) pages[post] = "routes/news/post.tsx"

// TEMPORARY while the homepage design is being iterated: only routes whose files exist yet.
for (const path of Object.keys(pages)) if (path !== "" && !path.startsWith("leistungen/")) delete pages[path]

export default Object.entries(pages).flatMap(([path, file]) => [
  path === "" ? index(file, { id: "de" }) : route(path, file, { id: `de/${path}` }),
  route(path === "" ? "en" : `en/${path}`, file, { id: `en/${path}` }),
]) satisfies RouteConfig
