import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useState } from "react"

import { Button } from "~/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "~/components/ui/dialog"
import { useLang } from "~/lib/i18n"
import { cn } from "~/lib/utils"

export type Photo = { src: string; caption: string }

const text = {
  de: { open: "Foto vergrößern", previous: "Vorheriges Foto", next: "Nächstes Foto" },
  en: { open: "Enlarge photo", previous: "Previous photo", next: "Next photo" },
}

/** Photo grid: first photo large, the rest small. Each photo opens enlarged in a dialog. */
export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const t = text[useLang()]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`${t.open}: ${photo.caption}`}
            className={cn(
              "group relative cursor-zoom-in overflow-hidden rounded-2xl text-left outline-none focus-visible:ring-3 focus-visible:ring-ring",
              index === 0 && "col-span-2 md:row-span-2"
            )}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              loading="lazy"
              className="h-full min-h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-xl bg-background/95 px-3 py-1 text-xs font-medium text-ink sm:text-sm">
              {photo.caption}
            </span>
          </button>
        ))}
      </div>

      <PhotoLightbox photos={photos} openIndex={openIndex} onOpenIndexChange={setOpenIndex} />
    </>
  )
}

/** Enlarged photo in a dialog, with previous/next arrows (also arrow keys). `openIndex === null` means closed. */
export function PhotoLightbox({
  photos,
  openIndex,
  onOpenIndexChange,
}: {
  photos: Photo[]
  openIndex: number | null
  onOpenIndexChange: (index: number | null) => void
}) {
  const t = text[useLang()]
  const current = openIndex === null ? null : photos[openIndex]
  const step = (delta: number) => openIndex !== null && onOpenIndexChange((openIndex + delta + photos.length) % photos.length)

  return (
    <Dialog open={current !== null} onOpenChange={(open) => !open && onOpenIndexChange(null)}>
      <DialogContent
        className="gap-3 bg-background p-3 sm:max-w-5xl"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") step(-1)
          if (event.key === "ArrowRight") step(1)
        }}
      >
        {current && openIndex !== null && (
          <>
            {/* The wrapper is as wide as the photo, so the arrows sit on the photo's edges. */}
            <div className="relative mx-auto w-fit">
              <img src={current.src} alt={current.caption} className="max-h-[75vh] w-auto max-w-full rounded-3xl" />
              <ArrowButton side="left" label={t.previous} onClick={() => step(-1)} />
              <ArrowButton side="right" label={t.next} onClick={() => step(1)} />
            </div>
            <div className="flex items-baseline justify-between gap-3 px-2 pb-1">
              <DialogTitle className="text-base font-medium">{current.caption}</DialogTitle>
              <span className="text-sm text-muted-foreground tabular-nums">
                {openIndex + 1} / {photos.length}
              </span>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

function ArrowButton({ side, label, onClick }: { side: "left" | "right"; label: string; onClick: () => void }) {
  const Icon = side === "left" ? ChevronLeftIcon : ChevronRightIcon
  return (
    <Button
      variant="outline"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "absolute top-1/2 size-12 -translate-y-1/2 rounded-full border-0 bg-white/90 text-ink shadow-lg backdrop-blur hover:bg-white sm:size-14 [&_svg:not([class*='size-'])]:size-6",
        side === "left" ? "left-3 sm:left-4" : "right-3 sm:right-4"
      )}
    >
      <Icon />
    </Button>
  )
}
