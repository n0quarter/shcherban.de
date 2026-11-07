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
  kontakt: "routes/kontakt.tsx",
  impressum: "routes/impressum.tsx",
}

export default Object.entries(pages).flatMap(([path, file]) => [
  path === "" ? index(file, { id: "de" }) : route(path, file, { id: `de/${path}` }),
  route(path === "" ? "en" : `en/${path}`, file, { id: `en/${path}` }),
]) satisfies RouteConfig
