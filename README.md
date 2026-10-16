# ✨ Ika Ossler – Portfolio

A dark, modern one-page portfolio built with React and TypeScript. It presents who I am, my skills and a selection of my projects, and it is fully responsive from 360px up to desktop width. The design is my attempt at a liquid glass look 🫧, using blur, light edges and soft colored light circles in the background.

🌐 **Live site:** https://ikaossler-portfolio.vercel.app/
🎨 **Figma sketch:** https://www.figma.com/design/PNp6Fhgv8Fp4T8AtjZkSfr/Portfolio

## 🚀 Features

- 📄 One-page layout with four sections: Home, About, Projects and Contact
- 🧭 Anchor navigation with a sticky glass navbar and a hamburger menu on mobile
- 🗂️ Six project cards, each with image, title, short description, tech tags and links
- 🔎 Multi-select project filter: choose several tech tags at once and clear the filter with one button
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
- The "All" filter button is replaced by "Clear filter": when no tag is selected, all projects are shown.
- Small adjustments to sizes, spacing and the background glow.

## 🔮 Next steps

- Extend the liquid glass look to more parts of the page. So far it is used on the navbar, the filter buttons, the contact card and the form, and I want to apply it consistently to every section, including the project cards.
- Collect the shared glass styles in one place (CSS variables or a reusable class).
- Replace the fictional projects with real ones as I build more.

## Reflection

**Component architecture**
I split the portfolio into one component per section: Navbar, Hero, About, Projects, Contact and Footer. Each has its own CSS Module, which keeps the styles scoped and makes each part easier to style and change. The projects section is split further: `Projects` decides which projects to show, `ProjectList` loops through them with `.map()`, and `ProjectCard` displays a single project. Since the card is reusable, adding a project only means adding an object to `projects.ts`. Data flows down through props.

**State decisions**
I kept state as close to where it is used as possible. The filter state (`selectedTags`) lives in `Projects`, the nearest common parent of the filter buttons and the list, since both need it. It is an array, and tags are added or removed by creating a new array with `[...selectedTags, tag]` and `.filter()`. An empty array shows all projects, and a project matches if it has any of the selected tags. The contact form keeps its values in one state object, with separate state for error messages and a success flag, all inside `Contact`. The menu's open/closed state lives in `Navbar`.

**What I would do differently**
I would collect the shared liquid glass styles in one place, for example as CSS variables or a reusable class, instead of repeating them in several CSS Modules. I would also move the contact form into its own component and add the layout animation for the project filter, which I did not have time for.

**AI tools**
I used Claude throughout the project, both as a study aid and as a coding helper. It explained concepts like props and state, helped me debug errors, and wrote parts of the code and CSS, for example the contact form and the liquid glass styling, which I then went through, tested and adjusted. I built the multi-select filter step by step myself with guidance. The design is my own, made in Figma, and the text on the site is mine, with some help on phrasing in English.