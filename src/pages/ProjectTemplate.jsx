import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import ProjectBanner from "../components/ProjectTemplate/ProjectBanner";
import PhotoGridLarge from "../components/ProjectTemplate/PhotoGridLarge";
import OtherProjects from "../components/ProjectTemplate/OtherProjects";
import Footer from "../components/Footer";





const ProjectTemplate = () => {
  const {id} = useParams();
  const [project, setProject] = useState(null)

  const findProject = (string) => {
    const foundProject = projects.find(obj => obj.url === id)
    setProject(foundProject)

  }
 

  useEffect(() => {
    findProject(id)
  }, [id])


  return project ? (
    <div className="w-screen">
      <ProjectBanner data={project}/>
      <PhotoGridLarge images={project.images} copy={project.copy} />
      <OtherProjects data={project}/>
      <Footer />
    </div>
  ) : <div>loading</div>
};

export default ProjectTemplate;
