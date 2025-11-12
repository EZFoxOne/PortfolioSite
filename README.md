# projectcarey.dev — Cole Carey Portfolio

A fast, minimal portfolio built with Vite + React 19 + Tailwind v4. Deployed on Ubuntu (NGINX), with zero extra frameworks and a sane, repeatable deploy flow.

Live: https://projectcarey.dev

---

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4 (native `@tailwindcss/vite`)
- React Router 7
- Framer Motion (small motion utilities)
- Lucide (icons)
- pnpm
- NGINX on Ubuntu, Let’s Encrypt

---

## Features

- Route-based SPA (Home / Projects / About) with lazy loading
- Site-wide SEO defaults via `react-helmet-async`
- Donation modal (Solana URI + QR)
- PWA manifest, icons, screenshots
- Production-tuned Vite config (hashing, chunking, dedupe)
- NGINX config with SPA fallback and long-term caching for `/assets`

---

## Project Structure

```
src/
  components/
    donate/DonateModal.tsx
    layout/SiteHeader.tsx
    layout/SiteLayout.tsx
    motion/FadeIn.tsx
    seo/SeoDefaults.tsx
  pages/
    Home.tsx
    Projects.tsx
    About.tsx
  routes.tsx
  main.tsx
  App.tsx

public/
  manifest.webmanifest
  favicon.svg
  icon-192.png
  icon-192-maskable.png
  icon-512.png
  icon-512-maskable.png
  apple-touch-icon.png
  screenshot-home-1280x720.jpg
```

---

## Local Development

```bash
pnpm install
pnpm dev
# open http://localhost:5173
```

Build:

```bash
pnpm build
```

Preview static build:

```bash
pnpm preview
```

---

## Icon & Screenshot Generation (optional helpers)

If you’re using the SVG logo to generate PNG icons:

```bash
pnpm icons
```

This expects `public/brand/logo.svg` and writes:

- `public/icon-192.png`
- `public/icon-192-maskable.png`
- `public/icon-512.png`
- `public/icon-512-maskable.png`
- `public/apple-touch-icon.png`
- `public/favicon.ico` (via png-to-ico if installed)

If you’re not using the script, just keep the required files present in `public/`.

Screenshots in `manifest.webmanifest` are metadata only. Save a 1280×720 JPG at:
```
public/screenshot-home-1280x720.jpg
```

---

## Environment

Optional SEO env vars (used by `SeoDefaults`):

```
VITE_SITE_URL=https://projectcarey.dev
VITE_SITE_NAME="Cole Carey | Software Engineer"
VITE_SITE_DESCRIPTION="Portfolio and projects by Cole Carey — full-stack developer and Solana engineer."
VITE_TWITTER_HANDLE=@projectcarey
VITE_OG_IMAGE=https://projectcarey.dev/og-default.jpg
```

---

## Production (VPS + NGINX)

1) Build locally or on the server:
```bash
pnpm install --frozen-lockfile
pnpm build
```

2) NGINX server block points to `/var/www/portfolio/dist` and includes SPA fallback:

```nginx
server {
    listen 80;
    server_name projectcarey.dev www.projectcarey.dev;
    return 301 https://projectcarey.dev$request_uri;
}

server {
    listen 443 ssl http2;
    server_name projectcarey.dev www.projectcarey.dev;

    ssl_certificate     /etc/letsencrypt/live/projectcarey.dev/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/projectcarey.dev/privkey.pem;

    root /var/www/portfolio/dist;
    index index.html;

    location ^~ /assets/ {
        try_files $uri =404;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location ~* \.(ico|png|jpg|jpeg|webp|gif|svg|mp4|mp3|woff2?|ttf|otf)$ {
        try_files $uri =404;
        add_header Cache-Control "public, max-age=2592000";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

3) Deploy via Git (deploy key on VPS):

```bash
# on VPS once
cd /var/www
git clone git@github.com:<YOUR_USER>/<YOUR_REPO>.git portfolio
cd /var/www/portfolio
pnpm install --frozen-lockfile
pnpm build
sudo systemctl reload nginx
```

4) One-command redeploy (script):

`~/deploy.sh`
```bash
#!/usr/bin/env bash
set -e
cd /var/www/portfolio
git fetch --all
git reset --hard origin/master   # or origin/main
git clean -fd
pnpm install --frozen-lockfile
pnpm build
sudo systemctl reload nginx
echo "Deployed latest build."
```

---

## Troubleshooting

- “Invalid hook call / multiple React copies”  
  Remove `node_modules` + lockfile, reinstall with pnpm, and ensure Vite `resolve.dedupe` includes `react`, `react-dom`, `react-router`, `react-router-dom`.

- “Build fails: cannot resolve `react-router/dom`”  
  Install the core package: `pnpm add react-router@7`.

- NGINX still shows the default page  
  Remove `/etc/nginx/sites-enabled/default`, enable your site, `sudo nginx -t`, then `sudo systemctl reload nginx`. Visit by hostname, not IP.

- ICO generation error in icons script  
  Sharp can’t write `.ico` directly. Either skip `.ico` or install `png-to-ico` and generate from PNG buffers.

---

## Donate

SOL donations (QR available on site):
```
solana:YOUR_SOLANA_ADDRESS_HERE
```

---

## License

MIT © Cole Carey
