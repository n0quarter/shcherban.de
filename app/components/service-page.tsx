import { ArrowLeftIcon } from "lucide-react"
import type { ReactNode } from "react"
import { Link } from "react-router"

import { PageHeader } from "~/components/page-header"
import { localizedPath, useLang } from "~/lib/i18n"
import { cn } from "~/lib/utils"

const text = {
  de: { back: "Alle Leistungen" },
  en: { back: "All services" },
}

/** Layout for every page under /leistungen/: title, long text and an optional photo beside it. */
export function ServicePage({ title, image, children }: { title: string; image?: string; children: ReactNode }) {
  const lang = useLang()

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-8">
        <Link to={localizedPath(lang, "/leistungen/")} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeftIcon className="size-4" /> {text[lang].back}
        </Link>
      </div>
      <PageHeader title={title} />
      <div className={cn("mx-auto max-w-6xl px-4", image && "grid gap-12 md:grid-cols-[1fr_16rem] lg:grid-cols-[1fr_20rem]")}>
        <article className="star-bullets prose max-w-3xl prose-neutral prose-headings:font-heading prose-headings:font-semibold">
          {children}
        </article>
        {image && (
          <img
            src={image}
            alt=""
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover md:sticky md:top-28 md:self-start"
          />
        )}
      </div>
    </>
  )
}
