import classNames from 'classnames';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';
import settings from '../settings.json';
import { ProjectCard } from './components/ProjectCard';

export const SelectedWorks = () => {
  const { projects } = settings;

  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headerScroll, scrollY } = useScroll({
    target: headerRef,
  });

  const y = useTransform(
    headerScroll,
    [0, 0.2, 0.7, 1],
    ['0vh', '0vh', '0vh', '0vh'],
  );

  // row-start-1 row-start-2 row-start-3 row-start-4 row-start-5 row-start-6
  // col-start-1 col-start-2 col-start-3 col-start-4 col-start-5 col-start-6 col-start-7 col-start-8 col-start-9 col-start-10 col-start-11 col-start-12
  // col-span-1 col-span-2 col-span-3 col-span-4

  useEffect(() => {
    if (!headerRef.current) return;
    console.log(scrollY);
  }, [scrollY]);

  return (
    <div className='relative max-w-screen-xl'>
      {/* section title */}
      <motion.div
        style={{ y }}
        className='sticky left-1/2 top-1/4 z-10 flex -translate-x-1/2 -translate-y-1/2 transform flex-col pt-24 text-center'
        ref={headerRef}
      >
        <h1 className='font-mono text-[180px] uppercase leading-none text-primary-100'>
          selected
        </h1>
        <h1 className='-mt-16 font-serif text-[150px] font-thin italic leading-none text-primary-100'>
          Works
        </h1>
      </motion.div>
      {/* project cards */}
      <div className='sticky z-20 grid grid-cols-12 px-4 py-[40vh] xl:px-0'>
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className={classNames(
              `col-span-${project.span}`,
              `row-start-${idx + 1}`,
              `col-start-${project.col}`,
            )}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};
