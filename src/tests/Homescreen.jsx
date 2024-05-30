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
