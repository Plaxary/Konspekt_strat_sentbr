import { Benefits } from "@/components/sections/benefits"
import { Faq } from "@/components/sections/faq"
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
        <Plan />
        <Benefits />
        <SocialProof />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
