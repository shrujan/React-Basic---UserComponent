import { useSelector } from "react-redux";
import styles from './Cart.module.scss';
import { CartItem } from "./CartItem";

const CartContainer = () => {
   // cartItem is the parameter in store and the store is provided in parent component
   const { cartItems, amount, total } = useSelector((store: any) => store.cart)
   console.log(cartItems)

   if (amount < 1) {
    return <section className={ styles['cart'] }>
        <header>
          <h2>
            Your Bag
          </h2>
          <h4 className={ styles['empty-cart'] }>Your bag is empty</h4>
        </header>
      </section>
   }

   return <section className={ styles['cart'] }>
    <header>
      <h2>Your Bag</h2>
    </header>
    <div>
      { cartItems.map((item: any) => {
         <CartItem title={ item.title }></CartItem>
      }) }
    </div>

   </section>
   

}

export default CartContainer
