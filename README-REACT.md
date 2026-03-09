# Ndakaru Bricks & Construction — React (Web) App

This project is set up as a **React web app** (Vite + React), not React Native. React Native is for mobile apps (iOS/Android). For a **website** hosted on Vercel with `npm run dev`, React (web) is the right choice.

## Run the React app locally

1. **Install and run:**
   ```bash
   npm install
   npm run dev
   ```
   Open http://localhost:5173

2. **Build for production:**
   ```bash
   npm run build
   ```
   Output is in the `dist/` folder.

## Deploy on Vercel (ndakaru.co.ke)

The project is a **React (JSX) app** built with Vite. It is not TypeScript; the move from static HTML to this React app does not affect Vercel — same build and domain setup.

**Vercel settings (already in `vercel.json`):**

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install` (default)
- **Rewrites:** `/(.*)` → `/index.html` (SPA client-side routing)
- **Redirect:** `www.ndakaru.co.ke` → `https://ndakaru.co.ke` (permanent)
- **Headers:** HSTS, X-Frame-Options, X-Content-Type-Options

**Domain:** All site URLs and contact use **ndakaru.co.ke** (canonical, manifest, contact links). Config lives in `src/data/site.js`. After push, ensure the production domain in Vercel is set to **ndakaru.co.ke**.

## Assets (images)

Put all gallery and site images in the **`public/`** folder so they are served at the root (e.g. `public/ndakaruphoto.jpg` → `/ndakaruphoto.jpg`). Copy from your current project root into `public/` if needed.

## Home page features

- **Gallery slideshow:** Cycles through all gallery images every 5 seconds, with prev/next buttons, dots, keyboard (arrows), and touch swipe. Pauses on hover; respects reduced motion.
- **Active sections:** Hero, intro, What We Do, trust strip, gallery grid, and CTA banner with smooth layout and links to Get a Quote and Projects.
