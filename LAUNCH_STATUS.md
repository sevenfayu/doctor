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

Use this URL until DNS finishes:

```text
https://eastern-doctor-6bvbmnxrj-sevenfayu.vercel.app
```

## DNS Pending

Current domain nameservers are:

```text
ns1.myhostadmin.net
ns2.myhostadmin.net
```

Vercel expects either:

```text
A easterndoctor.com 76.76.21.21
A www.easterndoctor.com 76.76.21.21
```

or change nameservers to:

```text
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Local DNS still did not resolve the A records at the last check, so the custom domain may need propagation time or another DNS save/verification in the domain provider panel.

## GitHub Auto Deploy Pending

Vercel could not connect GitHub automatically because the Vercel account needs a GitHub Login Connection.

Manual CLI deployments work and the current production deployment is live.
