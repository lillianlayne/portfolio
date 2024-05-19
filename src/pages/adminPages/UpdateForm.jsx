import { useState, useEffect } from "react";
import React from "react";
import {
  getSingleProject,
  updateProject,
} from "../../services/projectServices";

const UpdateForm = ({ id }) => {
  const [form, setForm] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    tags: [],
    photos: [],
    role: "",
    company: "",
    featuredPhoto: "",
  });
  const [click, setClick] = useState(0);

  const fetchProject = async () => {
    const data = await getSingleProject(id);
    setForm(data);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormValues(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    let data;
    if (e.target.value === 'tags') {
      data = { [e.target.value]: formValues.split(', ') };

    } else {

      data = { [e.target.value]: formValues };
    }
    try {
      updateProject(id, data);
      setClick((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const string = (array) => {
    return array.join(", ");
  };
  useEffect(() => {
    fetchProject();
  }, [id, click]);

  useEffect(() => {
    if (form) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [form]);

  return loaded ? (
    <div className="pb-20">
      <h1 className="text-2xl">Project: {form.name}</h1>
      <div className="w-full flex flex-col gap-8 mt-8">
        <div className="flex w-full flex-col">
          <div className="border-b w-full flex justify-between items-center border-stone-400">
            <input
              className="font-thin py-2  bg-transparent text-stone-900 placeholder:text-stone-400 w-full outline-none"
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder={form.name}
            />
            <button
              value="name"
              className="text-xs border rounded-md px-2 h-fit py-1 border-yellow-900 text-yellow-900"
              onClick={handleSave}
            >
              save
            </button>
          </div>
          <label className="text-xs text-stone-400" htmlFor="description">
            description
          </label>
        </div>
        <div className="flex w-full flex-col">
          <div className="border-b pb-2 w-full flex flex-col gap-2 justify-start items-start border-stone-400">
            <textarea
              className="border rounded-md font-thin p-2 h-24 flex items-start justify-start border-stone-400 bg-transparent text-stone-900 placeholder:text-stone-400 w-full outline-none"
              type="text"
              name="description"
              value={formValues.description}
              onChange={handleChange}
              placeholder={form.description}
            />
            <button
              value="description"
              className="text-xs border rounded-md px-2 h-fit py-1 border-yellow-900 text-yellow-900"
              onClick={handleSave}
            >
              save
            </button>
          </div>
          <label className="text-xs text-stone-400" htmlFor="description">
            project description
          </label>
        </div>
        <div className="flex w-full flex-col">
          <div className="border-b w-full flex justify-between items-center border-stone-400">
            <input
              className="font-thin py-2  bg-transparent text-stone-900 placeholder:text-stone-400 w-full outline-none"
              type="text"
              name="tags"
              value={formValues.tags}
              onChange={handleChange}
              placeholder={string(form.tags)}
            />
            <button
              value="tags"
              className="text-xs border rounded-md px-2 h-fit py-1 border-yellow-900 text-yellow-900"
              onClick={handleSave}
            >
              save
            </button>
          </div>
          <label className="text-xs text-stone-400" htmlFor="name">
            tags
          </label>
        </div>
        <div className="flex w-full flex-col">
          <div className="border-b w-full flex justify-between items-center border-stone-400">
            <input
              className="font-thin py-2  bg-transparent text-stone-900 placeholder:text-stone-400 w-full outline-none"
              type="text"
              name="photos"
              value={formValues.photos}
              onChange={handleChange}
              placeholder={form.photos}
            />
            <button
              value="photos"
              className="text-xs border rounded-md px-2 h-fit py-1 border-yellow-900 text-yellow-900"
              onClick={handleSave}
            >
              save
            </button>
          </div>
          <label className="text-xs text-stone-400" htmlFor="name">
            photos
          </label>
        </div>
        <div className="flex w-full flex-col">
          <div className="border-b w-full flex justify-between items-center border-stone-400">
            <input
              className="font-thin py-2  bg-transparent text-stone-900 placeholder:text-stone-400 w-full outline-none"
              type="text"
              name="role"
              value={formValues.role}
              onChange={handleChange}
              placeholder={form.role}
            />
            <button
              value="role"
              className="text-xs border rounded-md px-2 h-fit py-1 border-yellow-900 text-yellow-900"
              onClick={handleSave}
            >
              save
            </button>
          </div>
          <label className="text-xs text-stone-400" htmlFor="name">
            role
          </label>
        </div>
        <div className="flex w-full flex-col">
          <div className="border-b w-full flex justify-between items-center border-stone-400">
            <input
              className="font-thin py-2  bg-transparent text-stone-900 placeholder:text-stone-400 w-full outline-none"
              type="text"
              name="company"
              value={formValues.company}
              onChange={handleChange}
              placeholder={form.company}
            />
            <button
              value="company"
              className="text-xs border rounded-md px-2 h-fit py-1 border-yellow-900 text-yellow-900"
              onClick={handleSave}
            >
              save
            </button>
          </div>
          <label className="text-xs text-stone-400" htmlFor="name">
            compnay
          </label>
        </div>
        <div className="flex w-full flex-col">
          <div className="border-b w-full flex justify-between items-center border-stone-400">
            <input
              className="font-thin py-2  bg-transparent text-stone-900 placeholder:text-stone-400 w-full outline-none"
              type="text"
              name="featuredPhoto"
              value={formValues.featuredPhoto}
              onChange={handleChange}
              placeholder={form.featuredPhoto}
            />
            <button
              value="featuredPhoto"
              className="text-xs border rounded-md px-2 h-fit py-1 border-yellow-900 text-yellow-900"
              onClick={handleSave}
            >
              save
            </button>
          </div>
          <label className="text-xs text-stone-400" htmlFor="name">
            featured photo{" "}
          </label>
        </div>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default UpdateForm;
