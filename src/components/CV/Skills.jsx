import React from 'react'

import { styles } from '@/styles'

import { MdCode, MdColorLens, MdDiversity3, MdLanguage} from "react-icons/md";


const Skills = () => {
  const frontendSkills = [
    'HTML', 
    'CSS', 
    'SCSS', 
    'JavaScript',
    'Typescript', 
    'Node.js',
    'React', 
    'Redux',
    'GraphQL',
    'Next.js',
    'MaterialUI',
    'Tailwind',
    'Bootstrap',
    'Version Control (Git)',
    'RESTful APIs',
  ]

  const designSkills = [
    'Figma',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe XD',
    'Responsive Design'
  ]

  const otherSkills = [
    'Agile Development',
    'Team Collaboration'
  ]

  const languageSkills = [
    'Japanese',
    'English',
    'Swedish'
  ]

  return (
    <div>
      <h3 className={`${styles.cvCategory} ${styles.headline4}`}>Skills</h3>

      {/* Frontend */}
      <div className={`${styles.headline5}`}>       
        <div className='skillIcon'>
          <MdCode size={24} />
        </div>

        <div className='skillsList'>
          {frontendSkills.map((skill, index) => 
            <span 
              key={index}
              className={`${styles.textSmall} skillItem`}
            >
              {skill}
            </span>
            )}         
        </div>
      </div>

      {/* Design */}
      <div className={`${styles.headline5}`}>
        <div className='skillIcon'>
          <MdColorLens size={24} />
        </div>

        <div className='skillsList'>
          {designSkills.map((skill, index) => 
            <span 
              key={index}
              className={`${styles.textSmall} skillItem`}
            >
              {skill}
            </span>
            )}         
        </div>       
      </div>

      {/* Other */}
      <div className={`${styles.headline5}`}>
        <div className='skillIcon'>
          <MdDiversity3 size={24} />
        </div>

        <div className='skillsList'>
          {otherSkills.map((skill, index) => 
            <span 
              key={index}
              className={`${styles.textSmall} skillItem`}
            >
              {skill}
            </span>
            )}         
        </div> 
      </div>

      {/* Language */}
      <div className={`${styles.headline5}`}>
        <div className='skillIcon'>
          <MdLanguage size={24} />
        </div>

        <div className='skillsList'>
          {languageSkills.map((skill, index) => 
            <span 
              key={index}
              className={`${styles.textSmall} skillItem`}
            >
              {skill}
            </span>
            )}         
        </div> 
      </div>
      
    
    </div>
  )
}

export default Skills