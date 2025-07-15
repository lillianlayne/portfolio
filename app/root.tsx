import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import { useState } from 'react';
import { NavBar } from './components';
import { HeroProvider } from './lib/context';
import './tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  { rel: 'stylesheet', href: 'https://use.typekit.net/leh8ddi.css' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>('dark');
  return (
    <html lang='en' data-theme={theme}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body data-theme={theme}>
        <HeroProvider>
            <NavBar setTheme={setTheme} theme={theme} />
          <div className='pt-12'>{children}</div>
          <div className='h-96'></div>
        </HeroProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
