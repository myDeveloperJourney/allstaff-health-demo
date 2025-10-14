import { Clock, DollarSign, Shield, Users } from 'lucide-react'

export default function ValueProps() {
  const values = [
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Work when and where you want. Complete control over your schedule with no minimum shift requirements.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Industry-leading rates with same-day pay options. No hidden fees - keep 100% of what you earn.'
    },
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'HIPAA compliant platform with comprehensive malpractice coverage and 24/7 support.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal recruiters and support team available around the clock to help you succeed.'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose AllStaff Health?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of healthcare professionals who have found flexibility, 
            better pay, and career growth with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div 
                key={index}
                className="text-center group hover:bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8 text-primary-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}