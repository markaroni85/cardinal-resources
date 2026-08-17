# CARDINAL RESOURCE SOLUTIONS - Project Context & Prompt Template

## 📋 Current State (as of 8/17/2026)

### ✅ Infrastructure Connected

- **GitHub Repository**: `https://github.com/markaroni85/cardinal-resources` — dedicated repo, contains only this website's code (verified clean, no secrets, no unrelated project files)
- **Remote Config**: `.git/config` → origin = `https://github.com/markaroni85/cardinal-resources.git`
- **Local branch**: `main` (tracks `origin/main`)
- **Vercel Domain**: `cardinalrs.com` — verified via DNS (`A` record → Vercel) and confirmed live. **Not** `cardinalresourcesolutions.com` — that domain has no DNS configured at all, despite earlier docs assuming it was the live domain. If you actually want `cardinalresourcesolutions.com` to be the live site, that requires buying/pointing DNS for it and adding it in Vercel Project Settings → Domains — nobody has done that yet.
- **Deploy method**: Vercel's native Git integration — Vercel watches `main` on the GitHub repo directly and builds/deploys on every push. No GitHub Actions workflow, no GitHub Secrets involved.

> ⚠️ A prior setup mistakenly initialized git at the `C:\TradingPlatform` root and pushed the *entire* trading platform (including credential files) to a differently-named, public repo (`markaroni85/markaroni85-cardinal-resources`). That repo has been made private. If you're reading this in a future session and something about repo/credentials seems off, check that repo's status and confirm all trading-platform credentials were rotated.

### 🔄 Deployment Pipeline

```
Code Changes → git push origin main → Vercel detects push via Git integration → Builds → Deploys to cardinalrs.com
```

### 📁 Repository Structure (key files)

```
cardinal-rs/
├── app/                     # Next.js application source
│   ├── page.tsx             # Home page (hero section, etc.)
│   ├── about/page.tsx
│   ├── services/page.tsx
│   └── contact/page.tsx
├── public/images/           # Local image assets (e.g. hero-forest.jpg)
├── package.json
├── tsconfig.json
├── next.config.mjs
└── ...
```

(No `.github/workflows/deploy-to-vercel.yml` — that workflow referenced a
GitHub Action, `vercel/vercel-action`, that doesn't exist / was never a real
published action, so it always failed. Deployment goes through Vercel's
native Git integration instead. If that file still exists in the repo, it's
safe to delete.)

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
git status            # Check what's changed
git add .             # Stage changes
git commit -m "msg"   # Commit with message
git push origin main  # Vercel picks this up automatically and deploys
```

### To Preview Locally:

```bash
cd C:\TradingPlatform\cardinal-rs
npm install       # Install dependencies (if needed)
npm run dev        # Start development server on http://localhost:3000
```

### To Check Vercel Dashboard:

- Open `https://app.vercel.com/` → Find your project → Deployments tab
- Or check the live site at `https://cardinalrs.com`

---

## ⚠️ Things to Watch For

1. **Branch Name**: Vercel is watching `main` — don't rename it without updating the Vercel project's Production Branch setting too
2. **Node.js Version**: Configured for Node 20 (`package-lock.json`)
3. **Environment Variables**: `.env.local` if needed (for API keys, etc.) — set matching values in Vercel Project Settings → Environment Variables
4. **This repo should only ever contain this website.** Always run git commands from inside `C:\TradingPlatform\cardinal-rs`, never from `C:\TradingPlatform` itself.

---

_Last verified 8/17/2026 — GitHub repo confirmed clean and pushed, Vercel Git integration is the deploy path._
