import { useSelector, useDispatch } from "react-redux";


const CounterDisplay = () => {
  // useSelector() // allows us to select a part of store
  // useStore() // selects entire store
  // useDispatch hook lets us dispatch an action from component to reducer fn to update store
  // when the component is unmounted then React reduc will clear the subscription automatically

  // here we extracted the counter info from store
  const counter = useSelector((state: any) => state.counter); // pass fuction to extract which data we need from store.
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({ type: 'increment' });
  }
  
  const decrementCounter = () => {
    dispatch({ type: 'decrement' });
  }

  return <div>
    counter == { counter }
    <div>
      <button onClick={ incrementCounter }>Increment Counter</button>
      <button onClick={ decrementCounter }>Decrement Counter</button>
    </div>
    <button>Toggle </button>
  </div>
}

export default CounterDisplay;
