# Mirodil Hayitov — Official-style Personal Archive

A premium, three-language editorial profile (Uzbek, Russian, English) with **no portrait photography**. The website records information supplied directly by Mirodil Hayitov.

## Pages and navigation

- \`/uz\`, \`/ru\`, \`/en\` — home: only an editorial hero and introduction; **no links/cards leading to other internal pages**
- \`/{lang}/biography\` — the main biography (original Uzbek text is preserved verbatim)
- \`/{lang}/academic\` — former school No. 246, admission in 2026 with 142.7 points, exams and certificates
- \`/{lang}/projects\` — Tahrir AI, Boburnoma Parallel Korpusi research, unofficial UWED AI prototype
- \`/{lang}/public-life\` — chess, karate, boxing and Nuriyat Ilmi

**All internal navigation is from the header navigation (desktop and mobile).** The footer does not repeat the section menu.

## Design and animation

- Next.js App Router, Tailwind CSS and **Motion for React**
- Staggered editorial reveals and scroll-triggered transitions
- Spring reactions on navigation, menus and project interactions
- Entry animation in \`app/[lang]/template.tsx\` on each navigation
- Scroll progress indicator; slow ambient hero animation
- Reduced-motion user preferences respected by Motion and CSS

## Source and privacy

The Uzbek biography was provided by the website subject. Sports wins and exam scores are presented as supplied information, not independently verified official records. No personal certificate IDs, QR codes, home address, phone numbers or private contact details appear on the website.

- UWED institutional website: https://www.uwed.uz/en/pages/lyceum-6 (confirms institution's existence, not the individual's enrollment).
- Developer GitHub: https://github.com/Mirodiluser
- Tahrir AI frontend repository: https://github.com/Mirodiluser/frontend
- UWED AI is a private, unofficial prototype and should not be presented as an institutional service.

## Deployment on Render

\`\`\`bash
npm install
npm run build
npm run start
\`\`\`

Render provides \`RENDER_EXTERNAL_URL\`. Optionally set \`NEXT_PUBLIC_SITE_URL\` for a custom canonical domain.

The site remains **noindex by default** until the owner reviews the information and wishes to make it searchable. When ready, set \`NEXT_PUBLIC_ALLOW_INDEXING=true\` and verify \`/robots.txt\` and \`/sitemap.xml\`.

## Editing content

- \`lib/profile.ts\`: the full supplied biography, thematic facts and translations.
- \`components/ProfileSite.tsx\`: the design, header-only internal navigation and page structure.
- \`app/[lang]/template.tsx\`: route entrance animations.
- \`app/[lang]/layout.tsx\`: localized metadata and structured \`ProfilePage\` markup.
