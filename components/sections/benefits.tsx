import { Info } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { TelegramButton } from "@/components/telegram-button"
import { Badge } from "@/components/ui/badge"
import { spheres } from "@/lib/content"

export function Benefits() {
  return (
    <section
      id="spheres"
      aria-labelledby="spheres-title"
      className="scroll-mt-16 bg-muted/60 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="spheres-title"
          eyebrow={spheres.eyebrow}
          title={spheres.title}
          intro={spheres.intro}
        />

        <div className="mt-12 grid gap-6 rounded-2xl border bg-card p-6 md:grid-cols-2 md:p-8">
          <div>
            <h3 className="text-xl font-semibold">Как читать карту: 3 шага</h3>
            <ol className="mt-4 space-y-3">
              {spheres.readSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Что показывают факторы</h3>
            <dl className="mt-4 grid grid-cols-2 gap-3">
              {spheres.legend.map((entry) => (
                <div key={entry.title} className="rounded-xl bg-muted p-3">
                  <dt className="font-semibold">{entry.title}</dt>
                  <dd className="text-sm text-muted-foreground">{entry.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {spheres.items.map((sphere) => (
            <article key={sphere.title} className="flex flex-col rounded-2xl border bg-card p-6 md:p-8">
              <sphere.icon aria-hidden="true" className="size-10 text-primary" />
              <h3 className="mt-4 text-2xl font-semibold">{sphere.title}</h3>
              <Badge variant="secondary" className="mt-2 h-auto text-wrap">
                {sphere.badge}
              </Badge>
              <p className="mt-4 font-medium">{sphere.lead}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
                {sphere.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
              {"note" in sphere ? (
                <p className="mt-4 flex gap-2 text-xs text-muted-foreground">
                  <Info aria-hidden="true" className="size-4 shrink-0" />
                  {sphere.note}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-primary p-8 text-center text-primary-foreground md:p-12">
          <h3 className="text-2xl font-semibold text-balance md:text-3xl">{spheres.ctaTitle}</h3>
          <p className="max-w-xl text-primary-foreground/85">{spheres.ctaText}</p>
          <TelegramButton
            label={spheres.cta}
            className="h-12 bg-background px-6 text-base text-foreground shadow-none hover:bg-background/90"
          />
        </div>
      </div>
    </section>
  )
}
