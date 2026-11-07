import { PageHeader } from "~/components/page-header"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/index"

// PLACEHOLDER – replaced by the real page.
const title = { de: "Leistungen", en: "Services" }

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title)

export default function Leistungen() {
  const lang = useLang()
  return <PageHeader title={title[lang]} />
}
