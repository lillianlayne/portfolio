import classNames from 'classnames';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (val: string) => void;
}) => {
  return (
    <div className='z-20 flex gap-1 place-self-start rounded-full border border-primary-400 bg-primary-600 p-[1px]'>
      <button
        className={classNames(
          'flex aspect-square h-4 items-center justify-center rounded-full p-1',
          theme === 'light'
            ? 'bg-primary-100 text-primary-600'
            : 'bg-transparent',
        )}
        type='button'
        onClick={() => {
          setTheme('light');
        }}
      >
        <Sun size={12} className='fill-current' />
      </button>
      <button
        className={classNames(
          'flex aspect-square h-4 items-center justify-center rounded-full p-1',
          theme === 'dark'
            ? 'bg-primary-100 text-primary-600'
            : 'bg-transparent',
        )}
        type='button'
        onClick={() => {
          setTheme('dark');
        }}
      >
        <Moon size={12} className='fill-current' />
      </button>
    </div>
  );
};
