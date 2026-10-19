import { ArrowDown, CircleCheck } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { plan } from "@/lib/content"

export function Plan() {
  return (
    <section id="plan" aria-labelledby="plan-title" className="scroll-mt-16 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="plan-title"
          eyebrow={plan.eyebrow}
          title={plan.title}
          intro={plan.intro}
        />

        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {plan.steps.map((step, index) => (
            <li key={step.title}>
              <Card className="h-full rounded-2xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <step.icon aria-hidden="true" className="size-6 text-primary" />
                  </div>
                  <CardTitle className="mt-2 font-heading text-2xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{step.lead}</p>
                  <ul className="mt-3 space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex gap-2 text-muted-foreground">
                        <CircleCheck
                          aria-hidden="true"
                          className="mt-0.5 size-5 shrink-0 text-primary"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-lg font-medium text-pretty">{plan.result}</p>
          <Button asChild variant="outline" size="lg">
            <a href="#spheres">
              {plan.cta}
              <ArrowDown aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
