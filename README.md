# Zaplink — Deep Tech Agency Portfolio

Zaplink is a premium, high-performance agency portfolio website built using **React**, **TypeScript**, and **Vite**. The project is designed with a premium, future-forward aesthetic at the intersection of **Semiconductors**, **Artificial Intelligence**, and **Robotics**.

## ⚡ Core Concepts & Design Systems

- **Dark Mode Premium**: A sleek dark mode (`#050510` background) tailored with vivid accents of cyan, purple, and violet.
- **Glassmorphism**: Backdrop blur overlays (`backdrop-filter`) and thin translucent borders that create depth and visual excellence.
- **Micro-Animations & Visuals**:
  - A dynamic, interactive spinning semiconductor chip representation in the Hero section built purely with CSS orbits and animations.
  - Active float movements, pulse indicators, and hover-triggered expansion cards.
  - Continuous marquees showing operational stats, compliances, and target updates.
- **Responsive Layout**: Custom media queries handling configurations across 4K, Desktop, Tablet, and Mobile viewport screens.
- **SEO & Accessibility**: Completely semantic HTML tags (`<nav>`, `<section>`, `<main>`, `<footer>`), custom web manifest icons, meta tags, and descriptive link text.

---

## 🛠 File Structures

- `index.html`: Contains SEO descriptors, viewport settings, and Google Font link targets.
- `src/main.tsx`: Entry point mounting the primary layout.
- `src/index.css`: Global Design System stylesheet containing color variables, layout rules, and keyframes.
- `src/App.tsx`: Main page shell binding together the portfolio modules.
- `src/components/`:
  - `Navbar.tsx`: Sticky navigation with scroll checking, mobile menu hamburger toggle, and anchor offsets.
  - `Hero.tsx`: Dynamic introduction showcasing our capabilities alongside an animated 3D chip.
  - `Services.tsx`: Service matrix cards for Chip Design, AI pipelines, and Robotic controls.
  - `About.tsx`: Narrative section detailing our hardware, AI, and ROS2 convergence.
  - `Portfolio.tsx`: Client deployment projects with custom interactive state filter tabs.
  - `Tech.tsx`: Tools matrix showcasing the exact libraries and frameworks (RISC-V, PyTorch, ROS2, CUDA).
  - `Team.tsx`: Profile cards for leadership and specialized engineering teams.
  - `Testimonials.tsx`: Quote cards from aerospace, logistics, and tech research leaders.
  - `CTA.tsx`: Form for onboarding new client parameters and requests.
  - `Footer.tsx`: Legal policies, dynamic copyright, social channels, and sitemap.

---

## 🚀 Getting Started

### Installation
To install the dependencies, execute:
```bash
npm install
```

### Run Locally
To run the development server, run:
```bash
npm run dev
```

### Production Build
To build and compile the optimized static files, run:
```bash
npm run build
```
