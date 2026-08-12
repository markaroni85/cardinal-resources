# Cardinal Resource Solutions — ERP Setup Guide

## Step 1: Create Google Sheets (5 minutes)

1. Go to [sheets.google.com](https://sheets.google.com) while logged into `cardinalrs.us@gmail.com`
2. Create 12 new spreadsheets with these exact names:

| # | Sheet Name | Purpose |
|---|-----------|---------|
| 1 | `CRS-Dashboard` | KPI overview |
| 2 | `CRS-CommodityPricing` | RDF/plastic market prices |
| 3 | `CRS-Suppliers` | Manufacturers you buy from |
| 4 | `CRS-Buyers` | Energy recovery facilities you sell to |
| 5 | `CRS-Inventory` | Material you're holding |
| 6 | `CRS-Quotes` | All quotes sent |
| 7 | `CRS-Invoices` | Sales invoices to buyers |
| 8 | `CRS-PurchaseOrders` | Orders placed to suppliers |
| 9 | `CRS-ARAging` | Accounts Receivable aging |
| 10 | `CRS-APAging` | Accounts Payable aging |
| 11 | `CRS-CashFlow` | Daily P&L |
| 12 | `CRS-Logistics` | Load tracking |

3. For each sheet, open it, go to **File → Import → Upload** and select the corresponding CSV from `cardinal-rs/internal-erp/sheets/`
4. **Note the Sheet ID** for each (found in the URL: `docs.google.com/spreadsheets/d/THIS_IS_THE_SHEET_ID/edit`)

---

## Step 2: Create Google Cloud Service Account (10 minutes)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project: Click project dropdown → **New Project** → Name: `cardinal-rs-erp` → **Create**
3. Enable Google Sheets API:
   - Go to **APIs & Services → Library**
   - Search for "Google Sheets API" → **Enable**
4. Create Service Account:
   - Go to **IAM & Admin → Service Accounts**
   - Click **Create Service Account** → Name: `cardinal-rs-erp` → **Create and Continue**
   - Grant role: **Project → Viewer** (or skip) → **Done**
5. Create Key:
   - Click on the service account email → **Keys** tab → **Add Key → Create new key**
   - Choose **JSON** → Click **Create**
   - This downloads a JSON file — save it as `cardinal-rs/internal-erp/sa-cardinal-rs.json`
6. **Share your sheets with the service account email:**
   - Open each of the 12 Google Sheets
   - Click **Share** → Paste the service account email → **Share**

---

## Step 3: Connect n8n to Google Sheets (5 minutes)

1. Open n8n: http://localhost:5678
2. Go to **Settings → Credentials**
3. Click **Add Credential** → Search for **Google Sheets** → **Google OAuth2** or **Google Service Account**
4. Upload the JSON key file you downloaded in Step 2
5. Name it `cardinal-rs-sheets`
6. Test connection → Should succeed

---

## Step 4: Configure cardinal-rs Internal Dashboard (2 minutes)

1. Copy the service account key to the cardinal-rs project:
   ```
   cardinal-rs/internal-erp/sa-cardinal-rs.json
   ```

2. Install dependencies:
   ```bash
   cd cardinal-rs
   npm install googleapis
   ```

3. The internal dashboard is at: http://localhost:3000/internal/dashboard
   (See `cardinal-rs/internal-erp/README.md` for details)

---

## Step 5: Import n8n ERP Workflows (15 minutes)

After creating the Google Sheets credential in n8n, import the ERP workflows:

1. Open n8n: http://localhost:5678
2. Click **Create** for each workflow file in `cardinal-rs/internal-erp/n8n-workflows/`
3. Copy the JSON content → Paste into n8n editor
4. Save and activate each workflow

---

## Sheet ID Reference

Fill in your Sheet IDs here after creating them:

| Sheet | Sheet ID |
|-------|----------|
| CRS-Dashboard | _______________ |
| CRS-CommodityPricing | _______________ |
| CRS-Suppliers | _______________ |
| CRS-Buyers | _______________ |
| CRS-Inventory | _______________ |
| CRS-Quotes | _______________ |
| CRS-Invoices | _______________ |
| CRS-PurchaseOrders | _______________ |
| CRS-ARAging | _______________ |
| CRS-APAging | _______________ |
| CRS-CashFlow | _______________ |
| CRS-Logistics | _______________ |

---

## Team Members

| Name | Email | Role |
|------|-------|------|
| Admin | cardinalrs.us@gmail.com | Full access |
| Team Member 2 | _______________ | View + Edit |