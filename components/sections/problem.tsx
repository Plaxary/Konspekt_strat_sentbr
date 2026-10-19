import { ArrowRight, Check, TriangleAlert } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { problem } from "@/lib/content"

export function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
      className="scroll-mt-16 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="problem-title"
          eyebrow={problem.eyebrow}
          title={problem.title}
          intro={problem.intro}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold">Сильная сторона месяца</h3>
            <ul className="mt-4 space-y-2">
              {problem.light.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <Check aria-hidden="true" className="size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-accent/60 p-6 md:p-8">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <TriangleAlert aria-hidden="true" className="size-5 text-primary" />
              Обратная сторона
            </h3>
            <p className="mt-4 text-lg">{problem.shadow}</p>
            <p className="mt-4 flex flex-wrap items-center gap-2 text-sm font-medium text-accent-foreground">
              {problem.formula.map((step, index) => (
                <span key={step} className="flex items-center gap-2">
                  {index > 0 ? <ArrowRight aria-hidden="true" className="size-4" /> : null}
                  {step}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {problem.scenarios.map((scenario) => (
            <article key={scenario.title} className="rounded-2xl border bg-card p-6 md:p-8">
              <scenario.icon aria-hidden="true" className="size-10 text-primary" />
              <Badge variant="secondary" className="mt-4 h-auto whitespace-normal">
                {scenario.tag}
              </Badge>
              <h3 className="mt-3 text-xl font-semibold">{scenario.title}</h3>
              <p className="mt-2 text-muted-foreground">{scenario.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 rounded-2xl bg-foreground p-6 text-background md:grid-cols-2 md:p-8">
          {problem.stakes.map((stake) => (
            <p key={stake} className="font-heading text-xl font-semibold text-pretty md:text-2xl">
              {stake}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
