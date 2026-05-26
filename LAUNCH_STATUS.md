# Eastern Doctor Launch Status

Last updated: May 26, 2026

## Completed

- GitHub repository pushed: `https://github.com/sevenfayu/doctor`
- Vercel project created and linked: `sevenfayu/eastern-doctor`
- Production deployment completed:
  - `https://eastern-doctor-6bvbmnxrj-sevenfayu.vercel.app`
- Vercel project domains added:
  - `easterndoctor.com`
  - `www.easterndoctor.com`
- DNS and HTTPS are working:
  - `https://easterndoctor.com`
  - `https://www.easterndoctor.com`
- Vercel production/development environment variables added:
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_WHATSAPP_NUMBER`
  - `NEXT_PUBLIC_WHATSAPP_DISPLAY`
  - `NEXT_PUBLIC_CONTACT_EMAIL`
  - `ADMIN_USERNAME`
  - `ADMIN_PASSWORD`
- Neon Postgres database provisioned and connected through Vercel Marketplace:
  - Resource name: `eastern-doctor-db`
  - Production `DATABASE_URL` configured.
- Prisma production schema pushed to the online database.
- Production checks passed:
  - Public website returns `200 OK`.
  - App page returns `200 OK`.
  - Consultation API writes to the production database.
  - Admin lead page is protected by Basic Auth and loads with the configured credentials.
- Local `.env` excluded from Vercel uploads with `.vercelignore`.
- Local `.env*` files excluded from Git.
- Case intake form has WhatsApp fallback if the database is not connected yet.

## Current Live URL

Primary production URL:

```text
https://easterndoctor.com
```

Fallback Vercel URL:

```text
https://eastern-doctor-6bvbmnxrj-sevenfayu.vercel.app
```

## GitHub Auto Deploy Pending

Vercel Login Connection is no longer the blocker, but Vercel still cannot access `sevenfayu/doctor` through its GitHub App repository permissions.

Latest CLI error:

```text
Failed to connect sevenfayu/doctor to project. Make sure there aren't any typos and that you have access to the repository if it's private.
```

Manual CLI deployments work and the current production deployment is live.
