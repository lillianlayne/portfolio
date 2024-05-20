import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

const Slide = ({ project }) => {
  return (
    <div className="snap-center w-full h-full flex justify-center relative items-center">
      <div className="px-8">
        <Parallax speed={10}>
          <img src={project.featuredPhoto} className="w-[60%]" alt="" />
        </Parallax>
      </div>
      <div className="flex flex-col items-center justify-center absolute">
        <Parallax speed={-15}>
          <div className="flex flex-col items-center">
            <h2>{project.name}</h2>
            <h3 className="text-center">{project.role}</h3>
            <div className="mt-8 border-b border-stone-900">
              <Link className="pt-8 text-center">view project</Link>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Slide;
