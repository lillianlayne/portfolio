import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="py-4 px-8 sm:px-16 flex justify-between fixed w-full">
      <div className="logo text-lg font-serif ">
        <NavLink to="/">

        <em>lilli</em>an
        </NavLink>
      </div>
      <div className="flex gap-4 font-sans text-sm">
        <NavLink to="/selectedworks">
          <p className="font-thin hover:italic">selected works</p>
        </NavLink>
        <NavLink to="/casestudies"> 
          <p className="font-thin hover:italic">case studies</p>
        </NavLink>
        <NavLink to="/about">
          <p className="font-thin hover:italic">about</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
