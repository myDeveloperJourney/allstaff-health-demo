'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Heart } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary-600 rounded-lg">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              AllStaff Health
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/clinicians"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              For Clinicians
            </Link>
            <Link
              href="/facilities"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              For Facilities
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/facilities">Request Staff</Link>
            </Button>
            <Button asChild>
              <Link href="/clinicians">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="/clinicians"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                For Clinicians
              </Link>
              <Link
                href="/facilities"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                For Facilities
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/facilities">Request Staff</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/clinicians">Apply Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}