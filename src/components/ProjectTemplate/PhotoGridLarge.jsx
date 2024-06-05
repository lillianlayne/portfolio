import React from "react";
import FullImage from "../ImageComponents/FullImage";
import SplitScreenImage from "../ImageComponents/SplitScreenImage";

const PhotoGridLarge = ({ images, copy }) => {
  return (
    <div className="flex flex-col gap-24 py-24">
      <div>
        <FullImage url={images?.feature.url} />
        <div className="container px-28 w-3/4 mx-auto flex items-center justify-between font-serif  tracking-wide">
          <p>deliverables</p>
          <div className="italic text-xl">{copy?.deliverables}</div>
        </div>
      </div>
      <SplitScreenImage
        first={images?.splitOne.url}
        second={images?.splitTwo.url}
      />
      <FullImage url={images?.fullOne.url} />
    </div>
  );
};

export default PhotoGridLarge;
