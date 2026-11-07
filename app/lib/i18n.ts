import { useLocation } from "react-router"

export type Lang = "de" | "en"

/** Text in both languages. Pages pick the right one with `t[lang]` or `pick(lang, t)`. */
export type Localized<T = string> = Record<Lang, T>

export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de"
}

export function useLang(): Lang {
  return langFromPath(useLocation().pathname)
}

/** "/praxis/" -> "/en/praxis/" for English. Paths always end with a slash, like on GitHub Pages. */
export function localizedPath(lang: Lang, path: string): string {
  return lang === "en" ? `/en${path}` : path
}

/** The same page in the other language. */
export function switchLanguagePath(pathname: string, to: Lang): string {
  const germanPath = pathname.replace(/^\/en(\/|$)/, "/")
  return localizedPath(to, germanPath)
}

export function formatDate(lang: Lang, isoDate: string): string {
  return new Date(isoDate).toLocaleDateString(lang === "de" ? "de-DE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
