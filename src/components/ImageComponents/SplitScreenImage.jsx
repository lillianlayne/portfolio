import React from 'react'

const SplitScreenImage = ({first, second}) => {
  return (
    <div className='w-full flex'>
      <div className="w-full aspect-square">
        <img src={first} alt="" />
      </div>
      <div className="w-full aspect-square">
        <img src={second} alt="" />
      </div>
    </div>
  )
}

export default SplitScreenImage
