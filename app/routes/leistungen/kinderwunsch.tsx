import { ServicePage } from "~/components/service-page"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/kinderwunsch"

const title = { de: "Kinderwunsch", en: "Fertility and family planning" }
const description = {
  de: "Kinderwunsch-Sprechstunde in Friedrichshain: Beratung vor der Schwangerschaft, Diagnostik, Therapieoptionen und Social Freezing – für Paare und Einzelpersonen.",
  en: "Fertility consultations in Friedrichshain: pre-pregnancy advice, diagnostic tests, treatment options and social egg freezing – for couples and individuals.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function Kinderwunsch() {
  const lang = useLang()
  return (
    <ServicePage title={title[lang]} image="/images/praxis-14.jpg">
      {lang === "de" ? <German /> : <English />}
    </ServicePage>
  )
}

function German() {
  return (
    <>
      <h2>Kinderwunsch-Sprechstunde: Ihr Weg zum Wunschkind</h2>

      <h3>Was ist die Kinderwunsch-Sprechstunde?</h3>
      <p>
        Der Wunsch nach einem Kind ist ein tiefgreifendes und emotionales Anliegen. In unserer Praxis biete ich Ihnen eine
        spezielle Kinderwunsch-Sprechstunde an, in der ich gemeinsam mit Ihnen die besten Wege und Methoden erforsche, um
        Ihren Traum von einer Familie Wirklichkeit werden zu lassen.
      </p>

      <h3>Was erwartet Sie?</h3>
      <p>
        <strong>Beratung vor der geplanten Schwangerschaft</strong>
        <br />
        Bevor Sie aktiv versuchen, schwanger zu werden, gibt es mehrere Faktoren, die Sie berücksichtigen sollten. Ich
        berate Sie zu Themen wie Ernährung, Lebensstil und notwendigen Vorsorgeuntersuchungen. Zusätzlich können
        ergänzende Untersuchungen wie genetische Tests oder Impfstatus-Checks durchgeführt werden.
      </p>
      <p>
        <strong>Anamnese und Erstberatung</strong>
        <br />
        Im ersten Gespräch führe ich eine ausführliche Anamnese durch, um Ihre gesundheitliche Situation und besonderen
        Bedürfnisse zu verstehen.
      </p>
      <p>
        <strong>Diagnostische Maßnahmen</strong>
        <br />
        Je nach Bedarf können verschiedene Untersuchungen erfolgen, wie Hormontests, Ultraschalluntersuchungen und weitere
        spezialisierte Tests.
      </p>
      <p>
        <strong>Beratung zu therapeutischen Optionen</strong>
        <br />
        Ich biete Ihnen eine ausführliche Beratung zu den verschiedenen Möglichkeiten, die zur Erfüllung Ihres
        Kinderwunsches in Frage kommen könnten. Bei Bedarf kann ich Sie an spezialisierte Zentren oder Ärzte überweisen.
      </p>
      <p>
        <strong>Social-Freezing-Beratung</strong>
        <br />
        Wenn Sie Ihren Kinderwunsch zeitlich verschieben möchten, berate ich Sie gerne zu den Möglichkeiten und
        Voraussetzungen des Social Freezing.
      </p>
      <p>
        <strong>Psychologische Unterstützung</strong>
        <br />
        Der Kinderwunsch kann emotional sehr belastend sein. Falls erforderlich, bieten wir auch psychologische Betreuung
        an.
      </p>

      <h3>Wer kann teilnehmen?</h3>
      <p>
        Die Kinderwunsch-Sprechstunde steht allen offen – ob Einzelpersonen oder Paare, unabhängig von Ihrer sexuellen
        Orientierung oder Familienform.
      </p>

      <h3>Wie kann ich einen Termin vereinbaren?</h3>
      <p>
        Bitte kontaktieren Sie uns, um einen Termin für die Kinderwunsch-Sprechstunde zu vereinbaren. Ich nehme mir
        ausreichend Zeit, um all Ihre Fragen und Anliegen zu klären.
      </p>
    </>
  )
}

function English() {
  return (
    <>
      <h2>Fertility consultation: your path to the child you long for</h2>

      <h3>What is the fertility consultation?</h3>
      <p>
        The wish to have a child is a profound and emotional matter. At our practice I offer a dedicated fertility
        consultation, in which we explore together the best ways and methods to make your dream of a family come true.
      </p>

      <h3>What can you expect?</h3>
      <p>
        <strong>Advice before a planned pregnancy</strong>
        <br />
        Before you actively try to get pregnant, there are several factors you should consider. I advise you on topics
        such as diet, lifestyle and necessary preventive check-ups. In addition, supplementary examinations such as
        genetic tests or vaccination status checks can be carried out.
      </p>
      <p>
        <strong>Medical history and initial consultation</strong>
        <br />
        In our first conversation, I take a detailed medical history to understand your health situation and your
        particular needs.
      </p>
      <p>
        <strong>Diagnostic tests</strong>
        <br />
        Depending on your needs, various examinations can be carried out, such as hormone tests, ultrasound scans and
        other specialised tests.
      </p>
      <p>
        <strong>Advice on treatment options</strong>
        <br />
        I offer detailed advice on the various options that may help you fulfil your wish for a child. If needed, I can
        refer you to specialised centres or doctors.
      </p>
      <p>
        <strong>Social egg freezing advice</strong>
        <br />
        If you would like to postpone having children, I am happy to advise you on the options for and requirements of
        social egg freezing.
      </p>
      <p>
        <strong>Psychological support</strong>
        <br />
        Trying for a child can be very emotionally stressful. If required, we also offer psychological support.
      </p>

      <h3>Who can attend?</h3>
      <p>
        The fertility consultation is open to everyone – individuals or couples, regardless of sexual orientation or
        family structure.
      </p>

      <h3>How can I make an appointment?</h3>
      <p>
        Please contact us to make an appointment for the fertility consultation. I take plenty of time to address all
        your questions and concerns.
      </p>
    </>
  )
}
