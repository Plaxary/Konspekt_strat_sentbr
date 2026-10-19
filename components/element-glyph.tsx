import { type Element, elementLabel } from "@/lib/charts-data"
import { cn } from "@/lib/utils"

export const elementText: Record<Element, string> = {
  wood: "text-el-wood",
  fire: "text-el-fire",
  earth: "text-el-earth",
  metal: "text-el-metal",
  water: "text-el-water",
}

export const elementBg: Record<Element, string> = {
  wood: "bg-el-wood",
  fire: "bg-el-fire",
  earth: "bg-el-earth",
  metal: "bg-el-metal",
  water: "bg-el-water",
}

type ElementGlyphProps = {
  char: string
  element: Element
  className?: string
}

// Иероглиф, окрашенный в цвет своей стихии; стихия озвучивается для скринридеров.
export function ElementGlyph({ char, element, className }: ElementGlyphProps) {
  return (
    <span className={cn("font-semibold", elementText[element], className)}>
      <span aria-hidden="true">{char}</span>
      <span className="sr-only">
        {char} ({elementLabel[element]})
      </span>
    </span>
  )
}
