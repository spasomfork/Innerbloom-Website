# Project & Repository Report: InnerBloom Somatic Psychotherapy

**Repository Report Date:** September 2024 / Updated Release  
**Application Name:** InnerBloom Somatic Psychotherapy & Women's Wellness  
**Repository Branch:** `main`  
**Deployment Target:** GitHub Pages (Automated CI/CD via GitHub Actions)

---

## 1. Executive Summary

**InnerBloom Somatic Psychotherapy** is a modern, responsive web application engineered for a somatic mental health and psychotherapy practice specializing in women's wellness (ages 25–50). The application provides an organic, calming visual presence inspired by nature and clinical compassion, guiding prospective clients through trauma recovery, anxiety reduction, and personal growth.

In addition to serving as a standalone web application, it features an **Elementor JSON Template Generator** providing native WordPress Elementor schema definitions (using only core widgets: `heading`, `text-editor`, `image`, `icon-box`, `counter`, `video`, `form`, `accordion`, and `testimonial`).

---

## 2. Technical Architecture & Stack

| Layer | Technology | Details / Role |
| :--- | :--- | :--- |
| **Framework** | **React 19** + **TypeScript** | Strict type safety, functional component paradigm, and React state hooks |
| **Bundler & Dev Server** | **Vite 6** | Ultra-fast bundling, ES module loading, and relative asset resolution |
| **Styling** | **Tailwind CSS v4** | CSS utility engine with `@tailwindcss/vite`, responsive break-points, custom color tokens |
| **Icons** | **Lucide React** | Feather-light SVG vector iconography |
| **Typography** | **Google Fonts** | *Plus Jakarta Sans* (clean modern body font) paired with *Playfair Display* (classic editorial serif) |
| **Video Engine** | **YouTube No-Cookie IFrame** | Relaxing nature meditation video with seamless autoplay, looping (`playlist` parameter), and client sound toggle |
| **CI/CD** | **GitHub Actions** | Automated workflow deploying directly to GitHub Pages on pushes to `main` |

---

## 3. Directory Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages deployment pipeline
├── public/                         # Public static assets
├── src/
│   ├── components/
│   │   ├── AboutPage.tsx           # About page (bio, mission/vision/values, looping video)
│   │   ├── BookingModal.tsx        # Interactive session booking modal with date & time selection
│   │   ├── ElementorTemplateModal.tsx # Native Elementor JSON schema exporter
│   │   ├── Footer.tsx              # Site footer with brand narrative, fast links, and hours
│   │   ├── HomePage.tsx            # Home page (hero, services, testimonials, FAQs, forms)
│   │   ├── Navbar.tsx              # Responsive header with mobile drawer & quick action buttons
│   │   └── ServicesPage.tsx        # Services page (interactive carousel, 2x2 testimonials, CTA)
│   ├── data.ts                     # Centralized content repository, images, and data schemas
│   ├── index.css                   # Global styles & Tailwind imports
│   ├── main.tsx                    # Application entry point
│   ├── types.ts                    # Global TypeScript interfaces and navigation enums
│   └── App.tsx                     # Top-level application layout, routing & modal controller
├── .gitignore                      # Git ignore patterns
├── index.html                      # HTML5 entry template with semantic meta tags & font preloads
├── metadata.json                   # Applet metadata & capability declarations
├── package.json                    # Project dependencies and npm scripts
├── tsconfig.json                   # TypeScript compiler configuration
└── vite.config.ts                  # Vite config with base path and Tailwind integration
```

---

## 4. Feature Breakdown & Page Layouts

### 4.1 Home Page
- **Hero Section**: Full-bleed nature photography background with high-contrast text, phone hotline (`113 334 433 221`), and "Book A Session" button.
- **About Us Banner**: Clickable floral landscape banner directing visitors seamlessly to the About page.
- **Why Choose Us Grid**: 4 feature cards (**Personalized Care**, **Experienced & Compassionate Therapist**, **Safe & Nurturing Environment**, **Focus on Women's Wellness**), followed by dual high-resolution photography and 4 statistical metrics (Home Delivery, Happy People, Tons Of Goods, Personalization Of Sessions).
- **Our Services Showcase**: Split view featuring a serene garden photo with accent badge and 5 core service offerings with direct linking to the Services page.
- **What Our Clients Say**: 3 dark testimonial cards styled with serif quotation text, circular avatar portraits, and author titles.
- **FAQ Accordion**: Dynamic collapsible questions and answers addressing therapy benefits, session expectations, and therapist credentials.
- **Stay Connected (Contact Us)**: Ambient photo backdrop card with business address, phone, email, social links, and an interactive contact form with field validation and confirmation message.
- **Subscribe Today**: Autumn forest path photo with a newsletter subscription form.

### 4.2 About Page
- **Curved Arch Hero**: Lakeside mountain background with an SVG arch cut-out transition.
- **Biography**: Comprehensive introduction to somatic psychotherapy philosophy and holistic wellness.
- **Mission, Vision & Values**: 3-column highlight cards with circular icon badges.
- **Serene Pier Feature**: High-definition landscape photo of a woman walking along a tranquil dock.
- **Split Expertise Section**: 10-year psychotherapy service spotlight.
- **Autoplaying Ambience Video**: Embedded YouTube nature meditation stream configured with continuous looping (`loop=1&playlist=sz6-F1wYFkw`), autoplay, sound mute/unmute control, and a refresh trigger.

### 4.3 Services Page
- **Arched Header**: Tranquil therapy banner with soft overlay and SVG divider.
- **Interactive Gallery Carousel**: 3-card desktop and mobile image carousel with previous/next controls, dot indicators, and scale transitions.
- **Our Services Grid**: 3 illustrated focus cards (**Mindfulness-Based Therapy**, **Trauma Recovery**, and **Emotional Transitions**) with direct booking inquiry triggers.
- **Client Testimonial Grid**: 2×2 layout with elevated circular avatars and green Monstera leaf background motif.
- **Take Action Now CTA**: High-impact gradient call-to-action banner with "BOOK A SESSION" button.

### 4.4 Global Interactive Modals
1. **Session Booking Modal**: Multi-step interactive appointment scheduler with service selection, therapist preference, date picker, time slot selector, notes, and instant confirmation.
2. **Elementor JSON Exporter**: In-browser export tool generating WordPress Elementor template JSON for Home, About, and Services pages with one-click copy and `.json` file download.

---

## 5. GitHub Pages Deployment Action

The automated deployment pipeline is configured in `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
      - master
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install Dependencies
        run: npm install

      - name: Typecheck / Lint
        run: npm run lint

      - name: Build Static Site with Vite
        run: npm run build

      - name: Setup GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload GitHub Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### How to Enable in GitHub:
1. Push this repository to GitHub.
2. On GitHub, navigate to **Settings** &gt; **Pages**.
3. Under **Build and deployment** &gt; **Source**, select **GitHub Actions**.
4. Push to `main` (or run manually via **Actions** &gt; **Deploy to GitHub Pages** &gt; **Run workflow**).
5. Your website will be live at `https://<username>.github.io/<repository-name>/`.

---

## 6. Local Development & Verification

### Prerequisites
- Node.js 18+ or 20+
- npm 9+

### Commands
```bash
# Install dependencies
npm install

# Start local development server on port 3000
npm run dev

# Run TypeScript typechecking and linting
npm run lint

# Build production static bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

### Verification Status
- **TypeScript Linter (`npm run lint`)**: Passed (0 errors, 0 warnings).
- **Vite Build (`npm run build`)**: Passed, produces optimized static assets in `/dist`.
- **Responsive Range**: Tested across mobile (320px–480px), tablet (768px), and desktop (1024px–1440px+).
