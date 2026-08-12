import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — Cardinal Resource Solutions',
  description:
    'Comprehensive recovery solutions for complex industrial plastics including label matrix recovery, transit tray recovery, stream evaluation, and system calibration.',
}

// ─── Services Hero ─────────────────────────────────────────────────────────────
function ServicesHero() {
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1B3A5C 0%, #122840 100%)' }}
    >
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-slate-DEFAULT -translate-y-1/2 translate-x-1/3" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-label mb-4">What We Do</p>
        <h1
          className="font-display font-bold text-white mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Our Services
        </h1>
        <p className="font-body text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Comprehensive recovery solutions for complex industrial plastics that traditional
          recyclers reject—with 100% diversion guaranteed.
        </p>
      </div>
    </section>
  )
}

// ─── Services Grid ─────────────────────────────────────────────────────────────
function ServicesGrid() {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: 'Label Matrix Recovery',
      materials: ['PSA scrap', 'Label liner', 'Die-cut waste', 'Adhesive-coated films'],
      customers: 'Label manufacturers and converters',
      description:
        'Label matrix and liner scrap is one of the most rejected waste streams in the recycling industry—adhesive contamination makes conventional processing impossible. Our specialized infrastructure is built for exactly this challenge. We accept PSA scrap, die-cut waste, and adhesive-coated film in any volume, processing it through our recovery network to achieve true 100% landfill diversion with full chain-of-custody documentation.',
      delay: 'reveal-delay-1',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'Transit Tray & Component Recovery',
      materials: ['PETG trays', 'Polycarbonate components', 'Mixed rigid plastics', 'Thermoformed packaging'],
      customers: 'Distribution, assembly, and product manufacturers',
      description:
        'Transit trays, blister packs, and mixed rigid plastic components accumulate quickly in distribution and assembly operations. Multi-material construction—PETG mixed with polycarbonate or other resins—makes conventional mechanical recycling economically unviable. Our recovery infrastructure handles mixed rigid streams without sorting or separation requirements, accepting materials in bulk bale or gaylord format.',
      delay: 'reveal-delay-2',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Industrial Stream Evaluation',
      materials: ['Multi-layer films', 'Contaminated plastics', 'Mixed polymer streams', 'Non-standard composites'],
      customers: 'Any manufacturer with non-standard plastic waste challenges',
      description:
        'Not every plastic waste challenge fits a standard category. Our industrial stream evaluation service is designed for manufacturers facing unique or complex material streams that don&apos;t fit conventional recycling programs. We analyze your material composition, contamination profile, and volume to determine the optimal recovery pathway—whether that&apos;s direct integration, pre-processing, or a phased approach.',
      delay: 'reveal-delay-3',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'System Calibration & Testing',
      materials: ['Sample analysis (5–10 lb)', 'Heating value testing', 'Moisture & ash content', 'Sulfur level assessment'],
      customers: 'New clients and manufacturers exploring recovery options',
      description:
        'Before committing to a full recovery program, we perform a comprehensive lab analysis of your material sample. Our system calibration service tests heating value, moisture content, ash levels, and sulfur concentration to verify infrastructure compatibility. This process takes 5 business days and comes with a written compatibility report—giving you the data you need to justify the program internally and the guarantee that your material will achieve 100% diversion.',
      delay: 'reveal-delay-4',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'Logistics Coordination & Pickup',
      materials: ['Gaylord containers', 'Bulk bales', 'Tote bags & super sacks', 'Palletized loads'],
      customers: 'Manufacturers seeking a fully managed, hands-off program',
      description:
        'We take ownership of the entire logistics chain — from scheduling pickup at your dock to delivering material to processing infrastructure. No freight brokers to manage, no carrier relationships to maintain, no surprises on the back end. We handle inbound trucking, material transfer documentation, and chain-of-custody tracking from your facility to final processing. Your team schedules a pickup; we do the rest.',
      delay: 'reveal-delay-1',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Impact Reporting & ESG Documentation',
      materials: ['Diversion tonnage records', 'Carbon offset calculations', 'Energy displacement data', 'Zero-Waste certification support'],
      customers: 'Manufacturers with ESG commitments, sustainability goals, or Zero-Waste targets',
      description:
        'Every recovery program we run is fully documented for your sustainability records. At agreed intervals, you receive a quantified impact report covering total pounds diverted, estimated carbon offset, fossil fuel displacement equivalent, and landfill cost avoidance. Reports are formatted for internal ESG filings, investor sustainability disclosures, Zero-Waste certification applications, and customer-facing sustainability communications. If your company has made public sustainability commitments, our documentation gives you the proof to back them up.',
      delay: 'reveal-delay-2',
    },
  ]

  return (
    <section className="bg-fog py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`bg-white border-l-4 border-navy p-5 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-sm reveal ${service.delay}`}
            >
              <div className="mb-5">{service.icon}</div>
              <h2 className="font-display font-bold text-charcoal text-2xl mb-3">
                {service.title}
              </h2>
              <p className="font-body text-charcoal/70 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Materials */}
              <div className="mb-4">
                <p className="font-display font-semibold text-navy text-xs tracking-widest uppercase mb-2">
                  Materials Accepted
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.materials.map((mat) => (
                    <span
                      key={mat}
                      className="bg-fog-dark text-charcoal font-body text-xs px-3 py-1 rounded-full"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target customers */}
              <div className="mb-6">
                <p className="font-display font-semibold text-navy text-xs tracking-widest uppercase mb-1">
                  Best For
                </p>
                <p className="font-body text-charcoal/60 text-sm">{service.customers}</p>
              </div>

              <Link
                href="/contact"
                className="font-display font-semibold text-terra text-sm tracking-wide hover:text-terra-dark transition-colors duration-200 inline-flex items-center gap-2"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Technical Credibility ─────────────────────────────────────────────────────
function TechnicalCredibility() {
  const specs = [
    {
      category: 'Energy Density',
      detail: 'Optimized for maximum infrastructure efficiency',
      icon: '⚡',
    },
    {
      category: 'Moisture Content',
      detail: 'Assessed to ensure compatibility and processing quality',
      icon: '💧',
    },
    {
      category: 'Material Compatibility',
      detail: 'Lab-verified for seamless integration',
      icon: '🔬',
    },
    {
      category: 'Ash & Sulfur Levels',
      detail: 'Tested to meet all environmental standards',
      icon: '✓',
    },
  ]

  return (
    <section className="bg-charcoal py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3 reveal">Technical Standards</p>
          <h2
            className="font-display font-bold text-white reveal reveal-delay-1"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            What We Test &amp; Why It Matters
          </h2>
          <p className="font-body text-white/60 mt-4 max-w-2xl mx-auto reveal reveal-delay-2">
            Every material we recover is scientifically evaluated to ensure maximum diversion
            effectiveness and infrastructure compatibility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <div
              key={spec.category}
              className={`bg-charcoal-light border border-white/10 p-6 rounded-sm reveal reveal-delay-${index + 1}`}
            >
              <div className="text-3xl mb-3 select-none" aria-hidden="true">{spec.icon}</div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{spec.category}</h3>
              <p className="font-body text-white/60 text-sm leading-relaxed">{spec.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Why Our Process ───────────────────────────────────────────────────────────
function WhyOurProcess() {
  const pillars = [
    {
      title: 'Scientific Rigor',
      description:
        'Every material stream is lab-tested before entering our recovery network. We don\'t guess—we verify. Our calibration process ensures your material meets infrastructure specifications before full-scale recovery begins.',
      delay: 'reveal-delay-1',
    },
    {
      title: '100% Diversion Guarantee',
      description:
        'We don\'t do partial diversion. If we accept your material, it goes to zero landfill. Our recovery network is designed to handle the full spectrum of complex plastic streams, not just the easy ones.',
      delay: 'reveal-delay-2',
    },
    {
      title: 'Impact Documentation',
      description:
        'Every ton diverted is documented with quantified metrics: carbon offsets, energy displacement, and landfill avoidance data. You receive a full impact report to support ESG filings and Zero-Waste certifications.',
      delay: 'reveal-delay-3',
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3 reveal">Why Cardinal</p>
          <h2
            className="font-display font-bold text-charcoal reveal reveal-delay-1"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Our Process Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className={`text-center px-4 reveal ${pillar.delay}`}>
              <div className="w-16 h-16 rounded-full bg-terra/10 flex items-center justify-center mx-auto mb-5">
                <div className="w-8 h-8 rounded-full bg-terra" />
              </div>
              <h3 className="font-display font-bold text-charcoal text-xl mb-3">{pillar.title}</h3>
              <p className="font-body text-charcoal/70 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── What We Accept ────────────────────────────────────────────────────────────
function WhatWeAccept() {
  const accepted = [
    'Label matrix / liner scrap',
    'PSA (pressure-sensitive adhesive) waste',
    'Die-cut label waste',
    'Transit trays (PETG, PC, mixed)',
    'Carrier tape & blister packs',
    'Adhesive-backed films',
    'Multi-layer composite plastics',
    'Thermoformed packaging scrap',
    'Mixed rigid plastics (unsorted)',
    'Stretch film & shrink wrap',
    'Polypropylene production scrap',
    'Non-standard polymer blends',
  ]

  const notAccepted = [
    'Hazardous or chemical-contaminated material',
    'Biological or medical waste',
    'Batteries or e-waste',
    'Heavily soiled food packaging',
  ]

  return (
    <section className="bg-fog py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3 reveal">Material Acceptance</p>
          <h2
            className="font-display font-bold text-charcoal reveal reveal-delay-1"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            What We Accept
          </h2>
          <p className="font-body text-charcoal/60 mt-3 max-w-xl mx-auto reveal reveal-delay-2">
            If your material isn&apos;t listed here, send us a sample — we evaluate every stream individually.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Accepted */}
          <div className="lg:col-span-2 bg-white border border-charcoal/10 rounded-sm p-5 sm:p-8 reveal">
            <h3 className="font-display font-bold text-navy text-lg mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Accepted Materials
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {accepted.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-terra flex-shrink-0" />
                  <span className="font-body text-charcoal/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not Accepted + Note */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-charcoal/10 rounded-sm p-6 reveal">
              <h3 className="font-display font-bold text-charcoal text-base mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                Not Accepted
              </h3>
              <div className="space-y-2">
                {notAccepted.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-charcoal/30 flex-shrink-0 mt-1.5" />
                    <span className="font-body text-charcoal/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy text-white rounded-sm p-6 reveal">
              <p className="font-display font-bold text-white text-sm mb-2">Not Sure?</p>
              <p className="font-body text-white/70 text-sm leading-relaxed mb-4">
                Send a small sample. We test it, tell you if it qualifies, and outline the recovery path — all at no cost.
              </p>
              <Link href="/contact" className="inline-block bg-terra text-white font-display font-bold text-sm tracking-wide px-5 py-2.5 rounded-sm hover:bg-terra/90 transition-colors duration-200">
                Request Evaluation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services CTA ──────────────────────────────────────────────────────────────
function ServicesCTA() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="font-display font-bold text-white mb-4 reveal"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
        >
          Not Sure Which Service Fits?
        </h2>
        <p className="font-body text-white/70 text-lg mb-8 reveal reveal-delay-1">
          Start with a consultation. We&apos;ll review your material stream and recommend the right
          recovery approach—no commitment required.
        </p>
        <Link href="/contact" className="btn-primary px-10 py-4 text-base reveal reveal-delay-2">
          Request a Service Consultation
        </Link>
      </div>
    </section>
  )
}

// ─── Page Export ───────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <WhatWeAccept />
      <TechnicalCredibility />
      <WhyOurProcess />
      <ServicesCTA />
    </>
  )
}
