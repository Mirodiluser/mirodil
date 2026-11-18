# Mirodil Hayitov — Personal Archive

Independent editorial biography in Uzbek, Russian and English, without portrait photos on Home or Biography.

## Navigation

- `/uz`, `/ru`, `/en` — standalone homepage; **all internal page navigation is only in the navbar**
- `/{lang}/biography` — original official-style biographical text and a brief mention of full-stack development
- `/{lang}/academic` — School No. 246, UWED admission (142.7 points), separate IELTS/SAT/National Certificate galleries, Mars IT placeholder
- `/{lang}/projects` — Tahrir AI, Boburnoma Parallel Korpusi, unofficial UWED AI project
- `/{lang}/public-life` — chess, karate, boxing, vice presidency of ALUWED student party Nuriyat Ilmi
- `/{lang}/media` — O‘zbekiston 24 and Mahalla TV interviews, Yoshlar Ovozi newspaper issue 31 (28 October 2026)

Original newspaper and interview photos were supplied by the site subject and must be kept unchanged. Television guest/conversation topics are subject-reported; exact broadcast dates and video links can be added when documented.

## Media upload step (required)

The code references **7 images** in `public/media`. The images are not uploaded yet. In the GitHub repository open the `public/media` folder, select **Add file → Upload files** and drag all seven unzipped files from `mirodil-media-ready.zip/public/media`. Commit directly to `main` to trigger the host's deployment.

Expected filenames:
- `interview-ozbekiston24.jpeg`
- `interview-mahalla.jpg`
- `press-yoshlar-ovozi-cover.jpg`
- `press-yoshlar-ovozi-feature.jpg`
- `certificate-ielts-redacted.webp`
- `certificate-sat-redacted.webp`
- `certificate-math-redacted.webp`

The photos and newspaper images in the ZIP are byte-for-byte originals. The **certificate scans are not originals**: identifying information and portrait photos have been fully overwritten by opaque masks (not merely blurred). Do not publish unredacted originals.

Until the images are uploaded, the site intentionally shows decorative placeholder panels rather than broken image icons.

## Architecture

- Next.js App Router / React / TypeScript / Tailwind
- Motion for React: route transitions, scroll reveals, spring hover/tap feedback, reduced-motion support
- Editorial UI components in `components/ProfileSite.tsx`
- Press gallery in `components/MediaPage.tsx`
- Document showcase in `components/CertificateShowcase.tsx`
- Image zoom / fallback in `components/MediaAsset.tsx`
- Localized content in `lib/profile.ts`, `lib/media.ts`, `lib/certificates.ts`

## SEO & privacy

Set `NEXT_PUBLIC_SITE_URL` for your canonical domain (or Render can supply `RENDER_EXTERNAL_URL`). The default is deliberately **noindex** while the data and privacy masks are reviewed. After approval, set `NEXT_PUBLIC_ALLOW_INDEXING=true`, deploy, and check `/robots.txt` and `/sitemap.xml`.

Sources:
- UWED institutional page: https://www.uwed.uz/en/pages/lyceum-6
- GitHub profile: https://github.com/Mirodiluser
- Tahrir AI frontend: https://github.com/Mirodiluser/frontend
- Yoshlar Ovozi official press channel: https://t.me/yoshlarovozi

No private email, home address, candidate ID, exam locator, certificate number, verification QR code, date of birth or portrait photo is in the public certificate assets. The owner provided the biographical and leadership descriptions. UWED AI is an independent, unofficial prototype.
