import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';

export async function loader({ context, params }: LoaderFunctionArgs) {
  return {};
}
export async function action({ context, params }: ActionFunctionArgs) {
  return {};
}

export default function AboutRoute() {
  return (
    <div>
      <div></div>
    </div>
  );
}
