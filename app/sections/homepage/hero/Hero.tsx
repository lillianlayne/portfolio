import { useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';
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

  const { logoHeight } = useLogoHeight();
  const height = useTransform(
    bodyProgress,
    [0, 0.5, 1],
    [`100%`, `50%`, `fit-content`],
  );
  const lineHeight = useTransform(
    bodyProgress,
    [0, 0.5, 1],
    [`100%`, `50%`, `0%`],
  );
  const paddingTop = `${logoHeight - 80}px`;

  useEffect(() => {
    if (!heroRef.current) return;
    console.log(heroRef.current);
  }, [heroRef]);

  return (
    <div
      ref={heroRef}
      className='relative flex h-[90vh] min-h-min flex-col items-center justify-between gap-12'
    >
      <DescriptionList />
      {/* line */}
      <div className='h-full max-h-72 w-[1px]'>
        <div className='h-full w-full bg-primary-400'></div>
      </div>
      <SmallDescription />
      <Flourish />
    </div>
  );
};
