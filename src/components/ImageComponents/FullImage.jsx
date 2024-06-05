import React from "react";
import { Parallax } from "react-scroll-parallax";

const FullImage = ({ url }) => {
  return (
    <div className="container">
      <img
        src={url}
        alt=""
        className="object-cover object-center w-3/4 mx-auto"
      />
    </div>
  );
};

export default FullImage;
