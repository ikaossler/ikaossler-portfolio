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
    title: 'Portfolio',
    description: 'My personal portfolio built with React and TypeScript',
    image: '/images/portfolio.png',
    tags: ['React', 'TypeScript', 'CSS'],
    repoUrl: 'https://github.com/ikaossler/ikaossler-portfolio',
  },
  {
    id: 2,
    title: 'Book API',
    description: 'Group project (3 students): a book site with a REST API and admin panel where visitors can browse books and write reviews. I built the reviews feature.',
    image: '/images/book-api.png',
    tags: ['TypeScript', 'Node.js', 'Express', 'MongoDB'],
    repoUrl: 'https://github.com/ikaossler/api-assignment-2',
    liveUrl: 'https://api-assignment-2-eosin.vercel.app/',
  },
  {
    id: 3,
    title: 'ERROR 404',
    description: 'Group project (4 students): a digital escape room where the player escapes four rooms based on common internet annoyances, like CAPTCHAs and pop-ups.',
    image: '/images/error-404.png',
    tags: ['TypeScript', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/ikaossler/js-intro-grupparbete',
    liveUrl: 'https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-natural-stunner-squad/',
  },
  {
    id: 4,
    title: 'Juniper – UX Case Study',
    description: 'A group UX project where we redesigned a poorly working webshop for a fictional gin brand. We covered user research, personas, wireframes, testing and a Figma prototype.',
    image: '/images/juniper-ux.png',
    tags: ['Figma', 'UX Design'],
    figmaUrl: 'https://www.figma.com/design/ARf1L8ZNGDvzOZd9qLrK65/Vector-Graphics---Juniper--Copy-',
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'Shows weather in the chosen city',
    image: '/images/weather.png',
    tags: ['React', 'API'],
    repoUrl: 'https://github.com/ikaossler',
  },
  {
    id: 6,
    title: 'Spotify Web Player',
    description: 'A music player with playlists, search and a now-playing view.',
    image: '/images/spotify.png',
    tags: ['React', 'CSS'],
    repoUrl: 'https://github.com/ikaossler',
  },
]