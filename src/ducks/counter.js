import { handleActions } from 'redux-actions';

export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

const initialState = {
  counter: 0,
};

const reducer = handleActions({
  INCREMENT: ({ counter, ...state }) => {
    return {
      ...state,
      counter: counter + 1,
    };
  },
  DECREMENT: ({ counter, ...state }) => {
    return {
      ...state,
      counter: counter - 1,
    };
  },
}, initialState);

export default reducer;
