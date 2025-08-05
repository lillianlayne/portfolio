import { useRef } from 'react';
import { useTextToFit } from '~/lib/hooks';

interface HeroImageProps {
  image: string;
  alt: string;
  project: string;
}

export const HeroImage = ({ image, alt, project }: HeroImageProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const titleSplit = project.split('-');
  const titleOne = titleSplit.shift();
  const titleTwo = titleSplit
    .slice(0, titleSplit.length)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const titleOneSize = useTextToFit(project || '');
  const titleTwoSize = useTextToFit(titleTwo || '');

  return (
    <div
      ref={textRef}
      className='grid max-h-screen auto-rows-fr grid-cols-1 grid-rows-9'
    >
      <div className='z-10 col-start-1 row-span-7 row-start-1 w-full overflow-hidden bg-white/10'>
        <img src={image} alt={alt + '-hero'} />
      </div>
      <div className='z-20 col-start-1 row-span-3 row-start-7 flex w-full items-baseline justify-center place-self-end capitalize'>
        <p
          className='fw-text-sans text-nowrap font-mono font-thin'
          style={{ scale: `${titleOneSize}%` }}
        >
          {titleOne}
          <span className='fw-text-serif font-serif font-thin italic'>
            {titleTwo}
          </span>
        </p>
      </div>
    </div>
  );
};
