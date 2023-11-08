import { IRoute } from 'types';
import Page404 from './Page404';
import { BasicLayout } from '@/layouts/BasicLayout';

export const Page404Route: IRoute = {
  path: '*',
  element: Page404,
  loader: () => null, //console.log('Async Loader function'),
  layout: BasicLayout,
};
