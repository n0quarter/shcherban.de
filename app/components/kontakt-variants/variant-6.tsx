// TEMPORARY: Kontakt variant 6 – variant 2 as it is, plus a wide practice photo underneath.
import { PageHeader } from "~/components/page-header"
import { AddressBlock, BookingButton, ContactList, HoursList, Plate, PlateField, PlateHead, usePlateText, Wall, YellowBar } from "~/components/kontakt-variants/plate-parts"

export function KontaktVariant6() {
  const t = usePlateText()
  return (
    <>
      <PageHeader title={t.title} />
      <div className="mx-auto max-w-6xl space-y-6 px-4">
        <Wall className="px-3 py-6 sm:p-10 lg:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[1.6fr_1fr] lg:gap-16">
            <Plate className="px-6 py-10 sm:px-10 sm:py-12">
              <PlateHead />
              <YellowBar className="mt-7" />
              <div className="mt-7 grid gap-x-10 gap-y-7 sm:grid-cols-[auto_1fr] md:grid-cols-1 lg:grid-cols-[auto_1fr]">
                <PlateField label={t.hours}>
                  <HoursList />
                </PlateField>
                <div className="space-y-7">
                  <PlateField label={t.address}>
                    <AddressBlock />
                  </PlateField>
                  <PlateField label={t.contact}>
                    <ContactList />
                  </PlateField>
                </div>
              </div>
            </Plate>
            <section className="px-3 sm:px-0">
              <h2 className="text-2xl leading-tight font-semibold tracking-tight text-balance text-ink sm:text-3xl">{t.bookingHeading}</h2>
              <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{t.bookingText}</p>
              <BookingButton className="mt-8" />
            </section>
          </div>
        </Wall>
        <figure className="relative overflow-hidden rounded-[2rem]">
          <img src="/images/praxis-17.jpg" alt={t.photoAlt} loading="lazy" className="aspect-[4/3] w-full object-cover sm:aspect-[21/8]" />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-ink backdrop-blur">{t.photoCaption}</figcaption>
        </figure>
      </div>
    </>
  )
}
