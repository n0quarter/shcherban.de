// TEMPORARY: Kontakt page design variant 1 (pick one with ?v=1…5 on /kontakt/).
// Calm single column: booking first, then the contact details as a typographic list with thin rules.
import { ArrowUpRightIcon, CalendarCheckIcon } from "lucide-react"
import type { ReactNode } from "react"

import { DoctolibLogo } from "~/components/doctolib-logo"
import { buttonVariants } from "~/components/ui/button"
import { useLang } from "~/lib/i18n"
import { bookingLabel, openingHours, practice } from "~/lib/practice"
import { cn } from "~/lib/utils"

const text = {
  de: {
    title: "Kontakt",
    bookingText: "Buchen Sie Ihren Termin bequem online über Doctolib. Wir freuen uns auf Sie.",
    detailsHeading: "So erreichen Sie uns",
    email: "E-Mail",
    phone: "Telefon",
    fax: "Fax",
    address: "Adresse",
    directions: "Route planen",
    hours: "Sprechstunde",
    photoAlt: "Die Rezeption der Praxis",
  },
  en: {
    title: "Contact",
    bookingText: "Book your appointment conveniently online via Doctolib. We look forward to seeing you.",
    detailsHeading: "How to reach us",
    email: "Email",
    phone: "Phone",
    fax: "Fax",
    address: "Address",
    directions: "Get directions",
    hours: "Consultation hours",
    photoAlt: "The practice reception",
  },
}

export function KontaktVariant1() {
  const lang = useLang()
  const t = text[lang]

  return (
    <div className="mx-auto max-w-2xl px-4 pt-12 sm:pt-20">
      <section className="text-center">
        <Diamond className="mx-auto" />
        <h1 className="mt-6 font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-tight text-ink">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">{t.bookingText}</p>
        <a
          href={practice.bookingUrl}
          target="_blank"
          rel="noopener"
          className={buttonVariants({ size: "lg", className: "mt-8 h-12 gap-2.5 px-6 text-base" })}
        >
          <CalendarCheckIcon /> {bookingLabel[lang]}
          <DoctolibLogo className="h-[15px]" />
        </a>
      </section>

      <section className="mt-20 sm:mt-24">
        <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">{t.detailsHeading}</h2>
        <dl className="mt-4 border-b">
          <DetailRow label={t.email}>
            <a href={`mailto:${practice.email}`} className="hover:text-primary">
              {practice.email}
            </a>
          </DetailRow>
          <DetailRow label={t.phone}>
            <a href={practice.phoneHref} className="hover:text-primary">
              {practice.phone}
            </a>
          </DetailRow>
          <DetailRow label={t.fax}>{practice.fax}</DetailRow>
          <DetailRow label={t.address}>
            <p>{practice.street}</p>
            <p>{practice.city}</p>
            <a
              href={practice.directionsUrl}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center gap-1.5 text-base font-medium text-primary hover:underline"
            >
              {t.directions} <ArrowUpRightIcon className="size-4" />
            </a>
          </DetailRow>
          <DetailRow label={t.hours}>
            <div className="grid grid-cols-[3.5rem_1fr] gap-y-1.5">
              {openingHours.map(({ day, time }) => (
                <div key={day.de} className="contents">
                  <span className="font-semibold">{day[lang]}</span>
                  <span className="font-normal text-muted-foreground">{time[lang]}</span>
                </div>
              ))}
            </div>
          </DetailRow>
        </dl>
      </section>

      <img src="/images/praxis-17.jpg" alt={t.photoAlt} loading="lazy" className="mt-20 aspect-[3/2] w-full rounded-3xl object-cover sm:mt-24" />
    </div>
  )
}

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1.5 border-t py-6 sm:grid-cols-[11rem_1fr] sm:gap-6">
      <dt className="flex items-center gap-2.5 self-start text-base text-muted-foreground sm:pt-0.5">
        <Diamond className="size-2" /> {label}
      </dt>
      <dd className="text-lg font-medium text-ink sm:text-xl">{children}</dd>
    </div>
  )
}

/** Small rounded diamond in logo yellow, echoing the logo shape. */
function Diamond({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("block size-3 shrink-0 rotate-45 rounded-[3px] bg-sun", className)} />
}
