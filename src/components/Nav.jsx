import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { IoSunny, IoMoon } from "react-icons/io5";

const Nav = () => {
  const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }


  return (
    <div className="py-4 px-8 sm:px-16 flex justify-between backdrop-blur bg-stone-900 items-center z-50 fixed w-full">
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
        <button onClick={()=> darkModeHandler()}>
      {
          
          dark && <IoSunny /> // render sunny when dark is true
      }
      {
          !dark && <IoMoon /> // render moon when dark is false
      }
 </button>
      </div>
    </div>
  );
};

export default Nav;
