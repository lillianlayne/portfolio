import React from "react";

const MainHero = () => {
  return (
    <div className="container flex items-end">
      <div className="flex flex-col md:flex-row items-end gap-10">
        <h1 className="font-serif text-[100px] leading-[80%] lg:text-[200px]">
          Creative <br />
          Developer.
        </h1>
        <div className="flex items-end w-full h-full">
          <p className="font-medium leading-tight text-sm sm:text-base">
            Specializing in <br />
            Web Design, UI/UX, and <br />
            Front End Development
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default MainHero;
