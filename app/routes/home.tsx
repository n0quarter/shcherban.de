import { ArrowRightIcon, ArrowUpRightIcon, CalendarCheckIcon } from "lucide-react"
import type { CSSProperties, ReactNode } from "react"
import { Link } from "react-router"

import { OpeningHours } from "~/components/opening-hours"
import { PhotoGallery } from "~/components/photo-gallery"
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

const serviceGroups = [
  {
    title: { de: "Vorsorge", en: "Prevention" },
    slugs: ["krebsvorsorge", "praeventionsmedizin", "impfungen", "igel-leistungen"],
  },
  {
    title: { de: "Lebensphasen", en: "Phases of life" },
    slugs: ["maedchen-sprechstunde", "verhuetung", "kinderwunsch", "schwangerenbetreuung"],
  },
  {
    title: { de: "Beratung bei Beschwerden", en: "Help with complaints" },
    slugs: ["hormonsprechstunde", "inkontinenz-senkungbeschwerden"],
  },
]

const text = {
  de: {
    eyebrow: "Frauenarztpraxis in Berlin-Friedrichshain",
    heading: ["Frauen‑Gesundheit im Herzen von ", "Friedrichshain"],
    lead: "Von Vorsorge und Verhütung über Schwangerschaftsbetreuung bis zur Menopause-Beratung – persönlich, mit modernster Medizintechnik und auf Basis aktueller Forschung.",
    doctorRole: "Fachärztin für Frauenheilkunde und Geburtshilfe",
    assistantRole: "Medizinische Fachangestellte",
    servicesHeading: "Wobei wir Sie begleiten",
    allServices: "Alle Leistungen",
    notListed: "Ihr Anliegen ist nicht dabei?",
    notListedText: "Schreiben Sie uns – wir sagen Ihnen gern, ob und wie wir Ihnen helfen können.",
    contactPage: "Kontakt aufnehmen",
    welcomeEyebrow: "Willkommen",
    welcomeHeading: "Willkommen in unserer Frauenarztpraxis",
    team: "Das Praxisteam kennenlernen",
    practiceHeading: "Ein Ort zum Wohlfühlen",
    practiceTour: "Rundgang durch die Praxis",
    photos: [
      { src: "/images/praxis-27.jpg", caption: "Der helle Wartebereich" },
      { src: "/images/praxis-17.jpg", caption: "Die Rezeption" },
      { src: "/images/praxis-20.jpg", caption: "Ultraschall SAMSUNG HS50" },
      { src: "/images/praxis-13.jpg", caption: "Das Arztzimmer" },
      { src: "/images/praxis-23.jpg", caption: "Kolposkop" },
    ],
    contactLabel: "Termin",
    contactHeading: "Vereinbaren Sie Ihren Termin",
    contactText: "Buchen Sie Ihren Termin bequem online über Doctolib. Wir freuen uns auf Sie.",
    hours: "Sprechstunde",
    directions: "Route planen",
  },
  en: {
    eyebrow: "Gynaecological practice in Berlin-Friedrichshain",
    heading: ["Women's health in the heart of ", "Friedrichshain"],
    lead: "From screening and contraception to pregnancy care and menopause advice – personal, with state-of-the-art medical technology and based on current research.",
    doctorRole: "Specialist in gynaecology and obstetrics",
    assistantRole: "Medical assistant",
    servicesHeading: "How we can help",
    allServices: "All services",
    notListed: "Don't see your concern?",
    notListedText: "Write to us – we will gladly tell you whether and how we can help.",
    contactPage: "Get in touch",
    welcomeEyebrow: "Welcome",
    welcomeHeading: "Welcome to our gynaecological practice",
    team: "Meet the team",
    practiceHeading: "A place to feel at ease",
    practiceTour: "Tour the practice",
    photos: [
      { src: "/images/praxis-27.jpg", caption: "The bright waiting area" },
      { src: "/images/praxis-17.jpg", caption: "The reception" },
      { src: "/images/praxis-20.jpg", caption: "SAMSUNG HS50 ultrasound" },
      { src: "/images/praxis-13.jpg", caption: "The consultation room" },
      { src: "/images/praxis-23.jpg", caption: "Colposcope" },
    ],
    contactLabel: "Appointments",
    contactHeading: "Book your appointment",
    contactText: "Book your appointment conveniently online via Doctolib. We look forward to seeing you.",
    hours: "Consultation hours",
    directions: "Get directions",
  },
}

export default function Home() {
  const lang = useLang()
  const t = text[lang]

  return (
    <>
      <PracticeShapeDefs />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-linear-to-b from-tint to-transparent" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-14 lg:py-24">
          <div className="min-w-0">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-heading text-[clamp(2.3rem,5.4vw,3.75rem)] leading-[1.05] font-semibold tracking-tight text-balance text-ink">
              {t.heading[0]}
              <span className="text-primary">{t.heading[1]}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{t.lead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={practice.bookingUrl} target="_blank" rel="noopener" className={buttonVariants({ size: "lg", className: "h-12 px-6 text-base" })}>
                <CalendarCheckIcon /> {bookingLabel[lang]}
              </a>
              <Link to={localizedPath(lang, "/leistungen/")} className={buttonVariants({ variant: "outline", size: "lg", className: "h-12 bg-background px-6 text-base" })}>
                {t.allServices}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
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
        <div className="mt-12 grid gap-x-8 gap-y-12 lg:grid-cols-3">
          {serviceGroups.map((group) => (
            <div key={group.title.de}>
              <p className="flex items-center gap-2.5 border-b-2 border-ink pb-3 text-sm font-semibold tracking-wide text-ink uppercase">
                <Diamond className="size-2.5 bg-sun" />
                {group.title[lang]}
              </p>
              <ul className="md:grid md:grid-cols-2 md:gap-x-8 lg:block">
                {group.slugs.map((slug) => {
                  const service = services.find((s) => s.slug === slug)!
                  const Icon = service.icon
                  return (
                    <li key={slug} className="border-b">
                      <Link to={localizedPath(lang, `/leistungen/${slug}/`)} className="group flex items-start gap-4 py-5">
                        <span className="relative mt-0.5 flex size-11 shrink-0 items-center justify-center">
                          <Diamond className="absolute inset-1 bg-tint transition-colors group-hover:bg-primary" />
                          <Icon className="relative size-5 text-primary transition-colors group-hover:text-primary-foreground" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-xl font-semibold tracking-tight text-ink">{service.title[lang]}</span>
                          <span className="mt-1 block text-sm text-muted-foreground">{service.teaser[lang]}</span>
                        </span>
                        <ArrowUpRightIcon className="mt-1 size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
              {group.slugs.length < 3 && (
                <div className="mt-8 rounded-2xl bg-tint p-6">
                  <p className="text-xl font-semibold tracking-tight text-ink">{t.notListed}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{t.notListedText}</p>
                  <MoreLink to={localizedPath(lang, "/kontakt/")} className="mt-4">{t.contactPage}</MoreLink>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Welcome letter and team */}
      <section className="mt-24 bg-tint py-24 sm:mt-32 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-start gap-14 px-4 md:grid-cols-[0.8fr_1.2fr] md:gap-10 lg:gap-14">
          <img
            src="/images/praxis-10.jpg"
            alt={practice.doctor}
            loading="lazy"
            className="aspect-[3/4] w-full rounded-[2rem] object-cover md:sticky md:top-28"
          />
          <div>
            <Eyebrow>{t.welcomeEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl lg:text-[2.625rem]">{t.welcomeHeading}</h2>
            <div className="prose prose-lg mt-8 max-w-none prose-neutral prose-strong:text-ink">
              <WelcomeLetter lang={lang} />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-6xl px-4">
          <ul className="grid gap-6 border-t border-ink/10 pt-10 sm:grid-cols-2 md:grid-cols-3">
            <TeamMember name={practice.doctor} role={t.doctorRole} photo="/images/ganna-avatar.jpg" />
            <TeamMember name="Sabine Lüdecke" role={t.assistantRole} photo="/images/sabine-luedecke.jpg" photoZoom="origin-[50%_25%] scale-[1.4]" />
            <TeamMember name="Jessica Richter" role={t.assistantRole} />
          </ul>
          <MoreLink to={localizedPath(lang, "/praxisteam/")} className="mt-8">{t.team}</MoreLink>
        </div>
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

      {/* Booking, with consultation hours */}
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:pt-32">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
          <div className="absolute -right-24 -bottom-28 size-96 bg-white/8 sm:-right-16" style={practiceShape} />
          <div className="relative grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="inline-flex rounded-[5px] border border-white/70 px-2 py-0.5 text-[13px] font-semibold tracking-wide">{t.contactLabel}</p>
              <h2 className="mt-6 text-[clamp(2rem,4.2vw,3rem)] leading-[1.04] font-semibold tracking-tight text-balance">{t.contactHeading}</h2>
              <p className="mt-5 max-w-lg text-primary-foreground/80">{t.contactText}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={practice.bookingUrl} target="_blank" rel="noopener" className={cn(buttonVariants({ size: "lg" }), "h-12 bg-sun px-6 text-base text-ink hover:bg-sun/85")}>
                  <CalendarCheckIcon /> {bookingLabel[lang]}
                </a>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
              <div className="[&_dd]:text-white/75 [&_dl]:text-base">
                <p className="mb-3 font-semibold">{t.hours}</p>
                <OpeningHours />
              </div>
              <a href={practice.directionsUrl} target="_blank" rel="noopener" className="group block">
                <p className="mb-3 font-semibold">{practice.street}</p>
                <p className="text-white/75">{practice.city}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-white/80 group-hover:text-white">
                  {t.directions} <ArrowUpRightIcon className="size-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/** The rounded diamond from the logo, used to crop avatars and as a background shape. */
const practiceShape: CSSProperties = { clipPath: "url(#practice-shape)" }

function PracticeShapeDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <clipPath id="practice-shape" clipPathUnits="objectBoundingBox">
        <path
          transform="scale(0.003263 0.003247)"
          d="M20.5 203.7C-6.8 176.4-6.8 132.1 20.5 104.7L103.7 21.5C131.1-5.8 175.4-5.8 202.7 21.5L286 104.7C313.3 132.1 313.3 176.4 286 203.7L202.7 287C175.4 314.3 131.1 314.3 103.7 287Z"
        />
      </clipPath>
    </svg>
  )
}

function Diamond({ className }: { className?: string }) {
  return <span aria-hidden className={cn("block rotate-45 rounded-[28%]", className)} />
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground">
      <Diamond className="size-2 bg-primary" />
      {children}
    </p>
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

/** Team member with a diamond-cropped photo, or initials when there is no photo yet. */
function TeamMember({ name, role, photo, photoZoom }: { name: string; role: string; photo?: string; photoZoom?: string }) {
  const initials = name.split(" ").map((part) => part[0]).join("")
  return (
    <li className="flex items-center gap-4">
      {photo ? (
        <span className="size-20 shrink-0 overflow-hidden" style={practiceShape}>
          <img src={photo} alt={name} loading="lazy" className={cn("size-full object-cover object-top", photoZoom)} />
        </span>
      ) : (
        <span className="flex size-20 shrink-0 items-center justify-center bg-sun text-xl font-semibold text-ink" style={practiceShape}>
          {initials}
        </span>
      )}
      <div>
        <p className="font-semibold leading-tight text-ink">{name}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{role}</p>
      </div>
    </li>
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
