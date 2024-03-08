import React from 'react'

import { styles } from '@/styles'


const Education = () => {
  const education = [   
    {
      start: 'Sep.2021',
      end: 'May.2023',
      school: 'Medieinstitutet',
      course: 'Frontend Developer',
      locate: 'Malmö, Sweden',
    },
    {
      start: 'Sep.2010',
      end: 'Jun.2012',
      school: 'Tau Learning',
      course: 'Textiles and Fashion Design',
      locate: 'Malmö, Sweden',
    },
    {
      start: 'Mar.2003',
      end: 'Dec.2003',
      school: 'The International Peoples College',
      course: 'International Studies and Languages',
      locate: 'Helsingør, Denmark',
    },
    {
      start: 'Apr.1995',
      end: 'Mar.1997',
      school: 'Tokai-Technical College',
      course: 'Interior and Architectural Design',
      locate: 'Nagoya, Japan',
    },
    
  ]
  
  return (
    <div>    
      <h3 className={`${styles.cvCategory} ${styles.headline4}`}>
        Education
      </h3>

      {education.map((item, index) => (

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
              {item.school}
            </div>
            <div className='text-neutralDark font-semibold text-sm'>
              {item.course}
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

export default Education