// Menu Items
export const MenuItems = [
  {
    id: 'home',
    name: 'Home',
  },
  {
    id: 'about',
    name: 'About',
  },
  {
    id: 'projects',
    name: 'Projects',
  },
  {
    id: 'contact',
    name: 'Contact',
  },
]

// Link Items
import { FaLinkedin, FaGithubSquare, FaDribbbleSquare, FaExternalLinkAlt } from "react-icons/fa";

export const LinkItems = [
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/chikage-takahashi-molander-542a71220/',
    icon: <FaLinkedin size={20} />
  },
  {
    id: 'github',
    url: 'https://github.com/xxxOkamexxx',
    icon: <FaGithubSquare size={20}  />
  },
  {
    id: 'dribbble',
    url: 'https://dribbble.com/ChikageMolander',
    icon: <FaDribbbleSquare size={20}  />
  },
]


// Projects Menu

export const projectsMenu = [
  {
    id: 'all',
    name: 'All',
    para: ''
  },
  {
    id: 'web-design',
    name: 'Web Design',
    para: 'web'
  },
  {
    id: 'app-design',
    name: 'Application Design',
    para: 'app'
  },
  {
    id: 'frontend',
    name: 'Frontend',
    para: 'frontend'
  },
]

// Projects List
export const projectsList = [
  {
    id: 1,
    title: 'Toront Cupcake',
    type: 'web',
    typename: 'Web Design',
    tools: ['Figma'],
    thumbnail: '/webdesign/toront-cupcake-thumbnail.png',
    img: '/webdesign/toront-cupcake.jpg',
    description: 'This is a task to redesign the landing page of Toront Cupcake&apos;s website. The current landing page is not only difficult to read but also lacks a clear main heading and call-to-action (CTA). Additionally, important sections such as product listings are missing from the homepage, making it ineffective. The goal is to focus on messaging, visualization, and effective CTAs to improve the overall user experience.',
    linkes:[
      { name: 'Dribble', 
        url: 'https://dribbble.com/shots/23750982-Webdesign-TorontCupcake', 
        icon: <FaDribbbleSquare size={16}/> 
      }
    ]
  },
  {
    id: 2,
    title: 'TheMovie DB',
    type: 'frontend',
    typename: 'Frontend',
    tools: ['Next.js 14', 'Tailwind', 'TheMovieDB-api'],
    thumbnail: '/frontend/TMDB-thumbnail.png',
    img: '/frontend/TMDB.jpg',
    description: 'I recreated the TMDB app using Next.js 14 and Tailwind CSS, building upon my previous experience with React.js. In addition, I implemented a feature that allows users to preview movie trailers. The main goal of this project is to enhance my skills in Next.js and Tailwind.',
    linkes:[
      { name: 'GitHub', 
        url: 'https://github.com/xxxOkamexxx/movie-app-next14/tree/main', 
        icon: <FaGithubSquare size={16}/> 
      },
      { name: 'Demo', 
        url: 'https://movie-app-next14.vercel.app/discover/now_playing', 
        icon: <FaExternalLinkAlt size={16}/> 
      }
    ]
  },
  
]