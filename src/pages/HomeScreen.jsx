import React, { useEffect, useState } from "react";
import MainHero from "../components/MainHero";
import FeaturedSlideshow from "../components/FeaturedSlideshow";
import { getProjects } from "../services/projectServices";
import LogoCloud from "../components/LogoCloud";
import HomeAbout from "../components/HomeAbout";

const HomeScreen = ({data}) => {

 
  return (
    <div>
      <MainHero />
      <HomeAbout />
      {/* <LogoCloud /> */}
      <FeaturedSlideshow />
    </div>
  ) 
};

export default HomeScreen;
