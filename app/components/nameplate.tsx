// The practice nameplate (like the glass sign at the door), used on the Kontakt page.
import { ArrowUpRightIcon, CalendarCheckIcon } from "lucide-react"
import type { ReactNode } from "react"

import { DoctolibLogo } from "~/components/doctolib-logo"
import { buttonVariants } from "~/components/ui/button"
import { useLang, type Lang } from "~/lib/i18n"
import { bookingLabel, openingHours, practice, siteName } from "~/lib/practice"
import { cn } from "~/lib/utils"

export const plateText: Record<
  Lang,
  { doctorRole: string; hours: string; address: string; contact: string; phone: string; fax: string; email: string; directions: string; photoAlt: string }
> = {
  de: {
    doctorRole: "Fachärztin für Frauenheilkunde und Geburtshilfe",
    hours: "Sprechstunde",
    address: "Adresse",
    contact: "Kontakt",
    phone: "Telefon",
    fax: "Fax",
    email: "E-Mail",
    directions: "Route planen",
    photoAlt: "Die Rezeption der Praxis",
  },
  en: {
    doctorRole: "Specialist in gynaecology and obstetrics",
    hours: "Consultation hours",
    address: "Address",
    contact: "Contact",
    phone: "Phone",
    fax: "Fax",
    email: "Email",
    directions: "Get directions",
    photoAlt: "The practice reception",
  },
}

export function usePlateText() {
  return plateText[useLang()]
}

/** The glass nameplate itself: rounded white card with four screw caps. */
export function Plate({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <article
      className={cn(
        "relative rounded-[1.5rem] border border-white bg-white bg-linear-to-br from-white via-white to-tint/60 shadow-2xl shadow-primary/15 ring-1 ring-ink/5",
        className
      )}
    >
      <Standoff className="top-4 left-4" />
      <Standoff className="top-4 right-4" />
      <Standoff className="bottom-4 left-4" />
      <Standoff className="right-4 bottom-4" />
      {children}
    </article>
  )
}

/** Logo mark, practice name, doctor and specialty – the top of every nameplate. */
export function PlateHead() {
  const lang = useLang()
  const t = plateText[lang]
  return (
    <>
      <div className="flex items-center gap-3">
        <img src="/logo-mark.svg" alt="" className="size-10 shrink-0" />
        <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase sm:text-sm">{siteName[lang]}</p>
      </div>
      <h2 className="mt-5 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight font-semibold tracking-tight text-ink">{practice.doctor}</h2>
      <p className="mt-2 text-lg text-balance text-primary">{t.doctorRole}</p>
    </>
  )
}

export function YellowBar({ className }: { className?: string }) {
  return <div className={cn("h-1 w-16 rounded-full bg-sun", className)} />
}

export function PlateField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">{label}</h3>
      <div className="mt-3 text-base text-ink">{children}</div>
    </section>
  )
}

export function HoursList() {
  const lang = useLang()
  return (
    <dl className="grid grid-cols-[3rem_1fr] gap-y-1.5 tabular-nums">
      {openingHours.map(({ day, time }) => (
        <div key={day.de} className="contents">
          <dt className="font-semibold">{day[lang]}</dt>
          <dd className="whitespace-nowrap">{time[lang]}</dd>
        </div>
      ))}
    </dl>
  )
}

export function AddressBlock() {
  const t = usePlateText()
  return (
    <>
      <p>{practice.street}</p>
      <p>{practice.city}</p>
      <a href={practice.directionsUrl} target="_blank" rel="noopener" className="mt-1.5 inline-flex items-center gap-1.5 text-primary hover:underline">
        {t.directions} <ArrowUpRightIcon className="size-4" />
      </a>
    </>
  )
}

export function ContactList() {
  const t = usePlateText()
  return (
    <dl className="grid grid-cols-[4.25rem_1fr] gap-y-1.5">
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
        <a href={`mailto:${practice.email}`} className="font-semibold break-all hover:text-primary">
          {practice.email}
        </a>
      </dd>
    </dl>
  )
}

export function BookingButton({ className }: { className?: string }) {
  const lang = useLang()
  return (
    <a href={practice.bookingUrl} target="_blank" rel="noopener" className={cn(buttonVariants({ size: "lg" }), "h-12 gap-2.5 px-6 text-base", className)}>
      <CalendarCheckIcon /> {bookingLabel[lang]}
      <DoctolibLogo className="h-[15px]" />
    </a>
  )
}

/** Pale-blue "wall" the nameplate hangs on. */
export function Wall({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden rounded-[2rem] bg-tint", className)}>
      <span className="absolute -top-40 -left-40 size-96 rotate-45 rounded-[28%] bg-white/60" aria-hidden="true" />
      <div className="relative">{children}</div>
    </div>
  )
}

/** The little screw caps that hold a glass nameplate to the wall. */
function Standoff({ className }: { className: string }) {
  return (
    <span
      className={cn("absolute size-3 rounded-full bg-linear-to-br from-white to-ink/15 shadow-[0_1px_2px_rgb(0_0_0/0.2)] ring-1 ring-ink/10", className)}
      aria-hidden="true"
    />
  )
}
