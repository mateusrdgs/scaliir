import { createStore } from 'redux';

import rootReducer from 'ducks';
import enhancer from './enhancer';

const startStore = () => {
  const store = createStore(
    rootReducer,
    {},
    enhancer,
  );
  return store;
};

export default startStore;
