import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useHeroContext } from '~/lib/context';
import { useLogoHeight } from '~/lib/hooks';
import { DescriptionList, Flourish, SmallDescription } from './components';

export const Hero = () => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const { heroRef } = useHeroContext();
  const { scrollYProgress: bodyProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const [height, setHeight] = useState<string>('100vh');

  const { logoHeight } = useLogoHeight();
  // const height = useTransform(
  //   bodyProgress,
  //   [0, 0.5, 1],
  //   [`100%`, `50%`, `fit-content`],
  // );
  const lineHeight = useTransform(
    bodyProgress,
    [0, 0.5, 1],
    [`100%`, `50%`, `0%`],
  );
  const paddingTop = `${logoHeight - 80}px`;

  useEffect(() => {
    console.log('logo height', logoHeight);
    const windowHeight = window.innerHeight;
    setHeight(`${windowHeight - logoHeight - 60}px`);
  }, [logoHeight]);

  return (
    <motion.div
      layout
      ref={heroRef}
      className='relative flex h-full flex-col items-center justify-between'
      style={{ height }}
    >
      <DescriptionList />
      {/* line */}
      <div className='h-full max-h-72 w-[1px]'>
        <div className='h-full w-full bg-primary-400'></div>
      </div>
      <SmallDescription />
      <Flourish />
    </motion.div>
  );
};
