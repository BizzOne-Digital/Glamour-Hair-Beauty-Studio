# Glamour Hair & Beauty Studio — Website

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · lucide-react.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
npm run lint
```

Scripts call `node node_modules/...` directly because the `&` in this folder name breaks Windows npm shims.

## Editing content

Everything business-related lives in [`lib/site.ts`](lib/site.ts): phone, WhatsApp, address, hours, services, offers, gallery and image paths.

| To change | Do this |
|---|---|
| A photo | Replace the file in `public/images/` (same name) or change its path in `lib/site.ts` |
| Business email | Set `email` in `lib/site.ts` — it stays hidden everywhere until set |
| Social links | Add verified URLs to `social` in `lib/site.ts` — they render in the footer only when present |
| Live domain | Set `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` in the hosting env (used for canonical URLs, sitemap, Open Graph, JSON-LD) |

## Before launch (needs the client)

- Confirm the business email and social accounts.
- Confirm the map location: the map searches the supplied street address; it is not a verified Google Business pin.
- Replace the stock photography (Unsplash licence) with real studio and client work when available.
- Add real Google reviews only once verified — none are shown today by design.
