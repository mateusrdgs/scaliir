import { combineReducers } from 'redux';

import counter, { CounterState } from './counter';

export interface State {
  counter: CounterState;
}

export default combineReducers<State>({
  counter,
});
