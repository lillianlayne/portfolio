import { motion, useAnimate, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useHeroContext } from '~/lib/context';
import { useLogoHeight } from '~/lib/hooks';
import settings from '../settings.json';
import { DescriptionList, Flourish, SmallDescription } from './components';

export const Hero = () => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const { heroRef } = useHeroContext();
  const { scrollYProgress: bodyProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const { titleList } = settings.hero;

  const [scope, animate] = useAnimate();

  const [height, setHeight] = useState<string>('100vh');

  const { logoHeight } = useLogoHeight();
  const lineHeight = useTransform(
    bodyProgress,
    [0, 0.5, 1],
    [`100%`, `50%`, `0%`],
  );
  const paddingTop = `${logoHeight - 80}px`;

  // const animateEntrance = async () => {
  //   [...Array(titleList.length).fill(0)].map((item, idx) =>
  //     animate(
  //       `#description-${idx}`,
  //       { y: 0 },
  //       { delay: idx * 0.2, duration: 0.5 },
  //     ),
  //   );

  //   animate('#line', { y: 0 }, { delay: 1.5, duration: 0.5 });
  // };
  const animateEntrance = async () => {
    const titleAnimations = [...Array(titleList.length).fill(0)].map(
      (item, idx) =>
        animate(
          `#description-${idx}`,
          { y: 0 },
          { delay: idx * 0.2, duration: 0.5 },
        ),
    );

    await Promise.all(titleAnimations);
    await animate('#line', { y: 0 }, { duration: 0.5 });
    await animate(
      '#smallDescription',
      { y: 0, opacity: 1 },
      { delay: 0.15, duration: 0.7 },
    );
    await animate('#flourish', { opacity: 1 }, { delay: 0.8, duration: 1 });
  };

  useEffect(() => {
    animateEntrance();
  }, []);

  useEffect(() => {
    console.log('logo height', logoHeight);
    const windowHeight = window.innerHeight;
    setHeight(`${windowHeight - logoHeight - 60}px`);
  }, [logoHeight]);

  return (
    <motion.div
      layout
      ref={heroRef}
      className='relative h-full flex-col items-center justify-between px-4 xl:p-0'
      style={{ height }}
    >
      <div
        className='flex h-full w-full flex-col items-center justify-between'
        ref={scope}
      >
        <DescriptionList />
        {/* line */}
        <div className='flex h-full max-h-72 w-[1px] items-start overflow-hidden'>
          <motion.div
            initial={{ y: -400 }}
            id='line'
            className='h-full w-full bg-primary-400'
          ></motion.div>
        </div>
        <div id='smallDescription' className='translate-y-10 opacity-0'>
          <SmallDescription />
        </div>
        <div id='flourish' className='w-full opacity-0'>
          <Flourish />
        </div>
      </div>
    </motion.div>
  );
};
