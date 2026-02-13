# Deployment Guide

## Overview

This guide covers deployment options for your AI Engineering portfolio. By default, the site is ready for **local development**. Follow below for production deployment.

## ⚠️ Important: HTML Projects Security

All HTML project files in `/public/projects-html/` are served **locally and securely**:
- **No automatic uploads** unless explicitly configured
- **Your projects remain on your machine** until you choose to deploy
- **Full control** over what gets deployed
- **Local development works out-of-the-box** without additional setup

## Option 1: Vercel (Recommended)

### Easiest & Fastest Deployment

**Advantages**:
- Automatic deployments from Git
- Free tier available
- Global CDN
- Environment variables management
- Preview deployments for pull requests

### Steps:

1. **Create Vercel account**: https://vercel.com

2. **Install Vercel CLI**:
```bash
npm i -g vercel
```

3. **Deploy from project directory**:
```bash
vercel
```
Follow prompts to link your account and project.

4. **Set environment variables** (Vercel Dashboard):
   - Go to Settings → Environment Variables
   - Add `NEXT_PUBLIC_SITE_URL`

5. **Automatic deployments**:
   - Push to GitHub
   - Vercel automatically builds and deploys

**Important**: Ensure HTML project files are included:
- Files in `/public/projects-html/` deploy automatically
- Test deployed site thoroughly before sharing

### Post-Deployment

Update production URL in browser bookmarks and social profiles.

---

## Option 2: Docker Deployment

### Self-Hosted on Any Server

**Dockerfile** provided in project root:

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

### Deploy Steps:

1. **Build Docker image**:
```bash
docker build -t ahmed-portfolio .
```

2. **Run container**:
```bash
docker run -p 3000:3000 ahmed-portfolio
```

3. **Access**: http://localhost:3000

### Deploy to Docker Hub:

```bash
docker tag ahmed-portfolio:latest yourusername/ahmed-portfolio:latest
docker login
docker push yourusername/ahmed-portfolio:latest
```

### Deploy to Server (AWS, DigitalOcean, etc.):

1. SSH into your server
2. Pull Docker image
3. Run container with port mapping
4. Configure reverse proxy (Nginx)
5. Enable SSL/TLS

---

## Option 3: Static Site Export

### For Static Hosting (GitHub Pages, Netlify, etc.)

1. **Build static version**:
```bash
npm run export
```

2. **Generated**:
   - Creates `/out` directory with static HTML
   - Includes all assets and HTML projects
   - Ready for any static host

3. **Deploy to GitHub Pages**:
   - Upload contents of `/out` to `gh-pages` branch
   - Or configure GitHub Actions workflow

4. **Deploy to Netlify**:
   - Connect GitHub repository
   - Set build command: `npm run export`
   - Set publish directory: `out`

**Note**: Dynamic form functionality requires serverless function or backend service.

---

## Option 4: Traditional Hosting

### Shared/VPS Hosting

1. **Build locally**:
```bash
npm run build
```

2. **Upload to server**:
   - FTP/SFTP entire project folder
   - Or push to server via Git

3. **Install Node.js on server**:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. **Install dependencies**:
```bash
npm install --production
```

5. **Run with PM2** (process manager):
```bash
npm i -g pm2
pm2 start npm --name "portfolio" -- start
pm2 startup
pm2 save
```

6. **Configure Nginx reverse proxy**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

7. **Enable HTTPS with Let's Encrypt**:
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## Option 5: AWS Deployment

### Using AWS Amplify

1. **Connect GitHub repository**
2. **Configure build settings**:
   - Build command: `npm run build`
   - Start command: `npm start`
3. **Deploy automatically** on push

### Using EC2:

1. Launch EC2 instance (Ubuntu)
2. SSH in
3. Follow "Traditional Hosting" steps above
4. Assign Elastic IP
5. Configure security groups (80, 443)

---

## Environment Variables

For production, create environment file on server or hosting platform:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
```

---

## Pre-Deployment Checklist

- [ ] All project data updated
- [ ] HTML reports in `/public/projects-html/`
- [ ] Contact form backend configured (optional)
- [ ] Links updated (GitHub, LinkedIn, Scholar, email)
- [ ] Social media metadata configured
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] All pages load correctly
- [ ] Responsive design tested (mobile/tablet/desktop)
- [ ] Links all working (internal and external)

---

## Performance Optimization

### Image Optimization
- Use Next.js Image component for dynamic images
- Optimize with: `npm install sharp`

### Code Splitting
- Next.js handles automatically
- Check build output for bundle size

### Caching
- Static pages cached indefinitely
- Dynamic content with appropriate headers
- Browser cache headers configured

### Monitoring
Set up monitoring for production:
- Vercel Analytics (built-in)
- Sentry (error tracking)
- Google Analytics (optional)

---

## Troubleshooting Deployment

### Build Fails
```bash
npm run build
# Check error messages
npm run lint
```

### Port Conflicts
- Change port in `.env.local`
- Or use different port: `npm start -- -p 8000`

### HTML Reports Not Loading
- Verify files in `/public/projects-html/`
- Check paths in project data
- Test URLs in browser DevTools

### Slow Performance
- Check build size: `npm run build`
- Analyze bundles: `npm analyze`
- Check image optimization
- Enable compression on server

### SSL/HTTPS Issues
- Use Let's Encrypt (free)
- Ensure HTTP → HTTPS redirect
- Check certificate validity

---

## Maintenance

### Regular Updates
```bash
npm update       # Update packages
npm audit        # Check security
npm run lint     # Check code quality
```

### Backup
- Regular Git commits
- Export/backup HTML projects
- Document any custom configurations

### Monitoring
- Monitor error logs
- Track performance metrics
- Check uptime status

---

## Domain & DNS

1. **Register domain** (Namecheap, GoDaddy, etc.)
2. **Point DNS** to hosting provider
   - For Vercel: Follow Vercel DNS setup
   - For traditional hosting: Update A record to server IP
   - For GitHub Pages: CNAME pointing to username.github.io
3. **Enable SSL/HTTPS**
4. **Setup email** (optional): Forward to your email

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Docker**: https://docs.docker.com
- **Let's Encrypt**: https://letsencrypt.org

---

## Next Steps

1. Test locally fully: `npm run dev`
2. Choose deployment option
3. Follow deployment steps
4. Monitor production

**Your portfolio is production-ready!** Choose your preferred deployment method and get live.
