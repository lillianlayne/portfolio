import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Svg } from '~/components/Svg';
import { useHeroContext } from '~/lib/context';

export const Logo = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const { heroRef } = useHeroContext();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const maxWidth = useTransform(scrollYProgress, [0, 1], ['1280px', '96px']);
  const paddingTop = useTransform(scrollYProgress, [0, 1], ['32px', '0px']);

  return (
    <div className='z-30 col-span-1 col-start-2 h-fit w-full justify-self-center overflow-visible'>
      <motion.div
        ref={logoRef}
        id='logo'
        className='h-full w-full max-w-screen-xl -translate-x-1/2 pt-8'
        style={{ maxWidth, paddingTop }}
      >
        <Svg
          className='w-full overflow-visible text-primary-100'
          src='/logoname.svg#logoname'
          title='Play'
          viewBox='0 0 1447 220'
        />
      </motion.div>
    </div>
  );
};
