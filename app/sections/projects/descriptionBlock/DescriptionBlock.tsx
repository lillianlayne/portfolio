import { Project } from '~/lib/types/project.types';

interface DescriptionBlockProps {}

export const DescriptionBlock = ({
  tools,
  year,
  roles,
  descriptions,
}: Project) => {
  return (
    <div className='flex gap-24'>
      <div className='w-[40%]'>
        <div className='w-full'>
          <p className='subhead'>tools</p>
          <div className='flex flex-wrap gap-2'>
            {tools.map((tool) => (
              <div className='rounded-full border border-primary-200 px-3 py-1 text-center text-sm uppercase leading-snug tracking-widest text-primary-100'>
                {tool}
              </div>
            ))}
          </div>
        </div>
        <div className='flex w-full items-end justify-between pt-4'>
          <div>
            <div>
              <p className='subhead'>Year</p>
              <p className='text-lg'>{year}</p>
            </div>
            <div className='pt-2'>
              <p className='subhead'>Duration</p>
              <p className='text-lg'>{year}</p>
            </div>
          </div>
          <div>
            <p className='subhead text-right'>Roles</p>
            <ul className='text-right'>
              {roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='flex w-[60%] flex-col gap-4'>
        {descriptions.map((description, idx) => (
          <p key={`description-${idx}`}>{description}</p>
        ))}
      </div>
    </div>
  );
};
