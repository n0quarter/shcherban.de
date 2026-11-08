import { PageHeader } from "~/components/page-header"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/impressum"

const title = { de: "Impressum & Datenschutz", en: "Imprint & privacy" }
const description = {
  de: "Impressum und Datenschutzerklärung der Frauenarztpraxis Ganna Shcherban, Matthiasstraße 7, 10249 Berlin.",
  en: "Legal notice and privacy policy of the gynaecological practice of Ganna Shcherban, Matthiasstraße 7, 10249 Berlin.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function Impressum() {
  const lang = useLang()

  return (
    <>
      <PageHeader title={title[lang]} />
      <div className="mx-auto max-w-6xl px-4">
        {lang === "en" && (
          <p className="mb-10 max-w-3xl rounded-2xl bg-tint p-6 text-ink">
            This is the legal notice (Impressum) and privacy policy (Datenschutzerklärung) of our practice. It is
            provided in German only; the German version applies.
          </p>
        )}
        <article
          lang="de"
          className="diamond-bullets prose max-w-3xl prose-neutral prose-headings:font-heading prose-headings:font-semibold prose-headings:text-ink prose-a:text-primary prose-strong:text-ink"
        >
          <LegalText />
        </article>
      </div>
    </>
  )
}

/** German legal text, verbatim from the old site. Do not translate or rewrite. */
function LegalText() {
  return (
    <>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        <strong>Frauenarztpraxis Ganna Shcherban</strong>
        <br />
        Fachärztin für Gynäkologie und Geburtshilfe
        <br />
        Matthiasstraße 7, 10249 Berlin
      </p>
      <p>
        <strong>Kontakt:</strong>
        <br />
        Tel.: 030 421 08 675 · Fax: 030 421 08 677
        <br />
        E-Mail: <a href="mailto:info@shcherban.de">info@shcherban.de</a>
        <br />
        Website: <a href="https://shcherban.de">shcherban.de</a>
      </p>

      <h2>Berufsrechtliche Angaben</h2>
      <p>
        <strong>Berufsbezeichnung:</strong> Ärztin, Fachärztin für Gynäkologie und Geburtshilfe
        <br />
        <strong>Staat der Verleihung:</strong> Deutschland
      </p>
      <p>
        <strong>Approbation erteilt durch:</strong>
        <br />
        Landesamt für Gesundheit und Soziales Berlin (LAGeSo) — am 10. Februar 2015
      </p>
      <p>
        <strong>Zuständige Ärztekammer:</strong>
        <br />
        Ärztekammer Berlin, Friedrichstraße 16, 10969 Berlin — <a href="https://www.aekb.de">www.aekb.de</a>
      </p>
      <p>
        <strong>Zuständige Kassenärztliche Vereinigung</strong> (falls vertragsärztlich):
        <br />
        Kassenärztliche Vereinigung Berlin, Masurenallee 6A, 14057 Berlin —{" "}
        <a href="https://www.kvberlin.de">www.kvberlin.de</a>
        <br />
        <strong>Zuständige Aufsichtsbehörde:</strong>
        <br />
        Landesamt für Gesundheit und Soziales Berlin (LAGeSo), Turmstraße 21, 10559 Berlin
      </p>
      <p>
        <strong>Berufsrechtliche Regelungen:</strong>
        <br />
        Berufsordnung der Ärztekammer Berlin; weitere berufsrechtliche Vorschriften (einsehbar über die Website der
        Ärztekammer Berlin).
      </p>
      <p>
        <strong>Verantwortlich i.S.d. § 18 Abs. 2 MStV:</strong>
        <br />
        Ganna Shcherban
      </p>

      <h2>Berufshaftpflichtversicherung</h2>
      <p>
        Versicherer: —
        <br />
        Räumlicher Geltungsbereich: Deutschland
      </p>

      <hr />

      <h2>Haftungsausschluss</h2>
      <h3>Haftung für Inhalte</h3>
      <p>
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt; für Richtigkeit, Vollständigkeit und Aktualität
        übernehmen wir keine Gewähr. Als Diensteanbieter sind wir nach den allgemeinen Gesetzen für eigene Inhalte
        verantwortlich.
      </p>
      <h3>Haftung für Links</h3>
      <p>
        Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Bei
        Bekanntwerden von Rechtsverletzungen entfernen wir entsprechende Links umgehend.
      </p>
      <h3>Urheberrecht</h3>
      <p>
        Alle auf dieser Website veröffentlichten Inhalte unterliegen dem Urheberrecht. Downloads und Kopien sind nur für
        den privaten, nicht kommerziellen Gebrauch gestattet. Inhalte Dritter sind als solche gekennzeichnet.
      </p>

      <hr />

      <h2>Datenschutzerklärung</h2>
      <h3>Verantwortliche Stelle</h3>
      <p>
        Frauenarztpraxis Ganna Shcherban, Matthiasstraße 7, 10249 Berlin
        <br />
        E-Mail: <a href="mailto:info@shcherban.de">info@shcherban.de</a>
      </p>
      <h3>Website-Daten</h3>
      <ul>
        <li>
          <strong>Server-Logs</strong>: Beim Aufruf der Website verarbeitet unser Hosting-Provider u.a. IP-Adresse,
          Datum/Uhrzeit, aufgerufene URL, Referrer, User-Agent zur Bereitstellung und Sicherheit der Website.{" "}
          <em>Rechtsgrundlage:</em> Art. 6 Abs. 1 lit. f DSGVO.
        </li>
        <li>
          <strong>Kontakt per E-Mail/Kontaktformular</strong>: Verarbeitung Ihrer Angaben zur Bearbeitung der Anfrage.{" "}
          <em>Rechtsgrundlage:</em> Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.
        </li>
      </ul>
      <h3>Patientendaten in der Praxis</h3>
      <p>
        Für die medizinische Behandlung verarbeiten wir Gesundheitsdaten. <em>Rechtsgrundlagen:</em> Art. 9 Abs. 2 lit.
        h DSGVO i.V.m. § 22 BDSG sowie Art. 6 Abs. 1 lit. b DSGVO und gesetzliche Pflichten (z. B.
        Aufbewahrungsfristen).
      </p>
      <h3>Empfänger</h3>
      <p>
        IT-Dienstleister (Hosting), ggf. Termin-/Kommunikations-Dienstleister, Labore, gesetzliche/privat Versicherer,
        Kassenärztliche Vereinigung, mitbehandelnde Ärztinnen/Ärzte – soweit erforderlich und rechtlich zulässig.
      </p>
      <h3>Speicherdauer</h3>
      <p>
        Server-Logs in der Regel 7–30 Tage; Kommunikations-/Termindaten bis Abschluss der Anfrage oder gemäß
        gesetzlichen Fristen; Behandlungsunterlagen gemäß den gesetzlich vorgesehenen Aufbewahrungsfristen.
      </p>
      <h3>Ihre Rechte</h3>
      <p>
        Rechte nach Art. 15–22 DSGVO (Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit,
        Widerspruch) sowie Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft.
      </p>
      <h3>Aufsichtsbehörde</h3>
      <p>
        Berliner Beauftragte für Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin —{" "}
        <a href="https://www.datenschutz-berlin.de/">datenschutz-berlin.de</a>
      </p>
      <h3>Datenschutzbeauftragte/r</h3>
      <p>
        Eine Benennung ist nach § 38 BDSG regelmäßig nicht erforderlich. Bei Fragen wenden Sie sich an die
        Praxisinhaberin.
      </p>
      <p>
        <em>Stand: Oktober 2025</em>
      </p>
    </>
  )
}
