import { SectionHeading } from "@/components/section-heading"
import { Disclosure } from "@/components/ui/disclosure"
import { faq } from "@/lib/content"

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-16 py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} />

        <div className="mt-12 rounded-2xl border bg-card px-6">
          {faq.items.map((item) => (
            <Disclosure
              key={item.q}
              title={<h3 className="font-heading text-base font-semibold md:text-lg">{item.q}</h3>}
              contentClassName="text-base text-muted-foreground"
            >
              {item.a}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}
