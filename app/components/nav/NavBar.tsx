import { motion, useScroll, useTransform } from 'motion/react';
import { Svg } from '../Svg';

export const NavBar = () => {
  const { scrollYProgress } = useScroll();

  const width = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['100%', '50%', '10%'],
  );
  const top = useTransform(scrollYProgress, [0, 0.5, 1], ['50%', '50%', '50%']);
  const left = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['50%', '50%', '50%'],
  );

  return (
    <div className='fixed flex h-fit w-full items-center justify-center px-2 py-4'>
      <div className='relative w-full max-w-screen-xl'>
        <motion.div id='logo' style={{ width, top, left }} className=''>
          <Svg
            className='text-primary-200 h-full w-full max-w-screen-xl overflow-visible'
            src='/logoname.svg#logoname'
            title='Play'
            viewBox='0 0 1447 220'
          />
        </motion.div>
      </div>
    </div>
  );
};
