import React from 'react'

import { styles } from '@/styles'

import { MdOutlineSend } from "react-icons/md";



const Contact = () => {
  return (
    <section
      id='contact' 
      className={`${styles.yPaddings}`}
    >

      <div className={`brelative flex md:flex-row flex-col gap-4 ${styles.xPaddings} py-4 justify-between`}>


        <div className='md:w-[40%] flex flex-col p-4 gap-4'>

          <h2 className={`${styles.pageTitle} ${styles.headline3}`}>
            Contact
          </h2>


          {/* Contact form */}
          <div>
            <h4>Write me a message</h4>

            <form className=' grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>

              {/* Name */}
              <div className='sm:col-span-6'>
                <label 
                  htmlFor="name"
                  className='block text-sm font-medium leading-6 text-neutralDark'
                >
                  Name: 
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  className="block w-full rounded-md border-0 py-1.5 px-7  text-mainColorDark ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focusColor sm:text-sm sm:leading-6" 
                  placeholder="name"
                />
              </div>

              {/* Email */}
              <div className='sm:col-span-6'>
                <label 
                  htmlFor="email"
                  className='block text-sm font-medium leading-6 text-neutralDark'
                >
                  E-mail: 
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="block w-full rounded-md border-0 py-1.5 px-7  text-mainColorDark ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focusColor sm:text-sm sm:leading-6" 
                  placeholder="E-mail"
                />
              </div>

              {/* Message */}
              <div className='sm:col-span-6'>
                <label 
                  htmlFor="name"
                  className='block text-sm font-medium leading-6 text-neutralDark'
                >
                  Message: 
                </label>
                <textarea 
                  type="text" 
                  name="message" 
                  id="message" 
                  className="block w-full rounded-md border-0 py-1.5 px-7  text-mainColorDark ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focusColor sm:text-sm sm:leading-6" 
                  placeholder="Write me a message here..."
                />
              </div>
         
    

              <div className='flex flex-col md:flex-row justify-starts'>
              <button className={`${styles.ctaBtn} bg-mainColorDark text-neutralLight`}>
                <span>Send</span>
                <span><MdOutlineSend /></span>
              </button>
            </div>

            </form>
          </div>

          

        </div>

      </div>      
      
    </section>
  )
}

export default Contact