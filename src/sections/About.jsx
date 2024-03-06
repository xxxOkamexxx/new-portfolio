'use client'

import React,{ useState } from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

import { FaImage } from "react-icons/fa";

import { styles } from '@/styles'
import '../styles/nav.css'


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
        <div className='bg-white w-[100%] md:w-[40%] flex flex-col p-4 gap-4'>

          <h2 className={`${styles.pageTitle} ${styles.headline3}`}>
            About Me
          </h2>

          <div className='flex justify-center flex-col gap-2'>
            <div className='w-[100%] h-[300px] bg-gray-200 flex justify-center items-center'>
              <FaImage size={36} />
            </div>

            <div className={`${styles.pText}text-left leading-6 pb-4`}>
              Hello, I am a UX/UI designer and front-end developer. <br />
              With a background in design and technical expertise, I have refined my sense of aesthetics and usability through experiences in architecture, fashion, and textile design. My main objective is to deliver user-friendly and visually appealing web solutions. Focusing on front-end development allows me to leverage a diverse range of design skills to create captivating interfaces and experiences. I am committed to improving the user's online journey by combining technical know-how with a creative perspective.<br />
              Additionally, my unique cultural perspective from growing up in Japan will be invaluable to the team in today's diverse environment.
            </div>

            {/* Button */}
            <div>
              <div className={`${styles.ctaBtn} bg-mainColorDark text-neutralLight`}>
                <span>Download CV</span>
                <span><MdOutlineFileDownload /></span>
              </div>
            </div>
          </div>
        </div>

        {/* CV */}
        <div className='bg-white w-[100%] md:w-[60%] flex flex-col justify-between'>
          <div>
            {/* Menu bar */}
            <div className='aboutMenu grid grid-cols-3 text-center py-4'>

              <div 
                className={'text-neutralDark text-[16px] hover:text-mainColorOrange'}
                onClick={() => setItem('skills')}
              >
                Skills
              </div>

              <div 
                onClick={() => setItem('experience')}
              >
                Experience
              </div>

              <div 
                onClick={() => setItem('education')}
              >
                Education
              </div>

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

        </div>

      </div>

    </section>
  )
}

export default About