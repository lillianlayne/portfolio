import { useState } from 'react';

export const useHeroRef = () => {
  const [heroRef, setHeroRef] = useState<HTMLDivElement>();

  return {
    heroRef,
    setHeroRef,
  };
};
