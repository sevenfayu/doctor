# Eastern Doctor Launch Status

Last updated: May 26, 2026

## Completed

- GitHub repository pushed: `https://github.com/sevenfayu/doctor`
- Vercel project created and linked: `sevenfayu/eastern-doctor`
- Production deployment completed:
  - `https://eastern-doctor-qxkzu0yd7-sevenfayu.vercel.app`
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
- Local `.env` excluded from Vercel uploads with `.vercelignore`.
- Case intake form has WhatsApp fallback if the database is not connected yet.

## Current Live URL

Use this URL until DNS finishes:

```text
https://eastern-doctor-qxkzu0yd7-sevenfayu.vercel.app
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

## Database Pending

Vercel Marketplace database integrations require legal terms acceptance by the account owner.

Blocked integrations:

- Neon
- Supabase
- Prisma Postgres

After terms are accepted, rerun one of:

```bash
npx vercel install neon --name eastern-doctor-db --plan free_v3 -m region=sin1 -m auth=false -e production -e development --format=json
npx vercel install supabase --name eastern-doctor-supabase -m region=sin1 -e production -e development --format=json
npx vercel install prisma --name eastern-doctor-prisma --plan free -m region=sin1 -e production -e development --format=json
```

Then run:

```bash
npm run prisma:push:prod
npx vercel deploy --prod --yes
```

## GitHub Auto Deploy Pending

Vercel could not connect GitHub automatically because the Vercel account needs a GitHub Login Connection.

Manual CLI deployments work.
