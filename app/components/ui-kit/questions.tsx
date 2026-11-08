// Questions and change ideas shown inside the UI-kit categories (keyed by category id).
// Answers are saved as "<category>:<question id>" in design/ui-kit-feedback.json.
import type { Question } from "~/components/ui-kit/feedback"

export const questions: Record<string, Question[] | undefined> = {
  "colour-system": [
    { id: "yellow-amount", question: "Yellow is about 10 % today (one button, links in the footer). Keep it, or use more?", options: ["Keep ~10 %", "A bit more", "Less"] },
    { id: "long-text-colour", question: "Long texts use plain grey instead of our navy. Switch them to the brand colours?", options: ["Yes, navy text", "Keep grey"] },
  ],
  palette: [{ id: "warmth", question: "Overall feel of the site?", options: ["Cooler / clinical", "As now", "Warmer / personal"] }],
  typography: [
    { id: "heading-weight", question: "Headings are semi-bold today. Try another weight?", options: ["As now", "Bolder", "Lighter"] },
    { id: "body-size", question: "Long texts are 16 px on service pages and 18 px on Praxisteam. One size everywhere?", options: ["16 px", "18 px", "Keep as is"] },
  ],
  diamond: [{ id: "where", question: "Where should the diamond appear?", options: ["Only small markers", "Markers + photo frames", "Signature element everywhere"] }],
  star: [{ id: "signature", question: "The star is not used on the site yet. Make it a recurring signature?", options: ["Yes", "Only in 1–2 places", "No"] }],
  eyebrow: [
    { id: "use", question: "There are no eyebrows above section titles today. Add them?", options: ["On every section", "Only on the homepage", "No"] },
    { id: "one-style", question: "Small labels come in 4 styles today (door sign, CV headings, Kontakt labels, footer). One style everywhere?", options: ["Yes, one style", "Keep as is"] },
    { id: "service-group", question: "Show the service group (e.g. “Vorsorge”) as a small label above each service page title?", options: ["Yes", "No"] },
  ],
  "title-accent": [{ id: "other-pages", question: "Use the chosen accent on other page titles too (e.g. Praxisteam, Leistungen)?", options: ["Yes", "Homepage only"] }],
  bullets: [{ id: "cv-rows", question: "Use CV-style rows (label + text, thin line between) for lists on service pages, like on Praxisteam?", options: ["Yes", "No, keep bullets"] }],
  "icon-container": [{ id: "unify", question: "Three styles are in use (square on services, circle and bare icon on Kontakt). Use one style everywhere?", options: ["Yes, one style", "Keep both"] }],
  "photo-frame": [
    { id: "one-frame", question: "Photos use three different frames today. One frame for all?", options: ["Yes, one frame", "Portraits differ from room photos", "No preference"] },
    { id: "captions", question: "Photo captions sit on the photo (Startseite) or below it (Praxis). One way?", options: ["On the photo", "Below the photo", "Keep as is"] },
  ],
  panel: [
    { id: "blue-highlight", question: "The blue panel is used only for booking today. Allow one blue highlight per page (e.g. a quote)?", options: ["Yes", "Booking only"] },
    { id: "booking-panels", question: "Booking panels: watermark diamond (Startseite) or plain blue (Kontakt)?", options: ["Watermark on both", "Plain on both", "Keep as is"] },
    { id: "notes", question: "Highlight notes like “Empfehlung” or “von den Kassen erstattet” on service pages as small pale-blue boxes?", options: ["Yes", "No"] },
  ],
  background: [{ id: "where", question: "Where could a texture go?", options: ["Kontakt booking panel", "Footer", "Nowhere"] }],
  quote: [
    { id: "homepage", question: "Show one sentence from Ganna on the site?", options: ["End of the homepage", "On Praxisteam", "No"] },
    { id: "letter", question: "The long welcome letter sits in the homepage hero. Move it into its own “letter with signature” block further down?", options: ["Yes, own block", "Keep in the hero"] },
  ],
  "logo-ornament": [
    { id: "footer", question: "Put the logo's star constellation into the blue footer (next to the watermark diamond)?", options: ["Yes", "No"] },
    { id: "real-mark", question: "Use the real logo mark (E) somewhere – e.g. scrolled header or footer?", options: ["Scrolled header", "Footer", "Nowhere"] },
  ],
  hover: [{ id: "intensity", question: "Hover effects should be…", options: ["Subtle", "Noticeable"] }],
  header: [
    { id: "shrink", question: "The header shrinks when you scroll down. Keep that?", options: ["Keep", "Always small", "Always large"] },
    { id: "mark-only", question: "When scrolled, show only the logo mark (diamond) instead of the full logo?", options: ["Yes", "No"] },
    { id: "phone-booking", question: "On phones the booking button is hidden in the header bar (only in the menu). Show it in the bar too?", options: ["Yes", "No"] },
  ],
  buttons: [
    { id: "booking-content", question: "Booking buttons show a calendar icon, “Termin buchen” and the Doctolib logo. Keep all three?", options: ["Keep all", "Without icon", "Without Doctolib logo"] },
    { id: "booking-size", question: "Booking buttons have three heights today (36, 40, 48 px). One size, at least 44 px (easy to tap)?", options: ["Yes, one size", "Keep as is"] },
  ],
}
