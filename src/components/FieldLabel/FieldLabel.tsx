import { Typography } from 'components';

type Props = {
  title: string;
};

export const FieldLabel = ({ title }: Props) => {
  return (
    <div>
      <Typography className="text-xs font-medium text-black">
        {title}
        <span className="text-red">*</span>
      </Typography>
    </div>
  );
};
