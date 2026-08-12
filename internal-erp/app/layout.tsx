'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Dashboard', href: '/internal/dashboard' },
  { name: 'Pricing', href: '/internal/pricing' },
  { name: 'Suppliers', href: '/internal/suppliers' },
  { name: 'Buyers', href: '/internal/buyers' },
  { name: 'Inventory', href: '/internal/inventory' },
  { name: 'Quotes', href: '/internal/quotes' },
  { name: 'Invoices', href: '/internal/invoices' },
  { name: 'Purchase Orders', href: '/internal/purchase-orders' },
  { name: 'AR / AP', href: '/internal/ar-ap' },
  { name: 'Cash Flow', href: '/internal/cashflow' },
  { name: 'Logistics', href: '/internal/logistics' },
  { name: 'Reports', href: '/internal/reports' },
  { name: 'Settings', href: '/internal/settings' },
]

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname()
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={onClose} />
      )}
      <aside className={`fixed top-0 left-0 z-50 h-full w-64 bg-navy text-white flex flex-col transition-transform duration-200 ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-5 border-b border-white/10">
          <Link href="/internal/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-terra flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <div>
              <div className="font-display font-bold text-sm">Cardinal</div>
              <div className="text-white/50 text-xs">ERP</div>
            </div>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto p-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/internal/dashboard' && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-terra/20 text-terra'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="text-white/40 text-xs">Cardinal Resource Solutions</div>
          <div className="text-white/30 text-xs mt-0.5">v1.0.0</div>
        </div>
      </aside>
    </>
  )
}

export default function InternalLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className="bg-fog min-h-screen">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="lg:ml-64">
          {/* Top bar */}
          <header className="bg-white border-b border-charcoal/10 h-14 flex items-center px-4 lg:px-6 sticky top-0 z-30">
            <button
              className="lg:hidden p-2 rounded hover:bg-charcoal/5"
              onClick={() => setSidebarOpen(true)}
            >
              <svg className="w-5 h-5 text-charcoal/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex-1" />
            <div className="flex items-center gap-4">
              <span className="text-sm text-charcoal/50 hidden sm:inline">cardinalrs.us@gmail.com</span>
              <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center">
                <span className="text-sm font-medium text-navy">CR</span>
              </div>
            </div>
          </header>
          {/* Main content */}
          <main className="p-4 lg:p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}