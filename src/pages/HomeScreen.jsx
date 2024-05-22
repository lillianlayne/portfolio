import React, { useEffect, useState } from "react";
import MainHero from "../components/MainHero";
import FeaturedSlideshow from "../components/FeaturedSlideshow";
import { getProjects } from "../services/projectServices";
import LogoCloud from "../components/LogoCloud";
import HomeAbout from "../components/HomeAbout";

const HomeScreen = ({ data }) => {
  return (
    <div className="pt-24 md:pb-0 md:pt-0">
      <div className="h-screen flex flex-col md:gap-24 justify-between md:justify-end md:pb-24 pb-36">
        <MainHero />
        <HomeAbout />
      </div>
      {/* <LogoCloud /> */}
      <FeaturedSlideshow />
    </div>
  );
};

export default HomeScreen;
