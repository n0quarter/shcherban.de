// TEMPORARY: Kontakt variant 7 – the nameplate hangs on a photo of the practice instead of a pale-blue wall.
import { PageHeader } from "~/components/page-header"
import { AddressBlock, BookingButton, ContactList, HoursList, Plate, PlateField, PlateHead, usePlateText, YellowBar } from "~/components/kontakt-variants/plate-parts"

export function KontaktVariant7() {
  const t = usePlateText()
  return (
    <>
      <PageHeader title={t.title} />
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] px-3 pt-48 pb-6 sm:p-10 sm:pt-56 md:p-12 lg:p-14">
          <img src="/images/praxis-27.jpg" alt={t.photoAlt} className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-ink/20 to-transparent md:bg-linear-to-r md:from-ink/10 md:via-transparent md:to-ink/50" />
          <div className="relative grid items-end gap-6 md:grid-cols-[1.5fr_1fr] md:gap-10">
            <Plate className="px-6 py-10 sm:px-10 sm:py-12">
              <PlateHead size="md" />
              <YellowBar className="mt-6" />
              <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-[auto_1fr]">
                <PlateField label={t.hours}>
                  <HoursList />
                </PlateField>
                <div className="space-y-6">
                  <PlateField label={t.address}>
                    <AddressBlock />
                  </PlateField>
                  <PlateField label={t.contact}>
                    <ContactList />
                  </PlateField>
                </div>
              </div>
            </Plate>
            <section className="rounded-[1.5rem] bg-white/95 p-6 shadow-xl backdrop-blur sm:p-8">
              <h2 className="text-2xl leading-tight font-semibold tracking-tight text-balance text-ink">{t.bookingHeading}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{t.bookingText}</p>
              <BookingButton className="mt-6" />
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
