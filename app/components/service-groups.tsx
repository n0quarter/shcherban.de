import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react"
import { Link } from "react-router"

import { localizedPath, useLang } from "~/lib/i18n"
import { services } from "~/lib/services"
import { cn } from "~/lib/utils"

const serviceGroups = [
  {
    title: { de: "Vorsorge", en: "Prevention" },
    slugs: ["krebsvorsorge", "praeventionsmedizin", "impfungen", "igel-leistungen"],
  },
  {
    title: { de: "Lebensphasen", en: "Phases of life" },
    slugs: ["maedchen-sprechstunde", "verhuetung", "kinderwunsch", "schwangerenbetreuung"],
  },
  {
    title: { de: "Beratung bei Beschwerden", en: "Help with complaints" },
    slugs: ["hormonsprechstunde", "inkontinenz-senkungbeschwerden"],
  },
]

const text = {
  de: {
    notListed: "Ihr Anliegen ist nicht dabei?",
    notListedText: "Schreiben Sie uns – wir sagen Ihnen gern, ob und wie wir Ihnen helfen können.",
    contactPage: "Kontakt aufnehmen",
  },
  en: {
    notListed: "Don't see your concern?",
    notListedText: "Write to us – we will gladly tell you whether and how we can help.",
    contactPage: "Get in touch",
  },
}

/** All services in three columns (prevention, phases of life, complaints), each linking to its page. */
export function ServiceGroups({ className }: { className?: string }) {
  const lang = useLang()
  const t = text[lang]

  return (
    <div className={cn("grid gap-x-8 gap-y-12 lg:grid-cols-3", className)}>
      {serviceGroups.map((group) => (
        <div key={group.title.de}>
          <p className="flex items-center gap-2.5 border-b-2 border-ink pb-3 text-sm font-semibold tracking-wide text-ink uppercase">
            <Diamond className="size-2.5 bg-sun" />
            {group.title[lang]}
          </p>
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 lg:block">
            {group.slugs.map((slug) => {
              const service = services.find((s) => s.slug === slug)!
              const Icon = service.icon
              return (
                <li key={slug} className="border-b">
                  <Link to={localizedPath(lang, `/leistungen/${slug}/`)} className="group flex items-start gap-4 py-5">
                    <span className="relative mt-0.5 flex size-11 shrink-0 items-center justify-center">
                      <Diamond className="absolute inset-1 bg-tint transition-colors group-hover:bg-primary" />
                      <Icon className="relative size-5 text-primary transition-colors group-hover:text-primary-foreground" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xl font-semibold tracking-tight text-ink">{service.title[lang]}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{service.teaser[lang]}</span>
                    </span>
                    <ArrowUpRightIcon className="mt-1 size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </Link>
                </li>
              )
            })}
          </ul>
          {group.slugs.length < 3 && (
            <div className="mt-8 rounded-2xl bg-tint p-6">
              <p className="text-xl font-semibold tracking-tight text-ink">{t.notListed}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.notListedText}</p>
              <Link to={localizedPath(lang, "/kontakt/")} className="group mt-4 inline-flex items-center gap-2 font-semibold text-primary">
                {t.contactPage}
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/** The rounded diamond from the logo (same as on the homepage). */
function Diamond({ className }: { className?: string }) {
  return <span aria-hidden className={cn("block rotate-45 rounded-[28%]", className)} />
}
