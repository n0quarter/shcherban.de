import { PageHeader } from "~/components/page-header"
import { ServiceGroups } from "~/components/service-groups"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/index"

const title = { de: "Leistungen", en: "Services" }
const description = {
  de: "Leistungen der Frauenarztpraxis Ganna Shcherban in Berlin-Friedrichshain: Vorsorge, Begleitung in allen Lebensphasen und Beratung bei Beschwerden.",
  en: "Services of the gynaecological practice of Ganna Shcherban in Berlin-Friedrichshain: prevention, care through every phase of life and help with complaints.",
}

// Same wording as the homepage intro.
const lead = {
  de: "Von Vorsorgeuntersuchungen und Beratung, über Verhütung und Schwangerschaftsbetreuung, bis hin zur Menopause-Beratung – Ihre Gesundheit und Ihr Wohlbefinden stehen bei uns an erster Stelle.",
  en: "From check-ups and counselling to contraception, pregnancy care and menopause advice – your health and well-being are our top priority.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function Leistungen() {
  const lang = useLang()
  return (
    <>
      <PageHeader title={title[lang]} lead={lead[lang]} />
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <ServiceGroups />
      </section>
    </>
  )
}
