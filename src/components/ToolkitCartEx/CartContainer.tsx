import { useSelector } from "react-redux";
import styles from './Cart.module.scss';

const CartContainer = () => {
   // cartItem is the parameter in store and the store is provided in parent component
   const { cartItems, amount, total } = useSelector((store: any) => store.cart)
   console.log(cartItems)

   return <section>
      <header>
        <h2>
          Your Bag
        </h2>
      </header>
   </section>

}

export default CartContainer
