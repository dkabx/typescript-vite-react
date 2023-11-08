export const AUTH_VERIFICATION = 'auth/AUTH-VERIFICATION';
export const AUTH_VERIFICATION_COMPLETE = 'user/AUTH-VERIFICATION-COMPLETE';
export const AUTH_VERIFICATION_LOADING = 'user/AUTH-VERIFICATION-LOADING';
export const AUTH_VERIFICATION_ERROR = 'user/AUTH-VERIFICATION-ERROR';

export const authVerification = (payload: Record<string, string>) => {
  return {
    type: AUTH_VERIFICATION,
    payload,
  };
};
