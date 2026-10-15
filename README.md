# ✨ Ika Ossler – Portfolio

A dark, modern one-page portfolio built with React and TypeScript. It presents who I am, my skills and a selection of my projects, and it is fully responsive from 360px up to desktop width. The design is my attempt at a liquid glass look 🫧, using blur, light edges and soft colored light circles in the background.

🌐 **Live site:** https://ikaossler-portfolio.vercel.app/
🎨 **Figma sketch:** https://www.figma.com/design/PNp6Fhgv8Fp4T8AtjZkSfr/Portfolio

## 🚀 Features

- 📄 One-page layout with four sections: Home, About, Projects and Contact
- 🧭 Anchor navigation with a sticky glass navbar and a hamburger menu on mobile
- 🗂️ Six project cards, each with image, title, short description, tech tags and links
- 🔎 Project filter: choose one tech tag at a time, or show all projects
- 📱 Responsive design from 360px to desktop (1 column of cards on mobile, 3 on desktop)
- 🖱️ Hover transitions on buttons, links and cards
- 🫧 An attempt at a liquid glass look, with blurred glass surfaces and soft colored light circles in the background

## 🛠️ Tech stack

- ⚛️ React
- 🟦 TypeScript
- ⚡ Vite
- 🎨 CSS Modules
- 🖌️ Figma (sketches for mobile and desktop)
- 🔧 Git and GitHub
- ▲ Deployed on Vercel

## 🧱 Project structure

```text
src/
  components/   Navbar, Hero, About, Projects, ProjectList, ProjectCard, Contact, Footer
  data/         projects.ts (all project data, typed with a Project type)
  App.tsx       Puts the sections together
  index.css     Global styles and CSS variables
public/
  images/       Project images and profile picture
```

## 💼 Projects shown on the site

| Project | Type |
| --- | --- |
| 🌸 Portfolio | Personal project (this site) |
| 📚 Book API | Group project (3 students), REST API with admin panel |
| 🚪 ERROR 404 | Group project (4 students), digital escape room |
| 🍸 Juniper – UX Case Study | Group UX project, fictional gin brand, shown as a Figma prototype |
| ☁️ Weather App | Fictional project |
| 🎵 Spotify Web Player | Fictional project |

The fictional projects are concept projects and will be replaced with real ones as I build more during my education.

## 💻 Run locally

```bash
git clone https://github.com/ikaossler/ikaossler-portfolio.git
cd ikaossler-portfolio
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173).

## 📝 Changes compared to the sketch

- The navbar link "Hem" is called "Home", so the whole site is in English.
- The navbar link highlight appears on hover instead of on the active section.
- The heading "Chosen projects" is now "Selected projects".
- Some projects are fictional concept projects, shown with mockup images.
- The contact form and the "Clear filter" button from the sketch are not included yet.
- Small adjustments to sizes, spacing and the background glow.