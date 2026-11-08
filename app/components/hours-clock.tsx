// TEMPORARY: clock-style designs for the consultation hours in the blue booking block (?hours=7…10).
// All of them build on variant 5 (table with lines). Delete the unused ones after a choice.
import type { ReactNode } from "react"

import { parseTime, useBerlinNow } from "~/lib/hours"
import { useLang, type Lang } from "~/lib/i18n"
import { openingHours } from "~/lib/practice"
import { cn } from "~/lib/utils"

const text: Record<Lang, { today: string; now: string; notNow: string; closedToday: string; next: string}> = {
  de: { today: "Heute", now: "Jetzt Sprechstunde", notNow: "Jetzt keine Sprechstunde", closedToday: "Heute keine Sprechstunde", next: "Nächste Sprechstunde" },
  en: { today: "Today", now: "Open now", notNow: "Closed now", closedToday: "No consultation today", next: "Next consultation" },
}

const days = openingHours.map(({ day, time }) => ({ day, time, range: parseTime(time.de) }))

// Days with the same hours share a colour: Mo/Mi yellow, Di/Do white.
const groupTimes = [...new Set(days.filter((d) => d.range).map((d) => d.time.de))]
const groupColours = ["var(--sun)", "#ffffff"]
const colourOf = (time: string) => groupColours[groupTimes.indexOf(time)]

export function ClockHours({ variant, title }: { variant: number; title: string }) {
  const heading = <p className="mb-4 font-semibold">{title}</p>
  if (variant === 8) return <FiveClocks heading={heading} />
  if (variant === 9) return <DayWheel heading={heading} />
  if (variant === 10) return <LiveClock heading={heading} />
  return <TwoRings heading={heading} />
}

// 7 – one 12-hour clock, one ring per group of days, the table doubles as the legend
function TwoRings({ heading }: { heading: ReactNode }) {
  const [outer, inner] = groupTimes.map((time) => days.find((d) => d.time.de === time)!.range!)
  return (
    <div>
      {heading}
      <ClockAndTable
        clock={
          <Dial>
            <Ring r={62} />
            <Ring r={44} />
            <Arc r={62} from={outer[0] * 30} hours={outer[1] - outer[0]} perHour={30} colour={groupColours[0]} />
            <Arc r={44} from={inner[0] * 30} hours={inner[1] - inner[0]} perHour={30} colour={groupColours[1]} />
          </Dial>
        }
        marker={(index) => <Swatch colour={days[index].range ? colourOf(days[index].time.de) : undefined} />}
      />
    </div>
  )
}

// 8 – a small clock per weekday (full width)
function FiveClocks({ heading }: { heading: ReactNode }) {
  const lang = useLang()
  const todayIndex = useBerlinNow()?.weekday ?? null
  return (
    <div>
      {heading}
      <div className="grid grid-cols-5 gap-2 sm:gap-4">
        {days.map(({ day, time, range }, index) => (
          <div key={day.de} className={cn("rounded-2xl px-1 py-3 text-center sm:px-3 sm:py-4", index === todayIndex && "bg-white/10")}>
            <Dial small className="mx-auto max-w-28">
              {range ? <Arc r={64} from={range[0] * 30} hours={range[1] - range[0]} perHour={30} colour="var(--sun)" width={18} /> : <Ring r={64} dashed />}
            </Dial>
            <p className="mt-3 font-semibold">{day[lang]}</p>
            <p className="mt-0.5 text-xs leading-snug hyphens-auto text-white/80 tabular-nums sm:text-sm">
              {range ? (
                <>
                  {time.de.split("–")[0]}
                  <br />
                  {time.de.split("–")[1]}
                </>
              ) : (
                time[lang]
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// 9 – 24-hour day wheel: noon at the top, one ring per weekday (Mo outside, Fr inside)
function DayWheel({ heading }: { heading: ReactNode }) {
  const lang = useLang()
  const radii = [86, 72, 58, 44, 30]
  const angle = (hour: number) => (hour - 12) * 15
  return (
    <div>
      {heading}
      <ClockAndTable
        clock={
          <svg viewBox="-112 -112 224 224" className="w-full" aria-hidden="true">
            <circle r="99" fill="rgb(255 255 255 / 0.08)" />
            {days.map(({ day, range }, index) =>
              range ? (
                <g key={day.de}>
                  <Ring r={radii[index]} width={9} />
                  <Arc r={radii[index]} from={angle(range[0])} hours={range[1] - range[0]} perHour={15} colour={colourOf(days[index].time.de)} width={9} />
                </g>
              ) : (
                <Ring key={day.de} r={radii[index]} width={2} dashed />
              )
            )}
            {days.map(({ day }, index) => (
              <text key={day.de} x="0" y={radii[index] + 3} textAnchor="middle" fontSize="8" fontWeight="600" fill="#ffffff">
                {day[lang].slice(0, 2)}
              </text>
            ))}
            {[
              [12, 0, -106],
              [18, 106, 0],
              [6, -106, 0],
            ].map(([hour, x, y]) => (
              <text key={hour} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="rgb(255 255 255 / 0.75)">
                {hour}
              </text>
            ))}
          </svg>
        }
        marker={(index) => <Swatch colour={days[index].range ? colourOf(days[index].time.de) : undefined} />}
      />
      <p className="mt-3 text-xs text-white/70">{lang === "de" ? "Oben = 12 Uhr mittags · Mo außen, Fr innen" : "Top = 12 noon · Mon outside, Fri inside"}</p>
    </div>
  )
}

// 10 – a real clock with hands (Berlin time) and today's hours, plus a "now" status
function LiveClock({ heading }: { heading: ReactNode }) {
  const lang = useLang()
  const t = text[lang]
  const now = useBerlinNow()
  const today = now?.weekday != null ? days[now.weekday] : null
  const range = today?.range ?? null
  const isOpen = range && now ? now.hour >= range[0] && now.hour < range[1] : false
  const next = now && !isOpen ? nextConsultation(now.weekday, now.hour) : null

  return (
    <div>
      {heading}
      <ClockAndTable
        clock={
          <Dial>
            <Ring r={56} />
            {range ? <Arc r={56} from={range[0] * 30} hours={range[1] - range[0]} perHour={30} colour="var(--sun)" width={14} /> : <Ring r={56} dashed />}
            {now && (
              <>
                <Hand angle={(now.hour % 12) * 30} length={36} width={6} />
                <Hand angle={(now.hour % 1) * 360} length={58} width={3} />
              </>
            )}
            <circle r="5" fill="var(--sun)" />
          </Dial>
        }
        highlight={now?.weekday ?? null}
        below={
          now && (
            <p className="flex flex-wrap items-center gap-2 text-sm">
              {today ? (
                <>
                  <span>
                    {t.today}: {today.time[lang]}
                  </span>
                  {range && <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-semibold", isOpen ? "bg-sun text-ink" : "bg-white/15")}>{isOpen ? t.now : t.notNow}</span>}
                </>
              ) : (
                <span>{t.closedToday}</span>
              )}
              {next && (
                <span className="basis-full text-white/85">
                  {t.next}: {next.day[lang]} {next.time[lang]}
                </span>
              )}
            </p>
          )
        }
      />
    </div>
  )
}

/** The next weekday whose hours have not started yet (weekend and Friday → Monday). */
function nextConsultation(weekday: number | null, hour: number) {
  const start = weekday ?? -1
  for (let offset = 0; offset < 7; offset++) {
    const index = (start + offset + (weekday === null ? 1 : 0)) % 7
    const day = days[index]
    if (!day?.range) continue
    if (offset === 0 && weekday !== null && hour >= day.range[0]) continue
    return day
  }
  return null
}

/** Clock beside the variant-5 table; stacks when the column is narrow. */
function ClockAndTable({ clock, marker, highlight = null, below }: { clock: ReactNode; marker?: (index: number) => ReactNode; highlight?: number | null; below?: ReactNode }) {
  const lang = useLang()
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
      <div className="w-40 shrink-0 sm:w-44">{clock}</div>
      <div className="min-w-52 flex-1">
        <dl>
          {days.map(({ day, time }, index) => (
            <div key={day.de} className={cn("flex items-center justify-between gap-4 border-b border-white/20 py-2.5", index === highlight && "font-semibold text-sun")}>
              <dt className="flex items-center gap-2.5">
                {marker?.(index)}
                {day[lang]}
              </dt>
              <dd className={cn("tabular-nums", index !== highlight && "text-white/85")}>{time[lang]}</dd>
            </div>
          ))}
        </dl>
        {below && <div className="mt-4">{below}</div>}
      </div>
    </div>
  )
}

/** 12-hour clock face with ticks and the numbers 12 · 3 · 6 · 9. */
function Dial({ small, className, children }: { small?: boolean; className?: string; children: ReactNode }) {
  return (
    <svg viewBox="-100 -100 200 200" className={cn("w-full", className)} aria-hidden="true">
      <circle r="99" fill="rgb(255 255 255 / 0.08)" />
      {Array.from({ length: 12 }, (_, hour) => {
        const major = hour % 3 === 0
        if (small && !major) return null
        const [x1, y1] = polar(major ? 84 : 89, hour * 30)
        const [x2, y2] = polar(95, hour * 30)
        return <line key={hour} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgb(255 255 255 / 0.6)" strokeWidth={major ? 4 : 2} strokeLinecap="round" />
      })}
      {!small &&
        [12, 3, 6, 9].map((hour) => {
          const [x, y] = polar(74, (hour % 12) * 30)
          return (
            <text key={hour} x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize="13" fill="rgb(255 255 255 / 0.75)">
              {hour}
            </text>
          )
        })}
      {children}
    </svg>
  )
}

function Ring({ r, width = 12, dashed }: { r: number; width?: number; dashed?: boolean }) {
  return (
    <circle
      r={r}
      fill="none"
      stroke={dashed ? "rgb(255 255 255 / 0.45)" : "rgb(255 255 255 / 0.12)"}
      strokeWidth={dashed ? 2 : width}
      strokeDasharray={dashed ? "4 5" : undefined}
    />
  )
}

/** Arc from `from` degrees (0 = top, clockwise) over `hours` × `perHour` degrees. */
function Arc({ r, from, hours, perHour, colour, width = 12 }: { r: number; from: number; hours: number; perHour: number; colour: string; width?: number }) {
  const sweep = hours * perHour
  const [x1, y1] = polar(r, from)
  const [x2, y2] = polar(r, from + sweep)
  return (
    <path
      d={`M ${x1} ${y1} A ${r} ${r} 0 ${sweep > 180 ? 1 : 0} 1 ${x2} ${y2}`}
      fill="none"
      stroke={colour}
      strokeWidth={width}
      strokeLinecap="round"
    />
  )
}

function Hand({ angle, length, width }: { angle: number; length: number; width: number }) {
  const [x, y] = polar(length, angle)
  return <line x1="0" y1="0" x2={x} y2={y} stroke="#ffffff" strokeWidth={width} strokeLinecap="round" />
}

function Swatch({ colour }: { colour?: string }) {
  return colour ? (
    <span className="size-3 rounded-full" style={{ background: colour }} />
  ) : (
    <span className="size-3 rounded-full border border-dashed border-white/60" />
  )
}

function polar(r: number, degrees: number): [number, number] {
  const radians = (degrees * Math.PI) / 180
  return [Number((r * Math.sin(radians)).toFixed(2)), Number((-r * Math.cos(radians)).toFixed(2))]
}
