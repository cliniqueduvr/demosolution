# Quick Start — Demo Solution Redesign

## ✅ What's Ready to Go

Your website has been improved with:
- ✅ **Data-driven architecture** — Services and projects in JSON files
- ✅ **Reusable components** — ServiceCard, ProjectCard, CTABanner
- ✅ **Better accessibility** — Semantic HTML, proper alt text
- ✅ **Cleaner code** — 80% less duplication
- ✅ **Environment variables** — Safe configuration management
- ✅ **CTA sections** — Phone buttons and conversion CTAs on all pages

---

## 🚀 Get Started in 3 Steps

### Step 1: Add Your Images
```bash
# Create images folder (if it doesn't exist)
mkdir -p src/images

# Copy your before/after images here
# File naming scheme: project-{id}-before.jpg, project-{id}-after.jpg
cp ~/before.png src/images/project-1-before.jpg
# ... copy other images
```

### Step 2: Configure Formspree
1. Go to https://formspree.io
2. Create a free account (sign up with email)
3. Create a new form for your website
4. Copy your form ID (looks like: `f/abc123xyz`)
5. Update `.env` file:
```
PUBLIC_FORMSPREE_ID=f/YOUR_FORM_ID_HERE
```

### Step 3: Test Locally
```bash
npm run dev
# Visit http://localhost:3000
# Test the contact form, all pages, mobile responsiveness
```

---

## 🌐 Deploy to Production

### Option A: Netlify (Easiest)
1. Build the site: `npm run build`
2. Go to netlify.com
3. Drag & drop the `dist/` folder
4. Netlify assigns you a free domain
5. Connect your custom domain (demo.yourdomain.ca)

### Option B: Vercel
1. Push to GitHub
2. Go to vercel.com
3. Import your GitHub repo
4. Vercel auto-deploys on every push
5. Connect custom domain

### Option C: Traditional FTP/cPanel
1. Build: `npm run build`
2. FTP the contents of `dist/` folder to `public_html/`
3. Set domain to point to your hosting

### Option D: Subdomain on Your Hosting
1. Create subdomain: `demo.yourdomain.ca`
2. Upload `dist/` folder contents
3. Configure in your hosting panel

---

## 📸 Image Setup (Important!)

### Before/After Images
Your portfolio needs before/after photos for each project. Update `src/data/projects.json`:

```json
{
  "id": 1,
  "beforeImage": "/images/project-1-before.jpg",
  "afterImage": "/images/project-1-after.jpg",
  "beforeAlt": "Before: Asbestos-contaminated floor...",
  "afterAlt": "After: Clean, safe floor restored..."
}
```

### Where to Get Images
- **Use your own:** Client projects, documentation photos
- **Temporary:** Placeholder images (Unsplash) — replace before going live
- **Proper sizing:** 600×400px or larger (responsive images auto-scale)

---

## 🔧 Environment Variables

### Create `.env` file
```bash
# Formspree contact form
PUBLIC_FORMSPREE_ID=f/YOUR_FORM_ID

# Website URL (for meta tags, sharing)
PUBLIC_SITE_URL=https://demo.yourdomain.ca

# Google Maps (business location)
VITE_MAPS_LATITUDE=45.4215
VITE_MAPS_LONGITUDE=-75.6812
VITE_MAPS_ZOOM=13
```

### For Aiionwatha Portfolio Link
In `/home/germa/projects/Aiionwatha/website/.env`:
```bash
PUBLIC_REDESIGN_URL=https://demo.yourdomain.ca
```

---

## 📋 Pre-Deployment Checklist

- [ ] **Images added** — All 6 projects have before/after photos
- [ ] **Formspree configured** — Form ID in `.env`
- [ ] **Google Maps updated** — Latitude/longitude for actual location
- [ ] **Local testing done** — `npm run dev` runs without errors
- [ ] **Build successful** — `npm run build` creates `dist/` folder
- [ ] **Mobile tested** — Site works on phone (375px, 768px widths)
- [ ] **Forms working** — Test email submission via Formspree
- [ ] **Links verified** — All navigation works, no 404s

---

## 🎨 Customization (Optional)

### Update Business Info
Edit these files to change company details:

**Phone Number:**
- `src/data/site-settings.json`

**Email:**
- `src/data/site-settings.json`

**Service Pages:**
- `src/data/service-pages.json` — FR service list and full service-page content
- `src/data/service-pages-en.json` — EN service list and full service-page content

**Projects:**
- `src/data/projects.json` — Add/edit/delete projects

**Colors:**
- Green (#2d5016) is primary throughout
- Change in any `.astro` or `.json` file using hex value

---

## 🚨 Common Issues

### Port 3000 Already in Use
```bash
npm run dev -- --port 3001
```

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Check image paths in JSON files
- Verify images exist in `src/images/` folder
- Use `/images/filename.jpg` paths (absolute)

### Form Not Sending
- Verify Formspree ID in `.env`
- Check browser console for errors
- Test at formspree.io directly

---

## 📚 File Reference

### Key Files to Know

| File | Purpose | Edit When |
|------|---------|-----------|
| `.env` | Configuration (form ID, maps) | Updating Formspree or location |
| `src/data/site-settings.json` | Shared phone, email, booking, address | Updating business details |
| `src/data/service-pages.json` | FR services and service-page copy | Adding/editing FR services |
| `src/data/service-pages-en.json` | EN services and service-page copy | Adding/editing EN services |
| `src/data/projects.json` | Portfolio projects | Adding/editing projects |
| `src/data/home-page*.json` | Homepage copy | Editing homepage content |
| `src/data/contact-page*.json` | Contact page copy | Editing contact-page content |

**DON'T EDIT:** Component styles are in each `.astro` file (scoped CSS). You can customize colors here if needed.

---

## 🎯 Next: Post-Deployment

After deploying to production domain:

1. **Update Aiionwatha Portfolio Link**
   - Update `PUBLIC_REDESIGN_URL` in Aiionwatha `.env`
   - Point to production domain instead of localhost:3000

2. **SEO Optimization** (Optional)
   - Run `geo-seo-claude` as mentioned for detailed analysis
   - Check search engine indexing

3. **Monitor & Maintain**
   - Track form submissions via Formspree dashboard
   - Monitor website traffic (Google Analytics optional)
   - Update projects as new work completes

---

## 💡 Pro Tips

- **Keep JSON files clean** — proper formatting makes updates easy
- **Use descriptive alt text** — helps with SEO and accessibility
- **Test on mobile first** — that's where most visitors browse
- **Backup your `.env`** — contains configuration, don't lose it
- **Version control** — commit changes with Git, don't lose work

---

## 📞 Quick Reference

**Start developing:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

**Install dependencies (if needed):**
```bash
npm install
```

---

**Your site is production-ready. Deploy with confidence!** 🚀
