Pulso Tecnológico

Tech-focused editorial blog built with Astro, Tailwind CSS v4 and Decap CMS.
Focused on high performance, SEO and static generation.

🚀 Overview

Pulso Tecnológico is a Brazilian Portuguese technology blog covering:

- EDI (Electronic Data Interchange)
- Productivity
- Technology trends
- Automation
- AI tools
- Enterprise systems

The project was designed with:

- Static-first architecture
- Excellent Core Web Vitals
- SEO optimization
- Minimal client-side JavaScript
- Editorial dark premium design

⸻

🛠️ Stack

- Astro (SSG)
- Tailwind CSS v4
- Decap CMS
- Vercel
- Markdown content
- RSS Feed
- Sitemap
- Structured SEO

⸻

📁 Project Structure
src/
├── components/
├── layouts/
├── pages/
├── content/blog/
└── styles/

public/
├── admin/
└── images/posts/

⸻

Writing Posts

1. Add the image

Place the cover image inside:
public/images/posts/

Example:
public/images/posts/edi-2026.jpg

2. Create the Markdown file

Create a new .md file inside:
src/content/blog/

Example:
src/content/blog/o-que-e-edi.md

3. Post frontmatter

---

title: "What is EDI and why companies still depend on it in 2026"
description: "Understand why EDI is still critical for B2B integrations."
date: 2026-05-01
cover: "/images/posts/edi-2026.jpg"
category: "EDI"
tags: ["edi", "b2b", "integration"]
author: "Thiago Abreu"
readTime: 5
draft: false
featured: false

---

Local Development

Install dependencies:
npm install
npm run dev
npm run build
npm run preview

🌐 Deployment

Deploy platform:

- Vercel

Recommended setup:

- Automatic deploys from main
- Public repository for portfolio visibility

⸻

🔒 Performance & SEO

- Static generation
- Optimized images
- RSS feed
- Sitemap
- Open Graph metadata
- JSON-LD structured data
- Canonical URLs
- Minimal JavaScript

## 👨‍💻 Developer

Tharick Abreu  
Fullstack JavaScript Developer

- Frontend: React, Astro, Tailwind
- Backend: Node.js, APIs, Docker
- Focus: Fullstack Web Development & Automation

## Git Commands Sequence

1. Initialize Git
   git init
2. Add remote repository
   git remote add origin SEU_LINK_DO_GITHUB

Example:
git remote add origin https://github.com/tharickabreu/pulso-tecnologico.git 3. Add files
git add . 4. Create first commit
git commit -m "Initial commit" 5. Set main branch
git branch -M main 6. Push project
git push -u origin main

Workflow For New Posts

Whenever you publish a new article:
git add .
git commit -m "Add new blog post"
git push

After push:

- Vercel automatically deploys
- Post becomes live
- RSS updates automatically
- Sitemap updates automatically
