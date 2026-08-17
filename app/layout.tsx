import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'

// ─── Google Analytics 4 ────────────────────────────────────────────────────────
// 1. Go to analytics.google.com → create a property for cardinalresourcesolutions.com
// 2. Get your Measurement ID (looks like G-XXXXXXXXXX)
// 3. Replace the value below
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Cardinal Resource Solutions — Industrial Plastic Waste Recovery',
    template: '%s | Cardinal Resource Solutions',
  },
  description:
    'Cardinal Resource Solutions diverts complex industrial plastics — label matrix waste, transit trays, adhesive films — 100% from landfills. Serving manufacturers nationwide from Boyertown, PA. Free sample evaluation.',
  keywords: [
    'industrial plastic waste recovery',
    'label matrix recovery',
    'transit tray recycling',
    'label matrix waste disposal',
    'plastic liner waste recycling',
    'zero waste manufacturing',
    'plastic waste diversion',
    'resource recovery Pennsylvania',
    'B2B plastic recycling',
    'complex plastic waste',
    'adhesive film recycling',
    'ESG plastic waste documentation',
    'zero landfill manufacturer',
    'industrial plastic recycling Pennsylvania',
    'waste stream evaluation',
  ],
  authors: [{ name: 'Cardinal Resource Solutions' }],
  metadataBase: new URL('https://cardinalresourcesolutions.com'),
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Cardinal Resource Solutions — Industrial Plastic Waste Recovery',
    description:
      'We recover what traditional recyclers reject. 100% landfill diversion for label matrix waste, transit trays, and complex plastic streams. Free sample evaluation.',
    type: 'website',
    url: 'https://cardinalresourcesolutions.com',
    siteName: 'Cardinal Resource Solutions',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardinal Resource Solutions — Industrial Plastic Waste Recovery',
    description:
      'We recover what traditional recyclers reject. 100% landfill diversion. Free sample evaluation for manufacturers.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="font-body bg-fog text-charcoal antialiased">
        <Navbar />
        <RevealWrapper>
          <main>{children}</main>
        </RevealWrapper>
        <Footer />
        {/* JSON-LD — LocalBusiness schema for Google */}
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Cardinal Resource Solutions',
            description:
              'Industrial plastic waste recovery. We divert complex plastic streams — label matrix waste, transit trays, adhesive films — 100% from landfills with full ESG documentation.',
            url: 'https://cardinalresourcesolutions.com',
            email: 'cardinalrs.us@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Boyertown',
              addressRegion: 'PA',
              addressCountry: 'US',
            },
            areaServed: { '@type': 'Country', name: 'United States' },
            serviceType: 'Industrial Plastic Waste Recovery',
            priceRange: 'Contact for quote',
            knowsAbout: [
              'Label matrix waste recovery',
              'Transit tray recycling',
              'Industrial plastic diversion',
              'Zero-waste manufacturing programs',
              'ESG sustainability reporting',
            ],
          })}
        </Script>
        {/* Google Analytics — remove the GA_MEASUREMENT_ID placeholder when you have a real ID */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
