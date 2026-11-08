import { Sparkle } from "~/components/brand"
import { cn } from "~/lib/utils"

/** Thin line with the logo star in the middle; separates the big sections of a page. */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("mx-auto flex max-w-6xl items-center gap-4 px-4 pt-12 sm:pt-16", className)}>
      <span className="h-px flex-1 bg-border" />
      <Sparkle className="size-5 text-sun" />
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}
