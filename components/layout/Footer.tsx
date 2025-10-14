import Link from 'next/link'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-600 rounded-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">AllStaff Health</span>
            </div>
            <p className="text-gray-400 text-sm">
              Connecting healthcare professionals with facilities nationwide. 
              Your trusted partner in healthcare staffing solutions.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                hello@allstaffhealth.com
              </div>
            </div>
          </div>

          {/* For Clinicians */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Clinicians</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/clinicians" className="text-gray-400 hover:text-white transition-colors">
                Apply Now
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Browse Jobs
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Career Resources
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Benefits
              </Link>
            </nav>
          </div>

          {/* For Facilities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Facilities</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/facilities" className="text-gray-400 hover:text-white transition-colors">
                Request Staff
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Our Services
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Support
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AllStaff Health. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>SOC 2 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}