import { Link } from "react-router"

import { OpeningHours } from "~/components/opening-hours"
import { localizedPath, useLang } from "~/lib/i18n"
import { practice, siteName } from "~/lib/practice"

const text = {
  de: { writeUs: "Schreiben Sie uns", imprint: "Impressum & Datenschutz", hours: "Sprechstunde", contact: "Kontakt", directions: "Route planen" },
  en: { writeUs: "Write to us", imprint: "Imprint & privacy", hours: "Consultation hours", contact: "Contact", directions: "Get directions" },
}

export function SiteFooter() {
  const lang = useLang()
  const t = text[lang]

  return (
    <footer className="mt-24 bg-ink text-white sm:mt-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-3 sm:py-20">
        <div className="space-y-3">
          <p className="font-heading text-3xl font-semibold tracking-tight">{practice.doctor}</p>
          <p className="text-white/65">{siteName[lang]}</p>
          <div className="flex flex-col gap-1 text-sm">
            <Link to={localizedPath(lang, "/kontakt/")} className="hover:underline">{t.writeUs}</Link>
            <Link to={localizedPath(lang, "/impressum/")} className="hover:underline">{t.imprint}</Link>
            <a href={practice.instagramUrl} target="_blank" rel="noopener" className="hover:underline">
              Instagram
            </a>
          </div>
        </div>

        <div className="space-y-3 [&_dd]:text-white/65">
          <p className="font-semibold">{t.hours}</p>
          <OpeningHours />
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-base font-semibold">{t.contact}</p>
          <p>
            {practice.street}
            <br />
            {practice.city}
            <br />
            <a href={practice.directionsUrl} target="_blank" rel="noopener" className="text-sun hover:underline">
              {t.directions}
            </a>
          </p>
          <p>
            Tel.: <a href={practice.phoneHref} className="hover:underline">{practice.phone}</a>
            <br />
            Fax: {practice.fax}
            <br />
            <a href={`mailto:${practice.email}`} className="hover:underline">{practice.email}</a>
          </p>
        </div>
      </div>
      <p className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Frauenarztpraxis im Friedrichshain
      </p>
    </footer>
  )
}
