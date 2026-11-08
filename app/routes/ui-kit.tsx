import { CheckIcon } from "lucide-react"
import type { ReactNode } from "react"

import { Diamond, LogoDiamond, SimpleLogoMark, Sparkle, SparkleCluster } from "~/components/brand"
import { KitBlocks } from "~/components/ui-kit/blocks"
import { ColourSystem } from "~/components/ui-kit/colour-system"
import { CommentLayer } from "~/components/ui-kit/comment-margin"
import { FeedbackProvider, SaveStatus } from "~/components/ui-kit/feedback"
import { questions } from "~/components/ui-kit/questions"
import { Category, Title, Variant, Variants } from "~/components/ui-kit/parts"

// Internal design overview: the building blocks of the site with variants to choose from.
// Not linked from the site and not indexed.

export const meta = () => [{ title: "UI-Kit | shcherban.de" }, { name: "robots", content: "noindex" }]

export default function UiKit() {
  return (
    <FeedbackProvider>
    <CommentLayer>
    <div className="mx-auto max-w-6xl space-y-24 px-4 py-16">
      <header>
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">Intern</p>
        <h1 className="mt-2 text-[clamp(1.75rem,3.2vw,2.5rem)] leading-tight font-semibold tracking-tight text-ink">UI-Kit</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Building blocks of the site. Pick one variant per category (e.g. “Eyebrow B, Divider C”) and they get used on every
          page, so the site reads as one designed system.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-ink">
          <span className="rounded-xl px-3 py-2 outline-3 outline-emerald-500">Green frame = live on the site today</span>
          <span className="rounded-xl px-3 py-2 outline-2 outline-dashed outline-orange-400">Orange dashed = idea, not used yet</span>
          <span className="rounded-xl px-3 py-2 ring-4 ring-sun ring-offset-4">Yellow ring = your choice</span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Select any text to comment on it – the comment appears in the right margin, next to the highlighted text.</p>
        <div className="mt-4">
          <SaveStatus />
        </div>
      </header>

      <ColourSystem />

      <Category id="typography" questions={questions["typography"]} title="3 · Typography" note="Roboto everywhere. The main sizes as used now.">
        <div className="space-y-6 rounded-3xl border p-8">
          <p className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.05] font-semibold tracking-tight text-ink">Page title (H1)</p>
          <p className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-[2.125rem]">Section title (H2)</p>
          <p className="text-lg font-semibold text-ink">Card title (H3)</p>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">Lead text – a short introduction under a title, slightly larger and softer.</p>
          <p className="max-w-xl text-base leading-relaxed text-neutral-700">Long text, service pages – 16 px, plain grey (text plugin).</p>
          <p className="max-w-xl text-lg leading-relaxed text-neutral-700">Long text, Praxisteam – 18 px, plain grey.</p>
          <p className="text-sm text-muted-foreground">Small text – captions, teasers, notes.</p>
        </div>
      </Category>

      <Category id="diamond" questions={questions["diamond"]} title="4 · The diamond" note="The logo shape. Used as marker, frame, background or icon base.">
        <Variants>
          <Variant letter="A" name="Solid blue" usedOn="small markers in the service groups (Startseite, Leistungen)">
            <div className="flex items-end gap-4">
              <LogoDiamond className="size-16 text-primary" />
              <LogoDiamond className="size-10 text-primary" />
              <Diamond className="size-2.5 bg-primary" />
            </div>
          </Variant>
          <Variant letter="B" name="Pale tint">
            <div className="flex items-end gap-4">
              <LogoDiamond className="size-16 text-tint" />
              <LogoDiamond className="size-10 text-primary/15" />
              <LogoDiamond className="size-5 text-primary/30" />
            </div>
          </Variant>
          <Variant letter="C" name="Outline">
            <div className="flex items-end gap-4 text-primary">
              <OutlineDiamond className="size-16" />
              <OutlineDiamond className="size-10" />
              <OutlineDiamond className="size-5" />
            </div>
          </Variant>
          <Variant letter="D" name="Simplified logo mark (diamond + one star)">
            <SimpleLogoMark className="size-20" />
          </Variant>
          <Variant letter="E" name="Yellow marker" usedOn="Praxisteam CV headings, behind team avatars">
            <div className="flex items-end gap-4">
              <LogoDiamond className="size-10 text-sun" />
              <Diamond className="size-2.5 bg-sun" />
            </div>
          </Variant>
        </Variants>
      </Category>

      <Category id="star" questions={questions["star"]} title="5 · The star" note="The yellow four-pointed star from the logo. Approved: A, B and D – used sparingly, as an accent.">
        <Variants>
          <Variant letter="A" name="Single star" usedOn="section dividers (Startseite, Praxisteam), list bullets">
            <div className="flex items-end gap-4 text-sun">
              <Sparkle className="size-12" />
              <Sparkle className="size-7" />
              <Sparkle className="size-4" />
            </div>
          </Variant>
          <Variant letter="B" name="Cluster (like the logo)">
            <SparkleCluster className="size-20" />
          </Variant>
          <Variant letter="C" name="Blue star">
            <div className="flex items-end gap-4 text-primary">
              <Sparkle className="size-12" />
              <Sparkle className="size-7" />
            </div>
          </Variant>
          <Variant letter="D" name="Star on blue">
            <div className="flex gap-3 rounded-2xl bg-primary p-5 text-sun">
              <Sparkle className="size-8" />
              <Sparkle className="mt-4 size-5" />
            </div>
          </Variant>
        </Variants>
      </Category>

      <Category id="eyebrow" questions={questions["eyebrow"]} title="6 · Eyebrow (small label above a title)" note="Small label above section titles. Decided: no eyebrows on the site.">
        <Variants>
          <Variant letter="A" name="Pill with diamond">
            <p className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground">
              <Diamond className="size-2 bg-primary" /> Unsere Leistungen
            </p>
          </Variant>
          <Variant letter="B" name="Star + text">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <Sparkle className="size-4 text-sun" /> Unsere Leistungen
            </p>
          </Variant>
          <Variant letter="C" name="Small caps with diamond (Praxisteam CV headings are similar: yellow diamond + line)">
            <p className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-ink uppercase">
              <LogoDiamond className="size-3 text-primary" /> Unsere Leistungen
            </p>
          </Variant>
          <Variant letter="D" name="Door sign">
            <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
              <p className="inline-flex rounded-[5px] border border-white/70 px-2 py-0.5 text-[13px] font-semibold tracking-wide">Termin</p>
            </div>
          </Variant>
        </Variants>
      </Category>

      <Category id="title-accent" questions={questions["title-accent"]} title="7 · Title accent" note="How a key word in a big title is emphasised.">
        <Variants wide>
          <Variant letter="A" name="Blue word" usedOn="Startseite headline">
            <Title>
              Frauenarztpraxis <span className="text-primary">Ganna Shcherban</span>
            </Title>
          </Variant>
          <Variant letter="B" name="Yellow marker underline">
            <Title>
              Frauenarztpraxis{" "}
              <span className="bg-[linear-gradient(transparent_62%,var(--sun)_62%,var(--sun)_90%,transparent_90%)] box-decoration-clone">
                Ganna Shcherban
              </span>
            </Title>
          </Variant>
          <Variant letter="C" name="Star after the title">
            <Title>
              Frauenarztpraxis Ganna Shcherban
              <Sparkle className="ml-2 inline-block size-6 -translate-y-4 text-sun" />
            </Title>
          </Variant>
          <Variant letter="D" name="Blue word + star">
            <Title>
              Frauenarztpraxis{" "}
              <span className="relative text-primary">
                Ganna Shcherban
                <Sparkle className="absolute -top-3 -right-5 size-5 text-sun" />
              </span>
            </Title>
          </Variant>
        </Variants>
      </Category>

      <Category id="divider" questions={questions["divider"]} title="8 · Divider between sections" note="C (line with star) separates the big sections on Startseite and Praxisteam; elsewhere space only; the Impressum uses thin lines.">
        <Variants wide>
          <Variant letter="A" name="Space only" usedOn="between sections on the other pages">
            <div className="h-10" />
          </Variant>
          <Variant letter="B" name="Line with diamond">
            <Divider center={<LogoDiamond className="size-4 text-primary" />} />
          </Variant>
          <Variant letter="C" name="Line with star" usedOn="Startseite, Praxisteam (between the big sections)">
            <Divider center={<Sparkle className="size-5 text-sun" />} />
          </Variant>
          <Variant letter="D" name="Three diamonds">
            <div className="flex justify-center gap-3">
              <LogoDiamond className="size-2.5 text-primary/30" />
              <LogoDiamond className="size-2.5 text-primary" />
              <LogoDiamond className="size-2.5 text-primary/30" />
            </div>
          </Variant>
          <Variant letter="E" name="Thin line" usedOn="Impressum (between the legal parts)">
            <hr className="w-full border-border" />
          </Variant>
        </Variants>
      </Category>

      <Category id="bullets" questions={questions["bullets"]} title="9 · List bullets" note="For lists on the service pages (e.g. Krebsvorsorge). Only 4 service pages have lists today.">
        <Variants>
          {[
            { letter: "A", name: "Grey dot (text plugin default)", bullet: <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-400" /> },
            { letter: "B", name: "Blue diamond", bullet: <LogoDiamond className="mt-1.5 size-3 text-primary" /> },
            { letter: "C", name: "Small yellow star", usedOn: "Krebsvorsorge, Impfungen, Mädchensprechstunde, Schwangerenbetreuung, Impressum", bullet: <Sparkle className="mt-1.5 size-2.5 text-sun" /> },
            { letter: "D", name: "Check", bullet: <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" /> },
            { letter: "E", name: "Blue dot (simplest change)", bullet: <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" /> },
          ].map(({ letter, name, usedOn, bullet }) => (
            <Variant key={letter} letter={letter} name={name} usedOn={usedOn}>
              <ul className="space-y-2 text-sm text-foreground">
                {["Gynäkologische Tastuntersuchung", "Pap-Abstrich", "Ausführliche Beratung"].map((item) => (
                  <li key={item} className="flex gap-3">
                    {bullet}
                    {item}
                  </li>
                ))}
              </ul>
            </Variant>
          ))}
        </Variants>
      </Category>

      <KitBlocks />
    </div>
    </CommentLayer>
    </FeedbackProvider>
  )
}

function OutlineDiamond({ className }: { className?: string }) {
  return (
    <svg viewBox="-10 -10 326.5 328.5" aria-hidden="true" className={className}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="18"
        d="M20.5 203.7C-6.8 176.4-6.8 132.1 20.5 104.7L103.7 21.5C131.1-5.8 175.4-5.8 202.7 21.5L286 104.7C313.3 132.1 313.3 176.4 286 203.7L202.7 287C175.4 314.3 131.1 314.3 103.7 287Z"
      />
    </svg>
  )
}

function Divider({ center }: { center: ReactNode }) {
  return (
    <div className="flex w-full items-center gap-4">
      <span className="h-px flex-1 bg-border" />
      {center}
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}
