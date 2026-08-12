'use client'
import { useState } from 'react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'setup' | 'config' | 'sheets'>('setup')

  const [config, setConfig] = useState({
    sheetDashboardId: '',
    sheetPricingId: '',
    sheetSuppliersId: '',
    sheetBuyersId: '',
    sheetInventoryId: '',
    sheetQuotesId: '',
    sheetInvoicesId: '',
    sheetPOId: '',
    sheetARId: '',
    sheetAPId: '',
    sheetCashflowId: '',
    sheetLogisticsId: '',
    authUser1: 'admin',
    authPass1: '',
    authUser2: 'team2',
    authPass2: '',
    telegramBotToken: '',
    telegramChatId: '',
  })

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-display font-bold text-charcoal text-2xl">Settings</h1>
        <p className="text-charcoal/50 text-sm mt-0.5">Configuration for your ERP system</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-white rounded-lg border border-charcoal/10 p-1 w-fit">
        {(['setup', 'config', 'sheets'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              activeTab === tab ? 'bg-navy text-white' : 'text-charcoal/60 hover:bg-charcoal/5'
            }`}
          >
            {tab === 'setup' ? 'Setup Guide' : tab === 'config' ? 'Configuration' : 'Sheet IDs'}
          </button>
        ))}
      </div>

      {activeTab === 'setup' && (
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white rounded-lg border border-charcoal/10 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-terra flex items-center justify-center text-white font-bold text-sm">1</div>
              <h2 className="font-display font-bold text-charcoal text-lg">Create Google Sheets</h2>
            </div>
            <p className="text-charcoal/60 text-sm mb-4">
              Create 12 new Google Sheets under <code className="bg-charcoal/5 px-1.5 py-0.5 rounded text-xs">cardinalrs.us@gmail.com</code> with these exact names:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-charcoal/40 text-xs uppercase border-b border-charcoal/10">
                    <th className="text-left py-2 pr-4 font-medium">#</th>
                    <th className="text-left py-2 pr-4 font-medium">Sheet Name</th>
                    <th className="text-left py-2 font-medium">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [1, 'CRS-Dashboard', 'KPI overview'],
                    [2, 'CRS-CommodityPricing', 'RDF/plastic market prices'],
                    [3, 'CRS-Suppliers', 'Manufacturers you buy from'],
                    [4, 'CRS-Buyers', 'Energy recovery facilities'],
                    [5, 'CRS-Inventory', 'Material you are holding'],
                    [6, 'CRS-Quotes', 'All quotes sent'],
                    [7, 'CRS-Invoices', 'Sales invoices to buyers'],
                    [8, 'CRS-PurchaseOrders', 'Orders placed to suppliers'],
                    [9, 'CRS-ARAging', 'Accounts Receivable aging'],
                    [10, 'CRS-APAging', 'Accounts Payable aging'],
                    [11, 'CRS-CashFlow', 'Daily P&L'],
                    [12, 'CRS-Logistics', 'Load tracking'],
                  ].map(([num, name, purpose]) => (
                    <tr key={num} className="border-t border-charcoal/5">
                      <td className="py-2 pr-4 text-charcoal/40">{num}</td>
                      <td className="py-2 pr-4 font-mono text-xs">{name}</td>
                      <td className="py-2 text-charcoal/60">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded p-3">
              <p className="text-blue-700 text-sm">
                <strong>Tip:</strong> Import the CSV templates from <code className="text-xs">internal-erp/sheets/</code> to auto-create the columns.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg border border-charcoal/10 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-terra flex items-center justify-center text-white font-bold text-sm">2</div>
              <h2 className="font-display font-bold text-charcoal text-lg">Create Google Cloud Service Account</h2>
            </div>
            <ol className="text-charcoal/60 text-sm space-y-2 ml-11 list-decimal">
              <li>Go to <a href="https://console.cloud.google.com/" target="_blank" className="text-terra hover:underline">Google Cloud Console</a></li>
              <li>Create a new project: <strong>cardinal-rs-erp</strong></li>
              <li>Enable <strong>Google Sheets API</strong> (APIs & Services → Library)</li>
              <li>Create a <strong>Service Account</strong> named <strong>cardinal-rs-erp</strong></li>
              <li>Generate a <strong>JSON key</strong> and save it as <code className="text-xs bg-charcoal/5 px-1 rounded">internal-erp/sa-cardinal-rs.json</code></li>
              <li>Share all 12 Google Sheets with the service account email</li>
            </ol>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg border border-charcoal/10 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-terra flex items-center justify-center text-white font-bold text-sm">3</div>
              <h2 className="font-display font-bold text-charcoal text-lg">Connect n8n to Google Sheets</h2>
            </div>
            <ol className="text-charcoal/60 text-sm space-y-2 ml-11 list-decimal">
              <li>Open n8n: <a href="http://localhost:5678" target="_blank" className="text-terra hover:underline">localhost:5678</a></li>
              <li>Go to <strong>Settings → Credentials</strong></li>
              <li>Add <strong>Google Sheets</strong> credential (Google Service Account)</li>
              <li>Upload the JSON key file</li>
              <li>Name it <strong>cardinal-rs-sheets</strong></li>
            </ol>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-lg border border-charcoal/10 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-terra flex items-center justify-center text-white font-bold text-sm">4</div>
              <h2 className="font-display font-bold text-charcoal text-lg">Import n8n ERP Workflows</h2>
            </div>
            <p className="text-charcoal/60 text-sm mb-3">
              After setting up the Google Sheets credential in n8n, import the workflow JSON files from <code className="text-xs bg-charcoal/5 px-1 rounded">internal-erp/n8n-workflows/</code>:
            </p>
            <div className="bg-charcoal/5 rounded p-3 text-sm text-charcoal/70 space-y-1">
              <div><strong>ERP-A:</strong> Price Monitor — Daily commodity price scraping</div>
              <div><strong>ERP-B:</strong> Lead Capture — Website contact form → Suppliers</div>
              <div><strong>ERP-C:</strong> Quote to Invoice — Auto-create on acceptance</div>
              <div><strong>ERP-D:</strong> Payment Tracker</div>
              <div><strong>ERP-E:</strong> Overdue Alert — Invoice reminders</div>
              <div><strong>ERP-F:</strong> Daily P&L — Telegram summary</div>
              <div><strong>ERP-G:</strong> Weekly Report — Email summary</div>
              <div><strong>ERP-H:</strong> Inventory Alert — Stale material warnings</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'config' && (
        <div className="bg-white rounded-lg border border-charcoal/10 p-6 max-w-2xl">
          <h2 className="font-display font-bold text-charcoal text-lg mb-4">Authentication & Integrations</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Admin User</label>
              <input
                type="text"
                value={config.authUser1}
                onChange={(e) => setConfig({ ...config, authUser1: e.target.value })}
                className="w-full border border-charcoal/20 rounded px-3 py-2 text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Admin Password</label>
              <input
                type="password"
                value={config.authPass1}
                onChange={(e) => setConfig({ ...config, authPass1: e.target.value })}
                className="w-full border border-charcoal/20 rounded px-3 py-2 text-sm"
                placeholder="Password"
              />
            </div>
            <div className="border-t border-charcoal/10 pt-4">
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Team Member 2 Username</label>
              <input
                type="text"
                value={config.authUser2}
                onChange={(e) => setConfig({ ...config, authUser2: e.target.value })}
                className="w-full border border-charcoal/20 rounded px-3 py-2 text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Team Member 2 Password</label>
              <input
                type="password"
                value={config.authPass2}
                onChange={(e) => setConfig({ ...config, authPass2: e.target.value })}
                className="w-full border border-charcoal/20 rounded px-3 py-2 text-sm"
                placeholder="Password"
              />
            </div>
            <div className="border-t border-charcoal/10 pt-4">
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Telegram Bot Token</label>
              <input
                type="text"
                value={config.telegramBotToken}
                onChange={(e) => setConfig({ ...config, telegramBotToken: e.target.value })}
                className="w-full border border-charcoal/20 rounded px-3 py-2 text-sm"
                placeholder="Bot token from @BotFather"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/70 mb-1">Telegram Chat ID</label>
              <input
                type="text"
                value={config.telegramChatId}
                onChange={(e) => setConfig({ ...config, telegramChatId: e.target.value })}
                className="w-full border border-charcoal/20 rounded px-3 py-2 text-sm"
                placeholder="Your Telegram chat ID"
              />
            </div>
            <button className="px-6 py-2 bg-navy text-white rounded text-sm font-medium hover:bg-navy-dark transition-colors">
              Save Configuration
            </button>
          </div>
        </div>
      )}

      {activeTab === 'sheets' && (
        <div className="bg-white rounded-lg border border-charcoal/10 p-6 max-w-2xl">
          <h2 className="font-display font-bold text-charcoal text-lg mb-4">Google Sheet IDs</h2>
          <p className="text-charcoal/60 text-sm mb-4">
            Find each Sheet ID in the URL: <code className="text-xs bg-charcoal/5 px-1 rounded">docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit</code>
          </p>
          <div className="space-y-3">
            {[
              ['CRS-Dashboard', 'sheetDashboardId'],
              ['CRS-CommodityPricing', 'sheetPricingId'],
              ['CRS-Suppliers', 'sheetSuppliersId'],
              ['CRS-Buyers', 'sheetBuyersId'],
              ['CRS-Inventory', 'sheetInventoryId'],
              ['CRS-Quotes', 'sheetQuotesId'],
              ['CRS-Invoices', 'sheetInvoicesId'],
              ['CRS-PurchaseOrders', 'sheetPOId'],
              ['CRS-ARAging', 'sheetARId'],
              ['CRS-APAging', 'sheetAPId'],
              ['CRS-CashFlow', 'sheetCashflowId'],
              ['CRS-Logistics', 'sheetLogisticsId'],
            ].map(([name, key]) => (
              <div key={key} className="flex items-center gap-3">
                <span className="text-sm text-charcoal/60 w-48 flex-shrink-0">{name}</span>
                <input
                  type="text"
                  value={config[key as keyof typeof config] as string}
                  onChange={(e) => setConfig({ ...config, [key]: e.target.value })}
                  className="flex-1 border border-charcoal/20 rounded px-3 py-2 text-sm font-mono"
                  placeholder="1abcdefghijklmnopqrstuvwxyz"
                />
              </div>
            ))}
          </div>
          <button className="mt-6 px-6 py-2 bg-terra text-white rounded text-sm font-medium hover:opacity-90 transition-colors">
            Save Sheet IDs
          </button>
        </div>
      )}
    </div>
  )
}