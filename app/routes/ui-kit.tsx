import { ArrowRightIcon, CalendarCheckIcon, CheckIcon, MicroscopeIcon } from "lucide-react"
import type { ReactNode } from "react"

import { Diamond, DiamondFrame, LogoDiamond, Sparkle, SparkleCluster } from "~/components/brand"
import { DoctolibLogo } from "~/components/doctolib-logo"
import { ColourSystem } from "~/components/ui-kit/colour-system"
import { FeedbackProvider, SaveStatus } from "~/components/ui-kit/feedback"
import { questions } from "~/components/ui-kit/questions"
import { Category, Title, UsedBadge, Variant, Variants } from "~/components/ui-kit/parts"
import { buttonVariants } from "~/components/ui/button"
import { cn } from "~/lib/utils"

// Internal design overview: the building blocks of the site with variants to choose from.
// Not linked from the site and not indexed.

export const meta = () => [{ title: "UI-Kit | shcherban.de" }, { name: "robots", content: "noindex" }]

const quote = "Ihre Gesundheit und Ihr Wohlbefinden stehen bei uns an erster Stelle."

export default function UiKit() {
  return (
    <FeedbackProvider>
    <div className="mx-auto max-w-6xl space-y-24 px-4 py-16">
      <header>
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">Intern</p>
        <h1 className="mt-2 text-[clamp(2rem,4vw,3rem)] leading-tight font-semibold tracking-tight text-ink">UI-Kit</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Building blocks of the site. Pick one variant per category (e.g. “Eyebrow B, Divider C”) and they get used on every
          page, so the site reads as one designed system.
        </p>
        <p className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <UsedBadge>where</UsedBadge> = live on the site today
          <span className="rounded-full bg-muted px-2 py-0.5 text-xs">Idea</span> = suggestion, not used yet
        </p>
        <div className="mt-4">
          <SaveStatus />
        </div>
      </header>

      <ColourSystem />

      <Category id="typography" questions={questions["typography"]} title="3 · Typography" note="Roboto everywhere. Sizes as used now.">
        <div className="space-y-6 rounded-3xl border p-8">
          <p className="text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-tight text-ink">Page title (H1)</p>
          <p className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.625rem]">Section title (H2)</p>
          <p className="text-lg font-semibold text-ink">Card title (H3)</p>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">Lead text – a short introduction under a title, slightly larger and softer.</p>
          <p className="max-w-xl text-base leading-relaxed text-foreground">Body text – the normal reading size for longer texts on service pages.</p>
          <p className="text-sm text-muted-foreground">Small text – captions, teasers, notes.</p>
        </div>
      </Category>

      <Category id="diamond" questions={questions["diamond"]} title="4 · The diamond" note="The logo shape. Used as marker, frame, background or icon base.">
        <Variants>
          <Variant letter="A" name="Solid blue" usedOn="small markers in the service groups (Startseite, Leistungen)">
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
            <LogoMark className="size-20" />
          </Variant>
        </Variants>
      </Category>

      <Category id="star" questions={questions["star"]} title="5 · The star" note="The yellow four-pointed star from the logo. Not used on the site yet – best used sparingly, as an accent.">
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

      <Category id="eyebrow" questions={questions["eyebrow"]} title="6 · Eyebrow (small label above a title)" note="Small label above section titles.">
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
          <Variant letter="C" name="Small caps with diamond" usedOn="CV headings on Praxisteam (yellow diamond)">
            <p className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-ink uppercase">
              <LogoDiamond className="size-3 text-primary" /> Unsere Leistungen
            </p>
          </Variant>
          <Variant letter="D" name="Door sign" usedOn="“Termin” label in the booking blocks (Startseite, Kontakt)">
            <p className="inline-flex rounded-[5px] border border-ink/70 px-2 py-0.5 text-[13px] font-semibold tracking-wide text-ink">Leistungen</p>
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

      <Category id="divider" questions={questions["divider"]} title="8 · Divider between sections" note="Sections are separated only by space today.">
        <Variants wide>
          <Variant letter="A" name="Space only" usedOn="all pages">
            <div className="h-10" />
          </Variant>
          <Variant letter="B" name="Line with diamond">
            <Divider center={<LogoDiamond className="size-4 text-primary" />} />
          </Variant>
          <Variant letter="C" name="Line with star">
            <Divider center={<Sparkle className="size-5 text-sun" />} />
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

      <Category id="bullets" questions={questions["bullets"]} title="9 · List bullets" note="For lists on the service pages (e.g. Krebsvorsorge).">
        <Variants>
          {[
            { letter: "A", name: "Default dot", usedOn: "all Leistungen pages", bullet: <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-muted-foreground" /> },
            { letter: "B", name: "Blue diamond", bullet: <LogoDiamond className="mt-1.5 size-3 text-primary" /> },
            { letter: "C", name: "Yellow star", bullet: <Sparkle className="mt-1 size-3.5 text-sun" /> },
            { letter: "D", name: "Check", bullet: <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" /> },
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

      <Category id="icon-container" questions={questions["icon-container"]} title="10 · Icon container" note="For service icons and contact icons. Two different ones are in use today – picking one makes it consistent.">
        <Variants>
          <Variant letter="A" name="Rounded square" usedOn="services (Startseite, Leistungen)">
            <IconBox className="rounded-xl bg-background ring-1 ring-border" />
          </Variant>
          <Variant letter="B" name="Logo diamond">
            <span className="relative flex size-12 items-center justify-center text-primary">
              <LogoDiamond className="absolute inset-0 size-full text-tint" />
              <MicroscopeIcon className="relative size-5" />
            </span>
          </Variant>
          <Variant letter="C" name="Circle" usedOn="Kontakt cards">
            <IconBox className="rounded-full bg-tint" />
          </Variant>
          <Variant letter="D" name="Solid blue diamond">
            <span className="relative flex size-12 items-center justify-center text-primary-foreground">
              <LogoDiamond className="absolute inset-0 size-full text-primary" />
              <MicroscopeIcon className="relative size-5" />
            </span>
          </Variant>
        </Variants>
      </Category>

      <Category id="photo-frame" questions={questions["photo-frame"]} title="11 · Photo frame" note="How portraits and practice photos are framed.">
        <Variants>
          <Variant letter="A" name="Rounded + tilted tint" usedOn="Startseite portrait">
            <div className="relative mx-auto w-36">
              <div className="absolute -inset-2 -z-10 rotate-3 rounded-[1.75rem] bg-primary/10" />
              <Photo className="rounded-[1.5rem]" />
            </div>
          </Variant>
          <Variant letter="B" name="Logo diamond crop" usedOn="team avatars (Praxisteam)">
            <DiamondFrame className="mx-auto size-40">
              <img src="/images/ganna-avatar.jpg" alt="" className="size-full object-cover" />
            </DiamondFrame>
          </Variant>
          <Variant letter="C" name="Rounded + stars">
            <div className="relative mx-auto w-36">
              <Photo className="rounded-[1.5rem]" />
              <SparkleCluster className="absolute -top-5 -right-6 size-14" />
            </div>
          </Variant>
          <Variant letter="D" name="Plain rounded" usedOn="Praxis, Leistungen, Praxisteam">
            <Photo className="mx-auto w-36 rounded-[1.5rem]" />
          </Variant>
        </Variants>
      </Category>

      <Category id="panel" questions={questions["panel"]} title="12 · Panel / card" note="Containers for grouped content.">
        <Variants>
          <Variant letter="A" name="Pale tint" usedOn="service groups, Kontakt hours">
            <Panel className="bg-tint" />
          </Variant>
          <Variant letter="B" name="Outlined" usedOn="Kontakt cards, “Anliegen nicht dabei?”">
            <Panel className="border" />
          </Variant>
          <Variant letter="C" name="Blue + watermark diamond" usedOn="Startseite booking block">
            <div className="relative w-full overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground">
              <LogoDiamond className="absolute -right-10 -bottom-12 size-40 text-white/10" />
              <p className="relative font-semibold">Vereinbaren Sie Ihren Termin</p>
              <p className="relative mt-1 text-sm text-primary-foreground/80">Online über Doctolib.</p>
            </div>
          </Variant>
          <Variant letter="D" name="Tint + star corner">
            <div className="relative w-full rounded-3xl bg-tint p-6">
              <Sparkle className="absolute top-4 right-4 size-5 text-sun" />
              <p className="font-semibold text-ink">Sprechstunde</p>
              <p className="mt-1 text-sm text-muted-foreground">Mo–Do, Fr nach Vereinbarung</p>
            </div>
          </Variant>
        </Variants>
      </Category>

      <Category id="background" questions={questions["background"]} title="13 · Background texture (new ideas)" note="A quiet texture for one or two special areas (e.g. the booking block or the footer) – never behind long text.">
        <Variants>
          <Variant letter="A" name="Plain" usedOn="everywhere">
            <div className="h-28 w-full rounded-2xl bg-primary" />
          </Variant>
          <Variant letter="B" name="Diamond lattice">
            <div className="h-28 w-full rounded-2xl bg-primary" style={latticeOnBlue} />
          </Variant>
          <Variant letter="C" name="Star dust">
            <div className="relative h-28 w-full overflow-hidden rounded-2xl bg-ink">
              {starDust.map(([left, top, size], index) => (
                <Sparkle key={index} className="absolute text-sun" style={{ left: `${left}%`, top: `${top}%`, width: size }} />
              ))}
            </div>
          </Variant>
          <Variant letter="D" name="Pale diamond lattice">
            <div className="h-28 w-full rounded-2xl bg-tint" style={latticeOnTint} />
          </Variant>
        </Variants>
      </Category>

      <Category id="section-title" questions={questions["section-title"]} title="14 · Section title layout (new ideas)" note="How a section starts.">
        <Variants wide>
          <Variant letter="A" name="Title + link on the right" usedOn="Startseite sections">
            <div className="flex w-full items-end justify-between gap-4">
              <p className="text-2xl font-semibold tracking-tight text-ink">Wobei wir Sie begleiten</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Alle <ArrowRightIcon className="size-4" /></span>
            </div>
          </Variant>
          <Variant letter="B" name="Numbered">
            <div className="w-full">
              <p className="text-sm font-semibold text-primary tabular-nums">01 — Leistungen</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-ink">Wobei wir Sie begleiten</p>
            </div>
          </Variant>
          <Variant letter="C" name="Centred with star">
            <div className="w-full text-center">
              <Sparkle className="mx-auto size-6 text-sun" />
              <p className="mt-3 text-2xl font-semibold tracking-tight text-ink">Wobei wir Sie begleiten</p>
            </div>
          </Variant>
          <Variant letter="D" name="Big pale diamond behind">
            <div className="relative w-full py-4">
              <LogoDiamond className="absolute top-1/2 -left-2 size-24 -translate-y-1/2 text-tint" />
              <p className="relative pl-6 text-2xl font-semibold tracking-tight text-ink">Wobei wir Sie begleiten</p>
            </div>
          </Variant>
        </Variants>
      </Category>

      <Category id="quote" questions={questions["quote"]} title="15 · Quote / highlight (new ideas)" note="To bring Ganna's own voice forward – e.g. one sentence from her welcome letter.">
        <Variants wide>
          <Variant letter="A" name="Large quote with star">
            <figure className="w-full">
              <Sparkle className="size-6 text-sun" />
              <blockquote className="mt-3 text-2xl leading-snug font-medium tracking-tight text-ink">„{quote}“</blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">Ganna Shcherban</figcaption>
            </figure>
          </Variant>
          <Variant letter="B" name="Blue panel with avatar">
            <figure className="flex w-full gap-4 rounded-3xl bg-primary p-6 text-primary-foreground">
              <DiamondFrame className="size-16 shrink-0">
                <img src="/images/ganna-avatar.jpg" alt="" className="size-full object-cover" />
              </DiamondFrame>
              <div>
                <blockquote className="text-lg leading-snug font-medium">„{quote}“</blockquote>
                <figcaption className="mt-2 text-sm text-primary-foreground/75">Ganna Shcherban</figcaption>
              </div>
            </figure>
          </Variant>
          <Variant letter="C" name="Side line">
            <blockquote className="w-full border-l-4 border-sun pl-5 text-xl leading-snug font-medium text-ink">„{quote}“</blockquote>
          </Variant>
          <Variant letter="D" name="Pale panel, big quote marks">
            <figure className="relative w-full overflow-hidden rounded-3xl bg-tint p-6">
              <span className="absolute -top-6 left-3 text-8xl leading-none font-semibold text-primary/15">„</span>
              <blockquote className="relative text-lg leading-snug font-medium text-ink">{quote}</blockquote>
              <figcaption className="relative mt-2 text-sm text-muted-foreground">Ganna Shcherban</figcaption>
            </figure>
          </Variant>
        </Variants>
      </Category>

      <Category id="logo-ornament" questions={questions["logo-ornament"]} title="16 · Logo mark as ornament (new ideas)" note="Reusing parts of the logo itself, so ornaments feel like ‘ours’.">
        <Variants>
          <Variant letter="A" name="Mark badge (diamond + star)">
            <div className="flex items-center gap-3">
              <LogoMark className="size-10" />
              <span className="text-sm font-semibold text-ink">Ganna Shcherban</span>
            </div>
          </Variant>
          <Variant letter="B" name="Logo constellation">
            <Constellation className="h-32 text-sun" />
          </Variant>
          <Variant letter="C" name="Constellation on navy">
            <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-ink">
              <Constellation className="h-24 text-sun" />
            </div>
          </Variant>
          <Variant letter="D" name="Watermark diamond with stars">
            <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-tint">
              <LogoDiamond className="absolute -right-6 -bottom-10 size-36 text-primary/10" />
              <Constellation className="absolute right-4 bottom-2 h-24 text-sun/70" />
            </div>
          </Variant>
        </Variants>
      </Category>

      <Category id="hover" questions={questions["hover"]} title="17 · Hover feedback (new ideas)" note="What happens when the mouse moves over a link or card. Hover the examples.">
        <Variants>
          <Variant letter="A" name="Card turns white, icon fills" usedOn="service list">
            <a className="group flex w-full items-center gap-3 rounded-2xl bg-tint p-3 transition-colors hover:bg-background">
              <span className="flex size-10 items-center justify-center rounded-xl bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <MicroscopeIcon className="size-5" />
              </span>
              <span className="font-semibold text-ink">Krebsvorsorge</span>
            </a>
          </Variant>
          <Variant letter="B" name="Lift + shadow">
            <a className="block w-full rounded-2xl border p-4 font-semibold text-ink transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">Krebsvorsorge</a>
          </Variant>
          <Variant letter="C" name="Star appears">
            <a className="group inline-flex items-center gap-2 font-semibold text-ink">
              <Sparkle className="size-4 scale-0 text-sun transition-transform group-hover:scale-100" /> Krebsvorsorge
            </a>
          </Variant>
          <Variant letter="D" name="Diamond underline">
            <a className="group relative inline-flex font-semibold text-ink">
              Krebsvorsorge
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
              <LogoDiamond className="absolute -bottom-2.5 left-0 size-2.5 text-primary opacity-0 transition-all group-hover:left-full group-hover:opacity-100" />
            </a>
          </Variant>
        </Variants>
      </Category>

      <Category id="header" questions={questions["header"]} title="19 · Header" note="Current behaviour: tall header with a large logo at the top of the page; it shrinks when you scroll. The booking button shows “Termin buchen” + Doctolib logo.">
        <p className="text-sm text-muted-foreground">See the header of this page – scroll down a little to watch it shrink.</p>
      </Category>

      <Category id="buttons" questions={questions["buttons"]} title="18 · Buttons and links" note="Already in use; shown for completeness.">
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

function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex items-center justify-center", className)}>
      <LogoDiamond className="absolute inset-0 size-full text-primary" />
      <Sparkle className="relative w-[36%] text-sun" />
    </span>
  )
}

/** The five stars exactly where they sit in the logo. */
function Constellation({ className }: { className?: string }) {
  const stars = [
    [46, 178.5, 54],
    [188, 52.5, 25],
    [64, 106, 25],
    [251.5, 112.5, 24],
    [250, 197, 35],
  ]
  return (
    <svg viewBox="0 0 306.5 308.5" aria-hidden="true" className={className}>
      {stars.map(([x, y, size]) => (
        <path
          key={`${x}-${y}`}
          fill="currentColor"
          transform={`translate(${x - size / 2} ${y - (size * 57) / 54 / 2}) scale(${size / 54})`}
          d="M27 0L34.3 20.8L54 28.5L34.3 36.2L27 57L19.7 36.2L0 28.5L19.7 20.8Z"
        />
      ))}
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

function IconBox({ className }: { className?: string }) {
  return (
    <span className={cn("flex size-11 items-center justify-center text-primary", className)}>
      <MicroscopeIcon className="size-5" />
    </span>
  )
}

function Photo({ className }: { className?: string }) {
  return <img src="/images/ganna-portrait.jpg" alt="" className={cn("aspect-[4/5] w-full object-cover object-top", className)} />
}

function Panel({ className }: { className?: string }) {
  return (
    <div className={cn("w-full rounded-3xl p-6", className)}>
      <p className="font-semibold text-ink">Sprechstunde</p>
      <p className="mt-1 text-sm text-muted-foreground">Mo–Do, Fr nach Vereinbarung</p>
    </div>
  )
}

const starDust: [number, number, number][] = [
  [8, 20, 10], [22, 62, 6], [35, 30, 14], [48, 70, 8], [60, 18, 7], [72, 52, 12], [86, 26, 8], [90, 72, 6],
]

const diamondTile = (fill: string) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Crect x='10' y='10' width='8' height='8' rx='2.2' transform='rotate(45 14 14)' fill='${fill}'/%3E%3C/svg%3E")`

const latticeOnBlue = { backgroundImage: diamondTile("rgba(255,255,255,0.12)") }
const latticeOnTint = { backgroundImage: diamondTile("rgba(21,84,184,0.10)") }
