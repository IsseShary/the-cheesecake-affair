The Cheesecake Affair — Deploy Package
======================================

This folder is a ready-to-serve static site export. It's been prepared from the AI Studio generated app.

What I changed:
- Converted absolute asset paths that pointed to "/the-cheesecake-affair/..." to relative "./..." so the site can be hosted at the repository root or any static host.
- Left all original asset files in ./assets/

How to preview locally:
1. Serve this folder with a static server. Example (Python 3):
   cd the-cheesecake-affair_deploy
   python3 -m http.server 5173
   Then open http://localhost:5173

Recommended hosting options:
- GitHub Pages (repository root /docs or gh-pages branch) — good for free hosting.
- Netlify — drag-and-drop the folder or connect repo; automatic deploys from main branch are easy.
- Vercel — connect repo, adjust build settings to use static output.

Special notes:
- If you want the site available under a sub-path (e.g., https://yourdomain.com/the-cheesecake-affair/), the original absolute paths were already suitable.
- Do NOT commit or expose any .env.local or secret files. I found a .env.local in the source — make sure to not include secrets in the repo. Replace secrets with environment variables on your host.

Files in this package: index.html, assets/...

