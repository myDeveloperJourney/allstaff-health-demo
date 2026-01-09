import { UserCheck, Building, Briefcase, CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  const clinicianSteps = [
    {
      number: '01',
      title: 'Apply & Get Guided',
      description: 'Complete your profile and share your career goals with our team.'
    },
    {
      number: '02',
      title: 'Get Matched with Intention',
      description: 'We find opportunities aligned with your values, lifestyle, and long-term growth.'
    },
    {
      number: '03',
      title: 'Grow in Your Career',
      description: 'Begin working with clinics that support your professional development and well-being.'
    }
  ]

  const facilitySteps = [
    {
      number: '01',
      title: 'Share Your Needs',
      description: 'Tell us your staffing requirements, culture, and clinical approach.'
    },
    {
      number: '02',
      title: 'Receive Vetted Candidates',
      description: 'Get clinically aligned, culture-fit matches who align with your mission.'
    },
    {
      number: '03',
      title: 'Build a Stable Team',
      description: 'Focus on outcomes while we handle sustainable staffing solutions.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Title with orange accent */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-orange-500" />
            <span className="text-gray-600 text-sm font-medium">The Process</span>
            <div className="w-10 h-0.5 bg-orange-500" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A clear pathway forward for ABA professionals and the clinics that need them
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Clinicians */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left flex items-center gap-3">
              <UserCheck className="w-7 h-7 text-orange-500" />
              For ABA Professionals
            </h3>
            <div className="space-y-6">
              {clinicianSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Facilities */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left flex items-center gap-3">
              <Building className="w-7 h-7 text-orange-500" />
              For ABA Clinics
            </h3>
            <div className="space-y-6">
              {facilitySteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
