import React, { useEffect, useState } from "react";
import Form from "./adminPages/Form";
import CreateForm from "./adminPages/CreateForm";
import { getProjects } from "../services/projectServices";
import UpdateForm from "./adminPages/UpdateForm";
const AdminScreen = () => {
  const [form, setForm] = useState(null);
  const [projects, setProjects] = useState([]);
  const [id, setId] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    setForm("create");
  };

  const handleForm = (e) => {
    setId(e.target.value);

    setForm("update");
  };

  let formView;

  if (form === "create") {
    formView = <CreateForm />;
  }
  if (form === "update") {
    formView = <UpdateForm id={id} />;
  }

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };
  useEffect(() => {
    fetchProjects();
  }, []);


  return (
    <div className="w-screen h-screen p-48 grid gap-10 grid-cols-9">
      <div className="col-span-2 flex flex-col gap-4">
        <p className="text-xs uppercase border-b pb-2 border-stone-300">
          projects
        </p>
        <div className="flex flex-col gap-2 h-fit w-fit">
          {projects.map((project) => (
            <button
              className="w-full cursor-pointer text-left text-sm "
              key={project._id}
              value={project._id}
              onClick={handleForm}
            >
             <p className="pointer-events-none">
              {project.name}
              </p> 
            </button>
          ))}
        </div>
        <div
          onClick={handleClick}
          className="text-sm w-full flex justify-between text-stone-400"
        >
          <p>add project</p>
          <p>+</p>
        </div>
      </div>
      <div className="col-span-7 px-10">{formView}</div>
    </div>
  );
};

export default AdminScreen;
