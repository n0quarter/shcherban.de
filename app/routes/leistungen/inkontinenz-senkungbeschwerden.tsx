import { ServicePage } from "~/components/service-page"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/inkontinenz-senkungbeschwerden"

const title = { de: "Inkontinenz, Senkungsbeschwerden", en: "Incontinence and pelvic organ prolapse" }
const description = {
  de: "Diskrete Sprechstunde für Inkontinenz und Senkungsbeschwerden in Friedrichshain: Anamnese, Ultraschall, Beckenbodentraining, Pessare und Therapieberatung.",
  en: "Discreet consultations for incontinence and pelvic organ prolapse in Friedrichshain: assessment, ultrasound, pelvic floor training, pessaries and treatment advice.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function InkontinenzSenkungbeschwerden() {
  const lang = useLang()
  return (
    <ServicePage title={title[lang]}>
      {lang === "de" ? <German /> : <English />}
    </ServicePage>
  )
}

function German() {
  return (
    <>
      <h2>Inkontinenz- und Senkungsbeschwerden-Sprechstunde: Wir sind für Sie da</h2>

      <h3>Was ist die Inkontinenz- und Senkungsbeschwerden-Sprechstunde?</h3>
      <p>
        Inkontinenz und Senkungsbeschwerden sind weit verbreitet und können in verschiedenen Lebensphasen auftreten, etwa
        nach einer Geburt oder im fortgeschrittenen Alter. In unserer Praxis bieten wir eine diskrete und fachkundige
        Beratung und Behandlung dieser sensiblen Themen an.
      </p>

      <h3>Was erwartet Sie?</h3>
      <p>
        <strong>Anamnese und Erstgespräch</strong>
        <br />
        Zu Beginn führe ich eine ausführliche Anamnese durch, um Ihre Symptome und Ihre medizinische Vorgeschichte zu
        verstehen.
      </p>
      <p>
        <strong>Diagnostische Maßnahmen</strong>
        <br />
        Je nach Bedarf können Untersuchungen wie Ultraschall oder weitere spezielle Tests durchgeführt werden.
      </p>
      <p>
        <strong>Individuelle Beratung und Therapieoptionen</strong>
        <br />
        Ich bespreche mit Ihnen die verschiedenen Behandlungsmöglichkeiten, die von Beckenbodentraining über Medikamente
        und verschiedene Pessare, die individuell angepasst werden können, bis hin zu chirurgischen Eingriffen reichen
        können.
      </p>
      <p>
        <strong>Weiterleitung bei Bedarf</strong>
        <br />
        In bestimmten Fällen kann eine Überweisung zu spezialisierten Ärzten erforderlich sein. Ich stehe Ihnen bei diesem
        Prozess beratend zur Seite.
      </p>

      <h3>Wer kann teilnehmen?</h3>
      <p>
        Die Sprechstunde ist offen für alle, die unter Inkontinenz oder Senkungsbeschwerden leiden, unabhängig von Alter
        oder Lebensphase.
      </p>

      <h3>Terminvereinbarung</h3>
      <p>
        Bitte kontaktieren Sie uns, um einen Termin zu vereinbaren. Ich nehme mir ausreichend Zeit, um in einer angenehmen
        Atmosphäre all Ihre Fragen zu beantworten und einen individuellen Behandlungsplan zu entwickeln.
      </p>
    </>
  )
}

function English() {
  return (
    <>
      <h2>Incontinence and pelvic organ prolapse clinic: we are here for you</h2>

      <h3>What is the incontinence and prolapse clinic?</h3>
      <p>
        Incontinence and pelvic organ prolapse are common and can occur at different stages of life, for example after
        childbirth or in later life. At our practice we offer discreet, expert advice and treatment for these sensitive
        issues.
      </p>

      <h3>What can you expect?</h3>
      <p>
        <strong>Medical history and initial consultation</strong>
        <br />
        To begin with, I take a detailed medical history in order to understand your symptoms and your previous medical
        background.
      </p>
      <p>
        <strong>Diagnostic tests</strong>
        <br />
        Depending on your needs, examinations such as ultrasound or other specialised tests may be carried out.
      </p>
      <p>
        <strong>Individual advice and treatment options</strong>
        <br />
        I will discuss with you the various treatment options, which can range from pelvic floor training and medication to
        different types of individually fitted pessaries and surgery.
      </p>
      <p>
        <strong>Referral if needed</strong>
        <br />
        In certain cases, a referral to a specialist may be necessary. I will advise and support you throughout this
        process.
      </p>

      <h3>Who can attend?</h3>
      <p>
        The clinic is open to anyone who suffers from incontinence or pelvic organ prolapse, regardless of age or stage of
        life.
      </p>

      <h3>Making an appointment</h3>
      <p>
        Please contact us to arrange an appointment. I take plenty of time to answer all your questions in a pleasant
        atmosphere and to develop an individual treatment plan.
      </p>
    </>
  )
}
