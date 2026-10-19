import { Droplets, Flame, ShieldAlert } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { activationRules, flyingStars, wealthCombos } from "@/lib/charts-data"
import { cn } from "@/lib/utils"

const toneClass = {
  good: "border-good/40 bg-good-soft",
  bad: "border-bad/40 bg-bad-soft",
  neutral: "bg-card",
} as const

const toneLabel = {
  good: "благоприятно",
  bad: "неблагоприятно",
  neutral: "",
} as const

function StarsGrid() {
  return (
    <figure>
      <p aria-hidden="true" className="mb-2 text-center text-xs font-medium text-muted-foreground">
        ↑ Юг
      </p>
      <ul className="grid grid-cols-3 gap-2">
        {flyingStars.map((cell) => (
          <li
            key={cell.id}
            className={cn(
              "flex aspect-square flex-col rounded-xl border p-2 sm:p-3",
              toneClass[cell.tone],
            )}
          >
            <span className="text-xs font-medium text-muted-foreground">{cell.name}</span>
            <span
              className={cn(
                "font-heading text-3xl font-bold sm:text-4xl",
                cell.tone === "good" && "text-good",
                cell.tone === "bad" && "text-bad",
              )}
            >
              {cell.stars}
            </span>
            {cell.text ? (
              <span className="mt-auto hidden text-xs leading-tight sm:block">{cell.text}</span>
            ) : null}
            {toneLabel[cell.tone] ? <span className="sr-only">{toneLabel[cell.tone]}</span> : null}
          </li>
        ))}
      </ul>
      <figcaption className="mt-3 text-xs text-muted-foreground">
        Летящие звёзды сентября по секторам квартиры. Зелёный — благоприятно, красный — осторожно.
      </figcaption>
    </figure>
  )
}

export function FengShui() {
  return (
    <section id="fengshui" aria-labelledby="fengshui-title" className="scroll-mt-16 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="fengshui-title"
          eyebrow="Фэншуй"
          title="Фэншуй сентября: сильные и опасные сектора"
          intro="Юго-Восток, Восток и Север поддерживают. Юг и Северо-Запад требуют осторожности."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
          <StarsGrid />
          <ul className="grid gap-2 sm:hidden">
            {flyingStars
              .filter((cell) => cell.text)
              .map((cell) => (
                <li key={cell.id} className="flex gap-3 text-sm">
                  <span
                    className={cn(
                      "w-20 shrink-0 font-semibold",
                      cell.tone === "good" && "text-good",
                      cell.tone === "bad" && "text-bad",
                    )}
                  >
                    {cell.name} {cell.stars}
                  </span>
                  {cell.text}
                </li>
              ))}
          </ul>

          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold">Как ставить активатор богатства</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {activationRules.map((rule) => (
                <li key={rule} className="flex gap-2">
                  <span aria-hidden="true" className="text-primary">●</span>
                  {rule}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Droplets aria-hidden="true" className="size-4 text-el-water" /> Вода
              </span>
              <span className="flex items-center gap-1.5">
                <Flame aria-hidden="true" className="size-4 text-el-fire" /> Огонь
              </span>
            </div>
            <p className="mt-4 flex gap-2 rounded-lg bg-bad-soft px-3 py-2 text-sm text-bad">
              <ShieldAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              Не оставляйте зажжённую свечу без присмотра.
            </p>
          </div>
        </div>

        <h3 className="mt-16 text-2xl font-semibold md:text-3xl">
          Звёзды быстрого богатства: даты активаций
        </h3>
        <p className="mt-2 text-muted-foreground">
          Комбинации, которые дают помощь, новые навыки и деньги. * — в дне есть неблагоприятный фактор.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {wealthCombos.map((item) => (
            <article key={item.combo} className="flex flex-col rounded-2xl border bg-card p-6">
              <p className="font-heading text-3xl font-bold text-good">{item.combo}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              {item.dates.length > 0 ? (
                <>
                  <p className="mt-4 text-sm">
                    <span className="font-semibold">{item.sector}</span> · {item.activator}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {item.dates.map((date) => (
                      <li
                        key={date}
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-sm font-medium",
                          date.endsWith("*")
                            ? "border border-good text-good"
                            : "bg-good-soft text-good",
                        )}
                      >
                        {date}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="mt-4 text-sm font-medium text-muted-foreground">В сентябре нет дат</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
