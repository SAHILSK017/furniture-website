# Amara Living

A premium luxury brand website for **Amara Living** — specializing in granite, tiles, and furniture. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** + **Vite 6**
- **Tailwind CSS 3**
- **Framer Motion 11**
- Google Fonts: Playfair Display, Inter, Poppins

## Folder Structure

```
amara-living/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed navigation with mobile menu
│   │   ├── Hero.jsx            # Full-screen parallax hero
│   │   ├── SectionHeader.jsx   # Reusable section heading
│   │   ├── FeaturedSpaces.jsx  # 3 luxury space cards
│   │   ├── CategoryShowcase.jsx # Granite, Furniture, Collections
│   │   ├── SpaceCalculator.jsx # Live area & cost calculator
│   │   ├── Testimonials.jsx    # Client testimonials
│   │   └── Footer.jsx          # Contact & social links
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)

### Steps

1. **Navigate to the project directory**

   ```bash
   cd "Amara Living"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Visit the URL shown in the terminal (typically `http://localhost:5173`).

## Available Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start development server       |
| `npm run build`   | Build for production           |
| `npm run preview` | Preview production build locally |

## Design System

| Token        | Value     | Usage                    |
| ------------ | --------- | ------------------------ |
| Background   | `#F8F5F2` | Page background (cream)  |
| Text         | `#111827` | Primary text (charcoal)  |
| Accent Gold  | `#D4AF37` | CTAs, labels, highlights |
| Dark Sections| `#0F172A` | Navy sections, hero overlay |

## Deployment on Vercel

### Option 1: Vercel CLI

1. Install the Vercel CLI globally:

   ```bash
   npm install -g vercel
   ```

2. Build the project locally (optional, to verify):

   ```bash
   npm run build
   ```

3. Deploy from the project root:

   ```bash
   vercel
   ```

4. Follow the prompts. Vercel auto-detects Vite and configures:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

5. For production deployment:

   ```bash
   vercel --prod
   ```

### Option 2: GitHub Integration

1. Push the project to a GitHub repository.

2. Go to [vercel.com](https://vercel.com) and sign in.

3. Click **Add New Project** and import your repository.

4. Vercel will auto-detect the Vite framework. Confirm these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

5. Click **Deploy**. Your site will be live at a `*.vercel.app` URL.

### Optional: vercel.json

No custom configuration is required. Vite works out of the box with Vercel's default settings.

## Features

- Full-screen hero with parallax scrolling
- Scroll-triggered reveal animations (Framer Motion)
- Hover zoom on image cards
- Glassmorphism overlays on category cards
- Live space calculator (Area = Length × Width, Cost = Area × $250)
- Fully responsive layout (mobile, tablet, desktop)
- Semantic HTML and accessible navigation

## Images

All images are sourced from [Unsplash](https://unsplash.com) (royalty-free). Replace URLs in component files with your own assets for production.

## License

Private project — Amara Living.
