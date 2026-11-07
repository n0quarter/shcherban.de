import { ServicePage } from "~/components/service-page"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/krebsvorsorge"

const title = { de: "Krebsvorsorge", en: "Cancer screening" }
const description = {
  de: "Krebsfrüherkennung in der Frauenarztpraxis in Friedrichshain: Untersuchungen, Spezialtests und Beratung, die von den gesetzlichen Kassen erstattet werden.",
  en: "Cancer screening at our gynaecological practice in Friedrichshain: examinations, special tests and counselling covered by statutory health insurance.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function Krebsvorsorge() {
  const lang = useLang()
  return (
    <ServicePage title={title[lang]} image="/images/praxis-25.jpg">
      {lang === "de" ? <German /> : <English />}
    </ServicePage>
  )
}

function German() {
  return (
    <>
      <h2>Krebsfrüherkennung</h2>
      <p>
        Krebsvorsorge umfasst eine Reihe von medizinischen Untersuchungen und Tests, die darauf abzielen, Krebs in einem
        sehr frühen Stadium zu erkennen oder das Risiko seiner Entwicklung zu minimieren. Die Früherkennung von Krebs ist
        entscheidend, da die Behandlungschancen in der Regel höher sind, wenn die Krankheit in einem frühen Stadium erkannt
        wird.
      </p>
      <p>
        <em>Früherkennungsuntersuchungen, die von den gesetzlichen Kassen erstattet werden:</em>
      </p>

      <h3>Für Frauen von 20 bis 34 Jahren</h3>
      <p><strong>Was wird untersucht?</strong></p>
      <ul>
        <li>Gezielte Anamnese (z.B. Fragen nach Blutungsstörungen)</li>
        <li>Gynäkologische Tastuntersuchung</li>
        <li>Untersuchung der genitalen Hautregion</li>
      </ul>
      <p><strong>Spezialtests</strong></p>
      <ul>
        <li>Pap-Abstrich für zytologische Untersuchung des Gebärmutterhalses</li>
      </ul>
      <p><strong>Weitere Schritte bei auffälligen Befunden</strong></p>
      <ul>
        <li>Zytologische Untersuchung</li>
        <li>HPV-Test</li>
        <li>Kolposkopie (Spiegelung des Gebärmutterhalses)</li>
      </ul>
      <p><strong>Beratung</strong></p>
      <ul>
        <li>Ausführliche Beratung über das Ergebnis</li>
      </ul>

      <h3>Für Frauen ab 35 Jahren</h3>
      <p><strong>Was wird untersucht?</strong></p>
      <ul>
        <li>Gezielte Anamnese (z.B. Fragen nach Blutungsstörungen)</li>
        <li>Gynäkologische Tastuntersuchung</li>
        <li>Untersuchung der genitalen Hautregion</li>
      </ul>
      <p><strong>Spezialtests</strong></p>
      <ul>
        <li>Kombinationsuntersuchung aus zytologischem Abstrich und HPV-Test (alle drei Jahre)</li>
      </ul>
      <p><strong>Weitere Schritte bei auffälligen Befunden</strong></p>
      <ul>
        <li>Ko-Testung (zytologischer Abstrich plus HPV-Test)</li>
        <li>Kolposkopie (Spiegelung des Gebärmutterhalses)</li>
      </ul>
      <p><strong>Beratung</strong></p>
      <ul>
        <li>Ausführliche Beratung über das Ergebnis</li>
      </ul>

      <h3>Brustuntersuchung ab 30 Jahren</h3>
      <p><strong>Was wird untersucht?</strong></p>
      <ul>
        <li>Gezielte Anamnese (z.B. Fragen nach Veränderungen/Beschwerden)</li>
        <li>Inspektion und Abtasten der Brust und der regionalen Lymphknoten</li>
      </ul>
      <p><strong>Beratung</strong></p>
      <ul>
        <li>Anleitung zur Selbstuntersuchung</li>
        <li>Ausführliche Beratung über das Ergebnis</li>
      </ul>

      <h3>Mammographie-Screening</h3>
      <ul>
        <li>Frauen im Alter von 50 bis 69 Jahren</li>
        <li>Alle zwei Jahre schriftliche Einladung und Information</li>
      </ul>

      <h3>Dickdarm- und Rektumuntersuchung</h3>
      <p><strong>Was wird untersucht?</strong></p>
      <ul>
        <li>
          Test auf verborgenes Blut im Stuhl
          <ul>
            <li>50 bis 54 Jahren: jährlich</li>
            <li>ab 55 Jahren: alle zwei Jahre</li>
          </ul>
        </li>
        <li>Früherkennungs-Darmspiegelung ab 55 Jahren</li>
      </ul>
      <p><strong>Beratung</strong></p>
      <ul>
        <li>Gezielte einmalige umfassende Beratung über die Möglichkeiten der Darmkrebsfrüherkennung ab 50 Jahren</li>
      </ul>
    </>
  )
}

function English() {
  return (
    <>
      <h2>Early cancer detection</h2>
      <p>
        Cancer screening includes a range of medical examinations and tests that aim to detect cancer at a very early
        stage or to reduce the risk of it developing. Early detection is crucial, because the chances of successful
        treatment are usually higher when the disease is found early.
      </p>
      <p>
        <em>Screening examinations covered by statutory health insurance:</em>
      </p>

      <h3>For women aged 20 to 34</h3>
      <p><strong>What is examined?</strong></p>
      <ul>
        <li>Targeted medical history (e.g. questions about bleeding disorders)</li>
        <li>Gynaecological palpation</li>
        <li>Examination of the genital skin area</li>
      </ul>
      <p><strong>Special tests</strong></p>
      <ul>
        <li>Pap smear for cytological examination of the cervix</li>
      </ul>
      <p><strong>Further steps if findings are abnormal</strong></p>
      <ul>
        <li>Cytological examination</li>
        <li>HPV test</li>
        <li>Colposcopy (examination of the cervix)</li>
      </ul>
      <p><strong>Counselling</strong></p>
      <ul>
        <li>Detailed discussion of the results</li>
      </ul>

      <h3>For women aged 35 and over</h3>
      <p><strong>What is examined?</strong></p>
      <ul>
        <li>Targeted medical history (e.g. questions about bleeding disorders)</li>
        <li>Gynaecological palpation</li>
        <li>Examination of the genital skin area</li>
      </ul>
      <p><strong>Special tests</strong></p>
      <ul>
        <li>Combined cytological smear and HPV test (every three years)</li>
      </ul>
      <p><strong>Further steps if findings are abnormal</strong></p>
      <ul>
        <li>Co-testing (cytological smear plus HPV test)</li>
        <li>Colposcopy (examination of the cervix)</li>
      </ul>
      <p><strong>Counselling</strong></p>
      <ul>
        <li>Detailed discussion of the results</li>
      </ul>

      <h3>Breast examination from age 30</h3>
      <p><strong>What is examined?</strong></p>
      <ul>
        <li>Targeted medical history (e.g. questions about changes or complaints)</li>
        <li>Inspection and palpation of the breasts and regional lymph nodes</li>
      </ul>
      <p><strong>Counselling</strong></p>
      <ul>
        <li>Guidance on self-examination</li>
        <li>Detailed discussion of the results</li>
      </ul>

      <h3>Mammography screening</h3>
      <ul>
        <li>Women aged 50 to 69</li>
        <li>Written invitation and information every two years</li>
      </ul>

      <h3>Colon and rectal examination</h3>
      <p><strong>What is examined?</strong></p>
      <ul>
        <li>
          Test for hidden blood in the stool
          <ul>
            <li>Aged 50 to 54: every year</li>
            <li>From age 55: every two years</li>
          </ul>
        </li>
        <li>Screening colonoscopy from age 55</li>
      </ul>
      <p><strong>Counselling</strong></p>
      <ul>
        <li>One-time comprehensive counselling on colorectal cancer screening options from age 50</li>
      </ul>
    </>
  )
}
