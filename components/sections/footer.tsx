import { Flame, Send } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { footer } from "@/lib/content"
import { navLinks, site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t bg-muted/60">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="flex items-center gap-2 font-semibold">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Flame aria-hidden="true" className="size-4" />
              </span>
              {site.brand}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{footer.disclaimer}</p>
          </div>

          <nav aria-label="Навигация в подвале">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={site.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram-канал"
            className="flex size-10 items-center justify-center rounded-full border bg-card text-primary transition-colors hover:bg-accent"
          >
            <Send aria-hidden="true" className="size-5" />
          </a>
        </div>

        <Separator className="my-8" />

        <p className="text-sm text-muted-foreground">
          © {site.year} {site.brand}. Все права защищены.
        </p>
      </div>
    </footer>
  )
}
