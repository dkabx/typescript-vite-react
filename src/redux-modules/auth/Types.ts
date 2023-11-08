type User = {
  displayName: string;
  email: string;
  role?: string;
  id?: string;
  userId: string;
};
export type AuthState = {
  authInProgress: boolean;
  user: User;
  authErrorMessage: string;
};

export type AuthVerificationPayload = {
  email: string | undefined;
  onSuccess: () => void;
};
export interface ISagaAction<T> {
  payload: T;
  type: string;
}
export type AuthLogType = {
  errorMessage: string;
  isLoading: false;
  successMessage: string;
};

export type AuthPayload = {
  user: User;
};

export type AuthAction = {
  type: string;
  payload?: AuthPayload;
};
