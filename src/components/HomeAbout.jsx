import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className="container flex md:flex-row flex-col gap-10 justify-between">
      <div className="flex flex-col gap-10">
        <div className="md:w-3/4 font-thin text-sm md:text-base">
          I'm a versitile UI/UX Art Director and Front-End Developer, blending
          creative design with robust development skills. My background in art
          and marketing, combined with hands-on experience in e-commerce, allows
          me to bring brands' visions to life through innovative design and
          seamless development. As both a designer and developer, I deliver
          comprehensive solutions that enhance user experiences and drive
          results.
        </div>

        <button className="btn-primary">Drop a line.</button>
      </div>
      <div className="w-full flex md:justify-end">
        <div>
          <div className="subtitle w-full items-center md:items-start gap-2 flex md:flex-col">
            <p className="border-b hidden md:flex w-full py-1 border-stone-300">
              Let's Connect
            </p>
           <a className="font-serif" href="www.linkedin.com/in/lillianlayne" target="_blank" >/ LinkedIn</a>
           <a className="font-serif" href="www.linkedin.com/in/lillianlayne" target="_blank" >/ GitHub</a>
           <a className="font-serif" href="www.linkedin.com/in/lillianlayne" target="_blank" >/ CodePen</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
