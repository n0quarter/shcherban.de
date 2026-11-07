import { isRouteErrorResponse, Link, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"

import type { Route } from "./+types/root"
import "./app.css"
import { SiteFooter } from "~/components/site-footer"
import { SiteHeader } from "~/components/site-header"
import { localizedPath, useLang } from "~/lib/i18n"

export function Layout({ children }: { children: React.ReactNode }) {
  const lang = useLang()

  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-svh flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const lang = useLang()
  const notFound = isRouteErrorResponse(error) && error.status === 404

  return (
    <div className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="font-heading text-4xl font-semibold">{notFound ? "404" : "Error"}</h1>
      <p className="mt-4 text-muted-foreground">
        {lang === "de" ? "Diese Seite gibt es leider nicht." : "Sorry, this page does not exist."}
      </p>
      <Link to={localizedPath(lang, "/")} className="mt-6 inline-block underline">
        {lang === "de" ? "Zur Startseite" : "Go to homepage"}
      </Link>
    </div>
  )
}
