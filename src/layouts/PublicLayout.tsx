import { Header } from 'components';

interface IPublicLayout {
  children?: string | JSX.Element | JSX.Element[];
}

export const PublicLayout = ({ children }: IPublicLayout) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
