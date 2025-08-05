import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import { ProjectLayout } from '~/layouts';
import projectsData from '~/lib/data/projects.json';

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  if (!id) {
    throw new Response('Project ID is required', { status: 400 });
  }

  const project = projectsData.find((p) => p.project === id);

  if (!project) {
    throw new Response('Project not found', { status: 404 });
  }

  return { project };
}

export default function IndividualProjectRoute() {
  const { project } = useLoaderData<typeof loader>();
  const { id } = useParams();

  return <ProjectLayout />;
}

export function ErrorBoundary() {
  const params = useParams();

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-white'>
      <div className='text-center'>
        <h1 className='mb-4 text-2xl font-bold'>Project Not Found</h1>
        <p className='mb-4 text-gray-600'>
          The project "{params.id?.replaceAll('-', ' ')}" could not be found.
        </p>
        <a href='/projects' className='text-blue-600 hover:underline'>
          ← Back to Projects
        </a>
      </div>
    </div>
  );
}
