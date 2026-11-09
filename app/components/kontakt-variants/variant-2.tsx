// TEMPORARY: Kontakt page design variant 2 (pick it with ?v=1 on /kontakt/).
// Idea: the practice nameplate (Praxisschild) at the door, mounted on a pale-blue "wall", with the booking next to it.
import { ArrowUpRightIcon, CalendarCheckIcon } from "lucide-react"
import type { ReactNode } from "react"

import { DoctolibLogo } from "~/components/doctolib-logo"
import { PageHeader } from "~/components/page-header"
import { buttonVariants } from "~/components/ui/button"
import { useLang } from "~/lib/i18n"
import { bookingLabel, openingHours, practice, siteName } from "~/lib/practice"
import { cn } from "~/lib/utils"

const text = {
  de: {
    title: "Kontakt",
    doctorRole: "Fachärztin für Frauenheilkunde und Geburtshilfe",
    hours: "Sprechstunde",
    address: "Adresse",
    contact: "Kontakt",
    phone: "Telefon",
    fax: "Fax",
    email: "E-Mail",
    directions: "Route planen",
    bookingHeading: "Vereinbaren Sie Ihren Termin",
    bookingText: "Buchen Sie Ihren Termin bequem online über Doctolib. Wir freuen uns auf Sie.",
  },
  en: {
    title: "Contact",
    doctorRole: "Specialist in gynaecology and obstetrics",
    hours: "Consultation hours",
    address: "Address",
    contact: "Contact",
    phone: "Phone",
    fax: "Fax",
    email: "Email",
    directions: "Get directions",
    bookingHeading: "Book your appointment",
    bookingText: "Book your appointment conveniently online via Doctolib. We look forward to seeing you.",
  },
}

export function KontaktVariant2() {
  const lang = useLang()
  const t = text[lang]

  return (
    <>
      <PageHeader title={t.title} />

      <div className="mx-auto max-w-6xl px-4">
        {/* The "wall" the nameplate hangs on */}
        <div className="relative overflow-hidden rounded-[2rem] bg-tint px-3 py-6 sm:p-10 lg:p-14">
          <span className="absolute -top-40 -left-40 size-96 rotate-45 rounded-[28%] bg-white/60" aria-hidden="true" />

          <div className="relative grid items-center gap-12 md:grid-cols-[1.6fr_1fr] md:gap-10 lg:gap-16">
            <Nameplate />

            <section className="px-3 sm:px-0">
              <h2 className="text-3xl leading-tight font-semibold tracking-tight text-balance text-ink lg:text-4xl">{t.bookingHeading}</h2>
              <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{t.bookingText}</p>
              <a
                href={practice.bookingUrl}
                target="_blank"
                rel="noopener"
                className={cn(buttonVariants({ size: "lg" }), "mt-8 h-12 gap-2.5 px-6 text-base")}
              >
                <CalendarCheckIcon /> {bookingLabel[lang]}
                <DoctolibLogo className="h-[15px]" />
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

/** The sign at the practice door: name, specialty, hours, address and how to reach us. */
function Nameplate() {
  const lang = useLang()
  const t = text[lang]

  return (
    <article className="relative rounded-[1.5rem] border border-white bg-linear-to-br from-white via-white to-tint/60 px-6 py-10 shadow-2xl shadow-primary/15 ring-1 ring-ink/5 sm:px-12 sm:py-14">
      <Standoff className="top-4 left-4" />
      <Standoff className="top-4 right-4" />
      <Standoff className="bottom-4 left-4" />
      <Standoff className="right-4 bottom-4" />

      <div className="flex items-center gap-3">
        <LogoMark />
        <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase sm:text-sm">{siteName[lang]}</p>
      </div>

      <h2 className="mt-8 text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.02] font-semibold tracking-tight text-ink">{practice.doctor}</h2>
      <p className="mt-3 text-lg text-balance text-primary sm:text-xl">{t.doctorRole}</p>

      <div className="mt-8 h-1 w-16 rounded-full bg-sun" />

      <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-[auto_1fr] md:grid-cols-1 lg:grid-cols-[auto_1fr]">
        <PlateField label={t.hours}>
          <dl className="grid grid-cols-[3.25rem_1fr] gap-y-1.5 tabular-nums">
            {openingHours.map(({ day, time }) => (
              <div key={day.de} className="contents">
                <dt className="font-semibold">{day[lang]}</dt>
                <dd className="whitespace-nowrap">{time[lang]}</dd>
              </div>
            ))}
          </dl>
        </PlateField>

        <div className="space-y-8">
          <PlateField label={t.address}>
            <p>{practice.street}</p>
            <p>{practice.city}</p>
            <a
              href={practice.directionsUrl}
              target="_blank"
              rel="noopener"
              className="mt-1.5 inline-flex items-center gap-1.5 text-primary hover:underline"
            >
              {t.directions} <ArrowUpRightIcon className="size-4" />
            </a>
          </PlateField>

          <PlateField label={t.contact}>
            <dl className="grid grid-cols-[4.5rem_1fr] gap-y-1.5">
              <dt className="text-muted-foreground">{t.phone}</dt>
              <dd>
                <a href={practice.phoneHref} className="font-semibold whitespace-nowrap hover:text-primary">
                  {practice.phone}
                </a>
              </dd>
              <dt className="text-muted-foreground">{t.fax}</dt>
              <dd className="whitespace-nowrap">{practice.fax}</dd>
              <dt className="text-muted-foreground">{t.email}</dt>
              <dd>
                <a href={`mailto:${practice.email}`} className="font-semibold hover:text-primary">
                  {practice.email}
                </a>
              </dd>
            </dl>
          </PlateField>
        </div>
      </div>
    </article>
  )
}

function PlateField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">{label}</h3>
      <div className="mt-3 text-base text-ink sm:text-lg">{children}</div>
    </section>
  )
}

/** The little screw caps that hold a glass nameplate to the wall. */
function Standoff({ className }: { className: string }) {
  return (
    <span
      className={cn(
        "absolute size-3 rounded-full bg-linear-to-br from-white to-ink/15 shadow-[0_1px_2px_rgb(0_0_0/0.2)] ring-1 ring-ink/10",
        className
      )}
      aria-hidden="true"
    />
  )
}

/** Just the diamond from the logo: the wide logo image, cropped to its square mark. */
function LogoMark() {
  return (
    <span className="block size-9 shrink-0 overflow-hidden sm:size-10">
      <img src="/logo.svg" alt="" className="h-full w-auto max-w-none" />
    </span>
  )
}
