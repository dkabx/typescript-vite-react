export type LOADING = 'LOADING';
export type SUCCESS = 'SUCCESS';
export type FAILURE = 'FAILURE';

export type SampleType = {
  label: string;
  value: string;
};

export interface IUser {
  token: string | undefined;
  onSuccess: () => void;
}
