import React from 'react'

import { MdOutlineLocalPostOffice, MdOutlineFileDownload } from "react-icons/md";
import { FaImage } from "react-icons/fa";


import SnsLinkButtons from '@/components/SnsLinkButtons'

import { styles } from '@/styles'
import '../styles/hero.css'
import Logo from '@/components/Logo';

const Hero = () => {


  return (
    <section id='home' className={`${styles.xPaddings} ${styles.yPaddings} sm:pl-16 pl-6`}>
      <div className='flex flex-col md:flex-row md:justify-between gap-6 items-center'>

        <div className='w-[100%] h-[350px] bg-orange-200 flex justify-center items-center relative'>       
          <FaImage size={36} /> 
          <Logo />    
        </div>

        <div>
          <div className='flex flex-col md:flex-row md:justify-between items-center gap-4'>
            <div className='w-[100%]'>
              <h1 className='text-2xl text-mainColorOrange font-bold'>Hi, I’m Chikage Takahashi Molander</h1>
              <h3 className='text-lg text-neutralDark font-semibold'>Frontend developer / UX-designer / UI-designer</h3>
              <p className='text-base'>
                I am a front-end developer and UX/UI designer passionate about building user-friendly and visually appealing web solutions.
              </p>
            </div>

            {/* Sns-Link Group */}
            <div className='pt-4 md:pt-0'>
              <SnsLinkButtons />
            </div>       
          </div>

          {/* Buttons Group */}
            <div className='flex flex-col md:flex-row justify-start gap-4 pt-8'> 
                      
              <div className={`${styles.ctaBtn} bg-mainColorDark text-neutralLight`}>
                <span>Contact Me</span>
                <span><MdOutlineLocalPostOffice /></span>
              </div>

              <div className={`${styles.ctaBtn} bg-mainColorOrange text-neutralLight`}>
                <span>Download CV</span>
                <span><MdOutlineFileDownload /></span>
              </div>

            </div>
        </div>
      

      </div>
    </section>
  )
}

export default Hero