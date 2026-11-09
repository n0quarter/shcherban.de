// TEMPORARY: Kontakt variant 8 – everything on one nameplate (incl. the booking button), a tall photo beside it.
import { PageHeader } from "~/components/page-header"
import { AddressBlock, BookingButton, ContactList, HoursList, Plate, PlateField, PlateHead, usePlateText, Wall, YellowBar } from "~/components/kontakt-variants/plate-parts"

export function KontaktVariant8() {
  const t = usePlateText()
  return (
    <>
      <PageHeader title={t.title} />
      <div className="mx-auto max-w-6xl px-4">
        <Wall className="p-3 sm:p-8 lg:p-10">
          <div className="grid gap-6 md:grid-cols-[1.35fr_1fr] lg:gap-8">
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
              <div className="mt-8 border-t pt-8">
                <p className="max-w-md leading-relaxed text-muted-foreground">{t.bookingText}</p>
                <BookingButton className="mt-5" />
              </div>
            </Plate>
            <img src="/images/praxis-17.jpg" alt={t.photoAlt} loading="lazy" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover md:aspect-auto md:h-full" />
          </div>
        </Wall>
      </div>
    </>
  )
}
