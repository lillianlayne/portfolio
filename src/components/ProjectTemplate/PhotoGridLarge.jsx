import React from 'react'

const PhotoGridLarge = () => {
  return (
    <div className='w-full grid grid-cols-12 grid-rows-9 h-screen'>
      <div className="col-start-1 col-span-5 row-start-1 row-span-3 bg-stone-500 h-full w-full"></div>
      <div className="col-start-5 col-span-8 row-start-3 row-span-4 bg-stone-600"></div>
      <div className="col-start-3 col-span-5 row-start-6 row-span-3 bg-stone-700"></div>
      {/* <div className="col-start col-span row-start row-span bg-stone-400"></div> */}
      {/* <div className="col-start col-span row-start row-span bg-stone-500"></div> */}
      
    </div>
  )
}

export default PhotoGridLarge
