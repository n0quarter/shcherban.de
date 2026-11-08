import type { ReactNode } from "react"

/** Big page title with an optional lead text. Used at the top of every page except the homepage. */
export function PageHeader({ title, lead }: { title: ReactNode; lead?: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:pt-16">
      <h1 className="font-heading text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.05] font-semibold tracking-tight text-balance text-ink">
        {title}
      </h1>
      {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>}
    </div>
  )
}
