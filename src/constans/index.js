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
import { FaLinkedin, FaGithubSquare, FaDribbbleSquare } from "react-icons/fa";

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

export const projectsList = [
  {
    id: 1,
    title: 'Tront Cupcake',
    type: 'web',
    tools: ['Figma'],
    thumbnail: '/webdesign/tront-cupcake-thumbnail.png',
    img: '/webdesign/tront-cupcake.png',
    description: 'This is a task to redesign the landing page of Tront Cupcake&apos;s website. The current landing page is not only difficult to read but also lacks a clear main heading and call-to-action (CTA). Additionally, important sections such as product listings are missing from the homepage, making it ineffective. The goal is to focus on messaging, visualization, and effective CTAs to improve the overall user experience.',
    linkes:[
      { name: 'Dribble', 
        url: 'https://dribbble.com/ChikageMolander', 
        icon: <FaDribbbleSquare size={16}/> 
      }
    ]
  },
  {
    id: 2,
    title: 'Frontend 01',
    type: 'frontend',
    img: 'ooo.png',
  },
  {
    id: 3,
    title: 'App Design 01',
    type: 'app',
    img: 'ooo.png',
  },
  {
    id: 4,
    title: 'Frontend 02',
    type: 'frontend',
    img: 'ooo.png',
  },
]