// TEMPORARY: Kontakt page design variant 4 (pick one with ?v=1…5 on /kontakt/).
// Organised by what the patient wants to do: one row per intent, one obvious action per row.
import { ArrowUpRightIcon, CalendarCheckIcon, ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import type { ComponentType, ReactNode } from "react"

import { DoctolibLogo } from "~/components/doctolib-logo"
import { PageHeader } from "~/components/page-header"
import { buttonVariants } from "~/components/ui/button"
import { useLang } from "~/lib/i18n"
import { bookingLabel, openingHours, practice } from "~/lib/practice"
import { cn } from "~/lib/utils"

const text = {
  de: {
    title: "Kontakt",
    lead: "Was möchten Sie tun?",
    bookingText: "Buchen Sie Ihren Termin bequem online über Doctolib. Wir freuen uns auf Sie.",
    emailHeading: "Fragen per E-Mail",
    emailText: "Schreiben Sie uns Ihre Frage per E-Mail.",
    phoneHeading: "Anrufen",
    phoneText: "Während der Sprechstunde erreichen Sie uns telefonisch.",
    fax: "Fax",
    hoursHeading: "Sprechstunde",
    directionsHeading: "So finden Sie uns",
    directionsText: "Die Praxis liegt in Berlin-Friedrichshain.",
    directions: "Route planen",
  },
  en: {
    title: "Contact",
    lead: "What would you like to do?",
    bookingText: "Book your appointment conveniently online via Doctolib. We look forward to seeing you.",
    emailHeading: "Questions by email",
    emailText: "Send us your question by email.",
    phoneHeading: "Call us",
    phoneText: "You can reach us by phone during consultation hours.",
    fax: "Fax",
    hoursHeading: "Consultation hours",
    directionsHeading: "How to find us",
    directionsText: "The practice is located in Berlin-Friedrichshain.",
    directions: "Get directions",
  },
}

const outlineButton = cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 gap-2.5 bg-background px-6 text-base")

export function KontaktVariant4() {
  const lang = useLang()
  const t = text[lang]

  return (
    <>
      <PageHeader title={t.title} lead={t.lead} />

      <div className="mx-auto max-w-6xl px-4">
        <section className="relative overflow-hidden rounded-3xl bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-12">
          <Diamond className="absolute -right-24 -bottom-32 size-96 bg-white/8" />
          <IntentLayout
            icon={<IntentIcon icon={CalendarCheckIcon} className="bg-white/15" iconClassName="text-sun" />}
            heading={bookingLabel[lang]}
            text={<span className="text-primary-foreground/80">{t.bookingText}</span>}
            headingClassName="text-primary-foreground"
          >
            <a
              href={practice.bookingUrl}
              target="_blank"
              rel="noopener"
              className={cn(buttonVariants({ size: "lg" }), "h-12 gap-2.5 bg-sun px-6 text-base text-ink hover:bg-sun/85")}
            >
              <CalendarCheckIcon /> {bookingLabel[lang]}
              <DoctolibLogo color="ink" className="h-[15px]" />
            </a>
          </IntentLayout>
        </section>

        <div className="divide-y sm:px-10">
          <IntentRow icon={MailIcon} heading={t.emailHeading} text={t.emailText}>
            <a href={`mailto:${practice.email}`} className={outlineButton}>
              <MailIcon /> {practice.email}
            </a>
          </IntentRow>

          <IntentRow icon={PhoneIcon} heading={t.phoneHeading} text={t.phoneText}>
            <a href={practice.phoneHref} className={outlineButton}>
              <PhoneIcon /> {practice.phone}
            </a>
            <p className="mt-4 text-muted-foreground">
              {t.fax}: {practice.fax}
            </p>
          </IntentRow>

          <IntentRow icon={ClockIcon} heading={t.hoursHeading}>
            <dl className="grid max-w-xs grid-cols-[3.5rem_1fr] gap-y-2.5 text-lg text-ink">
              {openingHours.map(({ day, time }) => (
                <div key={day.de} className="contents">
                  <dt className="font-semibold">{day[lang]}</dt>
                  <dd>{time[lang]}</dd>
                </div>
              ))}
            </dl>
          </IntentRow>

          <IntentRow icon={MapPinIcon} heading={t.directionsHeading} text={t.directionsText}>
            <address className="text-lg font-semibold text-ink not-italic">
              {practice.street}
              <br />
              {practice.city}
            </address>
            <a href={practice.directionsUrl} target="_blank" rel="noopener" className={cn(outlineButton, "mt-5")}>
              {t.directions} <ArrowUpRightIcon />
            </a>
          </IntentRow>
        </div>
      </div>
    </>
  )
}

function IntentRow({
  icon,
  heading,
  text,
  children,
}: {
  icon: ComponentType<{ className?: string }>
  heading: string
  text?: string
  children: ReactNode
}) {
  return (
    <section className="py-10 sm:py-12">
      <IntentLayout icon={<IntentIcon icon={icon} className="bg-tint" iconClassName="text-primary" />} heading={heading} text={text}>
        {children}
      </IntentLayout>
    </section>
  )
}

/** Intent on the left (icon, heading, short text), its action on the right from md. */
function IntentLayout({
  icon,
  heading,
  text,
  headingClassName = "text-ink",
  children,
}: {
  icon: ReactNode
  heading: string
  text?: ReactNode
  headingClassName?: string
  children: ReactNode
}) {
  return (
    <div className="relative grid gap-6 md:grid-cols-2 md:items-center md:gap-10">
      <div className="flex items-start gap-5">
        {icon}
        <div className="min-w-0">
          <h2 className={cn("text-2xl font-semibold tracking-tight text-balance sm:text-3xl", headingClassName)}>{heading}</h2>
          {text && <p className="mt-2 max-w-md text-muted-foreground">{text}</p>}
        </div>
      </div>
      <div className="min-w-0 sm:pl-[4.25rem] md:pl-0">{children}</div>
    </div>
  )
}

function IntentIcon({
  icon: Icon,
  className,
  iconClassName,
}: {
  icon: ComponentType<{ className?: string }>
  className: string
  iconClassName: string
}) {
  return (
    <span className="relative flex size-12 shrink-0 items-center justify-center">
      <Diamond className={cn("absolute inset-1", className)} />
      <Icon className={cn("relative size-5", iconClassName)} />
    </span>
  )
}

/** The rounded diamond from the logo. */
function Diamond({ className }: { className?: string }) {
  return <span aria-hidden className={cn("block rotate-45 rounded-[28%]", className)} />
}
