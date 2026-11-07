import type { MetaDescriptor } from "react-router"

import { langFromPath, switchLanguagePath, type Localized } from "~/lib/i18n"
import { SITE_URL, siteName } from "~/lib/practice"

/** Title, description, social preview and language alternates for one page. */
export function pageMeta(
  pathname: string,
  title: Localized,
  description?: Localized
): MetaDescriptor[] {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/` // GitHub Pages serves folders with a trailing slash
  const lang = langFromPath(path)
  const isHome = path === "/" || path === "/en/"
  const fullTitle = isHome ? `${siteName[lang]} | ${title[lang]}` : `${title[lang]} | ${siteName[lang]}`
  const url = SITE_URL + path
  const tags: MetaDescriptor[] = [
    { title: fullTitle },
    { property: "og:title", content: fullTitle },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: `${SITE_URL}/images/og-cover.png` },
    { property: "og:locale", content: lang === "de" ? "de_DE" : "en_GB" },
    { tagName: "link", rel: "canonical", href: url },
    { tagName: "link", rel: "alternate", hrefLang: "de", href: SITE_URL + switchLanguagePath(path, "de") },
    { tagName: "link", rel: "alternate", hrefLang: "en", href: SITE_URL + switchLanguagePath(path, "en") },
  ]
  if (description) {
    tags.push(
      { name: "description", content: description[lang] },
      { property: "og:description", content: description[lang] }
    )
  }
  return tags
}
