import { ServicePage } from "~/components/service-page"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/schwangerenbetreuung"

const title = { de: "Schwangerenbetreuung", en: "Pregnancy care" }
const description = {
  de: "Schwangerschaftsbetreuung nach den Mutterschafts-Richtlinien in Friedrichshain: Vorsorgeuntersuchungen, Ultraschall, CTG und Geburtsvorbereitung.",
  en: "Pregnancy care in Friedrichshain following the German maternity guidelines: antenatal check-ups, ultrasound scans, CTG and preparation for birth.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function Schwangerenbetreuung() {
  const lang = useLang()
  return (
    <ServicePage title={title[lang]} image="/images/praxis-28.jpg">
      {lang === "de" ? <German /> : <English />}
    </ServicePage>
  )
}

function German() {
  return (
    <>
      <h2>Schwangerschaftsbetreuung nach den Mutterschafts-Richtlinien</h2>

      <h3>Erstuntersuchung</h3>
      <ul>
        <li>Vollständige Anamnese inklusive Familienanamnese</li>
        <li>Körperliche Untersuchung</li>
        <li>Blutuntersuchung: Blutgruppe, Rhesusfaktor, Eisenwerte, etc.</li>
        <li>Urinuntersuchung: Eiweiß, Zucker, Keime</li>
        <li>Ultraschall zur Bestätigung der Schwangerschaft</li>
      </ul>

      <h3>Folgeuntersuchungen</h3>
      <p>Alle vier Wochen (bis zur 32. SSW)</p>
      <ul>
        <li>Gewichtskontrolle</li>
        <li>Blutdruckmessung</li>
        <li>Urinuntersuchung: Eiweiß, Zucker</li>
        <li>Überwachung der kindlichen Herztöne</li>
      </ul>
      <p>Ab der 32. SSW alle zwei Wochen</p>
      <ul>
        <li>Wie bei den vierwöchigen Untersuchungen</li>
        <li>CTG-Kontrolle</li>
        <li>Zunehmende Überwachung der kindlichen Entwicklung und Wachstums</li>
      </ul>

      <h3>Spezielle Tests und Untersuchungen</h3>
      <ul>
        <li>Ersttrimesterscreening (9.-14. SSW)</li>
        <li>Organscreening (19.-22. SSW)</li>
        <li>Glukosetoleranztest (24.-28. SSW)</li>
        <li>Anti-D-Prophylaxe bei Rhesus-negativen Frauen (28. SSW und nach der Geburt)</li>
        <li>Pertussisimpfung (Keuchhusten) ca. in der 30. SSW</li>
        <li>Cervixmessung mittels Ultraschall</li>
      </ul>

      <h3>Bei Risikoschwangerschaften</h3>
      <ul>
        <li>Weitere spezielle Ultraschalluntersuchungen</li>
        <li>Doppler-Ultraschall zur Überprüfung der Durchblutung</li>
        <li>engmaschigere Überwachung</li>
      </ul>

      <h3>Geburtsvorbereitung und Abschlussuntersuchung</h3>
      <ul>
        <li>Geburtsvorbereitungskurse</li>
        <li>Abschließende Untersuchung und Beratung zur Geburt</li>
        <li>Überprüfung des Geburtskanals und des Muttermundes</li>
        <li>Festlegung des Geburtsortes und ggf. des Geburtstermins</li>
      </ul>
    </>
  )
}

function English() {
  return (
    <>
      <h2>Pregnancy care in line with the German maternity guidelines</h2>

      <h3>First examination</h3>
      <ul>
        <li>Full medical history, including family history</li>
        <li>Physical examination</li>
        <li>Blood tests: blood group, rhesus factor, iron levels, etc.</li>
        <li>Urine test: protein, sugar, bacteria</li>
        <li>Ultrasound scan to confirm the pregnancy</li>
      </ul>

      <h3>Follow-up examinations</h3>
      <p>Every four weeks (up to week 32 of pregnancy)</p>
      <ul>
        <li>Weight check</li>
        <li>Blood pressure measurement</li>
        <li>Urine test: protein, sugar</li>
        <li>Monitoring of the baby's heartbeat</li>
      </ul>
      <p>Every two weeks from week 32</p>
      <ul>
        <li>As in the four-weekly check-ups</li>
        <li>CTG monitoring</li>
        <li>Increasingly close monitoring of the baby's development and growth</li>
      </ul>

      <h3>Special tests and examinations</h3>
      <ul>
        <li>First-trimester screening (weeks 9–14)</li>
        <li>Anomaly scan (weeks 19–22)</li>
        <li>Glucose tolerance test (weeks 24–28)</li>
        <li>Anti-D prophylaxis for rhesus-negative women (week 28 and after birth)</li>
        <li>Pertussis (whooping cough) vaccination at around week 30</li>
        <li>Cervical length measurement by ultrasound</li>
      </ul>

      <h3>For high-risk pregnancies</h3>
      <ul>
        <li>Additional specialised ultrasound scans</li>
        <li>Doppler ultrasound to check blood flow</li>
        <li>More frequent monitoring</li>
      </ul>

      <h3>Birth preparation and final examination</h3>
      <ul>
        <li>Antenatal classes</li>
        <li>Final examination and advice on the birth</li>
        <li>Examination of the birth canal and the cervix</li>
        <li>Choosing the place of birth and, if applicable, the delivery date</li>
      </ul>
    </>
  )
}
