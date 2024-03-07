import React from 'react'

import { styles } from '@/styles'

import { MdOutlineLocalPostOffice } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id='contact' 
      className={`${styles.yPaddings}`}
    >

      <div className={`brelative flex md:flex-row flex-col gap-4 ${styles.xPaddings} py-4 justify-between`}>


        <div className='md:w-[40%] flex flex-col p-4 gap-4'>

          <h2 className={`${styles.pageTitle} ${styles.headline3}`}>
            Get in touch
          </h2>


          {/* Contact form */}
          <div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, praesentium! Impedit saepe eum veritatis iste aperiam recusandae! Cupiditate, quasi aliquid enim suscipit incidunt sunt doloribus fugit asperiores pariatur. Soluta, esse.</p>

              <div className='flex flex-col md:flex-row justify-starts'>
              <button className={`${styles.btn} bg-mainColorDark text-neutralLight`}>
                <span>Send me a Message</span>
                <span><MdOutlineLocalPostOffice /></span>
              </button>
            </div>
          </div>

          

        </div>

      </div>      
      
    </section>
  )
}

export default Contact