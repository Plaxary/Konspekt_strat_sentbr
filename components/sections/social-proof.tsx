import { SectionHeading } from "@/components/section-heading"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { socialProof } from "@/lib/content"

export function SocialProof() {
  return (
    <section aria-labelledby="proof-title" className="bg-muted/60 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="proof-title"
          eyebrow={socialProof.eyebrow}
          title={socialProof.title}
        />

        <dl className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {socialProof.metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border bg-card p-6 text-center">
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <span className="block font-heading text-4xl font-bold text-primary md:text-5xl">
                  {metric.value}
                </span>
                <span className="mt-2 block text-sm text-muted-foreground">{metric.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {socialProof.testimonials.map((item) => (
            <Card key={item.initials} className="rounded-2xl">
              <CardContent className="flex h-full flex-col gap-6">
                <blockquote className="flex-1 text-pretty">«{item.text}»</blockquote>
                <div className="flex items-center gap-3">
                  <Avatar size="lg">
                    <AvatarFallback className="bg-accent font-semibold text-accent-foreground">
                      {item.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
