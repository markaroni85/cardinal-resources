import Link from 'next/link'
import Logo from '@/components/Logo'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  'Label Matrix Recovery',
  'Transit Tray Recovery',
  'Stream Evaluation',
  'System Calibration',
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-12 w-12" />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-white text-lg tracking-wider">
                  CARDINAL
                </span>
                <span className="font-display text-white/60 text-xs tracking-widest uppercase">
                  Resource Solutions
                </span>
              </div>
            </div>
            <p className="font-body text-white/70 text-sm leading-relaxed mt-4">
              Closing the Loop in Resource Recovery
            </p>
            <p className="font-body text-white/50 text-xs leading-relaxed mt-3">
              Diverting complex plastics from landfills and back into productive resource loops.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-white/70 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="font-body text-white/70 text-sm hover:text-gold transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-terra mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-body text-white/70 text-sm">Boyertown, PA</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-terra mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-body text-white/70 text-sm select-all">
                  cardinalrs.us@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-terra mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:+16105550100"
                  className="font-body text-white/70 text-sm hover:text-gold transition-colors duration-200"
                >
                  (610) 555-0100
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-white/50 text-xs">
              &copy; 2025 Cardinal Resource Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {[
                'Trusted Partners',
                'Industry Connections',
                'Circular Solutions',
                'Reliable & Responsible',
                'Nationwide Reach',
              ].map((item, i) => (
                <span key={item} className="font-body text-white/30 text-xs">
                  {i > 0 && <span className="mr-4 text-white/20">|</span>}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
