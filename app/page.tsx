import Logo from '@/components/Logo'
import Link from 'next/link'

// ─── Hero Section ──────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative min-h-[76vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1504672935809-bb5355f7c2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Dark overlay — heavier on left so text stays readable, lighter on right to show globe */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(105deg, rgba(3,8,15,0.82) 0%, rgba(3,8,15,0.65) 45%, rgba(3,8,15,0.30) 75%, rgba(3,8,15,0.15) 100%)',
        }}
      />

      {/* Subtle green tint overlay — reinforces the "renewal" mood */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 70% 60%, rgba(30,120,60,0.18) 0%, transparent 60%)',
        }}
      />

      {/* Left terra accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-terra z-20" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div>
            <p
              className="section-label mb-5 block"
              style={{ opacity: 0, animation: 'fadeIn 0.6s ease 0.1s forwards' }}
            >
              Industrial Plastic Waste Recovery
            </p>
            <h1
              className="font-display font-bold leading-none mb-6"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                opacity: 0,
                animation: 'fadeUp 0.8s ease 0.2s forwards',
                background: 'linear-gradient(135deg, #ffffff 0%, #c8e8ff 50%, #D4A843 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              We Recover<br />What Others Reject.
            </h1>
            <p
              className="font-body text-white/75 text-lg leading-relaxed mb-10 max-w-lg"
              style={{ opacity: 0, animation: 'fadeUp 0.8s ease 0.35s forwards' }}
            >
              We take the complex plastic waste traditional recyclers won't touch —
              label matrix, transit trays, adhesive films — and divert every pound from
              the landfill. Fully documented. Nationwide service.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ opacity: 0, animation: 'fadeUp 0.8s ease 0.5s forwards' }}
            >
              <Link href="/contact" className="btn-primary text-base px-8 py-4 text-center">
                Request a Free Evaluation
              </Link>
              <Link href="/services" className="btn-ghost text-base px-8 py-4 text-center">
                Our Services →
              </Link>
            </div>
          </div>

          {/* Right — Cardinal compass, floats over the globe photo */}
          <div
            className="flex items-center justify-center lg:justify-end"
            style={{ opacity: 0, animation: 'fadeIn 1s ease 0.4s forwards' }}
          >
            <div className="relative flex items-center justify-center">
              {/* Soft glow behind compass */}
              <div
                className="absolute rounded-full"
                style={{
                  width: '140%',
                  height: '140%',
                  background: 'radial-gradient(circle, rgba(91,141,184,0.20) 0%, transparent 70%)',
                }}
              />
              <Logo className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[340px] lg:h-[340px] relative z-10 drop-shadow-[0_0_40px_rgba(91,141,184,0.55)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        style={{ opacity: 0, animation: 'fadeIn 0.6s ease 1.2s forwards' }}
        aria-hidden="true"
      >
        <span className="font-body text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

// ─── Stats Strip ───────────────────────────────────────────────────────────────
function StatsStrip() {
  const stats = [
    { number: '100%', label: 'Landfill Diversion — Every Load Documented' },
    { number: '5 Days', label: 'From Sample to Compatibility Report' },
    { number: 'Zero Waste', label: 'Program Partner — All Materials Diverted' },
  ]

  return (
    <section className="bg-navy py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 text-center py-8 md:py-0 md:px-12"
            >
              <div className="font-display font-bold text-gold mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                {stat.number}
              </div>
              <div className="font-body text-white/70 text-sm md:text-base leading-snug max-w-xs mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Value Props ────────────────────────────────────────────────────────────────
function ValuePropsSection() {
  const cards = [
    {
      icon: (
        <svg className="w-10 h-10 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      headline: 'Zero Landfill. Every Load.',
      body:
        'Label matrix, transit trays, adhesive films — we take the streams traditional recyclers turn away. Every pound diverted and fully documented.',
      delay: 'reveal-delay-1',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      headline: 'Reclaim Your Floor Space',
      body:
        'Stop storing waste on your production floor. We coordinate pickup, processing, and documentation so your facility stays lean and your compliance records stay clean.',
      delay: 'reveal-delay-2',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 5h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2z" />
        </svg>
      ),
      headline: 'Powering American Industry',
      body:
        'Your plastic waste displaces fossil fuels inside U.S. borders. Every pound we process strengthens domestic energy independence and helps American industry close the gap with global sustainability standards.',
      delay: 'reveal-delay-3',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      headline: 'Full ESG Documentation Included',
      body:
        'Every load comes with a written impact report: pounds diverted, carbon offset, energy displaced. Ready for your sustainability filings, Zero-Waste certifications, and internal ESG reporting — no extra work on your end.',
      delay: 'reveal-delay-1',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      headline: 'Sample to Report in 5 Business Days',
      body:
        'Ship us 5–10 lbs and we turn around a full lab compatibility report in 5 business days — at no cost. You get the data before any commitment, so your team can greenlight the program with confidence.',
      delay: 'reveal-delay-2',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      headline: 'We Handle Pickup and Logistics',
      body:
        'No complicated freight arrangements, no vendor management, no mystery. We coordinate pickup from your facility, manage all transport, and handle every step from dock to processing — nationwide.',
      delay: 'reveal-delay-3',
    },
  ]

  return (
    <section className="bg-fog py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3 reveal">Why Cardinal</p>
          <h2
            className="font-display font-bold text-charcoal reveal reveal-delay-1"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Why Manufacturers Choose Cardinal
          </h2>
          <p className="font-body text-charcoal/60 mt-3 max-w-2xl mx-auto reveal reveal-delay-2">
            One partner. One program. Full diversion — with the paperwork to prove it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.headline}
              className={`bg-white border-t-4 border-navy shadow-md hover:shadow-xl transition-shadow duration-300 p-5 sm:p-8 rounded-sm reveal ${card.delay}`}
            >
              <div className="mb-5">{card.icon}</div>
              <h3 className="font-display font-bold text-charcoal text-xl mb-3">{card.headline}</h3>
              <p className="font-body text-charcoal/70 text-base leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Problem & Solution ────────────────────────────────────────────────────────
function ProblemSolutionSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Problem */}
        <div className="bg-charcoal text-white px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
          <p className="section-label mb-4 reveal">The Challenge</p>
          <h2
            className="font-display font-bold text-white mb-6 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Traditional Recyclers Keep Saying No
          </h2>
          <p className="font-body text-white/70 leading-relaxed mb-8 reveal reveal-delay-2">
            Complex plastic streams — label matrices, adhesive films, mixed rigid components —
            have no path in conventional recycling. Landfill costs keep rising. ESG
            commitments are tightening. Manufacturers are stuck with waste and no good answer.
          </p>
          <ul className="space-y-4 reveal reveal-delay-3">
            {[
              'Label matrix and adhesive waste are rejected by most recyclers',
              'Landfill tipping fees and regulations increase every year',
              'Zero-waste goals require documented proof — not just disposal',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="text-terra font-bold mt-0.5 flex-shrink-0">&#10005;</span>
                <span className="font-body text-white/70 text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Solution */}
        <div className="bg-navy text-white px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
          <p className="section-label mb-4 reveal">The Solution</p>
          <h2
            className="font-display font-bold text-white mb-6 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
          >
            Cardinal Takes What No One Else Will
          </h2>
          <p className="font-body text-white/70 leading-relaxed mb-8 reveal reveal-delay-2">
            We connect your waste stream to specialized recovery infrastructure that doesn't
            exist in conventional recycling. Every pound is documented, diverted, and
            reported — ready for your ESG records and Zero-Waste certification.
          </p>
          <ul className="space-y-4 reveal reveal-delay-3">
            {[
              '100% landfill diversion — verified and documented',
              'Specialists in label matrix, transit trays, and mixed streams',
              'Full impact report: pounds diverted, carbon offset, energy displaced',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="text-terra font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                <span className="font-body text-white/70 text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ──────────────────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Tell Us What You Have',
      description:
        'Describe your waste stream. We confirm fit within one business day — no commitment required.',
    },
    {
      number: '02',
      title: 'Ship a Small Sample',
      description:
        'Send 5–10 lbs. We run full lab analysis at no cost and confirm compatibility within 5 days.',
    },
    {
      number: '03',
      title: 'We Handle Everything',
      description:
        'Your material enters our recovery network. Zero landfill. Fully managed from pickup to processing.',
    },
    {
      number: '04',
      title: 'Get Your Report',
      description:
        'Pounds diverted, carbon offset, energy displaced — formatted and ready for your ESG records.',
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3 reveal">The Process</p>
          <h2
            className="font-display font-bold text-charcoal reveal reveal-delay-1"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Simple Process. Guaranteed Results.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-navy/20"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative text-center reveal reveal-delay-${index + 1}`}
            >
              {/* Background number */}
              <div
                className="font-display font-bold text-navy/10 leading-none mb-2 select-none text-[4rem] sm:text-[5rem]"
                aria-hidden="true"
              >
                {step.number}
              </div>

              {/* Circle icon */}
              <div className="w-12 h-12 rounded-full bg-terra flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="font-display font-bold text-white text-sm">{index + 1}</span>
              </div>

              <h3 className="font-display font-bold text-charcoal text-lg mb-3">{step.title}</h3>
              <p className="font-body text-charcoal/70 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Industries Served ─────────────────────────────────────────────────────────
function IndustriesSection() {
  const industries = [
    { icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z', name: 'Label Manufacturers & Converters' },
    { icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z', name: 'Product Assemblers & OEMs' },
    { icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', name: 'Packaging & Converting Companies' },
    { icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', name: 'Distribution & Fulfillment Centers' },
    { icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', name: 'Material Processors' },
    { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', name: 'Waste Management Operations' },
    { icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18', name: 'Automotive Parts Manufacturers' },
    { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', name: 'Medical Device & Pharmaceutical' },
    { icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8', name: 'Aerospace & Defense Suppliers' },
    { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', name: 'Agricultural Plastics & Film' },
    { icon: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z', name: 'Furniture & Home Goods Makers' },
    { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', name: 'Personal Care & Cosmetics' },
  ]

  return (
    <section className="bg-fog py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3 reveal">Who We Work With</p>
          <h2
            className="font-display font-bold text-charcoal mb-4 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Industries We Serve
          </h2>
          <p className="font-body text-charcoal/70 text-lg max-w-2xl mx-auto reveal reveal-delay-2">
            If your operation generates complex plastic waste that traditional recyclers won't take,
            you're exactly who we built this for. Don't see your industry? Contact us anyway.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className={`bg-white border border-charcoal/10 hover:border-terra hover:shadow-md transition-all duration-300 p-3 sm:p-5 rounded-sm flex flex-col items-center text-center gap-2 sm:gap-3 reveal reveal-delay-${(index % 4) + 1}`}
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-navy flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
              </svg>
              <span className="font-display font-semibold text-charcoal text-xs sm:text-sm leading-snug">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3 reveal">Partner Feedback</p>
          <h2
            className="font-display font-bold text-charcoal reveal reveal-delay-1"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            What Our Partners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder cards — replaced when real testimonials are available */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`bg-fog border border-charcoal/10 p-5 sm:p-8 rounded-sm reveal reveal-delay-${i}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-charcoal/60 text-sm italic leading-relaxed mb-5">
                &ldquo;Partner feedback coming soon. We're actively building relationships with
                manufacturers across the region—yours could be featured here.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-navy/40" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-semibold text-charcoal text-sm">Your Company</div>
                  <div className="font-body text-charcoal/50 text-xs">Industry Partner</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <p className="font-body text-charcoal/50 text-sm">
            Become a founding partner.{' '}
            <a href="/contact" className="text-terra hover:underline font-medium">
              Request your sample evaluation today →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Partners Strip ────────────────────────────────────────────────────────────
function PartnersStrip() {
  const partners = [
    'Cement Manufacturers',
    'Energy Recovery Facilities',
    'Industrial Processors',
    'Regional Logistics Partners',
    'Zero-Waste Certified Plants',
  ]

  return (
    <section className="bg-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-display font-semibold text-white/50 text-sm tracking-widest uppercase text-center mb-8">
          Recovery Network Partners:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((partner) => (
            <span
              key={partner}
              className="font-display font-semibold text-white/30 text-lg tracking-wide hover:text-white/60 transition-colors duration-200"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA Section ──────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="bg-terra py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="font-display font-bold text-white mb-4 reveal"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Your Waste Has Value. Let's Prove It.
          </h2>
          <p className="font-body text-white/80 text-lg max-w-2xl mx-auto reveal reveal-delay-1">
            Start with a free sample evaluation. Send us 5–10 lbs and we'll tell you exactly
            what we can do — within 5 business days.
          </p>
        </div>

        {/* Simple form — client interaction handled via link to contact page */}
        <div className="bg-white rounded-sm shadow-xl p-5 sm:p-8 reveal reveal-delay-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="cta-name" className="block font-body font-medium text-charcoal text-sm mb-1">
                Full Name
              </label>
              <input
                id="cta-name"
                type="text"
                placeholder="Jane Smith"
                className="border border-charcoal/20 rounded-sm px-4 py-3 w-full focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy font-body text-charcoal"
              />
            </div>
            <div>
              <label htmlFor="cta-company" className="block font-body font-medium text-charcoal text-sm mb-1">
                Company
              </label>
              <input
                id="cta-company"
                type="text"
                placeholder="Acme Manufacturing"
                className="border border-charcoal/20 rounded-sm px-4 py-3 w-full focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy font-body text-charcoal"
              />
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="cta-email" className="block font-body font-medium text-charcoal text-sm mb-1">
              Work Email
            </label>
            <input
              id="cta-email"
              type="email"
              placeholder="jane@acmemfg.com"
              className="border border-charcoal/20 rounded-sm px-4 py-3 w-full focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy font-body text-charcoal"
            />
          </div>
          <Link
            href="/contact"
            className="block w-full text-center bg-navy text-white font-display font-bold tracking-wide py-4 rounded-sm hover:bg-navy-dark transition-colors duration-200"
          >
            Request Evaluation &rarr;
          </Link>
          <p className="font-body text-charcoal/50 text-xs text-center mt-3">
            No commitment required. We respond within one business day.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Page Export ───────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ValuePropsSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <IndustriesSection />
      <TestimonialsSection />
      <PartnersStrip />
      <CTASection />
    </>
  )
}
