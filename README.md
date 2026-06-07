# BHUVAN.DEV — Portfolio

A production-grade React portfolio website built with a dark, tech-aesthetic design system.
Fully deployable to GitHub Pages as a static site.

---

## 🛠 Tech Stack

- **React 18** — component-based SPA (no router needed — uses state-based navigation)
- **Vanilla CSS-in-JS** — zero dependencies on Tailwind or CSS frameworks
- **JetBrains Mono** + **Inter** — matching the original Stitch design
- **Material Symbols** — icon system
- **gh-pages** — one-command GitHub Pages deployment

---

## 📁 Project Structure

```
bhuvan-portfolio/
├── public/
│   └── index.html          # Root HTML with font imports
├── src/
│   ├── index.js            # React entry point
│   ├── App.jsx             # Root app + global CSS + page routing
│   └── components/
│       ├── Navbar.jsx      # Fixed nav with mobile hamburger
│       ├── Home.jsx        # Hero + Stats + Core Expertise + Featured Experience
│       ├── Experience.jsx  # Timeline + Recommendations
│       ├── Skills.jsx      # Bento grid + Manifesto + Code callout
│       ├── Contact.jsx     # Terminal form + Social links
│       └── Footer.jsx      # Footer with links
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm start
```
Opens at `http://localhost:3000`

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Create a GitHub repository
Go to https://github.com/new and create a new repo (e.g. `bhuvan-portfolio`)

### Step 2 — Update homepage in package.json
Edit `package.json` and replace the `"homepage"` field:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/REPO_NAME"
```
Example:
```json
"homepage": "https://bhuvanagarwal.github.io/bhuvan-portfolio"
```

### Step 3 — Push code to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

### Step 4 — Deploy
```bash
npm run deploy
```
This runs `npm run build` then publishes the `build/` folder to the `gh-pages` branch automatically.

### Step 5 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose branch: `gh-pages`, folder: `/ (root)`
4. Click **Save**

Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME` within a few minutes.

---

## ✏️ Customization

### Update your info
- **Name / title**: `src/components/Home.jsx` → hero section
- **Email / location**: `src/components/Contact.jsx`
- **Social links**: `src/components/Contact.jsx` → `socialLinks` array + `src/components/Footer.jsx`
- **Resume link**: `src/components/Navbar.jsx` → Resume `<a>` href attribute

### Update experience
Edit the `experiences` array in `src/components/Experience.jsx`

### Update skills
Edit `backendSkills`, `cloudItems`, `architectureItems`, `databases` in `src/components/Skills.jsx`

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#a8e8ff` | Headings, accents, links |
| `--secondary` | `#7dffa2` | Success states, highlights |
| `--accent-warm` | `#FFD24D` | Code values, warnings |
| `--surface-deep` | `#0A0C12` | Page background |
| `--glass-stroke` | `rgba(255,255,255,0.12)` | Card borders |
| `--on-surface-variant` | `#bbc9cf` | Body text |

---

## 📜 License

MIT — use freely for your own portfolio.
