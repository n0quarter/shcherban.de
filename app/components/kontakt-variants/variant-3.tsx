// TEMPORARY: Kontakt page design variant 3 (pick one with ?v=1…5 on /kontakt/).
// Split screen: the reception photo bleeds to the left edge ("this is where you'll arrive"),
// the right side holds the booking button and all contact details. On phones the photo becomes a banner on top.
import { ArrowUpRightIcon, CalendarCheckIcon, ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import type { ComponentType, ReactNode } from "react"

import { DoctolibLogo } from "~/components/doctolib-logo"
import { buttonVariants } from "~/components/ui/button"
import { useLang } from "~/lib/i18n"
import { bookingLabel, openingHours, practice } from "~/lib/practice"
import { cn } from "~/lib/utils"

const text = {
  de: {
    title: "Kontakt",
    bookingText: "Buchen Sie Ihren Termin bequem online über Doctolib. Wir freuen uns auf Sie.",
    welcome: "Willkommen an unserer Rezeption",
    photoAlt: "Die Rezeption der Praxis",
    email: "E-Mail",
    phone: "Telefon",
    fax: "Fax",
    address: "Adresse",
    directions: "Route planen",
    hours: "Sprechstunde",
  },
  en: {
    title: "Contact",
    bookingText: "Book your appointment conveniently online via Doctolib. We look forward to seeing you.",
    welcome: "Welcome to our reception",
    photoAlt: "The practice reception",
    email: "Email",
    phone: "Phone",
    fax: "Fax",
    address: "Address",
    directions: "Get directions",
    hours: "Consultation hours",
  },
}

export function KontaktVariant3() {
  const lang = useLang()
  const t = text[lang]

  return (
    <section className="mt-6 grid md:grid-cols-2">
      <ShapeDefs />
      <div className="relative h-80 sm:h-[26rem] md:h-auto md:min-h-[40rem]">
        <img
          src="/images/praxis-17.jpg"
          alt={t.photoAlt}
          className="absolute inset-0 size-full object-cover object-[75%_center] md:rounded-r-[2.5rem]"
        />
        <div className="absolute top-20 -right-8 hidden size-16 bg-sun md:block" style={{ clipPath: "url(#kontakt-v3-shape)" }} aria-hidden="true" />
        <p className="absolute top-4 left-4 rounded-full bg-sun px-3.5 py-1.5 text-sm font-semibold text-ink shadow-sm md:top-6 md:left-[max(1.5rem,calc(50vw-35rem))]">
          {t.welcome}
        </p>
        <HoursCard title={t.hours} className="absolute bottom-6 left-[max(1.5rem,calc(50vw-35rem))] hidden w-72 md:block" />
      </div>

      <div className="px-4 pt-10 md:px-10 md:py-14 lg:px-14">
        <div className="max-w-[32rem]">
          <h1 className="font-heading text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.05] font-semibold tracking-tight text-balance text-ink">
            {t.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t.bookingText}</p>
          <a
            href={practice.bookingUrl}
            target="_blank"
            rel="noopener"
            className={buttonVariants({ size: "lg", className: "mt-8 h-12 gap-2.5 px-6 text-base" })}
          >
            <CalendarCheckIcon /> {bookingLabel[lang]}
            <DoctolibLogo className="h-[15px]" />
          </a>

          <div className="mt-12 divide-y border-y">
            <ContactRow icon={MailIcon} label={t.email}>
              <a href={`mailto:${practice.email}`} className={linkClass}>
                {practice.email}
              </a>
            </ContactRow>
            <ContactRow icon={PhoneIcon} label={t.phone}>
              <a href={practice.phoneHref} className={linkClass}>
                {practice.phone}
              </a>
              <p className="mt-1 text-muted-foreground">
                {t.fax}: {practice.fax}
              </p>
            </ContactRow>
            <ContactRow icon={MapPinIcon} label={t.address}>
              <a href={practice.directionsUrl} target="_blank" rel="noopener" className={cn(linkClass, "group")}>
                {practice.street}, {practice.city}
                <span className="mt-1 flex items-center gap-1 text-base font-normal text-primary group-hover:underline">
                  {t.directions} <ArrowUpRightIcon className="size-4" />
                </span>
              </a>
            </ContactRow>
          </div>

          <HoursCard title={t.hours} className="mt-8 bg-tint shadow-none md:hidden" />
        </div>
      </div>
    </section>
  )
}

const linkClass = "block text-lg font-semibold tracking-tight break-words text-ink hover:text-primary sm:text-xl"

function ContactRow({ icon: Icon, label, children }: { icon: ComponentType<{ className?: string }>; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 py-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-tint">
        <Icon className="size-5 text-primary" />
      </span>
      <div className="min-w-0">
        <p className="mb-1 text-sm font-semibold tracking-wide text-muted-foreground uppercase">{label}</p>
        {children}
      </div>
    </div>
  )
}

function HoursCard({ title, className }: { title: string; className?: string }) {
  const lang = useLang()

  return (
    <div className={cn("rounded-2xl bg-background/95 p-5 shadow-lg backdrop-blur", className)}>
      <h2 className="flex items-center gap-2 font-semibold text-ink">
        <ClockIcon className="size-5 text-primary" /> {title}
      </h2>
      <dl className="mt-3 grid grid-cols-[3.25rem_1fr] gap-y-1.5 text-ink">
        {openingHours.map(({ day, time }) => (
          <div key={day.de} className="contents">
            <dt className="font-semibold">{day[lang]}</dt>
            <dd>{time[lang]}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

/** The rounded diamond from the logo (same path as on the homepage). */
function ShapeDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <clipPath id="kontakt-v3-shape" clipPathUnits="objectBoundingBox">
        <path
          transform="scale(0.003263 0.003247)"
          d="M20.5 203.7C-6.8 176.4-6.8 132.1 20.5 104.7L103.7 21.5C131.1-5.8 175.4-5.8 202.7 21.5L286 104.7C313.3 132.1 313.3 176.4 286 203.7L202.7 287C175.4 314.3 131.1 314.3 103.7 287Z"
        />
      </clipPath>
    </svg>
  )
}
