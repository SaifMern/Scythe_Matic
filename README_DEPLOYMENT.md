# Scythematic Deployment Notes

This project is prepared for Node.js 24 and Vercel deployment.

## Local setup

```bash
cd agency-website
node -v
npm install
npm run dev
```

The expected Node version is `24.x`.

## Production build

```bash
npm run build
npm run start
```

## Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Install command: `npm install`.
6. Add EmailJS environment variables from `.env.example` in Vercel Project Settings if the contact form should send emails.

## Notes

- `node_modules`, `.next`, `.vercel`, `build`, and `out` are intentionally excluded.
- The file `public/splash-sound.mp3` is optional. If you want splash audio, add the MP3 with exactly that name.
