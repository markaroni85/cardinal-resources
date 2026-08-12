import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Free Evaluation',
  description:
    'Request a free plastic waste stream evaluation from Cardinal Resource Solutions. Send a small sample — we return a full compatibility report within 5 business days. No commitment required.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
