# Quick Reference Card

## 🚀 Get Started

```bash
# 1. Setup (choose one)
powershell -ExecutionPolicy Bypass -File setup.ps1    # Windows
bash setup.sh                                          # macOS/Linux

# 2. Run locally
npm run dev
# Open http://localhost:3000
```

## 📝 Common Commands

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Build for production
npm start          # Run production build
npm run lint       # Check code quality
npm run export     # Create static export (for GitHub Pages, etc.)
npm install        # Install dependencies
npm update         # Update packages
```

## 🎨 Customization Quick Tasks

### Change Color Scheme
File: `tailwind.config.js`
```javascript
colors: {
  primary: '#0f172a',      // Dark background
  accent: '#00d9ff',       // Highlight color
}
```

### Update Hero Text
File: `pages/index.js` (in Hero component section)
```javascript
<h1>Your New Title Here</h1>
<p>Your tagline here</p>
```

### Add Project
File: `pages/projects/[project].js`
```javascript
'my-project': {
  title: 'Project Title',
  description: 'Description...',
  // ... other fields
}
```

### Update Skills
File: `pages/skills.js`
```javascript
skillCategories = [
  {
    category: 'New Category',
    items: ['Skill 1', 'Skill 2', ...]
  }
]
```

### Add Publication
File: `pages/research.js`
```javascript
publications = [
  {
    title: 'Paper Title',
    authors: 'Names',
    year: 2024,
    // ... other fields
  }
]
```

## 📱 Navigation Links

All major links in site are in:
- `components/Navigation.js` - Top menu
- `components/Footer.js` - Footer links
- `pages/index.js` - Homepage buttons
- Individual page CTA buttons

Update URLs there directly.

## 🔗 Important File Paths

```
portfolio/
├── pages/                    # Edit page content
├── components/               # Edit components
├── styles/globals.css        # Global CSS
├── public/
│   └── projects-html/        # Put HTML files here ← IMPORTANT
├── portfolio.config.js       # Theme settings
└── README.md                 # Full documentation
```

## 🌐 Add HTML Project Report

1. Place HTML in: `public/projects-html/your-file.html`
2. Update in `pages/projects/[project].js`:
   ```javascript
   htmlReportUrl: '/projects-html/your-file.html',
   hasHtmlReport: true,
   ```
3. Restart dev server
4. Visit project page - iframe will show report

## 🔗 Update Links

**Social & External Links:**
- Hero section: `components/Hero.js`
- Footer: `components/Footer.js`  
- Contact page: `pages/contact.js`
- Project detail: `pages/projects/[project].js`

Replace URLs:
```javascript
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourprofile"
href="https://scholar.google.com/..."
href="mailto:your@email.com"
```

## 🎯 Responsive Design

Already handled! But to test:
```bash
npm run dev
# Open DevTools (F12)
# Click responsive design mode icon
# Test on: Mobile (375px), Tablet (768px), Desktop (1024px+)
```

## 📦 Deploy

### Quick Deploy to Vercel
```bash
npm i -g vercel
vercel
# Follow prompts to connect GitHub and deploy
```

### Docker Deploy
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

See `DEPLOYMENT.md` for more options.

## 🐛 Debugging

```bash
# Check for errors
npm run lint

# View detailed build errors
npm run build 2>&1 | head -100

# Check what will be deployed
npm run export
ls -la out/
```

## 🆘 Common Issues

| Problem | Solution |
|---------|----------|
| Port 3000 busy | `npm run dev -- -p 3001` |
| Module not found | `npm install && npm run dev` |
| Changes not showing | Hard refresh: `Ctrl+Shift+R` |
| CSS broken | Restart dev server |
| HTML not loading | Check path: `/public/projects-html/file.html` |
| Build error | `npm run lint` to see errors |

## 📚 Key Files to Know

| File | Purpose | Edit When... |
|------|---------|-------------|
| `package.json` | Dependencies | Need new package |
| `.env.local` | Environment vars | Changing deployment URL |
| `tailwind.config.js` | Theme colors | Want different colors |
| `pages/index.js` | Homepage | Updating featured projects |
| `pages/projects/[project].js` | Project details | Adding/editing projects |
| `components/Navigation.js` | Menu | Changing nav links |

## 📄 Documentation

- **Full Guide**: `README.md`
- **Setup**: `SETUP.md`
- **Deployment**: `DEPLOYMENT.md`
- **Structure**: `PROJECT_STRUCTURE.md` ← You are here

## ✨ Pro Tips

1. **Use Ctrl+F** in `pages/_app.js` and other files to find and replace text quickly
2. **Restart dev server** after editing config files (`.env`, `tailwind.config.js`, `next.config.js`)
3. **Test locally first** before deploying - `npm run build && npm start`
4. **Commit to Git** for version control - even if just for local backups
5. **Keep backup** of original HTML files before copying

## 🎓 Learning Resources

- Next.js: nextjs.org/docs
- React: react.dev
- Tailwind: tailwindcss.com/docs
- Framer Motion: framer.com/motion

## ⏱️ Time Estimates

| Task | Time |
|------|------|
| Initial setup | 5 min |
| Customize text/colors | 15 min |
| Add your projects | 30 min |
| Test locally | 10 min |
| Deploy to Vercel | 5 min |

## 🚀 Next Actions

1. Run setup script
2. `npm run dev`
3. Open http://localhost:3000
4. Customize homepage text
5. Add your projects
6. Add HTML reports
7. Test all links
8. Deploy!

---

**Tip**: Keep this file open in your editor as reference while customizing!
