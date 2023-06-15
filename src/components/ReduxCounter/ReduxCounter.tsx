

// create old (depricated) redux example and wrap this component with redux store

import { Provider } from "react-redux";
import store from "../../store/index";
import CounterDisplay from "./CounterDisplay";

const ReduxCounter = () => {

  return (
    <Provider store={ store }>
      <section>
        <CounterDisplay />
      </section>
    </Provider>
  )
}

export default ReduxCounter;
