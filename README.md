# Metro Property Care — Starter Site (Style 01)

Welcome to the initial file set for **Metro Property Care**, a Detroit‑built iron supply company with national e‑commerce reach.  This repository provides a simple starter site that follows **Style 01 — Soft Luxury Commerce** and includes a signature splash animation.  Use these files as the foundation for your Next.js or static site build within Codex.

## What’s Included

This starter pack contains:

- **`index.html`** – A simple, standards‑compliant HTML entry point with semantic sections for hero, about, product catalog, ordering & shipping, and contact.  It follows Style 01 with generous spacing, restrained typography and a calm, editorial feel.  Replace or adapt this to your preferred framework (e.g. Next.js) once you have the design established.
- **`style.css`** – A small CSS stylesheet that defines the soft colour palette, typography, spacing and responsive behaviour consistent with Style 01.  It also includes styles for the splash overlay and header shrink‑on‑scroll behaviour.
- **`script.js`** – A lightweight JavaScript file that implements the “signature move” splash animation.  On first page load it displays the company logo large on a dark background; any user interaction dismisses the overlay and stores a session flag so the animation doesn’t replay during the session.  It also handles shrinking the header on scroll.
- **`assets/`** – A folder containing the supplied imagery:
  - `flat-lay.jpg` – The neutral hardware background used in the hero section.
  - `background.png` – The supplied composition with logo and metallic texture (optional alternative background).
  - `logo.png` – The Metro Property Care logo used in the header and splash animation.

## How to Use

1. **Upload these files to your new GitHub repository** (`metro_property_care_smoot-site`).
2. Preview `index.html` in a browser to verify the look and feel.  Adjust content or layout as needed.
3. If you are using Next.js or another framework, migrate the markup into your pages and components.  Keep the design tokens (colours, typography, spacing) defined in `style.css`.
4. The splash animation uses `sessionStorage` to ensure it only appears once per session.  To test repeatedly, open the site in a new private window or clear `sessionStorage` in your dev tools.
5. To disable the splash, remove the `<div id="splash-overlay">` element and the associated JavaScript in `script.js`.

## Deploy to Vercel

This project is a static site with no build step required.

- **Install:** `npm install`
- **Build:** `npm run build`
- **Output directory:** `.`

### Notes

- **Environment variables:** none required.
- **Assets:** if you update or add binary assets (images, fonts), upload them directly to the repository outside of this PR workflow.

## Design Notes (Style 01)

Style 01 is defined by **soft luxury, restraint, and editorial clarity**.  Colours are muted and neutral; contrast comes from spacing rather than saturation.  Typography is clean and modern with plenty of breathing room.  Movement is gentle and purposeful.  This aesthetic signals trust, quality and premium care — an ideal fit for a property maintenance brand.

If you choose to extend the site, continue using:

- **A neutral palette:** warm off‑whites, pale greys and muted beiges.  Dark text should be charcoal rather than pure black.
- **Generous spacing:** wide margins, predictable vertical rhythm, and uncluttered compositions.
- **Minimalist buttons:** flat fills or thin outlines; hover states should subtly change opacity or shade rather than bounce or glow.
- **Editorial copy:** short sentences with calm confidence; avoid hype or exclamation marks.

For more details on Style 01, refer back to your style system documentation.
