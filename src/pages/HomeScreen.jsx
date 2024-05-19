import React, { useEffect, useState } from "react";
import MainHero from "../components/MainHero";
import FeaturedSlideshow from "../components/FeaturedSlideshow";
import { getProjects } from "../services/projectServices";

const HomeScreen = () => {
  const [projects, setProjects] = useState();

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div>
      <MainHero />
      {projects ? (
        <FeaturedSlideshow projects={projects} />
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default HomeScreen;
