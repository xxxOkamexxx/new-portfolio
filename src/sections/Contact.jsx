'use client'

import React from 'react'

import { styles } from '@/styles'
import { motion } from 'framer-motion';

import { MdOutlineLocalPostOffice } from "react-icons/md";
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <section
      id='contact' 
      className={`${styles.yPaddings}`}
    >

      <div className={`grid md:grid-cols-2 grid-rows-1 gap-6 ${styles.xPaddings}`}>


       
        {/* Contact form */}
        <div className='flex flex-col gap-4'>

          <h2 className={`${styles.pageTitle} ${styles.headline3}`}>
            Get in touch
          </h2>

          <p>
            Thank you for your interest. If you have any job requests or questions, please feel free to contact me. I look forward to assisting you.
          </p>

          {/* <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }} 
              className={`${styles.btn} ${styles.darkBtn}`}
            >
              <a href="mailto:chikage.t.molander@gmail.com" className='flex flex-col md:flex-row align-middle'>
                <span>Send me a Message</span>
                <span><MdOutlineLocalPostOffice /></span>
              </a>
            </motion.button>
          </div> */}

        </div>

        {/* 🚧 I'm working on the API 🚧 */}
        <ContactForm />


     

      </div>      
      
    </section>
  )
}

export default Contact