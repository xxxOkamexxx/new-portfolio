import Link from 'next/link'
import React from 'react'

import { MdOutlineArrowCircleLeft } from "react-icons/md";


const BackToHome = () => {
  return (
    <div>
       <Link
          href={'/'}
          className="text-[16px] text-neutralDark flex flex-row items-center gap-2 hover:text-focusColor hover:font-semibold pb-4"
        >
          <span>
            <MdOutlineArrowCircleLeft />
          </span>
          <span>
            Home
          </span>
        </Link>
    </div>
  )
}

export default BackToHome