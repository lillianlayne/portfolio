import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';
import { HomePageLayout } from '~/layouts';
import { gitHubContributions } from '~/lib/apis/gitHubContributions';

export const meta: MetaFunction = () => {
  return [
    { title: 'Lillian Layne' },
    {
      name: 'description',
      content: 'Lillian Layne | Frontend Designer & Developer',
    },
  ];
};

export async function loader({ context, request, params }: LoaderFunctionArgs) {
  const ghContributions = await gitHubContributions();

  return { ghContributions };
}

export default function Index() {
  const { ghContributions } = useLoaderData<typeof loader>();

  useEffect(() => {
    console.log(ghContributions);
  }, []);

  return <HomePageLayout />;
}
