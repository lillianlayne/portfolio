import { useEffect, useState } from 'react';

export const useLogoHeight = () => {
  const [logoHeight, setLogoHeight] = useState<number>(70);

  const getLogoHeight = () => {
    const logo = document.querySelector('#logo');

    if (!logo) return;

    const height = logo.getBoundingClientRect().height;
    setLogoHeight(height * 1.5);
  };

  useEffect(() => {
    getLogoHeight();
    window.addEventListener('resize', getLogoHeight);

    return () => {
      window.removeEventListener('resize', getLogoHeight);
    };
  }, []);

  return { logoHeight };
};
