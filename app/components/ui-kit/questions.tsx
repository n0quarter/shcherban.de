// Questions and change ideas shown inside the UI-kit categories (keyed by category id).
// Answers are saved as "<category>:<question id>" in design/ui-kit-feedback.json.
import type { Question } from "~/components/ui-kit/feedback"

export const questions: Record<string, Question[] | undefined> = {
  "colour-system": [
    { id: "yellow-amount", question: "Yellow is about 10 % today (one button, links in the footer). Keep it, or use more?", options: ["Keep ~10 %", "A bit more", "Less"] },
    { id: "footer-colour", question: "The footer is dark navy today. Keep it, or try a light or blue footer?", options: ["Keep navy", "Light footer", "Blue footer"] },
  ],
  palette: [{ id: "warmth", question: "Overall feel of the site?", options: ["Cooler / clinical", "As now", "Warmer / personal"] }],
  typography: [
    { id: "heading-weight", question: "Headings are semi-bold today. Try another weight?", options: ["As now", "Bolder", "Lighter"] },
    { id: "body-size", question: "Long texts (service pages) use 16 px. Larger for easier reading?", options: ["Keep 16 px", "18 px"] },
  ],
  diamond: [{ id: "where", question: "Where should the diamond appear?", options: ["Only small markers", "Markers + photo frames", "Signature element everywhere"] }],
  star: [{ id: "signature", question: "The star is not used on the site yet. Make it a recurring signature?", options: ["Yes", "Only in 1–2 places", "No"] }],
  eyebrow: [{ id: "use", question: "There are no eyebrows above section titles today. Add them?", options: ["On every section", "Only on the homepage", "No"] }],
  "title-accent": [{ id: "other-pages", question: "Use the chosen accent on other page titles too (e.g. Praxisteam, Leistungen)?", options: ["Yes", "Homepage only"] }],
  bullets: [{ id: "cv", question: "Use the same bullet in Ganna's CV on the Praxisteam page?", options: ["Yes", "No"] }],
  "icon-container": [{ id: "unify", question: "Two styles are in use today (square on services, circle on Kontakt). Make them one?", options: ["Yes, one style", "Keep both"] }],
  "photo-frame": [{ id: "one-frame", question: "Photos use three different frames today. One frame for all?", options: ["Yes, one frame", "Portraits differ from room photos", "No preference"] }],
  panel: [{ id: "blue-highlight", question: "The blue panel is used only for booking today. Allow one blue highlight per page (e.g. a quote)?", options: ["Yes", "Booking only"] }],
  background: [{ id: "where", question: "Where could a texture go?", options: ["Booking block", "Footer", "Nowhere"] }],
  quote: [{ id: "homepage", question: "Show one sentence from Ganna on the homepage?", options: ["Under the hero", "Before the booking block", "No"] }],
  "logo-ornament": [{ id: "footer", question: "Put the logo's star constellation into the dark footer?", options: ["Yes", "No"] }],
  hover: [{ id: "intensity", question: "Hover effects should be…", options: ["Subtle", "Noticeable"] }],
  header: [
    { id: "shrink", question: "The header shrinks when you scroll down. Keep that?", options: ["Keep", "Always small", "Always large"] },
    { id: "mark-only", question: "When scrolled, show only the logo mark (diamond) instead of the full logo?", options: ["Yes", "No"] },
  ],
  buttons: [{ id: "booking-content", question: "Booking buttons show a calendar icon, “Termin buchen” and the Doctolib logo. Keep all three?", options: ["Keep all", "Without icon", "Without Doctolib logo"] }],
}
