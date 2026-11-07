import { ServicePage } from "~/components/service-page"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/hormonsprechstunde"

const title = { de: "Hormonsprechstunde", en: "Hormone consultation" }
const description = {
  de: "Hormonsprechstunde in Friedrichshain: Diagnostik und Beratung bei hormonellen Störungen, Menstruationsbeschwerden und Wechseljahren.",
  en: "Hormone consultation in Friedrichshain: diagnosis and advice on hormonal disorders, menstrual problems and the menopause.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function Hormonsprechstunde() {
  const lang = useLang()
  return (
    <ServicePage title={title[lang]} image="/images/praxis-15.jpg">
      {lang === "de" ? <German /> : <English />}
    </ServicePage>
  )
}

function German() {
  return (
    <>
      <h2>Hormonsprechstunde: Ihr Weg zu hormoneller Balance</h2>

      <h3>Was ist die Hormonsprechstunde?</h3>
      <p>
        Hormonelle Imbalancen können vielfältige Auswirkungen auf Ihren Körper und Ihr Wohlbefinden haben. In unserer
        Praxis biete ich Ihnen eine spezielle Hormonsprechstunde an, um diese komplexen Fragen rund um hormonelle
        Störungen, Menstruationsbeschwerden, Wechseljahre und weitere Themen zu klären.
      </p>

      <h3>Was erwartet Sie?</h3>
      <p>
        <strong>Anamnese und Erstberatung</strong>
        <br />
        Zunächst führe ich eine detaillierte Anamnese durch, um Ihre aktuelle hormonelle Situation, Symptome und
        besonderen Anliegen zu verstehen.
      </p>
      <p>
        <strong>Diagnostische Maßnahmen</strong>
        <br />
        Abhängig von Ihrer Anamnese können spezielle Hormontests, Ultraschalluntersuchungen und weitere diagnostische
        Verfahren durchgeführt werden.
      </p>
      <p>
        <strong>Individuelle Beratung</strong>
        <br />
        Nach Auswertung der Testergebnisse bespreche ich mit Ihnen die verschiedenen Behandlungsoptionen und was für Sie
        am besten geeignet ist.
      </p>
      <p>
        <strong>Behandlungswege</strong>
        <br />
        Je nach Bedarf biete ich Beratung zu hormonellen Therapien, natürlichen Behandlungsalternativen und weiteren
        therapeutischen Möglichkeiten. Bei spezifischen Problemen oder Erkrankungen kann ich Sie für eine weiterführende
        Behandlung überweisen.
      </p>

      <h3>Wer kann teilnehmen?</h3>
      <p>
        Die Hormonsprechstunde ist für alle Personen geeignet, die Fragen oder Bedenken im Zusammenhang mit hormonellen
        Imbalancen haben. Dies kann Personen in verschiedenen Lebensphasen betreffen, von der Pubertät über die
        Schwangerschaft bis zu den Wechseljahren.
      </p>

      <h3>Wie kann ich einen Termin vereinbaren?</h3>
      <p>
        Um einen Termin für die Hormonsprechstunde zu vereinbaren, kontaktieren Sie uns bitte. Ich nehme mir ausreichend
        Zeit, um all Ihre Fragen und Anliegen detailliert zu klären.
      </p>
    </>
  )
}

function English() {
  return (
    <>
      <h2>Hormone consultation: your path to hormonal balance</h2>

      <h3>What is the hormone consultation?</h3>
      <p>
        Hormonal imbalances can affect your body and your well-being in many ways. At our practice I offer a dedicated
        hormone consultation to address these complex questions around hormonal disorders, menstrual problems, the
        menopause and other topics.
      </p>

      <h3>What can you expect?</h3>
      <p>
        <strong>Medical history and initial consultation</strong>
        <br />
        First, I take a detailed medical history to understand your current hormonal situation, your symptoms and your
        particular concerns.
      </p>
      <p>
        <strong>Diagnostic tests</strong>
        <br />
        Depending on your medical history, special hormone tests, ultrasound scans and other diagnostic procedures can
        be carried out.
      </p>
      <p>
        <strong>Individual advice</strong>
        <br />
        Once the test results have been evaluated, I discuss the various treatment options with you and what is best
        suited to you.
      </p>
      <p>
        <strong>Treatment options</strong>
        <br />
        Depending on your needs, I offer advice on hormone therapies, natural treatment alternatives and other
        therapeutic options. For specific problems or conditions, I can refer you for further treatment.
      </p>

      <h3>Who can attend?</h3>
      <p>
        The hormone consultation is suitable for anyone who has questions or concerns relating to hormonal imbalances.
        This can affect people at different stages of life, from puberty through pregnancy to the menopause.
      </p>

      <h3>How can I make an appointment?</h3>
      <p>
        To make an appointment for the hormone consultation, please contact us. I take plenty of time to address all
        your questions and concerns in detail.
      </p>
    </>
  )
}
