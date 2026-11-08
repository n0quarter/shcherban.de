// TEMPORARY: Kontakt page design variant 5 (pick one with ?v=1…5 on /kontakt/).
import { PageHeader } from "~/components/page-header"
import { useLang } from "~/lib/i18n"

export function KontaktVariant5() {
  const lang = useLang()
  return <PageHeader title={lang === "de" ? "Kontakt – Variante 5 (in Arbeit)" : "Contact – variant 5 (in progress)"} />
}
