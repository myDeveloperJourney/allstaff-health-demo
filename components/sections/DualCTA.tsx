import Link from 'next/link'
import { Building2, Users, CheckCircle } from 'lucide-react'

export default function DualCTA() {
  const clinicBenefits = [
    'Clinically guided vetting',
    'Culture-fit placements',
    'Faster hiring without sacrificing quality',
    'Lower turnover and burnout',
    'Scalable recruiting support'
  ]

  const clinicianBenefits = [
    'Ethical, career-aligned placements',
    'Caseload and environment matching',
    'Growth-focused opportunities',
    'Support beyond the offer letter',
    'Respect for the emotional weight of your work'
  ]

  return (
    <section className="py-20 hero-gradient">
      <div className="container-custom">
        {/* Title with dotted accent */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Connect with Us
          </h2>
          {/* Orange dotted accent */}
          <div className="flex items-center justify-center gap-1 mt-3">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <div className="w-8 h-0.5 bg-orange-500 ml-1" />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
           {/* For Clinicians Column - Glass Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-white">For ABA Professionals</h3>
            </div>

            <h4 className="text-xl font-semibold text-white mb-4">
              Find a Career That Fits Your Life Not Just Your License.
            </h4>

            <p className="text-white/80 mb-6 leading-relaxed">
              Your career deserves intention, not urgency. Polaris Pathways helps BCBAs and RBTs find roles aligned with their values, lifestyles, and long-term goals. We advocate for you, guide your next move, and help you grow without burning out.
            </p>

            <ul className="space-y-3 mb-8">
              {clinicianBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/clinicians"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:bg-orange-600 transition-colors text-sm text-center w-full sm:w-auto"
            >
              Apply for ABA Opportunities
            </Link>
          </div>
          {/* For Clinics Column */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-gray-900">For ABA Clinics</h3>
            </div>

            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Build a Team That Stays. Serve Families with Confidence.
            </h4>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Polaris Pathways partners with ABA providers to deliver clinically vetted BCBAs and RBTs who align with your mission, your culture, and your standards. We focus on sustainable growth not just filling shifts so your organization can serve families with consistency and confidence.
            </p>

            <ul className="space-y-3 mb-8">
              {clinicBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/facilities"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:bg-orange-600 transition-colors text-sm text-center w-full sm:w-auto"
            >
              Request ABA Talent
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
