import React, { useEffect, useState } from "react";
import MainHero from "../components/MainHero";
import FeaturedSlideshow from "../components/FeaturedSlideshow";
import { getProjects } from "../services/projectServices";
import LogoCloud from "../components/LogoCloud";
import HomeAbout from "../components/HomeAbout";

const HomeScreen = () => {
  const [projects, setProjects] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [projects]);


  return loaded ? (
    <div>
      <MainHero />
      <HomeAbout />
      {/* <LogoCloud /> */}
      <FeaturedSlideshow projects={projects} />
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default HomeScreen;
