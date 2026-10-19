import type { ReactNode } from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

// Раскрывающийся блок на нативном <details>: работает без JavaScript,
// поэтому переносится в GetCourse как обычный HTML.
type DisclosureProps = {
  title: ReactNode
  children: ReactNode
  className?: string
  titleClassName?: string
  contentClassName?: string
}

export function Disclosure({
  title,
  children,
  className,
  titleClassName,
  contentClassName,
}: DisclosureProps) {
  return (
    <details className={cn("group border-b last:border-b-0", className)}>
      <summary
        className={cn(
          "flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left font-medium outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden",
          titleClassName,
        )}
      >
        {title}
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className={cn("pb-4", contentClassName)}>{children}</div>
    </details>
  )
}
