// TEMPORARY: Kontakt page design variant 1 (pick one with ?v=1…5 on /kontakt/).
import { PageHeader } from "~/components/page-header"
import { useLang } from "~/lib/i18n"

export function KontaktVariant1() {
  const lang = useLang()
  return <PageHeader title={lang === "de" ? "Kontakt – Variante 1 (in Arbeit)" : "Contact – variant 1 (in progress)"} />
}
