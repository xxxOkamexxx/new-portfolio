import React from 'react'

import { styles } from '@/styles'


const Projects = () => {
  return (
    <section
      id='projects' 
      className={`${styles.yPaddings}`}
    >
      <div className={`bg-neutral-100 relative flex md:flex-row flex-col gap-4 ${styles.xPaddings} py-4 justify-between`}>


        <div className='md:w-[40%] flex flex-col p-4 gap-4'>

          <h2 className={`${styles.pageTitle} ${styles.headline3}`}>
            Projects
          </h2>

          <div>All</div>
          <div>Web Design</div>
          <div>Application Design</div>
          <div>Frontend</div>

        </div>

      </div>
    </section>
  )
}

export default Projects