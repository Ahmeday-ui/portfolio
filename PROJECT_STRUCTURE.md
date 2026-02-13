# Portfolio Project Structure & File Index

## 📋 Project Overview

Complete AI Engineering portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

- **Status**: Complete and ready for local testing
- **Framework**: Next.js 14+
- **Styling**: Tailwind CSS 3+
- **Animations**: Framer Motion
- **Theme**: Dark mode with cyan accents
- **Target Deployment**: Vercel, Docker, Static hosting, or traditional server

---

## 📁 Directory Tree

```
portfolio/
│
├── pages/                              # Next.js Pages (routing)
│   ├── _app.js                        # App wrapper, global setup, fonts
│   ├── _document.js                   # HTML document structure
│   ├── index.js                       # Homepage (/)
│   ├── about.js                       # About page (/about)
│   ├── skills.js                      # Skills page (/skills)
│   ├── projects.js                    # Projects gallery (/projects)
│   ├── projects/
│   │   └── [project].js              # Dynamic project detail page
│   ├── research.js                    # Research papers (/research)
│   └── contact.js                     # Contact form (/contact)
│
├── components/                         # React Components
│   ├── Navigation.js                  # Top navigation bar with mobile menu
│   ├── Hero.js                        # Hero/welcome section
│   ├── Footer.js                      # Footer with links
│   ├── ProjectCard.js                 # Reusable project card
│   └── SkillsGrid.js                  # Skills grid display
│
├── styles/
│   └── globals.css                    # Global CSS & Tailwind setup
│
├── public/
│   └── projects-html/                 # 🔒 Local HTML project reports (SECURE)
│       ├── (HTML files go here)
│       └── (Served locally, stays on your machine)
│
├── Configuration Files
│   ├── package.json                   # Dependencies and scripts
│   ├── tailwind.config.js             # Tailwind CSS customization
│   ├── postcss.config.js              # PostCSS configuration
│   ├── next.config.js                 # Next.js configuration
│   ├── .eslintrc.json                 # ESLint configuration
│   └── .gitignore                     # Git ignore patterns
│
├── Documentation
│   ├── README.md                      # Main documentation (start here!)
│   ├── SETUP.md                       # Quick setup guide
│   ├── DEPLOYMENT.md                  # Deployment options
│   ├── PROJECT_STRUCTURE.md           # This file
│   └── .env.local (created on setup)  # Environment variables
│
├── Setup Scripts
│   ├── setup.ps1                      # Windows PowerShell setup
│   ├── setup.sh                       # macOS/Linux Bash setup
│   └── (Auto-copy HTML files & install dependencies)
│
└── Build Outputs (after npm run build)
    └── .next/                         # Next.js build cache
```

---

## 🔑 Core Files Explained

### Pages (Routing)

| File | Route | Purpose |
|------|-------|---------|
| `pages/index.js` | `/` | Homepage with hero, featured projects |
| `pages/about.js` | `/about` | Bio, timeline, research interests |
| `pages/skills.js` | `/skills` | Technical proficiencies, skill matrix |
| `pages/projects.js` | `/projects` | Project gallery with filters |
| `pages/projects/[project].js` | `/projects/[slug]` | Individual project detail page |
| `pages/research.js` | `/research` | Publications, research areas |
| `pages/contact.js` | `/contact` | Contact form, social links |

### Components

| Component | Usage | Location |
|-----------|-------|----------|
| `Navigation` | Top navigation bar | Used in every page via layout |
| `Hero` | Welcome section with CTA | `index.js` (homepage) |
| `Footer` | Footer with links | Used in every page |
| `ProjectCard` | Card component for projects | `projects.js`, `index.js` |
| `SkillsGrid` | Grid display for skills | `skills.js` |

### Styling

| File | Purpose |
|------|---------|
| `styles/globals.css` | Global styles, Tailwind directives, custom animations |
| `tailwind.config.js` | Color scheme, fonts, theme customization |
| `postcss.config.js` | PostCSS for Tailwind processing |

### Configuration

| File | Purpose |
|------|---------|
| `next.config.js` | Next.js settings, image optimization, env vars |
| `package.json` | Dependencies, npm scripts |
| `.eslintrc.json` | Code quality linting rules |
| `.gitignore` | Files to exclude from Git |

---

## 📊 Data Structure

### Project Data (`pages/projects/[project].js`)

```javascript
projectData = {
  'slug-name': {
    title: 'Project Title',
    subtitle: 'Short description',
    status: 'completed|ongoing|archived',
    date: '2024',
    category: 'data-science|deep-learning|research|infrastructure',
    overview: 'Full overview text',
    context: 'Background context',
    objectives: ['Obj 1', 'Obj 2', ...],
    methodology: 'How it was done',
    technicalStack: ['Tech 1', 'Tech 2', ...],
    datasets: ['Dataset 1', 'Dataset 2', ...],
    results: ['Result 1', 'Result 2', ...],
    insights: 'Key learnings',
    githubUrl: 'https://github.com/...',
    papersUrl: 'https://...',
    htmlReportUrl: '/projects-html/filename.html',
    hasHtmlReport: true|false,
  }
}
```

### Skills Data (`pages/skills.js`)

```javascript
skillCategories = [
  {
    category: 'Category Name',
    items: ['Skill 1', 'Skill 2', 'Skill 3']
  }
]
```

### Publications (`pages/research.js`)

```javascript
publications = [
  {
    title: 'Paper Title',
    authors: 'Names',
    year: 2024,
    venue: 'Journal Name',
    status: 'published|in-review',
    abstract: 'Abstract text',
    keywords: ['Keyword 1', ...],
    doi: '#',
    url: '#'
  }
]
```

---

## 🎨 Styling System

### Color Scheme (in `tailwind.config.js`)

```
Primary:     #0f172a  (Dark slate - background)
Secondary:   #1e293b  (Lighter slate - cards)
Accent:      #00d9ff  (Cyan - highlights)
Accent Dark: #00a8cc  (Hover state)
Text Main:   #f1f5f9  (Light - primary text)
Text Sec:    #cbd5e1  (Gray - secondary text)
```

### Custom Utilities

- `.section-container` - Max width container with padding
- `.section-title` - Large section heading
- `.btn-primary` - Primary call-to-action button
- `.btn-secondary` - Secondary button
- `.card` - Card component styling
- `.glass-effect` - Glass morphism effect
- `.gradient-text` - Gradient text effect
- `.code-block` - Code snippet styling

### Animations

- `fade-in` - Fade in animation
- `slide-up` - Slide up from bottom
- `glow` - Glow effect for highlights
- Framer Motion animations on components

---

## 🚀 Scripts Available

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
npm run export    # Export to static HTML
```

### Setup Scripts

**Windows (PowerShell)**:
```bash
powershell -ExecutionPolicy Bypass -File setup.ps1
```

**macOS/Linux (Bash)**:
```bash
bash setup.sh
```

These scripts:
- ✓ Install dependencies
- ✓ Create directories
- ✓ Copy HTML projects (if found)
- ✓ Configure environment

---

## 🔒 Security & HTML Projects

### Local-First Approach

- All HTML project files stored locally in `/public/projects-html/`
- **No automatic uploads** to external servers
- **Full control** over deployment
- Can deploy selectively or not at all
- Projects remain secure on your machine

### Adding HTML Reports

1. Place HTML file in `/public/projects-html/`
2. Update project data:
   ```javascript
   htmlReportUrl: '/projects-html/filename.html',
   hasHtmlReport: true,
   ```
3. Accessed locally or deployed with site

### Deployment Options

See `DEPLOYMENT.md` for:
- Vercel (recommended - automatic)
- Docker (self-hosted)
- Static export (GitHub Pages, Netlify)
- Traditional hosting
- AWS deployment

---

## 📝 Customization Guide

### Change Color Theme

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0f172a',    // Change dark background
  accent: '#00d9ff',     // Change highlight color
}
```

### Update Content

| Page | File | Data Location |
|------|------|---------------|
| Homepage | `index.js` | Featured projects array |
| About | `about.js` | Timeline, interests, approach |
| Skills | `skills.js` | Skill categories, proficiencies |
| Projects | `projects.js` | allProjects array |
| Project Detail | `projects/[project].js` | projectData object |
| Research | `research.js` | Publications array |
| Contact | `contact.js` | Contact methods array |

### Add Navigation Links

Edit `components/Navigation.js`:
```javascript
const navItems = [
  { label: 'New Page', href: '/new-page' },
  // ...
]
```

### Modify Footer

Edit `components/Footer.js` - update social links and copyright

---

## 🛠️ Development Workflow

### 1. Local Development
```bash
npm run dev
# Edit pages/components
# Changes reload automatically
# Open http://localhost:3000
```

### 2. Test Features
- Navigation menu
- Responsive design (mobile/tablet/desktop)
- Project filters and links
- Contact form
- External links (GitHub, Scholar, etc.)

### 3. Build & Test Production Build
```bash
npm run build
npm start
# Test at http://localhost:3000
```

### 4. Deploy
Choose from options in `DEPLOYMENT.md`

---

## 📦 Dependencies

### Production
- `next: ^14.0.0` - React framework
- `react: ^18.2.0` - UI library
- `react-dom: ^18.2.0` - DOM rendering
- `framer-motion: ^10.16.4` - Animations
- `react-scroll: ^1.8.10` - Smooth scrolling
- `axios: ^1.6.0` - HTTP client (optional)

### Development
- `tailwindcss: ^3.3.5` - CSS framework
- `postcss: ^8.4.31` - CSS processing
- `autoprefixer: ^10.4.14` - Browser prefixes
- `eslint: ^8.50.0` - Code linting

---

## 🎯 Quick Start Checklist

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Open `http://localhost:3000`
- [ ] Customize `pages/index.js` with your info
- [ ] Update project data in `pages/projects/[project].js`
- [ ] Add HTML reports to `public/projects-html/`
- [ ] Update links (GitHub, LinkedIn, Scholar)
- [ ] Test all pages and links
- [ ] Build and test: `npm run build && npm start`
- [ ] Choose deployment option from `DEPLOYMENT.md`

---

## 📚 Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React Hooks**: https://react.dev/reference/react

---

## ✨ Features Summary

✅ Modern, responsive dark theme
✅ Smooth animations and transitions
✅ Project filtering and organization
✅ Skills proficiency display
✅ Publications and research section
✅ Contact form ready
✅ Social media integration
✅ Local HTML project embedding
✅ Mobile-optimized navigation
✅ SEO-friendly structure
✅ Production-ready code
✅ Multiple deployment options

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Module not found | `npm install` |
| CSS not applying | Restart dev server |
| HTML reports don't load | Check `/public/projects-html/` path |
| Build fails | `npm run lint` to check errors |

---

## 📞 Next Steps

1. **Read**: Review `README.md` for full documentation
2. **Setup**: Run `setup.ps1` (Windows) or `setup.sh` (macOS/Linux)
3. **Develop**: Make changes locally with `npm run dev`
4. **Deploy**: Choose option from `DEPLOYMENT.md`

---

**Your complete AI Engineering portfolio is ready! 🚀**

Start with `npm run dev` and open http://localhost:3000
