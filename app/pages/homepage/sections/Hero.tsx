import classNames from 'classnames';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLogoHeight, useWindowDimensions } from '~/lib/hooks';
import settings from './settings.json';

export const Hero = () => {
  const { hero } = settings;
  const { titleList, mainDescription, location, experience } = hero;
  const { windowHeight, windowWidth } = useWindowDimensions();
  const { logoHeight } = useLogoHeight();

  const { scrollY, scrollYProgress } = useScroll();
  const paddingTop = useTransform(
    scrollYProgress,
    [0, 1],
    [logoHeight * 1.5, 0],
  );
  const height = useTransform(
    scrollYProgress,
    [0, 1],
    [windowHeight - logoHeight * 1.5, 0],
  );

  return (
    <motion.div
      className='sticky top-0 flex h-screen w-full items-start justify-center'
      style={{ paddingTop }}
    >
      <motion.div
        style={{ height }}
        className='flex h-full w-full max-w-screen-xl flex-col items-center justify-between pb-12'
      >
        <div className='flex w-full max-w-sm flex-col items-center justify-center'>
          {titleList.map((title, idx) => (
            <h1
              key={title}
              className={classNames(
                'text-primary-300 w-full text-2xl font-semibold tracking-tight',
                idx === 0 && 'text-center',
                idx === 1 && 'text-left',
                idx === 2 && 'text-right',
              )}
            >
              <span className='font-serif text-sm font-light italic tracking-wide'>
                (0{idx + 1})
              </span>{' '}
              {title}
            </h1>
          ))}
        </div>
        <div className='h-96 w-[1px] py-4'>
          <div className='bg-primary-300 h-full w-full'></div>
        </div>
        <div className='max-w-screen-sm'>
          <p className='text-balance text-center'>{mainDescription}</p>
        </div>
        <div className='flex w-full justify-between'>
          <p className='text-primary-300 font-text-serif font-thin italic'>
            {location}
          </p>
          <p className='text-primary-300 font-text-serif font-thin italic'>
            {experience}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
