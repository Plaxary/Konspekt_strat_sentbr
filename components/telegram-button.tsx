import type { ComponentProps } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

type TelegramButtonProps = {
  label: string
  size?: ComponentProps<typeof Button>["size"]
  className?: string
}

export function TelegramButton({ label, size = "lg", className }: TelegramButtonProps) {
  return (
    <Button
      asChild
      size={size}
      className={cn("font-semibold shadow-md shadow-primary/20", className)}
    >
      <a href={site.telegramUrl} target="_blank" rel="noopener noreferrer">
        <Send aria-hidden="true" />
        {label}
      </a>
    </Button>
  )
}
