import React from "react";

const ProjectBanner = ({ data }) => {
  return (
    <div className="w-full h-screen grid grid-cols-12 grid-rows-9">
      <div className="row-start-1 col-span-full ">
        <div className="flex w-full justify-end text-right gap-24">
          {data.content.skills.map((skill, idx) => (
            <div key={idx} className="size-12 bg-stone-800">
              {/* logo image heere */}
            </div>
          ))}
        </div>
      </div>
      <div className="row-start-3 row-span-5 col-start-1 col-span-6 flex flex-col justify-between z-20">
        <div className="flex justify-start gap-2">
          <div className="h-fit p-2 bg-lightblue rounded-full flex items-center justify-center">
            <p className=" text-stone-900 leading-none">{data.role}</p>
          </div>
          <div className="h-fit p-2 border-lightblue border rounded-full flex items-center justify-center">
            <p className=" text-lightblue leading-none">{data.featureTag}</p>
          </div>
          <div className="h-fit p-2 border-lightblue border rounded-full flex items-center justify-center">
            <p className=" text-lightblue leading-none">{data.year}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <h1>{data.name}</h1>
          </div>
          <p className="py-8 w-3/4">{data.content.mainDescription}</p>
        </div>
      </div>
      <div className="row-start-2 row-span-6 col-start-5 col-span-9 w-full overflow-hidden object-cover ">
        <div className="h-full w-full object-cover ">
          <img
            src={data.featurePhoto.url}
            alt=""
            className="h-full w-full object-cover object-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
