# Eastern Doctor Deployment Checklist

Domain: `easterndoctor.com`

Recommended production stack:

- Web hosting and PWA app: Vercel
- Database: Neon Postgres first choice; Supabase Postgres fallback if Neon login is blocked
- Domain DNS: Cloudflare DNS or the domain registrar DNS
- Sales channel: Shopee shop plus WhatsApp, linking back to `https://easterndoctor.com`

Shopee is useful for productized service listings, chat, ads and trust inside the marketplace. It is not the place to host this Next.js website or the PWA app.

The repo is prepared for two database modes:

- Local development: `prisma/schema.prisma` with SQLite.
- Vercel production: `prisma/schema.postgres.prisma` with Neon Postgres.

Vercel uses `npm run build:vercel` from `vercel.json`, which generates the Prisma client from the Postgres schema before building.

## Already Prepared in Code

- Public website at `/`.
- Patient app flow at `/app`.
- Case intake form and `/api/consultation`.
- Internal lead dashboard at `/admin` and `/admin/leads`.
- Basic Auth protection for `/admin`.
- SEO routes: `/sitemap.xml` and `/robots.txt`.
- PWA manifest: `/manifest.webmanifest`.
- Privacy, terms and medical disclaimer pages.
- Security headers in `next.config.js`.
- Environment variable template in `.env.example`.
- Deployment check script: `npm run deploy:check`.

## Website Launch

1. Create a GitHub repository and push this project.
2. Create a Vercel project from the GitHub repo.
3. Create a Neon Postgres database. If Neon login or registration cannot open, use Supabase Postgres instead; no code change is needed because both provide a standard Postgres `DATABASE_URL`.
4. Set production environment variables in Vercel:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_SITE_URL=https://easterndoctor.com`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER=85252642367`
   - `NEXT_PUBLIC_CONTACT_EMAIL=sevenfayu@gmail.com`
   - `ADMIN_USERNAME=sevenfayu`
   - `ADMIN_PASSWORD`
5. Run `npm run prisma:push:prod` against the production Postgres database.
6. Deploy on Vercel.
7. Point `easterndoctor.com` DNS to Vercel.
8. Submit `https://easterndoctor.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
9. Add analytics only after privacy wording is finalized.

Production environment variable template:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST/easterndoctor?sslmode=require"
NEXT_PUBLIC_SITE_URL="https://easterndoctor.com"
NEXT_PUBLIC_WHATSAPP_NUMBER="85252642367"
NEXT_PUBLIC_CONTACT_EMAIL="sevenfayu@gmail.com"
ADMIN_USERNAME="sevenfayu"
ADMIN_PASSWORD="replace-with-a-long-random-password"
```

GitHub repository:

```text
https://github.com/sevenfayu/doctor
```

## PWA App Launch

The first app launch should be the PWA at:

```text
https://easterndoctor.com/app
```

Users can open it on mobile and add it to their home screen. This avoids Apple and Google review while you validate demand and lead conversion.

## Native Store Launch Later

Use this after the website/PWA flow proves conversion.

You need:

- Apple Developer account.
- Google Play Console account.
- App name, bundle ID and package name.
- Production domain and support email.
- Privacy policy URL.
- App screenshots for iPhone and Android.
- App icon PNG assets.
- Clear medical disclaimer and data collection disclosure.
- A Capacitor wrapper or native shell around the web app.

## Shopee Launch Role

Use Shopee as a sales and trust channel:

- Create service listings such as "China Medical Case Review", "China Hospital Appointment Coordination" and "International Patient Concierge".
- Put `easterndoctor.com` and WhatsApp in allowed profile/contact areas where Shopee policy permits.
- Use Shopee chat scripts to move qualified users into the same intake checklist.
- Keep the actual case intake, medical disclaimer and privacy policy on `easterndoctor.com`.

## Compliance Items You Must Finalize

- Registered company name, address and legal contact.
- Privacy policy reviewed for target countries.
- Medical information consent wording.
- Data retention and deletion process.
- Whether you will accept full medical records on the website, WhatsApp or a secure upload system.
- Hospital, expert and case-result claims with written permission.
- Service agreement, refund rules and payment terms.
- Emergency disclaimer and non-diagnosis boundary.

## Operational Items

- Decide who receives every lead and expected response time.
- Create a lead status workflow: new, contacted, qualified, case_review, expert_matched, converted, closed.
- Prepare WhatsApp scripts for first response, record checklist and quote handoff.
- Prepare an expert-ready case packet template.
- Decide file storage before collecting scans, imaging or pathology reports.
- Set up backups for the production database.
