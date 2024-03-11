'use client'
import React, { useState } from 'react'

import { styles } from '@/styles';
import { MdOutlineSend } from "react-icons/md";
import { motion } from 'framer-motion';


const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    }).then((res) => {
      if(res.status === 200) console.log(res.status,'success')
    })
  }

  return (
    <div>
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col gap-4'
      >
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required 
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }} 
          className={`${styles.btn} ${styles.darkBtn}`}
          type='submit'
        >
            <span>Contact Me</span>
            <span><MdOutlineSend /></span>

        </motion.button>
      </form>
    </div>
  )
}

export default ContactForm