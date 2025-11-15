
Production & CI Guide
=====================

What this setup does
- On push to `main`, the `Full CI, Audit, Optimize and Deploy` workflow will:
  1. Install dependencies (npm ci)
  2. Run accessibility checks (pa11y)
  3. Optimize images (imagemin-cli -> webp)
  4. Run Vite build (`npm run build`) to create a production `dist/` folder
  5. Run Lighthouse CI to get performance/accessibility metrics
  6. Deploy the `dist/` folder to GitHub Pages using peaceiris/actions-gh-pages

Important notes
- Secrets: Add any production secrets (Firebase, Stripe, OpenAI) to the repository's Settings → Secrets (for Actions) and to your hosting provider environment variables. Do NOT commit secrets to the repo.
- pa11y & LHCI run on the CI runner and might require adjusting URLs if your app expects server endpoints. The LHCI config starts a simple static server to run Lighthouse against the built output.
- Image optimization will replace/produce WebP images in place. If your build process references specific hashed filenames, the imagemin step should be adapted to update references during the build (currently it attempts to replace images in assets/).

Domain + HTTPS
- If you use GitHub Pages: In your repo Settings → Pages, set the custom domain and enable Enforce HTTPS. GitHub will request a TLS certificate automatically (via Let's Encrypt).
- If you use Netlify or Vercel: add your custom domain in their dashboard and follow the provider's DNS instructions. They will provision HTTPS automatically.
