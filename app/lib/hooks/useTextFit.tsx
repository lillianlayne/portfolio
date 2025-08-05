import { useEffect, useRef, useState } from 'react';

export function useTextToFit(text: string) {
  const [fontSize, setFontSize] = useState(16);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const useTextFit = (ref: React.RefObject<HTMLElement>) => {};

  useEffect(() => {
    if (!text) return;

    if (!canvasRef.current) {
      canvasRef.current = document.createElement('canvas');
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const calculateFontSize = () => {
      const screenWidth = window.innerWidth;
      let testFontSize = 100;

      if (!context) return;
      context.font = `${testFontSize}px`;
      let textWidth = context.measureText(text).width;

      const targetWidth = screenWidth * 0.95;
      const scaleFactor = targetWidth / textWidth;
      const finalFontSize = testFontSize * scaleFactor;

      console.log({ targetWidth, scaleFactor, finalFontSize });

      setFontSize(scaleFactor * 6);
    };

    calculateFontSize();

    window.addEventListener('resize', calculateFontSize);
    return () => window.removeEventListener('resize', calculateFontSize);
  }, [text]);

  return fontSize;
}
