import { ReactNode } from 'react';
import { BoxProps, Box } from '@mui/system';

interface props extends BoxProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => null;
}

const WrappedBox = ({ children, className, onClick }: props) => {
  return (
    <Box className={className} onClick={onClick}>
      {children}
    </Box>
  );
};

export default WrappedBox;
