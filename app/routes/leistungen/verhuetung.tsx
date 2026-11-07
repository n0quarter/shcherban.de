import { ServicePage } from "~/components/service-page"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/verhuetung"

const title = { de: "Verhütung", en: "Contraception" }
const description = {
  de: "Persönliche Verhütungsberatung in Friedrichshain: Anamnese, Aufklärung über alle Methoden, individuelle Empfehlung, Verschreibung und Einsetzen.",
  en: "Personal contraception advice in Friedrichshain: medical history, information on all methods, an individual recommendation, prescription and fitting.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function Verhuetung() {
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
      <h2>Verhütungsberatung</h2>
      <p>Finden Sie die Methode, die zu Ihnen passt.</p>
      <p>
        Die Wahl der richtigen Verhütungsmethode ist eine sehr persönliche Entscheidung, die von vielen verschiedenen
        Faktoren abhängt. In unserer Praxis biete ich Ihnen eine umfassende Beratung und detaillierte Informationen zu den
        verschiedenen Verhütungsmöglichkeiten, damit Sie die für Sie passende Methode finden können.
      </p>

      <h3>Was passiert in der Beratung?</h3>
      <p>
        <strong>Anamnese</strong>
        <br />
        Zu Beginn führe ich eine ausführliche Anamnese durch, um Ihre individuellen Bedürfnisse und gesundheitlichen
        Voraussetzungen besser zu verstehen.
      </p>
      <p>
        <strong>Information und Aufklärung</strong>
        <br />
        Sie erhalten von mir detaillierte Informationen zu den verschiedenen Verhütungsmethoden und erfahren mehr über
        deren jeweilige Vor- und Nachteile.
      </p>
      <p>
        <strong>Empfehlung</strong>
        <br />
        Basierend auf Ihren Bedürfnissen und Ihrer Gesundheitsgeschichte gebe ich Ihnen eine individuelle Empfehlung.
      </p>
      <p>
        <strong>Verschreibung und Einsetzen</strong>
        <br />
        Je nachdem, welche Methode für Sie in Frage kommt, kann ich Ihnen das entsprechende Verhütungsmittel direkt
        verschreiben oder einsetzen.
      </p>
      <p>
        <strong>Nachsorge</strong>
        <br />
        Selbstverständlich biete ich auch regelmäßige Kontrolltermine an, um sicherzustellen, dass das gewählte
        Verhütungsmittel gut vertragen wird und effektiv ist.
      </p>

      <h3>Nächste Schritte</h3>
      <p>
        Für eine individuelle Beratung vereinbaren Sie bitte einen Termin mit mir. Ich nehme mir gerne Zeit, um all Ihre
        Fragen zu beantworten.
      </p>
    </>
  )
}

function English() {
  return (
    <>
      <h2>Contraception advice</h2>
      <p>Find the method that suits you.</p>
      <p>
        Choosing the right method of contraception is a very personal decision that depends on many different factors.
        At our practice I offer comprehensive advice and detailed information on the various contraceptive options, so
        that you can find the method that is right for you.
      </p>

      <h3>What happens during the consultation?</h3>
      <p>
        <strong>Medical history</strong>
        <br />
        First, I take a detailed medical history to better understand your individual needs and health circumstances.
      </p>
      <p>
        <strong>Information and explanation</strong>
        <br />
        I give you detailed information on the various methods of contraception and explain the advantages and
        disadvantages of each.
      </p>
      <p>
        <strong>Recommendation</strong>
        <br />
        Based on your needs and your medical history, I give you an individual recommendation.
      </p>
      <p>
        <strong>Prescription and fitting</strong>
        <br />
        Depending on which method is suitable for you, I can prescribe or fit the contraceptive directly.
      </p>
      <p>
        <strong>Follow-up care</strong>
        <br />
        Of course, I also offer regular check-ups to make sure that the contraceptive you have chosen is well tolerated
        and effective.
      </p>

      <h3>Next steps</h3>
      <p>
        For individual advice, please make an appointment with me. I am happy to take the time to answer all your
        questions.
      </p>
    </>
  )
}
