export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const CLIENT_ID = 'client_id';

export const fontFamily = 'Museo Sans Cyrl Medium';

export const requiredConstant = 'This field is required';

export const ERROR_MESSAGES = {
  ERROR_CODE_1: {
    httpCode: 200,
    errorMessage: 'Validation failure.',
  },

  ERROR_CODE_2: {
    httpCode: 500,
    errorMessage:
      'Any internal error or network failure while connection to external services',
  },
  ERROR_CODE_3: {
    httpCode: 401,
    errorMessage: 'JWT not valid or JWT Missing',
  },
  ERROR_CODE_4: {
    httpCode: 400,
    errorMessage: 'Mandatory Params missing in Req',
  },
  ERROR_CODE_5: {
    httpCode: 200,
    errorMessage: 'Verification Code Invalid',
  },
  ERROR_CODE_6: {
    httpCode: 200,
    errorMessage: 'Verification Code Expired',
  },
  ERROR_SOMETHING_WENT_WRONG: {
    httpCode: 200,
    errorMessage: 'Something went wrong',
  },
};
