import React, { useEffect, useState } from "react";
import projects from "../../data/projects";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const OtherProjects = ({ data }) => {
  const [moreProjects, setMoreProjects] = useState(null);
  const [currOne, setCurrOne] = useState(null);
  const [count, setCount] = useState(0)

  const findProjects = (id) => {
    const otherProjects = projects.filter((obj) => {
      return obj.id !== id;
    });
    setMoreProjects(otherProjects);
  };

  useEffect(() => {
    findProjects(data.id);
    setCount(0) 
    return () => {
      setCount(0)
    }
  }, []);

  useEffect(() => {
    if (moreProjects) {
      setCurrOne(moreProjects[0]);
    }
  }, [moreProjects])

  const nextOne = (e) => {
    e.preventDefault()
    if (count < moreProjects.length - 1) {
      setCount(prev => prev + 1)
    } else {
      setCount(0)
    }

    setCurrOne(moreProjects[count])
  };

  const prevOne = (e) => {
    e.preventDefault()
    if (count === 0) {
      setCount(moreProjects.length - 1)
    } else {
      setCount(prev => prev - 1)
    }

    setCurrOne(moreProjects[count])
  };

  return moreProjects ? (
    <div className="container flex flex-col gap-8">
      <div className="w-full border-b border-stone-600">
        <p>other work</p>
      </div>
      <div className="w-full flex gap-8 overflow-hidden relative">
        <div
          onClick={prevOne}
          className="absolute left-0 bottom-1/2 cursor-pointer"
        >
          <BsArrowLeft className="size-6 pointer-events-none" />
        </div>
        <div
          onClick={nextOne}
          className="absolute right-0 bottom-1/2 cursor-pointer"
        >
          <BsArrowRight className="size-6 pointer-events-none" />
        </div>
          <div className="py-4 text-center w-full flex-shrink-0">
            <h2 className="font-serif text-xl pointer-events-none">{currOne?.name}</h2>
            <p className="pb-4 pointer-events-none">{currOne?.role}</p>
            <Link
              to={`/project/${currOne?.url}`}
              className="text-xs uppercase tracking-widest border-b pb-2"
            >
              view project
            </Link>
          </div>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default OtherProjects;
