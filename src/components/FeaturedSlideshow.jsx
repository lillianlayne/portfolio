import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slide from "./Slide";
import { Parallax } from "react-scroll-parallax";
import projects from "../data/projects";

const FeaturedSlideshow = () => {
 const [data, setData] = useState(projects)
  return (
    <div className="flex-grow container">
      {data.map((proj) => (
        <div className="h-[600px] md:h-screen relative" key={proj.name}>
          <div className="content absolute w-full z-10 transform-center flex text-center flex-col justify-center items-center">
            <Parallax speed={-10} className="flex flex-col items-center">
              <h2>{proj.name}</h2>
              <h3>{proj.role}</h3>
              <Link to="/underconstruction">
              <h5 className="mt-16">view project</h5>
              </Link>
            </Parallax>
          </div>
          <Parallax speed={15} className="md:w-3/4 h-full mx-auto">
            <div
              className={`flex h-full items-center  justify-${proj.featurePhoto.position}`}
            >
              <img
                className={`${proj.featurePhoto.size} grayscale opacity-60 max-h-[500px]`}
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
