import { ArrowUpRightIcon } from "lucide-react"
import { Link } from "react-router"

import { PageHeader } from "~/components/page-header"
import { newsPosts } from "~/content/news"
import { formatDate, localizedPath, useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/index"

const title = { de: "Aktuelles", en: "News" }
const description = {
  de: "Neuigkeiten aus der Frauenarztpraxis Ganna Shcherban in Berlin-Friedrichshain: Öffnungszeiten, Urlaub und Vertretung, unser Team.",
  en: "News from the gynaecological practice of Ganna Shcherban in Berlin-Friedrichshain: opening hours, holidays and cover, our team.",
}
const lead = {
  de: "Hinweise zu Öffnungszeiten, Urlaub und Neuigkeiten aus unserer Praxis.",
  en: "Notices about opening hours, holidays and news from our practice.",
}

export const meta = ({ location }: Route.MetaArgs) => pageMeta(location.pathname, title, description)

export default function News() {
  const lang = useLang()

  return (
    <>
      <PageHeader title={title[lang]} lead={lead[lang]} />
      <div className="mx-auto max-w-6xl px-4">
        <ul className="border-t">
          {newsPosts.map((post) => (
            <li key={post.path} className="border-b">
              <Link
                to={localizedPath(lang, `/${post.path}/`)}
                className="group grid gap-2 py-8 md:grid-cols-[13rem_1fr_auto] md:gap-8"
              >
                <time dateTime={post.date} className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground md:self-start md:pt-2">
                  <span aria-hidden className="block size-2.5 rotate-45 rounded-[28%] bg-sun" />
                  {formatDate(lang, post.date)}
                </time>
                <span className="min-w-0">
                  <span className="block text-xl font-semibold tracking-tight text-balance text-ink transition-colors group-hover:text-primary sm:text-2xl">
                    {post.title[lang]}
                  </span>
                  <span className="mt-2 block max-w-2xl text-muted-foreground">{post.excerpt[lang]}</span>
                </span>
                <ArrowUpRightIcon className="hidden size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary md:mt-1.5 md:block" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
