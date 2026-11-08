import { useId, type CSSProperties, type ReactNode } from "react"

import { cn } from "~/lib/utils"

// Shapes taken from public/logo.svg, so every ornament on the site matches the logo exactly.

/** The rounded diamond of the logo. Colour via text-* (fill = currentColor). */
export function LogoDiamond({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 306.5 308.5" aria-hidden="true" className={cn("shrink-0", className)}>
      <path fill="currentColor" d={DIAMOND_PATH} />
    </svg>
  )
}

/** The four-pointed star of the logo. Colour via text-* (fill = currentColor). */
export function Sparkle({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" className={cn("shrink-0", className)} style={style}>
      <path fill="currentColor" d="M40 0L50.8 29.2L80 40L50.8 50.8L40 80L29.2 50.8L0 40L29.2 29.2Z" />
    </svg>
  )
}

/** Three stars arranged like in the logo; a small decorative cluster. */
export function SparkleCluster({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("relative inline-block size-12 text-sun", className)}>
      <Sparkle className="absolute top-0 left-[18%] w-[34%]" />
      <Sparkle className="absolute right-0 bottom-[22%] w-[24%]" />
      <Sparkle className="absolute bottom-0 left-0 w-[20%]" />
    </span>
  )
}

/** Simplified logo mark: blue diamond with one yellow star (not the real mark – that is /logo-mark.svg). */
export function SimpleLogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex shrink-0 items-center justify-center", className)}>
      <LogoDiamond className="absolute inset-0 size-full text-primary" />
      <Sparkle className="relative w-[36%] text-sun" />
    </span>
  )
}

/** Lightweight CSS diamond (rotated rounded square) for small markers and bullets. */
export function Diamond({ className }: { className?: string }) {
  return <span aria-hidden className={cn("block shrink-0 rotate-45 rounded-[28%]", className)} />
}

/** Crops its content (e.g. a photo) to the logo diamond. */
export function DiamondFrame({ className, children }: { className?: string; children: ReactNode }) {
  const id = useId().replace(/:/g, "")
  return (
    <div className={cn("relative", className)} style={{ clipPath: `url(#${id})` }}>
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <clipPath id={id} clipPathUnits="objectBoundingBox">
          <path transform="scale(0.003263 0.003242)" d={DIAMOND_PATH} />
        </clipPath>
      </svg>
      {children}
    </div>
  )
}

const DIAMOND_PATH =
  "M20.5 203.7C-6.8 176.4-6.8 132.1 20.5 104.7L103.7 21.5C131.1-5.8 175.4-5.8 202.7 21.5L286 104.7C313.3 132.1 313.3 176.4 286 203.7L202.7 287C175.4 314.3 131.1 314.3 103.7 287Z"
