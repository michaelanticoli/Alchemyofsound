# Strategy Landing Page Package (Subdomain-ready)

This folder is a deploy-ready static site for a subdomain like:

- `strategy.michaelanticoli.com`

## Files

- `index.html`
- `assets/styles.css`
- `assets/script.js`
- `CNAME` (set to `strategy.michaelanticoli.com`)

## Fastest deployment options

## Option A) Existing repo + hosting static folder

1. Copy this folder into your repo, e.g.:
   - `/strategy-site/`
2. Configure your host to publish that folder as the site root.
3. Point subdomain DNS to that deployment.

## Option B) Vercel

1. In Vercel, import repo.
2. Set **Root Directory** to `strategy-site` (or whatever you named this folder).
3. Framework preset: **Other** (static).
4. Add domain: `strategy.michaelanticoli.com`.
5. Add DNS record Vercel provides (usually CNAME).

## Option C) Netlify

1. New site from repo.
2. Base directory: this folder.
3. Build command: *(empty)*.
4. Publish directory: `.`
5. Add custom domain `strategy.michaelanticoli.com` and set DNS CNAME.

---

## DNS (typical)

For most hosts, add:

- Type: `CNAME`
- Name/Host: `strategy`
- Value/Target: host-provided target (e.g. `cname.vercel-dns.com` or Netlify target)

If your DNS provider is Cloudflare, keep Proxy OFF initially until SSL cert is active.

---

## Tailoring notes

- Main pitch content is in `index.html`.
- Update email, links, and claims before publish.
- If you want this under path instead of subdomain, host at `/strategy` and link accordingly.
