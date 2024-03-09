'use client'
import Link from 'next/link'
import React from 'react'

import { styles } from '@/styles'
import { motion } from 'framer-motion';
import { staggerContainer, textVariant, slideIn } from '@/utils/motion';

const Logo = () => {
  const texts = 'Creative UX/UI Designer Frontend Developer - '
  const logoText = texts.split('').map((text, i) => (
    <span 
      key={i}
      style={{ transform: `rotate(${i * 8.2}deg)` }}
      className='uppercase font-mono'
    >
      {text}
    </span>
  ))

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}  
      className='absolute bottom-0 right-0'
    >
      
      <Link
        href={'#contact'} 
        className={`logoWrapper relative size-[150px] rounded-full ${styles.flexCenter}`}
      >
        
        <div className={`logo-circle absolute size-[100px] rounded-full ${styles.flexCenter} text-center tracking-widest leading-relaxed`}>
          Open<br />To<br />Work
        </div>
       
        <div className='logo-text absolute w-[100%] h-[100%]'>
          {logoText}
        </div>

      </Link>

    </motion.div>
  )
}

export default Logo