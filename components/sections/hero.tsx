import { ArrowDown } from "lucide-react"

import { TelegramButton } from "@/components/telegram-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { hero } from "@/lib/content"

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-accent/70 via-background to-background"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:pt-24 lg:pb-20">
        <div>
          <Badge
            variant="outline"
            className="h-auto border-primary/30 bg-background/70 py-1 text-wrap text-accent-foreground"
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

        <Card className="rounded-2xl border-primary/20 shadow-xl shadow-primary/5">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">{hero.summaryTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {hero.summary.map((item, index) => (
                <li key={item.title} className="flex gap-4">
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
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
