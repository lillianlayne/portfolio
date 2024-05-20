import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProject } from "../services/projectServices";

const ProjectTemplate = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [project, setProject] = useState(null);

  const fetchData = async (projId) => {
    const data = await getSingleProject(projId);
    setProject(data);
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  useEffect(() => {
    if (project) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [project]);

  return loaded ? (
    <div className="w-full container pt-20">
      <div className="w-full overflow-hidden rounded-lg aspect-[28/9]">
      <img src={project.featuredPhoto} alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="grid grid-cols-3 gap-12 mt-12">
        <div className="col-span-1">
          <h1>
            {project.name}
          </h1>
          <p className="role">
            {project.role}
          </p>
          <div className="flex gap-1 mt-8 flex-wrap">
            {project.tags.map((tag) => (
              <div key={tag} className="tag uppercase border rounded-full text-stone-400 border-stone-400 px-2">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <p className="mt-2">

          {project.description}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div>
      not loaded
    </div>
  )
};

export default ProjectTemplate;
