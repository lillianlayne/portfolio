import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import projects from "../data/projects";
import SliderBox from "./SliderBox";
import SpinWheel from "./HomeScreenComponents/SpinWheel";

const FeaturedSlideshow = () => {
  const data = [projects[0], projects[2], projects[3]];
  return (
    <div className="flex-grow container">
      <div className="sticky top-20 left-0">
        <SpinWheel />
      </div>
      {data.map((proj, idx) => (
        <div className="h-[600px] md:h-[800px] relative" key={proj.name}>
          <div className="content absolute w-full z-10 transform-center flex text-center flex-col justify-center items-center">
            <Parallax speed={-10} className="">
              <SliderBox data={proj} idx={idx} />
            </Parallax>
          </div>
          <Parallax speed={15} className="md:w-3/4 h-full mx-auto ">
            <div
              className={`flex h-full items-center  justify-${proj.featurePhoto.position}`}
            >
              <img
                className={`${proj.featurePhoto.size} opacity-50 max-h-[500px] max-w-[400px] `}
                src={proj.featurePhoto.url}
                alt=""
              />
            </div>
          </Parallax>
        </div>
      ))}
    </div>
  );
};

export default FeaturedSlideshow;
