// TEMPORARY: design variants for the consultation hours in the blue booking block.
// Pick one with ?hours=0…6 (dev-only picker on the homepage). Delete the unused ones afterwards.
import { useEffect, useState } from "react"

import { OpeningHours } from "~/components/opening-hours"
import { useLang, type Lang } from "~/lib/i18n"
import { openingHours } from "~/lib/practice"
import { cn } from "~/lib/utils"

export const hoursVariantNames = [
  "Liste (aktuell)",
  "Kacheln",
  "Zeitleiste",
  "Weiße Karte",
  "Gruppiert",
  "Tabelle mit Linien",
  "Heute markiert",
]

/** Variants that need the full width of the block (shown under the booking text instead of beside it). */
export const wideHoursVariants = new Set([1, 2])

const today: Record<Lang, string> = { de: "Heute", en: "Today" }

/** "11.00–18.00" -> [11, 18]; "nach Vereinbarung" -> null */
function parseTime(time: string): [number, number] | null {
  const match = time.match(/(\d{2})\.(\d{2})–(\d{2})\.(\d{2})/)
  if (!match) return null
  const [, h1, m1, h2, m2] = match.map(Number)
  return [h1 + m1 / 60, h2 + m2 / 60]
}

/** Index 0–4 for Mon–Fri in Berlin time, or null at weekends. Only known in the browser. */
function useTodayIndex() {
  const [index, setIndex] = useState<number | null>(null)
  useEffect(() => {
    const weekday = new Intl.DateTimeFormat("en-GB", { weekday: "short", timeZone: "Europe/Berlin" }).format(new Date())
    const position = ["Mon", "Tue", "Wed", "Thu", "Fri"].indexOf(weekday)
    setIndex(position === -1 ? null : position)
  }, [])
  return index
}

export function HoursVariant({ variant, title }: { variant: number; title: string }) {
  const lang = useLang()
  const todayIndex = useTodayIndex()
  const heading = <p className="mb-4 font-semibold">{title}</p>

  // 1 – one tile per weekday
  if (variant === 1)
    return (
      <div>
        {heading}
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {openingHours.map(({ day, time }) => {
            const range = parseTime(time.de)
            return (
              <div key={day.de} className="rounded-2xl bg-white/10 px-2 py-4 text-center">
                <p className="text-lg font-semibold">{day[lang]}</p>
                {range ? (
                  <p className="mt-1 text-sm leading-snug text-white/80 tabular-nums">
                    {time.de.split("–")[0]}
                    <br />
                    {time.de.split("–")[1]}
                  </p>
                ) : (
                  <p className="mt-1 text-xs leading-snug text-white/80">{time[lang]}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )

  // 2 – week timeline from 7 to 19 h
  if (variant === 2) {
    const start = 7
    const span = 12
    return (
      <div>
        {heading}
        <div className="space-y-3">
          {openingHours.map(({ day, time }) => {
            const range = parseTime(time.de)
            return (
              <div key={day.de} className="grid grid-cols-[2.5rem_1fr_8.5rem] items-center gap-3 text-sm">
                <span className="font-semibold">{day[lang]}</span>
                <div className={cn("relative h-3 rounded-full", range ? "bg-white/15" : "border border-dashed border-white/40")}>
                  {range && (
                    <div
                      className="absolute inset-y-0 rounded-full bg-sun"
                      style={{ left: `${((range[0] - start) / span) * 100}%`, width: `${((range[1] - range[0]) / span) * 100}%` }}
                    />
                  )}
                </div>
                <span className="text-right text-white/80 tabular-nums">{time[lang]}</span>
              </div>
            )
          })}
          <div className="grid grid-cols-[2.5rem_1fr_8.5rem] gap-3 text-xs text-white/50">
            <span />
            <div className="flex justify-between tabular-nums">
              {[7, 10, 13, 16, 19].map((hour) => (
                <span key={hour}>{hour}</span>
              ))}
            </div>
            <span />
          </div>
        </div>
      </div>
    )
  }

  // 3 – white card with dark text
  if (variant === 3)
    return (
      <div className="rounded-3xl bg-white p-6 text-ink shadow-lg">
        <p className="mb-3 font-semibold">{title}</p>
        <dl className="divide-y divide-ink/10">
          {openingHours.map(({ day, time }) => (
            <div key={day.de} className="flex justify-between gap-4 py-2">
              <dt className="font-medium">{day[lang]}</dt>
              <dd className="text-ink/70 tabular-nums">{time[lang]}</dd>
            </div>
          ))}
        </dl>
      </div>
    )

  // 4 – days with the same hours grouped, large times
  if (variant === 4) {
    const groups: { days: string[]; time: string }[] = []
    for (const { day, time } of openingHours) {
      const group = groups.find((g) => g.time === time[lang])
      if (group) group.days.push(day[lang])
      else groups.push({ days: [day[lang]], time: time[lang] })
    }
    return (
      <div>
        {heading}
        <div className="space-y-4">
          {groups.map((group) => (
            <div key={group.time}>
              <p className="text-sm tracking-wide text-white/70 uppercase">{group.days.join(" · ")}</p>
              <p className="text-2xl font-semibold tabular-nums">{group.time}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // 5 and 6 – table with lines; 6 also highlights today
  if (variant === 5 || variant === 6)
    return (
      <div>
        {heading}
        <dl>
          {openingHours.map(({ day, time }, index) => {
            const isToday = variant === 6 && index === todayIndex
            return (
              <div
                key={day.de}
                className={cn(
                  "flex items-center justify-between gap-4 border-b border-white/20 py-2.5",
                  isToday && "-mx-3 rounded-xl border-transparent bg-sun px-3 font-semibold text-ink"
                )}
              >
                <dt className="flex items-center gap-2">
                  {day[lang]}
                  {isToday && <span className="rounded-full bg-ink px-2 py-0.5 text-xs text-white">{today[lang]}</span>}
                </dt>
                <dd className={cn("tabular-nums", !isToday && "text-white/80")}>{time[lang]}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    )

  // 0 – current simple list
  return (
    <div className="[&_dd]:text-white/75 [&_dl]:text-base">
      {heading}
      <OpeningHours />
    </div>
  )
}
