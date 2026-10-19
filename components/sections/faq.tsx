import { SectionHeading } from "@/components/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq } from "@/lib/content"

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-16 bg-muted/60 py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} />

        <Accordion type="single" collapsible className="mt-12 rounded-2xl border bg-card px-6">
          {faq.items.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`}>
              <AccordionTrigger className="text-base md:text-lg">{item.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
