import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  intro?: string
  className?: string
}

export function SectionHeading({ id, eyebrow, title, intro, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <Badge variant="outline" className="border-primary/30 bg-accent text-accent-foreground">
        {eyebrow}
      </Badge>
      <h2
        id={id}
        className="mt-4 text-3xl font-bold tracking-tight text-balance md:text-5xl"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-lg text-pretty text-muted-foreground">{intro}</p>
      ) : null}
    </div>
  )
}
