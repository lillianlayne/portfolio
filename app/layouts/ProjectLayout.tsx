import { useParams } from '@remix-run/react';
import classNames from 'classnames';

export const ProjectLayout = () => {
  const { id } = useParams();

  return (
    <div className='grid h-screen w-full grid-cols-1 grid-rows-6'>
      <div className='row-span-5 row-start-1 w-full bg-white/10' />
      <div className='container w-full border'>
        <div className=''>
          {id &&
            id.split('-').map((word, idx) => (
              <span
                className={classNames(
                  'capitalize',
                  idx === 0
                    ? 'font-mono font-light'
                    : 'font-serif font-thin italic',
                )}
                key={idx}
              >
                {word}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};
