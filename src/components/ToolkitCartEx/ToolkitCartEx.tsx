import { Provider } from "react-redux";
import { store } from "../../store/cart";
import Cart from "./Cart";

const ToolkitCartEx = () => {
  return <Provider store={ store }>
            <section>
              <Cart />
            </section>
         </Provider>
}

export default ToolkitCartEx;
