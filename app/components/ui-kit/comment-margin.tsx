// Margin comments for the /ui-kit page: a comment made on selected text is shown in a column beside that
// text, and the text itself is highlighted (CSS Custom Highlight API, no DOM changes).
import { XIcon } from "lucide-react"
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react"

import { useFeedback } from "~/components/ui-kit/feedback"
import { cn } from "~/lib/utils"

type Anchor = { range: Range | null; top: number }

const highlightStyles = `
::highlight(ui-kit-comment) { background-color: rgb(253 213 6 / 0.35); }
::highlight(ui-kit-comment-active) { background-color: rgb(253 213 6 / 0.85); }
`

/** Wraps the page; on large screens it reserves a right column for the comment cards. */
export function CommentLayer({ children }: { children: ReactNode }) {
  const { data, removeComment } = useFeedback()
  const root = useRef<HTMLDivElement>(null)
  const cards = useRef(new Map<string, HTMLDivElement>())
  const [anchors, setAnchors] = useState<Record<string, Anchor>>({})
  const [tops, setTops] = useState<Record<string, number>>({})
  const [active, setActive] = useState<string | null>(null)
  const quoted = data.comments.filter((comment) => comment.quote)

  // Find every quoted text on the page; again whenever the layout changes (images, fonts, resizing).
  useEffect(() => {
    const box = root.current
    if (!box) return
    const locate = () => {
      const base = box.getBoundingClientRect().top
      const next: Record<string, Anchor> = {}
      for (const comment of data.comments) {
        if (!comment.quote) continue
        const scope = box.querySelector(`[data-feedback-target="${CSS.escape(comment.target)}"]`) ?? box
        const range = findText(scope, comment.quote)
        next[comment.id] = { range, top: (range ?? scope).getBoundingClientRect().top - base }
      }
      setAnchors(next)
    }
    locate()
    const observer = new ResizeObserver(locate)
    observer.observe(box)
    return () => observer.disconnect()
  }, [data.comments])

  // Cards sit level with their text, pushed down when they would overlap.
  useLayoutEffect(() => {
    const next: Record<string, number> = {}
    let bottom = -Infinity
    for (const id of Object.keys(anchors).sort((a, b) => anchors[a].top - anchors[b].top)) {
      const top = Math.max(anchors[id].top, bottom + 8)
      next[id] = top
      bottom = top + (cards.current.get(id)?.offsetHeight ?? 0)
    }
    setTops(next)
  }, [anchors])

  useEffect(() => {
    if (!("highlights" in CSS)) return
    const ranges = Object.values(anchors).flatMap((anchor) => (anchor.range ? [anchor.range] : []))
    const activeRange = active ? anchors[active]?.range : null
    CSS.highlights.set("ui-kit-comment", new Highlight(...ranges))
    CSS.highlights.set("ui-kit-comment-active", new Highlight(...(activeRange ? [activeRange] : [])))
    return () => {
      CSS.highlights.delete("ui-kit-comment")
      CSS.highlights.delete("ui-kit-comment-active")
    }
  }, [anchors, active])

  return (
    <div ref={root} className="relative lg:pr-80">
      <style>{highlightStyles}</style>
      {children}
      <aside data-comment-ui className="absolute top-0 right-4 hidden h-full w-72 lg:block">
        {quoted.map((comment) => (
          <div
            key={comment.id}
            ref={(element) => {
              if (element) cards.current.set(comment.id, element)
              else cards.current.delete(comment.id)
            }}
            onMouseEnter={() => setActive(comment.id)}
            onMouseLeave={() => setActive(null)}
            className={cn(
              "absolute inset-x-0 rounded-xl border-l-4 border-sun bg-background p-3 text-xs shadow-md ring-1 ring-border transition-[top,box-shadow] duration-200",
              active === comment.id && "shadow-lg ring-sun"
            )}
            style={{ top: tops[comment.id] ?? anchors[comment.id]?.top ?? 0 }}
          >
            <div className="flex items-start gap-2">
              <p className="flex-1 text-sm whitespace-pre-wrap text-ink">{comment.text}</p>
              <button type="button" onClick={() => removeComment(comment.id)} aria-label="Delete comment" className="text-ink/40 hover:text-ink">
                <XIcon className="size-3.5" />
              </button>
            </div>
            <p className="mt-1.5 line-clamp-2 text-muted-foreground italic">„{comment.quote}“</p>
            {anchors[comment.id] && !anchors[comment.id].range && (
              <p className="mt-1 text-[10px] text-orange-700">Text not found any more – shown at #{comment.target}</p>
            )}
          </div>
        ))}
      </aside>
    </div>
  )
}

/** Range of `quote` inside `scope`, ignoring whitespace (a selection adds line breaks between blocks). */
function findText(scope: Element, quote: string): Range | null {
  const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => (node.parentElement?.closest("[data-comment-ui], textarea, style") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  })
  const positions: { node: Text; offset: number }[] = []
  let flat = ""
  for (let node = walker.nextNode() as Text | null; node; node = walker.nextNode() as Text | null) {
    for (let offset = 0; offset < node.data.length; offset++) {
      if (/\s/.test(node.data[offset])) continue
      flat += node.data[offset]
      positions.push({ node, offset })
    }
  }
  const needle = quote.replace(/\s+/g, "")
  const start = needle ? flat.indexOf(needle) : -1
  if (start === -1) return null
  const first = positions[start]
  const last = positions[start + needle.length - 1]
  const range = document.createRange()
  range.setStart(first.node, first.offset)
  range.setEnd(last.node, last.offset + 1)
  return range
}
