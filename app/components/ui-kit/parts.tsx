// Layout pieces for the internal /ui-kit page.
import type { ReactNode } from "react"

import { CategoryQuestions, CategoryScope, Comments, PickButton, useCategoryId, useIsChosen, type Question } from "~/components/ui-kit/feedback"
import { categoryStatus } from "~/components/ui-kit/status"
import { cn } from "~/lib/utils"

/** A category of options. `id` is used in the feedback file, e.g. "eyebrow" → variants "eyebrow.A" … */
export function Category({
  id,
  title,
  note,
  questions,
  children,
}: {
  id: string
  title: string
  note: string
  questions?: Question[]
  children: ReactNode
}) {
  return (
    <CategoryScope id={id}>
      <section id={id} data-feedback-target={id} className="scroll-mt-28">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              {title} <span className="ml-1 align-middle font-mono text-xs font-normal text-muted-foreground">#{id}</span>
            </h2>
            <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{note}</p>
            <StatusLine id={id} />
          </div>
          <div className="w-full max-w-xs">
            <Comments target={id} label="Comment on this category" />
          </div>
        </div>
        {questions && (
          <div className="mt-5">
            <CategoryQuestions questions={questions} />
          </div>
        )}
        <div className="mt-6">{children}</div>
      </section>
    </CategoryScope>
  )
}

export function Variants({ wide, children }: { wide?: boolean; children: ReactNode }) {
  return <div className={cn("grid gap-4", wide ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4")}>{children}</div>
}

/** One option. `usedOn` lists where it is live today; without it the option is an idea. */
export function Variant({ letter, name, usedOn, children }: { letter: string; name: string; usedOn?: string; children: ReactNode }) {
  const chosen = useIsChosen(letter)
  const category = useCategoryId()
  return (
    <div
      data-feedback-target={`${category}.${letter}`}
      className={cn("flex flex-col rounded-3xl border", usedOn && "border-primary/40 ring-1 ring-primary/20", chosen && "border-sun ring-2 ring-sun")}
    >
      <div className="flex min-h-36 flex-1 items-center justify-center p-6">{children}</div>
      <VariantFooter letter={letter} name={name} usedOn={usedOn} />
    </div>
  )
}

/** Label, in-use badge, pick button and comments for one option. */
export function VariantFooter({ letter, name, usedOn }: { letter: string; name: string; usedOn?: string }) {
  const category = useCategoryId()
  return (
    <div className="space-y-2 border-t px-4 py-3 text-sm">
      <p className="flex items-center gap-2">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">{letter}</span>
        <span className="text-ink">{name}</span>
      </p>
      <p>{usedOn ? <UsedBadge>{usedOn}</UsedBadge> : <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">Idea</span>}</p>
      <div className="flex flex-wrap items-start gap-2">
        <PickButton letter={letter} />
        <div className="min-w-0 flex-1">
          <Comments target={`${category}.${letter}`} />
        </div>
      </div>
    </div>
  )
}

export function UsedBadge({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">In use: {children}</span>
}

export function Title({ children }: { children: ReactNode }) {
  return <p className="text-3xl leading-tight font-semibold tracking-tight text-ink">{children}</p>
}

const statusStyle = {
  live: { label: "Live today", className: "bg-primary text-primary-foreground" },
  partial: { label: "Partly live", className: "bg-sun text-ink" },
  idea: { label: "Not used yet", className: "bg-muted text-muted-foreground" },
}

/** Explicit statement of how much of this category is on the live site today. */
function StatusLine({ id }: { id: string }) {
  const status = categoryStatus[id]
  if (!status) return null
  const style = statusStyle[status.state]
  return (
    <p className="mt-3 flex max-w-3xl items-start gap-2 text-sm text-ink">
      <span className={cn("shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold", style.className)}>{style.label}</span>
      <span>{status.detail}</span>
    </p>
  )
}
