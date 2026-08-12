import Link from 'next/link'
import Logo from '@/components/Logo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Cardinal Resource Solutions',
  description:
    'Cardinal Resource Solutions was founded on the conviction that complex industrial plastics shouldn\'t end up in landfills. Learn about our mission, network, and commitment to sustainability.',
}

// ─── About Hero ────────────────────────────────────────────────────────────────
function AboutHero() {
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1E2426 0%, #1B3A5C 100%)' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-label mb-4">Who We Are</p>
        <h1
          className="font-display font-bold text-white mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          About Cardinal Resource Solutions
        </h1>
        <p className="font-body text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Guided by True North — a firm belief that industrial waste is a resource waiting
          to be recovered, not a problem waiting to be buried.
        </p>
      </div>
    </section>
  )
}

// ─── Our Story ─────────────────────────────────────────────────────────────────
function OurStory() {
  return (
    <section className="bg-fog py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="section-label mb-3 reveal">Our Story</p>
            <h2
              className="font-display font-bold text-charcoal mb-6 reveal reveal-delay-1"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              Founded on a Conviction the Industry Ignored
            </h2>
            <div className="space-y-5 reveal reveal-delay-2">
              <p className="font-body text-charcoal/70 leading-relaxed">
                Cardinal Resource Solutions was built on a simple but stubborn conviction: complex
                industrial plastics—label matrices, adhesive-coated films, mixed rigid streams—should
                not end up in landfills. The technology and infrastructure to recover them exist.
                The will to connect manufacturers to that infrastructure was what was missing.
              </p>
              <p className="font-body text-charcoal/70 leading-relaxed">
                We saw a 10–15 year gap between European and American plastic recovery capability.
                In Europe, these materials are routinely recovered through waste-to-energy and
                advanced processing networks. In the U.S., the default answer for hard-to-recycle
                streams has been the landfill. We set out to close that gap.
              </p>
              <p className="font-body text-charcoal/70 leading-relaxed">
                Today, Cardinal operates as the bridge between manufacturers generating complex
                plastic waste and the specialized U.S.-based infrastructure capable of recovering
                it—with full documentation, 100% diversion, and measurable impact.
              </p>
            </div>

            {/* True North callout */}
            <div className="mt-8 border-l-4 border-terra pl-5 reveal reveal-delay-3">
              <p className="font-display font-bold text-charcoal text-lg mb-1">&ldquo;True North&rdquo;</p>
              <p className="font-body text-charcoal/60 text-sm leading-relaxed">
                Our guiding philosophy. Every decision is oriented toward genuine environmental
                impact—not greenwashing, not partial solutions. We measure success in tons
                diverted and carbon avoided.
              </p>
            </div>
          </div>

          {/* Decorative compass */}
          <div className="flex justify-center items-center reveal reveal-delay-2">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Dark background so white compass star shows clearly */}
              <div className="absolute inset-0 rounded-full bg-navy border-2 border-white/10" style={{ boxShadow: '0 0 60px rgba(27,58,92,0.5)' }} />
              <div className="absolute inset-6 rounded-full border border-white/10" style={{ background: 'rgba(91,141,184,0.08)' }} />
              {/* Compass */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Logo className="w-48 h-48 lg:w-64 lg:h-64 drop-shadow-[0_0_20px_rgba(91,141,184,0.40)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Why We're Different ────────────────────────────────────────────────────────
function WhyDifferent() {
  const points = [
    {
      number: '01',
      title: 'Infrastructure Others Don\'t Have',
      description:
        'Our recovery network includes partnerships with cement kilns, industrial energy facilities, and advanced processors that specifically accept complex plastic streams. This infrastructure took years to build and gives us the ability to say yes when others say no.',
      delay: 'reveal-delay-1',
    },
    {
      number: '02',
      title: 'Deep Technical Expertise',
      description:
        'We understand the science of complex plastic recovery—heating values, moisture tolerances, ash content, sulfur thresholds. This technical depth means we can assess any material stream and know exactly where it fits in our recovery network.',
      delay: 'reveal-delay-2',
    },
    {
      number: '03',
      title: 'True Partnership Approach',
      description:
        'We don\'t operate as a disposal vendor. We become your recovery partner—helping you build the internal case for the program, documenting impact for ESG reporting, and growing the relationship as your waste streams evolve.',
      delay: 'reveal-delay-3',
    },
    {
      number: '04',
      title: 'Measurable Impact, Every Time',
      description:
        'Every program delivers a full impact report: tons diverted, carbon offset equivalents, energy displacement data, and landfill avoidance cost. Your sustainability team gets the numbers they need to report with confidence.',
      delay: 'reveal-delay-4',
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3 reveal">Our Difference</p>
          <h2
            className="font-display font-bold text-charcoal reveal reveal-delay-1"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Why Manufacturers Choose Cardinal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point) => (
            <div
              key={point.number}
              className={`flex gap-6 p-6 border border-charcoal/10 rounded-sm hover:border-terra hover:shadow-md transition-all duration-300 reveal ${point.delay}`}
            >
              <div
                className="font-display font-bold text-navy/20 leading-none flex-shrink-0 select-none"
                style={{ fontSize: '3rem' }}
                aria-hidden="true"
              >
                {point.number}
              </div>
              <div>
                <h3 className="font-display font-bold text-charcoal text-xl mb-2">{point.title}</h3>
                <p className="font-body text-charcoal/70 text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Recovery Network ──────────────────────────────────────────────────────────
function RecoveryNetwork() {
  const partners = [
    {
      name: 'Heidelberg Materials',
      description:
        'One of the world\'s largest cement manufacturers, using recovered plastic as an alternative fuel source in its kiln operations—displacing coal and other fossil fuels with measurable emissions reductions.',
      capability: 'Alternative Fuel Processing',
      delay: 'reveal-delay-1',
    },
    {
      name: 'Buzzi Unicem',
      description:
        'A major cement group with U.S. operations built around co-processing capabilities, accepting complex plastic streams that meet energy density and compatibility specifications.',
      capability: 'Co-Processing & Energy Recovery',
      delay: 'reveal-delay-2',
    },
    {
      name: 'Vicinity Energy',
      description:
        'An industrial energy provider whose facilities can utilize recovered plastics in district energy systems, converting waste streams into heat and power for commercial and industrial customers.',
      capability: 'District Energy Conversion',
      delay: 'reveal-delay-3',
    },
    {
      name: 'Regional Energy Partners',
      description:
        'A network of regional processing and energy facilities that extend our geographic reach and material compatibility, ensuring we can serve manufacturers across the continental U.S.',
      capability: 'Nationwide Recovery Reach',
      delay: 'reveal-delay-4',
    },
  ]

  return (
    <section className="bg-charcoal py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3 reveal">Our Network</p>
          <h2
            className="font-display font-bold text-white reveal reveal-delay-1"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            The Recovery Network Behind Every Guarantee
          </h2>
          <p className="font-body text-white/60 mt-4 max-w-2xl mx-auto reveal reveal-delay-2">
            Our 100% diversion promise is backed by established partnerships with leading
            industrial energy and processing facilities across the United States.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`bg-charcoal-light border border-white/10 p-5 sm:p-7 rounded-sm hover:border-slate-DEFAULT/40 transition-colors duration-300 reveal ${partner.delay}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h3 className="font-display font-bold text-white text-xl">{partner.name}</h3>
                <span className="bg-navy/60 text-slate-DEFAULT font-display text-xs tracking-wide px-3 py-1 rounded-full flex-shrink-0">
                  {partner.capability}
                </span>
              </div>
              <p className="font-body text-white/60 text-sm leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Sustainability Pillars ────────────────────────────────────────────────────
function SustainabilityPillars() {
  const pillars = [
    {
      title: 'Zero-Waste Goal Achievement',
      description:
        'We help manufacturers reach and maintain Zero-Waste-to-Landfill certification by accepting the hardest-to-divert streams. When traditional recyclers can\'t take your material, we close the gap and keep your diversion rate at 100%.',
      icon: (
        <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      delay: 'reveal-delay-1',
    },
    {
      title: 'Carbon Offset Documentation',
      description:
        'Every recovery program generates quantified carbon offset data—calculated from fossil fuel displacement at our network facilities. We provide the documentation your sustainability team needs for reporting, verification, and certification.',
      icon: (
        <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      delay: 'reveal-delay-2',
    },
    {
      title: 'Domestic Energy Independence',
      description:
        'Our recovery network puts your plastic waste to work inside U.S. borders, displacing imported fossil fuels with domestic energy recovery. Every ton processed is a step toward American energy independence and a reduction in fossil fuel dependence.',
      icon: (
        <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      delay: 'reveal-delay-3',
    },
  ]

  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3 reveal">Commitment</p>
          <h2
            className="font-display font-bold text-white reveal reveal-delay-1"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Our Sustainability Commitments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`text-center px-6 reveal ${pillar.delay}`}
            >
              <div className="flex justify-center mb-5">{pillar.icon}</div>
              <h3 className="font-display font-bold text-white text-xl mb-3">{pillar.title}</h3>
              <p className="font-body text-white/60 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About CTA ─────────────────────────────────────────────────────────────────
function AboutCTA() {
  return (
    <section className="bg-terra py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="font-display font-bold text-white mb-4 reveal"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
        >
          Aligned on Purpose. Ready to Partner.
        </h2>
        <p className="font-body text-white/80 text-lg mb-8 reveal reveal-delay-1">
          If your organization is committed to Zero-Waste goals and needs a recovery partner
          that can handle the streams others won&apos;t, we&apos;re ready to talk.
        </p>
        <Link href="/contact" className="btn-ghost px-10 py-4 text-base reveal reveal-delay-2">
          Partner With Us
        </Link>
      </div>
    </section>
  )
}

// ─── Page Export ───────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <WhyDifferent />
      <RecoveryNetwork />
      <SustainabilityPillars />
      <AboutCTA />
    </>
  )
}
