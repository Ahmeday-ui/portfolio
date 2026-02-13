# Setup Guide: Portfolio Configuration

## Quick Start

### 1. Install Dependencies
```bash
cd portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser

### 3. Add Your HTML Projects (Optional)

#### Step-by-Step:

1. **Create HTML projects directory**:
   ```bash
   mkdir -p public/projects-html
   ```

2. **Copy your HTML files** from the original Projects folder:
   ```bash
   # Example for Windows
   copy ..\..\Projects\A.AYOUBI_JBKP_ANALYSEDESURVIE.html public/projects-html/
   copy ..\..\Projects\AYOUBI_CHOUKOUKOU_Projet-Transverses-NBA.html public/projects-html/
   ```

3. **Update project configuration** in `pages/projects/[project].js`:
   ```javascript
   // Find this section:
   htmlReportUrl: '/projects-html/your-file-name.html',
   hasHtmlReport: true,
   ```

4. **Restart dev server** - changes take effect immediately

### 4. Customize Content

#### Edit Personal Information:
- **About**: `pages/about.js` - Bio and timeline
- **Skills**: `pages/skills.js` - Technical proficiencies
- **Projects**: `pages/projects.js` - Project listings
- **Research**: `pages/research.js` - Publications
- **Contact**: `pages/contact.js` - Links and email

#### Update Project Details:
- File: `pages/projects/[project].js` - Modify `projectData` object
- Each project has:
  - Title, subtitle, overview
  - Objectives, methodology
  - Technical stack, datasets
  - Results and insights
  - Links to GitHub, papers, reports

### 5. Deployment

#### Local Development Only:
```bash
npm run dev
```

#### Production Build:
```bash
npm run build
npm start
```

#### Static Export:
```bash
npm run export
# Creates 'out' folder with static files
```

#### Deploy to Vercel:
```bash
npm i -g vercel
vercel
```

## File Structure Reference

```
portfolio/
├── public/
│   └── projects-html/          ← Place HTML reports here
│       ├── survival.html
│       └── nba.html
├── pages/
│   ├── index.js               ← Homepage
│   ├── about.js               ← Edit bio, timeline
│   ├── skills.js              ← Update technical skills
│   ├── projects.js            ← Update project list
│   ├── projects/[project].js  ← Edit project details & HTML links
│   ├── research.js            ← Add publications
│   ├── contact.js             ← Contact info
└── README.md                  ← Full documentation
```

## Environment Setup

Create `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Key Features Enabled

✅ Responsive design (mobile, tablet, desktop)
✅ Dark theme with cyan accents
✅ Smooth animations and transitions
✅ Project filtering and search
✅ Skills proficiency bars
✅ Local HTML report embedding
✅ Contact form (backend config ready)
✅ Social media integration
✅ Navigation menu (desktop & mobile)

## Common Customizations

### Change Color Scheme
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0f172a',
  accent: '#00d9ff',
}
```

### Add New Project
1. Add data to `projectData` in `pages/projects/[project].js`
2. Add to `allProjects` array in `pages/projects.js`
3. Create HTML report in `public/projects-html/`
4. Set `hasHtmlReport: true` in project data

### Update Navigation Links
Edit `navigation Items` in `components/Navigation.js`

### Modify Homepage
Edit `pages/index.js` - change hero text, featured projects, CTA

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Node Modules Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
npm run lint        # Check for errors
npm run build       # Rebuild
```

### HTML Reports Not Loading
1. Check file path in `public/projects-html/`
2. Verify URL in project data matches filename
3. Clear cache: Ctrl+Shift+Delete
4. Restart dev server

## Support Resources

- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

## Next Steps

1. ✅ Install dependencies
2. ✅ Run dev server
3. ✅ Customize content
4. ✅ Add HTML projects
5. ✅ Test locally
6. ✅ Deploy to Vercel (optional)

---

**Ready to go!** Your portfolio is fully configured and ready to use locally. All HTML projects remain secure and are served locally without any external uploads.
