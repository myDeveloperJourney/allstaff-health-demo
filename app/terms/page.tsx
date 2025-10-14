import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Terms of Service
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Last updated: {new Date().toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="prose prose-gray max-w-none">
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-700 mb-4">
                    By accessing and using AllStaff Health's platform, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our healthcare staffing services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Services Provided</h2>
                  <p className="text-gray-700 mb-4">
                    AllStaff Health provides a platform that connects healthcare professionals with healthcare facilities for staffing purposes. Our services include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Matching qualified healthcare professionals with appropriate opportunities</li>
                    <li>Credential verification and background screening</li>
                    <li>Placement coordination and ongoing support</li>
                    <li>Compliance monitoring and reporting</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Healthcare Professionals</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Provide accurate and current professional information</li>
                    <li>Maintain valid licenses and certifications</li>
                    <li>Comply with all applicable healthcare regulations</li>
                    <li>Fulfill commitments to assigned facilities</li>
                    <li>Report any changes in credentials or availability promptly</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Healthcare Facilities</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Provide accurate facility and position information</li>
                    <li>Maintain appropriate working conditions and safety standards</li>
                    <li>Comply with payment terms and conditions</li>
                    <li>Treat staff with professionalism and respect</li>
                    <li>Report any issues or concerns promptly</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Security</h2>
                  <p className="text-gray-700 mb-4">
                    Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account. You must:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Use strong, unique passwords</li>
                    <li>Keep login credentials confidential</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Log out of shared or public computers</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">For Healthcare Facilities</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Payment terms are Net 30 days from invoice date</li>
                    <li>Late payments may incur interest charges</li>
                    <li>Disputed invoices must be reported within 10 days</li>
                    <li>Facilities are responsible for all placement-related costs</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">For Healthcare Professionals</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Payment rates are established in individual agreements</li>
                    <li>Timesheets must be submitted accurately and on time</li>
                    <li>Direct deposit is the preferred payment method</li>
                    <li>Tax responsibilities remain with the professional</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Compliance and Regulations</h2>
                  <p className="text-gray-700 mb-4">
                    All users must comply with applicable healthcare regulations, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>HIPAA privacy and security requirements</li>
                    <li>State licensing and certification requirements</li>
                    <li>CMS conditions of participation</li>
                    <li>Joint Commission standards where applicable</li>
                    <li>Local facility policies and procedures</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                  <p className="text-gray-700 mb-4">
                    AllStaff Health provides staffing services and platform access but does not control the actual provision of healthcare services. Our liability is limited to the scope of our staffing and placement services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Termination</h2>
                  <p className="text-gray-700 mb-4">
                    Either party may terminate their account with 30 days written notice. Immediate termination may occur for violations of these terms, non-compliance with regulations, or other material breaches.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
                  <p className="text-gray-700 mb-4">
                    We reserve the right to modify these terms at any time. Users will be notified of significant changes and continued use constitutes acceptance of modified terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    Questions about these Terms of Service should be directed to:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Email:</strong> legal@allstaffhealth.com<br />
                      <strong>Phone:</strong> (800) 555-0123<br />
                      <strong>Address:</strong> 123 Healthcare Way, Suite 100, Medical City, MC 12345
                    </p>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}