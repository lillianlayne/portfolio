import React from "react";

const MainHero = () => {
  return (
    <div
      className="w-screen container h-screen pb-10 pt-10 flex
    flex-col sm:justify-between"
    >
      <div className="flex w-full pt-10 lg:pt-20 justify-end">
        <p className="font-sans font-thin lg:w-[40%] xl:text-2xl">
          A versitile UI/UX Art Director and Front-End Developer, blending creative design with robust development skills. My background in art and marketing, combined with hands-on experience in e-commerce, allows me to bring brands' visions to life through innovative design and seamless development. As both a designer and developer, I deliver comprehensive solutions that enhance user experiences and drive results. 
        </p>
      </div>
      <div className="flex mt-36 items-end">
        <div className="flex items-end">
          <h1 className="font-serif leading-none text-[600%] sm:text-[1000%] lg:text-[1500%]">
            <em>lilli</em>an.
          </h1>
        </div>
        <div className="flex items-end p-2 pl-4 sm:p-6">
          <p className="font-medium leading-tight text-sm sm:text-base">
            blending UI/UX <br />design and development
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
