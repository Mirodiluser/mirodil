# Mirodil Hayitov — Personal Archive

A premium editorial biography and public archive, without portrait photography. Built with Next.js 16, React 19 and Tailwind CSS 4.

## Structure

- `/en`, `/ru`, `/uz` — localized overview
- `/{lang}/biography` — biography, education and milestones
- `/{lang}/academic` — examination results, certificates and academic achievements
- `/{lang}/projects` — Tahrir AI, UWED AI and future case studies
- `/{lang}/public-life` — student initiatives, original publications and media

Each section has a distinct purpose. The home page offers one editorial entry point per section, and the footer avoids redundant navigation links.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

1. Import `Mirodiluser/mirodil` into Vercel as a **Next.js** project. The root directory is `/`.
2. Set `NEXT_PUBLIC_SITE_URL` to the exact production URL, with no trailing slash.
3. Deploy from `main`.
4. Before public search indexing, verify all biographical facts, certificates and their privacy-safe illustrations.
5. Once approved, change `app/[lang]/layout.tsx` from `robots: { index: false, follow: false }` to indexing enabled, and allow crawling in `app/robots.ts`.

## Privacy & verifiability

No face photos, birth date, home address, certificate identifiers, private contact details or QR codes. Self-reported results are labeled as such. Media appearances are marked as pending until an original public source is available.
