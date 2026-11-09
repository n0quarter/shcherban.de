import { Link } from "react-router"

import { GermanVersionApplies, LegalArticle } from "~/components/legal-article"
import { PageHeader } from "~/components/page-header"
import { localizedPath, useLang } from "~/lib/i18n"
import { practice } from "~/lib/practice"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/datenschutz"

const title = { de: "Datenschutzerklärung", en: "Privacy policy" }
const description = {
  de: "Datenschutzerklärung der Frauenarztpraxis Ganna Shcherban: keine Cookies, kein Tracking. Was beim Besuch der Website, bei E-Mails und bei der Terminbuchung über Doctolib mit Ihren Daten geschieht.",
  en: "Privacy policy of the gynaecological practice of Ganna Shcherban: no cookies, no tracking. What happens to your data when you visit the website, email us or book via Doctolib.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

const links = {
  github: "https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement",
  google: "https://policies.google.com/privacy",
  doctolib: "https://www.doctolib.de/gesundheit/datenschutz-und-datensicherheit/",
  instagram: "https://privacycenter.instagram.com/policy",
  authority: "https://www.datenschutz-berlin.de",
}

export default function Datenschutz() {
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
      <h2>Das Wichtigste in Kürze</h2>
      <ul>
        <li>
          Diese Website setzt <strong>keine Cookies</strong>, <strong>kein Tracking</strong> und keine Analyse-Tools
          ein. Sie bindet keine Inhalte anderer Anbieter ein (keine Karten, Videos oder Social-Media-Plugins); auch die
          Schriften liegen auf unserem eigenen Webspace.
        </li>
        <li>
          Personenbezogene Daten fallen nur an, wenn Ihr Browser die Seiten abruft (beim Hosting-Anbieter), wenn Sie uns
          eine E-Mail schreiben und wenn Sie über Doctolib einen Termin buchen.
        </li>
        <li>Wir treffen keine automatisierten Entscheidungen und erstellen keine Profile.</li>
      </ul>

      <h2>Verantwortlich</h2>
      <p>
        Ganna Shcherban
        <br />
        Frauenarztpraxis Ganna Shcherban
        <br />
        {practice.street}, {practice.city}
        <br />
        E-Mail: <a href={`mailto:${practice.email}`}>{practice.email}</a>
        <br />
        Telefon: <a href={practice.phoneHref}>{practice.phone}</a>
      </p>

      <h2>Besuch dieser Website</h2>
      <p>
        Diese Website wird bei <strong>GitHub Pages</strong> gespeichert und ausgeliefert, einem Dienst der GitHub Inc.,
        88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Wenn Sie eine Seite aufrufen, verarbeitet GitHub
        technisch notwendige Verbindungsdaten: Ihre IP-Adresse, Datum und Uhrzeit, die aufgerufene Seite, die zuvor
        besuchte Seite sowie Angaben zu Browser und Betriebssystem. GitHub speichert die IP-Adresse nach eigenen Angaben
        zu Sicherheitszwecken, zum Beispiel zur Abwehr von Angriffen.
      </p>
      <p>
        Wir selbst haben keinen Zugriff auf diese Protokolle und werten sie nicht aus. Wie lange GitHub sie aufbewahrt,
        legt GitHub fest.
      </p>
      <p>
        <em>Rechtsgrundlage</em> ist Art. 6 Abs. 1 lit. f DSGVO: Wir haben ein berechtigtes Interesse daran, unsere
        Website zuverlässig und sicher bereitzustellen. Ohne diese Daten kann die Website nicht angezeigt werden.
      </p>
      <p>
        GitHub ist ein US-Unternehmen. Die Übermittlung in die USA stützt sich auf den Angemessenheitsbeschluss der
        EU-Kommission zum EU-US Data Privacy Framework (Art. 45 DSGVO); GitHub ist danach zertifiziert. Mehr dazu in der{" "}
        <a href={links.github}>Datenschutzerklärung von GitHub</a>.
      </p>
      <p>Die Verbindung zu unserer Website ist per HTTPS verschlüsselt.</p>

      <h2>Keine Cookies, kein Tracking</h2>
      <p>
        Wir verwenden keine Cookies und keine Dienste zur Reichweitenmessung. Ihr Browser merkt sich lediglich, wie weit
        Sie auf einer Seite gescrollt haben, damit Sie beim Zurückblättern an derselben Stelle landen. Diese Angabe liegt
        nur in Ihrem Browser (im sogenannten Session Storage), wird nicht an uns übertragen und beim Schließen des Tabs
        gelöscht. Sie ist für diese Funktion unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG).
      </p>

      <h2>Kontakt per E-Mail</h2>
      <p>
        Wenn Sie uns eine E-Mail schreiben, verarbeiten wir Ihre Angaben, um Ihr Anliegen zu beantworten. Unsere
        E-Mails werden von Google Workspace verwaltet (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
        Irland). Google verarbeitet sie in unserem Auftrag auf Grundlage eines Vertrags zur Auftragsverarbeitung (Art. 28
        DSGVO). Dabei kann es zu einer Übermittlung in die USA kommen; Google LLC ist nach dem EU-US Data Privacy
        Framework zertifiziert.
      </p>
      <p>
        <strong>Bitte beachten Sie:</strong> E-Mails sind in der Regel nur auf dem Transportweg verschlüsselt. Bitte
        schicken Sie uns per E-Mail keine Befunde oder ausführlichen Angaben zu Ihrer Gesundheit. Medizinische Fragen
        besprechen wir gern mit Ihnen in der Sprechstunde.
      </p>
      <p>
        <em>Rechtsgrundlage</em> ist Art. 6 Abs. 1 lit. b DSGVO, wenn es um Ihre Behandlung oder einen Termin geht,
        sonst Art. 6 Abs. 1 lit. f DSGVO (unser Interesse, Anfragen zu beantworten). Enthält Ihre Nachricht
        Gesundheitsdaten, gilt zusätzlich Art. 9 Abs. 2 lit. h DSGVO in Verbindung mit § 22 Abs. 1 Nr. 1 lit. b BDSG.
      </p>
      <p>
        Wir löschen Ihre E-Mail, sobald Ihr Anliegen erledigt ist. Gehört sie zu Ihrer Behandlung, nehmen wir sie in
        Ihre Patientenakte auf; diese bewahren wir nach § 630f BGB in der Regel zehn Jahre auf.
      </p>

      <h2>Termine und Nachrichten über Doctolib</h2>
      <p>
        Für die Online-Terminbuchung und für Nachrichten an die Praxis nutzen wir <strong>Doctolib</strong> (Doctolib
        GmbH, Berlin). Unsere Website enthält dafür nur Links. Erst wenn Sie auf „Termin buchen“ oder „Nachricht über
        Doctolib“ klicken, wechseln Sie zu Doctolib. Der Link teilt Doctolib mit, dass Sie von unserer Website kommen.
      </p>
      <p>
        Für Ihr Nutzerkonto bei Doctolib ist Doctolib selbst verantwortlich. Die Termin- und Nachrichtendaten für unsere
        Praxis verarbeitet Doctolib in unserem Auftrag (Art. 28 DSGVO). <em>Rechtsgrundlage</em> ist Art. 6 Abs. 1 lit.
        b DSGVO sowie für Gesundheitsangaben Art. 9 Abs. 2 lit. h DSGVO in Verbindung mit § 22 Abs. 1 Nr. 1 lit. b BDSG.
        Einzelheiten finden Sie in den <a href={links.doctolib}>Datenschutzhinweisen von Doctolib</a>.
      </p>
      <p>
        Sie müssen Doctolib nicht nutzen. Einen Termin können Sie auch auf den anderen Wegen vereinbaren, die auf unserer{" "}
        <Link to={localizedPath("de", "/kontakt/")}>Kontaktseite</Link> stehen.
      </p>

      <h2>Links zu Instagram und Google Maps</h2>
      <p>
        Wir verlinken auf unser Instagram-Profil und auf die Routenplanung bei Google Maps. Solange Sie nicht klicken,
        werden keine Daten an diese Anbieter übertragen. Nach dem Klick gelten deren Datenschutzbestimmungen:{" "}
        <a href={links.instagram}>Instagram</a> (Meta Platforms Ireland Limited) und{" "}
        <a href={links.google}>Google</a> (Google Ireland Limited).
      </p>

      <h2>Ihre Rechte</h2>
      <p>Sie haben jederzeit das Recht,</p>
      <ul>
        <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO),</li>
        <li>falsche Daten berichtigen zu lassen (Art. 16 DSGVO),</li>
        <li>die Löschung Ihrer Daten zu verlangen, soweit keine Aufbewahrungspflicht besteht (Art. 17 DSGVO),</li>
        <li>die Verarbeitung einschränken zu lassen (Art. 18 DSGVO),</li>
        <li>Ihre Daten in einem gängigen Format zu erhalten (Art. 20 DSGVO).</li>
      </ul>
      <p>
        <strong>Widerspruchsrecht:</strong> Verarbeiten wir Daten auf Grundlage unseres berechtigten Interesses (Art. 6
        Abs. 1 lit. f DSGVO), können Sie dem aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
        widersprechen (Art. 21 DSGVO).
      </p>
      <p>
        Schreiben Sie uns dazu einfach an <a href={`mailto:${practice.email}`}>{practice.email}</a> oder per Post an die
        Praxisadresse.
      </p>

      <h2>Beschwerde bei der Aufsichtsbehörde</h2>
      <p>
        Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO). Für uns zuständig ist:
        <br />
        Berliner Beauftragte für Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin,{" "}
        <a href={links.authority}>www.datenschutz-berlin.de</a>
      </p>

      <p>
        <em>Stand: November 2026</em>
      </p>
    </>
  )
}

function English() {
  return (
    <>
      <GermanVersionApplies />

      <h2>In short</h2>
      <ul>
        <li>
          This website uses <strong>no cookies</strong>, <strong>no tracking</strong> and no analytics. It embeds no
          content from other providers (no maps, videos or social media plugins); even the fonts are served from our own
          web space.
        </li>
        <li>
          Personal data is processed only when your browser loads the pages (by our hosting provider), when you email
          us, and when you book an appointment via Doctolib.
        </li>
        <li>We make no automated decisions and create no profiles.</li>
      </ul>

      <h2>Controller</h2>
      <p>
        Ganna Shcherban
        <br />
        Frauenarztpraxis Ganna Shcherban
        <br />
        {practice.street}, {practice.city}, Germany
        <br />
        Email: <a href={`mailto:${practice.email}`}>{practice.email}</a>
        <br />
        Phone: <a href={practice.phoneHref}>{practice.phone}</a>
      </p>

      <h2>Visiting this website</h2>
      <p>
        This website is stored and delivered by <strong>GitHub Pages</strong>, a service of GitHub Inc., 88 Colin P.
        Kelly Jr. Street, San Francisco, CA 94107, USA. When you open a page, GitHub processes technically necessary
        connection data: your IP address, date and time, the page requested, the page you came from, and details of your
        browser and operating system. According to GitHub, it stores the IP address for security purposes, for example
        to fend off attacks.
      </p>
      <p>
        We have no access to these logs and do not analyse them. GitHub decides how long it keeps them.
      </p>
      <p>
        <em>Legal basis</em> is Art. 6(1)(f) GDPR: we have a legitimate interest in providing our website reliably and
        securely. Without this data the website cannot be displayed.
      </p>
      <p>
        GitHub is a US company. The transfer to the USA is based on the European Commission's adequacy decision for the
        EU-US Data Privacy Framework (Art. 45 GDPR), under which GitHub is certified. See{" "}
        <a href={links.github}>GitHub's privacy statement</a>.
      </p>
      <p>The connection to our website is encrypted via HTTPS.</p>

      <h2>No cookies, no tracking</h2>
      <p>
        We use no cookies and no audience measurement. Your browser only remembers how far you scrolled on a page, so
        that you return to the same spot when you go back. This information stays in your browser (in the so-called
        session storage), is never sent to us and is deleted when you close the tab. It is strictly necessary for this
        function (§ 25(2) no. 2 TDDDG).
      </p>

      <h2>Contacting us by email</h2>
      <p>
        If you email us, we process your details to reply to you. Our email is managed by Google Workspace (Google
        Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland). Google processes it on our behalf under a data
        processing agreement (Art. 28 GDPR). Data may be transferred to the USA; Google LLC is certified under the EU-US
        Data Privacy Framework.
      </p>
      <p>
        <strong>Please note:</strong> emails are usually only encrypted in transit. Please do not send us test results
        or detailed health information by email. We are happy to discuss medical questions with you during your
        appointment.
      </p>
      <p>
        <em>Legal basis</em> is Art. 6(1)(b) GDPR if your message concerns your treatment or an appointment, otherwise
        Art. 6(1)(f) GDPR (our interest in answering enquiries). If your message contains health data, Art. 9(2)(h) GDPR
        in conjunction with § 22(1) no. 1(b) BDSG also applies.
      </p>
      <p>
        We delete your email once your request has been dealt with. If it is part of your treatment, we add it to your
        medical record, which we usually keep for ten years (§ 630f BGB).
      </p>

      <h2>Appointments and messages via Doctolib</h2>
      <p>
        For online booking and for messages to the practice we use <strong>Doctolib</strong> (Doctolib GmbH, Berlin).
        Our website only links to it. You move to Doctolib only when you click “Book appointment” or “Message via
        Doctolib”. The link tells Doctolib that you came from our website.
      </p>
      <p>
        Doctolib is itself responsible for your Doctolib user account. Appointment and message data for our practice is
        processed by Doctolib on our behalf (Art. 28 GDPR). <em>Legal basis</em> is Art. 6(1)(b) GDPR and, for health
        information, Art. 9(2)(h) GDPR in conjunction with § 22(1) no. 1(b) BDSG. For details see{" "}
        <a href={links.doctolib}>Doctolib's privacy information</a>.
      </p>
      <p>
        You don't have to use Doctolib. You can also make an appointment in the other ways listed on our{" "}
        <Link to={localizedPath("en", "/kontakt/")}>contact page</Link>.
      </p>

      <h2>Links to Instagram and Google Maps</h2>
      <p>
        We link to our Instagram profile and to route planning on Google Maps. No data is sent to these providers unless
        you click. After you click, their privacy policies apply: <a href={links.instagram}>Instagram</a> (Meta
        Platforms Ireland Limited) and <a href={links.google}>Google</a> (Google Ireland Limited).
      </p>

      <h2>Your rights</h2>
      <p>You have the right at any time to</p>
      <ul>
        <li>access the data we hold about you (Art. 15 GDPR),</li>
        <li>have incorrect data corrected (Art. 16 GDPR),</li>
        <li>have your data deleted, unless we are legally required to keep it (Art. 17 GDPR),</li>
        <li>have the processing restricted (Art. 18 GDPR),</li>
        <li>receive your data in a common format (Art. 20 GDPR).</li>
      </ul>
      <p>
        <strong>Right to object:</strong> where we process data on the basis of our legitimate interest (Art. 6(1)(f)
        GDPR), you may object at any time on grounds relating to your particular situation (Art. 21 GDPR).
      </p>
      <p>
        Just write to us at <a href={`mailto:${practice.email}`}>{practice.email}</a> or by post to the practice
        address.
      </p>

      <h2>Complaints to the supervisory authority</h2>
      <p>
        You can lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). The authority responsible
        for us is:
        <br />
        Berliner Beauftragte für Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin,{" "}
        <a href={links.authority}>www.datenschutz-berlin.de</a>
      </p>

      <p>
        <em>Last updated: November 2026</em>
      </p>
    </>
  )
}
