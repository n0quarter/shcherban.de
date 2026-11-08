// What each UI-kit category means for the live site today. Keep this up to date when decisions are applied.
export type CategoryStatus = { state: "live" | "partial" | "idea"; detail: string }

export const categoryStatus: Record<string, CategoryStatus> = {
  "colour-system": {
    state: "live",
    detail: "Describes today's site: these brand colours, the 60·30·10 split and the contrast values are what all pages use now. Only the tonal scales are a reference (just a few steps are used).",
  },
  palette: { state: "partial", detail: "A is the live palette. B, C and D are ideas." },
  typography: { state: "live", detail: "Exactly today's sizes and weights on all pages." },
  diamond: { state: "partial", detail: "A is live as small markers in the service groups (Startseite, Leistungen). B, C, D are ideas." },
  star: { state: "idea", detail: "The star is not used anywhere on the site yet." },
  eyebrow: { state: "partial", detail: "No eyebrows above section titles today. C (with a yellow diamond) is live on the Praxisteam CV headings, D on the “Termin” label in booking blocks. A and B are ideas." },
  "title-accent": { state: "partial", detail: "A is live on the Startseite headline. B, C, D are ideas." },
  divider: { state: "partial", detail: "A (space only) is live on all pages. B, C, D are ideas." },
  bullets: { state: "partial", detail: "A (plain dot) is live on all Leistungen pages. B, C, D are ideas." },
  "icon-container": { state: "partial", detail: "Two styles are live at the same time: A on services, C on Kontakt. B and D are ideas." },
  "photo-frame": { state: "partial", detail: "Three frames are live: A (Startseite portrait), B (team avatars), D (Praxis, Leistungen, Praxisteam). C is an idea." },
  panel: { state: "partial", detail: "A, B and C are live (service groups, Kontakt, booking block). D is an idea." },
  background: { state: "partial", detail: "Only A (plain) is live. All textures are ideas." },
  "section-title": { state: "partial", detail: "A is live on the Startseite sections. B, C, D are ideas." },
  quote: { state: "idea", detail: "No quotes on the site yet." },
  "logo-ornament": { state: "idea", detail: "Not used yet; only the full logo appears (header)." },
  hover: { state: "partial", detail: "A is live on the service list. B, C, D are ideas." },
  header: { state: "live", detail: "Describes today's header on all pages." },
  buttons: { state: "live", detail: "All shown buttons and links are live." },
}
