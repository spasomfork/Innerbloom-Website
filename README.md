# InnerBloom Somatic Psychotherapy

[![Deploy to GitHub Pages](https://github.com/actions/starter-workflows/actions/workflows/pages/pages.yml/badge.svg)](https://github.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff.svg)](https://vitejs.dev/)

A modern, responsive psychotherapy website designed for **InnerBloom Somatic Psychotherapy & Women's Wellness**, helping women navigate life's emotional transitions with compassionate trauma healing, anxiety reduction, and personal growth.

---

## 🌟 Key Features

- **Home Page**:
  - Hero with phone hotline link (`113 334 433 221`) and direct booking action
  - Clickable "About Us" banner linking seamlessly to the About page
  - "Why Choose Us" 4-feature grid with dual photography and animated metric counters
  - "Our Services" showcase with floral garden imagery and direct service links
  - Dark client testimonial cards with quotes and author details
  - Interactive FAQ accordion
  - "Stay Connected" contact card with address, phone, email, and live validated contact form
  - "Subscribe Today" newsletter subscription form with confirmation feedback
- **About Page**:
  - Arched curved header banner with SVG divider
  - Somatic therapist biography and philosophy
  - Mission, Vision, and Values triad with icons
  - Full-width serene pier visual
  - 10-year psychotherapy experience spotlight
  - Continuous autoplay & looping nature ambience meditation video (`https://www.youtube.com/watch?v=sz6-F1wYFkw`) with audio mute/unmute control
- **Services Page**:
  - Arched header banner
  - Interactive 3-card image carousel with navigation arrows and dot indicators
  - 3 service highlight cards (Mindfulness-Based Therapy, Trauma Recovery, Emotional Transitions)
  - 2×2 client testimonial grid with overlapping circular avatars and Monstera leaf accent
  - "Take Action Now. BOOK A SESSION" gradient banner
- **Interactive Modals**:
  - **Session Booking Modal**: Multi-step appointment scheduler with service selection, therapist preference, date/time pickers, and instant confirmation
  - **Elementor JSON Exporter**: In-browser export tool generating WordPress Elementor template JSON for Home, About, and Services pages with one-click copy and `.json` file download

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```
Static files will be output to the `dist/` directory.

---

## 🌐 Deploy to GitHub Pages (Automated with GitHub Actions)

This repository includes a ready-to-use GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Instructions:
1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy InnerBloom website"
   git push origin main
   ```
2. **Configure GitHub Pages in your repository**:
   - Go to your repository on GitHub.
   - Click on **Settings** &gt; **Pages** (in the left sidebar).
   - Under **Build and deployment** &gt; **Source**, select **GitHub Actions**.
3. **Automatic Deployment**:
   - Every push to the `main` or `master` branch will automatically build and deploy the site.
   - You can also manually trigger a deployment under the **Actions** tab by selecting **Deploy to GitHub Pages** &gt; **Run workflow**.
4. **Access your site**:
   - Your site will be published at:  
     `https://<your-username>.github.io/<your-repo-name>/`

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4, `@tailwindcss/vite`
- **Icons**: Lucide React
- **Bundler**: Vite 6
- **CI/CD**: GitHub Actions (`actions/deploy-pages@v4`, `actions/upload-pages-artifact@v3`)
- **Fonts**: Google Fonts (*Plus Jakarta Sans*, *Playfair Display*)

---

## 📄 Documentation

For a detailed audit, component mapping, and technical specifications, see [GITHUB_REPORT.md](./GITHUB_REPORT.md).
