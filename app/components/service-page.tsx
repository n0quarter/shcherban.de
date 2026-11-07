import { ArrowLeftIcon } from "lucide-react"
import type { ReactNode } from "react"
import { Link } from "react-router"

import { PageHeader } from "~/components/page-header"
import { buttonVariants } from "~/components/ui/button"
import { localizedPath, useLang } from "~/lib/i18n"
import { bookingLabel, practice } from "~/lib/practice"

const text = {
  de: { back: "Alle Leistungen", question: "Fragen zu dieser Leistung? Wir beraten Sie gern." },
  en: { back: "All services", question: "Questions about this service? We are happy to advise you." },
}

/** Layout for every page under /leistungen/: title, long text, optional photo, booking box. */
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
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_20rem]">
        <article className="prose max-w-none prose-neutral prose-headings:font-heading prose-headings:font-semibold">
          {children}
        </article>
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {image && <img src={image} alt="" className="aspect-[4/5] w-full rounded-3xl object-cover" loading="lazy" />}
          <div className="rounded-3xl bg-muted p-6">
            <p className="mb-4 text-sm">{text[lang].question}</p>
            <a href={practice.bookingUrl} target="_blank" rel="noopener" className={buttonVariants({ className: "w-full" })}>
              {bookingLabel[lang]}
            </a>
          </div>
        </aside>
      </div>
    </>
  )
}
