'use client'

import { useParams } from 'next/navigation';
import Link from "next/link"

import { styles } from "@/styles"
import '../styles/nav.css'
import { MdOutlineArrowCircleLeft } from "react-icons/md";

import { projectsMenu } from "@/constans"


const ProjectNav = () => {
  const params = useParams();
  const id = params.id

  return (  
    <nav 
      className={`${styles.innerWidth}`}
    >


      <div className={`${styles.xPaddings} ${styles.navPadding} flex justify-between`}>

        <Link
          href={'/'}
          className="text-[16px] text-neutralDark flex flex-row items-center navMenuItem gap-2"
        >
          <span>
            <MdOutlineArrowCircleLeft />
          </span>
          <span>
            Home
          </span>
        </Link>

        <div className={`${styles.flexEnd} gap-6`}>
          {projectsMenu.map(item => (
            <Link 
              key={item.id} 
              href={item.para === '' ? `/projects` : `/projects/${item.para}`}
              className={`navMenuItem text-[16px]`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      
    </nav> 
  )
}

export default ProjectNav