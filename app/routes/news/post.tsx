import { ArrowLeftIcon } from "lucide-react"
import { Link, useLocation } from "react-router"

import { PageHeader } from "~/components/page-header"
import { findNewsPost } from "~/content/news"
import { formatDate, localizedPath, useLang } from "~/lib/i18n"
import { pageMeta } from "~/lib/seo"
import type { Route } from "./+types/post"

const backLabel = { de: "Alle Neuigkeiten", en: "All news" }

export const meta = ({ location }: Route.MetaArgs) => {
  const post = findNewsPost(location.pathname)
  return post ? pageMeta(location.pathname, post.title, post.excerpt) : []
}

export default function NewsPost() {
  const lang = useLang()
  // Only the paths listed in app/routes.ts reach this page; each needs an entry in app/content/news.tsx.
  const post = findNewsPost(useLocation().pathname)
  if (!post) throw new Response("Not Found", { status: 404 })

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-8">
        <Link to={localizedPath(lang, "/actuales/")} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeftIcon className="size-4" /> {backLabel[lang]}
        </Link>
      </div>
      <PageHeader
        title={post.title[lang]}
        lead={<time dateTime={post.date}>{formatDate(lang, post.date)}</time>}
      />
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          {post.image && <img src={post.image} alt="" className="mb-10 w-full rounded-3xl object-cover" />}
          <article className="prose max-w-none prose-neutral prose-headings:font-heading prose-headings:font-semibold">
            {post.body[lang]}
          </article>
        </div>
      </div>
    </>
  )
}
