# Level Up Website

Feminist campaigns for gender justice in the UK.
**Stack:** Astro · Tailwind CSS · Vercel · Markdown content

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → ./dist
npm run preview    # preview the build locally
```

---

## Project Structure

```
src/
├── content/
│   ├── blog/          ← .md files — one per blog post
│   └── campaigns/     ← .md files — one per campaign
├── components/
│   ├── Nav.astro
│   ├── Footer.astro
│   ├── SEO.astro
│   ├── CampaignCard.astro
│   └── BlogCard.astro
├── layouts/
│   └── Layout.astro   ← base layout (GA + SEO + fonts)
├── pages/
│   ├── index.astro
│   ├── about-us.astro
│   ├── our-work.astro
│   ├── contact.astro
│   ├── donate.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── active-campaigns/
│       └── [slug].astro
└── styles/
    └── global.css
public/
├── robots.txt
└── favicon.svg
```

---

## Adding a Blog Post

Create a new file in `src/content/blog/`:

```markdown
---
title:   "Your Post Title"
author:  "Author Name"
date:    "2026-02-15"   # ISO format
excerpt: "One-sentence summary for previews and SEO."
tags:    ["tag1", "tag2"]
---

Your content here in Markdown.
```

Push to GitHub → Vercel deploys automatically.

---

## Adding a Campaign

Create a new file in `src/content/campaigns/`:

```markdown
---
title:       "Campaign Title"
status:      active          # active | won | paused
supporters:  "12.3K"
petitionUrl: "https://..."
excerpt:     "One-sentence description."
emoji:       "✊"
featured:    false
order:       7               # display order
---

Campaign body content here.
```

---

## Activating Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com) → create a property for `welevelup.org`
2. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
3. Open `src/layouts/Layout.astro`
4. Replace `G-XXXXXXXXXX` with your real ID:
   ```js
   const GA_ID = 'G-YOUR_REAL_ID';
   ```
5. Commit and push — GA will be live on the next deploy.

---

## Deploy to Vercel

```bash
# One-time setup
npm i -g vercel
vercel login
vercel --prod

# All future deploys happen automatically on git push
```

Or connect via vercel.com → New Project → Import Git Repository.

---

## Typography System

All text uses **DM Sans** with:
- `letter-spacing: -0.045em` (tracking-tight2)
- Headlines: `line-height: 0.9` (leading-display)
- Paragraphs: `line-height: 0.96` (leading-body)
- Long-form prose: `line-height: 1.6` (leading-relaxed2)

---

## Colour Palette

| Token          | Hex       | Usage                     |
|----------------|-----------|---------------------------|
| `red-brand`    | `#C8102E` | Primary accent, CTAs      |
| `red-dark`     | `#8B0A1E` | Featured campaign bg      |
| `red-light`    | `#E8203E` | Hover states              |
| `black`        | `#0A0A0A` | Nav, hero, dark sections  |
| `offwhite`     | `#F5F0EB` | Alternating sections      |
| `warm`         | `#FBF8F5` | Default page background   |
