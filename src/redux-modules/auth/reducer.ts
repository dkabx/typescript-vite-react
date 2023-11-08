import {
  AUTH_VERIFICATION,
  AUTH_VERIFICATION_COMPLETE,
  AUTH_VERIFICATION_ERROR,
  AUTH_VERIFICATION_LOADING,
} from './Actions';
import { AuthAction, AuthState } from './Types';

export const authInitialState: AuthState = {
  authInProgress: false,
  user: { displayName: '', email: '', role: '', id: '', userId: '' },
  authErrorMessage: '',
};

export default (state = authInitialState, action: AuthAction) => {
  const { type } = action;
  switch (type) {
    case AUTH_VERIFICATION:
      return {
        ...state,
        authInProgress: true,
      };

    case AUTH_VERIFICATION_LOADING:
      return {
        ...state,
        authInProgress: true,
      };
    case AUTH_VERIFICATION_COMPLETE:
      return {
        ...state,
        user: action.payload,
        authInProgress: false,
      };
    case AUTH_VERIFICATION_ERROR:
      return {
        ...state,
        authInProgress: false,
        authErrorMessage: action.payload,
      };

    default:
      return state;
  }
};
