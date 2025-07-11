import { motion, useScroll, useTransform } from 'motion/react';
import { RefObject } from 'react';
import { Svg } from '../Svg';

export const NavBar = ({
  reference,
}: {
  reference: RefObject<HTMLDivElement>;
}) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['start start', 'end center'],
  });

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
    <div className='fixed flex h-fit w-full max-w-screen-xl items-center justify-center px-2 py-4'>
      <div className='relative w-full'>
        <motion.div id='logo' style={{ width, top, left }}>
          <Svg
            className='h-full w-full max-w-screen-xl overflow-visible text-primary-200'
            src='/logoname.svg#logoname'
            title='Play'
            viewBox='0 0 1447 220'
          />
        </motion.div>
      </div>
      <div className='absolute right-0 top-0 flex gap-4 p-4'>
        {links.map((link, idx) => (
          <div key={`link-${idx}`}>{link.name}</div>
        ))}
      </div>
    </div>
  );
};

const links = [
  {
    name: (
      <p className='font-serif'>
        /Port<em>f</em>folio
      </p>
    ),
    link: '/',
  },
  {
    name: (
      <p className='font-serif'>
        /A<em>b</em>o<em>u</em>t
      </p>
    ),
    link: '/',
  },
  {
    name: (
      <p className='font-serif'>
        /Co<em>n</em>tact
      </p>
    ),
    link: '/',
  },
];
