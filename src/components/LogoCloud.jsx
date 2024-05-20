import React from "react";
import { useEffect, useRef } from "react";

const LogoCloud = () => {
  const logos = [
    "figma",
    "photoshop",
    "blender",
    "illustrator",
    "dimesnsions",
    "lightroom",
    "html5",
    "javascript",
    "react",
    "shopify",
    "css",
  ];

  const ulRef = useRef(null);

  useEffect(() => {
    const ul = ulRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      const clone = ul.nextSibling;
      clone.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
   
      <div className="col-start-3 mx-auto flex flex-nowrap overflow-hidden py-16 px-6 w-screen md:pt-0 lg:max-w-full[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul ref={ulRef} className="flex mx-auto bg-transparent items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-horizontal-scroll">
        {logos.map((logo) => (
          <li key={logo}> 
            {logo}
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default LogoCloud;
