import { Link } from '@remix-run/react';
import settings from '../settings.json';
import { GitHubContribs } from './components/GitHubContribs';

export const Introduction = () => {
  const { bodyCopy1, bodyCopy2 } = settings.description;

  return (
    <div className='w-full'>
      <div>
        <div className='flex items-baseline justify-start gap-3'>
          <p className='font-mono text-sm uppercase tracking-wide text-primary-400'>
            my mission
          </p>
          <h2>
            <span>Thriving</span> at
          </h2>
        </div>
        <h2>
          the intersection of <span>beautiful</span> user experiences
        </h2>
        <h2>
          <span>& clean</span> functional code.
        </h2>
      </div>
      <div className='grid grid-cols-12 gap-8 pt-8'>
        <div className='col-span-5'>
          <GitHubContribs />
          <Link
            to={'/'}
            className='underline-btn border-primary-300 pt-2 font-mono text-sm font-thin italic tracking-wide text-primary-300'
          >
            GitHub Contributions
          </Link>
        </div>
        <p className='col-span-3 col-start-7 text-base font-light text-primary-300'>
          {bodyCopy1}
        </p>
        <p className='col-span-3 col-start-10 text-base font-light text-primary-300'>
          {bodyCopy2}
        </p>
      </div>
    </div>
  );
};
