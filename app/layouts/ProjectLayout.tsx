import { useLoaderData } from '@remix-run/react';
import { Project } from '~/lib/types/project.types';
import { DescriptionBlock, HeroImage } from '~/sections';

export const ProjectLayout = () => {
  const { project: projectData } = useLoaderData<{ project: Project }>();
  const {
    project,
    tools,
    year,
    roles,
    descriptions,
    shortDescription,
    images,
    cardSettings,
  } = projectData;

  return (
    <div className='flex flex-col gap-20'>
      <div>
        <HeroImage
          image={images.featureImage}
          alt={project}
          project={project}
        />
      </div>
      <div className='container'>
        <DescriptionBlock {...projectData} />
      </div>
    </div>
  );
};
