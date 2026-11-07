import { PageHeader } from "~/components/page-header"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/praxis"

// PLACEHOLDER – replaced by the real page.
const title = { de: "Praxis", en: "Practice" }

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title)

export default function Praxis() {
  const lang = useLang()
  return <PageHeader title={title[lang]} />
}
