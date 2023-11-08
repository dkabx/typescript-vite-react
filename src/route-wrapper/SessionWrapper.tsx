import { useEffect } from 'react';

import { IRoute } from '@/types';

type RouteWrapper = IRoute;

const SessionWrapper = ({
  layout: Layout,
  element: Component,
  ...props
}: RouteWrapper) => {
  useEffect(() => {
    // check user session and redirect user accordingly
  }, []);

  const RouteWrapper = (
    <Layout>
      <Component {...props} />
    </Layout>
  );
  return RouteWrapper;
};

export default SessionWrapper;
