'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What types of plastic waste do you accept?',
    answer:
      'We specialize in complex streams that traditional recyclers reject: label matrix waste, transit trays, adhesive-backed films, mixed rigid plastics, and multi-layer composite materials. If you have been told "no" before, contact us — we likely have a path for your material.',
  },
  {
    question: 'How does the sample evaluation work?',
    answer:
      'Send us 5–10 lbs of your waste material. We run full lab analysis at no cost and return a compatibility report within 5 business days. The report includes projected diversion volumes, carbon offset estimates, and pricing for ongoing service.',
  },
  {
    question: 'Do you provide documentation for ESG and Zero-Waste reporting?',
    answer:
      'Yes. Every load we process is tracked and documented. You receive an impact report showing pounds diverted, landfill avoidance, carbon offset equivalent, and energy displaced — formatted for ESG reporting and Zero-Waste certification.',
  },
  {
    question: 'What is your service area?',
    answer:
      'We work with manufacturers nationwide. Pickup and logistics can be arranged for regular ongoing service. For initial sample evaluations, you can ship material to us directly from anywhere in the U.S.',
  },
  {
    question: 'How long does it take to start a full recovery program?',
    answer:
      'After a successful sample evaluation, most programs are operational within 2–3 weeks. We handle all logistics coordination and paperwork so your team can stay focused on production.',
  },
  {
    question: 'Is there a minimum volume requirement?',
    answer:
      'There is no minimum for the initial sample evaluation. For ongoing service, we work with a range of volumes — from a few hundred pounds per month to multi-ton weekly pickups. We will tell you upfront if your volume is too low to make the program work.',
  },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const now = new Date()
      const timestamp = now.toLocaleString('en-US', {
        month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true,
      })
      const response = await fetch('https://formsubmit.co/ajax/cardinalrs.us@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Evaluation Request — ${data.get('name')} @ ${data.get('company')} (${timestamp})`,
          _replyto: data.get('email'),
          _captcha: 'false',
          _template: 'table',
          Name: data.get('name'),
          Company: data.get('company'),
          Email: data.get('email'),
          Phone: data.get('phone') || 'Not provided',
          'Material Type': data.get('material'),
          'Estimated Volume': data.get('volume') || 'Not specified',
          Message: data.get('message') || '',
        }),
      })
      const result = await response.json()
      if (result.success) {
        setFormState('sent')
        form.reset()
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <>
      {/* Page Header */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1F2E 0%, #1B3A5C 100%)' }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-terra" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none" aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at right center, rgba(91,141,184,0.10) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Get In Touch</p>
          <h1
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Let's Talk About<br />Your Waste Stream
          </h1>
          <p className="font-body text-white/70 text-lg max-w-xl">
            Tell us what you have. We respond within one business day — no commitment required.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-fog py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <div>
              <h2 className="font-display font-bold text-charcoal text-2xl mb-2">
                Request a Free Evaluation
              </h2>
              <p className="font-body text-charcoal/60 text-sm mb-8">
                Fill out the form below and we'll follow up to arrange your no-cost sample evaluation.
              </p>

              {formState === 'sent' ? (
                <div className="bg-navy text-white p-6 sm:p-10 rounded-sm text-center">
                  <svg className="w-14 h-14 text-gold mx-auto mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-display font-bold text-xl mb-3">Message Received</h3>
                  <p className="font-body text-white/70 leading-relaxed">
                    We'll be in touch within one business day. Thank you for reaching out.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-white p-5 sm:p-8 rounded-sm shadow-sm border border-charcoal/10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block font-body font-medium text-charcoal text-sm mb-1.5">
                        Full Name <span className="text-terra">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" required
                        placeholder="Jane Smith"
                        className="w-full border border-charcoal/20 rounded-sm px-4 py-3 font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block font-body font-medium text-charcoal text-sm mb-1.5">
                        Company <span className="text-terra">*</span>
                      </label>
                      <input
                        id="company" name="company" type="text" required
                        placeholder="Acme Manufacturing"
                        className="w-full border border-charcoal/20 rounded-sm px-4 py-3 font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block font-body font-medium text-charcoal text-sm mb-1.5">
                        Work Email <span className="text-terra">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        placeholder="jane@acmemfg.com"
                        className="w-full border border-charcoal/20 rounded-sm px-4 py-3 font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-body font-medium text-charcoal text-sm mb-1.5">
                        Phone
                      </label>
                      <input
                        id="phone" name="phone" type="tel"
                        placeholder="(555) 000-0000"
                        className="w-full border border-charcoal/20 rounded-sm px-4 py-3 font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="material" className="block font-body font-medium text-charcoal text-sm mb-1.5">
                      Material Type <span className="text-terra">*</span>
                    </label>
                    <select
                      id="material" name="material" required
                      defaultValue=""
                      className="w-full border border-charcoal/20 rounded-sm px-4 py-3 font-body text-charcoal focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy bg-white"
                    >
                      <option value="" disabled>Select material type...</option>
                      <option>Label Matrix / Liner Waste</option>
                      <option>Transit Trays / Carrier Tape</option>
                      <option>Adhesive-Backed Film</option>
                      <option>Mixed Rigid Plastics</option>
                      <option>Multi-Layer Composite</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="volume" className="block font-body font-medium text-charcoal text-sm mb-1.5">
                      Estimated Monthly Volume
                    </label>
                    <select
                      id="volume" name="volume"
                      defaultValue=""
                      className="w-full border border-charcoal/20 rounded-sm px-4 py-3 font-body text-charcoal focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy bg-white"
                    >
                      <option value="" disabled>Select estimated volume...</option>
                      <option>Under 500 lbs / month</option>
                      <option>500 – 2,000 lbs / month</option>
                      <option>2,000 – 10,000 lbs / month</option>
                      <option>10,000+ lbs / month</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body font-medium text-charcoal text-sm mb-1.5">
                      Tell Us More
                    </label>
                    <textarea
                      id="message" name="message" rows={4}
                      placeholder="Describe your waste stream, current disposal method, or any special characteristics..."
                      className="w-full border border-charcoal/20 rounded-sm px-4 py-3 font-body text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy resize-none"
                    />
                  </div>

                  {formState === 'error' && (
                    <p className="font-body text-terra text-sm">
                      Something went wrong. Please email us at{' '}
                      <span className="font-medium select-all">cardinalrs.us@gmail.com</span>
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="w-full bg-navy text-white font-display font-bold tracking-wide py-4 rounded-sm hover:bg-navy/90 transition-colors duration-200 disabled:opacity-60"
                  >
                    {formState === 'sending' ? 'Sending...' : 'Request Evaluation →'}
                  </button>
                  <p className="font-body text-charcoal/40 text-xs text-center">
                    No commitment required. We respond within one business day.
                  </p>
                  <p className="font-body text-charcoal/30 text-xs text-center">
                    Or email us directly: <span className="select-all text-charcoal/40">cardinalrs.us@gmail.com</span>
                  </p>
                </form>
              )}
            </div>

            {/* Right column — contact info + map */}
            <div className="flex flex-col gap-6">
              {/* Contact info card */}
              <div className="bg-navy text-white p-5 sm:p-8 rounded-sm">
                <h3 className="font-display font-bold text-white text-xl mb-6">Direct Contact</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-white/50 text-xs uppercase tracking-wider mb-1">Email</p>
                      <span className="font-body text-white select-all">
                        cardinalrs.us@gmail.com
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-white/50 text-xs uppercase tracking-wider mb-1">Location</p>
                      <p className="font-body text-white">106 W. 3rd Ave, Trappe, PA 19426</p>
                      <p className="font-body text-white/60 text-sm mt-0.5">Serving manufacturers nationwide</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-terra" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-white/50 text-xs uppercase tracking-wider mb-1">Response Time</p>
                      <p className="font-body text-white">Within 1 business day</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Quick action */}
              <div className="bg-terra/10 border border-terra/20 rounded-sm p-6">
                <p className="font-display font-bold text-charcoal text-sm mb-2">
                  Prefer to reach out directly?
                </p>
                <p className="font-body text-charcoal/70 text-sm mb-4 leading-relaxed">
                  Send us a message describing your material and we'll respond within one business day.
                </p>
                <p className="font-body text-sm text-charcoal font-medium select-all">
                  cardinalrs.us@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Common Questions</p>
            <h2
              className="font-display font-bold text-charcoal"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-charcoal/10">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full text-left py-5 flex items-start justify-between gap-4 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-display font-semibold text-charcoal group-hover:text-terra transition-colors duration-200 text-base leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border border-charcoal/20 flex items-center justify-center transition-transform duration-200 mt-0.5 ${openFaq === i ? 'rotate-45 border-terra' : ''}`}
                  >
                    <svg className="w-3 h-3 text-charcoal/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="pb-5 pr-10">
                    <p className="font-body text-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 bg-fog border border-charcoal/10 rounded-sm p-5 sm:p-8 text-center">
            <p className="font-body text-charcoal/70 mb-2">Still have questions?</p>
            <span className="font-display font-bold text-terra select-all">
              cardinalrs.us@gmail.com
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
