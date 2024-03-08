import React from 'react'

import { styles } from '@/styles'

const Experience = () => {
  const experience = [
    {
      start: 'Jan.2023',
      end: 'Maj.2023',
      conpany: 'NewSeed IT Solutions AB',
      position: 'UX/Frontend Developer',
      locate: 'Lund, Sweden',
    },
    {
      start: 'Oct.2022',
      end: 'Dec.2022',
      conpany: 'Geshdo',
      position: 'UX/Frontend Developer',
      locate: 'Malmö, Sweden',
    },
    {
      start: 'Jan.2014',
      end: 'Mar.2019',
      conpany: 'ChikageDesign',
      position: 'Freelance Fashion/Textile Designer',
      locate: 'Malmö, Sweden',
    },
    {
      start: 'Oct.2012',
      end: 'Jan.2013',
      conpany: 'Altewai Saome',
      position: 'Fashion Design Assistant',
      locate: 'Malmö, Sweden',
    },
    {
      start: '2005',
      end: '2005',
      conpany: 'Nakanihon Engineering Consultants Co.',
      position: 'CAD Operator / Design Department',
      locate: 'Nagoya, Japan',
    },
    {
      start: 'Apr.1997',
      end: 'Aug-2002',
      conpany: 'Suzuki-Sekkei Co.',
      position: 'Architectural Designer',
      locate: 'Komaki, Japan',
    },
    
  ]

  return (
    <div>
      <h3 className={`${styles.cvCategory} ${styles.headline4}`}>
        Experience
      </h3>

      {experience.map((item, index) => (

        <div 
        className='flex'
        key={index}
        >
          {/* Time Line */}
          <div className='relative'>
            <div className={`${styles.timelineCircle}`} />
            <div className={`${styles.timelineBar}`} />
          </div>

          {/* Detail */}
          <div className='pl-8 pb-2'>
            <div className='text-mainColorOrange font-semibold text-sm'>
              {item.start} - {item.end}
            </div>
            <div className='text-mainColorDark font-semibold text-sm'>
              {item.conpany}
            </div>
            <div className='text-neutralDark font-semibold text-sm'>
              {item.position}
            </div>
            <div className='text-mainColorDark font-nomal text-sm'>
              {item.locate}
            </div>
          </div>      
        </div>
      ))}
      
      
    </div>
  )
}

export default Experience