import type { ReactNode } from "react"

/** Big page title with an optional lead text. Used at the top of every page. */
export function PageHeader({ title, lead }: { title: ReactNode; lead?: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:pt-16">
      <h1 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h1>
      {lead && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{lead}</p>}
    </div>
  )
}
