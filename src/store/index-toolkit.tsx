import { createSlice, configureStore } from '@reduxjs/toolkit';

interface ByAction {
  payload: number;
}

// createSlice - more powerfull than createReducer

const initialState = {
  counter: 0,
  showCounter: true
}

// every slice needs name, initial state and reducers
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      // we can mutate the state because toolkit has emmer and internally clones object and creates new state
      state.counter++
    },
    decrement(state) {
      // we can mutate the state because toolkit has emmer and internally clones object and creates new state
      state.counter--
    },
    incrementBy(state, action: ByAction) {
      state.counter = state.counter + action.payload; // count is the action param which will be used in controller to dispatch action with payload
    },
    decrementBy(state, action: ByAction) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
})


// this will work - but there will be a problem as there can be only one slice reducer
// const store = createStore(counterSlice.reducer);

// makes merging multiple reducers easier
const store = configureStore({
  // reducer: counterSlice.reducer // pass global state slice's reducer
  reducer: { counter: counterSlice.reducer } // we can also pass map of reducers and it will get merged into one big reducer
})

export const actions = counterSlice.actions;

export default store;
