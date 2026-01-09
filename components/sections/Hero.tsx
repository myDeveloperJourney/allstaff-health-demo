import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Dusk Sky with Stars */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-dusk-sky.jpg"
          alt="Dusk sky with stars - Your North Star"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/85 via-navy-800/60 to-navy-800/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Orange accent line + subheadline */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-0.5 bg-orange-500" />
            <span className="text-white/90 text-sm md:text-base font-medium tracking-wide">
              Guiding ABA Careers Forward
            </span>
          </div>

          {/* Main Headline - Italic style */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="italic">Your North Star for</span>
            <br />
            <span className="italic">Pathways to Better Outcomes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Polaris Pathways Behavioral Talent helps ABA clinics build stable, clinically aligned teams—and helps BCBAs and RBTs find careers where they can grow, stay, and thrive.
          </p>

          {/* Dual CTAs - Pill shaped */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/facilities"
              className="w-full sm:w-auto bg-orange-500 text-white px-10 py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-orange-600 transition-colors text-sm"
            >
              Hire ABA Talent
            </Link>
            <Link
              href="/clinicians"
              className="w-full sm:w-auto bg-white text-orange-500 px-10 py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-gray-100 transition-colors text-sm"
            >
              Find ABA Jobs
            </Link>
          </div>

          {/* Book a Call CTA */}
          <Link
            href="#contact"
            className="inline-block bg-transparent border-2 border-white/40 text-white px-10 py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors text-sm"
          >
            Book a Call
          </Link>
        </div>
      </div>

      {/* Decorative gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
