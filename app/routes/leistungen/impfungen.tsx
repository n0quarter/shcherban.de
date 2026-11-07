import { ServicePage } from "~/components/service-page"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/impfungen"

const title = { de: "Impfungen", en: "Vaccinations" }
const description = {
  de: "Impfungen nach STIKO-Empfehlung in Friedrichshain: Auffrischimpfungen, MMR, Windpocken, HPV, Impfungen in der Schwangerschaft, ab 60 Jahren und Grippeimpfung.",
  en: "STIKO-recommended vaccinations in Friedrichshain: boosters, MMR, chickenpox, HPV, vaccinations in pregnancy and from age 60, and the seasonal flu jab.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function Impfungen() {
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
      <h2>Impfungen: Ihr Schutz gegen Infektionskrankheiten</h2>
      <p>In unserer Praxis bieten wir die von der Ständigen Impfkommission (STIKO) empfohlenen Standardimpfungen an.</p>

      <p><strong>Kombinierte Auffrischimpfung</strong></p>
      <p>
        Schützt vor Diphtherie, Tetanus, Keuchhusten und optional Poliomyelitis.
        <br />
        <strong><em>Empfehlung:</em></strong> Auffrischung alle 10 Jahre.
      </p>
      <p>
        <strong>MMR</strong> (Masern, Mumps, Röteln)
        <br />
        Besonders wichtig, insbesondere bei fehlenden Impfungen in der Kindheit.
      </p>
      <p>
        <strong>Varizellen</strong> (Windpocken)
        <br />
        Einmalige Impfung bei fehlender Immunität oder wenn die Krankheit noch nicht durchgemacht wurde.
      </p>
      <p>
        <strong>HPV-Impfung</strong>
        <br />
        Für Jugendliche (Mädchen und Jungen) im Alter von 9 bis 18 Jahren.
      </p>
      <p>Schützt vor bestimmten Typen des humanen Papillomavirus, die Gebärmutterhalskrebs und andere Krebsarten verursachen können.</p>

      <h3>Schwangerschaft und Schwangerschaftsplanung:</h3>
      <ul>
        <li>Überprüfung des MMR- und Varizellen-Schutzes vor der Schwangerschaft.</li>
        <li>Pertussis-Auffrischung während der Schwangerschaft zum Schutz des Neugeborenen.</li>
      </ul>

      <h3>Impfungen ab 60 Jahren:</h3>
      <ul>
        <li>
          <strong>Pneumokokken</strong>
          <br />
          Zum Schutz vor Lungenentzündung.
        </li>
        <li>
          <strong>Gürtelrose</strong>
          <br />
          Zur Risikominderung der schmerzhaften Hauterkrankung.
        </li>
      </ul>

      <h3>Saisonale Impfungen</h3>
      <ul>
        <li>
          <strong>Grippeimpfung</strong>
          <br />
          Schützt vor den häufigsten Grippeviren der Saison.
        </li>
      </ul>
    </>
  )
}

function English() {
  return (
    <>
      <h2>Vaccinations: your protection against infectious diseases</h2>
      <p>
        At our practice we offer the standard vaccinations recommended by the German Standing Committee on Vaccination
        (STIKO).
      </p>

      <p><strong>Combined booster vaccination</strong></p>
      <p>
        Protects against diphtheria, tetanus, whooping cough and, optionally, polio.
        <br />
        <strong><em>Recommendation:</em></strong> booster every 10 years.
      </p>
      <p>
        <strong>MMR</strong> (measles, mumps, rubella)
        <br />
        Particularly important, especially if vaccinations were missed in childhood.
      </p>
      <p>
        <strong>Varicella</strong> (chickenpox)
        <br />
        A one-off vaccination if you are not immune or have not yet had the disease.
      </p>
      <p>
        <strong>HPV vaccination</strong>
        <br />
        For young people (girls and boys) aged 9 to 18.
      </p>
      <p>Protects against certain types of human papillomavirus that can cause cervical cancer and other cancers.</p>

      <h3>Pregnancy and planning a pregnancy:</h3>
      <ul>
        <li>Checking MMR and varicella immunity before pregnancy.</li>
        <li>Whooping cough (pertussis) booster during pregnancy to protect the newborn.</li>
      </ul>

      <h3>Vaccinations from age 60:</h3>
      <ul>
        <li>
          <strong>Pneumococcus</strong>
          <br />
          To protect against pneumonia.
        </li>
        <li>
          <strong>Shingles</strong>
          <br />
          To reduce the risk of this painful skin condition.
        </li>
      </ul>

      <h3>Seasonal vaccinations</h3>
      <ul>
        <li>
          <strong>Flu vaccination</strong>
          <br />
          Protects against the most common flu viruses of the season.
        </li>
      </ul>
    </>
  )
}
