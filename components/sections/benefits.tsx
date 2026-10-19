import { Info } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { TelegramButton } from "@/components/telegram-button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { qimenCompass, qimenOverview, qimenReference } from "@/lib/charts-data"
import { spheres } from "@/lib/content"
import { cn } from "@/lib/utils"

function Compass() {
  return (
    <figure>
      <p aria-hidden="true" className="mb-2 hidden text-center text-xs font-medium text-muted-foreground md:block">
        ↑ Юг
      </p>
      <ul className="grid gap-3 md:grid-cols-3">
        {qimenCompass.map((cell) =>
          "name" in cell ? (
            <li key={cell.id} className="flex flex-col rounded-2xl border bg-card p-5">
              <p className="font-heading text-lg font-semibold">{cell.name}</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {cell.tags.map((tag) => (
                  <li key={tag}>
                    <Badge variant="secondary">{tag}</Badge>
                  </li>
                ))}
              </ul>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {cell.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ) : (
            <li
              key={cell.id}
              aria-hidden="true"
              className="hidden flex-col items-center justify-center rounded-2xl bg-primary p-5 text-center text-primary-foreground md:flex"
            >
              <span className="font-heading text-5xl font-bold">丁酉</span>
              <span className="mt-2 text-sm">Сентябрь 2026</span>
            </li>
          ),
        )}
      </ul>
      <figcaption className="mt-3 text-xs text-muted-foreground">
        Направления — от центра вашей квартиры или офиса. Юг на карте Ци Мэнь сверху.
      </figcaption>
    </figure>
  )
}

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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {qimenOverview.map((card) => (
            <article key={card.title} className="rounded-2xl border bg-card p-6 md:p-8">
              <Badge className="h-auto whitespace-normal">{card.badge}</Badge>
              <h3 className="mt-3 text-xl font-semibold">{card.title}</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 rounded-2xl border bg-card p-6 md:grid-cols-2 md:p-8">
          <div>
            <h3 className="text-xl font-semibold">Как читать свою карту: 3 шага</h3>
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
            <h3 className="text-xl font-semibold">Справочник факторов</h3>
            <Accordion type="single" collapsible className="mt-2">
              {qimenReference.map((group) => (
                <AccordionItem key={group.id} value={group.id}>
                  <AccordionTrigger className="text-base">{group.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item.char} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className={cn(
                              "w-6 shrink-0 text-center text-lg leading-6",
                              "good" in item && item.good ? "text-good" : "text-muted-foreground",
                            )}
                          >
                            {item.char}
                          </span>
                          <span>
                            <span className="font-semibold">{item.name}</span>
                            {"good" in item && item.good ? (
                              <Badge variant="outline" className="ml-2 border-good/40 text-good">
                                хорошо
                              </Badge>
                            ) : null}
                            <span className="block text-muted-foreground">{item.text}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {spheres.items.map((sphere) => (
            <article key={sphere.title} className="flex flex-col rounded-2xl border bg-card p-6 md:p-8">
              <sphere.icon aria-hidden="true" className="size-10 text-primary" />
              <h3 className="mt-4 text-2xl font-semibold">{sphere.title}</h3>
              <Badge variant="secondary" className="mt-2 h-auto whitespace-normal">
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

        <h3 className="mt-16 text-2xl font-semibold md:text-3xl">
          Карта направлений: куда направить усилия в сентябре
        </h3>
        <p className="mt-2 mb-6 text-muted-foreground">
          Фокус месяца по сторонам света из карты Ци Мэнь сентября.
        </p>
        <Compass />

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
