import type { MetaFunction } from '@remix-run/node';
import { Description, Hero } from '~/pages';

export const meta: MetaFunction = () => {
  return [
    { title: 'Lillian Layne' },
    {
      name: 'description',
      content: 'Lillian Layne | Frontend Designer & Developer',
    },
  ];
};

export default function Index() {
  return (
    <div className='flex h-full flex-col items-center px-4 xl:px-0'>
      <Hero />
      <div className='w-full max-w-screen-xl pt-8'>
        <Description />
      </div>
      <div className='h-screen'></div>
    </div>
  );
}
