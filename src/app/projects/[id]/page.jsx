/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';

import { projectsList } from '@/constans'
import { ProjectNav } from '@/components';

import { styles } from '@/styles'
import { motion } from 'framer-motion';


const ProjectsByType = () => {
  const [title, setTitle] = useState('')

  const router = useRouter()
  const params = useParams();
  const id = params.id

  useEffect(() => {
    
    switch (id) {
      case "web":
        setTitle("Web Design");
        break;
      case "app":
        setTitle("Application Design");
        break;
      case "frontend":
        setTitle("FrontEnd");
        break;
      default:
        setTitle("");
        break;
    }
  },[id])
  

  return (
    <main>
      <ProjectNav />

      {/* Page title */}
      <h3 className={`${styles.pageTitle} ${styles.headline3} ${styles.xPaddings} ${styles.yPaddings}`}>
        {title}
      </h3>
    
      
      {/* Projects list */}
      <div className={`grid grid-cols-1`}>
        
        <div className={`flex flex-col gap-4`}>
          {projectsList
          .filter(item => item.type === id)
          .map(work => (
            <div
              key={work.id}
              className={`flex flex-col md:flex-row md:even:flex-row-reverse gap-6 py-4 ${styles.xPaddings}  even:bg-neutral-100`}             
            >
              {/* Thumbnail */}
              <div 
                className='w-[100%] md:w-[50%] hover:cursor-pointer'
                onClick={() => router.push(`/detail/${work.id}`)}
              >
                <img src={work.thumbnail} alt="project image" className='shadow-md'/>
              </div>

              {/* Description */}
              <div className='w-[100%] md:w-[50%]'>
                <h4 className={`${styles.headline4}`}>
                  {work.title}
                </h4>

                  {work.tools && work.tools.map((tool, index) =>
                    <span 
                      key={index}
                      className={`my-2 ${styles.textSmall} text-neutralDark`}
                    >
                      {tool}{index !== work.tools.length - 1 ? ' / ' : ''}
                    </span>
                  )}

                <p className={`${styles.pText} pb-2`}>
                  {work.description}
                </p>

                     
                <div className='p-2 flex flex-row gap-3'>
                  
                  {/* other links */}
                  {work.linkes && work.linkes.map((link, index) => 
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
          ))}

        </div>  
      </div>

    </main>
  )
}

export default ProjectsByType