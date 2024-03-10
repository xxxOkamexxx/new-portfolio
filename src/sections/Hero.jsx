'use client'

import React from 'react'

import { MdOutlineLocalPostOffice, MdOutlineFileDownload } from "react-icons/md";


import { Logo, SnsLinkButtons } from '@/components';

import { styles } from '@/styles'
import { motion } from 'framer-motion';
import { staggerContainer, textVariant, slideIn } from '@/utils/motion';



const Hero = () => {

  return (
    <section 
      className={`${styles.xPaddings} ${styles.yPaddings}`}
    >
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='flex flex-col lg:flex-row lg:justify-between gap-8 items-center'
      >

        {/* Hero Image */}
        <motion.div 
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='w-[100%] h-[200px] lg:w-[60vw] md:h-[300px] flex justify-center items-center relative'
        >       
          <Logo />    
        </motion.div>

        {/* Hero Texts */}
        <div className='z-10'>
          <div className='flex flex-col md:flex-row md:justify-between items-center gap-4'>
            <div className='w-[70%]'>

              <motion.h1 
                variants={textVariant(0.5)}
                className='text-4xl text-mainColorOrange font-extrabold tracking-wide'
              >
                Hi, I’m Chikage
              </motion.h1>

              <motion.h3
                 variants={textVariant(0.8)} 
                className={` ${styles.headline3} text-neutralDark pb-4 tracking-wide`} 
              >
                Frontend developer  UX/UI-designer
              </motion.h3>

              <motion.p 
                variants={textVariant(1.1)}
                className='text-base tracking-wide leading-7'
              >
                I am a front-end developer and UX/UI designer passionate about building user-friendly and visually appealing digital solutions, including websites and applications.
              </motion.p>
            </div>

            {/* Sns-Link Group */}
            <motion.div 
              variants={slideIn('right', 'tween', 0.2, 1)}
              className='pt-4 md:pt-0'
            >
              <div className='flex flex-row md:flex-col gap-4'>
                <SnsLinkButtons />
              </div>
            </motion.div>       
          </div>

          {/* Buttons Group */}
          <div className='flex flex-col md:flex-row justify-start gap-4 pt-8'> 
                    
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }} 
              className={`${styles.btn} ${styles.darkBtn}`}
            >
                <span>Contact Me</span>
                <span><MdOutlineLocalPostOffice /></span>

            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }} 
              className={`${styles.btn} ${styles.orangeBtn}`}
            >
              <span>Download CV</span>
              <span><MdOutlineFileDownload /></span>
            </motion.button>

          </div>
        </div>
      

      </motion.div>
    </section>
  )
}

export default Hero