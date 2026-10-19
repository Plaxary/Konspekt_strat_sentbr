import type { Metadata, Viewport } from "next"
import { Inter, Lora } from "next/font/google"

import { site } from "@/lib/site"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
})

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.brand,
  authors: [{ name: site.speaker }],
  keywords: [
    "Ба Цзы",
    "Ци Мэнь",
    "Фэншуй",
    "Огненный Петух",
    "прогноз на сентябрь",
    "2027",
    "конспект эфира",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "article",
    locale: "ru_RU",
    url: "/",
    siteName: site.brand,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#C2410C",
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brand,
  url: site.url,
  founder: { "@type": "Person", name: site.speaker },
  sameAs: [site.telegramUrl],
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: расширения браузера (LanguageTool и др.) дописывают атрибуты в html/body.
    <html lang="ru" className={`${inter.variable} ${lora.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  )
}
