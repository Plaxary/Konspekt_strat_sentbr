import { ArrowDown, ArrowUp, CircleAlert, Eye } from "lucide-react"

import { ElementGlyph, elementBg, elementText } from "@/components/element-glyph"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import {
  baziMonth,
  elementLabel,
  hiddenPillar,
  interactions,
  transformations,
} from "@/lib/charts-data"
import { cn } from "@/lib/utils"

function PillarsChart() {
  return (
    <figure className="self-start rounded-2xl border bg-card p-4 md:p-6">
      <table className="w-full table-fixed border-collapse text-center">
        <caption className="sr-only">
          Карта Ба Цзы месяца: четыре столпа — час, день, месяц, год
        </caption>
        <thead>
          <tr>
            {baziMonth.pillars.map((pillar) => (
              <th
                key={pillar.label}
                scope="col"
                className={cn(
                  "pb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase",
                  pillar.label === "Месяц" && "text-primary",
                )}
              >
                {pillar.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {baziMonth.pillars.map((pillar) => (
              <td
                key={pillar.label}
                className={cn(
                  "border-x border-t px-1 pt-3 pb-1",
                  pillar.label === "Месяц" && "bg-accent/60",
                )}
              >
                <ElementGlyph {...pillar.stem} className="block text-4xl md:text-5xl" />
                <span className="mt-1 block text-[11px] leading-tight text-muted-foreground md:text-xs">
                  {pillar.stem.name}
                </span>
              </td>
            ))}
          </tr>
          <tr>
            {baziMonth.pillars.map((pillar) => (
              <td
                key={pillar.label}
                className={cn(
                  "border-x px-1 pt-2 pb-3",
                  pillar.label === "Месяц" && "bg-accent/60",
                )}
              >
                <ElementGlyph {...pillar.branch} className="block text-4xl md:text-5xl" />
                <span className="mt-1 block text-[11px] leading-tight text-muted-foreground md:text-xs">
                  {pillar.branch.name}
                </span>
              </td>
            ))}
          </tr>
          <tr>
            {baziMonth.pillars.map((pillar) => (
              <td
                key={pillar.label}
                className={cn(
                  "border-x border-b px-1 py-2",
                  pillar.label === "Месяц" && "bg-accent/60",
                )}
              >
                <span className="flex flex-col items-center gap-0.5 text-lg">
                  {pillar.hidden.map((glyph) => (
                    <ElementGlyph key={glyph.char} {...glyph} className="font-normal" />
                  ))}
                </span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <figcaption className="mt-3 text-xs text-muted-foreground">
        Нижний ряд — скрытые небесные стволы. Цвет иероглифа — стихия.
      </figcaption>
    </figure>
  )
}

function ElementBalance() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {baziMonth.balance.map((item) => (
        <li
          key={item.element}
          className={cn(
            "flex items-center gap-3 rounded-xl border p-3",
            item.tone === "weak" ? "border-dashed bg-muted/50" : "bg-card",
          )}
        >
          <span
            className={cn(
              "size-3 shrink-0 rounded-full",
              elementBg[item.element],
              item.tone === "weak" && "opacity-40",
            )}
            aria-hidden="true"
          />
          <span className="text-sm">
            <span className={cn("font-semibold", elementText[item.element])}>
              {elementLabel[item.element]}
            </span>{" "}
            — {item.status}
          </span>
          {item.tone === "strong" ? (
            <ArrowUp aria-label="сильный" className="ml-auto size-4 shrink-0 text-good" />
          ) : (
            <ArrowDown aria-label="слабый" className="ml-auto size-4 shrink-0 text-bad" />
          )}
        </li>
      ))}
    </ul>
  )
}

function InteractionsTable() {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border bg-card">
      <table className="hidden w-full text-left md:table">
        <caption className="sr-only">
          Взаимодействие знаков вашей карты с Петухом сентября
        </caption>
        <thead className="bg-accent/60 text-sm">
          <tr>
            <th scope="col" className="px-6 py-3 font-semibold">Знак в вашей карте</th>
            <th scope="col" className="px-6 py-3 font-semibold">Отношения</th>
            <th scope="col" className="px-6 py-3 font-semibold">Реакция</th>
            <th scope="col" className="px-6 py-3 font-semibold">Действия</th>
          </tr>
        </thead>
        <tbody>
          {interactions.map((row) => (
            <tr key={row.relation + row.signs[0].char} className="border-t align-top">
              <th scope="row" className="px-6 py-4 font-semibold">
                <span className="flex flex-col gap-1">
                  {row.signs.map((sign) => (
                    <span key={sign.char}>
                      {sign.name} <ElementGlyph char={sign.char} element={sign.element} />
                    </span>
                  ))}
                </span>
              </th>
              <td className="px-6 py-4">
                <Badge variant="secondary">{row.relation}</Badge>
              </td>
              <td className="px-6 py-4 text-muted-foreground">{row.reaction}</td>
              <td className="px-6 py-4">{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="divide-y md:hidden">
        {interactions.map((row) => (
          <li key={row.relation + row.signs[0].char} className="p-5">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold">
              {row.signs.map((sign) => (
                <span key={sign.char}>
                  {sign.name} <ElementGlyph char={sign.char} element={sign.element} />
                </span>
              ))}
              <Badge variant="secondary">{row.relation}</Badge>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{row.reaction}</p>
            <p className="mt-1 text-sm font-medium">→ {row.action}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Bazi() {
  return (
    <section id="bazi" aria-labelledby="bazi-title" className="scroll-mt-16 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="bazi-title"
          eyebrow="Ба Цзы"
          title="Карта сентября: много Огня, нет Земли"
          intro="Четыре столпа месяца Огненного Петуха. Огонь и Дерево сильны, Вода слаба, Земли нет — отсюда спешка и слабый результат."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <PillarsChart />
          <div className="flex flex-col gap-6">
            <ElementBalance />
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="text-xl font-semibold">Что это значит</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
                {baziMonth.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <p className="mt-4 flex items-start gap-2 text-sm">
                <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-bad" />
                {baziMonth.body}
              </p>
              <p className="mt-2 flex items-start gap-2 text-sm font-medium text-accent-foreground">
                <Eye aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                {baziMonth.focus}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-primary/30 bg-accent/50 p-6 md:p-8">
          <h3 className="text-xl font-semibold">Сентябрь в карте 2026 года</h3>
          <ul className="mt-3 grid gap-2 md:grid-cols-2">
            {baziMonth.year.map((item) => (
              <li key={item} className="flex gap-2 text-sm">
                <span aria-hidden="true" className="text-primary">●</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mt-16 text-2xl font-semibold md:text-3xl">
          Найдите свой знак: как Петух сентября действует на вашу карту
        </h3>
        <p className="mt-2 text-muted-foreground">
          Посмотрите, какие земные ветви есть в вашей карте Ба Цзы.
        </p>
        <InteractionsTable />

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold">Что может «уйти» из карты</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Слияния</p>
                <ul className="mt-2 space-y-1 text-xl">
                  {transformations.merges.map((merge) => (
                    <li key={merge.formula}>
                      {merge.formula} ={" "}
                      <ElementGlyph char={merge.result.char} element={merge.result.element} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Столкновения</p>
                <ul className="mt-2 space-y-1 text-xl">
                  {transformations.clashes.map((clash) => (
                    <li key={clash}>{clash}</li>
                  ))}
                </ul>
              </div>
            </div>
            <dl className="mt-4 space-y-1 text-sm">
              {transformations.effects.map((effect) => (
                <div key={effect.title}>
                  <dt className="inline font-semibold">{effect.title}</dt>
                  <dd className="inline text-muted-foreground"> — {effect.text}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 rounded-lg bg-bad-soft px-3 py-2 text-sm font-medium text-bad">
              {transformations.warning}
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold">
              Скрытый столп{" "}
              <ElementGlyph {...hiddenPillar.stem} />
              <ElementGlyph {...hiddenPillar.branch} />: к чему приведут действия
            </h3>
            <table className="mt-4 w-full text-left text-sm">
              <caption className="sr-only">
                Результат активных действий в зависимости от элемента личности
              </caption>
              <thead>
                <tr className="text-muted-foreground">
                  <th scope="col" className="pb-2 font-medium">Ваш элемент</th>
                  <th scope="col" className="pb-2 font-medium">Что активируется</th>
                </tr>
              </thead>
              <tbody>
                {hiddenPillar.rows.map((row) => (
                  <tr key={row.element} className="border-t align-top">
                    <th
                      scope="row"
                      className={cn("py-2 pr-3 font-semibold", elementText[row.element])}
                    >
                      {elementLabel[row.element]}
                    </th>
                    <td className="py-2">{row.gives.join(" · ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
