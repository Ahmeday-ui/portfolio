# Troubleshooting Guide

Solutions for common issues when developing your AI engineering portfolio.

## Table of Contents

1. [Setup Issues](#setup-issues)
2. [Runtime Errors](#runtime-errors)
3. [Styling Problems](#styling-problems)
4. [Performance Issues](#performance-issues)
5. [Deployment Issues](#deployment-issues)
6. [Browser Issues](#browser-issues)
7. [HTML Project Issues](#html-project-issues)
8. [Getting Help](#getting-help)

---

## Setup Issues

### Problem: `npm command not found` or `node command not found`

**Symptoms:**
```
'npm' is not recognized as an internal or external command
'node' is not recognized as an internal or external command
```

**Solutions:**

1. **Check if Node.js is installed:**
   ```bash
   node --version
   npm --version
   ```

2. **If not installed:**
   - Download from [nodejs.org](https://nodejs.org)
   - Install LTS version (v18+ recommended)
   - Restart your terminal/PowerShell after installation
   - Verify: `node --version` should show version

3. **PowerShell Issue (Windows):**
   ```bash
   # Try this instead
   powershell
   npm --version
   ```

---

### Problem: `permission denied` when running setup script

**Symptoms:**
```
cannot load PSSession
ExecutionPolicy error
```

**Solutions (Windows):**

```powershell
# Run setup with proper permissions
powershell -ExecutionPolicy Bypass -File setup.ps1

# Or set execution policy first
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Solutions (macOS/Linux):**

```bash
# Make script executable
chmod +x setup.sh

# Run it
./setup.sh
```

---

### Problem: `dependencies installation fails`

**Symptoms:**
```
npm ERR! code E404
npm ERR! 404 Not Found
npm WARN deprecated ...
```

**Solutions:**

```bash
# Clear npm cache
npm cache clean --force

# Update npm and Node
npm install -g npm@latest

# Try installation again
npm install

# If still failing, check internet connection
# and try from a different network or later
```

---

### Problem: `Portfolio directory not found`

**Check current location:**
```bash
# See where you are
pwd  # macOS/Linux
cd   # Windows PowerShell

# Navigate to correct folder
cd "c:\Users\ahayoubi.UCA\Documents\AHMED_PORTFOLIO\portfolio"
```

---

## Runtime Errors

### Problem: Port 3000 already in use

**Symptoms:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solutions:**

**Option 1: Stop other process using port 3000**
```bash
# Windows
netstat -ano | findstr :3000
taskill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

**Option 2: Use different port**
```bash
# Run on port 3001 instead
npm run dev -- -p 3001

# Then visit http://localhost:3001
```

---

### Problem: `Module not found` error

**Symptoms:**
```
Error: Cannot find module 'next'
Error: Cannot find module 'react'
```

**Solutions:**

```bash
# Reinstall dependencies
npm install

# Make sure you're in portfolio directory
cd portfolio

# Try again
npm run dev
```

---

### Problem: `_app.js error` or pages not loading

**Symptoms:**
```
Error in _app.js
Error: Cannot find module
Hydration mismatch
```

**Solutions:**

1. **Restart dev server:**
   ```bash
   # Stop server (Ctrl+C)
   # Run again
   npm run dev
   ```

2. **Clear Next.js cache:**
   ```bash
   # Delete cache folders
   rm -rf .next node_modules package-lock.json
   npm install
   npm run dev
   ```

3. **Check for syntax errors:**
   ```bash
   npm run lint
   ```

---

### Problem: `White screen` or `page won't load`

**Symptoms:**
- Blank white page
- Browser stuck loading
- Console shows errors

**Solutions:**

1. **Check browser console for errors:**
   - Press `F12`
   - Go to `Console` tab
   - Look for red error messages
   - Note the error

2. **Restart dev server:**
   ```bash
   # Stop (Ctrl+C in terminal)
   npm run dev
   ```

3. **Clear browser cache:**
   ```
   Ctrl+Shift+Delete  # Windows/Linux
   Cmd+Shift+Delete   # macOS
   ```

4. **Check file for syntax errors:**
   - Find the page file mentioned in error (e.g., `index.js`)
   - Look for missing brackets, quotes, etc.
   - Fix the syntax error
   - Save and refresh page

5. **If nothing works:**
   ```bash
   # Hard rebuild
   rm -rf .next
   npm run build
   npm run dev
   ```

---

## Styling Problems

### Problem: CSS not applying / styles look broken

**Symptoms:**
- Colors wrong or missing
- Layout broken
- Buttons look plain
- Text formatting lost

**Typical Causes:**
1. Changed Tailwind config but didn't restart server
2. Used invalid Tailwind class names
3. Browser cache

**Solutions:**

1. **Restart dev server (most common fix):**
   ```bash
   # Stop: Ctrl+C
   npm run dev
   ```

2. **Check Tailwind class names:**
   ```javascript
   // ✅ CORRECT
   className="bg-primary text-accent"
   
   // ❌ WRONG (mispelled)
   className="bg-primar text-acent"
   ```

3. **Verify Tailwind config:**
   - Check `tailwind.config.js`
   - Ensure colors are defined
   - Restart server after any config changes

4. **Clear browser cache:**
   ```
   Ctrl+Shift+Delete  # Hard refresh + cache clear
   ```

5. **Check globals.css is imported:**
   - Open `pages/_app.js`
   - Should have: `import '../styles/globals.css'`

---

### Problem: Custom colors not working

**File**: `tailwind.config.js`

**Symptoms:**
```javascript
// I added this color but it doesn't work
className="text-my-color"  // ❌ Not working
```

**Solution:**

Add custom colors properly in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'my-color': '#FF5733',
        'my-brand': {
          light: '#FF5733',
          dark: '#C70039',
        }
      }
    }
  }
}
```

Then use: `className="text-my-color"` or `className="text-my-brand-dark"`

---

### Problem: Images look stretched or broken

**Symptoms:**
- Image not showing
- Image distorted/stretched
- Placeholder showing

**Solutions:**

1. **Check image path:**
   ```javascript
   // Should start with /
   src="/images/my-image.jpg"  // ✅ Correct
   
   // NOT this:
   src="images/my-image.jpg"   // ❌ Wrong
   ```

2. **Verify file exists:**
   - Images go in: `portfolio/public/images/`
   - File should be: `portfolio/public/images/my-image.jpg`

3. **Check image dimensions:**
   ```javascript
   <img 
     src="/images/my-image.jpg" 
     alt="Description"
     width={400}
     height={300}
   />
   ```

4. **Next.js Image Component (recommended):**
   ```javascript
   import Image from 'next/image';
   
   <Image 
     src="/images/my-image.jpg"
     alt="Description"
     width={400}
     height={300}
   />
   ```

---

## Performance Issues

### Problem: Site loads slowly

**Symptoms:**
- Takes > 5 seconds to load
- Animations are janky
- Content appears suddenly

**Diagnosis:**

1. **Check Next.js build stats:**
   ```bash
   npm run build
   # Look at bundle size
   ```

2. **Use browser DevTools (F12):**
   - Network tab: See which files are slow
   - Performance tab: See what's taking time
   - Console: Check for errors

**Solutions:**

1. **Optimize images:**
   ```javascript
   // Use Next.js Image component
   import Image from 'next/image';
   
   <Image
     src="/image.jpg"
     alt="description"
     width={800}
     height={600}
     placeholder="blur"
   />
   ```

2. **Reduce animation complexity:**
   - Simplify Framer Motion animations
   - Remove auto-playing videos
   - Reduce particle effects

3. **Lazy load heavy components:**
   ```javascript
   import dynamic from 'next/dynamic';
   
   const HeavyComponent = dynamic(() => import('./Heavy'), {
     loading: () => <p>Loading...</p>
   });
   ```

---

## Deployment Issues

### Problem: Can't deploy to Vercel

**Symptoms:**
```
Deployment fails
Error during build
```

**Solutions:**

1. **Test build locally first:**
   ```bash
   npm run build
   npm run start
   # Visit http://localhost:3000
   ```

2. **Check for errors in build output:**
   ```bash
   npm run build 2>&1 | tail -50
   ```

3. **Common causes:**
   - Syntax errors in files
   - Missing environment variables
   - Outdated package versions

4. **Fix and retry:**
   ```bash
   npm run lint  # Find errors
   npm run build  # Try building
   ```

---

### Problem: Environment variables not working

**Symptoms:**
```javascript
// Variable is undefined
console.log(process.env.NEXT_PUBLIC_API_KEY)  // undefined
```

**Solution:**

1. **Create `.env.local` file:**
   ```
   NEXT_PUBLIC_API_KEY=your_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

2. **For deployment, set on Vercel:**
   - Go to Vercel dashboard
   - Project settings → Environment Variables
   - Add each variable
   - Redeploy

3. **Restart dev server after adding .env.local:**
   ```bash
   npm run dev
   ```

---

## Browser Issues

### Problem: Page works in one browser but not another

**Causes:**
- Browser compatibility
- JavaScript version differences
- Cached files

**Solutions:**

1. **Test in different browsers:**
   - Chrome/Edge (Chromium)
   - Firefox
   - Safari

2. **Check browser support:**
   ```javascript
   // Use browser APIs carefully
   
   // Check if feature exists
   if (typeof window !== 'undefined') {
     // JavaScript that needs browser
   }
   ```

3. **Clear cache in all browsers:**
   ```
   Ctrl+Shift+Delete  # Clear everything
   ```

---

### Problem: Mobile version looks broken

**Symptoms:**
- Wrong layout on phone
- Text too small or too large
- Buttons not clickable

**Solutions:**

1. **Test in DevTools:**
   - Press `F12`
   - Click responsive design mode: `Ctrl+Shift+M`
   - Test at 375px (mobile), 768px (tablet), 1024px (desktop)

2. **Check Tailwind responsive classes:**
   ```javascript
   // Should have mobile, tablet, desktop versions
   className="text-sm sm:text-base md:text-lg"
   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
   ```

3. **Verify viewport meta tag:**
   - Check `pages/_document.js`
   - Should have: `<meta name="viewport" content="width=device-width" />`

---

## HTML Project Issues

### Problem: HTML report not showing in project page

**Symptoms:**
- "View Full Report" button doesn't appear
- Empty iframe
- Error loading report

**Solutions:**

1. **Check file is in right place:**
   ```
   portfolio/
   └── public/
       └── projects-html/
           └── your-file.html  ← Must be here
   ```

2. **Verify file path in project data:**
   ```javascript
   // In pages/projects/[project].js
   'your-project': {
     htmlReportUrl: '/projects-html/your-file.html',  // Must start with /
     hasHtmlReport: true,  // Must be true
     // ...
   }
   ```

3. **Restart dev server:**
   ```bash
   npm run dev
   ```

4. **Check browser console for errors:**
   - Press `F12`
   - Go to Console tab
   - Look for CORS or loading errors

---

### Problem: HTML report shows but styling looks wrong

**Cause:**
- HTML was generated without copying resources
- CSS/images referenced absolutely

**Solutions:**

1. **Regenerate HTML with proper paths:**
   - If using R Markdown or Jupyter: re-export with self-contained option
   - Ensure all CSS/images are embedded

2. **Fix broken images in HTML:**
   ```html
   <!-- ❌ Won't work in iframe -->
   <img src="C:\Users\...\image.png" />
   
   <!-- ✅ Better approach - embed or use relative -->
   <img src="data:image/png;base64,..." />
   ```

---

### Problem: HTML report too large (>50MB)

**Symptoms:**
- Takes forever to load
- Browser crashes

**Solutions:**

1. **Compress resources:**
   - Reduce image quality
   - Remove unused data
   - Use smaller plots/charts

2. **Split into multiple pages:**
   - One HTML report per analysis section
   - Link between them

3. **Alternative: Use static export:**
   ```bash
   npm run export
   # Serves portfolio as static HTML
   ```

---

## Getting Help

### Debugging Steps (Always Try These First)

1. **Restart dev server:**
   ```bash
   # Stop: Ctrl+C
   npm run dev
   ```

2. **Check console errors:**
   - Press `F12`
   - Console tab
   - Fix any red errors

3. **Check code syntax:**
   ```bash
   npm run lint
   ```

4. **Clear cache:**
   ```bash
   rm -rf .next
   npm install
   npm run dev
   ```

### Where to Find Answers

| Resource | Use For |
|----------|---------|
| [Next.js Docs](https://nextjs.org/docs) | Next.js specific issues |
| [React Docs](https://react.dev) | React/JSX questions |
| [Tailwind Docs](https://tailwindcss.com/docs) | CSS/styling issues |
| [Framer Motion Docs](https://www.framer.com/motion) | Animation problems |
| [Stack Overflow](https://stackoverflow.com) | General programming help |

### Create Minimal Reproducible Example

When searching for help, create minimal code that shows the problem:

```javascript
// ❌ Don't ask about 200 lines of code
// ✅ Do ask with 5 lines showing the exact issue

import { motion } from 'framer-motion';

export default function Test() {
  return (
    <motion.div
      animate={{ scale: 2 }}
      // ^ Why doesn't this animate?
    />
  );
}
```

### Common Error Message Fixes

| Error | Fix |
|-------|-----|
| `ENOENT: no such file or directory` | File doesn't exist - check path |
| `Module not found` | Run `npm install` |
| `ReferenceError: X is not defined` | Variable name misspelled or not imported |
| `Cannot read property of undefined` | Object/array is null - add safety check |
| `Unexpected token` | Syntax error - missing bracket/quote |
| `CORS error` | API request from different domain - needs CORS headers |

---

## Emergency Restart

If everything is broken and you need to start fresh:

```bash
# Go to portfolio directory
cd /path/to/portfolio

# Remove everything
rm -rf node_modules package-lock.json .next

# Fresh install
npm install

# Start fresh
npm run dev
```

---

## Prevention Tips

1. **Commit to Git regularly:**
   ```bash
   git add .
   git commit -m "Safe checkpoint"
   ```

2. **Test before deploying:**
   ```bash
   npm run build  # Full test
   npm run start  # Start production build
   ```

3. **Use version control:**
   - Save working versions
   - Easy to revert problems

4. **Document changes:**
   - When you make a big change, note it
   - Makes debugging easier

5. **Update dependencies regularly:**
   ```bash
   npm outdated  # See what needs updates
   npm update    # Update all packages
   ```

---

**Still stuck?** Check these files in order:
1. [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) - Common commands
2. [CUSTOMIZATION.md](./CUSTOMIZATION.md) - How to customize
3. [README.md](./README.md) - Full documentation
4. [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - File reference

Good luck! 🚀
