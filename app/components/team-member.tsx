import type { ReactNode } from "react"

import { cn } from "~/lib/utils"

/** Card for one team member: diamond avatar, name, role and a short text. */
export function TeamMember({
  name,
  role,
  photo,
  photoClassName,
  children,
}: {
  name: string
  role: string
  photo?: string
  /** Extra classes for the photo, e.g. to zoom in on the face. */
  photoClassName?: string
  children: ReactNode
}) {
  return (
    <article className="rounded-3xl bg-tint p-6 sm:p-8">
      <div className="flex items-center gap-5">
        <DiamondAvatar name={name} photo={photo} photoClassName={photoClassName} />
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-ink">{name}</h3>
          <p className="mt-1 text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="mt-6 leading-relaxed text-muted-foreground">{children}</p>
    </article>
  )
}

/**
 * The rounded diamond from the logo as an avatar: a rotated rounded square,
 * with the photo (or the initials) rotated back so it stays upright.
 */
function DiamondAvatar({ name, photo, photoClassName }: { name: string; photo?: string; photoClassName?: string }) {
  const initials = name.split(" ").map((part) => part[0]).join("")
  return (
    <span className="flex size-24 shrink-0 items-center justify-center sm:size-28">
      <span className="relative size-[71%] rotate-45 overflow-hidden rounded-[28%] bg-sun">
        {photo ? (
          <img
            src={photo}
            alt={name}
            loading="lazy"
            className={cn(
              "absolute top-1/2 left-1/2 size-[142%] max-w-none -translate-1/2 -rotate-45 object-cover object-top",
              photoClassName
            )}
          />
        ) : (
          <span className="absolute inset-0 flex -rotate-45 items-center justify-center text-2xl font-semibold text-ink">
            {initials}
          </span>
        )}
      </span>
    </span>
  )
}
