import { handleActions } from 'redux-actions';

const INCREMENT = '[Counter] INCREMENT';
const DECREMENT = '[Counter] DECREMENT';
const RESET = '[Counter] RESET';

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}
interface ResetAction {
  type: typeof RESET;
}

export interface CounterState {
  value: number;
}

export default handleActions<CounterState>(
  {
    [INCREMENT]: ({ value, ...state }) => {
      return {
        ...state,
        value: value + 1,
      };
    },
    [DECREMENT]: ({ value, ...state }) => {
      return {
        ...state,
        value: value - 1,
      };
    },
    [RESET]: state => {
      return {
        ...state,
        value: 0,
      };
    },
  },
  { value: 0 },
);

export const increment = (): IncrementAction => {
  return {
    type: INCREMENT,
  };
};

export const decrement = (): DecrementAction => {
  return {
    type: DECREMENT,
  };
};

export const reset = (): ResetAction => {
  return {
    type: RESET,
  };
};
