import type { ReactNode } from "react"

/** Typography for the legal pages (Impressum, Datenschutz). */
export function LegalArticle({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <article className="diamond-bullets prose max-w-3xl prose-neutral prose-headings:font-heading prose-headings:font-semibold prose-headings:text-ink prose-a:text-primary prose-a:break-words prose-strong:text-ink">
        {children}
      </article>
    </div>
  )
}

/** Shown on the English legal pages. */
export function GermanVersionApplies() {
  return (
    <p className="rounded-2xl bg-tint p-6 text-ink not-prose">
      This is a translation for your convenience. Only the German version is legally binding.
    </p>
  )
}
