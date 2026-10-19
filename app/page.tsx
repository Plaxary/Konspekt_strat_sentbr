import { Bazi } from "@/components/sections/bazi"
import { Benefits } from "@/components/sections/benefits"
import { Calendar } from "@/components/sections/calendar"
import { Faq } from "@/components/sections/faq"
import { FengShui } from "@/components/sections/fengshui"
import { FinalCta } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"
import { Hero } from "@/components/sections/hero"
import { Nav } from "@/components/sections/nav"
import { Plan } from "@/components/sections/plan"
import { Problem } from "@/components/sections/problem"
import { SocialProof } from "@/components/sections/social-proof"
import { Solution } from "@/components/sections/solution"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Bazi />
        <Plan />
        <Calendar />
        <Benefits />
        <FengShui />
        <SocialProof />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
