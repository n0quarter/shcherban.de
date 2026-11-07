import type { Localized } from "~/lib/i18n"

// Change together with public/CNAME when the site moves to shcherban.de.
export const SITE_URL = "https://new.shcherban.de"

export const siteName: Localized = {
  de: "Frauenarztpraxis in Friedrichshain",
  en: "Gynaecological practice in Friedrichshain",
}

export const practice = {
  doctor: "Ganna Shcherban",
  street: "Matthiasstraße 7",
  city: "10249 Berlin",
  phone: "030 421 08 675",
  phoneHref: "tel:+493042108675",
  fax: "030 421 08 677",
  email: "info@shcherban.de",
  bookingUrl:
    "https://www.doctolib.de/frauenarzt/berlin/ganna-shcherban/booking?utm_campaign=website-button&utm_source=ganna-shcherban-website-button&utm_medium=referral&utm_content=withoutpreview-blue-floating-bottom-right&utm_term=ganna-shcherban",
  instagramUrl: "https://instagram.com/gynberlin",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Matthiasstra%C3%9Fe+7%2C+10249+Berlin",
}

export const openingHours: { day: Localized; time: Localized }[] = [
  { day: { de: "Mo", en: "Mon" }, time: { de: "11.00–18.00", en: "11.00–18.00" } },
  { day: { de: "Di", en: "Tue" }, time: { de: "07.30–14.00", en: "07.30–14.00" } },
  { day: { de: "Mi", en: "Wed" }, time: { de: "11.00–18.00", en: "11.00–18.00" } },
  { day: { de: "Do", en: "Thu" }, time: { de: "07.30–14.00", en: "07.30–14.00" } },
  { day: { de: "Fr", en: "Fri" }, time: { de: "nach Vereinbarung", en: "by appointment" } },
]

export const navigation: { path: string; label: Localized }[] = [
  { path: "/", label: { de: "Startseite", en: "Home" } },
  { path: "/praxisteam/", label: { de: "Praxisteam", en: "Team" } },
  { path: "/praxis/", label: { de: "Praxis", en: "Practice" } },
  { path: "/leistungen/", label: { de: "Leistungen", en: "Services" } },
  { path: "/actuales/", label: { de: "Aktuelles", en: "News" } },
  { path: "/kontakt/", label: { de: "Kontakt", en: "Contact" } },
]

export const bookingLabel: Localized = { de: "Termin buchen", en: "Book appointment" }
