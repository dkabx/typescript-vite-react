import { PublicLayout } from '@/layouts/PublicLayout';
import { IRoute } from 'types';
import { Home } from 'views/home/Home';

export const HomeRoute: IRoute = {
  path: '/',
  element: Home,
  loader: () => null,
  layout: PublicLayout,
};
