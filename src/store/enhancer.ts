import { compose } from 'redux';

import devtools from './devtools';

const enhancer = compose(
  devtools,
);

export default enhancer;
