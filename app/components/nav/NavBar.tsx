import { Links } from './components/Links';
import { Logo } from './components/Logo';
import { ThemeToggle } from './components/ThemeToggle';

export const NavBar = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (val: string) => void;
}) => {
  return (
    <div className='sticky top-0 z-50 mx-auto grid w-full max-w-screen-xl grid-cols-3 py-4'>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      {/* <div className='pointer-events-none absolute left-1/2 z-10 h-20 w-screen -translate-x-1/2 bg-gradient-to-b from-primary-600 via-primary-600 to-transparent'></div> */}
      <Logo />
      <Links />
    </div>
  );
};
