// Helpers for showing the consultation hours (app/lib/practice.ts → openingHours).
import { useEffect, useState } from "react"

/** "11.00–18.00" -> [11, 18]; "07.30–14.00" -> [7.5, 14]; "nach Vereinbarung" -> null */
export function parseTime(time: string): [number, number] | null {
  const match = time.match(/(\d{2})\.(\d{2})–(\d{2})\.(\d{2})/)
  if (!match) return null
  const [, h1, m1, h2, m2] = match.map(Number)
  return [h1 + m1 / 60, h2 + m2 / 60]
}

/** Index 0–4 for Mon–Fri in Berlin time, or null at weekends. Only known in the browser. */
export function useTodayIndex() {
  const now = useBerlinNow()
  return now?.weekday ?? null
}

/** Current Berlin time as { weekday: 0–4 or null, hour: e.g. 14.5 }. Null until mounted (prerendered HTML has no "now"). */
export function useBerlinNow() {
  const [now, setNow] = useState<{ weekday: number | null; hour: number } | null>(null)
  useEffect(() => {
    const update = () => {
      const parts = new Intl.DateTimeFormat("en-GB", { weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23", timeZone: "Europe/Berlin" }).formatToParts(new Date())
      const part = (type: string) => parts.find((p) => p.type === type)?.value ?? ""
      const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].indexOf(part("weekday"))
      setNow({ weekday: weekday === -1 ? null : weekday, hour: Number(part("hour")) + Number(part("minute")) / 60 })
    }
    update()
    const timer = setInterval(update, 30_000)
    return () => clearInterval(timer)
  }, [])
  return now
}
