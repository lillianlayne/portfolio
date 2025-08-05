import type { LoaderFunctionArgs } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import projectsData from '~/lib/data/projects.json';

export async function loader({}: LoaderFunctionArgs) {
  return { projects: projectsData };
}

export default function ProjectsRoute() {
  const { projects } = useLoaderData<typeof loader>();

  return <Outlet />;
}

export function ErrorBoundary() {
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-white'>
      <div className='text-center'>
        <h1 className='mb-4 text-2xl font-bold'>Something went wrong</h1>
        <p className='mb-4 text-gray-600'>
          Unable to load projects at this time.
        </p>
        <a href='/' className='text-blue-600 hover:underline'>
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
