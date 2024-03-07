import React from 'react'
import Link from 'next/link'

import { styles } from '@/styles'


const Projects = () => {
  const projects = [
    {
      id: 'all',
      name: 'All',
    },
    {
      id: 'web-design',
      name: 'Web Design',
    },
    {
      id: 'app-design',
      name: 'Application Design',
    },
    {
      id: 'frontend',
      name: 'Frontend',
    },
  ]

  return (
    <section
      id='projects' 
      className={`${styles.yPaddings}`}
    >
      <div className={`bg-neutral-100 relative ${styles.xPaddings} py-4 justify-between`}>


          <div className='w-[100%] flex flex-col p-4 gap-4'>

            <h2 className={`${styles.pageTitle} ${styles.headline3}`}>
              Projects
            </h2>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
            {projects.map(item => 
              <Link
                href={'/#'}
                key={item.id}
                className={`${styles.projectCard} ${styles.headline4} ${styles.flexCenter} text-neutralDark `}
              >
                <div>
                  {item.name}
                </div>
                
              </Link>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects