import React from 'react'

const FeaturedSlideshow = ({projects}) => {
  return (
    <div className=' mx-auto flex gap 2'>
      {projects.map((project) => (
        <p key={project.name}>
          {project.name}
        </p>
      ))}
    </div>
  )
}

export default FeaturedSlideshow
