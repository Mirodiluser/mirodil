# Mirodil Hayitov — Personal Archive

Premium editorial website, in English, Russian and Uzbek, for documenting biography, education, software projects and student initiatives without portrait photography.

## Information architecture

- `/en`, `/ru`, `/uz`: overview, no repeated navigation buttons
- `/{lang}/biography`: long-form biography, areas of work and timeline
- `/{lang}/academic`: SAT 1440, IELTS 6.5, National Mathematics Certificate B — **subject-reported** pending evidence
- `/{lang}/projects`: Tahrir AI (public frontend code) and UWED AI (private and unofficial educational prototype)
- `/{lang}/public-life`: Nuriyat Ilmi and publications, with only verified press citations

## Running on Render

```bash
npm install
npm run build
npm run start
```

Render typically provides `RENDER_EXTERNAL_URL`. Set `NEXT_PUBLIC_SITE_URL` to your preferred canonical domain (without trailing slash) when using a custom domain. By default the website is **blocked from indexing**, while the public content and document details are reviewed. After approving the content, set `NEXT_PUBLIC_ALLOW_INDEXING=true`, deploy, and verify `/robots.txt` and `/sitemap.xml` before submitting to Google Search Console.

## Source integrity

- University institutional page: https://www.uwed.uz/en/pages/lyceum-6 (confirms the institution, not an individual's admission).
- Public development profile: https://github.com/Mirodiluser
- Tahrir AI frontend repository: https://github.com/Mirodiluser/frontend
- Self-reported exam results are explicitly labelled. **No certificate images are included** until safely redacted and approved.
- Do not publish home address, private email or phone number, exam registration IDs, QR verification codes, official student data, or portrait photos.
- UWED AI is **not official** and must not be represented as an endorsed institutional service.
- Other sites with the name 'Nuriyat Ilmi' are not assumed to be related to this student initiative.

## Updating the biography

Data and all three language versions are in `lib/story.ts`, alongside the evidence and source links. Responsive components in `components/Archive.tsx`; layout and SEO in `app/[lang]/layout.tsx`.

The old `lib/data.ts` and `components/Site.tsx` are superseded and no longer used.
