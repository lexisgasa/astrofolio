# 🚀 Astro Portfolio - Alexis Garcia

<p align="center">
  <a href="README.es.md">🇪🇸 Leer en Español</a> |
  <a href="README.ja.md">🇯🇵 日本語で読む</a>
</p>

![Project Banner](public/banner.png)

Minimalist, accessible, and high-performance personal portfolio built with **Astro** and **Tailwind CSS**. Designed with scalable i18n architecture and container-ready deployment.

🔗 **Live Demo:** [https://alexisastrofolio.netlify.app](https://alexisastrofolio.netlify.app)

## ✨ Features

- 🎨 **Responsive Design:** Fully adaptable layout for mobile and desktop devices.
- ⚡ **High Performance:** Static Site Generation (SSG) achieving 100/100 Lighthouse scores.
- 🐳 **Docker Ready:** Containerized with Nginx using multi-stage builds.
- 🌐 **Internationalization (i18n):** Full support for Spanish (ES), English (EN), and Japanese (JA) using dynamic routing.
- 🌙 **Dark Mode:** Light/Dark theme with `localStorage` persistence and system preference detection.

## 🛠️ Tech Stack

- **Framework:** [Astro 5](https://astro.build/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Libraries:** Typed.js
- **Infrastructure:** Docker & Nginx

## 🚀 Installation & Local Usage

### Prerequisites

- Node.js (v18 or higher)
- npm

### Steps

1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/astrofolio.git](https://github.com/YOUR_USERNAME/astrofolio.git)
   cd astrofolio
   ```
2. Install dependencies:

   ```bash
    npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

Visit [http://localhost:4321](http://localhost:4321/en) in your browser.

## 🐳 Running with Docker

The project includes configuration to be deployed as a lightweight container using Nginx.

### Using Docker Compose (Recommended)

Simply run:

```bash
docker compose up --build -d
```

Portfolio will be available at [http://localhost:4321](http://localhost:4321/en).

## Manual Build

If you prefer building the image manually:

1. Build the image

   ```bash
   docker build -t astrofolio .
   ```

2. Run the container

   ```bash
   docker run -p 8080:80 astrofolio
   ```

## 🚧 Roadmap & Upcoming Features

This portfolio is currently under active development. Here are the features planned for the next releases:

- [x] **Core Structure:** Astro setup + Tailwind CSS.
- [x] **Docker:** Containerization with Nginx.
- [ ] **i18n:** Full support for ES/EN/JA routing.
- [ ] **Testing:** Add Unit and End-to-End tests.
- [ ] **Accessibility:** Audit and improve ARIA labels and style following the [WCAG](https://www.w3.org/TR/WCAG21/)
- [ ] **Projects Section:** Create and update this section with a pure backend and full-stack projects.
- [ ] **Blog:** Integration of a Markdown-based blog.
- [ ] **WIP** Update ES/EN/JA readme and improve PSI.

---
