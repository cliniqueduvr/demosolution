# Website Handoff Guide

## Goal

Move this project off personal accounts so the client owns:

- Source code repository
- Hosting and deploys
- Domain and DNS
- Form submissions
- Ongoing content editing

Do not hand this off as a ZIP-only workflow. A ZIP is fine as a backup, but not as the operating model.

## Best Handoff Model

Use this structure:

1. Client-owned GitHub repository
2. Client-owned Netlify account/team
3. Client-owned Formspree account
4. Domain controlled by the client or the client's registrar account
5. Optional CMS connected to the repository for content edits

This keeps you out of the critical path. If the client fires you, gets locked out, or you stop maintaining the site, the website still remains fully under their control.

## What This Project Looks Like

This site is an Astro static site. The editable business content is already mostly separated from the page templates.

Main content files:

- `src/data/site-settings.json`
- `src/data/home-page.json`
- `src/data/home-page-en.json`
- `src/data/about-page.json`
- `src/data/about-page-en.json`
- `src/data/contact-page.json`
- `src/data/contact-page-en.json`
- `src/data/privacy-page.json`
- `src/data/privacy-page-en.json`
- `src/data/projects.json`
- `src/data/projects-en.json`
- `src/data/service-pages.json`
- `src/data/service-pages-en.json`

External service configuration:

- `PUBLIC_FORMSPREE_ID` in `.env`
- Site URL in `astro.config.mjs`

Contact forms currently read the Formspree ID from environment variables:

- `src/pages/index.astro`
- `src/pages/contact.astro`
- `src/pages/en/contact.astro`

## Recommended Transfer Process

### Phase 1: Move ownership

1. Ask the client to create:
   - A GitHub account or GitHub organization
   - A Netlify account
   - A Formspree account
2. Create a new repository under the client's GitHub account.
3. Push this codebase to that client-owned repository.
4. In the client's Netlify account, create a new site from that repository.
5. In the client's Formspree account, create the production form and set `PUBLIC_FORMSPREE_ID`.
6. Point the production domain to the client's Netlify site.
7. Remove your personal GitHub and Netlify accounts from the production workflow.

### Phase 2: Make editing simple

You have two realistic options:

#### Option A: No CMS, just operational handoff

Use this if the client is not technical and you will remain the editor.

- Client owns the accounts
- You stay as a collaborator
- Content changes continue through Git commits

This is the fastest and safest transfer path.

#### Option B: Add a CMS panel

Use this if the client needs to edit content directly without touching code.

For this project, the CMS should edit content files only, not page templates or layout components.

Good CMS target scope:

- Projects / before-after portfolio
- Long-form service page copy
- Shared contact and business details in one config file
- Main FR/EN page copy for Home, About, Contact and Privacy

Do not start by making every string editable. Start with the files that already act like content storage.

## CMS Recommendation

For this codebase, use a Git-backed CMS that commits changes to the repository.

Why:

- The site is static
- Content already lives in files
- No separate app server is needed
- Netlify can rebuild automatically after each content change

Practical recommendation:

- Best low-friction first step: use a Git-backed CMS and keep content in structured files
- Best implementation target: keep the current JSON content files as the editable layer and avoid putting business copy back into Astro templates

Why this matters:

This project now keeps editable business copy in JSON content files instead of Astro templates or TypeScript data blobs.

## Suggested Content Refactor Before Adding CMS

Before building the admin panel, make these changes:

1. Move business constants into one content/config file:
   - phone
   - email
   - address
   - hours
   - booking URL
2. Keep service detail pages in `service-pages*.json`.
3. Keep images in predictable folders and store only paths in content files.

That reduces CMS complexity and prevents the client from accidentally editing structural code.

## What The Client Should Receive

Deliver these items:

- GitHub repository under their ownership
- Netlify site under their account
- Domain and DNS access
- Formspree ownership
- `.env.example`
- Deployment instructions
- This handoff guide
- A list of ongoing services still tied to you, if any

## Minimum Production Checklist

- Repository is owned by the client
- Netlify site is owned by the client
- Domain is controlled by the client
- Contact form goes to the client
- Analytics, if any, belong to the client
- You are collaborator, not owner
- The site still builds from the client's repository

## My Recommendation For This Project

Do this in order:

1. Transfer the production workflow to client-owned GitHub + Netlify + Formspree first
2. Confirm deploys and form submissions work under the client's accounts
3. Keep the JSON content model as the editable source of truth
4. Add a small CMS only for content editing

That is the lowest-risk path. Trying to bolt on a CMS before ownership transfer increases the chance that the final setup still depends on your personal accounts.
