// TEMPORARY: Kontakt page design variant 3 (pick one with ?v=1…5 on /kontakt/).
import { PageHeader } from "~/components/page-header"
import { useLang } from "~/lib/i18n"

export function KontaktVariant3() {
  const lang = useLang()
  return <PageHeader title={lang === "de" ? "Kontakt – Variante 3 (in Arbeit)" : "Contact – variant 3 (in progress)"} />
}
