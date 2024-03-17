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
      description: 'Vocational education for Front End Development includes JavaScript, version control, frameworks, HTML, CSS, web design, and usability/UX. The curriculum covers a wide spectrum, ranging from various programming languages to skills in developing mobile web applications.'
    },
    {
      start: 'Sep.2010',
      end: 'Jun.2012',
      school: 'Tau Learning',
      course: 'Textiles and Fashion Design',
      locate: 'Malmö, Sweden',
      description: 'Adult education for learning the process from sketch to finished garment or collection, Pattern making both manually and digitally.'
    },
    {
      start: 'Mar.2003',
      end: 'Dec.2003',
      school: 'The International Peoples College',
      course: 'International Studies and Languages',
      locate: 'Helsingør, Denmark',
      description: 'Studying English, global cultures, and societies, European culture and society, as well as intercultural communication and conflict management.'
    },
    {
      start: 'Apr.1995',
      end: 'Mar.1997',
      school: 'Tokai-Technical College',
      course: 'Interior and Architectural Design',
      locate: 'Nagoya, Japan',
      description: 'The engineering aspect studies the structure of buildings, materials, and more. The social science aspect focuses on institutions, regulations, economic activities, and research methods. The artistic and cultural aspects involve studying design and history.'
    },
    
  ]
  
  return (
    <div>    
      <h3 className={`${styles.cvCategory} ${styles.headline3} pb-4 text-center`}>
        Education
      </h3>

      {education.map((item, index) => (

        <div 
          className='grid grid-cols-8'
          key={index}
        >

          {/* Date */}
          <div className='pb-2 col-span-2 text-right'>
            < div className='text-mainColorOrange font-semibold text-sm'>
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
              {item.school}
            </div>
            <div className='text-neutralDark font-semibold text-sm'>
              {item.course}
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

export default Education