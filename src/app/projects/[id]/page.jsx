'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';

import { projectsList } from '@/constans'
import ProjectNav from '@/components/ProjectNav';


const ProjectsByType = () => {
  const [title, setTitle] = useState('')
  const params = useParams();
  const id = params.id

  useEffect(() => {
    
    switch (id) {
      case "web":
        setTitle("Web Design");
        break;
      case "app":
        setTitle("Application Design");
        break;
      case "frontend":
        setTitle("FrontEnd");
        break;
      default:
        setTitle("");
        break;
    }
  },[id])
  

  return (
    <main>
      <ProjectNav />
      <h2>{title}</h2>
    
      {projectsList
      .filter(item => item.type === id)
      .map(work => (
        <div key={work.id}>
          {work.title} -- {work.type}
        </div>
      ))}

    </main>
  )
}

export default ProjectsByType