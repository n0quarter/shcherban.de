import { Link } from "react-router"

import { GermanVersionApplies, LegalArticle } from "~/components/legal-article"
import { PageHeader } from "~/components/page-header"
import { localizedPath, useLang } from "~/lib/i18n"
import { practice } from "~/lib/practice"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/impressum"

const title = { de: "Impressum", en: "Legal notice" }
const description = {
  de: "Impressum der Frauenarztpraxis Ganna Shcherban, Matthiasstraße 7, 10249 Berlin.",
  en: "Legal notice (Impressum) of the gynaecological practice of Ganna Shcherban, Matthiasstraße 7, 10249 Berlin.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function Impressum() {
  const lang = useLang()
  return (
    <>
      <PageHeader title={title[lang]} />
      <LegalArticle>{lang === "de" ? <German /> : <English />}</LegalArticle>
    </>
  )
}

function German() {
  return (
    <>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        Ganna Shcherban
        <br />
        Frauenarztpraxis Ganna Shcherban
        <br />
        {practice.street}
        <br />
        {practice.city}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={practice.phoneHref}>{practice.phone}</a>
        <br />
        Fax: {practice.fax}
        <br />
        E-Mail: <a href={`mailto:${practice.email}`}>{practice.email}</a>
      </p>
      <p>
        Per E-Mail beraten wir nicht zu medizinischen Fragen. Einen Termin buchen Sie am einfachsten online über{" "}
        <a href={practice.bookingUrl} target="_blank" rel="noopener">
          Doctolib
        </a>
        .
      </p>

      <h2>Berufsrechtliche Angaben</h2>
      <p>
        <strong>Berufsbezeichnung:</strong> Ärztin, Fachärztin für Frauenheilkunde und Geburtshilfe, verliehen in der
        Bundesrepublik Deutschland
      </p>
      <p>
        <strong>Approbation:</strong> erteilt am 10. Februar 2015 vom Landesamt für Gesundheit und Soziales Berlin
      </p>
      <p>
        <strong>Zuständige Ärztekammer:</strong>
        <br />
        Ärztekammer Berlin, Friedrichstraße 16, 10969 Berlin
        <br />
        <a href="https://www.aekb.de">www.aekb.de</a>
      </p>
      <p>
        <strong>Zuständige Aufsichtsbehörde:</strong>
        <br />
        Landesamt für Gesundheit und Soziales Berlin (LAGeSo)
        <br />
        <a href="https://www.berlin.de/lageso/">www.berlin.de/lageso</a>
      </p>
      <p>
        <strong>Kassenärztliche Vereinigung</strong> (vertragsärztliche Zulassung):
        <br />
        Kassenärztliche Vereinigung Berlin, Masurenallee 6A, 14057 Berlin
        <br />
        <a href="https://www.kvberlin.de">www.kvberlin.de</a>
      </p>
      <p>
        <strong>Berufsrechtliche Regelungen:</strong> Berufsordnung der Ärztekammer Berlin, Berliner
        Heilberufekammergesetz und Bundesärzteordnung. Sie sind auf der Website der Ärztekammer Berlin abrufbar:{" "}
        <a href="https://www.aekb.de/recht/rechtliche-grundlagen">www.aekb.de/recht/rechtliche-grundlagen</a>
      </p>

      <h2>Datenschutz</h2>
      <p>
        Wie wir mit Ihren Daten umgehen, lesen Sie in unserer{" "}
        <Link to={localizedPath("de", "/datenschutz/")}>Datenschutzerklärung</Link>.
      </p>
    </>
  )
}

function English() {
  return (
    <>
      <GermanVersionApplies />

      <h2>Information pursuant to § 5 DDG</h2>
      <p>
        Ganna Shcherban
        <br />
        Frauenarztpraxis Ganna Shcherban
        <br />
        {practice.street}
        <br />
        {practice.city}, Germany
      </p>

      <h2>Contact</h2>
      <p>
        Phone: <a href={practice.phoneHref}>{practice.phone}</a>
        <br />
        Fax: {practice.fax}
        <br />
        Email: <a href={`mailto:${practice.email}`}>{practice.email}</a>
      </p>
      <p>
        We cannot give medical advice by email. The easiest way to book an appointment is online via{" "}
        <a href={practice.bookingUrl} target="_blank" rel="noopener">
          Doctolib
        </a>
        .
      </p>

      <h2>Professional information</h2>
      <p>
        <strong>Professional title:</strong> Ärztin (physician), Fachärztin für Frauenheilkunde und Geburtshilfe
        (specialist in obstetrics and gynaecology), awarded in the Federal Republic of Germany
      </p>
      <p>
        <strong>Licence to practise medicine (Approbation):</strong> granted on 10 February 2015 by the Landesamt für
        Gesundheit und Soziales Berlin
      </p>
      <p>
        <strong>Medical association:</strong>
        <br />
        Ärztekammer Berlin, Friedrichstraße 16, 10969 Berlin
        <br />
        <a href="https://www.aekb.de">www.aekb.de</a>
      </p>
      <p>
        <strong>Supervisory authority:</strong>
        <br />
        Landesamt für Gesundheit und Soziales Berlin (LAGeSo)
        <br />
        <a href="https://www.berlin.de/lageso/">www.berlin.de/lageso</a>
      </p>
      <p>
        <strong>Association of statutory health insurance physicians</strong> (licence to treat statutory insurance
        patients):
        <br />
        Kassenärztliche Vereinigung Berlin, Masurenallee 6A, 14057 Berlin
        <br />
        <a href="https://www.kvberlin.de">www.kvberlin.de</a>
      </p>
      <p>
        <strong>Professional regulations:</strong> Berufsordnung der Ärztekammer Berlin (professional code of the Berlin
        Medical Association), Berliner Heilberufekammergesetz and Bundesärzteordnung. They are available (in German) on
        the website of the Ärztekammer Berlin:{" "}
        <a href="https://www.aekb.de/recht/rechtliche-grundlagen">www.aekb.de/recht/rechtliche-grundlagen</a>
      </p>

      <h2>Privacy</h2>
      <p>
        How we handle your data is described in our{" "}
        <Link to={localizedPath("en", "/datenschutz/")}>privacy policy</Link>.
      </p>
    </>
  )
}
