import { Flame } from "lucide-react"

import { MobileNav } from "@/components/sections/mobile-nav"
import { TelegramButton } from "@/components/telegram-button"
import { navLinks, site } from "@/lib/site"

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <nav
        aria-label="Основная навигация"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6"
      >
        <a href="#top" className="flex min-w-0 items-center gap-2 font-semibold">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Flame aria-hidden="true" className="size-4" />
          </span>
          <span className="truncate">{site.brand}</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <TelegramButton label="Подписаться" size="default" className="hidden sm:inline-flex" />
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
