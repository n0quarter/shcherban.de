import { PageHeader } from "~/components/page-header"
import { TeamMember } from "~/components/team-member"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"
import { useLang, type Lang } from "~/lib/i18n"
import { practice } from "~/lib/practice"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/praxisteam"

const title = { de: "Praxisteam", en: "Our team" }
const description = {
  de: "Ganna Shcherban, Fachärztin für Gynäkologie und Geburtshilfe, und ihr Team: Werdegang, Lebenslauf und die medizinischen Fachangestellten der Praxis in Friedrichshain.",
  en: "Ganna Shcherban, specialist in gynaecology and obstetrics, and her team: background, CV and the medical assistants of the practice in Friedrichshain.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

const text = {
  de: {
    doctorRole: "Fachärztin für Gynäkologie und Geburtshilfe",
    readMore: "Mehr lesen",
    cv: "Lebenslauf",
    assistantsHeading: "Medizinische Fachangestellte",
    assistantRole: "Medizinische Fachangestellte",
    sabine:
      "Sabine ist eine erfahrene MFA, die umfangreiche Kenntnisse im gynäkologischen Bereich mitbringt. Mit ihrer ruhigen und empathischen Art kümmert sie sich aufmerksam um die Anliegen unserer Patientinnen und sorgt für eine vertrauensvolle Atmosphäre. Sabine unterstützt unser Team tatkräftig und steht unseren Patientinnen bei Fragen und Bedürfnissen jederzeit zur Seite.",
    jessica:
      "Jessica ist die jüngste Ergänzung unserer Praxis und bringt frischen Wind sowie moderne Ansätze zur Digitalisierung mit. Ihre freundliche und aufgeschlossene Persönlichkeit macht sie zur idealen ersten Anlaufstelle für unsere Patienten. Jessica unterstützt mich in administrativen Aufgaben und bei der Patientenversorgung.",
  },
  en: {
    doctorRole: "Specialist in gynaecology and obstetrics",
    readMore: "Read more",
    cv: "Curriculum vitae",
    assistantsHeading: "Medical assistants",
    assistantRole: "Medical assistant",
    sabine:
      "Sabine is an experienced medical assistant with extensive knowledge of gynaecology. With her calm and empathetic manner, she attentively takes care of our patients' concerns and creates an atmosphere of trust. Sabine gives our team active support and is always there for our patients with their questions and needs.",
    jessica:
      "Jessica is the newest addition to our practice and brings a breath of fresh air as well as modern approaches to digitalisation. Her friendly and open personality makes her the ideal first point of contact for our patients. Jessica supports me with administrative tasks and patient care.",
  },
}

export default function Praxisteam() {
  const lang = useLang()
  const t = text[lang]

  return (
    <>
      <PageHeader title={title[lang]} />

      {/* Ganna Shcherban */}
      <section className="mx-auto grid max-w-6xl items-start gap-12 px-4 pt-4 md:grid-cols-[0.8fr_1.2fr] md:gap-10 lg:gap-14">
        <img
          src="/images/praxis-10.jpg"
          alt={practice.doctor}
          className="mx-auto aspect-[3/4] w-full max-w-sm rounded-[2rem] object-cover md:sticky md:top-28 md:max-w-none"
        />
        <div className="min-w-0">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl lg:text-[2.625rem]">{practice.doctor}</h2>
          <p className="mt-2 text-lg text-primary">{t.doctorRole}</p>
          <div className="prose prose-lg mt-8 max-w-none prose-neutral prose-strong:text-ink">
            {lang === "de" ? <IntroGerman /> : <IntroEnglish />}
          </div>

          <Accordion multiple className="mt-10">
            <AccordionItem>
              <AccordionTrigger className="px-6 py-5 text-lg font-semibold text-ink hover:no-underline">{t.readMore}</AccordionTrigger>
              <AccordionContent hiddenUntilFound className="prose prose-lg max-w-none px-2 pb-6 prose-neutral">
                {lang === "de" ? <MoreGerman /> : <MoreEnglish />}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger className="px-6 py-5 text-lg font-semibold text-ink hover:no-underline">{t.cv}</AccordionTrigger>
              <AccordionContent hiddenUntilFound className="px-2 pb-6">
                <CurriculumVitae lang={lang} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Medical assistants */}
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:pt-32">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl lg:text-[2.625rem]">{t.assistantsHeading}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <TeamMember name="Jessica Richter" role={t.assistantRole}>
            {t.jessica}
          </TeamMember>
          <TeamMember
            name="Sabine Lüdecke"
            role={t.assistantRole}
            photo="/images/sabine-luedecke.jpg"
            photoClassName="origin-[50%_40%] scale-[1.25]"
          >
            {t.sabine}
          </TeamMember>
        </div>
      </section>
    </>
  )
}

function IntroGerman() {
  return (
    <>
      <p>
        Ich bin <strong>Ganna Shcherban</strong>, Fachärztin für Gynäkologie und Geburtshilfe. Geboren wurde ich in der
        Ukraine und aufgewachsen bin ich in Kasachstan.
      </p>
      <p>
        Nach meinem erfolgreichen Abschluss des <strong>Medizinstudiums</strong> 2006 an der Universität von Kyiv arbeitete
        ich bis 2009 als gynäkologische Assistenzärztin in Kryvyi Rih. Anschließend bestand ich die Facharztprüfung für
        Gynäkologie und Geburtshilfe mit Auszeichnung.
      </p>
      <p>In den folgenden vier Jahren war ich als Gynäkologin in Kyiv und Umgebung tätig.</p>
      <p>
        Im Jahr 2013 zog ich mit meinem Mann und unseren beiden Kindern nach Berlin, da mein Mann ein attraktives
        Jobangebot als Programmierer in einem Start-Up angenommen hatte.
      </p>
      <p>
        Mit Geduld und Beharrlichkeit erlernte ich zunächst die deutsche Sprache und erhielt dann die deutsche{" "}
        <strong>Approbation</strong> als Ärztin.
      </p>
      <p>
        In verschiedenen Kliniken und Praxen in Berlin und Brandenburg machte ich mich mit den Besonderheiten des hiesigen
        Gesundheitssystems vertraut und bestand im Juli 2022 die deutsche <strong>Facharztprüfung</strong> für Gynäkologie
        und Geburtshilfe.
      </p>
    </>
  )
}

function IntroEnglish() {
  return (
    <>
      <p>
        I am <strong>Ganna Shcherban</strong>, a specialist in gynaecology and obstetrics. I was born in Ukraine and grew
        up in Kazakhstan.
      </p>
      <p>
        After successfully completing my <strong>medical degree</strong> at the university in Kyiv in 2006, I worked as a
        junior doctor in gynaecology in Kryvyi Rih until 2009. I then passed the specialist examination in gynaecology and
        obstetrics with distinction.
      </p>
      <p>For the following four years I worked as a gynaecologist in and around Kyiv.</p>
      <p>
        In 2013 I moved to Berlin with my husband and our two children, as my husband had accepted an attractive job offer
        as a programmer at a start-up.
      </p>
      <p>
        With patience and perseverance, I first learned German and then obtained my German <strong>licence to practise
        medicine</strong> (Approbation).
      </p>
      <p>
        Working in various hospitals and practices in Berlin and Brandenburg, I became familiar with the particularities of
        the German healthcare system, and in July 2022 I passed the German <strong>specialist examination</strong> in
        gynaecology and obstetrics.
      </p>
    </>
  )
}

function MoreGerman() {
  return (
    <>
      <p>Nachdem ich all meine Erfahrungen gesammelt habe, entschied ich mich, meine eigene Praxis zu eröffnen.</p>
      <p>
        Nach langer Suche fand ich die ideale Option und übernehme ab Oktober 2023 eine moderne Praxis in einer wunderbaren
        Lage von der sehr erfahrenen Frau Dr. med. Heidemarie Schütze.
      </p>
      <p>
        Ich werde die Traditionen einer qualifizierten und qualitativ hochwertigen Betreuung von Patientinnen in unserem
        Kiez fortsetzen.
      </p>
      <p>
        In meiner Freizeit bin ich den Bergen sehr verbunden. Ob Bergsteigen, Fels- oder Eisklettern, Gletschertouren oder
        Skifahren – mein Mann und ich begeistern uns in jeder Form für die Bergwelt. In Berlin wenden wir uns mangels Bergen
        dem Kajakfahren, Fahrradfahren und dem Halbmarathon zu.
      </p>
      <p>
        Abends koche ich das Essen für die gesamte Familie, zu der zwei Teenager, mein Mann und ein Jack-Russell-Terrier
        gehören.
      </p>
      <p>Ich kann aber auch Decken stricken und nach Zahlen malen.</p>
      <p>Manchmal träume ich auch davon, Bergärztin zu werden, aber das ist eher ein Wunschtraum, kein Plan.</p>
    </>
  )
}

function MoreEnglish() {
  return (
    <>
      <p>Having gathered all this experience, I decided to open my own practice.</p>
      <p>
        After a long search I found the ideal option, and from October 2023 I am taking over a modern practice in a
        wonderful location from the very experienced Dr. med. Heidemarie Schütze.
      </p>
      <p>I will continue the tradition of qualified, high-quality care for patients in our neighbourhood.</p>
      <p>
        In my free time I feel very close to the mountains. Whether mountaineering, rock or ice climbing, glacier tours or
        skiing – my husband and I love the mountains in every form. In Berlin, for lack of mountains, we turn to kayaking,
        cycling and the half marathon.
      </p>
      <p>
        In the evenings I cook for the whole family, which includes two teenagers, my husband and a Jack Russell terrier.
      </p>
      <p>But I can also knit blankets and paint by numbers.</p>
      <p>Sometimes I also dream of becoming a mountain doctor, but that is more of a pipe dream than a plan.</p>
    </>
  )
}

type CvSection = { heading: string; entries: [year: string, text: string][] }

const cv: Record<Lang, CvSection[]> = {
  de: [
    {
      heading: "Studium",
      entries: [
        ["2000-2006", "Nationale O.-O.-Bogomolec-Medizin Universität, Kyiv, Ukraine – Studium der Humanmedizin"],
        ["2006-2009", "Staatliche Medizinakademie Dnipro, Ukraine – Facharzt für Frauenheilkunde und Geburtshilfe"],
        ["2011", "Nationale P.-L.-Schupik-Medizinakademie für postgraduierte Ausbildung, Kyiv, Ukraine – Facharzt für Kindergynäkologie"],
        ["2011", "Ukrainische Militärmedizinische Akademie, Kyiv, Ukraine – Ultraschalldiagnostik"],
        ["2013", "Ukrainische Militärmedizinische Akademie, Kyiv, Ukraine – Facharzt für Frauenheilkunde und Geburtshilfe (1. Qualifikationskategorie)"],
      ],
    },
    {
      heading: "Anerkennungen",
      entries: [
        ["2015", "Deutsche Approbation als Ärztin (Berlin)"],
        ["2022", "Fachärztin für Frauenheilkunde und Geburtshilfe (Anerkennungsprüfung, Berlin)"],
      ],
    },
    {
      heading: "Berufserfahrung",
      entries: [
        ["2022-2023", "Fachärztin für Frauenheilkunde und Geburtshilfe bei Frauenarztpraxis Lichtenrade, Berlin"],
        ["2021-2022", "Assistenzärztin für Frauenheilkunde und Geburtshilfe bei Frauenarztpraxis Lichtenrade, Berlin"],
        ["2020", "Assistenzärztin für Frauenheilkunde und Geburtshilfe bei Johanniter Frauenklinik Stendal, Brustzentrum Altmark; Klinik Rathenow; Honorarärztin bei Berliner Aids-Hilfe e.V., Berlin"],
        ["2018-2019", "Assistenzärztin für Frauenheilkunde und Geburtshilfe bei Praxis „Frauenärztinnen am Bundesplatz“, Berlin"],
        ["2016-2017", "Assistenzärztin für Frauenheilkunde und Geburtshilfe bei Immanuel Klinikum Bernau, Bernau"],
        ["2015-2016", "Assistenzärztin für Frauenheilkunde und Geburtshilfe bei Krankenhaus Märkisch-Oderland, Strausberg"],
        ["2011-2013", "Facharzt für Frauenheilkunde und Geburtshilfe bei Kinderwunschzentrum „Zdorovya rodyny“, Kyiv, Ukraine"],
        ["2012", "Facharzt für Frauenheilkunde und Geburtshilfe bei Frauenkonsultation, Poliklinik 3, Kyiv, Ukraine"],
        ["2011", "Facharzt für Kindergynäkologie bei Kinderklinik N 1 Klinisches Kinderkrankenhaus N4, Kyiv, Ukraine"],
        ["2009-2011", "Facharzt für Frauenheilkunde und Geburtshilfe bei Kreiskrankenhaus Usin, Usin, Ukraine"],
        ["2006-2009", "Arzt-Intern für Frauenheilkunde und Geburtshilfe bei Klinisches Entbindungsheim No1, Staatliches Medizinisch Genetisches Zentrum (Level I), Krywyi Rih, Ukraine"],
      ],
    },
    {
      heading: "Fortbildung und Qualifikationen",
      entries: [
        ["2010", "Kolposkopie und Entzündungserkrankungen in der Gynäkologie"],
        ["2010", "Reproduktive Gynäkologie"],
        ["2012", "Grundlegende Aspekte von künstlichen (assistierten) Reproduktionstechnologien"],
        ["2021", "Psychosomatische Grundversorgung, Kreta"],
        ["2023", "Fachgebundene genetische Beratung, Berlin"],
        ["2023", "Erweiterter Basisultraschall in der fetalen Morphologie, II Trimenon, Zertifizierung durch Online-Prüfung, KV Berlin"],
      ],
    },
  ],
  en: [
    {
      heading: "Education",
      entries: [
        ["2000-2006", "Bogomolets National Medical University, Kyiv, Ukraine – Human medicine"],
        ["2006-2009", "Dnipro State Medical Academy, Ukraine – Specialist in obstetrics and gynaecology"],
        ["2011", "Shupyk National Medical Academy of Postgraduate Education, Kyiv, Ukraine – Specialist in paediatric gynaecology"],
        ["2011", "Ukrainian Military Medical Academy, Kyiv, Ukraine – Ultrasound diagnostics"],
        ["2013", "Ukrainian Military Medical Academy, Kyiv, Ukraine – Specialist in obstetrics and gynaecology (1st qualification category)"],
      ],
    },
    {
      heading: "Recognition",
      entries: [
        ["2015", "German licence to practise medicine (Approbation, Berlin)"],
        ["2022", "Specialist in obstetrics and gynaecology (recognition examination, Berlin)"],
      ],
    },
    {
      heading: "Professional experience",
      entries: [
        ["2022-2023", "Specialist in obstetrics and gynaecology at Frauenarztpraxis Lichtenrade, Berlin"],
        ["2021-2022", "Junior doctor in obstetrics and gynaecology at Frauenarztpraxis Lichtenrade, Berlin"],
        ["2020", "Junior doctor in obstetrics and gynaecology at Johanniter Frauenklinik Stendal, Brustzentrum Altmark; Klinik Rathenow; freelance doctor at Berliner Aids-Hilfe e.V., Berlin"],
        ["2018-2019", "Junior doctor in obstetrics and gynaecology at the practice “Frauenärztinnen am Bundesplatz”, Berlin"],
        ["2016-2017", "Junior doctor in obstetrics and gynaecology at Immanuel Klinikum Bernau, Bernau"],
        ["2015-2016", "Junior doctor in obstetrics and gynaecology at Krankenhaus Märkisch-Oderland, Strausberg"],
        ["2011-2013", "Specialist in obstetrics and gynaecology at the fertility centre “Zdorovya rodyny”, Kyiv, Ukraine"],
        ["2012", "Specialist in obstetrics and gynaecology at the women's outpatient clinic, Polyclinic No. 3, Kyiv, Ukraine"],
        ["2011", "Specialist in paediatric gynaecology at Children's Clinic No. 1, Clinical Children's Hospital No. 4, Kyiv, Ukraine"],
        ["2009-2011", "Specialist in obstetrics and gynaecology at Usin District Hospital, Usin, Ukraine"],
        ["2006-2009", "Intern in obstetrics and gynaecology at Clinical Maternity Hospital No. 1, State Medical Genetic Centre (Level I), Kryvyi Rih, Ukraine"],
      ],
    },
    {
      heading: "Further training and qualifications",
      entries: [
        ["2010", "Colposcopy and inflammatory diseases in gynaecology"],
        ["2010", "Reproductive gynaecology"],
        ["2012", "Fundamental aspects of artificial (assisted) reproductive technologies"],
        ["2021", "Basic psychosomatic care, Crete"],
        ["2023", "Specialty-specific genetic counselling, Berlin"],
        ["2023", "Extended basic ultrasound in fetal morphology, 2nd trimester, certified by online examination, KV Berlin"],
      ],
    },
  ],
}

function CurriculumVitae({ lang }: { lang: Lang }) {
  return (
    <div className="space-y-8">
      {cv[lang].map((section) => (
        <div key={section.heading}>
          <h3 className="flex items-center gap-2.5 border-b-2 border-ink pb-2 text-sm font-semibold tracking-wide text-ink uppercase">
            <span aria-hidden className="block size-2.5 rotate-45 rounded-[28%] bg-sun" />
            {section.heading}
          </h3>
          <ul className="divide-y text-base">
            {section.entries.map(([year, entry]) => (
              <li key={year + entry} className="grid gap-1 py-3 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
                <span className="font-semibold text-ink tabular-nums">{year}</span>
                <span className="text-muted-foreground">{entry}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
