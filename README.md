# ✨ Ika Ossler – Portfolio

![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646cff?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/LIA-Apr%E2%80%93Oct%202027-c8265f?style=for-the-badge)

A modern, one-page portfolio built with React and TypeScript. It presents who I am, my skills and a selection of my projects, and it is fully responsive from 360px up to desktop width. The design is light and sharp, with a black-and-white portrait, big type and one strong pink accent colour.

🌐 **Live site:** https://ikaossler-portfolio.vercel.app/
🎨 **Original Figma sketch:** https://www.figma.com/design/PNp6Fhgv8Fp4T8AtjZkSfr/Portfolio (the first, dark version of the design)

## 🚀 Features

- 📄 One-page layout with four sections: Home, About, Projects and Contact
- 🧭 Anchor navigation with a sticky navbar that gets a light, blurred background when you scroll, and a hamburger menu on mobile
- 🖤 A hero with large link words (Work, About, Contact), a black-and-white portrait with a pink offset block, and a status line about my internship (LIA) search
- 🗂️ Six project cards, each with image, number, title, short description, tech tags and links
- 🔎 Multi-select project filter: choose several tech tags at once and clear the filter with one button
- ✨ Animated project filter: cards fade out and glide into their new places (Motion, AnimatePresence and layout animations)
- 📱 Responsive design from 360px to desktop
- 🖱️ Hover transitions on navigation, links and project images
- ⚡ Optimised profile photo (about 94 KB instead of 2 MB) so the page loads fast on mobile

## 🎨 Design

After handing in the first version, I redesigned the whole site. The first version had a dark "liquid glass" look 🫧. I wanted something sharper and more confident, so I changed the entire visual direction:

- 🎨 **Colours:** a light neutral background (`#efeeea`), near-black text (`#111111`) and a single pink accent (`#c8265f`) used for key words, active states, the status dot and the portrait block.
- 🔤 **Typography:** Plus Jakarta Sans in heavy weights with tight letter-spacing, so headings and the big hero words stand out.
- ◼️ **Style:** flat and sharp. No glass, no gradients, no rounded photo corners. Hairlines and plain text links instead of heavy buttons.
- 💅 **Details:** coloured words in the headings ("who I am", "in touch"), text-style filters with an underline for the active one, and flat project images that zoom slightly on hover.

## 🛠️ Tech stack

- ⚛️ React
- 🟦 TypeScript
- ⚡ Vite
- 🎨 CSS Modules and CSS variables
- 🎞️ Motion (animations)
- 🖌️ Figma (sketches for the first version)
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
| 🏋️ Training Log | Individual project, React, TypeScript and the Shelf API |
| 📚 Book API | Group project (3 students), REST API with admin panel |
| 🍸 Juniper – UX Case Study | Group UX project, fictional gin brand, shown as a Figma prototype |
| 🌸 Portfolio | Personal project (this site) |
| 🚪 ERROR 404 | Group project (4 students), digital escape room |
| ☕ Good Morning Club | Individual project, responsive HTML and CSS website |

## 💻 Run locally

```bash
git clone https://github.com/ikaossler/ikaossler-portfolio.git
cd ikaossler-portfolio
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173).

## 📝 Changes compared to the first version

- 🎨 The whole visual design is new (see Design above).
- ✉️ The contact form is removed. A form that is not connected to anything does not help a visitor, so the section now shows my email and links to GitHub and LinkedIn instead.
- 🖤 The hero has a new layout with large link words, a portrait with a pink block and a line about my internship search (April to October 2027).
- 🗂️ The project cards are flat and numbered, and the filter buttons are plain text links.
- 🔁 The fictional concept projects (Weather App and Spotify Web Player) are replaced with real projects: Training Log and Good Morning Club.
- 📊 The projects are ordered with the most technical ones first.
- ⚡ The profile photo is compressed and the navbar is simpler, with links that are always visible on desktop.

## 🔮 Next steps

- 🏋️ Give Training Log the same visual style as this portfolio, so my best technical project looks as good as the site that presents it.
- 🧹 Tidy the CSS: some global element selectors in the navbar styles can leak into other components, and I want to move them into classes.
- ♿ Do an accessibility pass: check colour contrast for the pink text, add clear keyboard focus styles and review alt texts.
- 🖼️ Replace the project screenshots with smaller, optimised images so the project section loads faster.
- ➕ Add new work from my internship (LIA) and later projects, and keep the strongest ones first.

## 💭 Reflection

**🧩 Component architecture**
I split the portfolio into one component per section: Navbar, Hero, About, Projects, Contact and Footer. Each has its own CSS Module, which keeps the styles scoped and makes each part easier to style and change. The projects section is split further: `Projects` decides which projects to show, `ProjectList` loops through them with `.map()`, and `ProjectCard` displays a single project. Since the card is reusable, adding a project only means adding an object to `projects.ts`. Data flows down through props.

**🧠 State decisions**
I kept state as close to where it is used as possible. The filter state (`selectedTags`) lives in `Projects`, the nearest common parent of the filter buttons and the list, since both need it. It is an array, and tags are added or removed by creating a new array with `[...selectedTags, tag]` and `.filter()`. An empty array shows all projects, and a project matches if it has any of the selected tags. The menu's open/closed state and the scroll state that changes the navbar background live in `Navbar`.

**🔄 The redesign**
Because the whole look lives in CSS Modules and a few CSS variables (colours, background, text), I could change the entire design without touching the filter logic or the data. That showed me why separating logic, data and styling is useful. I also learned to look at the site on different screen sizes early. The hero looked fine on my laptop but not on a large external screen, which led me to rework how the photo and text are placed.

**🔧 What I would do differently**
I would decide on the design tokens (colours, spacing, type sizes) as CSS variables from the start, and avoid global element selectors in CSS Modules. I would also test on a large screen and on mobile earlier, and optimise images from the beginning instead of at the end.

**🤖 AI tools**
I used Claude throughout the project, both as a study aid and as a coding helper. In the first version it explained concepts like props and state, helped me debug errors and wrote parts of the code and CSS, which I then went through, tested and adjusted. In the redesign I used it as a brainstorming partner: it sketched several options for the hero, the projects and the contact section, and I chose, rejected and adjusted until it felt like mine. The direction, the choices and the text on the site are mine, with some help on phrasing in English.