import { ServicePage } from "~/components/service-page"
import { useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/praeventionsmedizin"

const title = { de: "Präventionsmedizin", en: "Preventive medicine" }
const description = {
  de: "Präventionsmedizin in der Frauenarztpraxis in Friedrichshain: Gesundheits-Check-up, Impfberatung, Früherkennungsuntersuchungen und Vermittlung an Spezialisten.",
  en: "Preventive medicine at our gynaecological practice in Friedrichshain: health check-ups, vaccination advice, screening examinations and referrals to specialists.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function Praeventionsmedizin() {
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
      <h2>Präventionsmedizin: Ihre Gesundheit ist unser Ziel</h2>

      <h3>Was ist Präventionsmedizin?</h3>
      <p>
        Präventionsmedizin befasst sich mit der Vorbeugung von Krankheiten und der Förderung von Gesundheit und
        Wohlbefinden. In unserer Praxis bieten wir ein breites Spektrum an präventiven Maßnahmen an, um Sie dabei zu
        unterstützen, gesund zu bleiben und Risikofaktoren frühzeitig zu erkennen.
      </p>

      <h3>Was erwartet Sie?</h3>
      <p>
        <strong>Gesundheits-Check-Up</strong>
        <br />
        Wir bieten umfassende Gesundheitsuntersuchungen an, um mögliche Risikofaktoren und Krankheitsanzeichen frühzeitig
        zu identifizieren.
      </p>
      <p>
        <strong>Impfberatung</strong>
        <br />
        Ich informiere Sie über notwendige und empfohlene Impfungen für verschiedene Lebensphasen.
      </p>
      <p>
        <strong>Ernährungs- und Lebensstilberatung</strong>
        <br />
        Obwohl wir diese speziellen Beratungen nicht selbst durchführen, erkenne ich den Bedarf und kann Sie an passende
        Spezialisten für Ernährungsberatung, Bewegung, Stressmanagement oder Raucherentwöhnung weiterleiten.
      </p>
      <p>
        <strong>Früherkennungsuntersuchungen</strong>
        <br />
        Wir bieten eine Reihe von Früherkennungsuntersuchungen an, die von den gesetzlichen Kassen erstattet werden, um
        Krankheiten wie Krebs frühzeitig zu erkennen.
      </p>

      <h3>Wer kann teilnehmen?</h3>
      <p>
        Die Präventionsmedizin ist für Personen jeden Alters wichtig. In unserer Praxis sind alle willkommen, die an der
        Erhaltung und Förderung ihrer Gesundheit interessiert sind.
      </p>

      <h3>Terminvereinbarung</h3>
      <p>
        Um einen Termin für eine präventive Untersuchung oder Beratung zu vereinbaren, kontaktieren Sie uns bitte. Ich
        nehme mir ausreichend Zeit, um all Ihre Fragen zu beantworten und individuelle Gesundheitsstrategien zu entwickeln.
      </p>
    </>
  )
}

function English() {
  return (
    <>
      <h2>Preventive medicine: your health is our goal</h2>

      <h3>What is preventive medicine?</h3>
      <p>
        Preventive medicine is concerned with preventing disease and promoting health and wellbeing. At our practice we
        offer a wide range of preventive measures to help you stay healthy and to identify risk factors at an early stage.
      </p>

      <h3>What can you expect?</h3>
      <p>
        <strong>Health check-up</strong>
        <br />
        We offer comprehensive health examinations to identify possible risk factors and signs of disease at an early
        stage.
      </p>
      <p>
        <strong>Vaccination advice</strong>
        <br />
        I will inform you about necessary and recommended vaccinations for different stages of life.
      </p>
      <p>
        <strong>Nutrition and lifestyle advice</strong>
        <br />
        Although we do not provide this specialised advice ourselves, I can recognise when it is needed and refer you to
        suitable specialists for nutritional advice, exercise, stress management or stopping smoking.
      </p>
      <p>
        <strong>Screening examinations</strong>
        <br />
        We offer a range of screening examinations covered by statutory health insurance to detect diseases such as cancer
        at an early stage.
      </p>

      <h3>Who can attend?</h3>
      <p>
        Preventive medicine is important for people of all ages. Everyone who is interested in maintaining and improving
        their health is welcome at our practice.
      </p>

      <h3>Making an appointment</h3>
      <p>
        To arrange an appointment for a preventive examination or consultation, please contact us. I take plenty of time to
        answer all your questions and to develop individual health strategies.
      </p>
    </>
  )
}
