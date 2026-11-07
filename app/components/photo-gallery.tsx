import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useState } from "react"

import { Button } from "~/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "~/components/ui/dialog"
import { useLang } from "~/lib/i18n"
import { cn } from "~/lib/utils"

type Photo = { src: string; caption: string }

const text = {
  de: { open: "Foto vergrößern", previous: "Vorheriges Foto", next: "Nächstes Foto" },
  en: { open: "Enlarge photo", previous: "Previous photo", next: "Next photo" },
}

/** Photo grid: first photo large, the rest small. Each photo opens enlarged in a dialog. */
export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const t = text[useLang()]
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const current = openIndex === null ? null : photos[openIndex]
  const step = (delta: number) => setOpenIndex((index) => (index === null ? null : (index + delta + photos.length) % photos.length))

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`${t.open}: ${photo.caption}`}
            className={cn(
              "group relative cursor-zoom-in overflow-hidden rounded-2xl text-left outline-none focus-visible:ring-3 focus-visible:ring-ring",
              index === 0 && "col-span-2 lg:row-span-2"
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

      <Dialog open={current !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent
          className="gap-3 bg-background p-3 sm:max-w-5xl"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") step(-1)
            if (event.key === "ArrowRight") step(1)
          }}
        >
          {current && (
            <>
              <img src={current.src} alt={current.caption} className="max-h-[75vh] w-full rounded-3xl object-contain" />
              <div className="flex items-center justify-between gap-3 px-2 pb-1">
                <DialogTitle className="text-base font-medium">{current.caption}</DialogTitle>
                <div className="flex gap-1">
                  <Button variant="outline" size="icon" onClick={() => step(-1)} aria-label={t.previous}>
                    <ChevronLeftIcon />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => step(1)} aria-label={t.next}>
                    <ChevronRightIcon />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
