# Cardinal Resource Solutions — Internal ERP Dashboard

## Quick Start

```bash
cd cardinal-rs
npm install
npm run dev
```

Then open: http://localhost:3000/internal/dashboard

## Structure

```
internal-erp/
├── README.md          ← This file
├── SETUP.md           ← Setup guide for Google Sheets + n8n
├── sheets/            ← CSV templates for Google Sheets
├── n8n-workflows/     ← n8n workflow JSON files
├── app/               ← Next.js internal dashboard pages
│   ├── layout.tsx     ← Internal app layout (sidebar + auth)
│   ├── page.tsx       ← Redirect to dashboard
│   ├── dashboard/     ← KPI overview
│   ├── pricing/       ← Commodity pricing tracker
│   ├── suppliers/     ← Supplier management
│   ├── buyers/        ← Buyer/CRM management
│   ├── inventory/     ← Inventory tracking
│   ├── quotes/        ← Quote creation + management
│   ├── invoices/      ← Invoice management
│   ├── purchase-orders/ ← Purchase order management
│   ├── ar-ap/         ← AR/AP aging reports
│   ├── cashflow/      ← Cash flow + P&L charts
│   ├── logistics/     ← Load tracking
│   ├── reports/       ← Weekly/monthly reports
│   └── settings/      ← Google Sheets API config
└── lib/               ← Google Sheets API integration
    ├── sheets.ts      ← Sheets API client
    └── auth.ts        ← Authentication
```

## Google Sheets Integration

The dashboard reads/writes data to Google Sheets using the Google Sheets API.

1. Create a Google Cloud service account (see SETUP.md)
2. Download the JSON key file
3. Place it at `internal-erp/sa-cardinal-rs.json`
4. Set `GOOGLE_SHEETS_KEY_FILE` environment variable

## Environment Variables

Create `.env.local` in `cardinal-rs/`:

```
# Google Sheets API
GOOGLE_SHEETS_KEY_FILE=./internal-erp/sa-cardinal-rs.json

# Sheet IDs (fill these in after creating sheets)
SHEET_DASHBOARD_ID=
SHEET_PRICING_ID=
SHEET_SUPPLIERS_ID=
SHEET_BUYERS_ID=
SHEET_INVENTORY_ID=
SHEET_QUOTES_ID=
SHEET_INVOICES_ID=
SHEET_PO_ID=
SHEET_AR_ID=
SHEET_AP_ID=
SHEET_CASHFLOW_ID=
SHEET_LOGISTICS_ID=

# Simple auth (2 team members)
AUTH_USER1=admin
AUTH_PASS1=
AUTH_USER2=team2
AUTH_PASS2=

# Telegram (for alerts)
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

## Features

### Dashboard (KPI Overview)
- Revenue, volume, margin for today/week/month/quarter
- AR/AP outstanding balances
- Active deals count
- Cash position
- Recent activity feed

### Commodity Pricing
- Current RDF/plastic market prices
- Price trend charts
- Manual price entry
- Price alerts

### Suppliers
- CRUD for supplier contacts
- Waste type tracking
- Monthly volume estimates
- Contract management

### Buyers
- CRUD for buyer contacts
- Accepted materials tracking
- Price/spec management
- AR tracking per buyer

### Inventory
- Lot tracking (material type, weight, condition)
- Location management
- Status tracking (Available/Quoted/Sold/Shipped)
- Target pricing

### Quotes
- Create quotes for suppliers or buyers
- Auto-calculate total value
- Quote status tracking
- Convert to invoice on acceptance

### Invoices
- Create invoices from accepted quotes
- Payment tracking
- Overdue alerts
- AR aging integration

### Purchase Orders
- Create POs for supplier payments
- Cost tracking
- Status management

### AR/AP Aging
- Aging buckets (current, 30-60, 60-90, 90+ days)
- Per-party breakdown
- Total outstanding

### Cash Flow
- Daily revenue vs costs
- Gross margin tracking
- Cash received vs paid
- Net cash flow

### Logistics
- Load tracking (carrier, truck, driver)
- Weight and freight cost
- Status (Scheduled/In Transit/Delivered)
- Manifest file links

### Reports
- Weekly KPI summary
- Monthly P&L
- Email export

## n8n Workflows

See `n8n-workflows/` for automation workflows:
- ERP-A: Price Monitor (daily commodity price scraping)
- ERP-B: Lead Capture (website contact form → Suppliers)
- ERP-C: Quote to Invoice (auto-create on acceptance)
- ERP-D: Payment Tracker
- ERP-E: Overdue Alert (invoice reminders)
- ERP-F: Daily P&L (Telegram summary)
- ERP-G: Weekly Report (email summary)
- ERP-H: Inventory Alert (stale material warnings)