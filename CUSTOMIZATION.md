# Customization Guide

Complete walk-through for personalizing your AI engineering portfolio.

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Homepage Customization](#homepage-customization)
3. [About Page Personalization](#about-page-personalization)
4. [Skills & Proficiency](#skills--proficiency)
5. [Projects Gallery](#projects-gallery)
6. [Adding HTML Reports](#adding-html-reports)
7. [Research & Publications](#research--publications)
8. [Contact Information](#contact-information)
9. [Color & Theme](#color--theme)
10. [Social Media Links](#social-media-links)
11. [Testing & Validation](#testing--validation)

---

## Initial Setup

### Step 1: Run Setup Script

**Windows:**
```powershell
cd "c:\Users\ahayoubi.UCA\Documents\AHMED_PORTFOLIO"
powershell -ExecutionPolicy Bypass -File setup.ps1
```

**macOS/Linux:**
```bash
cd ~/Documents/AHMED_PORTFOLIO
bash setup.sh
```

### Step 2: Start Dev Server

```bash
npm run dev
```

You should see:
```
> next dev
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

### Step 3: Open in Browser

Visit [http://localhost:3000](http://localhost:3000)

**Congratulations!** Your portfolio is now running locally.

---

## Homepage Customization

**File**: `portfolio/pages/index.js`

### Change Hero Section Title

Find these lines (around line 30-40):
```javascript
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
  <span className="gradient-text">AI Engineer</span> & Researcher
</h1>
```

Replace with your title:
```javascript
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
  <span className="gradient-text">Your Name</span> in Your Field
</h1>
```

### Update Tagline

Find (around line 43):
```javascript
<p className="text-xl text-text-secondary mb-8 max-w-2xl">
  Building AI systems that solve real problems. Combining rigorous research with practical engineering.
</p>
```

Change to your tagline:
```javascript
<p className="text-xl text-text-secondary mb-8 max-w-2xl">
  Your professional tagline here. Brief summary of focus.
</p>
```

### Update Tech Stack Pills

Find the tech stack array (around line 48):
```javascript
const techStack = ['Python', 'Deep Learning', 'MLOps', 'Data Science', 'Research'];
```

Change to your technologies:
```javascript
const techStack = ['PyTorch', 'TensorFlow', 'Kubernetes', 'AWS', 'LLMs'];
```

### Update Featured Projects

Find the `featuredProjects` array (around line 55):
```javascript
const featuredProjects = [
  { slug: 'survival-analysis', ... },
  { slug: 'nba-analysis', ... },
  { slug: 'computer-vision', ... },
];
```

The slugs must match your project directory. Update when you add projects later.

### Change CTA Buttons

Find button text (around line 80-90):
```javascript
<button className="btn-primary">Explore My Projects</button>
<button className="btn-secondary">Research & Papers</button>
```

Customize button labels if desired.

### Update Social Links

Find social links section (around line 100):
```javascript
const socialLinks = [
  { icon: '🐙', label: 'GitHub', url: 'https://github.com' },
  { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com' },
];
```

Replace URLs with your profiles (see [Social Media Links](#social-media-links) section).

---

## About Page Personalization

**File**: `portfolio/pages/about.js`

### Add Your Biography

Find the biography section (around line 35):
```javascript
<p className="text-text-secondary text-lg leading-relaxed mb-6">
  I'm an AI engineer and researcher passionate about...
</p>
```

Replace with your bio (2-3 paragraphs):
```javascript
<p className="text-text-secondary text-lg leading-relaxed mb-6">
  I'm Ahmed, an AI researcher focused on [your focus]. 
  With [X years] of experience in [field], I've worked on projects that...
</p>
```

### Update Research Interests

Find research interests array (around line 45):
```javascript
const researchInterests = [
  'Deep Learning Architecture Design',
  'Computer Vision',
  'Natural Language Processing',
  // ...
];
```

Replace with your interests:
```javascript
const researchInterests = [
  'Your Interest 1',
  'Your Interest 2',
  'Your Interest 3',
  'Your Interest 4',
];
```

### Add Your Timeline

Find timeline array (around line 55):
```javascript
const timeline = [
  {
    date: '2023 - Present',
    title: 'AI Research Engineer',
    organization: 'Organization Name',
    description: 'Description of role',
  },
  // Add more entries
];
```

Update or add your career timeline. Example:
```javascript
const timeline = [
  {
    date: '2024 - Present',
    title: 'Senior ML Engineer',
    organization: 'Your Company',
    description: 'Leading AI/ML initiatives',
  },
  {
    date: '2022 - 2024',
    title: 'Research Scientist',
    organization: 'Previous Company',
    description: 'Published 3 papers on [topic]',
  },
];
```

### Customize Approach Section

Find approach cards (around line 75):
```javascript
const approach = [
  {
    title: 'Methodical',
    description: 'Every solution backed by research...',
  },
  // ...
];
```

Update to reflect your approach:
```javascript
const approach = [
  {
    title: 'Your Approach',
    description: 'Your description of how you work...',
  },
];
```

---

## Skills & Proficiency

**File**: `portfolio/pages/skills.js`

### Update Proficiency Levels

Find proficiency array (around line 30):
```javascript
const proficiencyLevels = [
  { skill: 'Deep Learning', level: 90, category: 'ML/DL' },
  { skill: 'Python', level: 95, category: 'Programming' },
  // ...
];
```

Update with your skills:
```javascript
const proficiencyLevels = [
  { skill: 'PyTorch', level: 92, category: 'ML/DL' },
  { skill: 'Python', level: 95, category: 'Programming' },
  { skill: 'Data Analysis', level: 88, category: 'Data' },
];
```

**Proficiency Scale:**
- 50-60%: Beginner
- 60-75%: Intermediate
- 75-85%: Advanced
- 85-100%: Expert

### Add Skill Categories

Find skill categories (around line 60):
```javascript
const skillCategories = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C++', 'JavaScript', 'SQL'],
  },
  // ...
];
```

Organize your skills by category:
```javascript
const skillCategories = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript'],
  },
  {
    category: 'ML Frameworks',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Kubernetes'],
  },
];
```

### Update Certifications

Find certifications array (around line 90):
```javascript
const certifications = [
  {
    title: 'Advanced Deep Learning Specialization',
    issuer: 'Institution',
    year: 2023,
  },
  // ...
];
```

Add your actual certifications or courses:
```javascript
const certifications = [
  {
    title: 'TensorFlow Advanced Specialization',
    issuer: 'Coursera',
    year: 2024,
  },
  {
    title: 'AWS Machine Learning Specialty',
    issuer: 'AWS',
    year: 2023,
  },
];
```

---

## Projects Gallery

**File**: `portfolio/pages/projects.js`

### Add/Update Projects

Find projects array (around line 45):
```javascript
const allProjects = [
  {
    slug: 'survival-analysis',
    title: 'Survival Analysis Study',
    category: 'data-science',
    status: 'completed',
    tags: ['R', 'Statistics', 'Healthcare'],
    description: 'Statistical analysis of patient survival rates...',
  },
  // More projects...
];
```

To add a new project:
```javascript
const allProjects = [
  // ... existing projects ...
  {
    slug: 'your-project-slug',
    title: 'Your Project Title',
    category: 'deep-learning',  // or: data-science, research, infrastructure
    status: 'completed',        // or: ongoing, archived
    tags: ['PyTorch', 'Computer Vision', 'CNN'],
    description: 'Brief description of your project...',
  },
];
```

### Available Categories

```javascript
// Use ONE of these categories:
'data-science'      // Data analysis, statistics
'deep-learning'     // Neural networks, ML models
'research'          // Papers, studies
'infrastructure'    // DevOps, systems
```

### Project Status Types

```javascript
'completed'   // Finished project (green badge)
'ongoing'     // Current project (blue badge)
'archived'    // Past project (gray badge)
```

---

## Adding HTML Reports

**File**: `portfolio/pages/projects/[project].js`

### Step 1: Copy HTML File

1. Your HTML report files:
   - `A.AYOUBI_JBKP_ANALYSEDESURVIE.html`
   - `AYOUBI_CHOUKOUKOU_Projet-Transverses-NBA.html`

2. Copy them to:
   ```
   portfolio/
   └── public/
       └── projects-html/
           ├── survival-analysis.html
           └── nba-analysis.html
   ```

### Step 2: Create Directory

```bash
mkdir -p "c:\Users\ahayoubi.UCA\Documents\AHMED_PORTFOLIO\portfolio\public\projects-html"
```

### Step 3: Update Project Data

In `pages/projects/[project].js`, find the `projectData` object (around line 10):

```javascript
const projectData = {
  'survival-analysis': {
    title: 'Survival Analysis Study',
    // ... existing data ...
    htmlReportUrl: '/projects-html/survival-analysis.html',
    hasHtmlReport: true,
  },
  'nba-analysis': {
    title: 'NBA Analytics',
    // ... existing data ...
    htmlReportUrl: '/projects-html/nba-analysis.html',
    hasHtmlReport: true,
  },
};
```

### Step 4: Test

1. Restart dev server: `npm run dev`
2. Navigate to project detail page
3. Look for "View Full Report" button
4. Click to view HTML report in iframe

**Note**: HTML reports are viewed locally only. They won't auto-upload when you deploy.

---

## Research & Publications

**File**: `portfolio/pages/research.js`

### Add Publications

Find publications array (around line 25):
```javascript
const publications = [
  {
    title: 'Deep Learning for Time Series Forecasting',
    authors: 'Ahmed Ayoubi, et al.',
    year: 2023,
    venue: 'NeurIPS',
    status: 'published',
    abstract: 'We propose a novel architecture...',
    keywords: ['Deep Learning', 'Time Series'],
    doi: '10.1234/example',
  },
  // More publications...
];
```

Add your publication:
```javascript
{
  title: 'Your Paper Title',
  authors: 'Your Name, Co-authors',
  year: 2024,
  venue: 'Conference or Journal Name',
  status: 'published',  // or: 'in-review', 'preprint'
  abstract: 'Your abstract here...',
  keywords: ['Keyword1', 'Keyword2', 'Keyword3'],
  doi: '10.1234/example.doi',
  url: 'https://arxiv.org/...',
},
```

### Update Research Areas

Find research areas array (around line 60):
```javascript
const researchAreas = [
  {
    title: 'Computer Vision',
    status: 'ongoing',
    description: 'Focus on efficient architectures...',
  },
  // ...
];
```

Update with your research:
```javascript
const researchAreas = [
  {
    title: 'Your Research Area',
    status: 'ongoing',  // or: 'conceptual', 'completed'
    description: 'Your research description...',
  },
];
```

---

## Contact Information

**File**: `portfolio/pages/contact.js`

### Update Contact Methods

Find contact methods array (around line 35):
```javascript
const contactMethods = [
  {
    platform: 'Professional Email',
    value: 'your.email@example.com',
    icon: '✉️',
    link: 'mailto:your.email@example.com',
  },
  {
    platform: 'LinkedIn',
    value: '@yourprofile',
    icon: '💼',
    link: 'https://linkedin.com/in/yourprofile',
  },
  // ...
];
```

Update with your contact info:
```javascript
const contactMethods = [
  {
    platform: 'Professional Email',
    value: 'ahmed@yourdomain.com',
    icon: '✉️',
    link: 'mailto:ahmed@yourdomain.com',
  },
  {
    platform: 'LinkedIn',
    value: '@ahmed-ayoubi',
    icon: '💼',
    link: 'https://linkedin.com/in/ahmed-ayoubi',
  },
];
```

### Update Stats

Find statistics section (around line 70):
```javascript
const stats = [
  { number: '50+', label: 'ML/AI Projects' },
  { number: '5+', label: 'Publications' },
  { number: '10+', label: 'Years Experience' },
];
```

Replace with your stats:
```javascript
const stats = [
  { number: '23', label: 'Projects Completed' },
  { number: '8', label: 'Publications' },
  { number: '5', label: 'Years in AI/ML' },
];
```

### Form Configuration (Backend Later)

The contact form currently logs to console. To set up actual email sending:

1. Get backend email service (SendGrid, Mailgun, Firebase, etc.)
2. Update form submission in contact.js:
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault();
     // Call your backend API
     const response = await fetch('/api/send-email', {
       method: 'POST',
       body: JSON.stringify(formData),
     });
     // Reset form...
   };
   ```

---

## Color & Theme

**File**: `portfolio/tailwind.config.js`

### Change Primary Colors

Find the colors section (around line 8):
```javascript
colors: {
  primary: '#0f172a',        // Dark background
  secondary: '#1e293b',      // Card background
  accent: '#00d9ff',         // Highlight color
  'accent-dark': '#00a8cc',  // Hover state
  'text-primary': '#f1f5f9', // Main text
  'text-secondary': '#cbd5e1', // Secondary text
},
```

**Popular Color Combinations:**

**Blue Theme:**
```javascript
accent: '#3b82f6',           // Blue
'accent-dark': '#1d4ed8',    // Dark blue
```

**Purple Theme:**
```javascript
accent: '#a855f7',           // Purple
'accent-dark': '#9333ea',    // Dark purple
```

**Green Theme:**
```javascript
accent: '#10b981',           // Green
'accent-dark': '#059669',    // Dark green
```

**Orange Theme:**
```javascript
accent: '#f97316',           // Orange
'accent-dark': '#ea580c',    // Dark orange
```

### Change Fonts

Find fonts section (around line 30):
```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['Fira Code', 'monospace'],
},
```

**Other Font Options:**
```javascript
// Modern & Clean
sans: ['Poppins', 'system-ui', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],

// Elegant & Sophisticated
sans: ['Playfair Display', 'serif'],
mono: ['IBM Plex Mono', 'monospace'],

// Friendly & Approachable
sans: ['Outfit', 'system-ui', 'sans-serif'],
mono: ['Inconsolata', 'monospace'],
```

After changing fonts, add Google Fonts import in `pages/_document.js` (around line 15):
```jsx
<link
  href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

---

## Social Media Links

Update across these files: **Locations to find social media URLs:**

### 1. Hero Section
**File**: `components/Hero.js` (around line 60)
```javascript
const socialLinks = [
  { icon: '🐙', label: 'GitHub', url: 'https://github.com/yourusername' },
  { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
  { icon: '📚', label: 'Scholar', url: 'https://scholar.google.com/citations?user=yourID' },
  { icon: '✉️', label: 'Email', url: 'mailto:yourΕmail@example.com' },
];
```

### 2. Footer
**File**: `components/Footer.js` (around line 50)
```javascript
const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/yourusername' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
  { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=yourID' },
];
```

### 3. Contact Page
**File**: `pages/contact.js` (around line 35)
```javascript
const contactMethods = [
  { link: 'https://github.com/yourusername' },
  { link: 'https://linkedin.com/in/yourprofile' },
  { link: 'https://scholar.google.com/citations?user=yourID' },
];
```

### Where to Get Your Links

| Platform | How to Find |
|----------|-----------|
| GitHub | `https://github.com/YOUR_USERNAME` |
| LinkedIn | Visit your profile, copy URL from address bar |
| Google Scholar | `https://scholar.google.com/citations?user=YOUR_USERID` (create profile first) |
| Email | `mailto:you@yourdomain.com` |
| Portfolio Website | `https://yourwebsite.com` |
| Twitter/X | `https://x.com/yourhandle` |
| ResearchGate | `https://www.researchgate.net/profile/YOUR_NAME` |

---

## Testing & Validation

### Before You Deploy

**Checklist:**

- [ ] All text is YOUR content (not placeholder)
- [ ] All project slugs are unique
- [ ] All social links point to your real profiles
- [ ] HTML reports are in `public/projects-html/`
- [ ] Color scheme aligns with your brand
- [ ] No broken links (test each one)
- [ ] Contact form submits successfully
- [ ] Mobile view looks good (test on phone or DevTools)
- [ ] All images load correctly
- [ ] Typography is readable

### Test Locally

```bash
# 1. Start dev server
npm run dev

# 2. Check each page
http://localhost:3000              # Homepage
http://localhost:3000/about        # About page
http://localhost:3000/skills       # Skills page
http://localhost:3000/projects     # Projects gallery
http://localhost:3000/research     # Research page
http://localhost:3000/contact      # Contact page
http://localhost:3000/projects/survival-analysis  # Project detail

# 3. Test on mobile (in browser DevTools)
# Press F12 → Click responsive design mode (Ctrl+Shift+M)
# Test at 375px (mobile), 768px (tablet), 1024px (desktop)
```

### Check for Errors

```bash
# Check code quality
npm run lint

# Build for production (catches errors)
npm run build

# If no errors appear, production build succeeded!
```

### Test All Links

Click every:
- Menu item in navigation
- Social media button
- Project link
- External resource link
- Email link
- Button on contact form

---

## Common Mistakes to Avoid

| Mistake | Fix |
|---------|-----|
| Placeholder text still showing | Find & replace all instances of `example` |
| Social links broken | Use full URLs including `https://` |
| Project slugs have spaces | Use hyphens: `my-project` not `my project` |
| HTML reports not showing | Check path: `/projects-html/filename.html` |
| Colors look wrong | Check that changes are in `tailwind.config.js` AND you restarted server |
| Fonts look plain | Add Google Fonts import to `_document.js` |
| Mobile looks broken | Use Tailwind responsive classes: `sm:`, `md:`, `lg:` |
| Changes not appearing | Clear cache: `Ctrl+Shift+Delete` or hard refresh: `Ctrl+Shift+R` |

---

## Next Steps

1. **Run setup**: `npm run dev`
2. **Customize homepage** text and links
3. **Add your projects** to projects gallery
4. **Update skills** with your proficiencies
5. **Add HTML reports** to projects
6. **Test all links** work correctly
7. **Deploy** to Vercel or your hosting

See `README.md` for full documentation.
See `QUICK_REFERENCE.md` for common commands.
See `DEPLOYMENT.md` for deployment options.

---

**Questions?** Check `README.md` troubleshooting section or review the relevant page file directly.

**You've got this!** Your portfolio is ready to shine. 🚀
