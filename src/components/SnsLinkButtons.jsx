'use client'

import React from 'react'
import Link from 'next/link'

import { LinkItems } from '@/constans'

import { motion } from "framer-motion";


const SnsLinkButtons = () => {

  return (
    <>
      
     {LinkItems.map(item => (
      <motion.div 
        key={item.id}
        whileHover={{ scale: 1.2 }} 
        whileTap={{ scale: 0.8 }} 
        className='bg-white/50 rounded-full shadow-lg p-2 hover:bg-focusColor/20'
      >
        <Link
          href={item.url}
          target='_blank'
        >
          {item.icon}
        </Link>
      </motion.div>
     ))}

    </>
  )
}

export default SnsLinkButtons