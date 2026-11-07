import { PageHeader } from "~/components/page-header"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/kontakt"

// PLACEHOLDER – replaced by the real page.
const title = { de: "Kontakt", en: "Contact" }

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title)

export default function Kontakt() {
  const lang = useLang()
  return <PageHeader title={title[lang]} />
}
