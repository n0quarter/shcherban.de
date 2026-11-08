import { ArrowUpRightIcon, CalendarCheckIcon, ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import type { ComponentType, ReactNode } from "react"

import { useSearchParams } from "react-router"

import { LogoDiamond } from "~/components/brand"
import { DoctolibLogo } from "~/components/doctolib-logo"
import { KontaktVariant1 } from "~/components/kontakt-variants/variant-1"
import { KontaktVariant2 } from "~/components/kontakt-variants/variant-2"
import { KontaktVariant3 } from "~/components/kontakt-variants/variant-3"
import { KontaktVariant4 } from "~/components/kontakt-variants/variant-4"
import { KontaktVariant5 } from "~/components/kontakt-variants/variant-5"
import { OpeningHours } from "~/components/opening-hours"
import { PageHeader } from "~/components/page-header"
import { buttonVariants } from "~/components/ui/button"
import { useLang } from "~/lib/i18n"
import { bookingLabel, practice } from "~/lib/practice"
import { pageMeta } from "~/lib/seo"
import { cn } from "~/lib/utils"
import type { Route } from "./+types/kontakt"

const title = { de: "Kontakt", en: "Contact" }
const description = {
  de: "Kontakt zur Frauenarztpraxis Ganna Shcherban in Berlin-Friedrichshain: Termin online über Doctolib buchen, E-Mail, Telefon, Fax, Adresse und Sprechstunde.",
  en: "Contact the gynaecological practice of Ganna Shcherban in Berlin-Friedrichshain: book online via Doctolib, email, phone, fax, address and consultation hours.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

const text = {
  de: {
    bookingText: "Buchen Sie Ihren Termin bequem online über Doctolib. Wir freuen uns auf Sie.",
    hours: "Sprechstunde",
    email: "E-Mail",
    phone: "Telefon",
    fax: "Fax",
    address: "Adresse",
    directions: "Route planen",
  },
  en: {
    bookingText: "Book your appointment conveniently online via Doctolib. We look forward to seeing you.",
    hours: "Consultation hours",
    email: "Email",
    phone: "Phone",
    fax: "Fax",
    address: "Address",
    directions: "Get directions",
  },
}

// TEMPORARY: design variants to choose from. ?v=0 (current) … ?v=5; the picker shows only in dev.
const variants = [
  { name: "Aktuell", Component: CurrentVariant },
  { name: "Variante 1", Component: KontaktVariant1 },
  { name: "Variante 2", Component: KontaktVariant2 },
  { name: "Variante 3", Component: KontaktVariant3 },
  { name: "Variante 4", Component: KontaktVariant4 },
  { name: "Variante 5", Component: KontaktVariant5 },
]

export default function Kontakt() {
  const [searchParams, setSearchParams] = useSearchParams()
  const current = Math.min(Number(searchParams.get("v")) || 0, variants.length - 1)
  const { Component } = variants[current]

  return (
    <>
      {import.meta.env.DEV && (
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-4 pt-6 text-xs text-muted-foreground">
          Kontakt:
          {variants.map((variant, index) => (
            <button
              key={variant.name}
              type="button"
              onClick={() => setSearchParams(index ? { v: String(index) } : {}, { replace: true, preventScrollReset: true })}
              className={cn("rounded-full border bg-background px-2.5 py-1 font-medium", index === current && "border-primary bg-primary text-primary-foreground")}
            >
              {index} · {variant.name}
            </button>
          ))}
        </div>
      )}
      <Component />
    </>
  )
}

function CurrentVariant() {
  const lang = useLang()
  const t = text[lang]

  return (
    <>
      <PageHeader title={title[lang]} />

      <div className="mx-auto max-w-6xl space-y-6 px-4">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <section className="relative overflow-hidden rounded-3xl bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-12">
            <LogoDiamond className="absolute -right-16 -bottom-20 size-72 text-white/8" />
            <h2 className="relative text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-[2.125rem]">{bookingLabel[lang]}</h2>
            <p className="relative mt-4 max-w-md text-primary-foreground/80">{t.bookingText}</p>
            <a
              href={practice.bookingUrl}
              target="_blank"
              rel="noopener"
              className={cn(buttonVariants({ size: "lg" }), "relative mt-8 h-12 gap-2.5 bg-sun px-6 text-base text-ink hover:bg-sun/85")}
            >
              <CalendarCheckIcon /> {bookingLabel[lang]}
              <DoctolibLogo color="ink" className="h-[15px]" />
            </a>
          </section>

          <section className="rounded-3xl bg-tint px-6 py-10 sm:px-10 sm:py-12">
            <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-ink">
              <span className="flex size-11 items-center justify-center rounded-xl bg-background">
                <ClockIcon className="size-5 text-primary" />
              </span>
              {t.hours}
            </h2>
            <div className="mt-6 text-ink [&_dd]:text-ink [&_dl]:grid-cols-[3.25rem_1fr] [&_dl]:gap-y-2.5 [&_dl]:text-base [&_dt]:font-semibold">
              <OpeningHours />
            </div>
          </section>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ContactCard icon={MailIcon} label={t.email}>
            <a href={`mailto:${practice.email}`} className="hover:text-primary">
              {practice.email}
            </a>
          </ContactCard>

          <ContactCard icon={PhoneIcon} label={t.phone}>
            <a href={practice.phoneHref} className="hover:text-primary">
              {practice.phone}
            </a>
            <p className="mt-2 text-base font-normal text-muted-foreground">
              {t.fax}: {practice.fax}
            </p>
          </ContactCard>

          <ContactCard icon={MapPinIcon} label={t.address} className="sm:col-span-2 lg:col-span-1">
            <p>{practice.street}</p>
            <p>{practice.city}</p>
            <a
              href={practice.directionsUrl}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center gap-1.5 text-base text-primary hover:underline"
            >
              {t.directions} <ArrowUpRightIcon className="size-4" />
            </a>
          </ContactCard>
        </div>
      </div>
    </>
  )
}

function ContactCard({
  icon: Icon,
  label,
  className,
  children,
}: {
  icon: ComponentType<{ className?: string }>
  label: string
  className?: string
  children: ReactNode
}) {
  return (
    <section className={cn("rounded-3xl border p-6 sm:p-8", className)}>
      <span className="flex size-11 items-center justify-center rounded-xl bg-tint">
        <Icon className="size-5 text-primary" />
      </span>
      <h2 className="mt-5 text-sm font-semibold tracking-wide text-muted-foreground uppercase">{label}</h2>
      <div className="mt-2 text-xl font-semibold tracking-tight text-ink">{children}</div>
    </section>
  )
}
