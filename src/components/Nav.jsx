import React, {useEffect, useState, useRef} from "react";
import { NavLink } from "react-router-dom";
import { IoSunny, IoMoon } from "react-icons/io5";

const Nav = ({scrolling}) => {
  
  let navStyle;
  if (scrolling) {
    navStyle = "fixed py-4 px-8 sm:px-16 flex justify-between transform-top backdrop-blur bg-stone-900 items-center z-50 transition-all w-full"
  } else {
    navStyle = "fixed transform-top py-4 px-8 sm:px-16 flex justify-between backdrop-blur bg-stone-900 items-center z-50 transition-all w-full invisible"
  }



  return (
    <div className={navStyle}>
      <div className="logo text-lg font-serif ">
        <NavLink to="/">

        <em>lilli</em>an
        </NavLink>
      </div>
      <div className="flex gap-4 font-sans text-sm">
        <NavLink to="/selectedworks">
          <h6 className="font-thin hover:italic">selected works</h6>
        </NavLink>
        <NavLink to="/casestudies"> 
          <h6 className="font-thin hover:italic">case studies</h6>
        </NavLink>
        <NavLink to="/about">
          <h6 className="font-thin hover:italic">about</h6>
        </NavLink>
 
      </div>
    </div>
  );
};

export default Nav;
