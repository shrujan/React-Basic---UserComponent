import { createSlice, configureStore } from '@reduxjs/toolkit';


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
    incrementBy(state, action: any) {
      state.counter = state.counter + action.count; // count is the action param which will be used in controller to dispatch action with payload
    },
    decrementBy(state, action: any) {
      state.counter = state.counter - action.count;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
})

// const initialState = {
//   counter: 0
// }

// const counterReducer = (state = initialState, action: any) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1
//     }
//   }

//   if (action.type === 'incrementBy') {
//     return {
//       counter: state.counter + action.count // count is the action param which will be used in controller to dispatch action with payload
//     }
//   }

//   if (action.type === 'decrementBy') {
//     return {
//       counter: state.counter - action.count // count is the action param which will be used in controller to dispatch action with payload
//     }
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1
//     }
//   }

//   return state
// }

// this will work - but there will be a problem as there can be only one slice reducer
// const store = createStore(counterSlice.reducer);

// makes merging multiple reducers easier
const store = configureStore({
  // reducer: counterSlice.reducer // pass global state slice's reducer
  reducer: { counter: counterSlice.reducer } // we can also pass map of reducers and it will get merged into one big reducer
})

export default store;
