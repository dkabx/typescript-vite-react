import { get } from 'lodash';
import { ERROR_MESSAGES } from '@/constants/common';

const errorMessageHandler = (err: unknown) => {
  const errorCode = get(err, 'response.data.message.code');
  if (errorCode && get(ERROR_MESSAGES, errorCode)) {
    return get(ERROR_MESSAGES, `${errorCode}.errorMessage`);
  }
  return errorCode || get(err, 'message');
};

export { errorMessageHandler };
