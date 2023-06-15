import { useSelector } from "react-redux";


const CounterDisplay = () => {
  // useSelector() // allows us to select a part of store
  // useStore() // selects entire store
  // when the component is unmounted then React reduc will clear the subscription automatically

  // here we extracted the counter info from store
  const counter = useSelector((state: any) => state.counter); // pass fuction to extract which data we need from store.

  return <div>
    counter == { counter }
    <button>Toggle </button>
  </div>
}

export default CounterDisplay;
