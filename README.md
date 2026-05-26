# Eastern Doctor

A focused website and app prototype for attracting international patients to medical treatment in China.

## Business Scope

This version keeps one business line only:

- Explain China's medical system in practical terms for foreign patients.
- Introduce major city and specialty hospital directions.
- Present company capability: case handling, expert-ready packets, hospital coordination and China arrival support.
- Convert SEO and social traffic through a website form or WhatsApp.
- Let patients submit a medical case first, then connect them with suitable China-side experts and hospitals.

The product supports information organization and medical travel coordination. It does not provide emergency care, diagnosis, prescriptions or guaranteed treatment outcomes.

## Main Routes

- `/` - public SEO website and conversion landing page.
- `/app` - mobile-first patient intake app flow.
- `/consultation` - standalone case submission page.
- `/admin` and `/admin/leads` - simple internal lead dashboard.

## Tech Stack

- Next.js 16 + TypeScript + Tailwind CSS
- Prisma ORM
- SQLite for local development

## Local Setup

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

Example `.env`:

```bash
DATABASE_URL="file:./dev.db"
AI_MODE="mock"
```

## Launch Notes

Before production launch, replace environment variables with real values, confirm legal pages with counsel, and publish hospital or expert claims only after written verification.

Useful checks:

```bash
npm run deploy:check
```

Production build on Vercel uses Neon/Postgres:

```bash
npm run build:vercel
```

See `DEPLOYMENT.md` for the website and app launch checklist.
