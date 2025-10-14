import { Star } from 'lucide-react'

export default function SocialProof() {
  const testimonials = [
    {
      name: 'Sarah Chen, RN',
      role: 'ICU Nurse',
      content: 'AllStaff Health gave me the flexibility I needed while maintaining competitive pay. Their support team is incredible.',
      rating: 5
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Emergency Medicine',
      content: 'The platform makes it easy to find quality locum opportunities. Professional, reliable, and straightforward.',
      rating: 5
    },
    {
      name: 'Jennifer Park',
      role: 'Facility Administrator',
      content: 'We\'ve been able to maintain consistent staffing levels thanks to AllStaff Health. Their vetting process is thorough.',
      rating: 5
    }
  ]

  const partners = [
    'HCA Healthcare',
    'Kaiser Permanente',
    'Mayo Clinic',
    'Cleveland Clinic',
    'Johns Hopkins',
    'Massachusetts General',
    'Cedars-Sinai',
    'NYU Langone'
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Partner Logos */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Trusted by Leading Healthcare Organizations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg bg-white shadow-sm"
              >
                <div className="text-lg font-medium text-gray-700">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600">
                Active Healthcare Professionals
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">
                Partner Facilities
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                98%
              </div>
              <div className="text-gray-600">
                Client Satisfaction Rate
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                50
              </div>
              <div className="text-gray-600">
                States Covered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}