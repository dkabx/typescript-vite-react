import { ButtonProps, CircularProgress } from '@mui/material';

interface Props extends ButtonProps {
  name: string;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  buttonStyle?: string;
}

const WrappedButton = ({
  name,
  type,
  onClick,
  isLoading,
  disabled,
  buttonStyle,
  ...rest
}: Props) => {
  return (
    <button
      type={type}
      className={
        buttonStyle ||
        `py-2 px-10 rounded-3xl capitalize w-36 focus:outline-none disabled:opacity-50
        max-w-xs maxll:px-2 maxll:py-1 ${
          type === 'submit'
            ? 'bg-secondary hover:bg-primary text-white'
            : 'bg-transparent border border-secondary hover:border-primary text-secondary hover:text-primary'
        }`
      }
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <div className="flex items-center justify-center">
        {isLoading && <CircularProgress color="inherit" size={20} />}
        {name}
      </div>
    </button>
  );
};

export default WrappedButton;
