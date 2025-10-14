import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import ValueProps from '@/components/sections/ValueProps'
import HowItWorks from '@/components/sections/HowItWorks'
import SocialProof from '@/components/sections/SocialProof'
import DualCTA from '@/components/sections/DualCTA'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProps />
      <HowItWorks />
      <SocialProof />
      <DualCTA />
      <Footer />
    </main>
  )
}