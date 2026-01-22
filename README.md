# Fitness Coach Landing Page

Responsive landing page for a personal trainer/fitness coach. Built with React and Tailwind CSS, with sections for hero, services, about, results, and pricing.

## Features
- Clean, responsive layout (mobile-first).
- Reusable sections with clear CTAs.
- Service details modal.
- Tailwind-based styling with simple customization.

## Tech Stack
- React 18 (Create React App)
- Tailwind CSS
- React Router
- Framer Motion
- Radix UI Dialog + Lucide icons

## Project Structure
- `src/pages/LandingPage.js` main landing page
- `src/components/landingpage/` section components
- `src/components/` shared components (footer, UI)
- `public/` static assets

## Getting Started
Install dependencies and run the dev server:

```bash
npm install
npm start
```

Open `http://localhost:3000` in your browser.

## Scripts
- `npm start` start dev server
- `npm run build` production build
- `npm test` run tests
- `npm run eject` eject CRA config

## Customization
- Edit content in `src/components/landingpage/`.
- Update routing in `src/App.js` if you add more pages.
- Add images to `public/` and reference them by path.

## Deployment
Build and deploy the `build/` folder to your hosting provider:

```bash
npm run build
```

## License
MIT
