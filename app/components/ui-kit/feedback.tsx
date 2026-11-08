// Feedback for the internal /ui-kit page: picks, comments and answers, saved by the local dev server
// to design/ui-kit-feedback.json (see tooling/ui-kit-feedback.ts).
import { CheckIcon, MessageSquareIcon, XIcon } from "lucide-react"
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

import { cn } from "~/lib/utils"

const endpoint = "/__ui-kit-feedback"

type Comment = { id: string; target: string; text: string; createdAt: string }
type Answer = { choice?: string; note?: string }
type Feedback = { decisions: Record<string, string>; comments: Comment[]; answers: Record<string, Answer> }

const empty: Feedback = { decisions: {}, comments: [], answers: {} }

type FeedbackApi = {
  data: Feedback
  status: "loading" | "saved" | "saving" | "error"
  pick: (category: string, letter: string) => void
  addComment: (target: string, text: string) => void
  removeComment: (id: string) => void
  answer: (question: string, patch: Answer) => void
}

const FeedbackContext = createContext<FeedbackApi | null>(null)
const CategoryContext = createContext("")

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Feedback>(empty)
  const [status, setStatus] = useState<FeedbackApi["status"]>("loading")

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((saved) => {
        setData({ ...empty, ...saved })
        setStatus("saved")
      })
      .catch(() => setStatus("error"))
  }, [])

  const save = (next: Feedback) => {
    setData(next)
    setStatus("saving")
    fetch(endpoint, { method: "PUT", body: JSON.stringify(next) })
      .then((response) => setStatus(response.ok ? "saved" : "error"))
      .catch(() => setStatus("error"))
  }

  const api: FeedbackApi = {
    data,
    status,
    pick: (category, letter) => {
      const decisions = { ...data.decisions }
      if (decisions[category] === letter) delete decisions[category]
      else decisions[category] = letter
      save({ ...data, decisions })
    },
    addComment: (target, text) =>
      save({ ...data, comments: [...data.comments, { id: crypto.randomUUID(), target, text, createdAt: new Date().toISOString() }] }),
    removeComment: (id) => save({ ...data, comments: data.comments.filter((comment) => comment.id !== id) }),
    answer: (question, patch) => save({ ...data, answers: { ...data.answers, [question]: { ...data.answers[question], ...patch } } }),
  }

  return <FeedbackContext.Provider value={api}>{children}</FeedbackContext.Provider>
}

function useFeedback() {
  const api = useContext(FeedbackContext)
  if (!api) throw new Error("useFeedback needs <FeedbackProvider>")
  return api
}

/** Marks everything inside as belonging to one category (used for element ids like "eyebrow.B"). */
export function CategoryScope({ id, children }: { id: string; children: ReactNode }) {
  return <CategoryContext.Provider value={id}>{children}</CategoryContext.Provider>
}

export function useCategoryId() {
  return useContext(CategoryContext)
}

export function SaveStatus() {
  const { status, data } = useFeedback()
  const label = { loading: "Loading…", saving: "Saving…", saved: "Saved", error: "Could not save – is the dev server running?" }[status]
  return (
    <p className={cn("text-xs", status === "error" ? "text-destructive" : "text-muted-foreground")}>
      {label} · {Object.keys(data.decisions).length} picks · {data.comments.length} comments · design/ui-kit-feedback.json
    </p>
  )
}

/** "Choose" toggle for one variant; one choice per category. */
export function PickButton({ letter }: { letter: string }) {
  const { data, pick } = useFeedback()
  const category = useCategoryId()
  const chosen = data.decisions[category] === letter
  return (
    <button
      type="button"
      onClick={() => pick(category, letter)}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
        chosen ? "border-sun bg-sun text-ink" : "text-muted-foreground hover:border-primary hover:text-primary"
      )}
    >
      {chosen && <CheckIcon className="size-3.5" />}
      {chosen ? "Chosen" : "Choose"}
    </button>
  )
}

export function isChosen(data: Feedback, category: string, letter: string) {
  return data.decisions[category] === letter
}

export function useIsChosen(letter: string) {
  const { data } = useFeedback()
  return isChosen(data, useCategoryId(), letter)
}

/** Comments attached to one element (e.g. "eyebrow.B") or a whole category (e.g. "eyebrow"). */
export function Comments({ target, label = "Comment" }: { target: string; label?: string }) {
  const { data, addComment, removeComment } = useFeedback()
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")
  const comments = data.comments.filter((comment) => comment.target === target)

  return (
    <div className="space-y-2">
      {comments.map((comment) => (
        <p key={comment.id} className="flex items-start gap-2 rounded-xl bg-sun/25 px-3 py-2 text-xs text-ink">
          <span className="flex-1 whitespace-pre-wrap">{comment.text}</span>
          <button type="button" onClick={() => removeComment(comment.id)} aria-label="Delete comment" className="text-ink/50 hover:text-ink">
            <XIcon className="size-3.5" />
          </button>
        </p>
      ))}
      {open ? (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            if (text.trim()) addComment(target, text.trim())
            setText("")
            setOpen(false)
          }}
          className="space-y-2"
        >
          <textarea
            autoFocus
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) event.currentTarget.form?.requestSubmit()
            }}
            rows={3}
            placeholder="Your comment… (⌘↵ to save)"
            className="w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <div className="flex gap-2">
            <button type="submit" className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">Save</button>
            <button type="button" onClick={() => setOpen(false)} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">Cancel</button>
          </div>
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary"
        >
          <MessageSquareIcon className="size-3.5" /> {label}
        </button>
      )}
    </div>
  )
}

export type Question = { id: string; question: string; options: string[] }

/** Questions from Claude with one-click answers plus an optional note. */
export function Questions({ questions }: { questions: Question[] }) {
  const { data, answer } = useFeedback()
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {questions.map((item) => {
        const current = data.answers[item.id] ?? {}
        return (
          <div key={item.id} className="rounded-3xl border p-5">
            <p className="font-medium text-ink">{item.question}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => answer(item.id, { choice: current.choice === option ? undefined : option })}
                  className={cn(
                    "rounded-full border px-3 py-1 text-sm transition-colors",
                    current.choice === option ? "border-sun bg-sun text-ink" : "text-muted-foreground hover:border-primary hover:text-primary"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
            <textarea
              defaultValue={current.note ?? ""}
              key={current.note ?? ""}
              onBlur={(event) => event.target.value !== (current.note ?? "") && answer(item.id, { note: event.target.value })}
              rows={2}
              placeholder="Optional note…"
              className="mt-3 w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
        )
      })}
    </div>
  )
}
