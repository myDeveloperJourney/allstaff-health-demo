import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Building2 } from 'lucide-react'

export default function DualCTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join thousands of healthcare professionals and facilities who trust AllStaff Health
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full md:w-auto bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold"
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
              className="w-full md:w-auto border-white text-primary-600 hover:bg-white hover:text-primary-600 text-lg px-8 py-4 h-auto font-semibold"
              asChild
            >
              <Link href="/facilities" className="flex items-center">
                <Building2 className="w-5 h-5 mr-2" />
                Request Staff
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-white/80">
            <p className="text-sm">
              Quick setup • No hidden fees • 24/7 support
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}