import React, { useEffect, useState } from "react";
import MainHero from "../components/HomeScreenComponents/MainHero";
import Footer from "../components/Footer";
import FeaturedSlideshow from "../components/FeaturedSlideshow";
import projects from "../data/projects";



const HomeScreen = ({ data }) => {
  const slides = [projects[0], projects[1], projects[2]];
  return (
    <div>
        <MainHero />
        <FeaturedSlideshow />
      {/* <AboutSection />
      <SelectedWorksSection /> */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
