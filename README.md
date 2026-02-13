# Ahmed AYOUBI - AI Engineer Portfolio

A modern, professional portfolio website showcasing AI engineering projects, research, and technical expertise. Built with Next.js, Tailwind CSS, and Framer Motion.

## 🌟 Features


## 📋 Pages

### Home (`/`)

### About (`/about`)

### Skills (`/skills`)

### Projects (`/projects`)

### Project Details (`/projects/[project]`)

### Research (`/research`)

### Contact (`/contact`)

## 🚀 Installation

### Prerequisites

### Setup

1. **Navigate to project directory**:
```bash
cd portfolio
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Run development server**:
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**:
```
http://localhost:3000
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Tailwind CSS

Customizable colors and animations in `tailwind.config.js`:

## 🔒 HTML Project Security

Existing HTML projects are served locally as static assets. All HTML reports remain **local and secure**:

1. Place HTML files in `/public/projects-html/`
2. Access via `<iframe>` or direct navigation
3. No external uploads or deployments unless explicitly configured
4. Projects can be optionally deployed later by updating deploy configuration

### Adding HTML Reports

1. Copy your HTML file to: `public/projects-html/your-project.html`
2. Update project data in `pages/projects/[project].js`:
```javascript
htmlReportUrl: '/projects-html/your-project.html',
hasHtmlReport: true,
```

## 📁 Project Structure

```
portfolio/
├── pages/
│   ├── _app.js              # App wrapper and global setup
│   ├── _document.js         # HTML document structure
│   ├── index.js             # Homepage
│   ├── about.js             # About page
│   ├── skills.js            # Skills page
│   ├── projects.js          # Projects gallery
│   ├── projects/
│   │   └── [project].js     # Dynamic project page
│   ├── research.js          # Research & publications
│   └── contact.js           # Contact page
├── components/
│   ├── Navigation.js        # Main navigation bar
│   ├── Hero.js              # Hero section
│   ├── Footer.js            # Footer component
│   ├── ProjectCard.js       # Project card component
│   └── SkillsGrid.js        # Skills grid component
├── styles/
│   └── globals.css          # Global styles and Tailwind setup
├── public/
│   └── projects-html/       # Local HTML reports (stay secure)
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎨 Customization

### Colors

Edit color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Dark background
      secondary: '#1e293b',    // Card background
      accent: '#00d9ff',       // Cyan highlights
      accent-dark: '#00a8cc',
    },
  },
}
```

### Typography

Fonts are loaded from Google Fonts:

Change in `tailwind.config.js` or `pages/_app.js`

### Content

Edit project data, skills, and resume content directly in the page files:

## 📦 Build & Deployment

### Local Build
```bash
npm run build
npm start
```

### Static Export (optional)
```bash
npm run export
```

Generates static HTML files in `out/` directory.

### Deployment Options

#### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Traditional Hosting
1. Build: `npm run build`
2. Deploy `out/` directory to your host
3. Ensure HTML projects remain in `public/projects-html/`

## 🔐 Security Notes


## 📊 Performance


## 🛠️ Development

### Available Scripts

```bash
npm run dev       # Development server (localhost:3000)
npm run build     # Production build
npm start         # Start production server
npm run lint      # ESLint check
npm run export    # Static export
```

### Code Quality


## 🤝 Customization Guide

### Adding a New Project

1. Add data to `projectData` in `pages/projects/[project].js`
2. Add project entry to projects array in `pages/projects.js`
3. Create route (auto-generated via Next.js)
4. Add to featured projects if desired

### Adding Publications

Edit `publications` array in `pages/research.js`

### Updating Skills

Modify `skillCategories` in `pages/skills.js` and `proficiencies` arrays

## 📝 License

This portfolio site is personal property of Ahmed AYOUBI. Commercial use requires permission.

## 📞 Support

For technical issues, customization questions, or deployment help:

## 🔄 Updates & Maintenance



**Built with ❤️ using Next.js + Tailwind CSS**

Ready to deploy locally! Run `npm run dev` to get started.
# Ahmed AYOUBI - AI Engineer Portfolio

A modern, professional portfolio website showcasing AI engineering projects, research, and technical expertise. Built with Next.js, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: Clean, minimalist dark theme with cyan accents
- **Responsive Layout**: Fully responsive on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Project Showcase**: Dedicated project pages with detailed descriptions
- **Research Section**: Publications and research areas
- **Skills/Expertise**: Comprehensive technical skills display
- **HTML Project Integration**: Local embedding of existing HTML reports
- **Contact Form**: Functional contact form (backend integration ready)

## 📋 Pages

### Home (`/`)
- Hero section with compelling introduction
- Featured projects showcase
- Core expertise highlights
- Call-to-action sections

### About (`/about`)
- Professional biography
- Research interests and philosophy
- Timeline of professional journey
- Approach and methodology

### Skills (`/skills`)
- Technical proficiency levels
- Detailed skills by category
- Continuous learning initiatives
- Certifications and courses

### Projects (`/projects`)
- Comprehensive project gallery
- Filterable by category
- Project cards with details

### Project Details (`/projects/[project]`)
- Full project descriptions
- Objectives and methodology
- Results and insights
- Technical stack and datasets
- **Local HTML report embedding** (secure, no external upload)

### Research (`/research`)
- Publications list
- Research areas and focus
- Research methodology
- Peer-reviewed papers

### Contact (`/contact`)
- Contact form
- Social media links
- Professional connections
- Quick stats

## 🚀 Installation

### Prerequisites
- Node.js 16+ and npm/yarn
- Git (optional, for version control)

### Setup

1. **Navigate to project directory**:
```bash
cd portfolio
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Run development server**:
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**:
```
http://localhost:3000
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Tailwind CSS

Customizable colors and animations in `tailwind.config.js`:
- Primary color: Dark slate (#0f172a)
- Accent color: Cyan (#00d9ff)
- Responsive breakpoints included

## 🔒 HTML Project Security

Existing HTML projects are served locally as static assets. All HTML reports remain **local and secure**:

1. Place HTML files in `/public/projects-html/`
2. Access via `<iframe>` or direct navigation
3. No external uploads or deployments unless explicitly configured
4. Projects can be optionally deployed later by updating deploy configuration

### Adding HTML Reports

1. Copy your HTML file to: `public/projects-html/your-project.html`
2. Update project data in `pages/projects/[project].js`:
```javascript
htmlReportUrl: '/projects-html/your-project.html',
hasHtmlReport: true,
```

## 📁 Project Structure

```
portfolio/
├── pages/
│   ├── _app.js              # App wrapper and global setup
│   ├── _document.js         # HTML document structure
│   ├── index.js             # Homepage
│   ├── about.js             # About page
│   ├── skills.js            # Skills page
│   ├── projects.js          # Projects gallery
│   ├── projects/
│   │   └── [project].js     # Dynamic project page
│   ├── research.js          # Research & publications
│   └── contact.js           # Contact page
├── components/
│   ├── Navigation.js        # Main navigation bar
│   ├── Hero.js              # Hero section
│   ├── Footer.js            # Footer component
│   ├── ProjectCard.js       # Project card component
│   └── SkillsGrid.js        # Skills grid component
├── styles/
│   └── globals.css          # Global styles and Tailwind setup
├── public/
│   └── projects-html/       # Local HTML reports (stay secure)
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎨 Customization

### Colors

Edit color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Dark background
      secondary: '#1e293b',    // Card background
      accent: '#00d9ff',       // Cyan highlights
      accent-dark: '#00a8cc',
    },
  },
}
```

### Typography

Fonts are loaded from Google Fonts:
- Inter: Main font
- Fira Code: Monospace/code

Change in `tailwind.config.js` or `pages/_app.js`

### Content

Edit project data, skills, and resume content directly in the page files:
- Project details: `pages/projects/[project].js`
- Skills: `pages/skills.js`
- Research: `pages/research.js`

## 📦 Build & Deployment

### Local Build
```bash
npm run build
npm start
```

### Static Export (optional)
```bash
npm run export
```

Generates static HTML files in `out/` directory.

### Deployment Options

#### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### Traditional Hosting
1. Build: `npm run build`
2. Deploy `out/` directory to your host
3. Ensure HTML projects remain in `public/projects-html/`

## 🔐 Security Notes

- **HTML Projects**: All stored locally in `/public/projects-html/` - no external deployment required
- **Form Security**: Contact form requires backend email service (not included)
- **API Keys**: Add to `.env.local` (never commit)
- **CORS Headers**: Configure in `next.config.js` if needed

## 📊 Performance

- Optimized Next.js build with modern JavaScript
- Tailwind CSS purging for minimal bundle size
- Image optimization (when needed)
- Lazy loading for animations
- Static site generation (SSG) where possible

## 🛠️ Development

### Available Scripts

```bash
npm run dev       # Development server (localhost:3000)

npm start         # Start production server
npm run lint      # ESLint check
npm run export    # Static export
```

### Code Quality

- ESLint configuration included
- Follow React/Next.js best practices
- Consistent formatting with Prettier (optional)

## 🤝 Customization Guide

### Adding a New Project

1. Add data to `projectData` in `pages/projects/[project].js`
2. Add project entry to projects array in `pages/projects.js`
3. Create route (auto-generated via Next.js)
4. Add to featured projects if desired

### Adding Publications

Edit `publications` array in `pages/research.js`

### Updating Skills

Modify `skillCategories` in `pages/skills.js` and `proficiencies` arrays

## 📝 License

This portfolio site is personal property of Ahmed AYOUBI. Commercial use requires permission.

## 📞 Support

For technical issues, customization questions, or deployment help:
- Check Next.js documentation: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

## 🔄 Updates & Maintenance

- Regular content updates recommended
- Check Next.js updates quarterly
- Monitor Tailwind CSS updates
- Keep dependencies current: `npm update`

---

**Built with ❤️ using Next.js + Tailwind CSS**

Ready to deploy locally! Run `npm run dev` to get started.
