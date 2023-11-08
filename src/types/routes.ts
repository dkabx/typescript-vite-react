// TODO Fix any types
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRoute {
  path: string;
  loader: () => null;
  element: any;
  layout: any;
}
export interface ISessionRouteWrapper {
  path: string;
  element: JSX.Element;
}
