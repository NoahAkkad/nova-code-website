# Nova Code Website

Marketing site for Nova Code built with **Next.js 14 (App Router)** and **Tailwind CSS**. The layout is fully responsive, includes a dark mode, and is optimized for performance while staying easy to customize.

## Requirements
- Node.js 18 or newer
- npm (bundled with Node)

## Run the project locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the URL printed in the terminal (usually `http://localhost:3000`). Edits hot-reload automatically.

## Key npm scripts
- `npm run dev` — start the development server.
- `npm run build` — produce an optimized production build.
- `npm start` — serve the production build after running `npm run build`.
- `npm run lint` — run ESLint using the project configuration.

## Project structure
- `src/app/` — Next.js pages/routes using the App Router (home and derived sections).
- `src/components/` — reusable UI building blocks (buttons, content sections, hero elements, etc.).
- `public/` — static assets such as images and icons.
- `tailwind.config.ts` and `postcss.config.mjs` — Tailwind/PostCSS configuration.

## Deploying to Vercel
The project is ready for Vercel and can auto-deploy from the repository:
1. Connect the repo to your Vercel account and choose the branch to deploy (typically `main`).
2. Each `git push` triggers a new build automatically; track its status in the Vercel dashboard.
3. To add a custom domain: go to **Project → Settings → Domains** in Vercel, add the domain, and follow the DNS instructions (usually a CNAME to `cname.vercel-dns.com`).
4. Once DNS is active, updates appear on the domain as soon as each deployment finishes.

## Quick customization
- Update copy and images in `src/app` and `src/components`.
- Adjust the visual theme (colors/fonts) via Tailwind settings in `tailwind.config.ts`.
- Add analytics or third-party scripts in the App Router layout at `src/app/layout.tsx`.

## Contributing
Suggestions and fixes are welcome. Please open an Issue or submit a Pull Request after confirming `npm run lint` passes and the project runs locally.
