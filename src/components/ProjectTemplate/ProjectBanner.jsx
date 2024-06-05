import React, { useEffect, useRef, useState } from "react";
import { BiArrowToRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import SkillsSvg from "../SkillsSvg";

const ProjectBanner = ({ data }) => {
  const [title, setTitle] = useState(null);
  const titleRef = useRef(null)

  let liveSiteBtn;

  if (data.liveSite) {
    liveSiteBtn = (
      <a
        className="text-xs tracking-widest uppercase flex items-center justify-center pt-16 gap-4 hover:italic"
        target="_blank"
        href={data.liveSite}
      >
        View Live Site{" "}
        <span>
          <BsArrowRight />
        </span>{" "}
      </a>
    );
  }

  const constructTitle = (arg) => {
    const array = arg.split(" ");
    setTitle(array);
  };

  useEffect(() => {
    constructTitle(data.name);
  }, [data]);

 
  

  return (
    <div className="h-screen flex">
      <div className="flex h-full relative flex-col col-span-1 justify-between items-center w-1/2 flex-shrink-0 p-12 ">
        <div ref={titleRef} className="absolute z-0 transform-center font-center flex flex-col items-center text-stone-950 ">
          <img src={data.logo} alt="" className="w-3/4"/>
        </div>
        <div className="flex space-x-1 text-stone-500 pt-8">
          {data.content.skills.map((skill) => (
            <p key={skill}>{skill} /</p>
          ))}
        </div>
        <div className="div z-10 flex flex-col items-center">
          <div>
          <h4 className="text-3xl text-center">{data.name}</h4>
          <p className="pt-8 z-10 text-center text-balance w-4/5 mx-auto">
            {data.content.mainDescription}
          </p>
          {liveSiteBtn}
          </div>
        </div>
        <div className="flex space-x-1">
          <p className="font-serif italic text-lg text-stone-500">
            {data.role} - {data.year}
          </p>
        </div>
      </div>
      <div className="h-full w-1/2 flex-shrink-0 col-span-1">
        <img
          src={data.featurePhoto.url}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectBanner;
