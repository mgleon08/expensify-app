import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const setCount = ({ count }) => ({
  type: 'SET',
  count,
});

const resetCount = () => ({
  type: 'RESET',
});
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
      };
    case 'DECREMENT':
      // const decrementBy =
      // typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy,
      };
    case 'SET':
      return {
        count: action.count,
      };
    case 'RESET':
      return {
        count: 0,
      };
    default:
      return state;
  }
});

// return function 可以解除監聽 state
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 3 }));
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(resetCount());
store.dispatch(setCount({ count: 101 }));
