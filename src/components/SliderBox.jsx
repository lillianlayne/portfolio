import React, { useEffect, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import projects from "../data/projects";


const SliderBox = ({ data, idx }) => {
  let navigate = useNavigate()
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

  const handleClick = (e, name) => {
    navigate(`/projects/${name}`)
  }
 

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <div className="w-full h-full absolute z-10">
        <div id={`right-${idx}`} className="right-card"></div>
        <div id={`left-${idx}`} className="left-card"></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="pb-10">
          {data.year} - {data.location}
        </p>
        <h4>{balanceText(data.name, "top")}</h4>
        <h4>{balanceText(data.name, "bottom")}</h4>
        <h5 className="pt-5 pb-10">{data.role}</h5>
          <button onClick={e => handleClick(e, data.url)} className="border-b mx-auto text-sm py-2 border-stone-300 cursor-pointer z-40">VIEW PROJECT</button>
      </div>
    </div>
  );
};

export default SliderBox;
