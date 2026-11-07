import { PageHeader } from "~/components/page-header"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/impressum"

// PLACEHOLDER – replaced by the real page.
const title = { de: "Impressum & Datenschutz", en: "Imprint & privacy" }

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title)

export default function Impressum() {
  const lang = useLang()
  return <PageHeader title={title[lang]} />
}
