import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { AuthReducer } from '../auth';

// create a root reducer
const rootReducer = (history: History) =>
  combineReducers({
    Auth: AuthReducer,
    router: connectRouter(history),
  });

export default rootReducer;
