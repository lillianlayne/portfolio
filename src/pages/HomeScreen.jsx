import React, { useEffect, useState } from "react";
import MainHero from "../components/MainHero";
import FeaturedSlideshow from "../components/FeaturedSlideshow";
import { getProjects } from "../services/projectServices";
import LogoCloud from "../components/LogoCloud";
import HomeAbout from "../components/HomeAbout";

const HomeScreen = ({ data }) => {
  return (
    <div>
      <div className="h-screen flex flex-col gap-24 justify-end pb-24">
        <MainHero />
        <HomeAbout />
      </div>
      {/* <LogoCloud /> */}
      <FeaturedSlideshow />
    </div>
  );
};

export default HomeScreen;
