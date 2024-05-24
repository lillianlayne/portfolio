import React, { useEffect, useRef, useState } from "react";
import projects from "../data/projects";
import { Link } from "react-router-dom";
import classNames from "classnames";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  useParallax,
} from "react-scroll-parallax";

// make each one sticky like the a,b,c,d example then make the content 200% of height so that the scroll can happen
const AnimatedFeaturedSection = ({ slide }) => {
  const [progress, setProgress] = useState(null);
  const [entered, setEntered] = useState(false);

  const left = useParallax({
    translateX: [80, 0],
    shouldAlwaysCompleteAnimation: true,
    startScroll: 20,
  });

  const right = useParallax({
    translateX: [-80, 0],
    shouldAlwaysCompleteAnimation: true,
    startScroll: 20,
  });

  const rightPhoto = useParallax({
    rotate: [0, 4],
    startScroll: 20,
  });
  const leftPhoto = useParallax({
    rotate: [0, -4],
    startScroll: 20,
  });

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
    <div className="outside container">
      <div className="inside">
        <div ref={left.ref} className="photo-wrapper left-wrapper z-20">
          <div ref={leftPhoto.ref} className="left-photo">
          <img src={slide.featurePhoto.url} alt="" className="h-full object-cover"/>

          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center absolute z-0">
          {slide.studentProject ? (
            <p className="pb-6 text-xs uppercase">student project</p>
          ) : (
            <p className="pb-6 text-xs uppercase">
              {slide.year} - {slide.location}
            </p>
          )}
          <div className="py-4">
            <h2>{balanceText(slide.name, "top")}</h2>
            <h2>{balanceText(slide.name, "bottom")}</h2>
          </div>
          <h3>{slide.role}</h3>
          <Link className="border-b pt-20 mx-auto text-sm py-2 border-stone-300">
            VIEW PROJECT
          </Link>
        </div>
        <div ref={right.ref} className="photo-wrapper right-wrapper z-10 ">
          <div ref={rightPhoto.ref} className="right-photo">
            <img src={slide.featurePhoto.url} alt="" className="h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedFeaturedSection;
