// TEMPORARY: Kontakt page design variant 5 (pick one with ?v=1…5 on /kontakt/).
// Bento grid: one compact screen of tiles – booking, photo, email, phone, hours (week chart) and address.
import { ArrowUpRightIcon, CalendarCheckIcon, ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import { useEffect, useState, type ComponentType, type CSSProperties } from "react"

import { DoctolibLogo } from "~/components/doctolib-logo"
import { buttonVariants } from "~/components/ui/button"
import { useLang } from "~/lib/i18n"
import { bookingLabel, openingHours, practice } from "~/lib/practice"
import { cn } from "~/lib/utils"

const text = {
  de: {
    title: "Kontakt",
    bookingLabel: "Online-Termin",
    bookingHeading: "Vereinbaren Sie Ihren Termin",
    bookingText: "Buchen Sie Ihren Termin bequem online über Doctolib. Wir freuen uns auf Sie.",
    photoCaption: "Die Rezeption",
    email: "E-Mail",
    phone: "Telefon",
    fax: "Fax",
    hours: "Sprechstunde",
    today: "Heute",
    address: "Adresse",
    directions: "Route planen",
  },
  en: {
    title: "Contact",
    bookingLabel: "Online booking",
    bookingHeading: "Book your appointment",
    bookingText: "Book your appointment conveniently online via Doctolib. We look forward to seeing you.",
    photoCaption: "The reception",
    email: "Email",
    phone: "Phone",
    fax: "Fax",
    hours: "Consultation hours",
    today: "Today",
    address: "Address",
    directions: "Get directions",
  },
}

export function KontaktVariant5() {
  const lang = useLang()
  const t = text[lang]

  return (
    <div className="mx-auto max-w-6xl px-4">
      <ShapeDefs />
      <h1 className="pt-10 pb-8 font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-tight text-ink sm:pt-12 lg:pt-8 lg:pb-6">
        {t.title}
      </h1>

      {/* Auto-placed: 1 column on phones, 2 from md, 4 from lg. Tile order matters for the placement. */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <BookingTile />

        <figure className="relative order-last min-h-64 overflow-hidden rounded-3xl md:order-none md:row-span-2">
          <img src="/images/praxis-17.jpg" alt={t.photoCaption} className="absolute inset-0 size-full object-cover object-[72%_center]" />
          <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-ink backdrop-blur">
            {t.photoCaption}
          </figcaption>
        </figure>

        <a href={`mailto:${practice.email}`} className="group rounded-3xl border p-6 transition-colors hover:border-primary/40 hover:bg-tint/50">
          <TileLabel icon={MailIcon} label={t.email} linked />
          <p className="mt-5 text-xl font-semibold tracking-tight break-all text-ink group-hover:text-primary">{practice.email}</p>
        </a>

        <div className="rounded-3xl border p-6">
          <TileLabel icon={PhoneIcon} label={t.phone} />
          <a href={practice.phoneHref} className="mt-5 block text-xl font-semibold tracking-tight text-ink hover:text-primary">
            {practice.phone}
          </a>
          <p className="mt-1 text-muted-foreground">
            {t.fax}: {practice.fax}
          </p>
        </div>

        <HoursTile />

        <a
          href={practice.directionsUrl}
          target="_blank"
          rel="noopener"
          className="group relative overflow-hidden rounded-3xl border p-6 transition-colors hover:border-primary/40 md:col-span-2"
        >
          <div className="absolute top-1/2 right-6 hidden size-36 -translate-y-1/2 items-center justify-center bg-tint sm:flex" style={shape} aria-hidden="true">
            <MapPinIcon className="size-10 text-primary transition-transform group-hover:-translate-y-1" />
          </div>
          <div className="relative">
            <TileLabel icon={MapPinIcon} label={t.address} />
            <p className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{practice.street}</p>
            <p className="text-lg text-muted-foreground">{practice.city}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-primary group-hover:underline">
              {t.directions} <ArrowUpRightIcon className="size-4" />
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}

function BookingTile() {
  const lang = useLang()
  const t = text[lang]

  return (
    <section className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground sm:p-8 md:col-span-2 lg:row-span-2">
      <div className="absolute -right-20 -bottom-24 size-80 bg-white/8" style={shape} aria-hidden="true" />
      <div className="relative">
        <p className="inline-flex rounded-[5px] border border-white/70 px-2 py-0.5 text-[13px] font-semibold tracking-wide">{t.bookingLabel}</p>
        <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">{t.bookingHeading}</h2>
        <p className="mt-4 max-w-md text-primary-foreground/80">{t.bookingText}</p>
      </div>
      <div className="relative mt-8">
        <a
          href={practice.bookingUrl}
          target="_blank"
          rel="noopener"
          className={cn(buttonVariants({ size: "lg" }), "h-12 gap-2.5 bg-sun px-6 text-base text-ink hover:bg-sun/85")}
        >
          <CalendarCheckIcon /> {bookingLabel[lang]}
          <DoctolibLogo color="ink" className="h-[15px]" />
        </a>
      </div>
    </section>
  )
}

/** The week as small columns on a 7–19 h scale; today (Berlin time) is drawn in yellow. */
function HoursTile() {
  const lang = useLang()
  const t = text[lang]
  const todayIndex = useTodayIndex()
  const scaleStart = 7
  const scaleHours = 12
  const byAppointment = openingHours.filter(({ time }) => !parseTime(time.de))

  return (
    <section className="rounded-3xl bg-tint p-6 md:col-span-2">
      <TileLabel icon={ClockIcon} label={t.hours} />
      <ol className="mt-5 grid grid-cols-5 gap-2 sm:gap-3">
        {openingHours.map(({ day, time }, index) => {
          const range = parseTime(time.de)
          const isToday = index === todayIndex
          return (
            <li key={day.de} className="flex flex-col items-center text-center">
              <span className={cn("rounded-full px-2 py-0.5 text-sm font-semibold text-ink", isToday && "bg-ink text-white")}>
                {day[lang]}
              </span>
              <div
                className={cn(
                  "relative mt-2 h-24 w-full rounded-2xl",
                  range ? "bg-white" : "border-2 border-dashed border-primary/25"
                )}
              >
                {range && (
                  <div
                    className={cn("absolute inset-x-[34%] rounded-lg", isToday ? "bg-sun" : "bg-primary")}
                    style={{
                      top: `${((range[0] - scaleStart) / scaleHours) * 100}%`,
                      height: `${((range[1] - range[0]) / scaleHours) * 100}%`,
                    }}
                  />
                )}
              </div>
              <span className="mt-2 text-xs leading-snug text-muted-foreground tabular-nums sm:text-sm">
                {range ? (
                  <>
                    {time.de.split("–")[0]}
                    <br />
                    {time.de.split("–")[1]}
                  </>
                ) : (
                  "–"
                )}
              </span>
            </li>
          )
        })}
      </ol>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink">
        {todayIndex !== null && (
          <p className="flex items-center gap-2">
            <span className="size-3.5 rounded-[4px] bg-sun" aria-hidden="true" />
            {t.today}: {openingHours[todayIndex].day[lang]}
          </p>
        )}
        {byAppointment.map(({ day, time }) => (
          <p key={day.de} className="flex items-center gap-2">
            <span className="size-3.5 rounded-[4px] border-2 border-dashed border-primary/40" aria-hidden="true" />
            {day[lang]}: {time[lang]}
          </p>
        ))}
      </div>
    </section>
  )
}

function TileLabel({ icon: Icon, label, linked }: { icon: ComponentType<{ className?: string }>; label: string; linked?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h2 className="flex items-center gap-2.5 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        <span className="flex size-9 items-center justify-center bg-tint" style={shape}>
          <Icon className="size-4 text-primary" />
        </span>
        {label}
      </h2>
      {linked && <ArrowUpRightIcon className="size-5 text-primary/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </div>
  )
}

/** "11.00–18.00" -> [11, 18]; "nach Vereinbarung" -> null */
function parseTime(time: string): [number, number] | null {
  const match = time.match(/(\d{2})\.(\d{2})–(\d{2})\.(\d{2})/)
  if (!match) return null
  const [, h1, m1, h2, m2] = match.map(Number)
  return [h1 + m1 / 60, h2 + m2 / 60]
}

/** Index 0–4 for Mon–Fri in Berlin time, or null at weekends. Only known in the browser (pages are prerendered). */
function useTodayIndex() {
  const [index, setIndex] = useState<number | null>(null)
  useEffect(() => {
    const weekday = new Intl.DateTimeFormat("en-GB", { weekday: "short", timeZone: "Europe/Berlin" }).format(new Date())
    const position = ["Mon", "Tue", "Wed", "Thu", "Fri"].indexOf(weekday)
    setIndex(position === -1 ? null : position)
  }, [])
  return index
}

/** The rounded diamond from the logo (same path as on the homepage). */
const shape: CSSProperties = { clipPath: "url(#kontakt-5-shape)" }

function ShapeDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <clipPath id="kontakt-5-shape" clipPathUnits="objectBoundingBox">
        <path
          transform="scale(0.003263 0.003247)"
          d="M20.5 203.7C-6.8 176.4-6.8 132.1 20.5 104.7L103.7 21.5C131.1-5.8 175.4-5.8 202.7 21.5L286 104.7C313.3 132.1 313.3 176.4 286 203.7L202.7 287C175.4 314.3 131.1 314.3 103.7 287Z"
        />
      </clipPath>
    </svg>
  )
}
