import { authApi, secureApi } from '@/apis/axiosCustom';
import { AuthVerificationPayload } from '@/redux-modules/auth/Types';

export const authUser = (payload: AuthVerificationPayload) =>
  authApi.post('/auth', payload);

export const postDetail = (payload: Record<string, string>) =>
  secureApi.post('/detail', payload);
