/* eslint-disable @next/next/no-img-element */
import React from 'react'

import ProjectNav from '@/components/ProjectNav'
import { projectsList } from '@/constans'



const AllProject = () => {
  return (
    <main>
      <ProjectNav />
      <div>
        <h3>All Project</h3>
        {projectsList && projectsList.map(item => 
          <div
            key={item.id}
          >
            <img src={item.thumbnail} alt="" />
            <div>{item.title}</div>
          </div>
        )}


      </div>


    </main>
  )
}

export default AllProject