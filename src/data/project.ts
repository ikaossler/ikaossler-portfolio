export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  repoUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio',
        description: 'My personal portfolio built with React and TypeScript',
        image: '/images/portfolio.png',
        tags: ['React', 'TypeScript', 'CSS'],
        repoUrl: 'https://github.com/ikaossler/ikaossler-portfolio'
    },

    {
        id: 2,
        title: 'Weather App',
        description: 'Shows weather in the chosen city',
        image: '/images/weather.png',
        tags: ['React', 'API'],
        liveUrl: 'https://github.com/ikaossler'
    },

    {
  id: 3,
  title: 'ERROR 404',
  description: 'Group project (4 students): a digital escape room where the player escapes four rooms based on common internet annoyances, like CAPTCHAs and pop-ups.',
  image: '/images/error-404.png',
  tags: ['TypeScript', 'HTML', 'CSS'],
  repoUrl: 'https://github.com/ikaossler/js-intro-grupparbete',
},

{
  id: 4,
  title: 'Spotify Web Player',
  description: 'A music player with playlists, search and a now-playing view.',
  image: '/images/spotify.png',
  tags: ['React', 'CSS'],
  repoUrl: 'https://github.com/ikaossler',
},
{
  id: 5,
  title: 'Apple Product Page',
  description: 'A clean product landing page with smooth scroll sections.',
  image: '/images/apple.png',
  tags: ['HTML', 'CSS', 'JavaScript'],
  repoUrl: 'https://github.com/ikaossler',
},
{
  id: 6,
  title: 'Tesla Configurator',
  description: 'Choose a car model, color and wheels and see the price update.',
  image: '/images/tesla.png',
  tags: ['React', 'TypeScript'],
  repoUrl: 'https://github.com/ikaossler',
}
]