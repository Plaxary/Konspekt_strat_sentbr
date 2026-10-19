"use client"

import { Menu, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks, site } from "@/lib/site"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Открыть меню">
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-4/5">
        <SheetHeader>
          <SheetTitle>{site.brand}</SheetTitle>
          <SheetDescription>Конспект эфира: сентябрь Огненного Петуха</SheetDescription>
        </SheetHeader>
        <ul className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <SheetClose asChild>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-lg font-medium hover:bg-accent"
                >
                  {link.label}
                </a>
              </SheetClose>
            </li>
          ))}
        </ul>
        <div className="mt-auto p-4">
          <Button asChild size="lg" className="w-full font-semibold">
            <a href={site.telegramUrl} target="_blank" rel="noopener noreferrer">
              <Send aria-hidden="true" />
              Подписаться на Telegram-канал
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
