import classNames from 'classnames';
import { motion } from 'motion/react';
import settings from '../settings.json';

export const DescriptionList = () => {
  const { titleList } = settings.hero;

  return (
    <ul className='flex w-full max-w-sm flex-col items-center justify-between'>
      {titleList.map((title, idx) => (
        <li
          key={title}
          className={classNames(
            'w-full overflow-hidden text-2xl font-semibold tracking-tight text-primary-300',
            idx === 0 && 'text-center',
            idx === 1 && 'text-left',
            idx === 2 && 'text-right',
          )}
        >
          <motion.h1 id={`description-${idx}`} initial={{ y: 40 }}>
            <span className='translate-y-10 font-serif text-sm font-light italic tracking-wide'>
              (0{idx + 1})
            </span>{' '}
            {title}
          </motion.h1>
        </li>
      ))}
    </ul>
  );
};

export const SmallDescription = () => {
  const { mainDescription } = settings.hero;

  return (
    <div className='max-w-screen-sm pb-12'>
      <p className='text-balance text-center text-base text-primary-300'>
        {mainDescription}
      </p>
    </div>
  );
};

export const Flourish = () => {
  const { location, experience } = settings.hero;

  return (
    <div className='flex w-full items-center justify-between'>
      <p className='font-serif font-thin italic tracking-wide text-primary-400'>
        {location}
      </p>
      <p className='font-serif font-thin italic tracking-wide text-primary-400'>
        {experience}
      </p>
    </div>
  );
};
