# Thanh's Portfolio

A production-ready personal portfolio with an **Apple / big-tech product launch** vibe: minimal, premium, smooth scroll-driven sections.

## Tech Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lenis** for smooth scrolling
- **IntersectionObserver** for active section tracking + URL hash updates

## Features

- Full-screen sections that behave like pages
- Smooth scroll transitions between sections
- Deep-linkable URLs: `/#intro`, `/#about`, `/#projects`, etc.
- Nav links + side dots: click → smooth animated scroll
- Reduced-motion support
- Dark mode by default

## Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Development (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Editing Content

All editable content lives in **`src/content/site.ts`**:

| Section   | Fields to edit                                      |
|----------|------------------------------------------------------|
| Site     | `name`, `title`, `tagline`, `shortBio`              |
| Projects | `projects[]` — title, stack, description, links     |
| Experience | `experience[]` — role, company, period, description |
| Education | `education[]` — degree, school, period              |
| Skills   | `skills[]` — array of tech names                    |
| Contact  | `email`, `social[]` — label + url                   |

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── LenisProvider.tsx   # Smooth scroll
│   ├── Nav.tsx             # Top nav
│   ├── SideDots.tsx        # Section indicator
│   ├── SectionWrapper.tsx
│   ├── HashSync.tsx        # URL hash ↔ section sync
│   ├── Providers.tsx
│   └── sections/
│       ├── Intro.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Contact.tsx
│       └── Playground.tsx  # Scroll-driven motion demo
├── content/
│   └── site.ts             # ← Edit your content here
├── context/
│   └── ScrollContext.tsx
├── hooks/
│   └── useReducedMotion.ts
└── lib/
    └── motion.ts           # Animation constants
```

## Deploy to Vercel

### Option 1: Deploy via Git (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** → import your repo
4. Vercel auto-detects Next.js. Click **Deploy**
5. Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (from project root)
vercel

# Follow prompts. For production:
vercel --prod
```

### Build settings (if needed)

- **Framework preset:** Next.js
- **Build command:** `npm run build`
- **Output directory:** `.next` (default)
- **Install command:** `npm install`

## QA Checklist

- [ ] All sections scroll smoothly
- [ ] Nav links scroll to correct section
- [ ] Side dots highlight active section
- [ ] URL updates when scrolling (`/#about`, etc.)
- [ ] Back/forward browser buttons work
- [ ] Projects modal opens/closes
- [ ] Contact form UI works (submit is placeholder)
- [ ] Responsive on mobile/tablet
- [ ] Reduced motion: animations respect preference
- [ ] Lighthouse: good performance, accessibility, SEO
