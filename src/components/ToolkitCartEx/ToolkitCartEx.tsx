import { Provider } from "react-redux";
import { store } from "../../store/cart";

const ToolkitCartEx = () => {
  return <Provider store={ store }>
            <section>Cart</section>
         </Provider>
}

export default ToolkitCartEx;
