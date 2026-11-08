import { ArrowRightIcon, CalendarCheckIcon } from "lucide-react"
import type { ReactNode } from "react"
import { Link } from "react-router"

import { DoctolibLogo } from "~/components/doctolib-logo"
import { PhotoGallery } from "~/components/photo-gallery"
import { ServiceGroups } from "~/components/service-groups"
import { buttonVariants } from "~/components/ui/button"
import { localizedPath, useLang, type Lang } from "~/lib/i18n"
import { bookingLabel, practice } from "~/lib/practice"
import { pageMeta } from "~/lib/seo"
import { cn } from "~/lib/utils"
import type { Route } from "./+types/home"

const title = {
  de: "Frauen-Gesundheit im Herzen von Friedrichshain – Ihre Wohlfühlpraxis",
  en: "Women's health in the heart of Friedrichshain",
}
const description = {
  de: "Frauenarztpraxis Ganna Shcherban in Berlin-Friedrichshain: Vorsorge, Verhütung, Schwangerschaftsbetreuung, Kinderwunsch und Menopause-Beratung.",
  en: "Gynaecological practice of Ganna Shcherban in Berlin-Friedrichshain: screening, contraception, pregnancy care, fertility and menopause advice.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

const text = {
  de: {
    heading: ["Frauenarztpraxis ", "Ganna Shcherban", " in Berlin-Friedrichshain"],
    doctorRole: "Fachärztin für Frauenheilkunde und Geburtshilfe",
    servicesHeading: "Wobei wir Sie begleiten",
    allServices: "Alle Leistungen",
    practiceHeading: "Ein Ort zum Wohlfühlen",
    practiceTour: "Rundgang durch die Praxis",
    photos: [
      { src: "/images/praxis-27.jpg", caption: "Der helle Wartebereich" },
      { src: "/images/praxis-17.jpg", caption: "Die Rezeption" },
      { src: "/images/praxis-20.jpg", caption: "Ultraschall SAMSUNG HS50" },
      { src: "/images/praxis-13.jpg", caption: "Das Arztzimmer" },
      { src: "/images/praxis-23.jpg", caption: "Kolposkop" },
    ],
  },
  en: {
    heading: ["Gynaecological practice ", "Ganna Shcherban", " in Berlin-Friedrichshain"],
    doctorRole: "Specialist in gynaecology and obstetrics",
    servicesHeading: "How we can help",
    allServices: "All services",
    practiceHeading: "A place to feel at ease",
    practiceTour: "Tour the practice",
    photos: [
      { src: "/images/praxis-27.jpg", caption: "The bright waiting area" },
      { src: "/images/praxis-17.jpg", caption: "The reception" },
      { src: "/images/praxis-20.jpg", caption: "SAMSUNG HS50 ultrasound" },
      { src: "/images/praxis-13.jpg", caption: "The consultation room" },
      { src: "/images/praxis-23.jpg", caption: "Colposcope" },
    ],
  },
}

export default function Home() {
  const lang = useLang()
  const t = text[lang]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-clip">
        <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-linear-to-b from-tint to-transparent" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:items-start px-4 py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-14 lg:py-24">
          <div className="min-w-0">
            <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-tight text-balance text-ink">
              {t.heading[0]}
              <span className="text-primary">{t.heading[1]}</span>
              {t.heading[2]}
            </h1>
            <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-muted-foreground [&_strong]:font-semibold [&_strong]:text-ink">
              <HeroIntro lang={lang} />
              <WelcomeLetter lang={lang} />
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={practice.bookingUrl} target="_blank" rel="noopener" className={buttonVariants({ size: "lg", className: "h-12 gap-2.5 px-6 text-base" })}>
                <CalendarCheckIcon /> {bookingLabel[lang]}
                <DoctolibLogo className="h-[15px]" />
              </a>
              <Link to={localizedPath(lang, "/leistungen/")} className={buttonVariants({ variant: "outline", size: "lg", className: "h-12 bg-background px-6 text-base" })}>
                {t.allServices}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:sticky md:top-28 md:max-w-none">
            <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2.5rem] bg-primary/10" />
            <img
              src="/images/ganna-portrait.jpg"
              alt="Ganna Shcherban"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-xl shadow-primary/10"
            />
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border bg-background/95 p-4 shadow-lg backdrop-blur sm:left-auto sm:right-4 sm:w-72 lg:-right-6">
              <p className="font-heading text-lg font-semibold">{practice.doctor}</p>
              <p className="text-sm text-muted-foreground">{t.doctorRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services, grouped */}
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:pt-32">
        <SectionHeading heading={t.servicesHeading}>
          <MoreLink to={localizedPath(lang, "/leistungen/")}>{t.allServices}</MoreLink>
        </SectionHeading>
        <ServiceGroups className="mt-12" />
      </section>

      {/* Practice photos */}
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:pt-32">
        <SectionHeading heading={t.practiceHeading}>
          <MoreLink to={localizedPath(lang, "/praxis/")}>{t.practiceTour}</MoreLink>
        </SectionHeading>
        <div className="mt-12">
          <PhotoGallery photos={t.photos} />
        </div>
      </section>
    </>
  )
}

function SectionHeading({ heading, children }: { heading: string; children?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl lg:text-[2.625rem]">{heading}</h2>
      {children}
    </div>
  )
}

function MoreLink({ to, className, children }: { to: string; className?: string; children: ReactNode }) {
  return (
    <Link to={to} className={cn("group inline-flex items-center gap-2 font-semibold text-primary", className)}>
      {children}
      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

/** Opening of the welcome letter, shown in the hero under the headline. */
function HeroIntro({ lang }: { lang: Lang }) {
  if (lang === "en") {
    return (
      <>
        <p>
          As a specialist in gynaecology and obstetrics, I, <strong>Ganna Shcherban</strong>, warmly welcome you to our
          practice.
        </p>
        <p>
          From check-ups and counselling to contraception, pregnancy care and menopause advice – your health and
          well-being are our top priority.
        </p>
      </>
    )
  }
  return (
    <>
      <p>
        Als Fachärztin für Frauenheilkunde und Geburtshilfe, <strong>Ganna Shcherban</strong>, heiße ich Sie herzlich
        willkommen in unserer Praxis.
      </p>
      <p>
        Von Vorsorgeuntersuchungen und Beratung, über Verhütung und Schwangerschaftsbetreuung, bis hin zur
        Menopause-Beratung – Ihre Gesundheit und Ihr Wohlbefinden stehen bei uns an erster Stelle.
      </p>
    </>
  )
}

/** Rest of the welcome letter (its opening is in the hero). */
function WelcomeLetter({ lang }: { lang: Lang }) {
  if (lang === "en") {
    return (
      <>
        <p>
          I am pleased to say that our practice is equipped with state-of-the-art medical technology and that our
          diagnostic and treatment approaches are based on the latest evidence-based research.
        </p>
        <p>
          To give you the best possible care, I work closely with my team, the medical assistants{" "}
          <strong>Jessica Richter</strong> and <strong>Sabine Lüdecke</strong>.
        </p>
        <p>Together we do everything we can to create a calm and safe atmosphere for your well-being.</p>
        <p>Book your first appointment and experience personal, competent care from our team. We look forward to welcoming you to our practice.</p>
      </>
    )
  }
  return (
    <>
      <p>
        Ich freue mich, Ihnen mitteilen zu können, dass unsere Praxis mit modernster Medizintechnik ausgestattet ist und
        dass unsere Diagnose- und Behandlungsansätze auf der aktuellsten, evidenzbasierten Forschung basieren.
      </p>
      <p>
        Zur bestmöglichen Betreuung arbeite ich eng mit meinem Team zusammen, das aus den medizinischen Fachangestellten{" "}
        <strong>Jessica Richter</strong> und <strong>Sabine Lüdecke</strong> besteht.
      </p>
      <p>Gemeinsam setzen wir alles daran, eine beruhigende und sichere Atmosphäre für Ihr Wohlbefinden zu schaffen.</p>
      <p>
        Vereinbaren Sie Ihren ersten Termin und erleben Sie die Vorteile einer persönlichen und kompetenten Betreuung
        durch unser Team. Wir freuen uns darauf, Sie in unserer Praxis begrüßen zu dürfen.
      </p>
    </>
  )
}
