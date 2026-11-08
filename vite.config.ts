import { reactRouter } from "@react-router/dev/vite"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

import { uiKitFeedback } from "./tooling/ui-kit-feedback"

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [tailwindcss(), reactRouter(), uiKitFeedback()],
  // design/ holds the UI-kit feedback file; saving it must not reload the page.
  server: { watch: { ignored: ["**/design/**"] } },
})
