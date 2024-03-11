/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

import { BackToHome, ProjectNav } from '@/components';
import { projectsList } from '@/constans'

import { styles } from '@/styles'
import { motion } from 'framer-motion';


const AllProject = () => {
  const router = useRouter()

  return (
    <main>
      
      <ProjectNav />

        <div className={`${styles.xPaddings} pt-8`}>

          <BackToHome />

          {/* Page title */}
          <h3 className={`${styles.pageTitle} ${styles.headline3}`}>
            All Project
          </h3>

        </div>


      {/* Projects list */}
      <div className={`grid grid-cols-1`}>
        
        <div className={`flex flex-col gap-4`}>
          {projectsList && projectsList.map(item => 
            <div
              key={item.id}
              className={`flex flex-col md:flex-row md:even:flex-row-reverse gap-6 py-4 ${styles.xPaddings}  even:bg-neutral-100`}             
            >
              {/* Thumbnail */}
              <div 
                className='w-[100%] md:w-[50%] hover:cursor-pointer'
                onClick={() => router.push(`/detail/${item.id}`)}
              >
                <img src={item.thumbnail} alt="project image" className='shadow-md'/>
              </div>

              {/* Description */}
              <div className='w-[100%] md:w-[50%]'>
                <h4 className={`${styles.headline4}`}>
                  {item.title}
                </h4>

                  {item.tools && item.tools.map((tool, index) =>
                    <span 
                      key={index}
                      className={`my-2 ${styles.textSmall} text-neutralDark`}
                    >
                      {tool}{index !== item.tools.length - 1 ? ' / ' : ''}
                    </span>
                  )}

                <p className={`${styles.pText} pb-2`}>
                  {item.description}
                </p>

                
                
                <div className='p-2 flex flex-row gap-3'>
                  {/* link to type of project */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}  
                    className={`projecttype ${styles.textSmall} hover:bg-focusColor hover:text-white`}
                    onClick={() => router.push(`/projects/${item.type}`)}
                  >
                    {item.typename}
                  </motion.button>

                  {/* other links */}
                  {item.linkes && item.linkes.map((link, index) => 
                    <motion.button
                      key={index}
                      onClick={() => router.push(`${link.url}`)}
                      className='text-neutralDark rounded-full bg-white p-2 hover:bg-focusColor/100 hover:text-white shadow-md'
                    >
                      {link.icon}
                    </motion.button>
                  )}  
                </div>  
              </div>

            </div>
          )}
        </div>
      
      </div>

    </main>
  )
}

export default AllProject