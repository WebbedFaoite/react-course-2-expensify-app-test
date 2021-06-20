import { createStore } from 'redux';

// Action generators - functions that return action objects


const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

/*.
  There is no need for default values because we have
  required it for setCount, so we are going to force the
  user to provide that stuff.
*/
const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});


const resetCount = () => ({
  type: 'RESET'
});

/* REDUCERs:  */
//1. Reducers are Pure Functions
//2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

//CHALLENGE. REPLACE THIS 'RESET' OBJECT WITH A FUNCTION CALL
store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

//CHALLENGE. REPLACE THIS 'SET' OBJECT WITH A FUNCTION CALL
store.dispatch(setCount({count: 101}));
