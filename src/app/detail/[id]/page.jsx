/* eslint-disable @next/next/no-img-element */
'use client'

import { useParams, useRouter } from 'next/navigation';

import { styles } from '@/styles';
import { motion } from 'framer-motion';

import { projectsList } from '@/constans'
import { BackToHome, ProjectNav } from '@/components';


const Detailpage = () => {

  const params = useParams();
  const id = parseInt(params.id)

  
  return (
    <main>
      <ProjectNav />
     
      <div className={`${styles.xPaddings} pt-8`}>  

        <BackToHome />
           
        <div>
          {projectsList
          .filter(item => item.id === id)
          .map(work => (
            <div
              key={work.id} 
            >

              {/* Link buttons */}
              <div className='pb-4' >
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
              
              {/* work detail image */}
              <div>
                <img src={work.img} alt="project detail" />
              </div>

            </div>
          ))}
        </div>
      </div>
      
    </main>
  )
}

export default Detailpage