import { createBrowserRouter } from 'react-router-dom';

import { IRoute, ISessionRouteWrapper } from 'types';
import { HomeRoute } from 'views/home/Route';

import SessionWrapper from '@/route-wrapper/SessionWrapper';

// all routes can come here and we can use loader function to handle redirects if needed
// this is how: https://reactrouter.com/en/main/start/overview#redirects
const Routes: IRoute[] = [HomeRoute];

// TODO we should have a props check of what this function returns
function getRoutes(Routes: IRoute[]) {
  const routes: ISessionRouteWrapper[] = [];
  Routes.map((route) => {
    routes.push({
      path: route.path,
      element: <SessionWrapper {...route} />,
    });
  });
  return routes;
}

export default function routes() {
  return createBrowserRouter(getRoutes(Routes));
}
