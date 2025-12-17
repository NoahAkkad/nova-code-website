# Nova Code AB Website

Modern multi-page marketing site for Nova Code AB built with Next.js 14 and deployed on Vercel.

## Live Site
- https://novacode.se

## Screenshots
Screenshots are not checked into the repository. To add them, place image files under `public/screenshots/` and update the references below:
- `![Home page](public/screenshots/home.png)`
- `![Services page](public/screenshots/services.png)`

## Features
- Dark and gold brand styling for all pages.
- Multi-page marketing flow covering Home, About, Services, Products, and Contact.
- English/Swedish language toggle via the header switcher.
- SEO basics with `sitemap.xml` and `robots.txt` already present.
- Contact form submissions handled via Formspree.
- Built on Next.js App Router with responsive layouts.

## Tech Stack
- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Vercel (hosting)

## Getting Started
### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
npm install
```

### Run Locally
```bash
npm run dev
```
Then open `http://localhost:3000`.

### Build
```bash
npm run build
```

### Start (production server)
```bash
npm start
```

## Environment Variables
- No secret keys are required to run the site locally.
- The contact form uses a Formspree endpoint that is hard-coded to `https://formspree.io/f/movovypk` in `src/components/ContactForm.tsx`. Update this value there if you need a different endpoint.
- Never commit private keys or credentials to the repository.

## Deployment (Vercel)
1. Push your branch to GitHub (or another VCS host).
2. In Vercel, create a new project and import this repository.
3. Confirm the defaults: Framework = Next.js, Build Command = `npm run build`, Output Directory = `.next` (handled automatically).
4. Add any required environment variables (none needed by default) and deploy.
5. Do not commit the `.next` build output; Vercel will generate it per deployment.

## Contributing
Pull requests are welcome. Please:
- Open an issue for discussion if you are introducing significant changes.
- Ensure `npm run lint` and relevant checks pass before submitting.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
- Email: info@novacode.se
- Location: Gothenburg, Sweden
