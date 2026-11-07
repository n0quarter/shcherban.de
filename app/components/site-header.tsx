import { MenuIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router"

import { DoctolibLogo } from "~/components/doctolib-logo"
import { Button, buttonVariants } from "~/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "~/components/ui/sheet"
import { localizedPath, switchLanguagePath, useLang } from "~/lib/i18n"
import { bookingLabel, navigation, practice, siteName } from "~/lib/practice"
import { cn } from "~/lib/utils"

/** True once the page is scrolled down a little; the header then shrinks. */
function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > offset)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [offset])
  return scrolled
}

export function SiteHeader() {
  const lang = useLang()
  const scrolled = useScrolled()

  return (
    <header className={cn("sticky top-0 z-40 border-b bg-background/90 backdrop-blur transition-shadow", scrolled && "shadow-sm")}>
      {/* Phone: logo + burger. Tablet (md): compact one-row menu. Desktop (lg): full menu.
          At the top of the page the header is taller with a larger logo; it shrinks on scroll. */}
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 transition-[height] duration-300",
          scrolled ? "h-16" : "h-20 xl:h-24"
        )}
      >
        <Link to={localizedPath(lang, "/")} className="shrink-0">
          <img
            src="/logo.svg"
            alt={`${siteName[lang]} – ${practice.doctor}`}
            className={cn("w-auto transition-[height] duration-300", scrolled ? "h-8 lg:h-9 xl:h-10" : "h-11 md:h-12 lg:h-14")}
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
                  "rounded-full px-2.5 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground lg:px-3",
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
            <span>{bookingLabel[lang]}</span>
            <DoctolibLogo className="md:max-lg:hidden" />
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
        <a href={practice.bookingUrl} target="_blank" rel="noopener" className={cn(buttonVariants({ size: "lg" }), "mt-4 gap-2.5")}>
          {bookingLabel[lang]}
          <DoctolibLogo />
        </a>
      </SheetContent>
    </Sheet>
  )
}
