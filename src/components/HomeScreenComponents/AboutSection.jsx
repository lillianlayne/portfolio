import React, { useEffect, useRef, useState } from "react";

const AboutSection = () => {

  return (
    <div className="container h-1/2 mb-24 relative p-[1px] bg-stone-700 rounded-3xl">
      <div className="w-full h-full bg-stone-800 rounded-3xl flex items-center justify-center px-10">
      <h2 className="w-full py-24 px-16 text-balance text-center text-3xl font-thin z-20 relative">
          i'm a versitile UI/Ux{" "}
          <span className="font-serif font-medium italic text-4xl">
            Art Director and Front-End Developer,{" "}
          </span>{" "}
          blending creative design with robust development skills. my background
          in{" "}
          <span className="font-serif font-medium italic text-4xl">
            {" "}
            art and marketing,{" "}
          </span>{" "}
          combined with hands-on experience in e-commerce, allows me to bring
          brands' visions to life through{" "}
          <span className="font-serif font-medium italic text-4xl">
            {" "}
            innovative design and seamless development.{" "}
          </span>
        </h2>
      </div>
     
    </div>
  );
};

// const AboutSection = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const divRef = useRef(null);

//   const beforeAnimate = "h-full aspect-square bg-lightblue rounded-[100%] invisible"
//   const animate = "h-[1000%] aspect-square bg-lightblue rounded-[100%] visibile animate-fill-animation"

//  const handleAnimation = (e) => {
//   const divVisible = divRef.current.checkVisibility()
   
//   if (divVisible) {
//     setScrolling(true)
//   }
//  }
 
//  useEffect(() => {
//    window.addEventListener('scroll', handleAnimation)
//    return () => {
//      window.removeEventListener('scroll', handleAnimation)
     
//    }
//  }, [])
//   return (
//     <div ref={divRef} className="container h-1/2 mt-24 mb-24">
//       <div className="rounded-3xl text-stone-900 relative overflow-hidden">
//         <div className="absolute h-full w-full transform-centerz-10 flex items-center justify-center">
//           <div className={scrolling ? animate : beforeAnimate}></div>
//         </div>
        // <h2 className="w-full py-24 px-16 text-balance text-center text-3xl font-thin z-20 relative">
        //   i'm a versitile UI/Ux{" "}
        //   <span className="font-serif font-medium italic text-4xl">
        //     Art Director and Front-End Developer,{" "}
        //   </span>{" "}
        //   blending creative design with robust development skills. my background
        //   in{" "}
        //   <span className="font-serif font-medium italic text-4xl">
        //     {" "}
        //     art and marketing,{" "}
        //   </span>{" "}
        //   combined with hands-on experience in e-commerce, allows me to bring
        //   brands' visions to life through{" "}
        //   <span className="font-serif font-medium italic text-4xl">
        //     {" "}
        //     innovative design and seamless development.{" "}
        //   </span>
        // </h2>
//       </div>
//     </div>
//   );
// };
export default AboutSection;
