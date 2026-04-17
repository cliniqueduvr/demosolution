# Images Setup — Demo Solution Redesign

## Where to Place Your Images

Create this folder in your project:
```
Demo-Solution-Redesign/src/images/
```

## Before/After Images

Place your before/after images in `src/images/` and name them clearly:

### Portfolio (Réalisations Page)
Each project needs **2 images** (before + after):

```
src/images/
├── project-1-before.jpg      # Désamiantage Résidentiel - before
├── project-1-after.jpg       # Désamiantage Résidentiel - after
├── project-2-before.jpg      # Décontamination Moisissure - before
├── project-2-after.jpg       # Décontamination Moisissure - after
└── ... (up to 6 projects)
```

## How to Update the Portfolio Page

Edit `src/pages/realisations.astro` and update the `projects` array:

```javascript
const projects = [
  {
    id: 1,
    title: "Désamiantage Résidentiel",
    location: "Gatineau",
    category: "Amiante",
    beforeImage: "/src/images/project-1-before.jpg",
    afterImage: "/src/images/project-1-after.jpg",
    description: "Retrait professionnel d'amiante avec confinement sécuritaire..."
  },
  // ... more projects
];
```

## Current Setup

- Homepage hero image: Uses external URL from demosolution.ca
- Services images: Icon-based (Font Awesome)
- Portfolio images: Ready for local files (update paths above)

## Your File

You mentioned having `before.png` — rename it to match the naming scheme above and place in `src/images/` folder.

## Need Help?

Check the SETUP-GUIDE.md for deployment and production image optimization.
