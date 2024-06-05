import React from 'react'
import UnderConstruction from './UnderConstruction'
import projects from '../data/projects'
import { Link } from 'react-router-dom'



const SelectedScreen = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-between py-14'>
      <div className="container flex gap-3 items-end">
        <h3>Selected Works</h3> <h3 className="italic tracking-wider text-3xl">({projects.length})</h3>
      </div>
      <div className="w-full flex gap-8 overflow-x-scroll overflow-y-visible no-scrollbar h-[80%]">
        {projects.map((proj, idx) => (
          <Link to={`/project/${proj.url}`} key={idx} className='h-full flex-shrink-0 first:ml-32'>
            <div className="h-full">
              <img src={proj.featurePhoto.url} alt="" className='w-full h-[90%] object-cover aspect-[3/4] flex-shrink-1'/>
              <p className="text-stone-600 pt-4">
                {proj.role}
              </p>
              <p>
                {proj.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SelectedScreen
