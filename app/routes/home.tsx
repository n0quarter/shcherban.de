import {
  ArrowRightIcon,
  CalendarCheckIcon,
  HeartHandshakeIcon,
  MicroscopeIcon,
  PhoneIcon,
  StethoscopeIcon,
} from "lucide-react"
import type { ReactNode } from "react"
import { Link } from "react-router"

import { buttonVariants } from "~/components/ui/button"
import { localizedPath, useLang, type Lang } from "~/lib/i18n"
import { bookingLabel, practice } from "~/lib/practice"
import { pageMeta } from "~/lib/seo"
import { services } from "~/lib/services"
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
    eyebrow: "Frauenarztpraxis in Berlin-Friedrichshain",
    heading: ["Frauen\u2011Gesundheit im Herzen von ", "Friedrichshain"],
    lead: "Von Vorsorge und Verhütung über Schwangerschaftsbetreuung bis zur Menopause-Beratung – persönlich, mit modernster Medizintechnik und auf Basis aktueller Forschung.",
    call: "Anrufen",
    doctorRole: "Fachärztin für Frauenheilkunde und Geburtshilfe",
    highlights: [
      { icon: StethoscopeIcon, title: "Moderne Medizintechnik", text: "Unsere Praxis ist mit modernster Technik ausgestattet." },
      { icon: MicroscopeIcon, title: "Evidenzbasiert", text: "Diagnose und Behandlung nach aktuellster Forschung." },
      { icon: HeartHandshakeIcon, title: "Persönliche Betreuung", text: "Eine ruhige, sichere Atmosphäre für Ihr Wohlbefinden." },
      { icon: CalendarCheckIcon, title: "Online-Termine", text: "Termine bequem rund um die Uhr über Doctolib buchen." },
    ],
    servicesEyebrow: "Leistungen",
    servicesHeading: "Betreuung in jeder Lebensphase",
    allServices: "Alle Leistungen",
    welcomeEyebrow: "Willkommen",
    welcomeHeading: "Willkommen in unserer Frauenarztpraxis",
    team: "Das Praxisteam kennenlernen",
    practiceEyebrow: "Praxis",
    practiceHeading: "Ein Ort zum Wohlfühlen",
    practiceTour: "Rundgang durch die Praxis",
    photos: [
      { src: "/images/praxis-27.jpg", caption: "Der helle Wartebereich" },
      { src: "/images/praxis-13.jpg", caption: "Das Arztzimmer" },
      { src: "/images/praxis-20.jpg", caption: "Ultraschall SAMSUNG HS50" },
    ],
    contactHeading: "Vereinbaren Sie Ihren Termin",
    contactText: "Buchen Sie online über Doctolib oder rufen Sie uns während der Sprechzeiten an. Wir freuen uns auf Sie.",
  },
  en: {
    eyebrow: "Gynaecological practice in Berlin-Friedrichshain",
    heading: ["Women's health in the heart of ", "Friedrichshain"],
    lead: "From screening and contraception to pregnancy care and menopause advice – personal, with state-of-the-art medical technology and based on current research.",
    call: "Call us",
    doctorRole: "Specialist in gynaecology and obstetrics",
    highlights: [
      { icon: StethoscopeIcon, title: "Modern equipment", text: "Our practice is equipped with state-of-the-art technology." },
      { icon: MicroscopeIcon, title: "Evidence-based", text: "Diagnosis and treatment based on the latest research." },
      { icon: HeartHandshakeIcon, title: "Personal care", text: "A calm, safe atmosphere for your well-being." },
      { icon: CalendarCheckIcon, title: "Online booking", text: "Book appointments any time via Doctolib." },
    ],
    servicesEyebrow: "Services",
    servicesHeading: "Care in every phase of life",
    allServices: "All services",
    welcomeEyebrow: "Welcome",
    welcomeHeading: "Welcome to our gynaecological practice",
    team: "Meet the team",
    practiceEyebrow: "Practice",
    practiceHeading: "A place to feel at ease",
    practiceTour: "Tour the practice",
    photos: [
      { src: "/images/praxis-27.jpg", caption: "The bright waiting area" },
      { src: "/images/praxis-13.jpg", caption: "The consultation room" },
      { src: "/images/praxis-20.jpg", caption: "SAMSUNG HS50 ultrasound" },
    ],
    contactHeading: "Book your appointment",
    contactText: "Book online via Doctolib or call us during consultation hours. We look forward to seeing you.",
  },
}

export default function Home() {
  const lang = useLang()
  const t = text[lang]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-linear-to-b from-primary/[0.07] to-transparent" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="min-w-0">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-heading text-[2.4rem] leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl">
              {t.heading[0]}
              <span className="text-primary">{t.heading[1]}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{t.lead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={practice.bookingUrl} target="_blank" rel="noopener" className={buttonVariants({ size: "lg", className: "h-12 px-6 text-base" })}>
                <CalendarCheckIcon /> {bookingLabel[lang]}
              </a>
              <a href={practice.phoneHref} className={buttonVariants({ variant: "outline", size: "lg", className: "h-12 bg-background px-6 text-base" })}>
                <PhoneIcon /> {practice.phone}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2.5rem] bg-primary/10" />
            <img
              src="/images/ganna-portrait.jpg"
              alt="Ganna Shcherban"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-xl shadow-primary/10"
            />
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border bg-background/95 p-4 shadow-lg backdrop-blur sm:left-auto sm:-right-6 sm:w-72">
              <p className="font-heading text-lg font-medium">{practice.doctor}</p>
              <p className="text-sm text-muted-foreground">{t.doctorRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid gap-px overflow-hidden rounded-3xl border bg-border grid-cols-2 lg:grid-cols-4">
          {t.highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-5 sm:p-6">
              <Icon className="size-6 text-primary" />
              <p className="mt-4 font-medium">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:pt-32">
        <SectionHeading eyebrow={t.servicesEyebrow} heading={t.servicesHeading}>
          <MoreLink to={localizedPath(lang, "/leistungen/")}>{t.allServices}</MoreLink>
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map(({ slug, icon: Icon, title, teaser }) => (
            <Link
              key={slug}
              to={localizedPath(lang, `/leistungen/${slug}/`)}
              className="group flex gap-4 rounded-3xl border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" />
              </div>
              <div>
                <p className="font-medium">{title[lang]}</p>
                <p className="mt-1 text-sm text-muted-foreground">{teaser[lang]}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Welcome letter */}
      <section className="mt-24 bg-muted/50 py-24 sm:mt-32 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-start gap-14 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <img
            src="/images/praxis-10.jpg"
            alt={practice.doctor}
            loading="lazy"
            className="aspect-[3/4] w-full rounded-[2rem] object-cover lg:sticky lg:top-28"
          />
          <div>
            <Eyebrow>{t.welcomeEyebrow}</Eyebrow>
            <h2 className="mt-5 font-heading text-4xl font-medium tracking-tight text-balance sm:text-5xl">{t.welcomeHeading}</h2>
            <div className="prose prose-lg mt-8 max-w-none prose-neutral">
              <WelcomeLetter lang={lang} />
            </div>
            <div className="mt-8 border-t pt-6">
              <p className="font-heading text-2xl">{practice.doctor}</p>
              <p className="text-sm text-muted-foreground">{t.doctorRole}</p>
            </div>
            <MoreLink to={localizedPath(lang, "/praxisteam/")} className="mt-8">{t.team}</MoreLink>
          </div>
        </div>
      </section>

      {/* Practice photos */}
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:pt-32">
        <SectionHeading eyebrow={t.practiceEyebrow} heading={t.practiceHeading}>
          <MoreLink to={localizedPath(lang, "/praxis/")}>{t.practiceTour}</MoreLink>
        </SectionHeading>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {t.photos.map((photo) => (
            <figure key={photo.src} className="group overflow-hidden rounded-3xl">
              <img src={photo.src} alt={photo.caption} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="pt-3 text-sm text-muted-foreground">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact band */}
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:pt-32">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 -left-20 size-80 rounded-full bg-white/5" />
          <div className="relative">
            <h2 className="font-heading text-4xl font-medium tracking-tight text-balance sm:text-5xl">{t.contactHeading}</h2>
            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">{t.contactText}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={practice.bookingUrl} target="_blank" rel="noopener" className={buttonVariants({ variant: "secondary", size: "lg", className: "h-12 px-6 text-base" })}>
                <CalendarCheckIcon /> {bookingLabel[lang]}
              </a>
              <a href={practice.phoneHref} className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "h-12 px-6 text-base text-primary-foreground hover:bg-white/10 hover:text-primary-foreground")}>
                <PhoneIcon /> {practice.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground">
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </p>
  )
}

function SectionHeading({ eyebrow, heading, children }: { eyebrow: string; heading: string; children?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 font-heading text-4xl font-medium tracking-tight text-balance sm:text-5xl">{heading}</h2>
      </div>
      {children}
    </div>
  )
}

function MoreLink({ to, className, children }: { to: string; className?: string; children: ReactNode }) {
  return (
    <Link to={to} className={cn("group inline-flex items-center gap-2 font-medium text-primary", className)}>
      {children}
      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}

function WelcomeLetter({ lang }: { lang: Lang }) {
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
        Als Fachärztin für Frauenheilkunde und Geburtshilfe, <strong>Ganna Shcherban</strong>, heiße ich Sie herzlich
        willkommen in unserer Praxis.
      </p>
      <p>
        Von Vorsorgeuntersuchungen und Beratung, über Verhütung und Schwangerschaftsbetreuung, bis hin zur
        Menopause-Beratung – Ihre Gesundheit und Ihr Wohlbefinden stehen bei uns an erster Stelle.
      </p>
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
