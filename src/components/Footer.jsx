import React from 'react'

import { LinkItems } from '@/constans'
import { styles } from '@/styles'
import SnsLinkButtons from './SnsLinkButtons'

const Footer = () => {
  return (
    <div className={`bg-mainColorDark text-neutralLight ${styles.innerWidth}`}>
    
      <div className={`${styles.xPaddings} py-8 left-0 bottom-0`}>

        <div className='pb-4'>
          <p className={`${styles.textSmall}`}>chikage.t.molander@gmail.com</p>
        </div>

        <div className='flex flex-row gap-4'>
          <SnsLinkButtons />
        </div>

      </div>
    </div>
  )
}

export default Footer