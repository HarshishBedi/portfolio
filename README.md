# harshish.dev

Personal portfolio site built for fast iteration, smooth motion, and custom 3D visuals.

[![Netlify Status](https://api.netlify.com/api/v1/badges/84e06d2e-3760-49ae-b2af-ecfb6c0bcc73/deploy-status)](https://app.netlify.com/projects/harshish/deploys)
[![Live Site](https://img.shields.io/badge/Live-harshish.dev-00C7B7?style=flat&logo=netlify&logoColor=white)](https://harshish.dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.182-000000?style=flat&logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite&logoColor=white)](https://vite.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?style=flat&logo=github&logoColor=white)](https://github.com/HarshishBedi/portfolio)

## Highlights

- Custom React + Three.js portfolio with section-level motion and interactive hero scene.
- Live-editable content via external JSON Gist — update text without redeploying.
- Responsive layout tuned for desktop, tablet, and mobile.
- Single-page PDF card modal for resume and recommendation letter.
- Deployed on Netlify with production-ready Vite builds.

## Tech Stack

- React 19
- Three.js (`@react-three/fiber`, `@react-three/drei`)
- Framer Motion
- Vite 7
- Vanilla CSS

## Project Structure

```text
src/
  components/      UI + section components
  content/         Site copy and structured portfolio data
  styles/          Global variables and base styles
  assets/          Images and PDFs
```

## Content Updates

Site content (name, roles, bio, projects, experience, contact copy) is served from a GitHub Gist at runtime. To update, edit the Gist below — no rebuild or redeploy needed.

[Content Gist](https://gist.github.com/HarshishBedi/08b0db7df1d30a7072da83c6d45342f2)

## Deployment

Production deploys are handled via Netlify:

- Netlify project: `harshish`
- Deploy dashboard: https://app.netlify.com/projects/harshish/deploys
