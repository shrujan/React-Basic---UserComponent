import { legacy_createStore as createStore} from 'redux';

const initialState = {
  counter: 0
}

const counterReducer = (state = initialState, action: any) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === 'incrementBy') {
    return {
      counter: state.counter + action.count // count is the action param which will be used in controller to dispatch action with payload
    }
  }

  if (action.type === 'decrementBy') {
    return {
      counter: state.counter - action.count // count is the action param which will be used in controller to dispatch action with payload
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }

  return state
}

const store = createStore(counterReducer);

export default store;
