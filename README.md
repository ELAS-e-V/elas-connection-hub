# ELAS Landing Page — elas-connection-hub 🧭

## 🔎 Description
Landing page project for **ELAS e.V.**, built with a focus on accessibility, internationalization (DE/EN), and performance.

**Key files:**
- `index.html` — meta tags, Open Graph, JSON-LD and font preloads
- `public/` — `sitemap.xml`, `robots.txt`, `og-image.v1.png`, `favicon.ico`
- `src/contexts/LanguageContext.tsx` — synchronizes meta tags per language

## ▶️ Local development
There are two common ways to work on the project:

**1) Locally (IDE):**

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

**2) Remotely (Lovable / Codespaces):**
- Use the Lovable interface to edit directly or launch a Codespace for a ready environment.

**Tip:** to test performance, build and serve the preview:

```sh
npm run build
npm run preview
# then run Lighthouse against the preview URL
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## 🛠️ Technology
This project uses:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

---

## 📦 Useful scripts
- `npm run dev` — development
- `npm run build` — production build
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint
- `npm run lint:css` — Stylelint

---

## 🚀 Deployment
You can deploy to your preferred platform (Vercel, Netlify, GitHub Pages). For local production testing, use `npm run build` + `npm run preview`.

---

## 🚀 SEO & Performance (what was applied)
- Added Open Graph and Twitter card (`public/og-image.v1.png`).
- Added JSON‑LD (Organization) to `index.html`.
- Configured `hreflang` and `canonical` tags.
- Non-blocking preload of Google Fonts with a `<noscript>` fallback.
- `width`/`height` attributes added to images to reduce CLS.
- Created `public/sitemap.xml` and referenced it in `public/robots.txt`.
- Dynamic meta tag updates per language via `src/contexts/LanguageContext.tsx`.

Recommendations: self-host fonts (WOFF2), serve images as WebP/AVIF, and generate language-specific OG images.

---

## 🧪 How to audit (Lighthouse)
Run Lighthouse against the preview build for realistic results (disable extensions during the test):

```sh
# start preview (after build)
npm run preview

# run Lighthouse (example)
npx lighthouse http://localhost:4173 --chrome-flags='--disable-extensions --no-sandbox --headless' --output html --output-path=./lighthouse-report.html
```

---

## 🤝 Contributing
- Open a branch and send PRs with a clear description (e.g. `chore(seo): improve meta tags`).
- Run `npm run lint` before opening a PR.

---

## ✉️ Contact
For content questions or updates: `hello@elas-de.org`
