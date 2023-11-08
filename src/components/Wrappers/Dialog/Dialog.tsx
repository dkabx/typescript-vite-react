import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode } from 'react';
import { DialogActions } from '@mui/material';
import { Button } from '@/components';

type Props = {
  open: boolean;
  handleClose: () => void;
  title: string;
  children: ReactNode;
  isLoading?: boolean;
  submitButtonTitle?: string;
  cancelButtonTitle?: string;
  onSubmit: () => void;
};

function MyDialog({
  open,
  handleClose,
  title,
  children,
  isLoading,
  onSubmit,
  submitButtonTitle,
  cancelButtonTitle,
}: Props) {
  return (
    <Dialog
      open={open}
      maxWidth={'xl'}
      onClose={() => {
        handleClose();
      }}
      classes={{ paper: 'w-550' }}
    >
      <DialogTitle
        className="flex justify-between items-center  font-semibold border border-y-2"
        style={{ padding: 10 }}
      >
        <div className="font-semibold maxll:text-base">{title}</div>
        <IconButton
          aria-label="Close"
          className=""
          onClick={handleClose}
          sx={{ padding: 0 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        style={{
          padding: 10,
          borderBottom: '2px solid gray',
          borderRadius: '4px',
        }}
      >
        {children}
      </DialogContent>
      <DialogActions
        style={{
          padding: 10,
        }}
      >
        <Button
          name={cancelButtonTitle || 'cancel'}
          onClick={() => handleClose()}
          isLoading={isLoading}
          disabled={isLoading}
        />
        <Button
          type="submit"
          name={submitButtonTitle || 'submit'}
          onClick={() => onSubmit()}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </DialogActions>
    </Dialog>
  );
}

export default MyDialog;
