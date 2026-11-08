// What each UI-kit category means for the live site today. Keep this up to date when decisions are applied.
export type CategoryStatus = { state: "live" | "partial" | "idea"; detail: string }

export const categoryStatus: Record<string, CategoryStatus> = {
  "colour-system": {
    state: "partial",
    detail:
      "The two brand colours, navy, pale blue and the button/link contrasts are live. Not everything follows the rules yet: long texts (service pages, Praxisteam, Impressum) use the plain grey of the text plugin, footer text is white at 80 %. The tonal scales are reference only.",
  },
  palette: { state: "partial", detail: "A is the live palette. B–E are ideas." },
  typography: {
    state: "partial",
    detail: "These are the main sizes in use. Not unified yet: long texts are 16 px grey on service pages but 18 px on Praxisteam; labels and the footer use a few extra sizes.",
  },
  diamond: {
    state: "partial",
    detail: "Live as a small CSS diamond: blue in the service groups (A), yellow on Praxisteam (E), and as a faint watermark in the footer. B, C, D are ideas.",
  },
  star: { state: "idea", detail: "The star is not used anywhere on the site yet." },
  eyebrow: {
    state: "partial",
    detail: "No eyebrows above section titles today. D is live as a white label on blue (“Online-Termin” on Kontakt); the Praxisteam CV headings are similar to C (yellow diamond + line). A and B are ideas.",
  },
  "title-accent": { state: "partial", detail: "A is live on the Startseite headline. B, C, D are ideas." },
  divider: { state: "partial", detail: "A (space only) is live between sections; E (thin line) on the Impressum. B, C, D are ideas." },
  bullets: {
    state: "partial",
    detail: "C (small yellow star) is live on the 4 service pages that have lists (Krebsvorsorge, Impfungen, Mädchensprechstunde, Schwangerenbetreuung) and the Impressum. A, B, D, E are ideas.",
  },
  "icon-container": {
    state: "partial",
    detail: "Three styles are live at the same time: A on the services (fills blue on hover), C on the Kontakt cards, E (bare icon) on the Kontakt opening hours. B and D are ideas.",
  },
  "photo-frame": {
    state: "partial",
    detail: "Three frames are live: A (Startseite portrait), D (Praxis, Leistungen, Praxisteam – with three different corner radii) and E (team avatars). B and C are ideas.",
  },
  panel: {
    state: "partial",
    detail: "A and B are live. C is live as the footer (blue + watermark diamond); the Kontakt booking panel is plain blue. D is an idea.",
  },
  background: { state: "partial", detail: "Only A (plain colour blocks) is live. All textures are ideas." },
  "section-title": { state: "partial", detail: "A is live on the Startseite sections. B–E are ideas." },
  quote: { state: "idea", detail: "No quotes on the site yet." },
  "logo-ornament": {
    state: "partial",
    detail: "Only the faint watermark diamond (without stars) is live, in the footer. Everything else is an idea; the full logo appears only in the header.",
  },
  hover: {
    state: "partial",
    detail: "A is live on the service list. Other small hovers are live too: photo zoom, arrow nudge, footer underline, blue nav text. B, C, D are ideas.",
  },
  header: { state: "live", detail: "Describes today's header on all pages." },
  buttons: { state: "live", detail: "All shown buttons and links are live." },
}
