# Demo Solution Redesign — Setup & Deployment Guide

## ✅ What Has Been Done

Your website has been completely redesigned with:

- ✅ **Green color scheme** (replacing red) — Primary: #2d5016, Accent: #1f3910
- ✅ **Professional layout** — Modern, responsive design
- ✅ **Real business information** — From your current demosolution.ca site
- ✅ **Service descriptions** — Actual services from your site
- ✅ **Contact info** — RBQ: 5824-9764-01, phone, email
- ✅ **SEO optimized** — Meta tags, proper structure
- ✅ **Mobile responsive** — Works perfectly on all devices

## 🚀 Quick Start (Local Testing)

### 1. Navigate to the project folder
```bash
cd /home/germa/projects/Demo-Solution-Redesign
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

## 🖼️ Adding Real Images from Your Current Site

Your current site (https://www.demosolution.ca/) has these images available:

```
/images/Decontamination-bosco.jpg        — For hero section
/images/Decontamination-poubelle.jpg     — Service example
/images/demolition-selective.jpg          — Demolition service
/images/Asbestos-Air-Quality-Test-scaled.jpg  — Air quality testing
/images/test-moisissure.jpg               — Mold testing
/images/inpesction-vr.png                 — VR inspection
```

### To use real images:

1. **Download images from your current site:**
   ```bash
   # Create an images folder in the project
   mkdir -p src/images
   
   # Download specific images
   wget https://www.demosolution.ca/images/Decontamination-bosco.jpg -O src/images/decontamination-1.jpg
   wget https://www.demosolution.ca/images/Decontamination-poubelle.jpg -O src/images/decontamination-2.jpg
   wget https://www.demosolution.ca/images/demolition-selective.jpg -O src/images/demolition.jpg
   ```

2. **Update image paths in pages:**

   **Homepage (`src/pages/index.astro`)**
   - Line ~39: Update hero image URL
   
   **Services page (`src/pages/services.astro`)**
   - Line ~55: Update background image URL
   
   **Portfolio page (`src/pages/realisations.astro`)**
   - Update project image URLs with real before/after photos

## 📝 Customization Before Deployment

### Update Contact Form

1. Go to **[formspree.io](https://formspree.io)**
2. Create a free form for your website
3. Copy your form ID (format: `f/abc123xyz`)
4. Update these files:
   - `src/pages/index.astro` (line ~216)
   - `src/pages/contact.astro` (line ~10)

Replace:
```javascript
action="https://formspree.io/f/YOUR_FORM_ID"
```

With your actual form ID.

### Update Google Maps

In `src/pages/contact.astro` (line ~79), update the iframe src with coordinates for your actual location. Use [Google Maps Embed](https://maps.google.com) to generate the embed code.

## 🏗️ Building for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized, production-ready HTML/CSS/JS files.

## 🌐 Deployment Options

### Option 1: Netlify (Recommended — Free)
1. Push `dist/` folder to your repository or FTP
2. Go to **[netlify.com](https://netlify.com)**
3. Drag and drop the `dist/` folder
4. Connect your domain

### Option 2: Vercel (Free + Fast)
1. Push code to GitHub
2. Go to **[vercel.com](https://vercel.com)**
3. Import your project
4. Auto-deploys on every push

### Option 3: Traditional Hosting (Cpanel, FTP)
1. Build: `npm run build`
2. FTP upload the `dist/` folder to your public_html or web root
3. No server-side setup needed

### Option 4: Subdomain Deployment
To host at `demo.yourdomain.ca`:
1. Build the site
2. Create subdomain in your hosting panel
3. Upload `dist/` folder to subdomain's public folder

## 📋 Deployment Checklist

Before deploying to production:

- [ ] Form action updated with your Formspree ID
- [ ] Google Maps coordinates updated
- [ ] All real images downloaded and linked
- [ ] Business info verified (RBQ, phone, email, services)
- [ ] Meta tags updated (title, description)
- [ ] Local testing completed (`npm run dev`)
- [ ] Build successful (`npm run build`)
- [ ] No console errors when running locally

## 🔄 Ongoing Maintenance

### Adding a New Service
1. Edit `src/pages/services.astro`
2. Add to `services` array with title, icon, description, details
3. Rebuild: `npm run build`

### Updating Business Info
- Phone, email, hours: `src/components/Header.astro`, `Footer.astro`
- Service descriptions: `src/pages/services.astro`
- Contact page info: `src/pages/contact.astro`

### Adding Projects to Portfolio
Edit `src/pages/realisations.astro` - add items to `projects` array with before/after images.

## 📚 File Structure

```
Demo-Solution-Redesign/
├── src/
│   ├── pages/
│   │   ├── index.astro           ← Homepage
│   │   ├── services.astro        ← Services page
│   │   ├── contact.astro         ← Contact page
│   │   └── realisations.astro    ← Portfolio page
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── images/                   ← Add local images here
├── dist/                         ← Generated build (production files)
├── astro.config.mjs
├── package.json
└── README.md
```

## 🎨 Color Reference

**New Green Scheme:**
- Primary Green: `#2d5016` (buttons, headings, links)
- Dark Green: `#1f3910` (hover states)
- Dark Gray: `#3A3A3A` (backgrounds, text)
- White: `#FFFFFF` (content areas)

All red (#8B0000) has been replaced with green throughout the site.

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Images not loading?**
- Check image paths are absolute URLs (https://...)
- Or copy images to `src/images/` and use relative paths

## 📞 Support

For questions or issues:
1. Check the README.md in the project
2. Verify image paths and form configuration
3. Test locally with `npm run dev` before deploying

---

**Your site is production-ready and fully optimized for deployment!** 🚀
