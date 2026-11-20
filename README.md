# Mirodil Hayitov — Personal Archive

Editorial-style personal website in Uzbek, Russian and English. The homepage and full biography contain no added photograph galleries.

Pages:
- /uz, /ru, /en — independent home and navigation
- /{lang}/biography — biographical text
- /{lang}/academic — school, admission, SAT, IELTS, Mathematics National Certificate, district English award, MARS IT placeholder
- /{lang}/projects — Tahrir AI, Boburnoma Parallel Korpusi, unofficial UWED AI; official Tahrir AI site https://tahrirai.uz
- /{lang}/public-life — sport award records, Nuriyat Ilmi leadership
- /{lang}/media — TV interviews and Yoshlar Ovozi newspaper photographs

Media: use the companion package mirodil-complete-media.zip to upload ten files to the repository's public/media folder. GitHub connector currently changes source code but cannot directly transfer the image bytes. After committing images, check the media gallery on the live deployment.

The user-provided award records are not independently verified; the supplied chess diploma shows a second-degree classification and a handwritten first-place result. Existing academic scans have sensitive details permanently covered.

Framework: Next.js App Router, React, TypeScript, Tailwind CSS, Motion for React.
Deployment: main branch, npm install, npm run build, npm run start.
SEO: set NEXT_PUBLIC_SITE_URL to the production domain; enable NEXT_PUBLIC_ALLOW_INDEXING=true only after reviewing the public content and images.
