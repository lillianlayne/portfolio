import React, { useEffect, useState } from "react";
import projects from "../../data/projects";
import { Link, Navigate, useNavigate } from "react-router-dom";



const OtherProjects = ({ data }) => {
  const [moreProjects, setMoreProjects] = useState(null);

  const findProjects = (id) => {
    const otherProjects = projects.filter((obj) => {
      return obj.id !== id;
    });
    setMoreProjects(otherProjects);
  };


  useEffect(() => {
    findProjects(data.id);
  }, []);


  return moreProjects ? (
    <div className="container flex flex-col">
      <div className="w-full border-b border-stone-600">
        <p>
          other work
          </p>
      </div>
      <div className="w-full flex gap-8">

      {moreProjects.map((project, idx) => (
        <div key={idx}>
          <Link to={`/project/${project.url}`}>

          <h2 className="font-serif text-xl">
            {project.name}
          </h2>
          </Link>
        </div>
      ))}
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default OtherProjects;
