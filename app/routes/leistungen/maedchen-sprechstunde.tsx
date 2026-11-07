import { ServicePage } from "~/components/service-page"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/maedchen-sprechstunde"

const title = { de: "Mädchen-Sprechstunde", en: "Consultation for girls" }
const description = {
  de: "Vertrauliche Mädchen-Sprechstunde in Friedrichshain für 12- bis 21-Jährige: Fragen zu Zyklus, Verhütung, Sexualität, Pubertät und Körperbild.",
  en: "A confidential consultation for girls and young women aged 12 to 21 in Friedrichshain: periods, contraception, sexuality, puberty and body image.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function MaedchenSprechstunde() {
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
      <h2>Mädchen-Sprechstunde: Ein sicherer Raum für Ihre Fragen</h2>

      <h3>Was ist die Mädchen-Sprechstunde?</h3>
      <p>
        Jugendliche stehen oft vor vielen neuen und manchmal verwirrenden Fragen, insbesondere wenn es um Themen wie
        Körper, Sexualität und Verhütung geht. In unserer Praxis bieten wir eine spezielle Mädchen-Sprechstunde an, in der
        ich mich in einer vertraulichen und nicht wertenden Atmosphäre all Ihren Fragen und Anliegen widme.
      </p>

      <h3>Worum geht es?</h3>
      <h4>Themen, die angesprochen werden können:</h4>
      <ul>
        <li>Menstruation und Zyklus</li>
        <li>Verhütungsmethoden</li>
        <li>Sexualität und sexuelle Orientierung</li>
        <li>Körperliche und emotionale Veränderungen in der Pubertät</li>
        <li>Selbstwert und Körperbild</li>
      </ul>

      <h3>Wie läuft die Sprechstunde ab?</h3>
      <p>
        <strong>Erstgespräch und Anamnese</strong>
        <br />
        Beim ersten Termin führe ich eine einführende Anamnese durch, um Ihre individuellen Fragen und Anliegen zu klären.
      </p>
      <p>
        <strong>Beratung und Information</strong>
        <br />
        Sie erhalten fundierte Antworten und Informationen zu den Themen, die Sie interessieren.
      </p>
      <p>
        <strong>Weitere Schritte</strong>
        <br />
        Falls notwendig, können weitere Untersuchungen, Tests oder Beratungsgespräche geplant werden.
      </p>

      <h3>Wer kann teilnehmen?</h3>
      <p>
        Die Mädchen-Sprechstunde ist für alle Mädchen und jungen Frauen im Alter von etwa 12 bis 21 Jahren offen.
        Selbstverständlich sind auch Eltern oder Erziehungsberechtigte willkommen, falls das gewünscht ist.
      </p>

      <h3>Terminvereinbarung</h3>
      <p>
        Für die Mädchen-Sprechstunde ist eine Terminvereinbarung erforderlich. Bitte kontaktieren Sie uns, um einen
        passenden Termin zu finden. Ich nehme mir ausreichend Zeit, um all Ihre Fragen ausführlich zu beantworten.
      </p>
    </>
  )
}

function English() {
  return (
    <>
      <h2>Consultation for girls: a safe space for your questions</h2>

      <h3>What is the consultation for girls?</h3>
      <p>
        Young people often face many new and sometimes confusing questions, especially when it comes to topics such as
        their body, sexuality and contraception. At our practice we offer a special consultation for girls, in which I
        devote my time to all your questions and concerns in a confidential, non-judgemental atmosphere.
      </p>

      <h3>What is it about?</h3>
      <h4>Topics we can talk about:</h4>
      <ul>
        <li>Periods and the menstrual cycle</li>
        <li>Methods of contraception</li>
        <li>Sexuality and sexual orientation</li>
        <li>Physical and emotional changes during puberty</li>
        <li>Self-esteem and body image</li>
      </ul>

      <h3>How does the consultation work?</h3>
      <p>
        <strong>First conversation and medical history</strong>
        <br />
        At the first appointment, I take an introductory medical history to clarify your individual questions and
        concerns.
      </p>
      <p>
        <strong>Advice and information</strong>
        <br />
        You receive well-founded answers and information on the topics that interest you.
      </p>
      <p>
        <strong>Further steps</strong>
        <br />
        If necessary, further examinations, tests or counselling sessions can be arranged.
      </p>

      <h3>Who can attend?</h3>
      <p>
        The consultation is open to all girls and young women aged roughly 12 to 21. Parents or legal guardians are of
        course also welcome, if desired.
      </p>

      <h3>Making an appointment</h3>
      <p>
        An appointment is required for the consultation for girls. Please contact us to find a suitable time. I take
        plenty of time to answer all your questions in detail.
      </p>
    </>
  )
}
