// TEMPORARY: Kontakt variant 9 – the nameplate in logo blue (like the footer), two small photos underneath.
import { ArrowUpRightIcon } from "lucide-react"
import type { ReactNode } from "react"

import { LogoDiamond } from "~/components/brand"
import { BookingButton, usePlateText, Wall } from "~/components/kontakt-variants/plate-parts"
import { PageHeader } from "~/components/page-header"
import { useLang } from "~/lib/i18n"
import { openingHours, practice, siteName } from "~/lib/practice"

export function KontaktVariant9() {
  const lang = useLang()
  const t = usePlateText()
  return (
    <>
      <PageHeader title={t.title} />
      <div className="mx-auto max-w-6xl space-y-6 px-4">
        <Wall className="px-3 py-6 sm:p-10 lg:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[1.6fr_1fr] lg:gap-16">
            <article className="relative overflow-hidden rounded-[1.5rem] bg-primary px-6 py-10 text-white shadow-2xl shadow-primary/25 sm:px-10 sm:py-12">
              <LogoDiamond className="absolute -right-20 -bottom-24 size-80 text-white/8" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <img src="/logo-mark.svg" alt="" className="size-10 shrink-0" />
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/80 uppercase sm:text-sm">{siteName[lang]}</p>
                </div>
                <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.02] font-semibold tracking-tight">{practice.doctor}</h2>
                <p className="mt-2 text-lg text-balance text-white/85">{t.doctorRole}</p>
                <div className="mt-7 h-1 w-16 rounded-full bg-sun" />
                <div className="mt-7 grid gap-x-10 gap-y-7 sm:grid-cols-[auto_1fr] md:grid-cols-1 lg:grid-cols-[auto_1fr]">
                  <BlueField label={t.hours}>
                    <dl className="grid grid-cols-[3rem_1fr] gap-y-1.5 tabular-nums">
                      {openingHours.map(({ day, time }) => (
                        <div key={day.de} className="contents">
                          <dt className="font-semibold">{day[lang]}</dt>
                          <dd className="whitespace-nowrap text-white/85">{time[lang]}</dd>
                        </div>
                      ))}
                    </dl>
                  </BlueField>
                  <div className="space-y-7">
                    <BlueField label={t.address}>
                      <p>{practice.street}</p>
                      <p>{practice.city}</p>
                      <a href={practice.directionsUrl} target="_blank" rel="noopener" className="mt-1.5 inline-flex items-center gap-1.5 text-sun hover:underline">
                        {t.directions} <ArrowUpRightIcon className="size-4" />
                      </a>
                    </BlueField>
                    <BlueField label={t.contact}>
                      <p>
                        <span className="text-white/75">{t.phone}</span>{" "}
                        <a href={practice.phoneHref} className="font-semibold whitespace-nowrap hover:underline">{practice.phone}</a>
                      </p>
                      <p className="text-white/75">
                        {t.fax} {practice.fax}
                      </p>
                      <a href={`mailto:${practice.email}`} className="font-semibold text-sun hover:underline">
                        {practice.email}
                      </a>
                    </BlueField>
                  </div>
                </div>
              </div>
            </article>
            <section className="px-3 sm:px-0">
              <h2 className="text-2xl leading-tight font-semibold tracking-tight text-balance text-ink sm:text-3xl">{t.bookingHeading}</h2>
              <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{t.bookingText}</p>
              <BookingButton className="mt-8" />
            </section>
          </div>
        </Wall>
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <img src="/images/praxis-17.jpg" alt={t.photoAlt} loading="lazy" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover sm:aspect-[16/9]" />
          <img src="/images/praxis-27.jpg" alt="" loading="lazy" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover sm:aspect-[16/9]" />
        </div>
      </div>
    </>
  )
}

function BlueField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">{label}</h3>
      <div className="mt-3 text-base">{children}</div>
    </section>
  )
}
