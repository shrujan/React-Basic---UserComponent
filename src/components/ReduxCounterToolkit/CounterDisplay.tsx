import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/index-toolkit";
import { Fragment } from "react";


const CounterDisplay = () => {
  // with store from toolkit
  // here we extracted the counter info from store
  const counter     = useSelector((state: any) => state.counter); // pass fuction to extract which data we need from store.
  const showCounter = useSelector((state: any) => state.showCounter);
  
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

  const toggleCounter = () => {
    dispatch(actions.toggleCounter())
  }

  return <div className="redux-toolkit">
    showCounter == {showCounter}
    {
      showCounter && <Fragment>
        counter == { counter }
        <div>
          <button onClick={ incrementCounter }>Increment Counter</button>
          <button onClick={ decrementCounter }>Decrement Counter</button>
          <button onClick={ incrementCounterBy5 }>Increment By 5 Counter</button>
          <button onClick={ decrementCounterBy5 }>Decrement By 5 Counter</button>
        </div>
      </Fragment>
    }
      
    <button onClick={ toggleCounter }>Toggle</button>
  </div>
}

export default CounterDisplay;
