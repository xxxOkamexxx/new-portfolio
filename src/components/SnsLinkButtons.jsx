import React from 'react'


import { LinkItems } from '@/constans'
import Link from 'next/link'

const SnsLinkButtons = () => {

  return (
    <div className='flex flex-row md:flex-col gap-4'>
      
     {LinkItems.map(item => (
      <div className='bg-white rounded-full shadow-lg p-2'>
        <Link
          key={item.id}
          href={item.url}
          target='_blank'
        >
          {item.icon}
        </Link>
      </div>
     ))}

    </div>
  )
}

export default SnsLinkButtons