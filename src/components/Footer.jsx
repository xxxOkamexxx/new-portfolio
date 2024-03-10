import React from 'react'

import { MenuItems } from '@/constans'
import { styles } from '@/styles'
import SnsLinkButtons from './SnsLinkButtons'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={`bg-mainColorDark text-neutralLight ${styles.innerWidth} absolute`}>
    
      <div className="hidden md:block circle02 z-0" />

      <div className={`${styles.xPaddings} py-8 left-0 bottom-0 flex md:flex-row flex-col md:justify-between md:w-[60%] gap-4 items-center`}>

        <div className='flex flex-col gap-2'>
          {MenuItems.map(menu => 
        
            <Link
              key={menu.id}
              href={`#${menu.id}`}
            >
              {menu.name}
            </Link>
   
          )}
        </div>

        <div className='pb-4 flex flex-col justify-center gap-4'>
          <p>© ChikageMolander {new Date().getFullYear()}</p>
          <hr />
          <p className={`${styles.pText}`}>chikage.t.molander@gmail.com</p>

          <div className='flex flex-row gap-4 items-center justify-center'>
            <SnsLinkButtons />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer