# Niranjan Chand — Portfolio

Personal portfolio for my work in full-stack development, UI/UX, and software engineering.

I’m a BICT student and full-stack developer with experience at Crimson Tech and Saayami Technology. The portfolio highlights my work on industrial vision and production systems, alongside personal and academic projects.

## What’s here

- **Work:** projects built with Crimson Tech, including LC-NC, Dove ODS, and industrial inspection systems.
- **Projects:** personal, experimental, and academic work.
- **Experience and education:** career and study history.
- **Project details:** individual pages with each project’s overview, role, technology, challenge, and outcomes.

## Built with

- React 18 and TypeScript
- Vite
- React Router
- Tailwind CSS

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal. To create and preview a production build:

```bash
npm run build
npm run preview
```

The build command runs the TypeScript check before bundling the site.

## Update portfolio content

Profile details, work history, education, skills, highlights, links, and project entries are in [`src/data.ts`](./src/data.ts). Project entries use `grp: "work"` to appear under Work and `grp: "me"` to appear under Projects; each project needs a unique `id` for its detail page.

Image assets, including profile, company, education, and favicon artwork, are in [`public/`](./public/). The page title and metadata are set in [`index.html`](./index.html).

## Pages

| Route | Content |
|---|---|
| `/` | Profile, experience, education, skills, and personal-project highlights |
| `/work` | Professional projects |
| `/projects` | Personal and academic projects |
| `/work/:id` | Professional project details |
| `/projects/:id` | Personal or academic project details |

The interface supports dark and light themes, remembers the selected theme in local storage, and includes responsive bottom navigation.
