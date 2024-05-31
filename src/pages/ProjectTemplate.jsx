import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import ProjectBanner from "../components/ProjectTemplate/ProjectBanner";
import PhotoGridLarge from "../components/ProjectTemplate/PhotoGridLarge";
import OtherProjects from "../components/ProjectTemplate/OtherProjects";




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
    <div className="pt-24">
      <ProjectBanner data={project}/>
      <PhotoGridLarge />
      <OtherProjects data={project}/>
    </div>
  ) : <div>loading</div>
};

export default ProjectTemplate;
