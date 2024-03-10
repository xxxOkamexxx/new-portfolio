'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { styles } from '@/styles'
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/utils/motion';
import { projectsMenu } from '@/constans';



const Projects = () => {
  const router = useRouter()
  
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

            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 '>
              {projectsMenu.map((item, index) => 
                <motion.div
                  key={item.id}
                  variants={fadeIn('up', 'tween', 0.2 + index/5, 1)}
                  onClick={() => router.push(`/projects/${item.para}`)}
                  className='cursor-pointer'
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}                        
                    className={`${styles.projectCard} ${styles.headline4} ${styles.flexCenter} text-neutralDark hover:bg-focusColor hover:text-white`}
                  >             
                      {item.name}
                                  
                  </motion.div>
                </motion.div>
              )}

            </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Projects