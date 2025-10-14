import { CheckCircle, UserCheck, Building, Briefcase } from 'lucide-react'

export default function HowItWorks() {
  const clinicianSteps = [
    {
      icon: UserCheck,
      title: 'Apply & Get Verified',
      description: 'Complete your profile and submit credentials for quick verification.'
    },
    {
      icon: Briefcase,
      title: 'Browse & Choose',
      description: 'Explore opportunities that match your skills, schedule, and location.'
    },
    {
      icon: CheckCircle,
      title: 'Start Working',
      description: 'Get matched with facilities and begin earning with flexible scheduling.'
    }
  ]

  const facilitySteps = [
    {
      icon: Building,
      title: 'Submit Request',
      description: 'Tell us your staffing needs, timeline, and specific requirements.'
    },
    {
      icon: UserCheck,
      title: 'Get Matched',
      description: 'Our team finds qualified professionals that fit your needs perfectly.'
    },
    {
      icon: CheckCircle,
      title: 'Stay Staffed',
      description: 'Focus on patient care while we handle your ongoing staffing needs.'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, straightforward process for both healthcare professionals and facilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Clinicians */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              For Healthcare Professionals
            </h3>
            <div className="space-y-8">
              {clinicianSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* For Facilities */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              For Healthcare Facilities
            </h3>
            <div className="space-y-8">
              {facilitySteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-accent-600 rounded-full text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}