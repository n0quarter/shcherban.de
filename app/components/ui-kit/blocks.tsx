// Categories 10–19 of the internal /ui-kit page: containers, photos, textures, ornaments, header and buttons.
import { ArrowRightIcon, CalendarCheckIcon, ClockIcon, MicroscopeIcon } from "lucide-react"

import { DiamondFrame, LogoDiamond, SimpleLogoMark, Sparkle, SparkleCluster } from "~/components/brand"
import { DoctolibLogo } from "~/components/doctolib-logo"
import { Category, Variant, Variants } from "~/components/ui-kit/parts"
import { questions } from "~/components/ui-kit/questions"
import { buttonVariants } from "~/components/ui/button"
import { cn } from "~/lib/utils"

const quote = "Gemeinsam setzen wir alles daran, eine beruhigende und sichere Atmosphäre für Ihr Wohlbefinden zu schaffen."

export function KitBlocks() {
  return (
    <>
      <Category id="icon-container" questions={questions["icon-container"]} title="10 · Icon container" note="For service icons and contact icons. One style everywhere: A.">
        <Variants>
          <Variant letter="A" name="White square on pale blue" usedOn="services (Startseite, Leistungen), Kontakt cards and hours">
            <div className="rounded-2xl bg-tint p-4">
              <IconBox className="size-10 rounded-xl bg-background" />
            </div>
          </Variant>
          <Variant letter="B" name="Logo diamond">
            <span className="relative flex size-12 items-center justify-center text-primary">
              <LogoDiamond className="absolute inset-0 size-full text-tint" />
              <MicroscopeIcon className="relative size-5" />
            </span>
          </Variant>
          <Variant letter="C" name="Circle">
            <IconBox className="rounded-full bg-tint" />
          </Variant>
          <Variant letter="D" name="Solid blue diamond">
            <span className="relative flex size-12 items-center justify-center text-primary-foreground">
              <LogoDiamond className="absolute inset-0 size-full text-primary" />
              <MicroscopeIcon className="relative size-5" />
            </span>
          </Variant>
          <Variant letter="E" name="Bare icon, no container">
            <p className="flex items-center gap-3 text-xl font-semibold text-ink">
              <ClockIcon className="size-6 text-primary" /> Sprechzeiten
            </p>
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
          <Variant letter="B" name="Logo diamond crop (exact logo shape)">
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
          <Variant letter="D" name="Plain rounded" usedOn="Praxis, Leistungen, Praxisteam (3 different corner radii)">
            <Photo className="mx-auto w-36 rounded-[1.5rem]" />
          </Variant>
          <Variant letter="F" name="A, tilt in mid blue">
            <TiltedPhoto tint="bg-primary/30" />
          </Variant>
          <Variant letter="G" name="A, tilt in logo blue">
            <TiltedPhoto tint="bg-primary" />
          </Variant>
          <Variant letter="H" name="A, tilt in navy">
            <TiltedPhoto tint="bg-ink" />
          </Variant>
          <Variant letter="I" name="A, logo blue + stars (A + C)">
            <TiltedPhoto tint="bg-primary" stars />
          </Variant>
          <Variant letter="E" name="Rotated square + yellow backing" usedOn="team avatars (Praxisteam; Jessica shows initials)">
            <span className="flex size-28 items-center justify-center">
              <span className="relative size-[71%] rotate-45 overflow-hidden rounded-[28%] bg-sun">
                <img src="/images/ganna-avatar.jpg" alt="" className="absolute top-1/2 left-1/2 size-[142%] max-w-none -translate-1/2 -rotate-45 object-cover object-top" />
              </span>
            </span>
          </Variant>
        </Variants>
      </Category>

      <Category id="panel" questions={questions["panel"]} title="12 · Panel / card" note="Containers for grouped content.">
        <Variants>
          <Variant letter="A" name="Pale tint" usedOn="service groups, team cards, Kontakt hours, Impressum note">
            <Panel className="bg-tint" />
          </Variant>
          <Variant letter="B" name="Outlined" usedOn="Kontakt cards, “Anliegen nicht dabei?”, accordion">
            <Panel className="border" />
          </Variant>
          <Variant letter="C" name="Blue + watermark diamond" usedOn="footer, Kontakt booking panel">
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

      <Category id="background" questions={questions["background"]} title="13 · Background texture" note="A quiet texture for one or two special areas (e.g. the booking block or the footer) – never behind long text.">
        <Variants>
          <Variant letter="A" name="Plain colour blocks" usedOn="pale panels">
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

      <Category id="section-title" questions={questions["section-title"]} title="14 · Section title layout" note="How a section starts. Shown at real size.">
        <Variants wide>
          <Variant letter="A" name="Title + link on the right" usedOn="Startseite sections">
            <div className="flex w-full flex-wrap items-end justify-between gap-4">
              <p className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-[2.125rem]">Wobei wir Sie begleiten</p>
              <span className="inline-flex items-center gap-1.5 font-semibold text-primary">Alle Leistungen <ArrowRightIcon className="size-4" /></span>
            </div>
          </Variant>
          <Variant letter="B" name="Numbered">
            <div className="w-full">
              <p className="text-sm font-semibold text-primary tabular-nums">01 — Leistungen</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Wobei wir Sie begleiten</p>
            </div>
          </Variant>
          <Variant letter="C" name="Centred with star">
            <div className="w-full text-center">
              <Sparkle className="mx-auto size-6 text-sun" />
              <p className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Wobei wir Sie begleiten</p>
            </div>
          </Variant>
          <Variant letter="D" name="Big pale diamond behind">
            <div className="relative w-full py-4">
              <LogoDiamond className="absolute top-1/2 -left-2 size-24 -translate-y-1/2 text-tint" />
              <p className="relative pl-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Wobei wir Sie begleiten</p>
            </div>
          </Variant>
          <Variant letter="E" name="Subheading with small diamond (service pages)">
            <div className="w-full">
              <p className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-ink">
                <span aria-hidden className="block size-2.5 rotate-45 rounded-[28%] bg-primary" /> Was wird untersucht?
              </p>
              <p className="mt-2 text-muted-foreground">For the h2 headings inside the long texts, which are plain today.</p>
            </div>
          </Variant>
        </Variants>
      </Category>

      <Category id="quote" questions={questions["quote"]} title="15 · Quote / highlight" note="To bring Ganna's own voice forward – one sentence from her welcome letter that is not already in the hero.">
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
                <figcaption className="mt-2 text-sm text-primary-foreground/80">Ganna Shcherban</figcaption>
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

      <Category id="logo-ornament" questions={questions["logo-ornament"]} title="16 · Logo mark as ornament" note="Reusing parts of the logo itself, so ornaments feel like ‘ours’.">
        <Variants>
          <Variant letter="A" name="Simplified mark badge (diamond + one star)">
            <div className="flex items-center gap-3">
              <SimpleLogoMark className="size-10" />
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
          <Variant letter="D" name="Watermark diamond with stars" usedOn="watermark only, without stars: footer, Kontakt booking">
            <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-tint">
              <LogoDiamond className="absolute -right-6 -bottom-10 size-36 text-primary/10" />
              <Constellation className="absolute right-4 bottom-2 h-24 text-sun/70" />
            </div>
          </Variant>
          <Variant letter="E" name="Real logo mark (diamond, stars, symbol)">
            <div className="flex items-center gap-3">
              <img src="/logo-mark.svg" alt="" className="size-12" />
              <span className="text-sm font-semibold text-ink">Ganna Shcherban</span>
            </div>
          </Variant>
        </Variants>
      </Category>

      <Category id="hover" questions={questions["hover"]} title="17 · Hover feedback" note="What happens when the mouse moves over a link or card. Hover the examples.">
        <Variants>
          <Variant letter="A" name="Card turns white, icon fills">
            <a className="group flex w-full items-center gap-3 rounded-2xl bg-tint p-3 transition-colors hover:bg-background">
              <span className="flex size-10 items-center justify-center rounded-xl bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <MicroscopeIcon className="size-5" />
              </span>
              <span className="font-semibold text-ink">Krebsvorsorge</span>
            </a>
          </Variant>
          <Variant letter="B" name="Lift + shadow" usedOn="service list (Startseite, Leistungen)">
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

      <Category
        id="header"
        questions={questions["header"]}
        title="18 · Header"
        note="Current behaviour: always large, not sticky (it scrolls away with the page). The booking button shows a calendar icon, “Termin buchen” and the Doctolib logo; it is hidden on phones (in the menu instead), icon and logo are hidden on tablets."
      >
        <p className="text-sm text-muted-foreground">See the header at the top of this page.</p>
      </Category>

      <Category id="buttons" questions={questions["buttons"]} title="19 · Buttons and links" note="Already in use; shown for completeness. Booking buttons come in three heights today: 36 px (header), 40 px (phone menu), 48 px (pages).">
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
    </>
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

function IconBox({ className }: { className?: string }) {
  return (
    <span className={cn("flex size-11 items-center justify-center text-primary", className)}>
      <MicroscopeIcon className="size-5" />
    </span>
  )
}

/** Variant A (rounded photo on a tilted colour card) with a different card colour. */
function TiltedPhoto({ tint, stars }: { tint: string; stars?: boolean }) {
  return (
    <div className="relative mx-auto w-36">
      <div className={cn("absolute -inset-2 -z-10 rotate-3 rounded-[1.75rem]", tint)} />
      <Photo className="rounded-[1.5rem]" />
      {stars && <SparkleCluster className="absolute -top-5 -right-6 size-14" />}
    </div>
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
