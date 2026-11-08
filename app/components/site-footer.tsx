import { Link } from "react-router"

import { LogoDiamond } from "~/components/brand"
import { OpeningHours } from "~/components/opening-hours"
import { localizedPath, useLang } from "~/lib/i18n"
import { practice, siteName } from "~/lib/practice"

const text = {
  de: {
    writeUs: "Schreiben Sie uns",
    imprint: "Impressum & Datenschutz",
    hours: "Sprechstunde",
    contact: "Kontakt",
    directions: "Route planen",
    rights: "Alle Rechte vorbehalten.",
  },
  en: {
    writeUs: "Write to us",
    imprint: "Imprint & privacy",
    hours: "Consultation hours",
    contact: "Contact",
    directions: "Get directions",
    rights: "All rights reserved.",
  },
}

/** Layout follows the footer of the old shcherban.de site; colours and the corner diamond follow the blue booking panel. */
export function SiteFooter() {
  const lang = useLang()
  const t = text[lang]

  return (
    <footer className="relative mt-24 overflow-hidden bg-primary text-white sm:mt-32">
      <LogoDiamond className="absolute -right-24 -bottom-28 size-96 text-white/8 sm:-right-16 lg:size-[28rem]" />
      <div className="relative mx-auto grid max-w-6xl gap-x-12 gap-y-14 px-4 py-16 md:grid-cols-2 sm:py-20 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="md:col-span-2 lg:col-span-1">
          <p className="text-sm font-bold tracking-wide uppercase">{practice.doctor}</p>
          <p className="mt-4 max-w-md text-4xl leading-tight font-medium text-balance sm:text-5xl">{siteName[lang]}</p>
          <Link
            to={localizedPath(lang, "/kontakt/")}
            className="mt-10 inline-block border-b-3 border-sun pb-2 text-xl font-semibold text-sun transition-opacity hover:opacity-80"
          >
            {t.writeUs}
          </Link>
          <p className="mt-8">
            <Link to={localizedPath(lang, "/impressum/")} className="text-lg text-sun hover:underline">
              {t.imprint}
            </Link>
          </p>
        </div>

        <div>
          <FooterHeading>{t.hours}</FooterHeading>
          <div className="text-base [&_dd]:text-white/80 [&_dl]:grid-cols-[3.25rem_1fr] [&_dl]:gap-y-2 [&_dl]:text-base [&_dt]:font-bold">
            <OpeningHours />
          </div>
          <a href={practice.instagramUrl} target="_blank" rel="noopener" aria-label="Instagram" className="mt-8 inline-block hover:text-sun">
            <InstagramIcon />
          </a>
        </div>

        <div>
          <FooterHeading>{t.contact}</FooterHeading>
          <div className="space-y-5 text-base leading-relaxed">
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
              <a href={`mailto:${practice.email}`} className="text-sun hover:underline">
                {practice.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <p className="relative mx-auto max-w-6xl px-4 pb-10 text-sm text-white/80">
        © {new Date().getFullYear()} Frauenarztpraxis im Friedrichshain. {t.rights}
      </p>
    </footer>
  )
}

function FooterHeading({ children }: { children: string }) {
  return <p className="mb-6 border-b border-white/20 pb-4 text-2xl font-medium">{children}</p>
}

/** Instagram glyph (lucide-react v1 dropped brand icons). */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-9" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
