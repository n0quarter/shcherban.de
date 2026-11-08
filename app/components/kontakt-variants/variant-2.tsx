// TEMPORARY: Kontakt page design variant 2 (pick one with ?v=1…5 on /kontakt/).
import { PageHeader } from "~/components/page-header"
import { useLang } from "~/lib/i18n"

export function KontaktVariant2() {
  const lang = useLang()
  return <PageHeader title={lang === "de" ? "Kontakt – Variante 2 (in Arbeit)" : "Contact – variant 2 (in progress)"} />
}
