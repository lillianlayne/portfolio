import type { MetaFunction } from '@remix-run/node';
import { Hero } from '~/pages';

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
    <div className='flex h-full flex-col items-center'>
      <Hero />
      <div className='h-screen'></div>
    </div>
  );
}
