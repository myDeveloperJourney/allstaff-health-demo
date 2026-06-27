# Polaris Pathways Behavioral Talent

A staffing/talent platform for **Polaris Pathways Behavioral Talent**, connecting behavioral-health professionals with the organizations that need them. Built as a dual-audience product with conversion funnels tuned to each side. Designed and built end to end.

🔗 **Live:** https://www.polarispathbt.com/

## What it does
- **Two audiences, two funnels** — separate optimized paths for behavioral-health professionals (apply / get matched) and organizations (request talent).
- **Application & intake portals** — multi-field forms with schema validation (`react-hook-form` + `zod`), submissions persisted via Google Sheets and file uploads via Vercel Blob.
- **Accessible component system** — built on Radix UI primitives (checkbox, select, toast, dialog) with `class-variance-authority` for consistent, themeable components.
- **Instrumented** — Vercel Analytics for funnel insight.

## Stack
Next.js 14 · React · TypeScript · Radix UI · `react-hook-form` + `zod` · Google Sheets API · Vercel Blob · Lucide · Vercel.

## Notes
Built around real conversion research rather than a generic CRUD app — the architecture (forms → validation → Sheets/Blob, no heavy backend) keeps the product cheap to run while it scales.

*Designed & developed by Daniel J. Scott / MDJ Studios.*
