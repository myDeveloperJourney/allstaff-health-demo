import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import AboutSection from '@/components/sections/AboutSection'
import WhatSetsUsApart from '@/components/sections/WhatSetsUsApart'
import ThreePillars from '@/components/sections/ThreePillars'
import HowItWorks from '@/components/sections/HowItWorks'
// import SocialProof from '@/components/sections/SocialProof'
import DualCTA from '@/components/sections/DualCTA'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <WhatSetsUsApart />
      <ThreePillars />
      <HowItWorks />
      {/* <SocialProof /> */}
      <DualCTA />
      <Footer />
    </main>
  )
}
