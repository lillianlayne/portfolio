import { useLocation } from '@remix-run/react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';
import { useHeroContext } from '~/lib/context';
import { Links } from './components/Links';
import { Logo } from './components/Logo';
import { ThemeToggle } from './components/ThemeToggle';

export const NavBar = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (val: string) => void;
}) => {
  const [layout, setLayout] = useState<'start' | 'end'>('start');
  const [scrollDirection, setScrollDirection] = useState<string>('up');

  const { heroRef } = useHeroContext();
  const { scrollY } = useScroll({ target: heroRef });
  const { pathname } = useLocation();

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious();
    if (!previous) return;
    const diff = current - previous;

    if (current === 0) setScrollDirection('up');
    if (diff > 0) {
      setScrollDirection('down');
    }
  });

  useEffect(() => {
    if (scrollDirection === 'up') {
      if (layout === 'start') return;
      setLayout('start');
      console.log(`layout: ${layout}`);
    } else {
      if (layout === 'end') return;
      setLayout('end');
      console.log(`layout: ${layout}`);
    }
  }, [scrollDirection]);

  const toggle = {
    start: {
      gridColumnStart: 1,
      justifySelf: 'start',
    },
    end: {
      gridColumnStart: 2,
      justifySelf: 'center',
    },
  };

  const logo = {
    start: {
      gridColumnStart: 1,
      justifySelf: 'center',
      gridRowStart: 2,
      gridColumn: 'span 3 / span 3',
      width: '100%',
    },
    end: {
      gridColumnStart: 1,
      justifySelf: 'start',
      gridRowStart: 1,
      gridColumn: 'span 1 / span 1',
      width: '92px',
    },
  };

  return pathname === '/' ? (
    <div className='sticky top-0 z-50 mx-auto grid w-full max-w-screen-xl grid-cols-3 gap-y-4 py-4'>
      {/* <div className='pointer-events-none absolute left-1/2 z-10 h-20 w-screen -translate-x-1/2 bg-gradient-to-b from-primary-600 via-primary-600 to-transparent'></div> */}
      <motion.div
        layout
        className='col-span-1 row-start-1 w-full'
        style={{
          gridColumnStart: logo[layout].gridColumnStart,
          justifySelf: logo[layout].justifySelf,
          gridColumn: logo[layout].gridColumn,
          gridRowStart: logo[layout].gridRowStart,
          width: logo[layout].width,
        }}
      >
        <Logo />
      </motion.div>
      <motion.div
        layout
        className='col-span-1 row-start-1'
        style={{
          gridColumnStart: toggle[layout].gridColumnStart,
          justifySelf: toggle[layout].justifySelf,
        }}
      >
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </motion.div>
      <div className='col-span-1 col-start-3 row-start-1 justify-self-end'>
        <Links />
      </div>
    </div>
  ) : (
    <div className='sticky top-0 z-50 mx-auto grid w-full max-w-screen-xl grid-cols-3 gap-y-4 py-4'>
      {/* <div className='pointer-events-none absolute left-1/2 z-10 h-20 w-screen -translate-x-1/2 bg-gradient-to-b from-primary-600 via-primary-600 to-transparent'></div> */}
      <div
        className='col-span-1 row-start-1 w-full'
        style={{
          gridColumnStart: logo.end.gridColumnStart,
          justifySelf: logo.end.justifySelf,
          gridColumn: logo.end.gridColumn,
          gridRowStart: logo.end.gridRowStart,
          width: logo.end.width,
        }}
      >
        <Logo />
      </div>
      <div
        className='col-span-1 row-start-1'
        style={{
          gridColumnStart: toggle.end.gridColumnStart,
          justifySelf: toggle.end.justifySelf,
        }}
      >
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
      <div className='col-span-1 col-start-3 row-start-1 justify-self-end'>
        <Links />
      </div>
    </div>
  );
};
