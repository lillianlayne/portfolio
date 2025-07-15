import { createContext, RefObject, useContext, useRef } from 'react';

interface HeroRefType {
  heroRef: RefObject<HTMLDivElement>;
}
const HeroContext = createContext<HeroRefType | null>(null);

const useHeroContext = (): HeroRefType => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error('useSharedRef must be used within a RefProvider');
  }
  return context;
};

const HeroProvider = ({ children }: { children: React.ReactNode }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  const contextValue: HeroRefType = { heroRef };

  return (
    <HeroContext.Provider value={contextValue}>{children}</HeroContext.Provider>
  );
};

export { HeroProvider, useHeroContext };
