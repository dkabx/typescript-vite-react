import { ReactNode } from 'react';
import { Typography } from '@mui/material';

interface props {
  children?: ReactNode;
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'
    | undefined;
  className?: string;
  errorText?: string;
  errorTextStyles?: string;
}

const WrappedTypography = ({
  children,
  type,
  className,
  errorText,
  errorTextStyles,
}: props) => {
  return (
    <div>
      <Typography variant={type} className={className}>
        {children}
      </Typography>
      {errorText && (
        <Typography className={errorTextStyles}>{errorText}</Typography>
      )}
    </div>
  );
};

export default WrappedTypography;
