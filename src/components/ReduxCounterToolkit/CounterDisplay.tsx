import { type } from "os";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/index-toolkit";


const CounterDisplay = () => {
  // with store from toolkit
  // here we extracted the counter info from store
  const counter = useSelector((state: any) => state.counter); // pass fuction to extract which data we need from store.
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(actions.increment()); // dispatch needs type
  }
  
  const decrementCounter = () => {
    dispatch(actions.decrement()); 
  }

  const incrementCounterBy5 = () => {
    dispatch(actions.incrementBy(5))
  }

  const decrementCounterBy5 = () => {
    dispatch(actions.decrementBy(5))
  }


  return <div>
    counter == { counter }
    <div>
      <button onClick={ incrementCounter }>Increment Counter</button>
      <button onClick={ decrementCounter }>Decrement Counter</button>
      <button onClick={ incrementCounterBy5 }>Increment By 5 Counter</button>
      <button onClick={ decrementCounterBy5 }>Decrement By 5 Counter</button>
    </div>
    <button>Toggle </button>
  </div>
}

export default CounterDisplay;
