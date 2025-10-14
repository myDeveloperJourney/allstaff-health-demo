import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Building2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Trust indicator */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Trusted by 500+ healthcare facilities nationwide
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Connect Healthcare
            <br />
            <span className="text-accent-400">Professionals & Facilities</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find your next opportunity or request skilled staff. 
            Join thousands of healthcare professionals who trust AllStaff Health.
          </p>
          
          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold"
              asChild
            >
              <Link href="/clinicians" className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Apply as Clinician
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4 h-auto font-semibold"
              asChild
            >
              <Link href="/facilities" className="flex items-center">
                <Building2 className="w-5 h-5 mr-2" />
                Request Staff
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">10K+</div>
              <div className="text-sm text-white/80">Active Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-white/80">Partner Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1">50</div>
              <div className="text-sm text-white/80">States Covered</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  )
}