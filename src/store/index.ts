import { createStore, Store } from 'redux';

import rootReducer from 'ducks';
import enhancer from './enhancer';

const startStore = (): Store => {
  const store = createStore(
    rootReducer,
    {},
    enhancer,
  );
  return store;
};

export default startStore;
