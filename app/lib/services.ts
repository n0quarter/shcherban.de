import {
  ActivityIcon,
  BabyIcon,
  ClipboardPlusIcon,
  DropletsIcon,
  Flower2Icon,
  HeartHandshakeIcon,
  HeartPulseIcon,
  MicroscopeIcon,
  PillIcon,
  SyringeIcon,
  type LucideIcon,
} from "lucide-react"

import type { Localized } from "~/lib/i18n"

/** The services shown as cards on the homepage and the /leistungen/ overview. */
export const services: { slug: string; icon: LucideIcon; title: Localized; teaser: Localized }[] = [
  {
    slug: "krebsvorsorge",
    icon: MicroscopeIcon,
    title: { de: "Krebsvorsorge", en: "Cancer screening" },
    teaser: {
      de: "Früherkennung nach den Richtlinien der gesetzlichen Krankenkassen.",
      en: "Early detection in line with statutory health insurance guidelines.",
    },
  },
  {
    slug: "schwangerenbetreuung",
    icon: BabyIcon,
    title: { de: "Schwangerenbetreuung", en: "Pregnancy care" },
    teaser: {
      de: "Begleitung von der Feststellung der Schwangerschaft bis zur Geburt.",
      en: "Care from the confirmation of pregnancy until birth.",
    },
  },
  {
    slug: "verhuetung",
    icon: PillIcon,
    title: { de: "Verhütung", en: "Contraception" },
    teaser: {
      de: "Persönliche Beratung, welche Methode zu Ihnen passt.",
      en: "Personal advice on which method suits you.",
    },
  },
  {
    slug: "maedchen-sprechstunde",
    icon: Flower2Icon,
    title: { de: "Mädchen-Sprechstunde", en: "Consultation for girls" },
    teaser: {
      de: "Ein geschützter Raum für die ersten Fragen junger Frauen.",
      en: "A safe space for the first questions of girls and young women.",
    },
  },
  {
    slug: "kinderwunsch",
    icon: HeartHandshakeIcon,
    title: { de: "Kinderwunsch", en: "Fertility and family planning" },
    teaser: {
      de: "Beratung und erste Diagnostik auf dem Weg zum Wunschkind.",
      en: "Advice and first diagnostics on the way to the child you long for.",
    },
  },
  {
    slug: "hormonsprechstunde",
    icon: ActivityIcon,
    title: { de: "Hormonsprechstunde", en: "Hormone consultation" },
    teaser: {
      de: "Diagnostik und Beratung bei hormonellen Beschwerden.",
      en: "Diagnosis and advice for hormonal complaints.",
    },
  },
  {
    slug: "inkontinenz-senkungbeschwerden",
    icon: DropletsIcon,
    title: { de: "Inkontinenz, Senkungsbeschwerden", en: "Incontinence and prolapse" },
    teaser: {
      de: "Hilfe bei Blasenschwäche und Senkung der Beckenorgane.",
      en: "Help with bladder weakness and pelvic organ prolapse.",
    },
  },
  {
    slug: "praeventionsmedizin",
    icon: HeartPulseIcon,
    title: { de: "Präventionsmedizin", en: "Preventive medicine" },
    teaser: {
      de: "Gezielte Vorsorge, um langfristig gesund zu bleiben.",
      en: "Targeted prevention to stay healthy in the long term.",
    },
  },
  {
    slug: "impfungen",
    icon: SyringeIcon,
    title: { de: "Impfungen", en: "Vaccinations" },
    teaser: {
      de: "Impfberatung und Impfungen nach STIKO-Empfehlung.",
      en: "Vaccination advice and vaccines as recommended by STIKO.",
    },
  },
  {
    slug: "igel-leistungen",
    icon: ClipboardPlusIcon,
    title: { de: "IGeL-Leistungen", en: "Self-pay services (IGeL)" },
    teaser: {
      de: "Zusätzliche Untersuchungen über die Kassenleistung hinaus.",
      en: "Additional examinations beyond statutory insurance cover.",
    },
  },
]
