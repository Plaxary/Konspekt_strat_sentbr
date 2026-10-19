import { ArrowRight, Users } from "lucide-react"

import { TelegramButton } from "@/components/telegram-button"
import { finalCta } from "@/lib/content"

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-title" className="py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          {finalCta.formulaTitle}
        </p>
        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-lg font-medium md:text-xl">
          {finalCta.formula.map((step, index) => (
            <span key={step} className="flex items-center gap-2">
              {index > 0 ? (
                <ArrowRight aria-hidden="true" className="size-4 text-primary" />
              ) : null}
              {step}
            </span>
          ))}
        </p>

        <h2
          id="final-cta-title"
          className="mt-12 text-3xl font-bold tracking-tight text-balance md:text-5xl"
        >
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-pretty text-muted-foreground">
          {finalCta.text}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <TelegramButton label="Подписаться на Telegram-канал" className="h-14 w-full px-6 text-base sm:w-auto sm:px-8 sm:text-lg"
          />
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users aria-hidden="true" className="size-4" />
            {finalCta.proof}
          </p>
        </div>
      </div>
    </section>
  )
}
