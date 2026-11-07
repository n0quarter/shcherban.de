import { cn } from "~/lib/utils"

/**
 * Doctolib wordmark for the booking buttons. Self-hosted copy of Doctolib's official button asset:
 * white for blue buttons, navy (ink) for the yellow button.
 */
export function DoctolibLogo({ color = "white", className }: { color?: "white" | "ink"; className?: string }) {
  return <img src={`/doctolib-${color}.png`} alt="Doctolib" className={cn("h-[13px] w-auto", className)} />
}
