import { Snackbar, SnackbarProps } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface ReusableSnackbarProps extends SnackbarProps {
  message: string;
  severity?: AlertProps['severity'];
  autoHideDuration?: number;
  handleClose?: () => void;
}

const WrappedSnackbar = ({
  message,
  open,
  severity = 'info',
  autoHideDuration = 3000,
  handleClose,
  ...snackbarProps
}: ReusableSnackbarProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      {...snackbarProps}
    >
      <MuiAlert onClose={handleClose} severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default WrappedSnackbar;
