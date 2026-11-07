import { useLang } from "~/lib/i18n"
import { openingHours } from "~/lib/practice"

export function OpeningHours() {
  const lang = useLang()

  return (
    <dl className="grid grid-cols-[3rem_1fr] gap-y-1 text-sm">
      {openingHours.map(({ day, time }) => (
        <div key={day.de} className="contents">
          <dt className="font-medium">{day[lang]}</dt>
          <dd className="text-muted-foreground">{time[lang]}</dd>
        </div>
      ))}
    </dl>
  )
}
