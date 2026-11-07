import { ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import { Link } from "react-router"

import { OpeningHours } from "~/components/opening-hours"
import { buttonVariants } from "~/components/ui/button"
import { localizedPath, useLang } from "~/lib/i18n"
import { bookingLabel, practice } from "~/lib/practice"
import { pageMeta } from "~/lib/seo"
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
    heading: "Willkommen in unserer Frauenarztpraxis",
    services: "Unsere Leistungen",
    hours: "Sprechstunde",
    address: "Adresse",
    phone: "Telefon",
  },
  en: {
    heading: "Welcome to our gynaecological practice",
    services: "Our services",
    hours: "Consultation hours",
    address: "Address",
    phone: "Phone",
  },
}

export default function Home() {
  const lang = useLang()
  const t = text[lang]

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 sm:pt-16 lg:grid-cols-[1fr_24rem]">
        <div>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{t.heading}</h1>
          <div className="prose mt-6 max-w-none prose-neutral prose-lg">
            {lang === "de" ? <WelcomeGerman /> : <WelcomeEnglish />}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={practice.bookingUrl} target="_blank" rel="noopener" className={buttonVariants({ size: "lg" })}>
              {bookingLabel[lang]}
            </a>
            <Link to={localizedPath(lang, "/leistungen/")} className={buttonVariants({ variant: "outline", size: "lg" })}>
              {t.services}
            </Link>
          </div>
        </div>
        <img
          src="/images/ganna-portrait.jpg"
          alt="Ganna Shcherban"
          className="aspect-[2/3] w-full rounded-3xl object-cover shadow-sm"
        />
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-4 px-4 sm:grid-cols-3">
        <InfoCard icon={<ClockIcon />} title={t.hours}>
          <OpeningHours />
        </InfoCard>
        <InfoCard icon={<MapPinIcon />} title={t.address}>
          <p>
            {practice.street}
            <br />
            {practice.city}
          </p>
        </InfoCard>
        <InfoCard icon={<PhoneIcon />} title={t.phone}>
          <p>
            <a href={practice.phoneHref} className="hover:underline">{practice.phone}</a>
            <br />
            <a href={`mailto:${practice.email}`} className="hover:underline">{practice.email}</a>
          </p>
        </InfoCard>
      </section>
    </>
  )
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-muted p-6 text-sm">
      <div className="mb-3 flex items-center gap-2 font-semibold [&_svg]:size-5 [&_svg]:text-primary">
        {icon}
        {title}
      </div>
      {children}
    </div>
  )
}

function WelcomeGerman() {
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
        durch unser Team.
      </p>
      <p>Wir freuen uns darauf, Sie in unserer Praxis begrüßen zu dürfen.</p>
      <p>
        <strong>– Ihr Team der Frauenarztpraxis Ganna Shcherban</strong>
      </p>
    </>
  )
}

function WelcomeEnglish() {
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
      <p>Book your first appointment and experience personal, competent care from our team.</p>
      <p>We look forward to welcoming you to our practice.</p>
      <p>
        <strong>– Your team at the gynaecological practice Ganna Shcherban</strong>
      </p>
    </>
  )
}
