// TEMPORARY: Kontakt page design variant 4 (pick one with ?v=1…5 on /kontakt/).
import { PageHeader } from "~/components/page-header"
import { useLang } from "~/lib/i18n"

export function KontaktVariant4() {
  const lang = useLang()
  return <PageHeader title={lang === "de" ? "Kontakt – Variante 4 (in Arbeit)" : "Contact – variant 4 (in progress)"} />
}
