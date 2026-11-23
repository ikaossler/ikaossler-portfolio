export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  repoUrl?: string
  liveUrl?: string
  figmaUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Training Log',
    description:
      'A training log where you can add, view, edit and delete training types, and filter them by status. Built with React, TypeScript and the Shelf API.',
    image: '/images/training-log.png',
    tags: ['React', 'TypeScript', 'API'],
    repoUrl: 'https://github.com/ikaossler/training-log',
    liveUrl: 'https://training-log-pearl-alpha.vercel.app',
  },
  {
    id: 2,
    title: 'Book API',
    description:
      'Group project: a book site with a REST API and admin panel where visitors can browse books and write reviews. I built the reviews feature.',
    image: '/images/book-api.png',
    tags: ['TypeScript', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/ikaossler/api-assignment-2',
    liveUrl: 'https://api-assignment-2-eosin.vercel.app/',
  },
  {
    id: 3,
    title: 'Juniper – UX Case Study',
    description:
      'A group UX project where we designed a fictional gin brand. We covered user research, personas, wireframes, testing and a Figma prototype.',
    image: '/images/juniper-ux.png',
    tags: ['Figma', 'UX Design'],
    figmaUrl:
      'https://www.figma.com/design/ARf1L8ZNGDvzOZd9qLrK65/Vector-Graphics---Juniper--Copy-',
  },
  {
    id: 4,
    title: 'Portfolio',
    description: 'My personal portfolio built with React and TypeScript',
    image: '/images/portfolio.png',
    tags: ['React', 'TypeScript', 'CSS'],
    repoUrl: 'https://github.com/ikaossler/ikaossler-portfolio',
  },
  {
    id: 5,
    title: 'ERROR 404',
    description:
      'Group project: a digital escape room where the player escapes four rooms based on common internet annoyances, like CAPTCHAs and pop-ups.',
    image: '/images/error-404.png',
    tags: ['TypeScript', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/ikaossler/js-intro-grupparbete',
    liveUrl:
      'https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-natural-stunner-squad/',
  },
  {
    id: 6,
    title: 'Good Morning Club',
    description:
      'A responsive café website built from a provided design, using CSS Grid, Flexbox and media queries. Includes an overlay menu and animated form inputs.',
    image: '/images/good-morning-club.png',
    tags: ['HTML', 'CSS'],
    repoUrl: 'https://github.com/ikaossler/html-css-inl-2',
    liveUrl: 'https://ikaossler.github.io/html-css-inl-2/',
  },
]