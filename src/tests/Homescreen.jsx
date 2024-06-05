import React, { useEffect, useState } from "react";
import MainHero from "../components/MainHero";
import FeaturedSlideshow from "../components/FeaturedSlideshow";
import { getProjects } from "../services/projectServices";
import LogoCloud from "../components/LogoCloud";
import HomeAbout from "../components/HomeAbout";
import AnimatedFeaturedSection from "../components/AnimatedFeaturedSection";
import projects from "../data/projects";

const HomeScreen = ({ data }) => {
  const slides = [projects[0], projects[1], projects[2]];
  return (
    <div className="pt-24 md:pb-0 md:pt-0">
      <div className="h-screen flex flex-col md:gap-24 justify-between md:justify-end md:pb-24 pb-36">
        <MainHero />
        <HomeAbout />
      </div>
      {slides.map((slide, idx) => (
        <AnimatedFeaturedSection key={idx} slide={slide} />
      ))}
    </div>
  );
};

export default HomeScreen;
<div className="w-full h-screen grid grid-cols-12 grid-rows-9">
<div className="row-start-1 col-span-full ">
  <div className="flex w-full justify-end text-right gap-8 text-stone-600">
    {data.content.skills.map((skill, idx) => (
      <div key={idx} className="size-12 object-cover">
                 <SkillsSvg type={skill}/>

      </div>
    ))}
  </div>
</div>
<div className="row-start-3 row-span-5 col-start-1 col-span-6 flex flex-col justify-between z-20">
  <div className="flex justify-start gap-2">
    <div className="h-fit p-2 bg-lightblue rounded-full flex items-center justify-center">
      <p className=" text-stone-900 leading-none">{data.role}</p>
    </div>
    <div className="h-fit p-2 border-lightblue border rounded-full flex items-center justify-center">
      <p className=" text-lightblue leading-none">{data.featureTag}</p>
    </div>
    <div className="h-fit p-2 border-lightblue border rounded-full flex items-center justify-center">
      <p className=" text-lightblue leading-none">{data.year}</p>
    </div>
  </div>
  <div>
    <div className="flex flex-col">
      <h1>{data.name}</h1>
    </div>
    <p className="py-8 w-3/4">{data.content.mainDescription}</p>
  {liveSiteBtn}
  </div>
</div>
<div className="row-start-2 row-span-3 col-start-5 col-span-9 w-full overflow-hidden object-cover ">
  <div className="h-full w-full object-cover ">
    <img
      src={data.featurePhoto.url}
      alt=""
      className="h-full w-full object-cover object-bottom"
    />
  </div>
</div>
</div>