import { CircularProgress } from '@mui/material';

type Props = {
  size?: number;
};

const Loader = ({ size }: Props) => {
  return <CircularProgress color="primary" size={size} />;
};

export default Loader;
