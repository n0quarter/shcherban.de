import { useState } from "react"

import { PageHeader } from "~/components/page-header"
import { PhotoLightbox } from "~/components/photo-gallery"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/praxis"

const title = { de: "Praxis", en: "Practice" }
const description = {
  de: "Rundgang durch die Frauenarztpraxis Ganna Shcherban in Berlin-Friedrichshain: Wartebereich, Rezeption, Arztzimmer, Ultraschall, Kolposkop, CTG-Zimmer und Laborecke.",
  en: "A tour of the gynaecological practice of Ganna Shcherban in Berlin-Friedrichshain: waiting area, reception, consultation room, ultrasound, colposcope, CTG room and lab corner.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

const text = {
  de: {
    enlarge: "Foto vergrößern",
    photos: [
      { src: "/images/praxis-27.jpg", caption: "Entspannt und komfortabel: Der helle Wartebereich lässt Sie Ihren Termin ganz entspannt erwarten." },
      { src: "/images/praxis-17.jpg", caption: "An der Rezeption stehen MFA für all Ihre Fragen bereit." },
      { src: "/images/praxis-13.jpg", caption: "Arztzimmer: Ein sicherer Ort für Ihre erste Beratung." },
      { src: "/images/praxis-24.jpg", caption: "Modernster Gynäkologie-Stuhl: Maximaler Komfort für Ihre Untersuchung." },
      { src: "/images/praxis-20.jpg", caption: "Ultraschallgerät SAMSUNG HS50: Spitzenqualität für gynäkologische Untersuchungen und Schwangerschaftsbetreuung." },
      { src: "/images/praxis-23.jpg", caption: "Kolposkop: Klare, detaillierte Ansichten von Zervix und Haut." },
      { src: "/images/praxis-28.jpg", caption: "CTG-Zimmer: Entspannen Sie sich, während das Wohlbefinden Ihres Kindes überprüft wird." },
      { src: "/images/praxis-30.jpg", caption: "Laborecke: Erfahrene MFA sorgen für schnelle und schmerzlose Blutentnahme." },
    ],
  },
  en: {
    enlarge: "Enlarge photo",
    photos: [
      { src: "/images/praxis-27.jpg", caption: "Relaxed and comfortable: the bright waiting area lets you wait for your appointment completely at ease." },
      { src: "/images/praxis-17.jpg", caption: "At reception, medical assistants are on hand to answer all your questions." },
      { src: "/images/praxis-13.jpg", caption: "Consultation room: a safe place for your first consultation." },
      { src: "/images/praxis-24.jpg", caption: "State-of-the-art gynaecological chair: maximum comfort for your examination." },
      { src: "/images/praxis-20.jpg", caption: "SAMSUNG HS50 ultrasound scanner: top quality for gynaecological examinations and pregnancy care." },
      { src: "/images/praxis-23.jpg", caption: "Colposcope: clear, detailed views of the cervix and skin." },
      { src: "/images/praxis-28.jpg", caption: "CTG room: relax while your baby's well-being is checked." },
      { src: "/images/praxis-30.jpg", caption: "Lab corner: experienced medical assistants make sure taking blood is quick and painless." },
    ],
  },
}

export default function Praxis() {
  const lang = useLang()
  const t = text[lang]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <PageHeader title={title[lang]} />

      {/* Photo tour */}
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {t.photos.map((photo, index) => (
            <li key={photo.src}>
              <figure>
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`${t.enlarge}: ${photo.caption}`}
                  className="group block w-full cursor-zoom-in overflow-hidden rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading={index < 2 ? undefined : "lazy"}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </button>
                <figcaption className="mt-4 max-w-xl text-lg leading-relaxed text-ink">{photo.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <PhotoLightbox photos={t.photos} openIndex={openIndex} onOpenIndexChange={setOpenIndex} />
      </section>
    </>
  )
}
