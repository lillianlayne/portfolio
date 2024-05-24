import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'


const SliderBox = ({data, idx}) => {


  const balanceText = (sentence, type) => {
    const arr = sentence.split(" ");
    const top = arr[0];
    const bottom = arr.slice(1, arr.length).join(" ");

    if (type === "top") {
      return top;
    }

    if (type === "bottom") {
      return bottom;
    }
  };


  return (
    <div className='w-full h-screen relative flex justify-center items-center'>
      <div className="w-full h-full absolute z-10">
            <div id={`right-${idx}`} className="right-card"></div>
            <div id={`left-${idx}`} className="left-card"></div>
          </div>
      <div className="flex flex-col items-center justify-center">
            <p className="pb-10">
              {data.year} - {data.location}
            </p>
            <h2>{balanceText(data.name, "top")}</h2>
            <h2>{balanceText(data.name, "bottom")}</h2>
            <h3 className="pt-5">{data.role}</h3>
            <Link className="border-b pt-20 mx-auto text-sm py-2 border-stone-300">
              VIEW PROJECT
            </Link>
          </div>
    </div>
  )
}

export default SliderBox
