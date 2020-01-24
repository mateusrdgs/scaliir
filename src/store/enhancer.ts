import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import devtools from './devtools';

const enhancer = compose(
  applyMiddleware(thunk),
  devtools,
);

export default enhancer;
