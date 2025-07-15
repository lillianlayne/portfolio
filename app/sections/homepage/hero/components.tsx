import classNames from 'classnames';
import settings from '../settings.json';

export const DescriptionList = () => {
  const { titleList } = settings.hero;

  return (
    <div className='flex w-full max-w-sm flex-col items-center justify-between'>
      {titleList.map((title, idx) => (
        <h1
          key={title}
          className={classNames(
            'w-full text-2xl font-semibold tracking-tight text-primary-300',
            idx === 0 && 'text-center',
            idx === 1 && 'text-left',
            idx === 2 && 'text-right',
          )}
        >
          <span className='font-serif text-sm font-light italic tracking-wide'>
            (0{idx + 1})
          </span>{' '}
          {title}
        </h1>
      ))}
    </div>
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
