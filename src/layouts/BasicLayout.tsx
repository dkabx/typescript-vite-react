import { Header } from 'components';

interface IBasicLayout {
  children?: string | JSX.Element | JSX.Element[];
}

export const BasicLayout = ({ children }: IBasicLayout) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
