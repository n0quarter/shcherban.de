import { MenuIcon } from "lucide-react"
import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router"

import { Button, buttonVariants } from "~/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "~/components/ui/sheet"
import { localizedPath, switchLanguagePath, useLang } from "~/lib/i18n"
import { bookingLabel, navigation, practice, siteName } from "~/lib/practice"
import { cn } from "~/lib/utils"

export function SiteHeader() {
  const lang = useLang()

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link to={localizedPath(lang, "/")} className="shrink-0">
          <img src="/logo.svg" alt={`${siteName[lang]} – ${practice.doctor}`} className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={localizedPath(lang, item.path)}
              end={item.path === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "bg-muted text-foreground"
                )
              }
            >
              {item.label[lang]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <a href={practice.bookingUrl} target="_blank" rel="noopener" className={cn(buttonVariants(), "hidden sm:inline-flex")}>
            {bookingLabel[lang]}
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
      <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" />}>
        <MenuIcon />
        <span className="sr-only">Menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="gap-1 p-6 pt-14">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        {navigation.map((item) => (
          <Link
            key={item.path}
            to={localizedPath(lang, item.path)}
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-2 text-base font-medium hover:bg-muted"
          >
            {item.label[lang]}
          </Link>
        ))}
        <a href={practice.bookingUrl} target="_blank" rel="noopener" className={cn(buttonVariants(), "mt-4")}>
          {bookingLabel[lang]}
        </a>
      </SheetContent>
    </Sheet>
  )
}
