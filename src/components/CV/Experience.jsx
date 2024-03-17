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
      description: 'Design, create and implement a working prototype of a product editing app.'
    },
    {
      start: 'Oct.2022',
      end: 'Dec.2022',
      conpany: 'Geshdo',
      position: 'UX/Frontend Developer',
      locate: 'Malmö, Sweden',
      description: 'Design, create and implement a working prototype of an internal employee filtering system based on competencies for Geshdo.'
    },
    {
      start: 'Jan.2014',
      end: 'Mar.2019',
      conpany: 'ChikageDesign',
      position: 'Freelance Fashion/Textile Designer',
      locate: 'Malmö, Sweden',
      description: 'Fashion design company specializing in clothing, pattern design, and tailoring for both corporate and private clients.'
    },
    {
      start: 'Oct.2012',
      end: 'Jan.2013',
      conpany: 'Altewai Saome',
      position: 'Fashion Designer Assistant',
      locate: 'Malmö, Sweden',
      description: 'Creating patterns and prototypes, assisting backstage at fashion events.'
    },
    {
      start: '2005',
      end: '2005',
      conpany: 'Nakanihon Engineering Consultants Co.',
      position: 'CAD Operator (Design Departmen)',
      locate: 'Nagoya, Japan',
      description: 'CAD operator. Creation of road construction drawings.'
    },
    {
      start: 'Apr.1997',
      end: 'Aug-2002',
      conpany: 'Suzuki-Sekkei Co.',
      position: 'Architectural Designer',
      locate: 'Komaki, Japan',
      description: 'Work included creating CAD drawings, site management, surveying, and construction calculations.'
    },
    
  ]

  return (
    <div>
      <h3 className={`${styles.cvCategory} ${styles.headline3} pb-4 text-center`}>
        Experience
      </h3>

      {experience.map((item, index) => (

        <div 
        className='grid grid-cols-8'
        key={index}
        >

          {/* Date */}
          <div className='pb-2 col-span-2 text-right'>
            <div className='text-mainColorOrange font-semibold text-sm'>
              {item.start} - {item.end}
            </div>
          </div> 

          {/* Time Line */}
          <div className='relative col-span-1'>
            <div className={`${styles.timelineCircle}`} />
            <div className={`${styles.timelineBar}`} />
          </div>

          {/* Detail */}
          <div className='pb-2 col-span-5'>          
            <div className='text-mainColorDark font-semibold text-sm'>
              {item.conpany}
            </div>
            <div className='text-neutralDark font-semibold text-sm'>
              {item.position}
            </div>
            <div className='text-mainColorDark font-nomal text-sm'>
              {item.locate}
            </div>
            <div className={`${styles.textSmall}`}>
              {item.description}
            </div>
          </div>      
        </div>
      ))}
      
      
    </div>
  )
}

export default Experience