import { Link } from "react-router"

import { OpeningHours } from "~/components/opening-hours"
import { localizedPath, useLang } from "~/lib/i18n"
import { practice, siteName } from "~/lib/practice"

const text = {
  de: { writeUs: "Schreiben Sie uns", imprint: "Impressum & Datenschutz", hours: "Sprechstunde", contact: "Kontakt" },
  en: { writeUs: "Write to us", imprint: "Imprint & privacy", hours: "Consultation hours", contact: "Contact" },
}

export function SiteFooter() {
  const lang = useLang()
  const t = text[lang]

  return (
    <footer className="mt-24 border-t bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-3">
        <div className="space-y-3">
          <p className="font-heading text-lg font-semibold">{practice.doctor}</p>
          <p className="text-muted-foreground">{siteName[lang]}</p>
          <div className="flex flex-col gap-1 text-sm">
            <Link to={localizedPath(lang, "/kontakt/")} className="hover:underline">{t.writeUs}</Link>
            <Link to={localizedPath(lang, "/impressum/")} className="hover:underline">{t.imprint}</Link>
            <a href={practice.instagramUrl} target="_blank" rel="noopener" className="hover:underline">
              Instagram
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-semibold">{t.hours}</p>
          <OpeningHours />
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-base font-semibold">{t.contact}</p>
          <p>
            {practice.street}
            <br />
            {practice.city}
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
      <p className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Frauenarztpraxis im Friedrichshain
      </p>
    </footer>
  )
}
