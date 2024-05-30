import React from "react";
import SpinWheel from "./SpinWheel";

const MainHero = () => {
  return (
    <div className="h-screen container flex flex-col py-24 relative items-center justify-between">
      <div className="w-full hidden sm:flex flex-col sm:flex-row gap-4 sm:gap-24">
        <div className="border-t py-4 border-stone-600 w-fit">
          <p>
            based in Chattanooga, TN <br /> <em>available worldwide</em>
          </p>
          <p></p>
        </div>
        <div className="border-t py-4 border-stone-600 w-fit">
          <p>
            +6 professional years <br /> <em>in the industry</em>
          </p>
          <p></p>
        </div>
      </div>
      <div className="w-full flex justify-end">
              <SpinWheel />
            </div>
      <div className="relative sm:absolute md:container lg:w-3/4 sm:transform-center flex flex-col">
        <div className="flex gap-8 items-end justify-between sm:justify-center">
          <h1>
            <em>Where</em>
          </h1>
          <p className="pb-10 sm:pb-0 text-right sm:text-left text-balance">
            I bridge the gap between design <br className="hidden sm:block" />
            and development, crafting intuitive <br className="hidden sm:block"/>
            user interfaces and building responsive <br className="hidden sm:block"/>
            web applications with precision and creativity.
          </p>
        </div>
        <div className="flex gap-16 justify-start w-full">
          <h1>
            Creativity <em>and</em>
          </h1>
        </div>
        <div className="flex gap-16 justify-end">
          <h1>Development</h1>
        </div>
        <div className="flex gap-8 items-start sm:items-end justify-between sm:justify-center">
              <p className="text-left sm:text-right pt-10 sm:pt-0">
                Specializing in <br /> web design, ui/ux, and <br />
                front End development
              </p>
              <h1>
                <em>Meet</em>
              </h1>
            
        </div>
      </div>
    </div>
  );
};

// return (
//   <div className="h-screen w-full flex items-center justify-center relative flex-col">
// <div className="flex gap-24 container justify-start absolute top-40 font-thin text-sm leading-tight">
// <div className="border-t py-4 border-stone-600">
//   <p>
//     based in Chattanooga, TN <br /> <em>available worldwide</em>
//   </p>
//   <p></p>
// </div>
// <div className="border-t py-4 border-stone-600">
//   <p>
//     +6 professional years <br /> <em>in the industry</em>
//   </p>
//   <p></p>
// </div>
// </div>
//     <div className="absolute bottom-32 flex justify-end w-full">
//       <SpinWheel />
//     </div>
//     <div className="grid grid-cols-12 grid-rows-4">
//       <h1 className="text-[800%] font-serif italic col-span-6 row-start-1 col-start-4">
//         creative
//       </h1>
//       <h1 className="font-sans row-start-2 col-span-9 col-start-3 flex items-end">
//         DEVELOPER <span className="font-serif italic">&amp;</span>
//       </h1>
//       <h1 className="font-sans col-span-8 row-start-3 col-start-4 flex gap-2 items-end">
//         DESIGNER
//         <p className="font-sans uppercase text-xs">
// Specializing in <br /> web design, ui/ux, and <br />
// front End development
//         </p>
//       </h1>
//       <div className="row-start-4"></div>
//     </div>

//   </div>
// );

export default MainHero;
