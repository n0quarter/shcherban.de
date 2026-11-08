// Dev-server-only endpoint for the /ui-kit page: reads and writes design/ui-kit-feedback.json,
// where the owner's picks, comments and answers are stored (so Claude Code can read them from disk).
import fs from "node:fs"
import path from "node:path"
import type { Plugin } from "vite"

export const FEEDBACK_ENDPOINT = "/__ui-kit-feedback"
const feedbackFile = path.resolve("design/ui-kit-feedback.json")

export function uiKitFeedback(): Plugin {
  return {
    name: "ui-kit-feedback",
    apply: "serve", // never part of a production build
    configureServer(server) {
      server.middlewares.use(FEEDBACK_ENDPOINT, (request, response) => {
        if (request.method === "GET") {
          response.setHeader("content-type", "application/json")
          response.end(fs.existsSync(feedbackFile) ? fs.readFileSync(feedbackFile, "utf8") : "{}")
          return
        }
        if (request.method === "PUT") {
          let body = ""
          request.on("data", (chunk) => (body += chunk))
          request.on("end", () => {
            fs.mkdirSync(path.dirname(feedbackFile), { recursive: true })
            fs.writeFileSync(feedbackFile, JSON.stringify(JSON.parse(body), null, 2) + "\n")
            response.end("ok")
          })
          return
        }
        response.statusCode = 405
        response.end()
      })
    },
  }
}
