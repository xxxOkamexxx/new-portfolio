'use client'

import React,{ useState } from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

import { FaImage } from "react-icons/fa";

import { styles } from '@/styles'
import Skills from '@/components/CV/Skills';
import Education from '@/components/CV/Education';
import Experience from '@/components/CV/Experience';

const About = () => {
  const [item, setItem] = useState('skills')
 

  return (
    <section 
      id='about' 
      className={`${styles.yPaddings}`}
    >

      <div className={`bg-subColorOrange relative flex md:flex-row flex-col gap-4 ${styles.xPaddings} py-4 justify-between`}>

        {/* General Info */}
        <div className='bg-white w-[100%] md:w-[30%] flex flex-col p-4 gap-4'>

          <h2 className='text-neutralDark text-lg font-semibold'>
            About
          </h2>

          <div className='flex justify-center flex-col gap-2'>
            <div className='w-[100%] h-[350px] bg-gray-200 flex justify-center items-center'>
              <FaImage size={36} />
            </div>

            <div className='text-sm text-left'>
              As a front-end developer, I combine my solid experience in design with my technical knowledge. Previously, I've worked as an architectural designer and in fashion/textile design, which has shaped my understanding of aesthetics and usability. My primary goal is to create web solutions that are not only user-friendly but also aesthetically appealing. By focusing on front-end development, I can leverage my broad design expertise to craft interfaces and experiences that captivate and engage users. Merging technical skills with an eye for design is at the core of my work, and I always strive to deliver web solutions that not only function seamlessly but also enrich users' online experience.
            </div>
          </div>
        </div>

        {/* CV */}
        <div className='bg-white w-[100%] md:w-[70%] flex flex-col justify-between'>
          <div>
            <div className='aboutMenu grid grid-cols-3 text-center py-4'>
              <div onClick={() => setItem('skills')}>Skills</div>
              <div onClick={() => setItem('experience')}>Experience</div>
              <div onClick={() => setItem('education')}>Education</div>
            </div>

            {/* CV display */}
            <div className='p-4'>
              {
                item === 'skills' && <Skills />
              }
              {
                item === 'experience' && <Experience />
              }
              {
                item === 'education' && <Education />
              }            
            </div>

          </div>

          {/* Button */}
          <div className='p-4'>
            <div className={`${styles.ctaBtn} bg-mainColorDark text-neutralLight`}>
              <span>Download CV</span>
              <span><MdOutlineFileDownload /></span>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About