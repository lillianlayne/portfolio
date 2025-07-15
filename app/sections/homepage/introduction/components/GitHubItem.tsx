import classNames from 'classnames';
import { useEffect, useState } from 'react';

export const GitHubItem = ({
  total,
  max,
  min,
  chunks,
  date,
}: {
  total: number;
  max: number;
  min: number;
  chunks: number[][];
  date: string;
}) => {
  const bgColor = 'bg-primary-100';
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    if (total === 0) {
      setColor('0');
    } else {
      const rangeIndex = chunks.findIndex((chunk) => chunk.includes(total)) + 1;
      setColor(`${rangeIndex + rangeIndex}0`);
    }
  }, [chunks]);

  // opacity-10 opacity-20 opacity-30 opacity-40 opacity-50 opacity-60 opacity-70 opacity-80 opacity-90

  return (
    <div className='relative aspect-square h-full w-full overflow-hidden rounded-[1.5px] bg-[var(--gh-cell)]'>
      <div
        className={classNames(
          'aspect-square h-full w-full rounded-[1.5px] text-center',
          color === '0' ? 'bg-transparent' : `bg-accent-green opacity-${color}`,
        )}
      ></div>
    </div>
  );
};
