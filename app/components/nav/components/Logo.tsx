import { Svg } from '~/components/Svg';

export const Logo = () => {
  // const { heroRef } = useHeroContext();
  // const { scrollYProgress } = useScroll({
  //   target: heroRef,
  //   offset: ['start start', 'end start'],
  // });

  // const maxWidth = useTransform(scrollYProgress, [0, 1], ['1280px', '96px']);
  // const paddingTop = useTransform(scrollYProgress, [0, 1], ['32px', '0px']);

  return (
    <div className='h-fit w-full overflow-visible'>
      <div id='logo' className='h-full w-full'>
        <Svg
          className='w-full overflow-visible text-primary-100'
          src='/logoname.svg#logoname'
          title='Play'
          viewBox='0 0 1447 220'
        />
      </div>
    </div>
  );
};
