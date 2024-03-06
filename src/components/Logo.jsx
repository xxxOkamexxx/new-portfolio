import { styles } from '@/styles'
import React from 'react'

const Logo = () => {
  const texts = 'Creative UX/UIDesigner Frontend Developer - '
  const logoText = texts.split('').map((text, i) => (
    <span key={i} style={{ transform: `rotate(${i * 8.3}deg)` }}>{text}</span>
  ))
console.log(logoText)
  return (
    <div className='absolute bottom-0 left-0'>
      
      <div className={`logoWrapper relative size-[150px] rounded-full ${styles.flexCenter} `}>
        
        <div className={`logo-circle absolute size-[100px] rounded-full ${styles.flexCenter} text-center tracking-widest leading-relaxed`}>
          Open<br />To<br />Work
        </div>
       
        <div className='logo-text absolute w-[100%] h-[100%]'>
          {logoText}
        </div>

      </div>

    </div>
  )
}

export default Logo