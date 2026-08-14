# CARDINAL RESOURCE SOLUTIONS - Project Context & Prompt Template

## 📋 Current State (as of 8/14/2026)

### ✅ Infrastructure Connected

- **GitHub Repository**: `https://github.com/markaroni85/cardinal-resources`
- **Remote Config**: `.git/config` → origin = `https://github.com/markaroni85/cardinal-resources.git`
- **Vercel Domain**: `cardinalresourcesolutions.com` + `www.cardinalresourcesolutions.com` (verified & linked)
- **Deploy Workflow**: `.github/workflows/deploy-to-vercel.yml` configured with VERCEL_TOKEN secret

### 🔄 Deployment Pipeline

```
Code Changes → Git Push → GitHub Actions Triggers → Vercel Token Authenticates → Deploys to cardinalresourcesolutions.com
```

### 📁 Repository Structure (key files)

```
cardinal-rs/
├── app/                # Next.js application source
│   └── page.tsx        # Main page component
├── .vercel.json         # Vercel project config + domain mapping
├── .github/workflows/deploy-to-vercel.yml  # CI/CD workflow
├── package.json
├── tsconfig.json
├── next.config.mjs
└── ...
```

### 🔑 Secrets Required

- **VERCEL_TOKEN**: Must be added in GitHub Repository Settings → Secrets and Variables → Actions
    - Find it at: Vercel Console → Project Settings → General → API Tokens → Generate new token
    - Scope: `read` + `write` + `deploy`

---

## 🎯 How to Use This Prompt for Future Conversations

### When Starting a New Task:

1. **State what you want to build/change** (e.g., "Add a contact form", "Update the hero section", "Fix the footer")
2. **Mention any specific requirements** (e.g., "Use Tailwind classes", "Make it responsive", "Include animations")
3. **Reference this file** if you need infrastructure changes

### Example Prompts:

- _"I want to add a contact form section near the bottom of the homepage. It should include name, email, message fields with Formik + React Hook Form validation."_
- _"The hero section needs a redesign with a darker gradient background and updated CTA button styling."_
- _"Add a new page for 'About Us' with our company history and team photos."_

---

## 🚀 Quick Actions Cheat Sheet

### To Push Changes:

```bash
cd C:\TradingPlatform\cardinal-rs
git status          # Check what's changed
git add .           # Stage changes
git commit -m "msg"  # Commit with message
git push origin main  # Deploy to Vercel
```

### To Preview Locally:

```bash
cd C:\TradingPlatform\cardinal-rs
npm install       # Install dependencies (if needed)
npm run dev        # Start development server on http://localhost:3000
```

### To Check Vercel Dashboard:

- Open `https://app.vercel.com/` → Find your project → Deployments tab
- Or check the live site at `https://cardinalresourcesolutions.com`

---

## ⚠️ Things to Watch For

1. **Vercel Token**: Must be in GitHub Secrets or the deploy will fail silently
2. **Branch Name**: Workflow triggers on `main` branch specifically
3. **Node.js Version**: Configured for Node 20 (`package-lock.json`)
4. **Environment Variables**: `.env.local` if needed (for API keys, etc.)

---

## 📝 Next Steps

- [ ] Add VERCEL_TOKEN to GitHub Secrets → Actions
- [ ] Commit current state: `git commit -m "Infrastructure setup complete"`
- [ ] Push to trigger first deployment: `git push origin main`
- [ ] Start making changes using the prompt template above!

---

_Generated on 8/14/2026 by Cline — use this as your starting point for any future development tasks._
