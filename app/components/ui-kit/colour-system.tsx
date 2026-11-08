// Colour section of the internal /ui-kit page: how the palette is built and which options exist.
import { Sparkle } from "~/components/brand"
import { useIsChosen } from "~/components/ui-kit/feedback"
import { Category, VariantFooter } from "~/components/ui-kit/parts"
import { questions } from "~/components/ui-kit/questions"
import { cn } from "~/lib/utils"

export function ColourSystem() {
  return (
    <>
      <Category
        id="colour-system"
        questions={questions["colour-system"]}
        title="1 · Colour system – how it works"
        note="Brand palettes are usually built from a few rules. Here is how the current palette follows them."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Rule title="Start from the logo">
            Logo blue <b>#1250B3</b> and logo yellow <b>#FFD500</b> are the two brand colours. Blue and yellow sit almost opposite
            each other on the colour wheel (complementary), so together they are lively but balanced.
          </Rule>
          <Rule title="60 · 30 · 10">
            About 60 % calm neutrals (white, pale tint), 30 % the main colour (blue: buttons, panels, links), 10 % accent (yellow:
            one button, small marks). Too much yellow quickly looks loud.
          </Rule>
          <Rule title="Tinted neutrals">
            Text, footer and pale blocks are not plain grey/black but navy and pale blue – both mixed from the logo blue. That
            keeps every neutral “in the family”.
          </Rule>
          <Rule title="Contrast for reading">
            Text needs a contrast of at least 4.5 : 1 (WCAG AA). All text pairs below pass. Yellow on white is only 1.4 : 1 –
            yellow is never used for text on white, only on navy/blue or as shapes.
          </Rule>
        </div>

        <p className="mt-10 mb-3 text-sm font-semibold text-ink">Current proportions</p>
        <div className="flex h-14 overflow-hidden rounded-2xl border">
          <div className="flex w-[60%] items-center bg-background px-4 text-xs text-muted-foreground">60 % white + tint</div>
          <div className="flex w-[30%] items-center bg-primary px-4 text-xs text-primary-foreground">30 % blue + navy</div>
          <div className="flex w-[10%] items-center justify-center bg-sun text-xs text-ink">10 %</div>
        </div>

        <p className="mt-10 mb-3 text-sm font-semibold text-ink">Tonal scales (same hue, different lightness)</p>
        <Scale name="Blue" hue={260} chroma={0.17} />
        <Scale name="Yellow" hue={95} chroma={0.18} />

        <p className="mt-10 mb-3 text-sm font-semibold text-ink">Contrast of the text pairs in use</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Contrast fg="text-ink" bg="bg-background" label="Navy on white" ratio={16.5} />
          <Contrast fg="text-primary" bg="bg-background" label="Blue on white (links)" ratio={7.0} />
          <Contrast fg="text-primary-foreground" bg="bg-primary" label="White on blue (buttons)" ratio={7.0} />
          <Contrast fg="text-ink" bg="bg-sun" label="Navy on yellow (button)" ratio={11.5} />
          <Contrast fg="text-sun" bg="bg-ink" label="Yellow on navy (footer)" ratio={11.5} />
          <Contrast fg="text-cream" bg="bg-ink" label="Cream on navy (footer)" ratio={14.7} />
          <Contrast fg="text-muted-foreground" bg="bg-background" label="Grey-blue on white (small text)" ratio={6.0} />
          <Contrast fg="text-sun" bg="bg-background" label="Yellow on white – not for text" ratio={1.4} />
        </div>
      </Category>

      <Category
        id="palette"
        questions={questions["palette"]}
        title="2 · Palette options"
        note="Same logo colours everywhere; the options differ in the supporting colour for calm blocks and backgrounds."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <PaletteOption
            letter="A"
            name="Logo blue + pale blue (current)"
            usedOn="whole site"
            swatches={["#1554B8", "#FDD506", "#161F30", "#EEF4FC", "#FFFFFF"]}
            block="#EEF4FC"
            why="Cool, clean, clinical-calm. Everything derived from the logo blue."
          />
          <PaletteOption
            letter="B"
            name="Logo colours + warm sand"
            swatches={["#1554B8", "#FDD506", "#2A2522", "#F6F0E7", "#FFFFFF"]}
            block="#F6F0E7"
            why="Warmer and more ‘human’: sand blocks instead of pale blue, warm dark text. Blue stays for actions."
          />
          <PaletteOption
            letter="C"
            name="Logo colours + practice teal"
            swatches={["#1554B8", "#FDD506", "#161F30", "#E3F3F2", "#1E8C8E"]}
            block="#E3F3F2"
            why="Teal like the reception counter in the photos – links the website to the real rooms."
          />
          <PaletteOption
            letter="D"
            name="Logo colours + soft blush"
            swatches={["#1554B8", "#FDD506", "#161F30", "#F8ECEA", "#FFFFFF"]}
            block="#F8ECEA"
            why="Gentle and warm for a women's practice; must stay subtle to avoid cliché."
          />
        </div>
      </Category>
    </>
  )
}

function Rule({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-tint p-6 text-sm leading-relaxed text-foreground [&_b]:font-semibold [&_b]:text-ink">
      <p className="mb-2 flex items-center gap-2 font-semibold text-ink">
        <Sparkle className="size-3.5 text-primary" /> {title}
      </p>
      {children}
    </div>
  )
}

const steps = [0.97, 0.92, 0.84, 0.74, 0.62, 0.52, 0.45, 0.36, 0.27]

function Scale({ name, hue, chroma }: { name: string; hue: number; chroma: number }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="w-14 text-sm text-muted-foreground">{name}</span>
      <div className="grid flex-1 grid-cols-9 overflow-hidden rounded-xl">
        {steps.map((lightness) => (
          <div
            key={lightness}
            className="h-10"
            style={{ background: `oklch(${lightness} ${(chroma * Math.min(1, (1 - Math.abs(lightness - 0.6) * 1.4))).toFixed(3)} ${hue})` }}
          />
        ))}
      </div>
    </div>
  )
}

function Contrast({ fg, bg, label, ratio }: { fg: string; bg: string; label: string; ratio: number }) {
  const passes = ratio >= 4.5
  return (
    <div className="overflow-hidden rounded-2xl border">
      <div className={cn("flex h-16 items-center justify-center text-lg font-semibold", fg, bg)}>Aa</div>
      <div className="flex items-center justify-between gap-2 px-3 py-2 text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className={cn("font-semibold", passes ? "text-primary" : "text-destructive")}>
          {ratio.toFixed(1)} : 1 {passes ? "✓" : "✗"}
        </span>
      </div>
    </div>
  )
}

function PaletteOption({
  letter,
  name,
  usedOn,
  swatches,
  block,
  why,
}: {
  letter: string
  name: string
  usedOn?: string
  swatches: string[]
  block: string
  why: string
}) {
  const chosen = useIsChosen(letter)
  return (
    <div
      data-feedback-target={`palette.${letter}`}
      className={cn("flex flex-col rounded-3xl border", usedOn && "border-primary/40 ring-1 ring-primary/20", chosen && "border-sun ring-2 ring-sun")}
    >
      <div className="flex-1 p-5">
      <div className="flex gap-2">
        {swatches.map((colour) => (
          <span key={colour} className="h-10 flex-1 rounded-xl border" style={{ background: colour }} title={colour} />
        ))}
      </div>
      <div className="mt-4 rounded-2xl p-5" style={{ background: block }}>
        <p className="font-semibold" style={{ color: swatches[2] }}>Sprechstunde</p>
        <p className="mt-1 text-sm" style={{ color: swatches[2], opacity: 0.75 }}>Mo–Do · Fr nach Vereinbarung</p>
        <span className="mt-3 inline-flex rounded-full px-4 py-2 text-sm font-medium text-white" style={{ background: swatches[0] }}>
          Termin buchen
        </span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{why}</p>
      </div>
      <VariantFooter letter={letter} name={name} usedOn={usedOn} />
    </div>
  )
}
