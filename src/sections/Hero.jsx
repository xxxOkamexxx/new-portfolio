import React from 'react'

import { MdOutlineLocalPostOffice, MdOutlineFileDownload } from "react-icons/md";
import { FaImage } from "react-icons/fa";

import Logo from '@/components/Logo';
import SnsLinkButtons from '@/components/SnsLinkButtons'

import { styles } from '@/styles'


const Hero = () => {


  return (
    <section 
      id='home' 
      className={`${styles.xPaddings} ${styles.yPaddings}`}
    >
      <div className='flex flex-col md:flex-row md:justify-between gap-6 items-center'>

        {/* Hero Image */}
        <div className='w-[100%] max-w-[600px] h-[350px] bg-gray-200 flex justify-center items-center relative'>       
          <FaImage size={36} /> 
          <Logo />    
        </div>

        {/* Hero Texts */}
        <div>
          <div className='flex flex-col md:flex-row md:justify-between items-center gap-4'>
            <div className='w-[100%]'>

              <h1 className='text-4xl text-mainColorOrange font-extrabold'>
                Hi, I’m Chikage
              </h1>

              <h3 className={` ${styles.headline3} text-neutralDark pb-4`} >
                Frontend developer  UX/UI-designer
              </h3>

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