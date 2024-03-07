import React from 'react'


import { LinkItems } from '@/constans'
import Link from 'next/link'

const SnsLinkButtons = () => {

  return (
    <>
      
     {LinkItems.map(item => (
      <div className='bg-white/50 rounded-full shadow-lg p-2'>
        <Link
          key={item.id}
          href={item.url}
          target='_blank'
        >
          {item.icon}
        </Link>
      </div>
     ))}

    </>
  )
}

export default SnsLinkButtons