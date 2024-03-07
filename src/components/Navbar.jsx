'use client'

import { MenuItems } from "@/constans"
import Link from "next/link"
import { styles } from '../styles/index'
import '../styles/nav.css'
import { motion } from 'framer-motion';
import { navVariants } from '@/utils/motion';

const Navbar = () => {
  return (  
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth}`}>
      <div className={`${styles.xPaddings} ${styles.flexEnd} ${styles.navPadding} gap-6`}>
        {MenuItems.map(item => (
          <Link 
            key={item.id} 
            href={`#${item.id}`}
            className="navMenuItem text-[16px]"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.nav> 
  )
}

export default Navbar