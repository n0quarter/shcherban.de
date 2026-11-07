import { ServicePage } from "~/components/service-page"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/igel-leistungen"

const title = { de: "IGeL-Leistungen", en: "Self-pay services (IGeL)" }
const description = {
  de: "IGeL-Leistungen in Friedrichshain: Ultraschall, Toxoplasmose- und CMV-Test, Dünnschichtzytologie, HPV-Test, STD-Diagnostik und Einlage einer Spirale.",
  en: "Self-pay services (IGeL) in Friedrichshain: ultrasound, toxoplasmosis and CMV tests, liquid-based cytology, HPV test, STI testing and coil (IUD) fitting.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function IgelLeistungen() {
  const lang = useLang()
  return (
    <ServicePage title={title[lang]} image="/images/praxis-22.jpg">
      {lang === "de" ? <German /> : <English />}
    </ServicePage>
  )
}

function German() {
  return (
    <>
      <h2>IGeL-Leistungen: Mehr Sicherheit und individuelle Behandlung für Ihre Gesundheit</h2>

      <h3>Was sind IGeL-Leistungen?</h3>
      <p>
        Individuelle Gesundheitsleistungen, kurz IGeL, sind medizinische Dienste, die über die Basisversorgung der
        gesetzlichen Krankenversicherung hinausgehen. Sie bieten Ihnen die Möglichkeit, Ihre Gesundheit und Vorsorge noch
        umfassender zu gestalten.
      </p>

      <h3>Unsere Angebote:</h3>
      <p>
        <strong>Ultraschalluntersuchung der Unterleibsorgane:</strong> Mit dieser Methode können wir frühzeitig
        Veränderungen im Bereich von Gebärmutter und Eierstöcken erkennen, die bei einer normalen Tastuntersuchung nicht
        auffallen würden.
      </p>
      <p>
        <strong>Toxoplasmose- und CMV-Test bei Schwangeren:</strong> Diese Tests sind besonders wichtig, um Infektionen
        frühzeitig zu erkennen, die dem Ungeborenen schaden könnten.
      </p>
      <p>
        <strong>Dünnschichtzytologie zur Früherkennung von Gebärmutterhalskrebs:</strong> Diese modernere Form des
        Zellabstrichs kann frühzeitig Veränderungen aufspüren, lange bevor sie zu einem ernsthaften Problem werden.
      </p>
      <p>
        <strong>HPV-Test:</strong> Der Test erkennt das humane Papillomavirus, das bei nahezu allen Fällen von
        Gebärmutterhalskrebs die Ursache ist.
      </p>
      <p>
        <strong>Infektionsdiagnostik sexuell übertragbarer Erkrankungen (STD):</strong> Wir bieten verschiedene Tests an,
        um eine breite Palette an sexuell übertragbaren Krankheiten zu erkennen.
      </p>
      <p>
        <strong>Verhütung (Einlage einer Spirale):</strong> Wir bieten auch Dienstleistungen rund um moderne
        Verhütungsmethoden an, zum Beispiel die Einlage einer Spirale.
      </p>
      <p>
        Wir sind immer für Sie da, um Sie umfassend zu beraten und gemeinsam den besten individuellen Gesundheitsplan für
        Sie zu erstellen. Bei Fragen zu den IGeL-Leistungen oder zur Vereinbarung eines Termins zögern Sie nicht, uns zu
        kontaktieren.
      </p>
    </>
  )
}

function English() {
  return (
    <>
      <h2>Self-pay services (IGeL): greater peace of mind and individual care for your health</h2>

      <h3>What are IGeL services?</h3>
      <p>
        Individual health services (Individuelle Gesundheitsleistungen, IGeL for short) are medical services that go
        beyond the basic care covered by statutory health insurance. They give you the opportunity to take an even more
        comprehensive approach to your health and preventive care.
      </p>

      <h3>What we offer:</h3>
      <p>
        <strong>Ultrasound scan of the pelvic organs:</strong> This method allows us to detect changes in the uterus and
        ovaries at an early stage that would not be noticed during a normal manual examination.
      </p>
      <p>
        <strong>Toxoplasmosis and CMV tests in pregnancy:</strong> These tests are particularly important for detecting
        infections early that could harm the unborn baby.
      </p>
      <p>
        <strong>Liquid-based cytology for the early detection of cervical cancer:</strong> This more modern form of cell
        smear can detect changes early, long before they become a serious problem.
      </p>
      <p>
        <strong>HPV test:</strong> The test detects human papillomavirus, which is the cause of almost all cases of
        cervical cancer.
      </p>
      <p>
        <strong>Testing for sexually transmitted infections (STIs):</strong> We offer various tests to detect a wide range
        of sexually transmitted diseases.
      </p>
      <p>
        <strong>Contraception (coil fitting):</strong> We also offer services relating to modern methods of contraception,
        for example fitting an intrauterine device (coil).
      </p>
      <p>
        We are always here to give you comprehensive advice and to work with you to create the best individual health plan
        for you. If you have any questions about IGeL services or would like to make an appointment, please do not hesitate
        to contact us.
      </p>
    </>
  )
}
