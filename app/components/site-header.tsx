import { CalendarCheckIcon, MenuIcon } from "lucide-react"
import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router"

import { DoctolibLogo } from "~/components/doctolib-logo"
import { Button, buttonVariants } from "~/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "~/components/ui/sheet"
import { localizedPath, switchLanguagePath, useLang } from "~/lib/i18n"
import { bookingLabel, navigation, practice, siteName } from "~/lib/practice"
import { cn } from "~/lib/utils"

export function SiteHeader() {
  const lang = useLang()

  return (
    <header className="border-b bg-background">
      {/* Phone: logo + burger. Tablet (md): compact one-row menu. Desktop (lg): full menu. Not sticky: it scrolls away with the page. */}
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between gap-3 px-4 xl:h-29">
        <Link to={localizedPath(lang, "/")} className="shrink-0">
          <img
            src="/logo.svg"
            alt={`${siteName[lang]} – ${practice.doctor}`}
            className="h-13 w-auto md:h-14.5 lg:h-17"
          />
        </Link>

        <nav className="hidden items-center md:flex lg:gap-1">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={localizedPath(lang, item.path)}
              end={item.path === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-2 py-2 text-base font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground lg:px-2.5",
                  isActive && "bg-muted text-foreground",
                  item.path === "/" && "hidden lg:block" // the logo links home on smaller screens
                )
              }
            >
              {item.label[lang]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 lg:gap-2">
          <LanguageSwitch />
          <a
            href={practice.bookingUrl}
            target="_blank"
            rel="noopener"
            aria-label={`${bookingLabel[lang]} – Doctolib`}
            className={cn(buttonVariants(), "hidden gap-2.5 px-4 sm:inline-flex")}
          >
            <CalendarCheckIcon className="md:max-lg:hidden" />
            <span>{bookingLabel[lang]}</span>
            <DoctolibLogo className="md:max-xl:hidden" />
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function LanguageSwitch() {
  const { pathname } = useLocation()
  const lang = useLang()
  const other = lang === "de" ? "en" : "de"

  return (
    <Link
      to={switchLanguagePath(pathname, other)}
      hrefLang={other}
      aria-label={other === "en" ? "English version" : "Deutsche Version"}
      className={buttonVariants({ variant: "ghost", size: "sm" })}
    >
      {other.toUpperCase()}
    </Link>
  )
}

function MobileMenu() {
  const lang = useLang()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
        <MenuIcon />
        <span className="sr-only">{lang === "en" ? "Menu" : "Menü"}</span>
      </SheetTrigger>
      <SheetContent side="right" className="gap-1 p-6 pt-16" closeLabel={lang === "en" ? "Close menu" : "Menü schließen"}>
        <SheetTitle className="sr-only">{lang === "en" ? "Menu" : "Menü"}</SheetTitle>
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={localizedPath(lang, item.path)}
            end={item.path === "/"}
            onClick={() => setOpen(false)}
            className={({ isActive }) => cn("rounded-xl px-3 py-2 text-base font-medium hover:bg-muted", isActive && "bg-muted text-primary")}
          >
            {item.label[lang]}
          </NavLink>
        ))}
        <a href={practice.bookingUrl} target="_blank" rel="noopener" className={cn(buttonVariants({ size: "lg" }), "mt-4 gap-2.5")}>
          <CalendarCheckIcon /> {bookingLabel[lang]}
          <DoctolibLogo />
        </a>
      </SheetContent>
    </Sheet>
  )
}
