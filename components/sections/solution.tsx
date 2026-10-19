import { Clapperboard, Quote } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { solution } from "@/lib/content"
import { site } from "@/lib/site"

export function Solution() {
  return (
    <section
      id="systems"
      aria-labelledby="systems-title"
      className="scroll-mt-16 bg-muted/60 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="systems-title"
          eyebrow={solution.eyebrow}
          title={solution.title}
          intro={solution.intro}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {solution.systems.map((system) => (
            <article key={system.title} className="rounded-2xl border bg-card p-6 md:p-8">
              <system.icon aria-hidden="true" className="size-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{system.title}</h3>
              <p className="mt-2 text-muted-foreground">{system.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-primary/30 bg-card p-6 md:flex-row md:items-center md:gap-6 md:p-8">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Clapperboard aria-hidden="true" className="size-7" />
          </span>
          <div>
            <h3 className="text-2xl font-semibold">{solution.trailer.title}</h3>
            <p className="mt-2 text-muted-foreground">{solution.trailer.text}</p>
          </div>
        </div>

        <h3 className="mt-16 text-center text-2xl font-semibold md:text-3xl">
          {solution.metaphorsTitle}
        </h3>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {solution.metaphors.map((metaphor) => (
            <li key={metaphor.title} className="rounded-2xl border bg-card p-6">
              <metaphor.icon aria-hidden="true" className="size-6 text-primary" />
              <p className="mt-3 font-semibold">{metaphor.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{metaphor.text}</p>
            </li>
          ))}
        </ul>

        <Separator className="my-16" />

        <figure className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Quote aria-hidden="true" className="size-8 text-primary" />
          <blockquote className="mt-4 font-heading text-2xl font-semibold text-balance md:text-3xl">
            «{solution.speakerQuote}»
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4 text-left">
            <Avatar size="lg">
              <AvatarFallback className="bg-primary font-semibold text-primary-foreground">
                {site.speakerInitials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{site.speaker}</p>
              <p className="text-sm text-muted-foreground">{site.speakerRole}</p>
              <p className="text-sm text-muted-foreground">{site.speakerExperience}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
