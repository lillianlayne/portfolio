import classNames from 'classnames';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { NavBar } from '~/components';
import { useLogoHeight, useWindowDimensions } from '~/lib/hooks';
import settings from './settings.json';

export const Hero = () => {
  const { hero } = settings;
  const { titleList, mainDescription, location, experience } = hero;
  const { windowHeight, windowWidth } = useWindowDimensions();
  const { logoHeight } = useLogoHeight();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll();

  const paddingTop = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [logoHeight, logoHeight, 0],
  );
  const height = useTransform(scrollYProgress, [0, 1], ['100%', 0]);

  const containerHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [windowHeight, 0],
  );

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['60%', '30%', '10%'],
  );

  return (
    <motion.div
      ref={ref}
      className={classNames(
        'top-0 flex h-screen w-full items-start justify-center',
      )}
      // style={{ height: containerHeight }}
    >
      <NavBar reference={ref} />
      <motion.div
        // style={{ height, paddingTop }}
        className='flex h-full w-full max-w-screen-xl flex-col items-center justify-between pb-12 pt-60'
      >
        <div className='flex w-full max-w-sm flex-col items-center justify-center'>
          {titleList.map((title, idx) => (
            <h1
              key={title}
              className={classNames(
                'w-full text-2xl font-semibold tracking-tight text-primary-300',
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
        <motion.div
          className='h-96 w-[1px] py-4'
          // style={{ height: lineHeight }}
        >
          <div className='h-full w-full bg-primary-300'></div>
        </motion.div>
        <div className='max-w-screen-sm'>
          <p className='text-balance text-center'>{mainDescription}</p>
        </div>
        <div className='flex w-full justify-between'>
          <p className='font-text-serif font-thin italic text-primary-300'>
            {location}
          </p>
          <p className='font-text-serif font-thin italic text-primary-300'>
            {experience}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
