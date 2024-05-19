import React, { useState } from "react";
import { createProject } from "../../services/projectServices";

const CreateForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    tags: [],
    photos: [],
    role: "",
    company: "",
    featuredPhoto: "",
  });
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name: formValues.name,
        description: formValues.description,
        tags: formValues.tags.split(', '),
        photos: formValues.photos,
        role: formValues.role,
        company: formValues.company,
        featuredPhoto: formValues.featuredPhoto,
      };
      createProject(formData)

      setFormValues({
        name: "",
        description: "",
        tags: [],
        photos: [],
        role: "",
        company: "",
        featuredPhoto: "",
      })
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <h1 className="text-2xl text-stone-700 mb-10">New Project</h1>
      <form className=" flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="w-full">
          <input
            className="border-b font-thin py-2 border-stone-400 bg-transparent text-stone-900 placeholder:text-stone-400 w-full outline-none"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Project Name"
          />
          <label className="text-xs text-stone-400" htmlFor="name">
            project name
          </label>
        </div>
        <div className="w-full">
          <input
            className="border rounded-md font-thin p-2 h-24 flex items-start justify-start border-stone-400 bg-transparent text-stone-900 placeholder:text-stone-400 w-full outline-none"
            type="text"
            name="description"
            value={formValues.description}
            onChange={handleChange}
            placeholder="Project Description"
          />
          <label className="text-xs text-stone-400" htmlFor="description">
            project description
          </label>
        </div>
        <div className="w-full">
          <input
            className="border-b font-thin py-2 border-stone-400 bg-transparent text-stone-900 placeholder:text-stone-400 w-full outline-none"
            type="text"
            name="tags"
            value={formValues.tags}
            onChange={handleChange}
            placeholder="ex: ui/ux, react, figma"
          />
          <label className="text-xs text-stone-400" htmlFor="tags">
            tags, seperated by commas
          </label>
        </div>
        <div className="w-full">
          <input
            className="border-b font-thin py-2 border-stone-400 bg-transparent text-stone-900 placeholder:text-stone-400 w-full outline-none"
            type="text"
            name="company"
            value={formValues.company}
            onChange={handleChange}
            placeholder="company name"
          />
          <label className="text-xs text-stone-400" htmlFor="company">
            compnay name
          </label>
        </div>
        <div className="w-full">
          <input
            className="border-b font-thin py-2 border-stone-400 bg-transparent text-stone-900 placeholder:text-stone-400 w-full outline-none"
            type="text"
            name="role"
            value={formValues.role}
            onChange={handleChange}
            placeholder="ex: art director, developer, lead designer"
          />
          <label className="text-xs text-stone-400" htmlFor="role">
            role
          </label>
        </div>
        <button className="p-4 bg-yellow-950 text-white w-1/2 rounded-lg" type="submit" onClick={handleSubmit}>save</button>
      </form>
    </div>
  );
};

export default CreateForm;
