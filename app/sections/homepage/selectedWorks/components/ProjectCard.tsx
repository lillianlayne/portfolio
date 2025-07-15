import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface Project {
  title: string;
  description: string;
  year: string;
  roles: string[];
  ratio: string;
}

export const ProjectCard = ({
  title,
  description,
  year,
  roles,
  ratio,
}: Project) => {
  // aspect-[5/4] aspect-[1/1] aspect-[2/3] aspect-[4/5]  aspect-[4/3]
  const titleSplit = title.split(' ');
  const titleOne = titleSplit.shift();
  const titleTwo = titleSplit.slice(0, 1).join(' ');

  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end end'],
  });

  const y = {
    container: useTransform(scrollYProgress, [0, 1], [-260, 260]),
    title: useTransform(scrollYProgress, [0, 0.9, 1], ['-120%', '120%', '0%']),
  };

  return (
    <motion.div ref={cardRef} style={{ y: y.container }}>
      <div className={`w-full aspect-[${ratio}] rounded-2xl bg-primary-500`}>
        <motion.div className='p-4'>
          <p className='font-mono text-2xl'>{titleOne}</p>
          <p className='-mt-4 font-serif text-2xl font-thin italic'>
            {titleTwo}
          </p>
        </motion.div>
      </div>
      <div className='flex flex-col items-center justify-start'>
        <p className='pt-2 text-center font-serif text-primary-300'>{year}</p>
        <p className='max-w-96 text-balance pb-4 pt-2 text-center font-light'>
          {description}
        </p>

        <div className='flex items-center justify-center gap-4 text-center font-serif font-thin italic text-stone-300'>
          {roles.map((role) => (
            <div
              className='pl-2 text-sm tracking-widest text-primary-300'
              key={role}
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
