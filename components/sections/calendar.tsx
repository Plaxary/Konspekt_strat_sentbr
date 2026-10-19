import { Sparkles, TriangleAlert } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import {
  type CalendarDay,
  calendarDays,
  calendarNotes,
  riskLabel,
} from "@/lib/charts-data"
import { cn } from "@/lib/utils"

const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

const monthShort = { 9: "сен", 10: "окт" } as const

function dateLabel(day: CalendarDay) {
  return `${String(day.day).padStart(2, "0")}.${String(day.month).padStart(2, "0")}`
}

function describe(day: CalendarDay) {
  const parts = [`${day.day} ${monthShort[day.month]}`]
  if (day.risk) {
    parts.push(riskLabel[day.risk.type] + (day.risk.hours ? `, ${day.risk.hours}` : ""))
  }
  if (day.activation) {
    parts.push(
      `активация ${day.activation.combo} в секторе ${day.activation.sector}` +
        (day.activation.flagged ? ` (${calendarNotes.flagged.toLowerCase()})` : ""),
    )
  }
  return parts.join(". ")
}

function DayCell({ day }: { day: CalendarDay }) {
  const isFirstOfMonth = day.day === 1 || (day.month === 9 && day.day === 7)
  return (
    <li
      className={cn(
        "relative flex aspect-square flex-col rounded-lg border p-1 text-left sm:p-2",
        day.risk ? "border-bad/40 bg-bad-soft" : "bg-card",
      )}
    >
      <span className="sr-only">{describe(day)}</span>
      <span
        aria-hidden="true"
        className={cn(
          "text-sm font-semibold sm:text-base",
          day.risk && "text-bad",
        )}
      >
        {day.day}
        {isFirstOfMonth ? (
          <span className="ml-0.5 text-[10px] font-normal text-muted-foreground">
            {monthShort[day.month]}
          </span>
        ) : null}
      </span>
      {day.risk ? (
        <span
          aria-hidden="true"
          className="mt-auto hidden text-[10px] leading-tight text-bad sm:block"
        >
          {riskLabel[day.risk.type]}
        </span>
      ) : null}
      {day.activation ? (
        <span
          aria-hidden="true"
          className={cn(
            "absolute top-1.5 right-1.5 hidden rounded-full px-1 text-[10px] font-semibold sm:block",
            day.activation.flagged
              ? "border border-good text-good"
              : "bg-good text-primary-foreground",
          )}
        >
          {day.activation.combo}
        </span>
      ) : null}
      {day.activation ? (
        <span
          aria-hidden="true"
          className={cn(
            "absolute right-1 bottom-1 size-2.5 rounded-full sm:hidden",
            day.activation.flagged ? "border-2 border-good" : "bg-good",
          )}
        />
      ) : null}
    </li>
  )
}

export function Calendar() {
  const riskDays = calendarDays.filter((day) => day.risk)

  return (
    <section
      id="calendar"
      aria-labelledby="calendar-title"
      className="scroll-mt-16 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="calendar-title"
          eyebrow="Календарь"
          title="Календарь месяца: когда беречься, когда активировать"
          intro="Месяц Огненного Петуха длится с 07.09 по 07.10.2026. Красным — неблагоприятные дни, зелёным — даты активаций Фэншуй."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="self-start rounded-2xl border bg-card p-3 sm:p-6">
            <div aria-hidden="true" className="grid grid-cols-7 gap-1 pb-2 text-center text-xs text-muted-foreground sm:gap-2">
              {weekdays.map((weekday) => (
                <span key={weekday}>{weekday}</span>
              ))}
            </div>
            <ol aria-label="Дни месяца Петуха" className="grid grid-cols-7 gap-1 sm:gap-2">
              {calendarDays.map((day) => (
                <DayCell key={dateLabel(day)} day={day} />
              ))}
            </ol>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="size-3 rounded-sm border border-bad/40 bg-bad-soft" />
                неблагоприятный день
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-good sm:hidden" />
                <span aria-hidden="true" className="hidden rounded-full bg-good px-1 text-[9px] font-semibold text-primary-foreground sm:inline">9-9</span>
                активация богатства
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="size-2.5 rounded-full border-2 border-good sm:hidden" />
                <span aria-hidden="true" className="hidden rounded-full border border-good px-1 text-[9px] font-semibold text-good sm:inline">4-1</span>
                {calendarNotes.flagged.toLowerCase()}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <TriangleAlert aria-hidden="true" className="size-5 text-bad" />
                Дни повышенной осторожности
              </h3>
              <ul className="mt-4 space-y-2.5">
                {riskDays.map((day) => (
                  <li key={dateLabel(day)} className="flex gap-3 text-sm">
                    <span className="w-12 shrink-0 font-semibold text-bad">{dateLabel(day)}</span>
                    <span>
                      {day.risk ? riskLabel[day.risk.type] : null}
                      {day.risk?.hours ? (
                        <span className="block text-muted-foreground">{day.risk.hours}</span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="rounded-2xl bg-bad-soft p-4 text-sm font-medium text-bad">
              {calendarNotes.risk}
            </p>
            <p className="flex gap-2 rounded-2xl border bg-card p-4 text-sm text-muted-foreground">
              <Sparkles aria-hidden="true" className="size-4 shrink-0 text-good" />
              Что значат комбинации 4-1, 9-9 и где ставить активатор — в разделе «Фэншуй».
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
