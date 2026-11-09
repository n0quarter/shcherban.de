import { AddressBlock, BookingButton, ContactList, HoursList, Plate, PlateField, PlateHead, usePlateText, Wall, YellowBar } from "~/components/nameplate"
import { PageHeader } from "~/components/page-header"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/kontakt"

const title = { de: "Kontakt", en: "Contact" }
const description = {
  de: "Kontakt zur Frauenarztpraxis Ganna Shcherban in Berlin-Friedrichshain: Termin online über Doctolib buchen, E-Mail, Telefon, Fax, Adresse und Sprechstunde.",
  en: "Contact the gynaecological practice of Ganna Shcherban in Berlin-Friedrichshain: book online via Doctolib, email, phone, fax, address and consultation hours.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

/** The practice nameplate on a pale-blue wall (booking in its head, three columns below), with a photo of the reception. */
export default function Kontakt() {
  const lang = useLang()
  const t = usePlateText()
  return (
    <>
      <PageHeader title={title[lang]} />
      <div className="mx-auto max-w-6xl px-4">
        <Wall className="px-3 pt-6 pb-3 sm:px-8 sm:pt-8 sm:pb-8 lg:px-10 lg:pt-10">
          <Plate className="px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <PlateHead />
              </div>
              <BookingButton />
            </div>
            <YellowBar className="mt-7" />
            <div className="mt-7 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              <PlateField label={t.hours}>
                <HoursList />
              </PlateField>
              <PlateField label={t.address}>
                <AddressBlock />
              </PlateField>
              <PlateField label={t.contact}>
                <ContactList />
              </PlateField>
            </div>
          </Plate>
          <img src="/images/praxis-17.jpg" alt={t.photoAlt} loading="lazy" className="mt-3 aspect-[4/3] w-full rounded-[1.5rem] object-cover sm:mt-8 sm:aspect-[21/7]" />
        </Wall>
      </div>
    </>
  )
}
