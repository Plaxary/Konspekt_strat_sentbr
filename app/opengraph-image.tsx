import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { hero } from "@/lib/content"

export const alt = hero.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const fontDir = join(process.cwd(), "node_modules/@fontsource/lora/files")

export default async function OpengraphImage() {
  const [cyrillic, latin] = await Promise.all([
    readFile(join(fontDir, "lora-cyrillic-700-normal.woff")),
    readFile(join(fontDir, "lora-latin-700-normal.woff")),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #FFF7ED 0%, #FFFBF5 60%, #FFEDD5 100%)",
          color: "#2A1B14",
          fontFamily: "Lora",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "10px 22px",
            borderRadius: 999,
            background: "#C2410C",
            color: "#FFFBF5",
            fontSize: 28,
          }}
        >
          Конспект эфира · Сентябрь
        </div>
        <div style={{ display: "flex", fontSize: 76, lineHeight: 1.1, letterSpacing: -1 }}>
          {hero.title}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#9A3412" }}>
          Ба Цзы · Ци Мэнь · Фэншуй
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Lora", data: cyrillic, weight: 700, style: "normal" },
        { name: "Lora", data: latin, weight: 700, style: "normal" },
      ],
    },
  )
}
