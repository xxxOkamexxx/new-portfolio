'use client'
import React from 'react'

import { styles } from '@/styles';
import { MdOutlineSend } from "react-icons/md";
import { motion } from 'framer-motion';


const ContactForm = () => {
  return (
    <div>
      <form className='flex flex-col gap-4'>
        {/* Name */}
        <div className='flex flex-col'>
          <label
            className={`${styles.textSmall} text-neutralDark`} 
            htmlFor="name"
          >
            Name:
          </label>

          <input 
            className={`${styles.inputBox}`}
            type="text" 
            id='name' 
            required 
          />
        </div>
  
        {/* E-mail */}
        <div className='flex flex-col'>
          <label 
            className={`${styles.textSmall} text-neutralDark`} 
            htmlFor="email"
          >
            E-mail:
          </label>

          <input 
            className={`${styles.inputBox}`}
            type="email" 
            id='email' 
            required 
          />
        </div>

        {/* Message */}
        <div className='flex flex-col'>
          <label 
            className={`${styles.textSmall} text-neutralDark`} 
            htmlFor="message"
          >
            Message:
          </label>
          <textarea 
            className={`${styles.inputBox} min-h-[80px]`}
            name="message" 
            id='message' 
            required 
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }} 
          className={`${styles.btn} ${styles.darkBtn}`}
        >
            <span>Contact Me</span>
            <span><MdOutlineSend /></span>

        </motion.button>
      </form>
    </div>
  )
}

export default ContactForm