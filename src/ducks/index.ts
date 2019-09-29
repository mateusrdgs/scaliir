import { combineReducers } from 'redux';

import counter from './counter';
import requests from './requests';

const rootReducer = combineReducers({
  counter,
  requests
});

export default rootReducer;
