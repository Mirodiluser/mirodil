# Mirodil Hayitov — Personal Archive

A modern editorial-style personal website in Uzbek, Russian and English, based on Next.js, React, Tailwind CSS and Motion.

## Pages
- /uz, /ru, /en — homepage, portrait-free and without redundant internal links
- /{lang}/biography — full biographical narrative
- /{lang}/academic — education and certificate galleries (IELTS, SAT, Mathematics National Certificate, English district-level award)
- /{lang}/projects — TAHRIR AI (https://tahrirai.uz), Boburnoma Parallel Korpusi, UWED AI
- /{lang}/public-life — sporting awards and student leadership
- /{lang}/media — television interview photos and Yoshlar Ovozi newspaper feature

## Image assets
The **10 image files are already tracked in GitHub**, under `public/media`, including the original newspaper/interview photos, privacy-redacted exam document previews and three award photos. No manual upload is required.

Static image URL example: `/media/interview-mahalla.jpg`.

## Privacy
The exam scans shown publicly have registration identifiers, portrait details and QR codes permanently obscured. Original unredacted exam certificates must not be published. The student remains in control of his public profile.

## Updating and deploying
The `main` branch is the source for deployments. A GitHub Actions workflow checks the production build with `npm install && npm run build`. If Render is connected to `main` with Auto-Deploy enabled, updates are deployed automatically; otherwise trigger a deploy manually.

For SEO, set `NEXT_PUBLIC_SITE_URL` to the canonical production URL. `NEXT_PUBLIC_ALLOW_INDEXING` is disabled by default until the content is approved for search indexing.

## Key files
- `lib/profile.ts`: localized biography and project descriptions
- `lib/awards.ts`: English, chess and boxing achievements
- `lib/certificates.ts`: exam records and MARS IT placeholder
- `lib/media.ts`: television and newspaper entries
- `components/ProfileSite.tsx`: overall site layout
- `components/AwardsShowcase.tsx`: award presentation
- `components/CertificateShowcase.tsx`: test result cards
- `components/MediaPage.tsx`: press gallery
- `components/MediaAsset.tsx`: responsive image display and zoom
