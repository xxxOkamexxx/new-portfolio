'use client'

import Link from "next/link"

import { styles } from "@/styles"
import '../styles/nav.css'

import { projectsMenu } from "@/constans"


const ProjectNav = () => {

  return (  
    <nav 
      className={`${styles.innerWidth}`}
    >

      <div className={`${styles.xPaddings} ${styles.navPadding} flex justify-between`}>


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