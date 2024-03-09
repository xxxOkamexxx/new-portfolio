'use client'

import React from 'react'
import Link from 'next/link'

import { styles } from '@/styles'
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';
import { projectsMenu } from '@/constans';



const Projects = () => {
  
  return (
    <section
      id='projects' 
      className={`${styles.yPaddings}`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} 
        className={`bg-neutral-100 relative ${styles.xPaddings} py-4 justify-between`}
      >


          <div className='w-[100%] flex flex-col p-4 gap-4'>

            <h2 className={`${styles.pageTitle} ${styles.headline3}`}>
              Projects
            </h2>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
              {projectsMenu.map((item, index) => 
                <motion.div
                  key={item.id}
                  variants={fadeIn('up', 'tween', 0.2 + index/5, 1)}
                >
                  <Link                    
                    href={`/projects/${item.para}`}                   
                    className={`${styles.projectCard} ${styles.headline4} ${styles.flexCenter} text-neutralDark `}
                  >             
                      {item.name}
                                  
                  </Link>
                </motion.div>
              )}

            </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Projects