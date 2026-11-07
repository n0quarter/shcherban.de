import type { ReactNode } from "react"

import type { Localized } from "~/lib/i18n"

export type NewsPost = {
  /** Old WordPress URL without slashes, e.g. "2025/05/05/urlaub-vertretung". Must match `newsPosts` in app/routes.ts. */
  path: string
  date: string
  title: Localized
  /** One or two sentences for the overview page. */
  excerpt: Localized
  image?: string
  body: Localized<ReactNode>
}

/** "/en/2025/05/05/urlaub-vertretung/" -> the post with path "2025/05/05/urlaub-vertretung". */
export function findNewsPost(pathname: string): NewsPost | undefined {
  const path = pathname.replace(/^\/en(\/|$)/, "/").replace(/^\/+|\/+$/g, "")
  return newsPosts.find((post) => post.path === path)
}

// Newest first.
export const newsPosts: NewsPost[] = [
  {
    path: "2025/05/05/urlaub-vertretung",
    date: "2025-05-05",
    title: { de: "Urlaub & Vertretung", en: "Holiday & cover" },
    excerpt: {
      de: "Vom 05. bis 08. Mai 2025 bin ich im Urlaub. In dringenden medizinischen Fällen übernimmt Frau Dr. Straubinger die Vertretung.",
      en: "I will be on holiday from 5 to 8 May 2025. In urgent medical cases, Dr Straubinger will be covering for me.",
    },
    body: {
      de: (
        <>
          <p>Liebe Patientinnen,</p>
          <p>
            vom <strong>05. bis 08. Mai 2025</strong> bin ich im Urlaub.
            <br />
            Die Praxis ist am <strong>05. und 06. Mai</strong> für{" "}
            <strong>Rezepte, Überweisungen und Terminvereinbarungen</strong> eingeschränkt geöffnet.
            <br />
            In dringenden medizinischen Fällen übernimmt <strong>Frau Dr. Straubinger</strong> die Vertretung.
          </p>
          <p>
            Vom <strong>12. bis 22. Mai</strong> stehen wir Ihnen wie gewohnt zur Verfügung –
            <br />
            jedoch <strong>nur zu zweit mit Sabine</strong>, da <strong>Jessica in dieser Zeit im Urlaub</strong> ist.
            <br />
            Bitte planen Sie in dieser Phase <strong>etwas längere Wartezeiten</strong> ein.
          </p>
          <p>
            Vielen Dank für Ihr Verständnis!
            <br />
            <strong>Ihre Ganna Shcherban</strong>
          </p>
        </>
      ),
      en: (
        <>
          <p>Dear patients,</p>
          <p>
            I will be on holiday from <strong>5 to 8 May 2025</strong>.
            <br />
            On <strong>5 and 6 May</strong> the practice will be open on a limited basis for{" "}
            <strong>prescriptions, referrals and appointment bookings</strong>.
            <br />
            In urgent medical cases, <strong>Dr Straubinger</strong> will be covering for me.
          </p>
          <p>
            From <strong>12 to 22 May</strong> we will be available as usual –
            <br />
            however, <strong>there will only be two of us, with Sabine</strong>, as <strong>Jessica will be on holiday during this time</strong>.
            <br />
            Please allow for <strong>somewhat longer waiting times</strong> during this period.
          </p>
          <p>
            Thank you for your understanding!
            <br />
            <strong>Yours, Ganna Shcherban</strong>
          </p>
        </>
      ),
    },
  },
  {
    path: "2024/12/22/oeffnungszeiten-ueber-die-feiertage",
    date: "2024-12-22",
    title: { de: "Öffnungszeiten über die Feiertage", en: "Opening hours over the holidays" },
    excerpt: {
      de: "Unsere Praxis bleibt für Sie geöffnet: Montag, den 23. Dezember 2024. Ab dem 06. Januar 2025 sind wir wieder wie gewohnt für Sie da.",
      en: "Our practice will be open for you on Monday, 23 December 2024. From 6 January 2025 we will be back for you as usual.",
    },
    body: {
      de: (
        <>
          <p>Unsere Praxis bleibt für Sie geöffnet:</p>
          <p>
            <strong>Montag, den 23. Dezember 2024.</strong>
          </p>
          <p>
            Ab dem <strong>06. Januar 2025</strong> sind wir wieder wie gewohnt für Sie da.
          </p>
          <p>Wir wünschen Ihnen frohe Weihnachten und einen guten Rutsch ins neue Jahr!</p>
          <p>
            Bei dringenden Fällen oder Notfällen rufen Sie bitte den ärztlichen <strong>Bereitschaftsdienst unter 116117</strong> an.
          </p>
          <p>Ihre Frauenarztpraxis Ganna Shcherban</p>
        </>
      ),
      en: (
        <>
          <p>Our practice will be open for you on:</p>
          <p>
            <strong>Monday, 23 December 2024.</strong>
          </p>
          <p>
            From <strong>6 January 2025</strong> we will be back for you as usual.
          </p>
          <p>We wish you a merry Christmas and a happy New Year!</p>
          <p>
            In urgent cases or emergencies, please call the <strong>medical on-call service on 116117</strong>.
          </p>
          <p>Your gynaecological practice Ganna Shcherban</p>
        </>
      ),
    },
  },
  {
    path: "2024/09/08/neu-im-team-sabine-luedecke",
    date: "2024-09-08",
    title: { de: "Neu im Team: Sabine Lüdecke", en: "New to the team: Sabine Lüdecke" },
    excerpt: {
      de: "Seit September unterstützt Sabine Lüdecke unser Team als medizinische Fachangestellte.",
      en: "Since September, Sabine Lüdecke has been supporting our team as a medical assistant.",
    },
    body: {
      de: (
        <>
          <p>Seit September unterstützt Sabine Lüdecke unser Team als medizinische Fachangestellte.</p>
          <p>Wir freuen uns sehr, sie bei uns zu haben!</p>
        </>
      ),
      en: (
        <>
          <p>Since September, Sabine Lüdecke has been supporting our team as a medical assistant.</p>
          <p>We are very happy to have her with us!</p>
        </>
      ),
    },
  },
  {
    // The old post had no body: the whole announcement was its title. Split into title + body here.
    path: "2023/09/06/urlaub-sonderoeffnugszeiten-vacation-special-opening-hours",
    date: "2023-09-06",
    title: {
      de: "Wir freuen uns, Ihnen mitzuteilen, dass Ganna Shcherban ab dem 2. Oktober 2023 die Leitung der Praxis übernimmt.",
      en: "We are pleased to announce that Ganna Shcherban will take over the management of the practice from 2 October 2023.",
    },
    excerpt: {
      de: "Wir heißen Sie herzlich willkommen und freuen uns auf Ihren Besuch!",
      en: "We warmly welcome you and look forward to your visit!",
    },
    body: {
      de: <p>Wir heißen Sie herzlich willkommen und freuen uns auf Ihren Besuch!</p>,
      en: <p>We warmly welcome you and look forward to your visit!</p>,
    },
  },
  {
    path: "2023/08/06/geaenderte-oeffnungszeiten-28-8-bis-1-9-changed-opening-hours-28-8-1-9",
    date: "2023-08-06",
    title: { de: "Geänderte Öffnungszeiten 28.8. bis 1.9.", en: "Changed opening hours 28.8.–1.9." },
    excerpt: {
      de: "Die Praxis bleibt am Montag, den 28.8., Dienstagnachmittag den 29.8. und Freitag den 1.9. geschlossen.",
      en: "The practice will be closed on Monday 28.8, Tuesday afternoon 29.8 and Friday 1.9.",
    },
    image: "/images/news-zusatzleistungen.jpg",
    body: {
      de: (
        <>
          <p>Liebe Patient:innen,</p>
          <p>die Praxis bleibt am Montag, den 28.8., Dienstagnachmittag den 29.8. und Freitag den 1.9. geschlossen.</p>
          <p>Vielen Dank für Ihr Verständnis</p>
          <p>Ihr Praxisteam</p>
        </>
      ),
      en: (
        <>
          <p>Dear patients,</p>
          <p>the practice will be closed on Monday 28.8, Tuesday afternoon 29.8 and Friday 1.9.</p>
          <p>Thank you for your understanding</p>
          <p>Your practice team</p>
        </>
      ),
    },
  },
  {
    path: "2023/07/06/praxis-am-19-5-geschlossen-office-closed-19-5",
    date: "2023-07-06",
    title: { de: "Praxis am 19.5. geschlossen", en: "Office closed 19.5." },
    excerpt: {
      de: "Am Freitag, den 19.5. bleibt die Praxis geschlossen.",
      en: "On Friday, 19.5. the practice will be closed.",
    },
    image: "/images/news-praxis-geschlossen.jpg",
    body: {
      de: (
        <p>
          Liebe Patient:innen,
          <br />
          am Freitag, den <strong>19.5. bleibt die Praxis geschlossen.</strong>
          <br />
          Am Feiertag oder dem Wochenende wenden Sie sich bitte an den kassenärztlichen Notdienst, oder eine der Berliner
          Kliniken.
          <br />
          Vielen Dank für Ihr Verständnis.
        </p>
      ),
      en: (
        <p>
          Dear patients,
          <br />
          On Friday, <strong>19.5. the practice will be closed</strong>.
          <br />
          On holidays or weekends, please contact the emergency medical service or one of the clinics in Berlin.
          <br />
          Thank you for your understanding.
        </p>
      ),
    },
  },
]
