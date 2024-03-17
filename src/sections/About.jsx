/* eslint-disable @next/next/no-img-element */
'use client'

import React,{ useState } from 'react'

import { MdOutlineFileDownload } from "react-icons/md";
import { FaImage } from "react-icons/fa";

import { styles } from '@/styles'
import '../styles/about.css'
import { motion } from 'framer-motion';
import { staggerContainer, textVariant, slideIn } from '@/utils/motion';

import { Education, Skills, Experience } from '@/components';
import { getPdfFile } from '@/utils/getPdfFile';



const About = () => {
  const [item, setItem] = useState('skills')

  const cvMenuItems = [
    {
      id: 'skills',
      title: 'Skills',
    },
    {
      id: 'experience',
      title: 'Experience',
    },
    {
      id: 'education',
      title: 'Education',
    },
  ]
 

  return (
    <section 
      id='about' 
      className={`${styles.yPaddings}`}
    >

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} 
        className={`relative flex lg:flex-row flex-col gap-4 ${styles.xPaddings} py-8 justify-between`}
      >

        {/* General Info */}
        <motion.div 
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='lg:w-[40%] flex flex-col px-0 py-4 md:p-8 gap-4'
        >
          <div className='flex flex-row gap-2'>
            <div className='w-2 bg-mainColorOrange' />

            <h3 className={`${styles.pageTitle} ${styles.headline3}`}>
              About Me
            </h3>
          </div>

          <div className='flex justify-center flex-col gap-2'>
            <div className='w-[100%] h-[300px] flex justify-center items-center'>
              <img 
                src="/Cv-photo.png" 
                alt="cv-photo" 
                className='h-[80%]'
              />
            </div>

            <p className={`${styles.pText} text-left leading-6 pb-4`}>
              Hello, I am a UX/UI designer and front-end developer. <br />
              With a background in design and technical expertise, I have refined my sense of aesthetics and usability through experiences in architecture, fashion, and textile design. My main objective is to deliver user-friendly and visually appealing web solutions. Focusing on front-end development allows me to leverage a diverse range of design skills to create captivating interfaces and experiences. I am committed to enhancing the user experience across various platforms, leveraging technical expertise alongside a creative perspective.<br />
              Additionally, my unique cultural perspective from growing up in Japan will be invaluable to the team in today&apos;s diverse environment.
            </p>

            {/* Button */}
            <div className='flex flex-col lg:flex-row justify-starts'>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`${styles.btn} ${styles.darkBtn}`}
                onClick={getPdfFile}
              >
                <span>Download CV</span>
                <span><MdOutlineFileDownload /></span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* CV */}
        <motion.div 
          variants={slideIn('right', 'tween', 0.5, 1)}
          className='w-[100%] lg:w-[60%] flex flex-col justify-between'
        >
          <div>
            {/* Menu bar */}
            <div className='grid grid-cols-3 text-center py-4'>

              {cvMenuItems.map(menu => 
                <div 
                  key={menu.id}
                  onClick={() => setItem(`${menu.id}`)}
                  className={`text-neutralDark cursor-pointer font-semibold py-2 ${item === menu.id ? 'activeMenu' : ''}`}
                >
                  {menu.title}
                </div>
              )}

            </div>

            {/* CV display */}
            <div className='md:py-12 md:px-8 py-8 px-4'>
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

        </motion.div>

      </motion.div>

    </section>
  )
}

export default About