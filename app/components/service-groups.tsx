import { ArrowRightIcon } from "lucide-react"
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
    <div className={cn("grid items-start gap-5 lg:grid-cols-3", className)}>
      {serviceGroups.map((group) => (
        <div key={group.title.de} className="space-y-5">
          <div className="rounded-3xl bg-tint p-3 sm:p-4">
            <p className="flex items-center gap-2.5 px-3 pt-3 pb-2 text-lg font-semibold text-ink">
              <Diamond className="size-2.5 bg-primary" />
              {group.title[lang]}
            </p>
            <ul className="md:grid md:grid-cols-2 md:gap-x-2 lg:block">
              {group.slugs.map((slug) => {
                const service = services.find((s) => s.slug === slug)!
                const Icon = service.icon
                return (
                  <li key={slug}>
                    <Link
                      to={localizedPath(lang, `/leistungen/${slug}/`)}
                      className="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-background"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-ink">{service.title[lang]}</span>
                        <span className="mt-0.5 block text-sm text-muted-foreground">{service.teaser[lang]}</span>
                      </span>
                      <ArrowRightIcon className="mt-2.5 size-4 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          {group.slugs.length < 3 && (
            <div className="rounded-3xl border p-6 sm:p-7">
              <p className="text-lg font-semibold text-ink">{t.notListed}</p>
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
