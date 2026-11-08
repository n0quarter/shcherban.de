import { ArrowRightIcon, CalendarCheckIcon, CheckIcon, MicroscopeIcon } from "lucide-react"
import type { ReactNode } from "react"

import { Diamond, DiamondFrame, LogoDiamond, Sparkle, SparkleCluster } from "~/components/brand"
import { DoctolibLogo } from "~/components/doctolib-logo"
import { buttonVariants } from "~/components/ui/button"
import { cn } from "~/lib/utils"

// Internal design overview: the building blocks of the site with variants to choose from.
// Not linked from the site and not indexed.

export const meta = () => [{ title: "UI-Kit | shcherban.de" }, { name: "robots", content: "noindex" }]

export default function UiKit() {
  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 py-16">
      <header>
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">Intern</p>
        <h1 className="mt-2 text-[clamp(2rem,4vw,3rem)] leading-tight font-semibold tracking-tight text-ink">UI-Kit</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Building blocks of the site. Pick one variant per category (e.g. “Eyebrow B, Divider C”) and they get used on every
          page, so the site reads as one designed system.
        </p>
      </header>

      <Category title="1 · Colours" note="From the logo plus neutral tones. Already in use.">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <Swatch className="bg-primary" name="Primary (logo blue)" value="#1250B3" />
          <Swatch className="bg-sun" name="Sun (logo yellow)" value="#FFD500" />
          <Swatch className="bg-ink" name="Ink (text, footer)" value="navy" />
          <Swatch className="bg-tint" name="Tint (pale blocks)" value="pale blue" />
          <Swatch className="bg-cream" name="Cream (footer title)" value="cream" />
          <Swatch className="border bg-background" name="Background" value="white" />
        </div>
      </Category>

      <Category title="2 · Typography" note="Roboto everywhere. Sizes as used now.">
        <div className="space-y-6 rounded-3xl border p-8">
          <p className="text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-tight text-ink">Page title (H1)</p>
          <p className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.625rem]">Section title (H2)</p>
          <p className="text-lg font-semibold text-ink">Card title (H3)</p>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">Lead text – a short introduction under a title, slightly larger and softer.</p>
          <p className="max-w-xl text-base leading-relaxed text-foreground">Body text – the normal reading size for longer texts on service pages.</p>
          <p className="text-sm text-muted-foreground">Small text – captions, teasers, notes.</p>
        </div>
      </Category>

      <Category title="3 · The diamond" note="The logo shape. Used as marker, frame, background or icon base.">
        <Variants>
          <Variant letter="A" name="Solid blue">
            <div className="flex items-end gap-4">
              <LogoDiamond className="size-16 text-primary" />
              <LogoDiamond className="size-10 text-primary" />
              <LogoDiamond className="size-5 text-primary" />
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
          <Variant letter="D" name="Blue with yellow star (logo mark)">
            <span className="relative inline-flex size-20 items-center justify-center">
              <LogoDiamond className="absolute inset-0 size-full text-primary" />
              <Sparkle className="relative size-7 text-sun" />
            </span>
          </Variant>
        </Variants>
      </Category>

      <Category title="4 · The star" note="The yellow four-pointed star from the logo. Best used sparingly, as an accent.">
        <Variants>
          <Variant letter="A" name="Single star">
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

      <Category title="5 · Eyebrow (small label above a title)" note="Used above section titles; currently not shown anywhere.">
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
          <Variant letter="C" name="Small caps with diamond">
            <p className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-ink uppercase">
              <LogoDiamond className="size-3 text-primary" /> Unsere Leistungen
            </p>
          </Variant>
          <Variant letter="D" name="Door sign">
            <p className="inline-flex rounded-[5px] border border-ink/70 px-2 py-0.5 text-[13px] font-semibold tracking-wide text-ink">Leistungen</p>
          </Variant>
        </Variants>
      </Category>

      <Category title="6 · Title accent" note="How a key word in a big title is emphasised.">
        <Variants wide>
          <Variant letter="A" name="Blue word (current)">
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
              Frauenarztpraxis <span className="relative text-primary">Ganna Shcherban<Sparkle className="absolute -top-3 -right-5 size-5 text-sun" /></span>
            </Title>
          </Variant>
        </Variants>
      </Category>

      <Category title="7 · Divider between sections" note="Optional; today sections are separated only by space.">
        <Variants wide>
          <Variant letter="A" name="Space only (current)">
            <div className="h-10" />
          </Variant>
          <Variant letter="B" name="Line with diamond">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-border" />
              <LogoDiamond className="size-4 text-primary" />
              <span className="h-px flex-1 bg-border" />
            </div>
          </Variant>
          <Variant letter="C" name="Line with star">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-border" />
              <Sparkle className="size-5 text-sun" />
              <span className="h-px flex-1 bg-border" />
            </div>
          </Variant>
          <Variant letter="D" name="Three diamonds">
            <div className="flex justify-center gap-3">
              <LogoDiamond className="size-2.5 text-primary/30" />
              <LogoDiamond className="size-2.5 text-primary" />
              <LogoDiamond className="size-2.5 text-primary/30" />
            </div>
          </Variant>
        </Variants>
      </Category>

      <Category title="8 · List bullets" note="For lists on the service pages (e.g. Krebsvorsorge).">
        <Variants>
          {[
            { letter: "A", name: "Default dot", bullet: <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-muted-foreground" /> },
            { letter: "B", name: "Blue diamond", bullet: <LogoDiamond className="mt-1.5 size-3 text-primary" /> },
            { letter: "C", name: "Yellow star", bullet: <Sparkle className="mt-1 size-3.5 text-sun" /> },
            { letter: "D", name: "Check", bullet: <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" /> },
          ].map(({ letter, name, bullet }) => (
            <Variant key={letter} letter={letter} name={name}>
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

      <Category title="9 · Icon container" note="For service icons and contact icons.">
        <Variants>
          <Variant letter="A" name="Rounded square (current)">
            <IconRow render={(icon) => <span className="flex size-11 items-center justify-center rounded-xl bg-tint text-primary">{icon}</span>} />
          </Variant>
          <Variant letter="B" name="Logo diamond">
            <IconRow
              render={(icon) => (
                <span className="relative flex size-12 items-center justify-center text-primary">
                  <LogoDiamond className="absolute inset-0 size-full text-tint" />
                  <span className="relative">{icon}</span>
                </span>
              )}
            />
          </Variant>
          <Variant letter="C" name="Circle">
            <IconRow render={(icon) => <span className="flex size-11 items-center justify-center rounded-full bg-tint text-primary">{icon}</span>} />
          </Variant>
          <Variant letter="D" name="Solid blue diamond">
            <IconRow
              render={(icon) => (
                <span className="relative flex size-12 items-center justify-center text-primary-foreground">
                  <LogoDiamond className="absolute inset-0 size-full text-primary" />
                  <span className="relative">{icon}</span>
                </span>
              )}
            />
          </Variant>
        </Variants>
      </Category>

      <Category title="10 · Photo frame" note="How portraits and practice photos are framed.">
        <Variants>
          <Variant letter="A" name="Rounded + tilted tint (hero now)">
            <div className="relative mx-auto w-40">
              <div className="absolute -inset-2 -z-10 rotate-3 rounded-[1.75rem] bg-primary/10" />
              <Photo className="rounded-[1.5rem]" />
            </div>
          </Variant>
          <Variant letter="B" name="Logo diamond crop">
            <DiamondFrame className="mx-auto size-44">
              <img src="/images/ganna-avatar.jpg" alt="" className="size-full object-cover" />
            </DiamondFrame>
          </Variant>
          <Variant letter="C" name="Rounded + stars">
            <div className="relative mx-auto w-40">
              <Photo className="rounded-[1.5rem]" />
              <SparkleCluster className="absolute -top-5 -right-6 size-14" />
            </div>
          </Variant>
          <Variant letter="D" name="Rounded + diamond behind">
            <div className="relative mx-auto w-40">
              <LogoDiamond className="absolute -right-8 -bottom-8 -z-10 size-32 text-tint" />
              <Photo className="rounded-[1.5rem]" />
            </div>
          </Variant>
        </Variants>
      </Category>

      <Category title="11 · Panel / card" note="Containers for grouped content.">
        <Variants>
          <Variant letter="A" name="Tint panel">
            <Panel className="bg-tint" />
          </Variant>
          <Variant letter="B" name="Outlined">
            <Panel className="border" />
          </Variant>
          <Variant letter="C" name="Blue + watermark diamond">
            <div className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground">
              <LogoDiamond className="absolute -right-10 -bottom-12 size-40 text-white/10" />
              <p className="relative font-semibold">Vereinbaren Sie Ihren Termin</p>
              <p className="relative mt-1 text-sm text-primary-foreground/80">Online über Doctolib.</p>
            </div>
          </Variant>
          <Variant letter="D" name="Tint + star corner">
            <div className="relative rounded-3xl bg-tint p-6">
              <Sparkle className="absolute top-4 right-4 size-5 text-sun" />
              <p className="font-semibold text-ink">Sprechstunde</p>
              <p className="mt-1 text-sm text-muted-foreground">Mo–Do, Fr nach Vereinbarung</p>
            </div>
          </Variant>
        </Variants>
      </Category>

      <Category title="12 · Buttons and links" note="Already in use; shown for completeness.">
        <div className="flex flex-wrap items-center gap-4 rounded-3xl border p-8">
          <a className={buttonVariants({ size: "lg", className: "h-12 gap-2.5 px-6 text-base" })}>
            <CalendarCheckIcon /> Termin buchen <DoctolibLogo className="h-[15px]" />
          </a>
          <a className={cn(buttonVariants({ size: "lg" }), "h-12 gap-2.5 bg-sun px-6 text-base text-ink hover:bg-sun/85")}>
            <CalendarCheckIcon /> Termin buchen <DoctolibLogo color="ink" className="h-[15px]" />
          </a>
          <a className={buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-6 text-base" })}>Alle Leistungen</a>
          <a className="group inline-flex items-center gap-2 font-semibold text-primary">
            Mehr erfahren <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </Category>
    </div>
  )
}

function Category({ title, note, children }: { title: string; note: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-ink">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{note}</p>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function Variants({ wide, children }: { wide?: boolean; children: ReactNode }) {
  return <div className={cn("grid gap-4", wide ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4")}>{children}</div>
}

function Variant({ letter, name, children }: { letter: string; name: string; children: ReactNode }) {
  return (
    <div className="flex flex-col rounded-3xl border">
      <div className="flex min-h-36 flex-1 items-center justify-center p-6">{children}</div>
      <p className="flex items-center gap-2 border-t px-4 py-3 text-sm">
        <span className="flex size-6 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">{letter}</span>
        <span className="text-muted-foreground">{name}</span>
      </p>
    </div>
  )
}

function Swatch({ className, name, value }: { className: string; name: string; value: string }) {
  return (
    <div>
      <div className={cn("h-20 rounded-2xl", className)} />
      <p className="mt-2 text-sm font-medium text-ink">{name}</p>
      <p className="text-xs text-muted-foreground">{value}</p>
    </div>
  )
}

function Title({ children }: { children: ReactNode }) {
  return <p className="text-3xl leading-tight font-semibold tracking-tight text-ink">{children}</p>
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

function IconRow({ render }: { render: (icon: ReactNode) => ReactNode }) {
  return <div className="flex gap-3">{render(<MicroscopeIcon className="size-5" />)}</div>
}

function Photo({ className }: { className?: string }) {
  return <img src="/images/ganna-portrait.jpg" alt="" className={cn("aspect-[4/5] w-full object-cover object-top", className)} />
}

function Panel({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-3xl p-6", className)}>
      <p className="font-semibold text-ink">Sprechstunde</p>
      <p className="mt-1 text-sm text-muted-foreground">Mo–Do, Fr nach Vereinbarung</p>
    </div>
  )
}
