'use client'
import { useState } from 'react'

// ─── KPI Card ──────────────────────────────────────────────────────────────────
function KPICard({ title, value, sub, color = 'navy' }: { title: string; value: string; sub?: string; color?: string }) {
  const colorMap: Record<string, string> = {
    navy: 'bg-navy text-white',
    terra: 'bg-terra text-white',
    gold: 'bg-[#D4A843] text-white',
    fog: 'bg-white text-charcoal border border-charcoal/10',
  }
  return (
    <div className={`rounded-lg p-5 ${colorMap[color] || colorMap.fog}`}>
      <div className={`text-sm ${color === 'fog' ? 'text-charcoal/50' : 'text-white/60'}`}>{title}</div>
      <div className="font-display font-bold text-2xl mt-1">{value}</div>
      {sub && <div className={`text-xs mt-1 ${color === 'fog' ? 'text-charcoal/40' : 'text-white/40'}`}>{sub}</div>}
    </div>
  )
}

// ─── Status Badge ──────────────────────────────────────────────────────────────
function Badge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Active: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Paid: 'bg-green-100 text-green-700',
    Overdue: 'bg-red-100 text-red-700',
    Available: 'bg-blue-100 text-blue-700',
    Quoted: 'bg-purple-100 text-purple-700',
    Sold: 'bg-green-100 text-green-700',
    Sent: 'bg-gray-100 text-gray-700',
    Accepted: 'bg-green-100 text-green-700',
    Rejected: 'bg-red-100 text-red-700',
    Scheduled: 'bg-blue-100 text-blue-700',
    'In Transit': 'bg-yellow-100 text-yellow-700',
    Delivered: 'bg-green-100 text-green-700',
  }
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${colors[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  )
}

// ─── Sample Data (replace with Google Sheets API calls) ─────────────────────────
const sampleKPIs = [
  { title: 'Today Revenue', value: '$0.00', sub: '0 tons moved' },
  { title: 'This Month Revenue', value: '$0.00', sub: '0 tons' },
  { title: 'AR Outstanding', value: '$0.00', sub: '0 invoices overdue' },
  { title: 'AP Outstanding', value: '$0.00', sub: '0 payments due' },
  { title: 'Active Inventory', value: '0 tons', sub: '0 lots' },
  { title: 'Active Deals', value: '0', sub: '0 quotes pending' },
]

const sampleSuppliers = [
  { name: '—', material: '—', volume: '—', status: '—', contact: '—' },
]

const sampleBuyers = [
  { name: '—', material: '—', price: '—', ar: '—', status: '—' },
]

const sampleInventory = [
  { lot: '—', material: '—', tons: '—', location: '—', status: '—' },
]

const sampleInvoices = [
  { id: '—', buyer: '—', amount: '—', due: '—', status: '—' },
]

const sampleLogistics = [
  { load: '—', from: '—', to: '—', tons: '—', status: '—' },
]

export default function DashboardPage() {
  const [period, setPeriod] = useState('month')

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display font-bold text-charcoal text-2xl">Dashboard</h1>
          <p className="text-charcoal/50 text-sm mt-0.5">Cardinal Resource Solutions — RDF & Refused Plastic Brokerage</p>
        </div>
        <div className="flex items-center gap-2">
          {(['today', 'week', 'month', 'quarter'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                period === p ? 'bg-navy text-white' : 'bg-white text-charcoal/60 hover:bg-charcoal/5'
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {sampleKPIs.map((kpi) => (
          <KPICard key={kpi.title} title={kpi.title} value={kpi.value} sub={kpi.sub} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg border border-charcoal/10 p-5 mb-6">
        <h2 className="font-display font-bold text-charcoal text-lg mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/internal/suppliers" className="px-4 py-2 bg-navy text-white rounded text-sm font-medium hover:bg-navy-dark transition-colors">
            + Add Supplier
          </a>
          <a href="/internal/buyers" className="px-4 py-2 bg-terra text-white rounded text-sm font-medium hover:opacity-90 transition-colors">
            + Add Buyer
          </a>
          <a href="/internal/inventory" className="px-4 py-2 bg-white border border-charcoal/20 text-charcoal rounded text-sm font-medium hover:bg-charcoal/5 transition-colors">
            + Add Inventory
          </a>
          <a href="/internal/quotes" className="px-4 py-2 bg-white border border-charcoal/20 text-charcoal rounded text-sm font-medium hover:bg-charcoal/5 transition-colors">
            + Create Quote
          </a>
          <a href="/internal/invoices" className="px-4 py-2 bg-white border border-charcoal/20 text-charcoal rounded text-sm font-medium hover:bg-charcoal/5 transition-colors">
            + Create Invoice
          </a>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Suppliers */}
        <div className="bg-white rounded-lg border border-charcoal/10 p-5">
          <h2 className="font-display font-bold text-charcoal text-lg mb-4">Suppliers</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-charcoal/40 text-xs uppercase">
                <th className="text-left pb-2 font-medium">Company</th>
                <th className="text-left pb-2 font-medium">Material</th>
                <th className="text-left pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleSuppliers.map((s, i) => (
                <tr key={i} className="border-t border-charcoal/5">
                  <td className="py-2 text-charcoal/70">{s.name}</td>
                  <td className="py-2 text-charcoal/70">{s.material}</td>
                  <td className="py-2"><Badge status={s.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="/internal/suppliers" className="text-terra text-sm font-medium mt-3 inline-block hover:underline">
            View all suppliers →
          </a>
        </div>

        {/* Active Inventory */}
        <div className="bg-white rounded-lg border border-charcoal/10 p-5">
          <h2 className="font-display font-bold text-charcoal text-lg mb-4">Inventory</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-charcoal/40 text-xs uppercase">
                <th className="text-left pb-2 font-medium">Lot</th>
                <th className="text-left pb-2 font-medium">Material</th>
                <th className="text-left pb-2 font-medium">Tons</th>
                <th className="text-left pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleInventory.map((inv, i) => (
                <tr key={i} className="border-t border-charcoal/5">
                  <td className="py-2 text-charcoal/70">{inv.lot}</td>
                  <td className="py-2 text-charcoal/70">{inv.material}</td>
                  <td className="py-2 text-charcoal/70">{inv.tons}</td>
                  <td className="py-2"><Badge status={inv.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="/internal/inventory" className="text-terra text-sm font-medium mt-3 inline-block hover:underline">
            View all inventory →
          </a>
        </div>

        {/* Recent Invoices */}
        <div className="bg-white rounded-lg border border-charcoal/10 p-5">
          <h2 className="font-display font-bold text-charcoal text-lg mb-4">Invoices</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-charcoal/40 text-xs uppercase">
                <th className="text-left pb-2 font-medium">Invoice</th>
                <th className="text-left pb-2 font-medium">Buyer</th>
                <th className="text-left pb-2 font-medium">Amount</th>
                <th className="text-left pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleInvoices.map((inv, i) => (
                <tr key={i} className="border-t border-charcoal/5">
                  <td className="py-2 text-charcoal/70">{inv.id}</td>
                  <td className="py-2 text-charcoal/70">{inv.buyer}</td>
                  <td className="py-2 text-charcoal/70">{inv.amount}</td>
                  <td className="py-2"><Badge status={inv.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="/internal/invoices" className="text-terra text-sm font-medium mt-3 inline-block hover:underline">
            View all invoices →
          </a>
        </div>

        {/* Active Loads */}
        <div className="bg-white rounded-lg border border-charcoal/10 p-5">
          <h2 className="font-display font-bold text-charcoal text-lg mb-4">Logistics</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-charcoal/40 text-xs uppercase">
                <th className="text-left pb-2 font-medium">Load</th>
                <th className="text-left pb-2 font-medium">From → To</th>
                <th className="text-left pb-2 font-medium">Tons</th>
                <th className="text-left pb-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleLogistics.map((l, i) => (
                <tr key={i} className="border-t border-charcoal/5">
                  <td className="py-2 text-charcoal/70">{l.load}</td>
                  <td className="py-2 text-charcoal/70">{l.from} → {l.to}</td>
                  <td className="py-2 text-charcoal/70">{l.tons}</td>
                  <td className="py-2"><Badge status={l.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="/internal/logistics" className="text-terra text-sm font-medium mt-3 inline-block hover:underline">
            View all loads →
          </a>
        </div>
      </div>

      {/* Setup Banner */}
      <div className="mt-6 bg-[#FFF8E1] border border-yellow-200 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722 1.36 3.486 0l5.58 9.92c.75 1.333-.306 2.981-1.743 2.981H5.42c-1.449 0-2.5-1.648-1.743-2.981l5.58-9.92zM10 5a1 1 0 011 1v3a1 1 0 11-2 0V6a1 1 0 011-1zm1 5a1 1 0 10-2 0v2a1 1 0 102 0v-2z" clipRule="evenodd" />
          </svg>
          <div>
            <h3 className="font-display font-bold text-charcoal text-base">Getting Started</h3>
            <p className="text-charcoal/60 text-sm mt-1">
              This dashboard is ready to connect to your Google Sheets. Follow the setup guide to:
            </p>
            <ol className="text-charcoal/60 text-sm mt-2 space-y-1 ml-4 list-decimal">
              <li>Create 12 Google Sheets (see <a href="/internal/settings" className="text-terra font-medium hover:underline">Settings</a> for instructions)</li>
              <li>Create a Google Cloud service account and enable Sheets API</li>
              <li>Connect n8n to Google Sheets for automation</li>
              <li>Import n8n ERP workflows for price monitoring, lead capture, and alerts</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}