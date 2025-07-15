import { Hero, Introduction, SelectedWorks } from '~/sections';

export const HomePageLayout = () => {
  // return <ScrollShrinkingSticky></ScrollShrinkingSticky>;
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-start gap-12'>
      <div className='relative w-full max-w-screen-xl'>
        <Hero />
      </div>
      <div className='max-w-screen-xl'>
        <Introduction />
      </div>
      <div className='w-full max-w-screen-xl'>
        <SelectedWorks />
      </div>
      <div className='h-screen'></div>
      <div className='h-screen'></div>
      <div className='h-screen'></div>
    </div>
  );
};
