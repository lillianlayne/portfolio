interface HeroImageProps {
  image: string;
  alt: string;
  project: string;
}

export const HeroImage = ({ image, alt, project }: HeroImageProps) => {
  const titleSplit = project.split('-');
  const titleOne = titleSplit.shift();
  const titleTwo = titleSplit.slice(0, 1).join(' ');
  return (
    <div className='grid max-h-screen auto-rows-fr grid-cols-1 grid-rows-9'>
      <div className='z-10 col-start-1 row-span-7 row-start-1 w-full overflow-hidden bg-white/10'>
        <img src={image} alt={alt + '-hero'} />
      </div>
      <div className='z-20 col-start-1 row-span-3 row-start-7 flex w-full items-baseline justify-center place-self-end capitalize'>
        <p className='fw-text-sans font-mono font-thin'>{titleOne}</p>
        <p className='fw-text-serif font-serif font-thin italic'>{titleTwo}</p>
      </div>
    </div>
  );
};
