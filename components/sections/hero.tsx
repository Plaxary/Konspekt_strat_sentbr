import Image from "next/image"
import { ArrowDown } from "lucide-react"

import fireRooster from "@/public/images/fire-rooster.jpg"
import { TelegramButton } from "@/components/telegram-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { hero } from "@/lib/content"

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-accent/70 via-background to-background"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:pt-20 lg:pb-16">
        <div className="min-w-0">
          <Badge
            variant="outline"
            className="h-auto border-primary/30 bg-background/70 py-1 whitespace-normal text-accent-foreground"
          >
            {hero.badge}
          </Badge>
          <h1
            id="hero-title"
            className="mt-6 text-5xl font-bold tracking-tight text-balance break-words md:text-7xl"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TelegramButton label="Подписаться на Telegram-канал" className="h-12 px-6 text-base" />
            <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
              <a href="#problem">
                Читать конспект
                <ArrowDown aria-hidden="true" />
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{hero.note}</p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Image
            src={fireRooster}
            alt="Огненный Петух — символ месяца 07.09–07.10.2026"
            preload
            placeholder="blur"
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 448px, 100vw"
            className="aspect-square w-full rounded-3xl object-cover shadow-2xl shadow-primary/20"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            丁酉 · Огненный Петух
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="rounded-2xl border border-primary/20 bg-card p-6 shadow-xl shadow-primary/5 md:p-8">
          <h2 className="font-heading text-2xl font-semibold">{hero.summaryTitle}</h2>
          <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {hero.summary.map((item, index) => (
              <li key={item.title} className="flex gap-3 lg:flex-col">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
