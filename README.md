# AllStaff Health — Healthcare Staffing Platform (MVP)

A healthcare-staffing platform that connects qualified clinicians with healthcare facilities, built as a dual-audience product with conversion funnels tuned to each side. Designed and built end to end.

🔗 **Live:** https://allstaff-health-demo.vercel.app

## What it does
- **Two audiences, two funnels** — separate optimized paths for healthcare professionals (apply / get matched) and facilities (request staff).
- **Application & intake portals** — multi-field forms with schema validation (`react-hook-form` + `zod`), submissions persisted via Google Sheets and Vercel Blob for uploads.
- **Accessible component system** — built on Radix UI primitives (checkbox, select, toast, dialog) with `class-variance-authority` for consistent, themeable components.
- **Instrumented** — Vercel Analytics for funnel insight.

## Stack
Next.js 14 · React · TypeScript · Radix UI · `react-hook-form` + `zod` · Google Sheets API · Vercel Blob · Lucide · Vercel.

## Notes
An MVP framed around real conversion research rather than a generic CRUD app — the architecture (forms → validation → Sheets/Blob, no heavy backend) keeps an early-stage product cheap to run while it finds product-market fit.

*Designed & developed by Daniel J. Scott / MDJ Studios.*
