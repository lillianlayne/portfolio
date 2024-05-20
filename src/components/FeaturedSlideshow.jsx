import React from "react";
import { Link } from "react-router-dom";
import Slide from "./Slide";
import { Parallax } from "react-scroll-parallax";

const FeaturedSlideshow = ({ projects }) => {
  const data = [
    {
      name: "Legacybox Backup",
      role: "Art Director & Lead Designer",
      studentProject: false,
      featureTag: "Branding",
      featurePhoto: {
        url: "https://assets.codepen.io/10852085/FP_lb_cloud.png",
        position: "start",
        size: "landscape",
      },
    },
    {
      name: "The Rizzas",
      role: "Lead Designer",
      studentProject: false,
      featureTag: "Branding",
      featurePhoto: {
        url: "https://assets.codepen.io/10852085/FP_Rizzas.png",
        position: "center",
        size: "landscape",
      },
    },
    {
      name: "Cheersly",
      role: "Lead Designer & Developer",
      studentProject: true,
      featureTag: "Web development",
      featurePhoto: {
        url: "https://assets.codepen.io/10852085/FP_Cheersly.png",
        position: "end",
        size: "landscape",
      },
    },

    {
      name: "Legacybox Photobox",
      role: "Art Director & Lead Designer",
      studentProject: false,
      featureTag: "Branding",
      featurePhoto: {
        url: "https://assets.codepen.io/10852085/FP_lb_photobox.png",
        position: "start",
        size: "portrait",
      },
    },

    {
      name: "Maison",
      role: "Lead Designer",
      studentProject: false,
      featureTag: "Branding",
      featurePhoto: {
        url: "https://assets.codepen.io/10852085/FP_Maison.png",
        position: "end",
        size: "landscape",
      },
    },
  ];
  return (
    <div className="flex-grow container">
      {data.map((proj) => (
        <div className="h-[600px] md:h-screen relative" key={proj.name}>
          <div className="content absolute w-full z-10 transform-center flex text-center flex-col justify-center items-center">
            <Parallax speed={-10} className="flex flex-col items-center">
              <h2>{proj.name}</h2>
              <h3>{proj.role}</h3>
              <h5 className="mt-16">view project</h5>
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
